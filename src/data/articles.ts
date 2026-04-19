export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readMinutes: number;
  excerpt: string;
}

export const articles: Article[] = [
  {
    slug: "how-much-does-facebook-really-make-from-you",
    title: "How Much Does Facebook Really Make From You? ($160/yr, unpacked)",
    description:
      "Meta's FY2024 10-K reports $268 in annual revenue per US & Canada user. Here's how that breaks down between Facebook and Instagram, and why your individual data is worth a lot less than that.",
    excerpt:
      "Meta's headline number is $268 per US user per year. But that's the family ARPU — covering Facebook, Instagram, WhatsApp, and Messenger combined. Here's how to split it.",
    date: "2026-04-19",
    tags: ["facebook", "meta", "arpu", "sec-filings"],
    readMinutes: 6,
  },
  {
    slug: "why-ios-users-are-worth-2x-more-than-android",
    title: "Why iOS Users Are Worth 2-3x More Than Android",
    description:
      "iOS CPMs are consistently 2-3x higher than Android. Part of it is purchasing power, part of it is Apple's App Tracking Transparency. Here's the actual data, and why advertisers pay more for an iPhone.",
    excerpt:
      "If you use an iPhone, your ad impressions are worth roughly 2-3x what the same impressions would be worth to an Android user. The reason isn't one thing — it's a stack of them.",
    date: "2026-04-20",
    tags: ["ios", "android", "cpm", "ad-tracking-transparency"],
    readMinutes: 5,
  },
  {
    slug: "the-600-billion-attention-economy-per-capita",
    title: "The $600B Attention Economy — Your Personal Share",
    description:
      "Digital advertising is a $600B+ industry globally. Divided by the world's internet users, that's about $100 per person per year — but the distribution is extreme.",
    excerpt:
      "$600B sounds abstract until you divide it by people. Here's what the attention economy looks like at the per-capita level — and why most of that value concentrates in a few hundred million users.",
    date: "2026-04-21",
    tags: ["ad-industry", "per-capita", "big-picture"],
    readMinutes: 6,
  },
  {
    slug: "chatgpt-45-dollar-business-model-explained",
    title: "ChatGPT's $45/user Business Model, Explained",
    description:
      "OpenAI hit $25B ARR against 910M weekly users in Feb 2026. That's ~$27.50 per weekly user globally and ~$45 in North America. Here's how the math shakes out across subscriptions, API, and future ad monetization.",
    excerpt:
      "OpenAI doesn't break out ARPU the way Meta does, but the numbers are public. $25B ARR ÷ 910M weekly users = $27.50 global, roughly $45 for NA users. Here's why.",
    date: "2026-04-22",
    tags: ["chatgpt", "openai", "ai", "arpu"],
    readMinutes: 5,
  },
  {
    slug: "what-your-tiktok-data-is-actually-worth",
    title: "What Your TikTok Data Is Actually Worth (~$82/yr in the US)",
    description:
      "TikTok is private, so there's no 10-K. But analyst reports put US ad revenue at ~$14B across ~170M users — roughly $82 per user, or ~$16 in data value. Here's the math.",
    excerpt:
      "ByteDance doesn't publish ARPU, but analysts have triangulated US TikTok ad revenue at ~$14B. Divide that by ~170M US users and you get ~$82/user — higher than Snapchat, lower than Facebook.",
    date: "2026-04-23",
    tags: ["tiktok", "bytedance", "arpu", "social"],
    readMinutes: 5,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
