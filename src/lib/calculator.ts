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

const ageMultipliers: Record<string, number> = {
  "13-17": 0.6,
  "18-24": 1.1,
  "25-34": 1.3,
  "35-44": 1.2,
  "45-54": 1.0,
  "55-64": 0.85,
  "65+": 0.7,
};

const deviceMultipliers: Record<string, number> = {
  ios: 1.2,
  android: 0.9,
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
    total += base * ageMult * devMult * intMult * 0.55;
  }
  return total;
}

export function calculate(state: FlowState): CalculationResult {
  const region = countryToRegion(state.country);
  const ageMult = ageMultipliers[state.ageRange ?? "25-34"] ?? 1.0;
  const devMult = deviceMultipliers[state.device ?? "ios"] ?? 1.0;
  const intMult = computeInterestMultiplier(state.interests);

  const platformResults = state.selectedPlatforms
    .map((id) => {
      const platform = platforms.find((p) => p.id === id);
      if (!platform) return null;
      const base = platform.arpu[region];
      const annualValue = base * ageMult * devMult * intMult * 0.55;
      return { platform, annualValue };
    })
    .filter((p): p is NonNullable<typeof p> => p !== null);

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
