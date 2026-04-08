import type {
  FlowState,
  CalculationResult,
  DataType,
  DataTypeResult,
  CountryComparisonEntry,
} from "@/types";
import { platforms } from "@/data/platforms";
import { getCountry, referenceCountries, type Region } from "@/data/countries";
import { interestMultipliers } from "@/data/interests";

// Source: WordStream/Revealbot industry CPM benchmarks, advertiser bid data.
// 35-54 is the most valuable demographic (highest purchasing power + digital engagement).
// Teens are restricted by COPPA/regulations. Tier 3 estimates.
const ageMultipliers: Record<string, number> = {
  "13-17": 0.5,    // COPPA restrictions, limited ad targeting
  "18-24": 0.85,   // High engagement, lower purchasing power
  "25-34": 1.0,    // Baseline
  "35-44": 1.2,    // Peak purchasing power + engagement
  "45-54": 1.3,    // Highest purchasing power
  "55-64": 1.1,    // High income, declining digital engagement
  "65+": 0.8,      // Lower digital engagement + ad spend targeting
};

// Source: Tenjin/Liftoff mobile benchmarks 2024.
// iOS CPMs are 2-3x higher than Android (higher purchasing power + ATT scarcity).
// Desktop falls between the two. Tier 3 estimates.
const deviceMultipliers: Record<string, number> = {
  ios: 1.3,       // 2-3x Android CPMs → normalized multiplier
  android: 0.8,   // Lower CPMs globally
  desktop: 1.0,   // Baseline
};

const ageMidpoints: Record<string, number> = {
  "13-17": 15,
  "18-24": 21,
  "25-34": 30,
  "35-44": 40,
  "45-54": 50,
  "55-64": 60,
  "65+": 70,
};

const dataTypeLabels: Record<DataType, string> = {
  location: "Location Data",
  browsing: "Browsing Habits",
  purchase_intent: "Purchase Intent",
  social_graph: "Social Graph",
};

// Platform families — these share the same parent ARPU pool.
// When multiple platforms from the same family are selected,
// their combined value is capped at the parent's total ARPU.
const platformFamilies: Record<string, string[]> = {
  meta: ["facebook", "instagram", "whatsapp", "messenger", "threads", "metaai"],
  alphabet: ["google", "youtube", "gemini"],
  amazon_family: ["amazon", "primevideo", "twitch"],
  match: ["tinder", "hinge"],
  paypal_family: ["paypal", "venmo"],
  xai: ["grok"], // shares X/Twitter data but separate company
};

// The base ARPU represents what the PLATFORM earns per user.
// Your DATA's value is a fraction of that — the platform captures most value
// through their ad infrastructure, sales teams, and targeting algorithms.
// Industry estimates: raw data value ≈ 20% of platform ARPU.
// Source: Various academic papers on "value of personal data" + FTC data broker reports.
const DATA_VALUE_FRACTION = 0.20;

function countryToRegion(code: string | null): Region {
  if (!code) return "na";
  const country = getCountry(code);
  return country?.region ?? "na";
}

function computeInterestMultiplier(selectedInterests: string[]): number {
  if (selectedInterests.length === 0) return 1.0;
  const product = selectedInterests.reduce(
    (acc, i) => acc * (interestMultipliers[i] ?? 1.0),
    1
  );
  return Math.pow(product, 1 / selectedInterests.length);
}

function computeForRegion(
  state: FlowState,
  region: Region
): number {
  const ageMult = ageMultipliers[state.ageRange ?? "25-34"] ?? 1.0;
  const devMult = deviceMultipliers[state.device ?? "ios"] ?? 1.0;
  const intMult = computeInterestMultiplier(state.interests);

  let total = 0;
  for (const id of state.selectedPlatforms) {
    const platform = platforms.find((p) => p.id === id);
    if (!platform) continue;
    const base = platform.arpu[region];
    total += base * ageMult * devMult * intMult * DATA_VALUE_FRACTION;
  }
  return total;
}

