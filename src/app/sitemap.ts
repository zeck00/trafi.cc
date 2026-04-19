import type { MetadataRoute } from "next";
import { platforms } from "@/data/platforms";
import { articles } from "@/data/articles";

export const dynamic = "force-static";

const BASE_URL = "https://trafi.cc";
const LAST_MOD = new Date().toISOString().split("T")[0];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/worth/`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog/`, lastModified: LAST_MOD, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/methodology/`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq/`, lastModified: LAST_MOD, changeFrequency: "monthly", priority: 0.6 },
  ];

  const platformRoutes: MetadataRoute.Sitemap = platforms.map((p) => ({
    url: `${BASE_URL}/worth/${p.id}/`,
    lastModified: LAST_MOD,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/blog/${a.slug}/`,
    lastModified: a.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...platformRoutes, ...blogRoutes];
}
