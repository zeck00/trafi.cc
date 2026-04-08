import type { Platform, PlatformCategory } from "@/types";

export const platformCategories: { id: PlatformCategory; label: string }[] = [
  { id: "social", label: "Social" },
  { id: "messaging", label: "Messaging" },
  { id: "shopping", label: "Shopping" },
  { id: "streaming", label: "Streaming" },
  { id: "productivity", label: "Productivity" },
  { id: "delivery", label: "Delivery & Ride-hail" },
  { id: "dating", label: "Dating" },
  { id: "finance", label: "Finance" },
  { id: "health", label: "Health & Fitness" },
];

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  ARPU DATA SOURCES & METHODOLOGY                                       ║
// ║                                                                         ║
// ║  Tier 1 — SEC filings (directly reported ARPU):                        ║
// ║    Meta (FB+IG), Snap, Pinterest, Reddit, Spotify, Match Group         ║
// ║                                                                         ║
// ║  Tier 2 — Derived from public financials (revenue / user count):       ║
// ║    Google/YouTube, Amazon Ads, Uber, PayPal, Bumble                    ║
// ║                                                                         ║
// ║  Tier 3 — Industry estimates (eMarketer, analysts, press):             ║
// ║    TikTok, X/Twitter, LinkedIn, WhatsApp, messaging, delivery,         ║
// ║    regional platforms, streaming ad tiers, fintech, health/fitness      ║
// ║                                                                         ║
// ║  All figures are ANNUAL per-user ad/data revenue in USD.               ║
// ║  MENA values estimated as 60-80% of EU where not reported separately.  ║
// ║  "row" (rest of world) uses Meta's ROW ratio as baseline.              ║
// ║                                                                         ║
// ║  Last updated: Q4 2024 / FY2024 earnings cycle                         ║
// ╚══════════════════════════════════════════════════════════════════════════╝

