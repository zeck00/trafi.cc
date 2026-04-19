import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout, H2, Callout } from "@/components/blog/ArticleLayout";
import { getArticleBySlug } from "@/data/articles";

const article = getArticleBySlug("chatgpt-45-dollar-business-model-explained")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.description,
  keywords: [
    "ChatGPT ARPU",
    "OpenAI revenue per user",
    "how much does OpenAI make",
    "ChatGPT business model",
    "AI data value",
    "ChatGPT $25B ARR",
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
        OpenAI isn&apos;t public, so there&apos;s no 10-K. But the company has
        been increasingly open about revenue, and as of early 2026 the numbers
        are knowable: <strong className="text-text-primary">$25B in annualized
        revenue</strong>, <strong className="text-text-primary">910M weekly
        active users</strong>, <strong className="text-text-primary">~50M
        paying subscribers</strong>. Divide the ARR by the user base and you
        get a per-user figure. Here&apos;s what that looks like, and what it
        misses.
      </p>

      <H2>The $27.50 global number</H2>
      <p>
        $25B ÷ 910M weekly users = ~$27.50 per weekly user per year globally.
        That&apos;s ARPU, roughly. It&apos;s not a perfect apples-to-apples
        comparison with Meta&apos;s ARPP because Meta reports per-person
        rather than per-weekly-user, but it&apos;s the closest available
        figure.
      </p>
      <p>
        Adjusting for region gets you the headline number we use on trafi.cc:
        roughly{" "}
        <strong className="text-text-primary font-[family-name:var(--font-mono)]">$45/yr for NA users</strong>,{" "}
        <strong className="text-text-primary font-[family-name:var(--font-mono)]">$18 for EU</strong>,{" "}
        <strong className="text-text-primary font-[family-name:var(--font-mono)]">$4 for APAC</strong>.
        North America is overweighted in OpenAI&apos;s revenue because
        that&apos;s where most paying subscribers are.
      </p>

      <H2>Where the $25B comes from</H2>
      <p>
        Three streams, roughly:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li><strong className="text-text-primary">ChatGPT consumer subs</strong> (~$20/mo × 50M subs ≈ $12B ARR)</li>
        <li><strong className="text-text-primary">Enterprise / Team plans</strong> (~$8-10B)</li>
        <li><strong className="text-text-primary">API / developer platform</strong> (~$3-5B)</li>
      </ul>
      <p>
        Zero of that is from ads. OpenAI has been clear they don&apos;t plan
        to monetize via ads the way Meta and Google do, at least not
        primarily. But the user-data question still applies: your conversations,
        your prompts, your usage patterns feed training data (unless you
        explicitly opt out in settings). That&apos;s where the data value
        shows up.
      </p>

      <Callout>
        If you use ChatGPT as a free user, you&apos;re the product in the
        traditional sense — your data is what trains the models. If you pay,
        you&apos;re a customer in the normal sense, but your data can still
        be used for training unless you opt out under settings → data controls.
      </Callout>

      <H2>Why it&apos;s Tier 2, not Tier 1</H2>
      <p>
        On{" "}
        <Link href="/methodology" className="text-primary hover:underline">
          our methodology page
        </Link>
        , we tier sources by how directly the number comes from the company.
        Tier 1 is directly disclosed in SEC filings (Meta, Snap, Pinterest,
        Reddit). Tier 2 is derived from public figures (Google, Amazon,
        Uber). Tier 3 is estimated from industry benchmarks (TikTok, LinkedIn,
        most messaging apps).
      </p>
      <p>
        ChatGPT&apos;s $45/yr is Tier 2. OpenAI has publicly confirmed the
        $25B ARR figure and the 910M weekly active users number. The
        divisions and the regional weighting are ours. Not audited — but not
        speculation either.
      </p>

      <H2>Compared to other AI platforms</H2>
      <p>
        Context helps. Here&apos;s how the major AI platforms stack up by NA
        per-user value:
      </p>
      <ul className="list-disc list-inside space-y-1 ml-2">
        <li><Link href="/worth/chatgpt" className="text-primary hover:underline">ChatGPT</Link>: $45 NA</li>
        <li><Link href="/worth/gemini" className="text-primary hover:underline">Google Gemini</Link>: $20 NA (plus whatever Google already knows)</li>
        <li><Link href="/worth/metaai" className="text-primary hover:underline">Meta AI</Link>: $18 NA (folded into Meta ads)</li>
        <li><Link href="/worth/claude" className="text-primary hover:underline">Claude</Link>: $15 NA (80% enterprise, consumer data not used for training)</li>
        <li><Link href="/worth/copilot" className="text-primary hover:underline">Copilot</Link>: $12 NA</li>
        <li><Link href="/worth/grok" className="text-primary hover:underline">Grok</Link>: $10 NA (trains on X data)</li>
        <li><Link href="/worth/perplexity" className="text-primary hover:underline">Perplexity</Link>: $8 NA</li>
        <li><Link href="/worth/midjourney" className="text-primary hover:underline">Midjourney</Link>: $6 NA</li>
      </ul>

      <H2>The takeaway</H2>
      <p>
        ChatGPT&apos;s per-user value is higher than most people expect, but
        the mechanism is different from Meta or Google. Meta sells your
        attention to advertisers. OpenAI sells access to capabilities, and
        your data funds capability improvement. Same dollar value on paper,
        different value chain.
      </p>
      <p>
        For your full AI exposure, select the AI platforms you use in the{" "}
        <Link href="/" className="text-primary hover:underline">
          calculator
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
