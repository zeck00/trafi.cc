import type { Metadata } from "next";
import { sources } from "@/data/sources";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";

export const metadata: Metadata = {
  title: "How We Calculate Your Digital Price Tag — Methodology & Sources",
  description:
    "We calculate your digital ad value using published ARPU data from SEC filings (Meta 10-K, Snap 10-K, Pinterest 10-K) and industry CPM benchmarks. Full methodology, 17 cited sources, and data confidence tiers.",
  keywords: [
    "data value methodology",
    "ARPU by platform",
    "how much is my data worth calculation",
    "Meta ARPU 2024",
    "Facebook revenue per user",
    "digital advertising ARPU",
    "data broker pricing methodology",
    "CPM benchmarks by industry",
  ],
  openGraph: {
    title: "How Much Is Your Data Worth? Methodology & Sources | trafi.cc",
    description:
      "Every number backed by SEC filings and industry reports. 17 cited sources with data confidence tiers.",
    siteName: "trafi.cc",
    type: "article",
    url: "https://trafi.cc/methodology",
  },
  twitter: {
    card: "summary",
    title: "How We Calculate Your Digital Price Tag | trafi.cc",
    description:
      "ARPU data from Meta, Snap, Pinterest, Reddit SEC filings + industry CPM benchmarks. Full methodology.",
  },
  alternates: {
    canonical: "https://trafi.cc/methodology",
  },
};

const tierLabels: Record<number, { label: string; color: string }> = {
  1: { label: "Tier 1 — Directly Reported", color: "text-accent" },
  2: { label: "Tier 2 — Derived from Financials", color: "text-primary" },
  3: { label: "Tier 3 — Industry Estimate", color: "text-text-muted" },
};

export default function MethodologyPage() {

  const tier1Sources = sources.filter((s) => s.tier === 1);
  const tier2Sources = sources.filter((s) => s.tier === 2);
  const tier3Sources = sources.filter((s) => s.tier === 3);

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <NavBar />

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
                Applies to: <strong className="text-text-primary">TikTok, X/Twitter, LinkedIn, WhatsApp, AI platforms (ChatGPT, Claude, Gemini, Copilot, Perplexity, Grok, Meta AI, Midjourney), messaging, delivery, regional platforms, fintech, health/fitness</strong>.
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
                Your Value = Platform ARPU × Age × Device × Interest × 0.20
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
                35-54 are the most valuable (1.15-1.2x) due to peak purchasing power.
                Teens (13-17) are worth ~50% less due to COPPA regulations limiting ad targeting.
                <span className="text-xs opacity-60 block ml-6">Source: Advertiser bid data, WordStream industry benchmarks</span>
              </li>
              <li>
                <strong className="text-text-primary">Device</strong> — iOS
                users command 2-3x higher CPMs than Android. We normalize this to a 1.2x/0.85x multiplier.
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
              <strong className="text-text-primary">0.20x data value fraction</strong>{" "}
              reflects that your raw data is only part of the equation. Platforms
              capture most of the ARPU through their ad infrastructure, targeting
              algorithms, sales teams, and real-time auction systems. Your data
              enables the targeting, but the platform does the heavy lifting to
              monetize it. Industry estimates and FTC reports suggest raw personal
              data accounts for roughly 15-25% of platform ad revenue.
            </p>
            <p>
              The combined demographic multiplier (age x device x interest) is{" "}
              <strong className="text-text-primary">capped at 1.8x</strong> to
              prevent unrealistic compounding at the extremes.
            </p>
            <p>
              We also cap <strong className="text-text-primary">platform families</strong> —
              selecting both Facebook and Instagram won&apos;t double-count Meta&apos;s
              ARPU, since they share the same parent ad infrastructure. Family
              caps are based on the parent company&apos;s reported ARPU: Meta
              at $268, Alphabet at $280, Amazon at $180 (all US &amp; Canada, FY2024).
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

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-8 border-t border-border">
          <Link
            href="/faq"
            className="flex-1 text-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text-primary hover:border-text-muted/30 transition-colors"
          >
            Read the FAQ
          </Link>
          <Link
            href="/"
            className="flex-1 text-center px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:brightness-110 transition-all"
          >
            Calculate my worth
          </Link>
        </div>
      </main>
    </div>
  );
}
