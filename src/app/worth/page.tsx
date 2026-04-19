import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { platforms, platformCategories } from "@/data/platforms";
import { dataValueFromARPU, formatCurrency } from "@/lib/platform-page";

export const metadata: Metadata = {
  title: "How Much Is Your Data Worth to Every Platform?",
  description:
    "See exactly how much your personal data is worth to Facebook, Google, TikTok, ChatGPT, and 60+ other platforms. Regional breakdown based on real SEC filings and published ARPU rates.",
  keywords: [
    "how much is my data worth",
    "platform data value",
    "social media ARPU",
    "ad revenue per user by platform",
    "data value calculator",
    "personal data pricing",
  ],
  openGraph: {
    title: "How Much Is Your Data Worth to Every Platform?",
    description:
      "Per-platform data values for 60+ apps and services, based on real ARPU from SEC filings.",
    type: "website",
    siteName: "trafi.cc",
    url: "https://trafi.cc/worth/",
  },
  twitter: {
    card: "summary",
    title: "How Much Is Your Data Worth to Every Platform?",
    description: "Per-platform data values for 60+ apps, based on real SEC filings.",
  },
  alternates: {
    canonical: "https://trafi.cc/worth/",
  },
};

export default function WorthIndexPage() {
  const byCategory = platformCategories.map((cat) => ({
    ...cat,
    platforms: platforms
      .filter((p) => p.category === cat.id)
      .sort((a, b) => b.arpu.na - a.arpu.na),
  }));

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <NavBar />

      <main className="max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
          How Much Is Your Data Worth to Every Platform?
        </h1>
        <p className="text-text-muted text-lg leading-relaxed mb-10">
          We&apos;ve compiled per-user ad revenue (ARPU) for 60+ platforms from SEC
          filings, earnings reports, and industry benchmarks. Pick a platform to
          see the number, regional breakdown, and source tier.
        </p>

        <div className="space-y-10">
          {byCategory.map((cat) => (
            <section key={cat.id}>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted mb-4">
                {cat.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.platforms.map((p) => (
                  <Link
                    key={p.id}
                    href={`/worth/${p.id}`}
                    className="border border-border rounded-lg p-4 bg-surface hover:border-text-muted/30 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-medium text-text-primary">{p.name}</div>
                      <div className="text-sm text-accent font-[family-name:var(--font-mono)] tabular-nums">
                        {formatCurrency(dataValueFromARPU(p.arpu.na))}/yr
                      </div>
                    </div>
                    <div className="text-xs text-text-muted mt-1">
                      NA data value · platform ARPU ${p.arpu.na.toFixed(2)}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-12 pt-8 border-t border-border">
          <Link
            href="/methodology"
            className="flex-1 text-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text-primary hover:border-text-muted/30 transition-colors"
          >
            Methodology & Sources
          </Link>
          <Link
            href="/"
            className="flex-1 text-center px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:brightness-110 transition-all"
          >
            Calculate my total worth
          </Link>
        </div>
      </main>
    </div>
  );
}
