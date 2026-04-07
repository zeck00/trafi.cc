import type { Metadata } from "next";
import { sources } from "@/data/sources";
import Link from "next/link";

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

export default function MethodologyPage() {
  const faqItems = [
    {
      q: "How much is my data worth to Facebook?",
      a: "Meta reported average revenue per user (ARPU) of $68.44/year for US & Canada users in their latest annual report. After adjusting for engagement patterns and demographic factors, the typical US Facebook user generates $20-40/year in ad revenue.",
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
      a: "Our estimates are based on publicly reported ARPU data from SEC filings, adjusted for demographics and engagement. Individual results will vary, but the methodology reflects real industry economics. We apply a 0.55x realism factor to account for varying engagement levels.",
    },
  ];

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <header className="px-5 py-4 border-b border-border">
        <Link
          href="/"
          className="text-sm font-medium font-[family-name:var(--font-heading)] text-text-muted hover:text-text-primary transition-colors"
        >
          ← Back to calculator
        </Link>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
          How We Calculate Your Digital Price Tag
        </h1>
        <p className="text-text-muted text-lg mb-12">
          Every number on trafi.cc is derived from publicly available data — SEC
          filings, industry reports, and academic research. Here&apos;s exactly
          how we do it.
        </p>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Methodology
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              For each platform you select, we start with the{" "}
              <strong className="text-text-primary">
                Annual Revenue Per User (ARPU)
              </strong>{" "}
              reported in that company&apos;s most recent earnings filings or
              estimated from industry CPM benchmarks.
            </p>
            <p>
              We then apply three demographic multipliers based on your inputs:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-text-primary">Age</strong> — Users aged
                25-34 generate ~30% more ad revenue than baseline, while teens
                (13-17) generate ~40% less due to advertiser restrictions.
              </li>
              <li>
                <strong className="text-text-primary">Device</strong> — iOS
                users command ~20% higher CPMs than Android users due to higher
                purchasing power.
              </li>
              <li>
                <strong className="text-text-primary">Interests</strong> —
                High-value verticals like luxury (1.6x) and investing (1.5x)
                carry premium CPMs compared to general content.
              </li>
            </ul>
            <p>
              Finally, we apply a{" "}
              <strong className="text-text-primary">0.55x realism factor</strong>{" "}
              because not every user generates the full platform ARPU — it
              depends on engagement level, ad load, and whether you use ad
              blockers.
            </p>
            <p className="text-sm border border-border rounded-lg p-4 bg-surface">
              <strong className="text-text-primary">Formula:</strong>{" "}
              <code className="font-[family-name:var(--font-mono)] text-primary">
                Your Value = Base ARPU × Age Mult × Device Mult × Interest Mult
                × 0.55
              </code>
            </p>
          </div>
        </section>

        {/* Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Data Sources
          </h2>
          <div className="space-y-4">
            {sources.map((source) => (
              <div
                key={source.id}
                className="border border-border rounded-lg p-4 bg-surface"
              >
                <h3 className="font-medium text-text-primary">
                  {source.title}
                </h3>
                <p className="text-xs text-text-muted mt-0.5">
                  {source.publisher}
                </p>
                <p className="text-sm text-text-muted mt-2">
                  {source.description}
                </p>
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
            className="inline-block px-8 py-3 rounded-full bg-accent text-background font-medium text-sm hover:brightness-110 transition-all"
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
