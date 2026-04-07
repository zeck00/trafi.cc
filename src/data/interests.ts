import type { Interest } from "@/components/ui/InterestTag";

export const interests: Interest[] = [
  { id: "travel", label: "Travel", emoji: "✈️" },
  { id: "gaming", label: "Gaming", emoji: "🎮" },
  { id: "fashion", label: "Fashion", emoji: "👗" },
  { id: "fitness", label: "Fitness", emoji: "💪" },
  { id: "tech", label: "Tech", emoji: "💻" },
  { id: "food", label: "Food & Dining", emoji: "🍕" },
  { id: "music", label: "Music", emoji: "🎵" },
  { id: "sports", label: "Sports", emoji: "⚽" },
  { id: "beauty", label: "Beauty", emoji: "💄" },
  { id: "home", label: "Home & Garden", emoji: "🏡" },
  { id: "parenting", label: "Parenting", emoji: "👶" },
  { id: "pets", label: "Pets", emoji: "🐾" },
  { id: "automotive", label: "Automotive", emoji: "🚗" },
  { id: "investing", label: "Investing", emoji: "📈" },
  { id: "luxury", label: "Luxury", emoji: "💎" },
];

export const interestMultipliers: Record<string, number> = {
  travel: 1.4,
  gaming: 1.1,
  fashion: 1.15,
  fitness: 1.05,
  tech: 1.2,
  food: 1.0,
  music: 0.95,
  sports: 1.0,
  beauty: 1.1,
  home: 1.05,
  parenting: 1.15,
  pets: 1.0,
  automotive: 1.3,
  investing: 1.5,
  luxury: 1.6,
};
