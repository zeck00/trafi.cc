export type PlatformCategory =
  | "social"
  | "messaging"
  | "shopping"
  | "streaming"
  | "productivity"
  | "delivery"
  | "dating"
  | "finance"
  | "health"
  | "ai";

export interface RegionalARPU {
  na: number;
  eu: number;
  apac: number;
  latam: number;
  mena: number;
  row: number;
}

export type DataType = "location" | "browsing" | "purchase_intent" | "social_graph";

export interface DataTypeWeight {
  type: DataType;
  weight: number;
}

export interface Platform {
  id: string;
  name: string;
  category: PlatformCategory;
  logo: string;
  arpu: RegionalARPU;
  dataTypes: DataTypeWeight[];
}

export type AgeRange =
  | "13-17"
  | "18-24"
  | "25-34"
  | "35-44"
  | "45-54"
  | "55-64"
  | "65+";

export type DeviceType = "ios" | "android" | "desktop";

export interface FlowState {
  step: number;
  selectedPlatforms: string[];
  ageRange: AgeRange | null;
  country: string | null;
  device: DeviceType | null;
  interests: string[];
}

export interface PlatformResult {
  platform: Platform;
  annualValue: number;
  proportion: number;
}

export interface DataTypeResult {
  type: DataType;
  label: string;
  percentage: number;
  dollarValue: number;
}

export interface CountryComparisonEntry {
  country: string;
  flag: string;
  value: number;
  isUser: boolean;
}

export interface CalculationResult {
  totalAnnual: number;
  platforms: PlatformResult[];
  dataTypeBreakdown: DataTypeResult[];
  countryComparison: CountryComparisonEntry[];
  lifetimeValue: number;
  yearsRemaining: number;
}
