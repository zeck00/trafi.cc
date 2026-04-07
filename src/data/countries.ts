export type Region = "na" | "eu" | "apac" | "latam" | "mena" | "row";

export interface Country {
  code: string;
  name: string;
  flag: string;
  region: Region;
}

export const countries: Country[] = [
  // North America
  { code: "US", name: "United States", flag: "🇺🇸", region: "na" },
  { code: "CA", name: "Canada", flag: "🇨🇦", region: "na" },

  // Europe
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", region: "eu" },
  { code: "DE", name: "Germany", flag: "🇩🇪", region: "eu" },
  { code: "FR", name: "France", flag: "🇫🇷", region: "eu" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", region: "eu" },
  { code: "SE", name: "Sweden", flag: "🇸🇪", region: "eu" },
  { code: "ES", name: "Spain", flag: "🇪🇸", region: "eu" },
  { code: "IT", name: "Italy", flag: "🇮🇹", region: "eu" },

  // Asia-Pacific
  { code: "AU", name: "Australia", flag: "🇦🇺", region: "apac" },
  { code: "JP", name: "Japan", flag: "🇯🇵", region: "apac" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", region: "apac" },
  { code: "IN", name: "India", flag: "🇮🇳", region: "apac" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", region: "apac" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", region: "apac" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", region: "apac" },

  // Latin America
  { code: "BR", name: "Brazil", flag: "🇧🇷", region: "latam" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", region: "latam" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", region: "latam" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", region: "latam" },

  // Middle East & North Africa
  { code: "AE", name: "UAE", flag: "🇦🇪", region: "mena" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "mena" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", region: "mena" },
  { code: "QA", name: "Qatar", flag: "🇶🇦", region: "mena" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", region: "mena" },
  { code: "JO", name: "Jordan", flag: "🇯🇴", region: "mena" },
  { code: "MA", name: "Morocco", flag: "🇲🇦", region: "mena" },

  // Rest of World
  { code: "NG", name: "Nigeria", flag: "🇳🇬", region: "row" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", region: "row" },
  { code: "KE", name: "Kenya", flag: "🇰🇪", region: "row" },
];

export function getCountry(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

// Reference countries for comparison (always shown)
export const referenceCountries = ["US", "GB", "DE", "BR", "IN"];
