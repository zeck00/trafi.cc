import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "FAQ — How Much Is My Data Worth?",
  description:
    "Frequently asked questions about how much your personal data is worth to Facebook, Google, TikTok, and other advertisers. Answers based on real ARPU data from SEC filings.",
  keywords: [
    "how much is my data worth",
    "how much is my data worth to Facebook",
    "how much do advertisers pay for data",
    "is my data being sold",
    "why is my data worth so little",
    "iOS vs Android ad value",
    "ARPU explained",
    "data privacy FAQ",
  ],
  openGraph: {
    title: "FAQ — How Much Is My Data Worth? | trafi.cc",
    description:
      "Answers to common questions about your data's value to advertisers, based on real SEC filings.",
    siteName: "trafi.cc",
    type: "website",
    url: "https://trafi.cc/faq",
  },
  twitter: {
    card: "summary",
    title: "FAQ — How Much Is My Data Worth? | trafi.cc",
    description: "Common questions about personal data value, answered with real numbers.",
  },
  alternates: {
    canonical: "https://trafi.cc/faq",
  },
};

const faqItems = [
  {
    q: "How much is my data worth to Facebook?",
    a: "Meta reported annual revenue per person (ARPP) of $268 for US & Canada users in their FY2024 10-K filing. Facebook generates roughly 60% of Meta's ad revenue, putting the per-user Facebook value at ~$160/year for a US user before demographic adjustments.",
  },
  {
    q: "Why is my data worth so little?",
    a: "Individual data points are cheap — it's the aggregate that's valuable. Advertisers pay for access to millions of users matching specific criteria. Your share of that is small, but across billions of users, it generates hundreds of billions in revenue for platforms.",
  },
  {
    q: "Do platforms actually sell my data?",
    a: "Most major platforms (Meta, Google, TikTok) don't sell your data directly. Instead, they sell advertisers the ability to target you based on your data. The economic effect is similar — your behavioral data has a measurable dollar value to their business model.",
  },
  {
    q: "How accurate is this calculator?",
    a: "It depends on the platform. For Meta, Snap, Pinterest, and Reddit, we use directly reported ARPU from SEC filings (Tier 1). For Google and Amazon, we derive values from reported revenue and user counts (Tier 2). For private companies like TikTok, we use industry estimates (Tier 3). We apply a 0.20x data value fraction because your raw data is only ~20% of what makes the ad system work — the platform's infrastructure captures the rest. We also cap platform families (e.g., Facebook + Instagram don't double-count Meta's total ARPU).",
  },
  {
    q: "What's the difference between the data tiers?",
    a: "Tier 1 means the platform directly reports ARPU in SEC filings — these are audited numbers. Tier 2 means we calculated ARPU by dividing the platform's reported revenue by its reported user count — both figures are public but the division is ours. Tier 3 means we estimated from analyst reports, press coverage, or industry benchmarks — these are directionally reliable but not audited.",
  },
  {
    q: "Why is iOS worth more than Android?",
    a: "iOS CPMs are consistently 2-3x higher than Android, according to mobile ad benchmarks from Tenjin and Liftoff. This is because iOS users tend to have higher purchasing power, and Apple's App Tracking Transparency (ATT) framework constrains ad supply, pushing prices up.",
  },
  {
    q: "What data types are most valuable?",
    a: "Purchase intent signals (what you're about to buy) are the most valuable, followed by browsing habits and location data. Social graph data (who you know) is valuable for lookalike audience targeting. The mix varies by platform — shopping apps weight purchase intent heavily, while dating apps rely more on location.",
  },
  {
    q: "Does this calculator store my data?",
    a: "No. All calculations run entirely in your browser. Nothing is transmitted to any server. There's no backend, no database, no analytics tracking personal data. The code is open source on GitHub so you can verify this yourself.",
  },
  {
    q: "How can I reduce my data value to advertisers?",
    a: "Use ad blockers, privacy-focused browsers (Firefox, Brave), VPNs, and limit app permissions (especially location). Opt out of personalized ads in platform settings. Use services like DeleteMe to remove your data from data brokers. Every signal you deny makes you less targetable.",
  },
  {
    q: "Why do some countries have much lower values?",
    a: "Advertiser spending follows purchasing power. A US user sees ads for $50 products; an Indian user sees ads for ₹500 products. The CPMs (cost per thousand impressions) reflect what advertisers are willing to pay to reach each market. This is why a US user's data can be 10-15x more valuable than a user in South Asia.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <NavBar />

      <main className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-text-muted text-lg mb-12">
          Common questions about your data&apos;s value to advertisers — answered
          with real numbers from SEC filings and industry reports.
        </p>

        <div className="space-y-8">
          {faqItems.map((item, i) => (
            <div key={i} className="border-b border-border pb-6 last:border-0">
              <h2 className="font-medium text-text-primary text-lg mb-2">
                {item.q}
              </h2>
              <p className="text-sm text-text-muted leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>

        {/* Cross-links */}
        <div className="flex flex-col sm:flex-row gap-3 mt-12">
          <Link
            href="/methodology"
            className="flex-1 text-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text-primary hover:border-text-muted/30 transition-colors"
          >
            View methodology & sources
          </Link>
          <Link
            href="/"
            className="flex-1 text-center px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:brightness-110 transition-all"
          >
            Calculate my worth
          </Link>
        </div>
      </main>

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
