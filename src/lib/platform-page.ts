import { platforms, platformCategories } from "@/data/platforms";
import { sources } from "@/data/sources";
import type { Platform, DataType } from "@/types";

// Your DATA's value is a fraction of platform ARPU (matches src/lib/calculator.ts).
export const DATA_VALUE_FRACTION = 0.2;

export const regionLabels: Record<keyof Platform["arpu"], string> = {
  na: "North America",
  eu: "Europe",
  apac: "Asia-Pacific",
  latam: "Latin America",
  mena: "Middle East & N. Africa",
  row: "Rest of World",
};

export const dataTypeLabels: Record<DataType, string> = {
  location: "Location Data",
  browsing: "Browsing Habits",
  purchase_intent: "Purchase Intent",
  social_graph: "Social Graph",
};

export type Tier = 1 | 2 | 3;

export const tierLabels: Record<Tier, { label: string; color: string; summary: string }> = {
  1: {
    label: "Tier 1 — Directly reported in SEC filings",
    color: "text-accent",
    summary: "Audited ARPU disclosed by the platform itself. Highest confidence.",
  },
  2: {
    label: "Tier 2 — Derived from public financials",
    color: "text-primary",
    summary: "Calculated from reported ad revenue divided by reported user count.",
  },
  3: {
    label: "Tier 3 — Industry estimate",
    color: "text-text-muted",
    summary: "Based on analyst reports, press coverage, and CPM benchmarks. Directionally reliable.",
  },
};

/** Resolves the source tier for a given platform by scanning sources.ts. */
export function getPlatformTier(platformId: string): Tier {
  for (const s of sources) {
    if (s.platforms.includes(platformId)) return s.tier;
  }
  return 3;
}

/** Finds the first source that covers this platform (for linking). */
export function getPlatformSource(platformId: string) {
  return sources.find((s) => s.platforms.includes(platformId));
}

export function formatCurrency(n: number): string {
  if (n >= 100) return `$${n.toFixed(0)}`;
  if (n >= 10) return `$${n.toFixed(0)}`;
  if (n >= 1) return `$${n.toFixed(2)}`;
  return `$${n.toFixed(2)}`;
}

/** Returns 3-5 other platforms in the same category, excluding this one. */
export function getRelatedPlatforms(platform: Platform, limit = 5): Platform[] {
  return platforms
    .filter((p) => p.category === platform.category && p.id !== platform.id)
    .sort((a, b) => b.arpu.na - a.arpu.na)
    .slice(0, limit);
}

export function getCategoryLabel(categoryId: Platform["category"]): string {
  return platformCategories.find((c) => c.id === categoryId)?.label ?? categoryId;
}

/** Headline dollar value = NA ARPU × data-value fraction. Matches the calculator. */
export function dataValueFromARPU(arpu: number): number {
  return arpu * DATA_VALUE_FRACTION;
}

/** One-line summary for metadata description. */
export function buildMetaDescription(platform: Platform): string {
  const tier = getPlatformTier(platform.id);
  const value = dataValueFromARPU(platform.arpu.na);
  const tierPhrase =
    tier === 1
      ? "directly reported in SEC filings"
      : tier === 2
      ? "derived from public financials"
      : "based on industry estimates";
  return `${platform.name}'s annual ad revenue per North American user is $${platform.arpu.na}, putting your personal data value at roughly $${value.toFixed(2)}/year — ${tierPhrase}. See regional breakdown, data types, and source.`;
}
