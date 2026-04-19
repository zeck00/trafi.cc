import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Blog — Data Value, ARPU, and the Attention Economy",
  description:
    "Deep-dives into how much your personal data is worth, how platforms make money from it, and what the attention economy looks like per-user. Based on real SEC filings and industry data.",
  keywords: [
    "data value blog",
    "ARPU explained",
    "attention economy articles",
    "how much is my data worth",
    "personal data value",
    "ad revenue analysis",
  ],
  openGraph: {
    title: "Blog — Data Value, ARPU, and the Attention Economy",
    description:
      "Deep-dives into data value, ad revenue, and the economics of personal data.",
    type: "website",
    siteName: "trafi.cc",
    url: "https://trafi.cc/blog/",
  },
  twitter: {
    card: "summary",
    title: "trafi.cc Blog — Data Value & ARPU explained",
    description:
      "Deep-dives into data value, ad revenue, and the economics of personal data.",
  },
  alternates: {
    canonical: "https://trafi.cc/blog/",
  },
};

export default function BlogIndexPage() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <NavBar />

      <main className="max-w-2xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
          Blog
        </h1>
        <p className="text-text-muted text-lg leading-relaxed mb-12">
          Deep-dives into data value, ad revenue, and the economics of personal
          data. New posts every Wednesday.
        </p>

        <div className="space-y-8">
          {sorted.map((a) => (
            <article key={a.slug} className="border-b border-border pb-8 last:border-0">
              <div className="flex items-center gap-3 text-xs text-text-muted mb-2 font-[family-name:var(--font-mono)]">
                <time dateTime={a.date}>{a.date}</time>
                <span className="opacity-50">·</span>
                <span>{a.readMinutes} min read</span>
              </div>
              <h2 className="text-xl font-bold font-[family-name:var(--font-heading)] mb-2">
                <Link
                  href={`/blog/${a.slug}`}
                  className="text-text-primary hover:text-primary transition-colors"
                >
                  {a.title}
                </Link>
              </h2>
              <p className="text-sm text-text-muted leading-relaxed mb-3">
                {a.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-text-muted bg-surface border border-border rounded-full px-2 py-0.5"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mt-12 pt-8 border-t border-border">
          <Link
            href="/worth"
            className="flex-1 text-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text-primary hover:border-text-muted/30 transition-colors"
          >
            Browse all platforms
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
