import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, Callout } from "@/components/blog/ArticleLayout";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("how-much-does-facebook-really-make-from-you")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "facebook ARPU",
    "meta ARPP",
    "how much does facebook make from me",
    "facebook data value",
    "instagram ARPU",
    "meta 10-K 2024",
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
        Every so often someone on Reddit posts a screenshot saying &quot;Meta makes
        $268 a year off of you.&quot; That number comes from a specific line in a
        specific SEC filing, and it&apos;s more nuanced than the screenshot
        suggests. Here&apos;s what&apos;s actually going on.
      </p>

      <H2>The $268 number</H2>
      <p>
        Meta&apos;s FY2024 10-K reports <strong className="text-text-primary">Average
        Revenue Per Person (ARPP)</strong> of $268 for the US &amp; Canada
        region. Worldwide the number is much lower — roughly $47 for Europe,
        $19 for Asia-Pacific, and $14 for &quot;rest of world.&quot; Meta calls it
        ARPP, not ARPU, because a single person often has accounts across
        Facebook, Instagram, WhatsApp, and Messenger, and the company doesn&apos;t
        want to double-count.
      </p>
      <p>
        So that $268 is the <em>family</em> number. It covers everything Meta
        monetizes about a single North American adult — newsfeed ads on
        Facebook, Reels ads on Instagram, Messenger sponsored messages,
        Marketplace, the whole thing.
      </p>

      <H2>How it splits across Facebook and Instagram</H2>
      <p>
        Meta doesn&apos;t publish per-app ARPU. But based on reported ad
        impressions and industry estimates, Facebook generates roughly 60% of
        Meta&apos;s ad revenue, Instagram 35-40%, with WhatsApp and Messenger
        making up the remainder. That puts the per-app numbers at roughly:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li>Facebook: <span className="text-text-primary font-[family-name:var(--font-mono)]">~$160/yr per US user</span></li>
        <li>Instagram: <span className="text-text-primary font-[family-name:var(--font-mono)]">~$107/yr per US user</span></li>
        <li>WhatsApp + Messenger: <span className="text-text-primary font-[family-name:var(--font-mono)]">~$1</span></li>
      </ul>
      <p>
        The split matters because most people don&apos;t use all four. If you
        only use Instagram, your Meta value is closer to $107, not $268.
      </p>

      <H2>But your data isn&apos;t worth $268</H2>
      <p>
        Here&apos;s the part that gets skipped in the screenshots. ARPP is what
        Meta makes <em>in total</em> — including the value of their ad
        auction infrastructure, their targeting algorithms, their sales teams,
        and the attention they&apos;ve already aggregated. Your raw personal
        data is only part of the equation.
      </p>
      <p>
        The FTC&apos;s 2014 report on data brokers, combined with more recent
        academic work on &quot;personal data pricing,&quot; puts the raw-data
        share of platform ad revenue at roughly 15-25%. We use 20% as a
        working number. That makes your Facebook data worth about{" "}
        <strong className="text-accent font-[family-name:var(--font-mono)]">$32/year</strong>{" "}
        and your Instagram data about{" "}
        <strong className="text-accent font-[family-name:var(--font-mono)]">$21/year</strong>{" "}
        before demographic adjustments.
      </p>

      <Callout>
        Want the exact number for you? The{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>{" "}
        applies age, device, and interest multipliers, caps platform families,
        and regions the ARPU before returning a final value.
      </Callout>

      <H2>Why iOS users are worth more</H2>
      <p>
        Even on Facebook, not all users are priced equally. iOS users command
        2-3x the CPMs of Android users, according to Tenjin and Liftoff&apos;s
        mobile ad benchmarks. The reason is a combination of purchasing power
        (iPhone users have higher median income) and supply constraint (Apple&apos;s
        App Tracking Transparency limits the inventory advertisers can target,
        which pushes CPMs up for the remaining supply).
      </p>
      <p>
        If you&apos;re curious about that specific dynamic, we have a separate
        post on{" "}
        <Link
          href="/blog/why-ios-users-are-worth-2x-more-than-android"
          className="text-primary hover:underline"
        >
          why iOS users are worth 2-3x more than Android
        </Link>
        .
      </p>

      <H2>The takeaway</H2>
      <p>
        Meta makes $268 per year from a typical North American adult across
        its whole family of apps. Your Facebook data alone is probably worth
        around $32 to them (or more if you&apos;re in a high-value demographic,
        less if you&apos;re not). The number isn&apos;t the point — the point is
        it&apos;s knowable. Meta publishes it. You should know what it is.
      </p>
      <p>
        See the per-platform breakdown on the{" "}
        <Link href="/worth/facebook" className="text-primary hover:underline">
          Facebook data value page
        </Link>{" "}
        or the{" "}
        <Link href="/worth/instagram" className="text-primary hover:underline">
          Instagram data value page
        </Link>
        . Full methodology and SEC filing citations are on the{" "}
        <Link href="/methodology" className="text-primary hover:underline">
          methodology page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
