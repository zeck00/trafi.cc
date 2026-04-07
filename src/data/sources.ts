export interface Source {
  id: string;
  title: string;
  publisher: string;
  url: string;
  description: string;
}

export const sources: Source[] = [
  {
    id: "meta-10k",
    title: "Meta Platforms Annual Report (10-K)",
    publisher: "SEC / Meta Investor Relations",
    url: "https://investor.fb.com/financials/",
    description:
      "Average Revenue Per User (ARPU) broken down by US & Canada, Europe, Asia-Pacific, and Rest of World. Primary source for Facebook and Instagram per-user ad revenue.",
  },
  {
    id: "alphabet-10k",
    title: "Alphabet Annual Report (10-K)",
    publisher: "SEC / Alphabet Investor Relations",
    url: "https://abc.xyz/investor/",
    description:
      "Google ad revenue figures used to estimate per-user value across Search, YouTube, and Google Network properties.",
  },
  {
    id: "emarketer-cpm",
    title: "Global Digital Ad CPM Benchmarks",
    publisher: "eMarketer / Insider Intelligence",
    url: "https://www.insiderintelligence.com/",
    description:
      "Cost-per-thousand-impressions (CPM) benchmarks by platform, format, and demographic segment. Used to estimate per-user value for platforms without public ARPU disclosures.",
  },
  {
    id: "iab-report",
    title: "IAB Internet Advertising Revenue Report",
    publisher: "Interactive Advertising Bureau",
    url: "https://www.iab.com/insights/internet-advertising-revenue-report/",
    description:
      "Annual U.S. digital advertising revenue data broken down by format, pricing model, and industry vertical.",
  },
  {
    id: "statista-digital-ads",
    title: "Digital Advertising Worldwide",
    publisher: "Statista",
    url: "https://www.statista.com/outlook/dmo/digital-advertising/worldwide",
    description:
      "Global digital ad spend projections and per-user revenue estimates across major markets.",
  },
  {
    id: "ftc-data-brokers",
    title: "Data Brokers: A Call for Transparency and Accountability",
    publisher: "Federal Trade Commission",
    url: "https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014",
    description:
      "FTC investigation into data broker practices, including how personal data is collected, packaged, and sold.",
  },
  {
    id: "snap-10k",
    title: "Snap Inc. Annual Report (10-K)",
    publisher: "SEC / Snap Investor Relations",
    url: "https://investor.snap.com/",
    description:
      "Snapchat ARPU by region, used for Snapchat per-user value estimates.",
  },
  {
    id: "pinterest-10k",
    title: "Pinterest Annual Report (10-K)",
    publisher: "SEC / Pinterest Investor Relations",
    url: "https://investor.pinterestinc.com/",
    description:
      "Pinterest ARPU disclosures by US/International, showing significant geographic variation in per-user ad value.",
  },
  {
    id: "match-group-10k",
    title: "Match Group Annual Report (10-K)",
    publisher: "SEC / Match Group Investor Relations",
    url: "https://ir.matchgroup.com/",
    description:
      "Revenue per payer data for Tinder, Hinge, and other dating platforms. Used to estimate ad and data monetization value.",
  },
];