export const platforms: Platform[] = [
  // ═══ Social ═══

  // Meta FY2024 10-K: Family ARPP US&CA=$268, EU=$78, APAC=$19, ROW=$14
  // Facebook is ~60% of Meta ad revenue → proportional split
  // Source: investor.fb.com → Q4 2024 Earnings Press Release
  {
    id: "facebook", name: "Facebook", category: "social", logo: "/logos/facebook.svg",
    arpu: { na: 160.0, eu: 47.0, apac: 11.4, latam: 8.4, mena: 7.0, row: 5.6 },
    dataTypes: [{ type: "browsing", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "purchase_intent", weight: 0.25 }, { type: "location", weight: 0.1 }],
  },
  // Instagram is ~40% of Meta ad revenue
  {
    id: "instagram", name: "Instagram", category: "social", logo: "/logos/instagram.svg",
    arpu: { na: 107.0, eu: 31.0, apac: 7.6, latam: 5.6, mena: 4.7, row: 3.7 },
    dataTypes: [{ type: "purchase_intent", weight: 0.35 }, { type: "browsing", weight: 0.3 }, { type: "social_graph", weight: 0.25 }, { type: "location", weight: 0.1 }],
  },
  // TikTok: Private company. Estimated from analyst reports (Bernstein, Bloomberg).
  // ~$14B US ad revenue 2024, ~170M US users → ~$82/user US.
  // Global ~$30B ads, ~1.5B users → ~$20 global ARPU.
  // Tier 3 estimate.
  {
    id: "tiktok", name: "TikTok", category: "social", logo: "/logos/tiktok.svg",
    arpu: { na: 82.0, eu: 22.0, apac: 6.0, latam: 4.0, mena: 3.5, row: 2.5 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
  // YouTube: Alphabet FY2024 10-K. YouTube ad revenue ~$36.1B.
  // ~2.5B monthly users. NA ~30% of revenue, ~250M users.
  // Derived: NA ~$43, Global ~$14.4
  // Source: abc.xyz/investor → 2024 Annual Report
  {
    id: "youtube", name: "YouTube", category: "social", logo: "/logos/youtube.svg",
    arpu: { na: 43.0, eu: 18.0, apac: 5.0, latam: 3.5, mena: 3.0, row: 2.0 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "purchase_intent", weight: 0.3 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  // X/Twitter: Private post-acquisition. Revenue fell ~50% from ~$5B to ~$2.5B.
  // ~550M MAUs reported. Tier 3 estimate.
  {
    id: "x", name: "X / Twitter", category: "social", logo: "/logos/x.svg",
    arpu: { na: 8.0, eu: 3.5, apac: 1.2, latam: 0.8, mena: 0.7, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "social_graph", weight: 0.3 }, { type: "purchase_intent", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  // Snap FY2024 10-K: ARPU NA=$28.41, EU=$10.07, ROW=$3.68
  // Source: investor.snap.com → Q4 2024 Earnings
  {
    id: "snapchat", name: "Snapchat", category: "social", logo: "/logos/snapchat.svg",
    arpu: { na: 28.41, eu: 10.07, apac: 3.68, latam: 3.68, mena: 5.0, row: 3.68 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.25 }, { type: "purchase_intent", weight: 0.1 }],
  },
  // LinkedIn: Part of Microsoft. ~$16B revenue FY2024, ~1B members.
  // ~40% from ads (Talent Solutions is the rest). NA-heavy. Tier 2 estimate.
  {
    id: "linkedin", name: "LinkedIn", category: "social", logo: "/logos/linkedin.png",
    arpu: { na: 35.0, eu: 14.0, apac: 3.0, latam: 2.0, mena: 2.5, row: 1.5 },
    dataTypes: [{ type: "purchase_intent", weight: 0.4 }, { type: "social_graph", weight: 0.35 }, { type: "browsing", weight: 0.2 }, { type: "location", weight: 0.05 }],
  },
  // Reddit FY2024 earnings: Global ARPU $11.20. DAUq ~101M.
  // ~50% of users in US. Source: investor.redditinc.com
  {
    id: "reddit", name: "Reddit", category: "social", logo: "/logos/reddit.svg",
    arpu: { na: 18.0, eu: 6.0, apac: 1.5, latam: 0.8, mena: 0.6, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.05 }],
  },
  // Pinterest FY2024 10-K: ARPU US&CA=$27.00, EU=$5.88, ROW=$0.84
  // Source: investor.pinterestinc.com → Q4 2024 Earnings
  {
    id: "pinterest", name: "Pinterest", category: "social", logo: "/logos/pinterest.svg",
    arpu: { na: 27.0, eu: 5.88, apac: 0.84, latam: 0.84, mena: 0.60, row: 0.42 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "social_graph", weight: 0.1 }, { type: "location", weight: 0.05 }],
  },
  // Threads: Part of Meta, no separate ARPU. Early monetization.
  // Estimated at ~5% of Instagram's ARPU. Tier 3.
  {
    id: "threads", name: "Threads", category: "social", logo: "/logos/threads.svg",
    arpu: { na: 5.0, eu: 1.5, apac: 0.4, latam: 0.3, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "social_graph", weight: 0.35 }, { type: "purchase_intent", weight: 0.2 }, { type: "location", weight: 0.05 }],
  },
  // Twitch: Part of Amazon. ~$2.5B revenue, ~35M DAU.
  // Revenue mix: subs + ads. Ad ARPU estimated. Tier 3.
  {
    id: "twitch", name: "Twitch", category: "social", logo: "/logos/twitch.svg",
    arpu: { na: 12.0, eu: 5.0, apac: 1.5, latam: 1.0, mena: 0.8, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
  // BeReal: Acquired by Voodoo. Minimal ad revenue. Tier 3 estimate.
  {
    id: "bereal", name: "BeReal", category: "social", logo: "/logos/bereal.svg",
    arpu: { na: 2.0, eu: 1.5, apac: 0.3, latam: 0.2, mena: 0.2, row: 0.1 },
    dataTypes: [{ type: "social_graph", weight: 0.4 }, { type: "location", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.1 }],
  },

  // ═══ Messaging ═══
  // WhatsApp: Part of Meta. Monetized via Business API, not direct ads.
  // Meta does not break out WhatsApp revenue. Estimated <5% of Meta total. Tier 3.
  {
    id: "whatsapp", name: "WhatsApp", category: "messaging", logo: "/logos/whatsapp.svg",
    arpu: { na: 4.0, eu: 3.0, apac: 0.8, latam: 1.5, mena: 1.2, row: 0.6 },
    dataTypes: [{ type: "social_graph", weight: 0.5 }, { type: "location", weight: 0.25 }, { type: "browsing", weight: 0.15 }, { type: "purchase_intent", weight: 0.1 }],
  },
  // Telegram: ~$1B revenue 2024, ~900M MAU. Premium + ads. Tier 3.
  {
    id: "telegram", name: "Telegram", category: "messaging", logo: "/logos/telegram.svg",
    arpu: { na: 1.5, eu: 1.2, apac: 0.4, latam: 0.3, mena: 0.6, row: 0.3 },
    dataTypes: [{ type: "social_graph", weight: 0.45 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.15 }, { type: "purchase_intent", weight: 0.1 }],
  },
  // Discord: ~$600M revenue 2024, ~200M MAU. Mostly Nitro subs, minimal ads. Tier 3.
  {
    id: "discord", name: "Discord", category: "messaging", logo: "/logos/discord.svg",
    arpu: { na: 3.0, eu: 1.5, apac: 0.5, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "social_graph", weight: 0.4 }, { type: "browsing", weight: 0.35 }, { type: "purchase_intent", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  // WeChat: Tencent FY2024. WeChat/Weixin ~1.3B MAU. Ad revenue from Tencent ads segment.
  // Estimated ~$10B in social ad revenue from WeChat. Tier 2.
  {
    id: "wechat", name: "WeChat", category: "messaging", logo: "/logos/wechat.svg",
    arpu: { na: 0.5, eu: 0.3, apac: 7.5, latam: 0.2, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.35 }, { type: "social_graph", weight: 0.35 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.1 }],
  },
  // LINE: LY Corp FY2024. ~196M MAU (Japan/Thailand/Taiwan/Indonesia).
  // Ad revenue ~¥400B (~$2.7B). Tier 2.
  {
    id: "line", name: "LINE", category: "messaging", logo: "/logos/line.svg",
    arpu: { na: 0.3, eu: 0.2, apac: 13.0, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "social_graph", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.1 }],
  },
  // Messenger: Part of Meta ARPP. Ads in Messenger are small share. Tier 3.
  {
    id: "messenger", name: "Messenger", category: "messaging", logo: "/logos/messenger.svg",
    arpu: { na: 6.0, eu: 2.5, apac: 0.6, latam: 0.5, mena: 0.4, row: 0.3 },
    dataTypes: [{ type: "social_graph", weight: 0.5 }, { type: "browsing", weight: 0.2 }, { type: "location", weight: 0.2 }, { type: "purchase_intent", weight: 0.1 }],
  },

  // ═══ Shopping ═══
  // Amazon Ads: $56.2B ad revenue FY2024 (10-K). ~310M active customers.
  // NA ~60% of revenue. Source: ir.aboutamazon.com. Tier 2 (derived).
  {
    id: "amazon", name: "Amazon", category: "shopping", logo: "/logos/amazon.svg",
    arpu: { na: 109.0, eu: 32.0, apac: 8.0, latam: 3.0, mena: 4.0, row: 2.0 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // Temu: PDD Holdings FY2024. Rapid growth, heavy ad spend, but also ad revenue
  // from marketplace sellers. Estimated. Tier 3.
  {
    id: "temu", name: "Temu", category: "shopping", logo: "/logos/temu.svg",
    arpu: { na: 12.0, eu: 6.0, apac: 1.5, latam: 1.0, mena: 1.0, row: 0.8 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // Shein: Private. ~$2B ad revenue estimated. ~150M users. Tier 3.
  {
    id: "shein", name: "Shein", category: "shopping", logo: "/logos/shein.svg",
    arpu: { na: 10.0, eu: 5.0, apac: 2.0, latam: 1.5, mena: 1.2, row: 0.8 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // eBay: FY2024 10-K. Promoted listings + ads ~$2.4B. ~132M buyers. Tier 2.
  {
    id: "ebay", name: "eBay", category: "shopping", logo: "/logos/ebay.svg",
    arpu: { na: 14.0, eu: 8.0, apac: 1.5, latam: 0.8, mena: 0.6, row: 0.4 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // AliExpress: Part of Alibaba International. Tier 3 estimate.
  {
    id: "aliexpress", name: "AliExpress", category: "shopping", logo: "/logos/aliexpress.svg",
    arpu: { na: 4.0, eu: 3.0, apac: 2.5, latam: 1.5, mena: 2.0, row: 1.0 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // Etsy: FY2024 10-K. ~$807M Marketplace/ad revenue. ~92M buyers. Tier 2.
  {
    id: "etsy", name: "Etsy", category: "shopping", logo: "/logos/etsy.svg",
    arpu: { na: 12.0, eu: 5.0, apac: 0.8, latam: 0.4, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // Mercado Libre: FY2024 20-F. Ad revenue ~$2.6B. ~218M users. LATAM dominant. Tier 2.
  {
    id: "mercadolibre", name: "Mercado Libre", category: "shopping", logo: "/logos/mercadolibre.png",
    arpu: { na: 1.0, eu: 0.3, apac: 0.2, latam: 11.0, mena: 0.2, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // Flipkart: Walmart subsidiary, India. ~500M registered users, ~$1B ad revenue. Tier 3.
  {
    id: "flipkart", name: "Flipkart", category: "shopping", logo: "/logos/flipkart.png",
    arpu: { na: 0.2, eu: 0.1, apac: 4.0, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  // Noon: Private, MENA-only. Estimated. Tier 3.
  {
    id: "noon", name: "Noon", category: "shopping", logo: "/logos/noon.svg",
    arpu: { na: 0.1, eu: 0.1, apac: 0.1, latam: 0.1, mena: 8.0, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },

  // ═══ Streaming ═══
  // Netflix: Ad-tier launched Q4 2022. ~94M ad-plan members by Q4 2024.
  // Ad revenue ~$1.8B in 2024. Per ad-user ~$19/yr. Non-ad users generate less data value.
  // Blended estimate for data value (viewing data sold to advertisers). Tier 3.
  {
    id: "netflix", name: "Netflix", category: "streaming", logo: "/logos/netflix.svg",
    arpu: { na: 7.0, eu: 3.5, apac: 1.2, latam: 0.8, mena: 1.0, row: 0.6 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  // Spotify: FY2024 earnings. Ad revenue ~€2B, ~412M free MAUs.
  // Ad ARPU ≈ €4.85/yr ≈ $5.30/yr globally. NA higher. Tier 1.
  // Source: investors.spotify.com
  {
    id: "spotify", name: "Spotify", category: "streaming", logo: "/logos/spotify.svg",
    arpu: { na: 9.0, eu: 5.5, apac: 1.8, latam: 1.5, mena: 1.2, row: 0.8 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "purchase_intent", weight: 0.25 }, { type: "location", weight: 0.2 }, { type: "social_graph", weight: 0.1 }],
  },
  // Disney+: Ad tier ~$1B revenue, ~37M ad-sub users. Blended. Tier 3.
  {
    id: "disney", name: "Disney+", category: "streaming", logo: "/logos/disney.svg",
    arpu: { na: 5.0, eu: 2.5, apac: 0.8, latam: 0.6, mena: 0.5, row: 0.4 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  // Apple Music: No ad tier. Data value from listening habits only. Tier 3.
  {
    id: "applemusic", name: "Apple Music", category: "streaming", logo: "/logos/applemusic.svg",
    arpu: { na: 2.0, eu: 1.2, apac: 0.5, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  // Prime Video: Amazon ad tier launched early 2024. Early revenue. Tier 3.
  {
    id: "primevideo", name: "Prime Video", category: "streaming", logo: "/logos/primevideo.svg",
    arpu: { na: 5.0, eu: 3.0, apac: 1.0, latam: 0.6, mena: 0.5, row: 0.3 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },

  // ═══ Productivity ═══
  // Google: Alphabet FY2024 10-K. Total ad revenue ~$264.6B. ~4.4B users.
  // NA ~47% of revenue. Source: abc.xyz/investor. Tier 2 (derived).
  {
    id: "google", name: "Google", category: "productivity", logo: "/logos/google.svg",
    arpu: { na: 95.0, eu: 35.0, apac: 8.0, latam: 5.0, mena: 4.5, row: 3.5 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "location", weight: 0.2 }, { type: "social_graph", weight: 0.1 }],
  },
  // Microsoft: Bing + LinkedIn ads + third-party. ~$15B search/news ads.
  // ~1B+ users across products. Tier 3.
  {
    id: "microsoft", name: "Microsoft 365", category: "productivity", logo: "/logos/microsoft.png",
    arpu: { na: 8.0, eu: 4.0, apac: 1.2, latam: 0.8, mena: 0.8, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.15 }],
  },
  // Notion: ~$300M ARR, mostly subscriptions, minimal data monetization. Tier 3.
  {
    id: "notion", name: "Notion", category: "productivity", logo: "/logos/notion.svg",
    arpu: { na: 1.5, eu: 0.8, apac: 0.3, latam: 0.2, mena: 0.2, row: 0.1 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.2 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
  // Slack: Part of Salesforce. Subscription-based, minimal ad/data revenue. Tier 3.
  {
    id: "slack", name: "Slack", category: "productivity", logo: "/logos/slack.svg",
    arpu: { na: 2.0, eu: 1.0, apac: 0.3, latam: 0.2, mena: 0.2, row: 0.1 },
    dataTypes: [{ type: "social_graph", weight: 0.45 }, { type: "browsing", weight: 0.3 }, { type: "purchase_intent", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },

  // ═══ Delivery & Ride-hail ═══
  // Uber: FY2024 10-K. Advertising ~$1.3B. MAPC ~171M. Tier 2 (derived).
  // Most ad value is from location + purchase data, not display ads.
  // Source: investor.uber.com
  {
    id: "uber", name: "Uber", category: "delivery", logo: "/logos/uber.svg",
    arpu: { na: 12.0, eu: 6.0, apac: 2.0, latam: 1.5, mena: 2.5, row: 1.0 },
    dataTypes: [{ type: "location", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  // DoorDash: FY2024 10-K. Ad revenue ~$600M. ~39M MAUs. NA-heavy. Tier 2.
  {
    id: "doordash", name: "DoorDash", category: "delivery", logo: "/logos/doordash.svg",
    arpu: { na: 14.0, eu: 3.0, apac: 0.8, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  // Grab: FY2024. ~$2.7B revenue, ~42M MTU. SEA-only. Tier 2 (derived).
  {
    id: "grab", name: "Grab", category: "delivery", logo: "/logos/grab.svg",
    arpu: { na: 0.2, eu: 0.1, apac: 6.0, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "location", weight: 0.45 }, { type: "purchase_intent", weight: 0.3 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  // Rappi: Private, LATAM. ~40M users. Estimated. Tier 3.
  {
    id: "rappi", name: "Rappi", category: "delivery", logo: "/logos/rappi.png",
    arpu: { na: 0.5, eu: 0.1, apac: 0.1, latam: 5.0, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  // Instacart: FY2024. Ad revenue ~$1B, ~8M MAUs. NA-only basically. Tier 2.
  {
    id: "instacart", name: "Instacart", category: "delivery", logo: "/logos/instacart.svg",
    arpu: { na: 20.0, eu: 1.0, apac: 0.2, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "location", weight: 0.25 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  // Deliveroo: FY2024. ~£2B revenue, ~8M MAOs. UK/EU/MENA. Tier 2.
  {
    id: "deliveroo", name: "Deliveroo", category: "delivery", logo: "/logos/deliveroo.svg",
    arpu: { na: 0.5, eu: 8.0, apac: 2.0, latam: 0.1, mena: 3.0, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  // Talabat: Part of Delivery Hero. MENA-only. Tier 3.
  {
    id: "talabat", name: "Talabat", category: "delivery", logo: "/logos/talabat.png",
    arpu: { na: 0.1, eu: 0.1, apac: 0.1, latam: 0.1, mena: 10.0, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },

  // ═══ Dating ═══
  // Match Group FY2024 10-K: Tinder revenue ~$1.8B, ~10M paying users.
  // Total RPP (revenue per payer) ~$16/month. Ad/data value for non-payers much lower.
  // Source: ir.matchgroup.com. Tier 2 (derived for ad value).
  {
    id: "tinder", name: "Tinder", category: "dating", logo: "/logos/tinder.svg",
    arpu: { na: 10.0, eu: 6.0, apac: 2.0, latam: 1.2, mena: 1.5, row: 0.8 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.15 }],
  },
  // Bumble: FY2024 10-K. ~$1B revenue, ~3.7M paying users, ~50M MAU.
  // Source: ir.bumble.com. Tier 2.
  {
    id: "bumble", name: "Bumble", category: "dating", logo: "/logos/bumble.png",
    arpu: { na: 8.0, eu: 4.0, apac: 1.2, latam: 0.8, mena: 1.0, row: 0.5 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.15 }],
  },
  // Hinge: Part of Match Group. Fastest-growing brand. Tier 3 estimate.
  {
    id: "hinge", name: "Hinge", category: "dating", logo: "/logos/hinge.svg",
    arpu: { na: 8.0, eu: 4.0, apac: 1.0, latam: 0.6, mena: 0.8, row: 0.4 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.15 }],
  },

  // ═══ Finance ═══
  // PayPal: FY2024 10-K. ~$31.5B revenue, ~426M active accounts.
  // Ad/data revenue is small fraction — PayPal Ads launched 2024. Tier 3.
  {
    id: "paypal", name: "PayPal", category: "finance", logo: "/logos/paypal.svg",
    arpu: { na: 8.0, eu: 4.0, apac: 1.0, latam: 0.8, mena: 0.5, row: 0.4 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "location", weight: 0.15 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  // Venmo: Part of PayPal. ~60M users. Tier 3.
  {
    id: "venmo", name: "Venmo", category: "finance", logo: "/logos/venmo.svg",
    arpu: { na: 5.0, eu: 0.2, apac: 0.1, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.5 }, { type: "social_graph", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "browsing", weight: 0.1 }],
  },
  // Cash App: Block FY2024. ~57M transacting actives. Tier 3.
  {
    id: "cashapp", name: "Cash App", category: "finance", logo: "/logos/cashapp.svg",
    arpu: { na: 6.0, eu: 0.2, apac: 0.1, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "social_graph", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "browsing", weight: 0.1 }],
  },
  // Revolut: ~45M users, ~$2.2B revenue. Subscription-based, minimal ad. Tier 3.
  {
    id: "revolut", name: "Revolut", category: "finance", logo: "/logos/revolut.svg",
    arpu: { na: 3.0, eu: 5.0, apac: 0.8, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  // Wise: ~12.8M customers, ~$1.2B revenue. Mostly transaction fees, not ads. Tier 3.
  {
    id: "wise", name: "Wise", category: "finance", logo: "/logos/wise.svg",
    arpu: { na: 2.0, eu: 3.0, apac: 0.8, latam: 0.4, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },

  // ═══ Health & Fitness ═══
  // Strava: ~125M users, ~$300M revenue. Mostly subscriptions. Tier 3.
  {
    id: "strava", name: "Strava", category: "health", logo: "/logos/strava.svg",
    arpu: { na: 3.0, eu: 2.0, apac: 0.5, latam: 0.3, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "location", weight: 0.5 }, { type: "browsing", weight: 0.2 }, { type: "social_graph", weight: 0.2 }, { type: "purchase_intent", weight: 0.1 }],
  },
  // MyFitnessPal: ~200M users, ad-supported. Tier 3.
  {
    id: "myfitnesspal", name: "MyFitnessPal", category: "health", logo: "/logos/myfitnesspal.png",
    arpu: { na: 4.0, eu: 2.0, apac: 0.5, latam: 0.3, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "location", weight: 0.15 }, { type: "social_graph", weight: 0.15 }],
  },
  // Peloton: ~6.4M members, ~$2.7B revenue. Subscription model, minimal data monetization. Tier 3.
  {
    id: "peloton", name: "Peloton", category: "health", logo: "/logos/peloton.svg",
    arpu: { na: 3.0, eu: 1.0, apac: 0.2, latam: 0.1, mena: 0.1, row: 0.1 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
];
