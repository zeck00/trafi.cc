import type {
  FlowState,
  CalculationResult,
  DataType,
  DataTypeResult,
  CountryComparisonEntry,
  Platform,
} from "@/types";
import { platforms } from "@/data/platforms";
import { getCountry, referenceCountries, type Region } from "@/data/countries";
import { interestMultipliers } from "@/data/interests";

// Source: WordStream/Revealbot industry CPM benchmarks, advertiser bid data.
const ageMultipliers: Record<string, number> = {
  "13-17": 0.5,
  "18-24": 0.85,
  "25-34": 1.0,
  "35-44": 1.15,
  "45-54": 1.2,
  "55-64": 1.05,
  "65+": 0.75,
};

// Source: Tenjin/Liftoff mobile benchmarks 2024.
const deviceMultipliers: Record<string, number> = {
  ios: 1.2,
  android: 0.85,
  desktop: 1.0,
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

// Platform families — share the same parent revenue pool.
// Family ARPU caps (NA, annual) based on parent company reported ARPU.
// Cap = 20% of parent ARPU (data value fraction).
const platformFamilies: Record<string, { members: string[]; naARPU: number }> = {
  meta:          { members: ["facebook", "instagram", "whatsapp", "messenger", "threads", "metaai"], naARPU: 268 },
  alphabet:      { members: ["google", "youtube", "gemini"], naARPU: 280 },
  amazon_family: { members: ["amazon", "primevideo", "twitch"], naARPU: 180 },
  match:         { members: ["tinder", "hinge"], naARPU: 18 },
  paypal_family: { members: ["paypal", "venmo"], naARPU: 12 },
};

// Your DATA's value is a fraction of platform ARPU.
// Platform captures most value through infrastructure.
// Source: FTC data broker reports, academic papers on "value of personal data".
const DATA_VALUE_FRACTION = 0.20;

// Cap the combined demographic multiplier to prevent extreme compounding.
// age × device × interest should never exceed 1.8x total.
const MAX_COMBINED_MULTIPLIER = 1.8;

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

function getCombinedMultiplier(age: string | null, device: string | null, interests: string[]) {
  const ageMult = ageMultipliers[age ?? "25-34"] ?? 1.0;
  const devMult = deviceMultipliers[device ?? "desktop"] ?? 1.0;
  const intMult = computeInterestMultiplier(interests);
  const combined = ageMult * devMult * intMult;
  return Math.min(combined, MAX_COMBINED_MULTIPLIER);
}

// Region ratio relative to NA (used for family caps in non-NA regions)
function regionRatio(region: Region): number {
  const ratios: Record<Region, number> = {
    na: 1.0,
    eu: 0.35,
    apac: 0.08,
    latam: 0.06,
    mena: 0.05,
    row: 0.03,
  };
  return ratios[region];
}

function applyFamilyCaps(
  results: { platform: Platform; annualValue: number }[],
  region: Region,
  multiplier: number
) {
  const output = [...results];

  for (const family of Object.values(platformFamilies)) {
    const indices = output
      .map((r, i) => (family.members.includes(r.platform.id) ? i : -1))
      .filter((i) => i >= 0);

    if (indices.length <= 1) continue;

    const familySum = indices.reduce((s, i) => s + output[i].annualValue, 0);
    // Family cap = parent ARPU × DATA_VALUE_FRACTION × region ratio × multiplier
    const familyCap = family.naARPU * DATA_VALUE_FRACTION * regionRatio(region) * multiplier;

    if (familySum > familyCap) {
      const ratio = familyCap / familySum;
      for (const i of indices) {
        output[i] = { ...output[i], annualValue: output[i].annualValue * ratio };
      }
    }
  }

  return output;
}

export function calculate(state: FlowState): CalculationResult {
  const region = countryToRegion(state.country);
  const multiplier = getCombinedMultiplier(state.ageRange, state.device, state.interests);

  const rawResults = state.selectedPlatforms
    .map((id) => {
      const platform = platforms.find((p) => p.id === id);
      if (!platform) return null;
      const base = platform.arpu[region];
      const annualValue = base * multiplier * DATA_VALUE_FRACTION;
      return { platform, annualValue };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const platformResults = applyFamilyCaps(rawResults, region, multiplier);

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

  // Country comparison — uses same family caps
  const userCountryCode = state.country ?? "US";
  const comparisonCodes = [
    ...new Set([userCountryCode, ...referenceCountries]),
  ].slice(0, 5);

  const countryComparison: CountryComparisonEntry[] = comparisonCodes.map(
    (code) => {
      const c = getCountry(code);
      const r = c?.region ?? "na";
      const compMult = getCombinedMultiplier(state.ageRange, state.device, state.interests);

      const compRaw = state.selectedPlatforms
        .map((id) => {
          const platform = platforms.find((p) => p.id === id);
          if (!platform) return null;
          const base = platform.arpu[r];
          return { platform, annualValue: base * compMult * DATA_VALUE_FRACTION };
        })
        .filter((p): p is NonNullable<typeof p> => p !== null);

      const capped = applyFamilyCaps(compRaw, r, compMult);
      const value = capped.reduce((s, p) => s + p.annualValue, 0);

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
