import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, Callout } from "@/components/blog/ArticleLayout";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("the-600-billion-attention-economy-per-capita")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "attention economy",
    "digital ad spend per person",
    "global ad industry",
    "ad revenue per capita",
    "how much is personal attention worth",
  ],
  openGraph: {
    title: article.title,
    description: article.description,
    type: "article",
    publishedTime: article.date,
    siteName: "trafi.cc",
    url: `https://trafi.cc/blog/${article.slug}/`,
  },
  twitter: {
    card: "summary",
    title: article.title,
    description: article.description,
  },
  alternates: {
    canonical: `https://trafi.cc/blog/${article.slug}/`,
  },
};

export default function Post() {
  return (
    <ArticleLayout article={article}>
      <p>
        Digital advertising is a $600B+ industry globally. That number shows
        up in every industry report but it&apos;s hard to feel. $600B is
        abstract. Divided by people, it becomes concrete.
      </p>

      <H2>The per-capita math</H2>
      <p>
        Roughly 5.4B people are internet users. If we divide $600B evenly
        across them, that&apos;s about <strong className="text-text-primary">$111
        per internet user per year</strong> going to digital ads. But evenly
        is wrong — the distribution is extreme.
      </p>
      <p>
        The US accounts for roughly 37% of global digital ad spend ($225B+
        per IAB&apos;s 2024 report) with 330M people. That&apos;s about{" "}
        <strong className="text-text-primary">$680 per US person per year</strong>.
        Western Europe is around $250-400. Southeast Asia: $20-40. Sub-Saharan
        Africa: $5-10.
      </p>

      <Callout>
        This is gross industry spend, not what you&apos;re worth to any single
        platform. The{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>{" "}
        shows you your share across the specific apps you use.
      </Callout>

      <H2>Why the gap is so wide</H2>
      <p>
        Advertisers bid on impressions based on expected return. A US consumer
        buying a $1,000 sofa generates more revenue than a Vietnamese consumer
        buying a $30 pair of shoes, so the bid to reach the US consumer is
        higher. CPMs follow purchasing power almost perfectly.
      </p>
      <p>
        This isn&apos;t a moral statement — it&apos;s just how the auction
        works. And it explains why the regional ARPU differences you see in
        SEC filings are so dramatic. Meta&apos;s US ARPP is $268. The same
        company&apos;s ROW ARPP is $14. Same infrastructure, same targeting,
        same company — different markets.
      </p>

      <H2>Where the money concentrates</H2>
      <p>
        Five platforms absorb the majority of the $600B: Google, Meta,
        Amazon, TikTok/ByteDance, and Alibaba. Google alone is $264B (44%).
        Meta is $160B (27%). Amazon Ads is $56B. TikTok&apos;s parent
        ByteDance is estimated at $50B+ in ads. Alibaba around $30B.
      </p>
      <p>
        Five companies, nearly 90% of the pie. The rest of the industry —
        Snap, Pinterest, Reddit, LinkedIn, every streaming service, every
        ride-share, every news site — splits the remaining 10-15%.
      </p>

      <H2>Your per-capita share of the pie</H2>
      <p>
        The typical US user shows up in most of the big five: Google
        (~$95/yr), Facebook (~$160/yr), Instagram (~$107/yr), Amazon
        (~$109/yr), YouTube (~$43/yr). That&apos;s $500+ of industry spend
        attributable to one person. Add TikTok ($82), Pinterest ($27),
        Snapchat ($28), Reddit ($18), and you&apos;re over $650 — close to
        the $680 per-capita figure.
      </p>
      <p>
        But again, what you&apos;re <em>worth</em> (raw data value) is
        different from what the industry <em>spends on you</em>. Most of that
        spend pays for platform infrastructure. Your raw data&apos;s share is
        around 20%.
      </p>

      <H2>The takeaway</H2>
      <p>
        The attention economy is $600B. Per US user, it&apos;s about $680/yr.
        Per your raw data specifically, it&apos;s closer to $100-200 — still
        meaningful, but an order of magnitude below the viral screenshots.
      </p>
      <p>
        For the exact math, see the{" "}
        <Link href="/methodology" className="text-primary hover:underline">
          methodology page
        </Link>
        . To see your share across specific platforms, run the{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
