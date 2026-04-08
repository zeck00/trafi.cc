import type { Metadata } from "next";
import { sources } from "@/data/sources";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const metadata: Metadata = {
  title: "How We Calculate Your Digital Price Tag | trafi.cc",
  description:
    "We calculate your digital ad value using published ARPU data from Meta, Google, TikTok, and 40+ platforms. Full methodology and sources.",
  openGraph: {
    title: "How Much Is Your Data Worth? Methodology & Sources",
    description:
      "Published ARPU data from Meta, Google, TikTok, and 40+ platforms — see how we calculate your digital price tag.",
    siteName: "trafi.cc",
    type: "article",
  },
};

const tierLabels: Record<number, { label: string; color: string }> = {
  1: { label: "Tier 1 — Directly Reported", color: "text-accent" },
  2: { label: "Tier 2 — Derived from Financials", color: "text-primary" },
  3: { label: "Tier 3 — Industry Estimate", color: "text-text-muted" },
};

export default function MethodologyPage() {
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
      a: "It depends on the platform. For Meta, Snap, Pinterest, and Reddit, we use directly reported ARPU from SEC filings (Tier 1). For Google and Amazon, we derive values from reported revenue and user counts (Tier 2). For private companies like TikTok and smaller platforms, we use industry estimates (Tier 3). We apply a 0.55x realism factor because not every user generates the full platform ARPU.",
    },
    {
      q: "What's the difference between the data tiers?",
      a: "Tier 1 means the platform directly reports ARPU in SEC filings — these are audited numbers. Tier 2 means we calculated ARPU by dividing the platform's reported revenue by its reported user count — both figures are public but the division is ours. Tier 3 means we estimated from analyst reports, press coverage, or industry benchmarks — these are directionally reliable but not audited.",
    },
    {
      q: "Why is iOS worth more than Android?",
      a: "iOS CPMs are consistently 2-3x higher than Android, according to mobile ad benchmarks from Tenjin and Liftoff. This is because iOS users tend to have higher purchasing power, and Apple's App Tracking Transparency (ATT) framework constrains ad supply, pushing prices up.",
    },
  ];

  const tier1Sources = sources.filter((s) => s.tier === 1);
  const tier2Sources = sources.filter((s) => s.tier === 2);
  const tier3Sources = sources.filter((s) => s.tier === 3);

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <header className="flex items-center justify-between px-5 py-4 border-b border-border">
        <Link
          href="/"
          className="text-sm font-medium font-[family-name:var(--font-heading)] text-text-muted hover:text-text-primary transition-colors"
        >
          ← Back to calculator
        </Link>
        <ThemeToggle />
      </header>

      <main className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
          How We Calculate Your Digital Price Tag
        </h1>
        <p className="text-text-muted text-lg mb-12">
          Every number on trafi.cc is derived from publicly available data — SEC
          filings, earnings reports, and industry benchmarks. Here&apos;s exactly
          how we do it, and where every number comes from.
        </p>

        {/* Data Confidence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Data Confidence Tiers
          </h2>
          <div className="space-y-3 text-sm">
            <div className="border border-border rounded-lg p-4 bg-surface">
              <span className="font-bold text-accent">Tier 1 — Directly Reported</span>
              <p className="text-text-muted mt-1">
                The platform reports ARPU in SEC filings (10-K, 10-Q). These are audited numbers.
                Applies to: <strong className="text-text-primary">Meta (FB+IG), Snapchat, Pinterest, Reddit, Spotify, Match Group (Tinder)</strong>.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-surface">
              <span className="font-bold text-primary">Tier 2 — Derived from Financials</span>
              <p className="text-text-muted mt-1">
                We divide reported revenue by reported user count. Both numbers are public, but the per-user figure is our calculation.
                Applies to: <strong className="text-text-primary">Google, YouTube, Amazon, Uber, eBay, Bumble, Mercado Libre</strong>.
              </p>
            </div>
            <div className="border border-border rounded-lg p-4 bg-surface">
              <span className="font-bold text-text-muted">Tier 3 — Industry Estimate</span>
              <p className="text-text-muted mt-1">
                Estimated from analyst reports, press coverage, or CPM benchmarks. Directionally reliable but not audited.
                Applies to: <strong className="text-text-primary">TikTok, X/Twitter, LinkedIn, WhatsApp, messaging apps, delivery, regional platforms, fintech, health/fitness</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Calculation Formula
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p className="text-sm border border-border rounded-lg p-4 bg-surface">
              <strong className="text-text-primary">Formula:</strong>{" "}
              <code className="font-[family-name:var(--font-mono)] text-primary">
                Your Value = Base ARPU × Age × Device × Interest × 0.55
              </code>
            </p>
            <p>
              For each platform you select, we start with the{" "}
              <strong className="text-text-primary">
                Annual Revenue Per User (ARPU)
              </strong>{" "}
              for your region, sourced from the most recent available data.
            </p>
            <p>
              We then apply three demographic multipliers:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-text-primary">Age</strong> — Users aged
                35-54 are the most valuable (1.2-1.3x) due to peak purchasing power.
                Teens (13-17) are worth ~50% less due to COPPA regulations limiting ad targeting.
                <span className="text-xs opacity-60 block ml-6">Source: Advertiser bid data, WordStream industry benchmarks</span>
              </li>
              <li>
                <strong className="text-text-primary">Device</strong> — iOS
                users command 2-3x higher CPMs than Android. We normalize this to a 1.3x/0.8x multiplier.
                <span className="text-xs opacity-60 block ml-6">Source: Tenjin/Liftoff Mobile Ad Benchmarks 2024</span>
              </li>
              <li>
                <strong className="text-text-primary">Interests</strong> —
                Finance/insurance verticals command 3-4x the CPMs of entertainment.
                Luxury (1.6x) and investing (1.5x) are the highest-value interest signals.
                <span className="text-xs opacity-60 block ml-6">Source: WordStream Facebook Ads Industry Benchmarks, Revealbot</span>
              </li>
            </ul>
            <p>
              The{" "}
              <strong className="text-text-primary">0.55x realism factor</strong>{" "}
              accounts for the fact that not every user generates the full platform ARPU.
              It varies based on engagement level, ad blocker usage, premium subscriptions
              (which reduce ad exposure), and time spent on platform.
            </p>
          </div>
        </section>

        {/* Sources by Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            All Sources
          </h2>

          {[
            { tier: 1, items: tier1Sources },
            { tier: 2, items: tier2Sources },
            { tier: 3, items: tier3Sources },
          ].map(({ tier, items }) => (
            <div key={tier} className="mb-8">
              <h3 className={`text-sm font-bold mb-3 ${tierLabels[tier].color}`}>
                {tierLabels[tier].label}
              </h3>
              <div className="space-y-3">
                {items.map((source) => (
                  <div
                    key={source.id}
                    className="border border-border rounded-lg p-4 bg-surface"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-medium text-text-primary text-sm">
                          {source.title}
                        </h4>
                        <p className="text-xs text-text-muted mt-0.5">
                          {source.publisher}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-text-muted mt-2 leading-relaxed">
                      {source.description}
                    </p>
                    {source.platforms.length > 0 && (
                      <p className="text-xs text-text-muted mt-2 opacity-60">
                        Used for: {source.platforms.join(", ")}
                      </p>
                    )}
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline mt-2 inline-block"
                    >
                      View source →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i}>
                <h3 className="font-medium text-text-primary mb-1">
                  {item.q}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-8 border-t border-border">
          <p className="text-text-muted mb-4">
            Ready to find out your digital price tag?
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full bg-accent text-white font-medium text-sm hover:brightness-110 transition-all"
          >
            Calculate My Worth
          </Link>
        </section>
      </main>

      {/* JSON-LD structured data */}
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
