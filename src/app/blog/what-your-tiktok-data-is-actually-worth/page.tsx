import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, Callout } from "@/components/blog/ArticleLayout";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("what-your-tiktok-data-is-actually-worth")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "TikTok data worth",
    "TikTok ARPU",
    "how much does TikTok make per user",
    "ByteDance revenue",
    "TikTok ad revenue US",
    "TikTok data value",
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
        TikTok is private. ByteDance doesn&apos;t file 10-Ks with the SEC.
        There&apos;s no official ARPU number. So why do we publish one?
        Because the inputs are all public — and the math is straightforward.
      </p>

      <H2>The $82 estimate</H2>
      <p>
        Multiple analyst reports and trade press (Bernstein, Bloomberg,
        Insider Intelligence, The Information) have triangulated US TikTok ad
        revenue at{" "}
        <strong className="text-text-primary">~$14B for 2024</strong>. TikTok
        itself has publicly cited{" "}
        <strong className="text-text-primary">~170M US monthly active users</strong>.
        Divide the first by the second and you get roughly{" "}
        <strong className="text-text-primary font-[family-name:var(--font-mono)]">$82 per US user per year</strong>.
      </p>
      <p>
        That&apos;s the headline. The data value slice — the portion
        attributable to your raw behavioral data as opposed to TikTok&apos;s
        infrastructure — is roughly 20% of that, or{" "}
        <strong className="text-accent font-[family-name:var(--font-mono)]">$16/yr</strong>.
        Demographic multipliers can push this higher. A US iOS user aged 25-34
        with finance or luxury interests could easily be worth{" "}
        <strong className="text-accent font-[family-name:var(--font-mono)]">$25-30/yr</strong>{" "}
        to TikTok.
      </p>

      <H2>Why it&apos;s Tier 3</H2>
      <p>
        We label TikTok&apos;s number Tier 3 (&quot;industry estimate&quot;)
        because ByteDance doesn&apos;t audit or publish the two inputs
        themselves. The $14B revenue figure comes from analyst firms modeling
        TikTok&apos;s US business from cross-checks on advertiser spend,
        comparable platforms, and known campaign pricing. The 170M MAU figure
        comes from TikTok&apos;s own marketing materials, which are not
        independently audited.
      </p>
      <p>
        Directionally, it&apos;s reliable. The range across analysts is tight
        (most estimates fall in the $12-16B revenue band, $160-180M user
        band). But it&apos;s not SEC-audited the way Meta&apos;s or
        Pinterest&apos;s ARPU is.
      </p>

      <Callout>
        See{" "}
        <Link href="/methodology" className="text-primary hover:underline">
          methodology
        </Link>{" "}
        for how we handle the three tiers. Short version: Tier 1 = SEC
        filing. Tier 2 = math on SEC-filed inputs. Tier 3 = analyst
        triangulation.
      </Callout>

      <H2>How TikTok compares</H2>
      <p>
        For context, here&apos;s where TikTok sits among social platforms by
        NA ARPU:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li><Link href="/worth/facebook" className="text-primary hover:underline">Facebook</Link>: $160 (Tier 1, audited)</li>
        <li><Link href="/worth/instagram" className="text-primary hover:underline">Instagram</Link>: $107 (Tier 1, derived from Meta split)</li>
        <li><Link href="/worth/tiktok" className="text-primary hover:underline">TikTok</Link>: ~$82 (Tier 3)</li>
        <li><Link href="/worth/youtube" className="text-primary hover:underline">YouTube</Link>: $43 (Tier 2)</li>
        <li><Link href="/worth/snapchat" className="text-primary hover:underline">Snapchat</Link>: $28.41 (Tier 1, audited)</li>
        <li><Link href="/worth/pinterest" className="text-primary hover:underline">Pinterest</Link>: $27 (Tier 1, audited)</li>
      </ul>
      <p>
        TikTok is the outlier on the list — a private company with numbers
        close to the audited Meta apps but without the SEC paper trail.
      </p>

      <H2>Why TikTok&apos;s per-user value is so high</H2>
      <p>
        Short answer: engagement. TikTok users open the app more times per
        day and spend more time per session than users of most other social
        platforms. More time = more ad impressions = more revenue per user.
        The US audience also skews younger and more ad-responsive, which
        helps push CPMs up.
      </p>
      <p>
        The flip side is that TikTok&apos;s targeting is relatively less
        mature than Meta&apos;s or Google&apos;s, which limits what advertisers
        are willing to pay per impression. Net result: volume makes up for
        price.
      </p>

      <H2>The takeaway</H2>
      <p>
        If you&apos;re a US TikTok user, you&apos;re worth about $82 per year
        to the platform — and about $16 of that is specifically your raw
        data. Run the{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>{" "}
        to see the full per-platform breakdown, or read the{" "}
        <Link href="/worth/tiktok" className="text-primary hover:underline">
          TikTok data value page
        </Link>{" "}
        for the regional split.
      </p>
    </ArticleLayout>
  );
}