export function calculate(state: FlowState): CalculationResult {
  const region = countryToRegion(state.country);
  const ageMult = ageMultipliers[state.ageRange ?? "25-34"] ?? 1.0;
  const devMult = deviceMultipliers[state.device ?? "ios"] ?? 1.0;
  const intMult = computeInterestMultiplier(state.interests);

  const rawResults = state.selectedPlatforms
    .map((id) => {
      const platform = platforms.find((p) => p.id === id);
      if (!platform) return null;
      const base = platform.arpu[region];
      const annualValue = base * ageMult * devMult * intMult * DATA_VALUE_FRACTION;
      return { platform, annualValue };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  // Cap platform families — selecting FB+IG shouldn't exceed Meta's total ARPP
  // The individual platform ARPUs already represent portions of the family total,
  // but when all are selected the sum can overshoot. Cap at family-level max.
  const familyTotals = new Map<string, number>();
  const familyCaps = new Map<string, number>();

  for (const [family, members] of Object.entries(platformFamilies)) {
    const selected = rawResults.filter((r) => members.includes(r.platform.id));
    if (selected.length <= 1) continue;
    const sum = selected.reduce((s, r) => s + r.annualValue, 0);
    const maxMember = Math.max(...selected.map((r) => r.annualValue));
    // Family cap: largest member × 1.3 (some additive value, but not fully stacked)
    const cap = maxMember * 1.3;
    if (sum > cap) {
      familyTotals.set(family, sum);
      familyCaps.set(family, cap);
    }
  }

  const platformResults = rawResults.map((r) => {
    for (const [family, members] of Object.entries(platformFamilies)) {
      if (members.includes(r.platform.id) && familyTotals.has(family)) {
        const ratio = familyCaps.get(family)! / familyTotals.get(family)!;
        return { ...r, annualValue: r.annualValue * ratio };
      }
    }
    return r;
  });

  const totalAnnual = platformResults.reduce(
    (sum, p) => sum + p.annualValue,
    0
  );

  const sortedPlatforms = platformResults
    .map((p) => ({
      ...p,
      proportion: totalAnnual > 0 ? p.annualValue / totalAnnual : 0,
    }))
    .sort((a, b) => b.annualValue - a.annualValue);

  // Aggregate data type breakdown
  const typeAccum: Record<DataType, number> = {
    location: 0,
    browsing: 0,
    purchase_intent: 0,
    social_graph: 0,
  };

  for (const pr of platformResults) {
    for (const dt of pr.platform.dataTypes) {
      typeAccum[dt.type] += pr.annualValue * dt.weight;
    }
  }

  const dataTypeBreakdown: DataTypeResult[] = (
    Object.keys(typeAccum) as DataType[]
  )
    .map((type) => ({
      type,
      label: dataTypeLabels[type],
      dollarValue: typeAccum[type],
      percentage: totalAnnual > 0 ? (typeAccum[type] / totalAnnual) * 100 : 0,
    }))
    .sort((a, b) => b.percentage - a.percentage);

  // Country comparison
  const userCountryCode = state.country ?? "US";
  const comparisonCodes = [
    ...new Set([userCountryCode, ...referenceCountries]),
  ].slice(0, 5);

  const countryComparison: CountryComparisonEntry[] = comparisonCodes.map(
    (code) => {
      const c = getCountry(code);
      const r = c?.region ?? "na";
      const value = computeForRegion(state, r);
      return {
        country: c?.name ?? code,
        flag: c?.flag ?? "🌍",
        value,
        isUser: code === userCountryCode,
      };
    }
  );

  countryComparison.sort((a, b) => b.value - a.value);

  // Lifetime projection
  const currentAge = ageMidpoints[state.ageRange ?? "25-34"] ?? 30;
  const yearsRemaining = Math.max(80 - currentAge, 10);
  const lifetimeValue = totalAnnual * yearsRemaining;

  return {
    totalAnnual,
    platforms: sortedPlatforms,
    dataTypeBreakdown,
    countryComparison,
    lifetimeValue,
    yearsRemaining,
  };
}
