import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, Callout } from "@/components/blog/ArticleLayout";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("why-ios-users-are-worth-2x-more-than-android")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "iOS vs Android CPM",
    "why are iPhone ads more expensive",
    "app tracking transparency impact",
    "iOS ad value",
    "mobile ad benchmarks",
    "Tenjin Liftoff CPM",
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
        If you open Tenjin&apos;s or Liftoff&apos;s mobile ad benchmarks, you
        notice something immediately: iOS CPMs are about 2-3x higher than
        Android CPMs for the same category and the same geography. A US
        Facebook ad slot on iPhone might go for $10-12 per thousand
        impressions. The same slot on Android goes for $3-5.
      </p>
      <p>
        Why? It&apos;s not one thing — it&apos;s a stack of reasons that
        compound. Here&apos;s the breakdown.
      </p>

      <H2>1. Purchasing power</H2>
      <p>
        iPhone users have higher median household income than Android users in
        basically every developed market. Advertisers know this, and they bid
        accordingly. If a retailer is selling a $300 handbag, they&apos;d
        rather spend $5 to reach an iPhone user with a 4% chance of
        converting than $2 to reach an Android user with a 1% chance. The
        expected value per impression is what drives CPMs, not the absolute
        cost.
      </p>

      <H2>2. App Tracking Transparency</H2>
      <p>
        Apple&apos;s ATT framework, introduced in iOS 14.5 (2021), requires
        apps to prompt users before tracking them across other apps and
        websites. About 75% of users opt out when asked. That means a large
        chunk of iOS inventory can&apos;t be targeted the same way Android
        inventory can.
      </p>
      <p>
        Counterintuitively, this <em>raises</em> CPMs for the remaining
        targetable iOS inventory. Advertisers bidding for targeted reach have
        fewer iOS impressions to buy, so the ones that are available get bid
        up. It&apos;s a supply constraint.
      </p>

      <Callout>
        If you want to see this in practice: the calculator applies a 1.2x
        multiplier for iOS and 0.85x for Android. That&apos;s the net effect
        after blending purchasing power and the ATT supply crunch — roughly a
        1.4x delta between the two. The{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>{" "}
        lets you switch between devices to see it.
      </Callout>

      <H2>3. Engagement and attention</H2>
      <p>
        iOS users spend more time in apps per session, on average, than
        Android users. More attention per impression = more opportunities for
        conversion = higher CPMs. It&apos;s a small factor on top of the
        other two, but it&apos;s real.
      </p>

      <H2>What this means for your data value</H2>
      <p>
        If you&apos;re an iPhone user, your combined data value across Meta,
        Google, TikTok, and the rest is about 1.4x higher than it would be on
        Android. A $50/yr profile becomes a $70/yr profile. A $200/yr heavy
        social media user becomes ~$280.
      </p>
      <p>
        It doesn&apos;t mean you should switch phones for privacy reasons —
        Android has its own tracking surface, just different. But if you want
        to see what your specific device context does to your data value, run
        the{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>{" "}
        with iOS vs Android and compare.
      </p>

      <H2>The takeaway</H2>
      <p>
        The iOS premium isn&apos;t one effect — it&apos;s purchasing power,
        ATT-induced scarcity, and engagement stacked on top of each other.
        And unlike platform ARPU, it applies to <em>every</em> app you use.
      </p>
      <p>
        For the full picture, check the{" "}
        <Link href="/methodology" className="text-primary hover:underline">
          methodology page
        </Link>{" "}
        for the exact multipliers and their sources, or browse{" "}
        <Link href="/worth" className="text-primary hover:underline">
          per-platform data values
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
