export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  description: string;
  tier: 1 | 2 | 3;
  platforms: string[];
}

// Tier 1: Directly reported ARPU in SEC filings
// Tier 2: Derived from public financials (revenue / user count)
// Tier 3: Industry estimates (eMarketer, analysts, press reports)

export const sources: Source[] = [
  // === Tier 1: SEC Filings with Direct ARPU Disclosure ===
  {
    id: "meta-10k",
    title: "Meta Platforms FY2024 Annual Report (10-K)",
    publisher: "SEC / Meta Investor Relations",
    url: "https://investor.fb.com/financials/",
    description:
      "Average Revenue Per Person (ARPP) directly reported by region: US & Canada $268, Europe $78, Asia-Pacific $19, Rest of World $14. We split ~60/40 between Facebook and Instagram based on Meta's reported ad impression share.",
    tier: 1,
    platforms: ["facebook", "instagram", "whatsapp", "messenger", "threads"],
  },
  {
    id: "snap-10k",
    title: "Snap Inc. FY2024 Annual Report (10-K)",
    publisher: "SEC / Snap Investor Relations",
    url: "https://investor.snap.com/",
    description:
      "ARPU directly reported quarterly: North America $28.41/yr, Europe $10.07/yr, Rest of World $3.68/yr. 443M daily active users.",
    tier: 1,
    platforms: ["snapchat"],
  },
  {
    id: "pinterest-10k",
    title: "Pinterest FY2024 Annual Report (10-K)",
    publisher: "SEC / Pinterest Investor Relations",
    url: "https://investor.pinterestinc.com/",
    description:
      "ARPU directly reported: US & Canada $27.00/yr, Europe $5.88/yr, Rest of World $0.84/yr. 553M monthly active users.",
    tier: 1,
    platforms: ["pinterest"],
  },
  {
    id: "reddit-10k",
    title: "Reddit FY2024 Earnings",
    publisher: "SEC / Reddit Investor Relations",
    url: "https://investor.redditinc.com/",
    description:
      "Global ARPU $11.20/yr directly reported. 101M daily active uniques. ~50% of users are in the US, so NA ARPU is significantly higher than global average.",
    tier: 1,
    platforms: ["reddit"],
  },
  {
    id: "spotify-earnings",
    title: "Spotify FY2024 Earnings Release",
    publisher: "Spotify Investor Relations",
    url: "https://investors.spotify.com/",
    description:
      "Ad-supported revenue ~€2B in FY2024 across ~412M free MAUs. Premium ARPU €4.65/month directly reported. Ad ARPU derived: ~€4.85/yr (~$5.30) per free user.",
    tier: 1,
    platforms: ["spotify"],
  },
  {
    id: "match-10k",
    title: "Match Group FY2024 Annual Report (10-K)",
    publisher: "SEC / Match Group Investor Relations",
    url: "https://ir.matchgroup.com/",
    description:
      "Revenue per payer (RPP) ~$16/month for Tinder. Total Tinder revenue ~$1.8B. Used to estimate ad/data value for non-paying users.",
    tier: 1,
    platforms: ["tinder", "hinge"],
  },

  // === Tier 2: Derived from Public Financials ===
  {
    id: "alphabet-10k",
    title: "Alphabet FY2024 Annual Report (10-K)",
    publisher: "SEC / Alphabet Investor Relations",
    url: "https://abc.xyz/investor/",
    description:
      "Google Services ad revenue $264.6B (Search + YouTube + Network). YouTube ads $36.1B. Derived per-user by dividing by estimated user counts (~4.4B for Google, ~2.5B for YouTube). NA represents ~47% of revenue.",
    tier: 2,
    platforms: ["google", "youtube"],
  },
  {
    id: "amazon-10k",
    title: "Amazon FY2024 Annual Report (10-K)",
    publisher: "SEC / Amazon Investor Relations",
    url: "https://ir.aboutamazon.com/",
    description:
      "Advertising services revenue $56.2B. ~310M active customer accounts. NA represents ~60% of ad revenue. Per-user derived by region.",
    tier: 2,
    platforms: ["amazon", "primevideo", "twitch"],
  },
  {
    id: "uber-10k",
    title: "Uber FY2024 Annual Report (10-K)",
    publisher: "SEC / Uber Investor Relations",
    url: "https://investor.uber.com/",
    description:
      "Advertising revenue ~$1.3B. 171M monthly active platform consumers. ARPU not directly reported — derived from ad revenue / MAPC.",
    tier: 2,
    platforms: ["uber"],
  },
  {
    id: "bumble-10k",
    title: "Bumble FY2024 Annual Report (10-K)",
    publisher: "SEC / Bumble Investor Relations",
    url: "https://ir.bumble.com/",
    description:
      "Revenue ~$1B. ~3.7M paying users out of ~50M MAUs. Ad/data value for non-payers estimated from total revenue and user mix.",
    tier: 2,
    platforms: ["bumble"],
  },
  {
    id: "ebay-10k",
    title: "eBay FY2024 Annual Report (10-K)",
    publisher: "SEC / eBay Investor Relations",
    url: "https://investors.ebayinc.com/",
    description:
      "Promoted listings + first-party ads ~$2.4B. ~132M active buyers. Derived per-user ad value.",
    tier: 2,
    platforms: ["ebay"],
  },
  {
    id: "mercadolibre-20f",
    title: "Mercado Libre FY2024 Annual Report (20-F)",
    publisher: "SEC / Mercado Libre Investor Relations",
    url: "https://investor.mercadolibre.com/",
    description:
      "Advertising revenue ~$2.6B. ~218M unique active users. LATAM-dominant marketplace.",
    tier: 2,
    platforms: ["mercadolibre"],
  },

  // === Tier 3: Industry Estimates & Reports ===
  {
    id: "emarketer-cpm",
    title: "Global Digital Ad CPM Benchmarks 2024",
    publisher: "eMarketer / Insider Intelligence",
    url: "https://www.insiderintelligence.com/",
    description:
      "CPM benchmarks by platform, format, and demographic segment. Finance/insurance verticals command 3-4x the CPMs of entertainment. Used for interest multipliers and platforms without public ARPU.",
    tier: 3,
    platforms: [],
  },
  {
    id: "iab-report",
    title: "IAB Internet Advertising Revenue Report 2024",
    publisher: "Interactive Advertising Bureau",
    url: "https://www.iab.com/insights/internet-advertising-revenue-report/",
    description:
      "Annual U.S. digital advertising revenue data ($225B+ in 2024). Breakdown by format, pricing model, and industry vertical. Used for market-level validation.",
    tier: 3,
    platforms: [],
  },
  {
    id: "tenjin-benchmarks",
    title: "Mobile Advertising Benchmarks 2024",
    publisher: "Tenjin / Liftoff",
    url: "https://www.tenjin.com/",
    description:
      "iOS CPMs are consistently 2-3x higher than Android (iOS ~$10-12, Android ~$3-5 for US Facebook ads). Used for device multiplier.",
    tier: 3,
    platforms: [],
  },
  {
    id: "wordstream-benchmarks",
    title: "Facebook Ads Industry Benchmarks 2024",
    publisher: "WordStream / LocaliQ",
    url: "https://www.wordstream.com/blog/ws/2017/02/28/facebook-advertising-benchmarks",
    description:
      "CPM by industry vertical: Finance $15-35, Technology $12-20, Retail $8-14, Entertainment $5-9. Used for interest category multipliers.",
    tier: 3,
    platforms: [],
  },
  {
    id: "ftc-data-brokers",
    title: "Data Brokers: A Call for Transparency and Accountability",
    publisher: "Federal Trade Commission",
    url: "https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014",
    description:
      "FTC investigation into data broker practices, including how personal data is collected, packaged, and sold. Background context for data value estimates.",
    tier: 3,
    platforms: [],
  },
  {
    id: "statista-digital-ads",
    title: "Digital Advertising Worldwide 2024",
    publisher: "Statista",
    url: "https://www.statista.com/outlook/dmo/digital-advertising/worldwide",
    description:
      "Global digital ad spend projections and per-user revenue estimates across major markets. Used for regional ratio validation.",
    tier: 3,
    platforms: [],
  },
];
