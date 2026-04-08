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

// ARPU data sourced from public earnings reports, eMarketer, and IAB benchmarks.
// Logo field uses emoji as temporary placeholder — to be replaced with SVGs.
export const platforms: Platform[] = [
  // ═══ Social ═══
  {
    id: "facebook", name: "Facebook", category: "social", logo: "/logos/facebook.svg",
    arpu: { na: 68.44, eu: 23.14, apac: 5.12, latam: 4.67, mena: 3.8, row: 3.2 },
    dataTypes: [{ type: "browsing", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "purchase_intent", weight: 0.25 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "instagram", name: "Instagram", category: "social", logo: "/logos/instagram.svg",
    arpu: { na: 62.0, eu: 20.5, apac: 4.8, latam: 4.2, mena: 3.5, row: 2.9 },
    dataTypes: [{ type: "purchase_intent", weight: 0.35 }, { type: "browsing", weight: 0.3 }, { type: "social_graph", weight: 0.25 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "tiktok", name: "TikTok", category: "social", logo: "/logos/tiktok.svg",
    arpu: { na: 30.0, eu: 12.0, apac: 3.5, latam: 2.8, mena: 2.2, row: 1.8 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "youtube", name: "YouTube", category: "social", logo: "/logos/youtube.svg",
    arpu: { na: 40.0, eu: 16.0, apac: 4.0, latam: 3.0, mena: 2.5, row: 2.0 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "purchase_intent", weight: 0.3 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "x", name: "X / Twitter", category: "social", logo: "/logos/x.svg",
    arpu: { na: 12.0, eu: 5.5, apac: 1.8, latam: 1.2, mena: 1.0, row: 0.8 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "social_graph", weight: 0.3 }, { type: "purchase_intent", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "snapchat", name: "Snapchat", category: "social", logo: "/logos/snapchat.svg",
    arpu: { na: 18.0, eu: 5.0, apac: 1.5, latam: 1.2, mena: 1.8, row: 0.9 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.25 }, { type: "purchase_intent", weight: 0.1 }],
  },
  {
    id: "linkedin", name: "LinkedIn", category: "social", logo: "/logos/linkedin.png",
    arpu: { na: 45.0, eu: 18.0, apac: 4.0, latam: 2.5, mena: 3.0, row: 2.0 },
    dataTypes: [{ type: "purchase_intent", weight: 0.4 }, { type: "social_graph", weight: 0.35 }, { type: "browsing", weight: 0.2 }, { type: "location", weight: 0.05 }],
  },
  {
    id: "reddit", name: "Reddit", category: "social", logo: "/logos/reddit.svg",
    arpu: { na: 8.0, eu: 3.0, apac: 0.8, latam: 0.5, mena: 0.4, row: 0.3 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.05 }],
  },
  {
    id: "pinterest", name: "Pinterest", category: "social", logo: "/logos/pinterest.svg",
    arpu: { na: 22.0, eu: 7.5, apac: 0.6, latam: 0.4, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "social_graph", weight: 0.1 }, { type: "location", weight: 0.05 }],
  },
  {
    id: "threads", name: "Threads", category: "social", logo: "/logos/threads.svg",
    arpu: { na: 8.0, eu: 3.0, apac: 1.0, latam: 0.8, mena: 0.6, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "social_graph", weight: 0.35 }, { type: "purchase_intent", weight: 0.2 }, { type: "location", weight: 0.05 }],
  },
  {
    id: "twitch", name: "Twitch", category: "social", logo: "/logos/twitch.svg",
    arpu: { na: 10.0, eu: 4.0, apac: 1.2, latam: 0.8, mena: 0.5, row: 0.4 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "bereal", name: "BeReal", category: "social", logo: "/logos/bereal.svg",
    arpu: { na: 3.0, eu: 2.0, apac: 0.5, latam: 0.3, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "social_graph", weight: 0.4 }, { type: "location", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.1 }],
  },

  // ═══ Messaging ═══
  {
    id: "whatsapp", name: "WhatsApp", category: "messaging", logo: "/logos/whatsapp.svg",
    arpu: { na: 5.0, eu: 3.5, apac: 1.2, latam: 1.0, mena: 1.5, row: 0.8 },
    dataTypes: [{ type: "social_graph", weight: 0.5 }, { type: "location", weight: 0.25 }, { type: "browsing", weight: 0.15 }, { type: "purchase_intent", weight: 0.1 }],
  },
  {
    id: "telegram", name: "Telegram", category: "messaging", logo: "/logos/telegram.svg",
    arpu: { na: 2.0, eu: 1.5, apac: 0.5, latam: 0.4, mena: 0.8, row: 0.3 },
    dataTypes: [{ type: "social_graph", weight: 0.45 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.15 }, { type: "purchase_intent", weight: 0.1 }],
  },
  {
    id: "discord", name: "Discord", category: "messaging", logo: "/logos/discord.svg",
    arpu: { na: 4.0, eu: 2.0, apac: 0.8, latam: 0.5, mena: 0.4, row: 0.3 },
    dataTypes: [{ type: "social_graph", weight: 0.4 }, { type: "browsing", weight: 0.35 }, { type: "purchase_intent", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "wechat", name: "WeChat", category: "messaging", logo: "/logos/wechat.svg",
    arpu: { na: 1.0, eu: 0.5, apac: 8.0, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.35 }, { type: "social_graph", weight: 0.35 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.1 }],
  },
  {
    id: "line", name: "LINE", category: "messaging", logo: "/logos/line.svg",
    arpu: { na: 0.5, eu: 0.3, apac: 6.0, latam: 0.2, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "social_graph", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.1 }],
  },
  {
    id: "messenger", name: "Messenger", category: "messaging", logo: "/logos/messenger.svg",
    arpu: { na: 8.0, eu: 4.0, apac: 1.0, latam: 0.8, mena: 0.6, row: 0.5 },
    dataTypes: [{ type: "social_graph", weight: 0.5 }, { type: "browsing", weight: 0.2 }, { type: "location", weight: 0.2 }, { type: "purchase_intent", weight: 0.1 }],
  },

  // ═══ Shopping ═══
  {
    id: "amazon", name: "Amazon", category: "shopping", logo: "/logos/amazon.png",
    arpu: { na: 55.0, eu: 22.0, apac: 5.0, latam: 2.0, mena: 3.0, row: 1.5 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "temu", name: "Temu", category: "shopping", logo: "/logos/temu.png",
    arpu: { na: 15.0, eu: 8.0, apac: 2.0, latam: 1.5, mena: 1.2, row: 1.0 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "shein", name: "Shein", category: "shopping", logo: "/logos/shein.png",
    arpu: { na: 12.0, eu: 6.0, apac: 2.5, latam: 1.8, mena: 1.5, row: 1.0 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "ebay", name: "eBay", category: "shopping", logo: "/logos/ebay.svg",
    arpu: { na: 18.0, eu: 10.0, apac: 2.0, latam: 1.0, mena: 0.8, row: 0.6 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "browsing", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "aliexpress", name: "AliExpress", category: "shopping", logo: "/logos/aliexpress.svg",
    arpu: { na: 5.0, eu: 4.0, apac: 3.0, latam: 2.0, mena: 2.5, row: 1.5 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "etsy", name: "Etsy", category: "shopping", logo: "/logos/etsy.svg",
    arpu: { na: 14.0, eu: 6.0, apac: 1.0, latam: 0.5, mena: 0.4, row: 0.3 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "mercadolibre", name: "Mercado Libre", category: "shopping", logo: "/logos/mercadolibre.png",
    arpu: { na: 2.0, eu: 0.5, apac: 0.3, latam: 12.0, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "flipkart", name: "Flipkart", category: "shopping", logo: "/logos/flipkart.png",
    arpu: { na: 0.5, eu: 0.3, apac: 6.0, latam: 0.2, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "noon", name: "Noon", category: "shopping", logo: "/logos/noon.png",
    arpu: { na: 0.5, eu: 0.5, apac: 0.5, latam: 0.5, mena: 10.0, row: 0.5 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "browsing", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "social_graph", weight: 0.05 }],
  },

  // ═══ Streaming ═══
  {
    id: "netflix", name: "Netflix", category: "streaming", logo: "/logos/netflix.svg",
    arpu: { na: 8.0, eu: 4.0, apac: 1.5, latam: 1.0, mena: 1.2, row: 0.8 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "spotify", name: "Spotify", category: "streaming", logo: "/logos/spotify.svg",
    arpu: { na: 12.0, eu: 6.0, apac: 1.5, latam: 1.2, mena: 1.0, row: 0.8 },
    dataTypes: [{ type: "browsing", weight: 0.45 }, { type: "purchase_intent", weight: 0.25 }, { type: "location", weight: 0.2 }, { type: "social_graph", weight: 0.1 }],
  },
  {
    id: "disney", name: "Disney+", category: "streaming", logo: "/logos/disney.png",
    arpu: { na: 5.0, eu: 3.0, apac: 1.0, latam: 0.8, mena: 0.7, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "applemusic", name: "Apple Music", category: "streaming", logo: "/logos/applemusic.svg",
    arpu: { na: 4.0, eu: 2.5, apac: 1.0, latam: 0.6, mena: 0.5, row: 0.4 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "primevideo", name: "Prime Video", category: "streaming", logo: "/logos/primevideo.png",
    arpu: { na: 6.0, eu: 3.5, apac: 1.2, latam: 0.8, mena: 0.6, row: 0.5 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },

  // ═══ Productivity ═══
  {
    id: "google", name: "Google", category: "productivity", logo: "/logos/google.svg",
    arpu: { na: 72.0, eu: 28.0, apac: 6.0, latam: 4.0, mena: 3.5, row: 3.0 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "location", weight: 0.2 }, { type: "social_graph", weight: 0.1 }],
  },
  {
    id: "microsoft", name: "Microsoft 365", category: "productivity", logo: "/logos/microsoft.png",
    arpu: { na: 10.0, eu: 5.0, apac: 1.5, latam: 1.0, mena: 1.0, row: 0.8 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.25 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.15 }],
  },
  {
    id: "notion", name: "Notion", category: "productivity", logo: "/logos/notion.svg",
    arpu: { na: 3.0, eu: 1.5, apac: 0.5, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "browsing", weight: 0.5 }, { type: "purchase_intent", weight: 0.2 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
  {
    id: "slack", name: "Slack", category: "productivity", logo: "/logos/slack.svg",
    arpu: { na: 4.0, eu: 2.0, apac: 0.6, latam: 0.4, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "social_graph", weight: 0.45 }, { type: "browsing", weight: 0.3 }, { type: "purchase_intent", weight: 0.15 }, { type: "location", weight: 0.1 }],
  },

  // ═══ Delivery & Ride-hail ═══
  {
    id: "uber", name: "Uber", category: "delivery", logo: "/logos/uber.svg",
    arpu: { na: 25.0, eu: 12.0, apac: 3.0, latam: 2.5, mena: 4.0, row: 1.5 },
    dataTypes: [{ type: "location", weight: 0.5 }, { type: "purchase_intent", weight: 0.25 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  {
    id: "doordash", name: "DoorDash", category: "delivery", logo: "/logos/doordash.svg",
    arpu: { na: 18.0, eu: 4.0, apac: 1.0, latam: 0.5, mena: 0.5, row: 0.3 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "grab", name: "Grab", category: "delivery", logo: "/logos/grab.svg",
    arpu: { na: 0.5, eu: 0.3, apac: 8.0, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "location", weight: 0.45 }, { type: "purchase_intent", weight: 0.3 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  {
    id: "rappi", name: "Rappi", category: "delivery", logo: "/logos/rappi.png",
    arpu: { na: 1.0, eu: 0.3, apac: 0.3, latam: 8.0, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "instacart", name: "Instacart", category: "delivery", logo: "/logos/instacart.svg",
    arpu: { na: 15.0, eu: 2.0, apac: 0.5, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "location", weight: 0.25 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "deliveroo", name: "Deliveroo", category: "delivery", logo: "/logos/deliveroo.svg",
    arpu: { na: 1.0, eu: 10.0, apac: 3.0, latam: 0.3, mena: 4.0, row: 0.3 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },
  {
    id: "talabat", name: "Talabat", category: "delivery", logo: "/logos/talabat.png",
    arpu: { na: 0.5, eu: 0.5, apac: 0.5, latam: 0.5, mena: 12.0, row: 0.5 },
    dataTypes: [{ type: "purchase_intent", weight: 0.45 }, { type: "location", weight: 0.35 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.05 }],
  },

  // ═══ Dating ═══
  {
    id: "tinder", name: "Tinder", category: "dating", logo: "/logos/tinder.svg",
    arpu: { na: 14.0, eu: 8.0, apac: 2.5, latam: 1.5, mena: 2.0, row: 1.2 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.15 }],
  },
  {
    id: "bumble", name: "Bumble", category: "dating", logo: "/logos/bumble.png",
    arpu: { na: 12.0, eu: 6.0, apac: 1.5, latam: 1.0, mena: 1.5, row: 0.8 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.15 }],
  },
  {
    id: "hinge", name: "Hinge", category: "dating", logo: "/logos/hinge.png",
    arpu: { na: 10.0, eu: 5.0, apac: 1.2, latam: 0.8, mena: 1.0, row: 0.6 },
    dataTypes: [{ type: "location", weight: 0.35 }, { type: "social_graph", weight: 0.3 }, { type: "browsing", weight: 0.2 }, { type: "purchase_intent", weight: 0.15 }],
  },

  // ═══ Finance ═══
  {
    id: "paypal", name: "PayPal", category: "finance", logo: "/logos/paypal.svg",
    arpu: { na: 20.0, eu: 10.0, apac: 2.0, latam: 1.5, mena: 1.0, row: 0.8 },
    dataTypes: [{ type: "purchase_intent", weight: 0.6 }, { type: "location", weight: 0.15 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  {
    id: "venmo", name: "Venmo", category: "finance", logo: "/logos/venmo.svg",
    arpu: { na: 8.0, eu: 0.5, apac: 0.3, latam: 0.3, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.5 }, { type: "social_graph", weight: 0.3 }, { type: "location", weight: 0.1 }, { type: "browsing", weight: 0.1 }],
  },
  {
    id: "cashapp", name: "Cash App", category: "finance", logo: "/logos/cashapp.svg",
    arpu: { na: 10.0, eu: 0.5, apac: 0.3, latam: 0.3, mena: 0.2, row: 0.2 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "social_graph", weight: 0.25 }, { type: "location", weight: 0.1 }, { type: "browsing", weight: 0.1 }],
  },
  {
    id: "revolut", name: "Revolut", category: "finance", logo: "/logos/revolut.svg",
    arpu: { na: 5.0, eu: 8.0, apac: 1.0, latam: 0.5, mena: 0.5, row: 0.3 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },
  {
    id: "wise", name: "Wise", category: "finance", logo: "/logos/wise.svg",
    arpu: { na: 4.0, eu: 6.0, apac: 1.5, latam: 0.8, mena: 0.5, row: 0.4 },
    dataTypes: [{ type: "purchase_intent", weight: 0.55 }, { type: "location", weight: 0.2 }, { type: "browsing", weight: 0.15 }, { type: "social_graph", weight: 0.1 }],
  },

  // ═══ Health & Fitness ═══
  {
    id: "strava", name: "Strava", category: "health", logo: "/logos/strava.svg",
    arpu: { na: 6.0, eu: 3.5, apac: 0.8, latam: 0.5, mena: 0.4, row: 0.3 },
    dataTypes: [{ type: "location", weight: 0.5 }, { type: "browsing", weight: 0.2 }, { type: "social_graph", weight: 0.2 }, { type: "purchase_intent", weight: 0.1 }],
  },
  {
    id: "myfitnesspal", name: "MyFitnessPal", category: "health", logo: "/logos/myfitnesspal.png",
    arpu: { na: 5.0, eu: 2.5, apac: 0.6, latam: 0.4, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "location", weight: 0.15 }, { type: "social_graph", weight: 0.15 }],
  },
  {
    id: "peloton", name: "Peloton", category: "health", logo: "/logos/peloton.svg",
    arpu: { na: 8.0, eu: 3.0, apac: 0.5, latam: 0.3, mena: 0.3, row: 0.2 },
    dataTypes: [{ type: "browsing", weight: 0.4 }, { type: "purchase_intent", weight: 0.3 }, { type: "social_graph", weight: 0.2 }, { type: "location", weight: 0.1 }],
  },
];
