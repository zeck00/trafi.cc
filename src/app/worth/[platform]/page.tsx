import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { platforms } from "@/data/platforms";
import {
  DATA_VALUE_FRACTION,
  buildMetaDescription,
  dataTypeLabels,
  dataValueFromARPU,
  formatCurrency,
  getCategoryLabel,
  getPlatformSource,
  getPlatformTier,
  getRelatedPlatforms,
  regionLabels,
  tierLabels,
} from "@/lib/platform-page";

export function generateStaticParams() {
  return platforms.map((p) => ({ platform: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const { platform: platformId } = await params;
  const platform = platforms.find((p) => p.id === platformId);
  if (!platform) return {};

  const value = dataValueFromARPU(platform.arpu.na);
  const title = `How Much Is Your ${platform.name} Data Worth? (~${formatCurrency(value)}/yr)`;
  const description = buildMetaDescription(platform);

  return {
    title,
    description,
    keywords: [
      `${platform.name} data worth`,
      `how much is my ${platform.name} data worth`,
      `${platform.name} ARPU`,
      `${platform.name} ad revenue per user`,
      `how much does ${platform.name} make from me`,
      `${platform.name} data value`,
      "personal data value",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "trafi.cc",
      url: `https://trafi.cc/worth/${platform.id}/`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: {
      canonical: `https://trafi.cc/worth/${platform.id}/`,
    },
  };
}

export default async function WorthPlatformPage({
  params,
}: {
  params: Promise<{ platform: string }>;
}) {
  const { platform: platformId } = await params;
  const platform = platforms.find((p) => p.id === platformId);
  if (!platform) notFound();

  const tier = getPlatformTier(platform.id);
  const tierInfo = tierLabels[tier];
  const source = getPlatformSource(platform.id);
  const related = getRelatedPlatforms(platform);
  const categoryLabel = getCategoryLabel(platform.category);

  const naValue = dataValueFromARPU(platform.arpu.na);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://trafi.cc/" },
          { "@type": "ListItem", position: 2, name: "Data Worth", item: "https://trafi.cc/worth/" },
          {
            "@type": "ListItem",
            position: 3,
            name: platform.name,
            item: `https://trafi.cc/worth/${platform.id}/`,
          },
        ],
      },
      {
        "@type": "WebPage",
        name: `How Much Is Your ${platform.name} Data Worth?`,
        url: `https://trafi.cc/worth/${platform.id}/`,
        description: buildMetaDescription(platform),
        isPartOf: { "@id": "https://trafi.cc/#website" },
      },
    ],
  };

  return (
    <div className="min-h-dvh bg-background text-text-primary">
      <NavBar />

      <main className="max-w-2xl mx-auto px-5 py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-text-muted mb-4" aria-label="Breadcrumb">
          <Link href="/worth" className="hover:text-text-primary transition-colors">
            Data Worth
          </Link>
          <span className="mx-2 opacity-50">/</span>
          <span className="text-text-primary">{platform.name}</span>
        </nav>

        <h1 className="text-4xl font-bold font-[family-name:var(--font-heading)] mb-4">
          How Much Is Your {platform.name} Data Worth?
        </h1>

        <p className="text-text-muted text-lg leading-relaxed mb-8">
          {platform.name} generates roughly{" "}
          <strong className="text-text-primary font-[family-name:var(--font-mono)]">
            ${platform.arpu.na.toFixed(2)}
          </strong>{" "}
          in annual ad revenue per North American user. Your personal data
          accounts for about 20% of that — roughly{" "}
          <strong className="text-accent font-[family-name:var(--font-mono)]">
            {formatCurrency(naValue)}/year
          </strong>
          {" "}before demographic adjustments. The rest comes from {platform.name}&apos;s ad
          infrastructure, targeting algorithms, and auction systems.
        </p>

        {/* Tier callout */}
        <div className="border border-border rounded-lg p-4 bg-surface mb-10">
          <div className={`text-xs font-bold uppercase tracking-wider ${tierInfo.color} mb-1`}>
            {tierInfo.label}
          </div>
          <p className="text-sm text-text-muted leading-relaxed">{tierInfo.summary}</p>
          {source && (
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline mt-2 inline-block"
            >
              View source: {source.title} →
            </a>
          )}
        </div>

        {/* Regional ARPU table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            Regional Breakdown
          </h2>
          <p className="text-sm text-text-muted mb-4 leading-relaxed">
            Advertiser spending follows purchasing power. A North American
            {platform.name} user is worth far more than a user in South Asia.
            Here&apos;s how {platform.name}&apos;s ARPU breaks down by region:
          </p>
          <div className="border border-border rounded-lg overflow-hidden bg-surface">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-text-muted">
                  <th className="text-left py-3 px-4 font-medium">Region</th>
                  <th className="text-right py-3 px-4 font-medium">Platform ARPU</th>
                  <th className="text-right py-3 px-4 font-medium">Your data value</th>
                </tr>
              </thead>
              <tbody>
                {(Object.keys(regionLabels) as (keyof typeof regionLabels)[]).map((r) => (
                  <tr key={r} className="border-b border-border last:border-0">
                    <td className="py-3 px-4 text-text-primary">{regionLabels[r]}</td>
                    <td className="text-right py-3 px-4 text-text-muted font-[family-name:var(--font-mono)] tabular-nums">
                      ${platform.arpu[r].toFixed(2)}
                    </td>
                    <td className="text-right py-3 px-4 text-accent font-[family-name:var(--font-mono)] tabular-nums">
                      ${(platform.arpu[r] * DATA_VALUE_FRACTION).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Data Type Breakdown */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            What {platform.name} Values About You
          </h2>
          <p className="text-sm text-text-muted mb-4 leading-relaxed">
            Not all data is equal. Platforms weight different signals based on
            how they actually monetize. {platform.name}&apos;s mix:
          </p>
          <div className="space-y-3">
            {platform.dataTypes
              .slice()
              .sort((a, b) => b.weight - a.weight)
              .map((dt) => (
                <div key={dt.type}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-text-primary">{dataTypeLabels[dt.type]}</span>
                    <span className="text-text-muted font-[family-name:var(--font-mono)] tabular-nums">
                      {(dt.weight * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-surface overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${dt.weight * 100}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* What this means */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
            What This Means
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            {platform.name}&apos;s ARPU of ${platform.arpu.na.toFixed(2)} per North
            American user is the headline number. But the actual value attached to
            your individual data is roughly the 20% slice — around{" "}
            <strong className="text-text-primary">{formatCurrency(naValue)}/year</strong>.
            Age, device, and interest targeting can push that higher. For context,
            users aged 35-54 are typically worth 15-20% more, iOS users command 2-3x
            the CPMs of Android users, and luxury or finance interests can raise your
            value by 1.5-1.6x.
          </p>
          <p className="text-sm text-text-muted leading-relaxed mt-3">
            To see what you&apos;re worth across every app you use,{" "}
            <Link href="/" className="text-primary hover:underline">
              run the full calculator
            </Link>{" "}
            — it combines platforms, applies demographic multipliers, and caps
            platform families to avoid double-counting (e.g., Facebook and Instagram
            both share Meta&apos;s ARPU).
          </p>
        </section>

        {/* Related platforms */}
        {related.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] mb-4">
              Other {categoryLabel} Platforms
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/worth/${p.id}`}
                  className="border border-border rounded-lg p-4 bg-surface hover:border-text-muted/30 transition-colors"
                >
                  <div className="font-medium text-text-primary text-sm">{p.name}</div>
                  <div className="text-xs text-text-muted mt-1 font-[family-name:var(--font-mono)] tabular-nums">
                    ~{formatCurrency(dataValueFromARPU(p.arpu.na))}/yr data value (NA)
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-8 border-t border-border">
          <Link
            href="/methodology"
            className="flex-1 text-center px-6 py-3 rounded-lg border border-border text-sm font-medium text-text-muted hover:text-text-primary hover:border-text-muted/30 transition-colors"
          >
            Methodology
          </Link>
          <Link
            href="/"
            className="flex-1 text-center px-6 py-3 rounded-full bg-accent text-white text-sm font-medium hover:brightness-110 transition-all"
          >
            Calculate my total worth
          </Link>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
