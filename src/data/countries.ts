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
  { code: "PT", name: "Portugal", flag: "🇵🇹", region: "eu" },
  { code: "PL", name: "Poland", flag: "🇵🇱", region: "eu" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", region: "eu" },
  { code: "AT", name: "Austria", flag: "🇦🇹", region: "eu" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", region: "eu" },
  { code: "IE", name: "Ireland", flag: "🇮🇪", region: "eu" },
  { code: "DK", name: "Denmark", flag: "🇩🇰", region: "eu" },
  { code: "NO", name: "Norway", flag: "🇳🇴", region: "eu" },
  { code: "FI", name: "Finland", flag: "🇫🇮", region: "eu" },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿", region: "eu" },
  { code: "RO", name: "Romania", flag: "🇷🇴", region: "eu" },
  { code: "GR", name: "Greece", flag: "🇬🇷", region: "eu" },
  { code: "HU", name: "Hungary", flag: "🇭🇺", region: "eu" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", region: "eu" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦", region: "eu" },
  { code: "RU", name: "Russia", flag: "🇷🇺", region: "eu" },

  // Asia-Pacific
  { code: "AU", name: "Australia", flag: "🇦🇺", region: "apac" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", region: "apac" },
  { code: "JP", name: "Japan", flag: "🇯🇵", region: "apac" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", region: "apac" },
  { code: "CN", name: "China", flag: "🇨🇳", region: "apac" },
  { code: "IN", name: "India", flag: "🇮🇳", region: "apac" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", region: "apac" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩", region: "apac" },
  { code: "PH", name: "Philippines", flag: "🇵🇭", region: "apac" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", region: "apac" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", region: "apac" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", region: "apac" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼", region: "apac" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰", region: "apac" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", region: "apac" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", region: "apac" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", region: "apac" },

  // Latin America
  { code: "BR", name: "Brazil", flag: "🇧🇷", region: "latam" },
  { code: "MX", name: "Mexico", flag: "🇲🇽", region: "latam" },
  { code: "AR", name: "Argentina", flag: "🇦🇷", region: "latam" },
  { code: "CO", name: "Colombia", flag: "🇨🇴", region: "latam" },
  { code: "CL", name: "Chile", flag: "🇨🇱", region: "latam" },
  { code: "PE", name: "Peru", flag: "🇵🇪", region: "latam" },
  { code: "EC", name: "Ecuador", flag: "🇪🇨", region: "latam" },
  { code: "VE", name: "Venezuela", flag: "🇻🇪", region: "latam" },
  { code: "CR", name: "Costa Rica", flag: "🇨🇷", region: "latam" },
  { code: "PR", name: "Puerto Rico", flag: "🇵🇷", region: "latam" },

  // Middle East & North Africa
  { code: "AE", name: "UAE", flag: "🇦🇪", region: "mena" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", region: "mena" },
  { code: "EG", name: "Egypt", flag: "🇪🇬", region: "mena" },
  { code: "QA", name: "Qatar", flag: "🇶🇦", region: "mena" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼", region: "mena" },
  { code: "BH", name: "Bahrain", flag: "🇧🇭", region: "mena" },
  { code: "OM", name: "Oman", flag: "🇴🇲", region: "mena" },
  { code: "JO", name: "Jordan", flag: "🇯🇴", region: "mena" },
  { code: "LB", name: "Lebanon", flag: "🇱🇧", region: "mena" },
  { code: "MA", name: "Morocco", flag: "🇲🇦", region: "mena" },
  { code: "TN", name: "Tunisia", flag: "🇹🇳", region: "mena" },
  { code: "DZ", name: "Algeria", flag: "🇩🇿", region: "mena" },
  { code: "IQ", name: "Iraq", flag: "🇮🇶", region: "mena" },
  { code: "IL", name: "Israel", flag: "🇮🇱", region: "mena" },
  { code: "PS", name: "Palestine", flag: "🇵🇸", region: "mena" },

  // Sub-Saharan Africa
  { code: "NG", name: "Nigeria", flag: "🇳🇬", region: "row" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", region: "row" },
  { code: "KE", name: "Kenya", flag: "🇰🇪", region: "row" },
  { code: "GH", name: "Ghana", flag: "🇬🇭", region: "row" },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹", region: "row" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿", region: "row" },
  { code: "UG", name: "Uganda", flag: "🇺🇬", region: "row" },
  { code: "RW", name: "Rwanda", flag: "🇷🇼", region: "row" },
];

export function getCountry(code: string): Country | undefined {
  return countries.find((c) => c.code === code);
}

// Reference countries for comparison (always shown)
export const referenceCountries = ["US", "GB", "DE", "BR", "IN"];
