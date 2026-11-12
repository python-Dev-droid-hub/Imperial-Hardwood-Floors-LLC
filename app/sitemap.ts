import type { MetadataRoute } from "next";
import { getAllServicePaths } from "@/content/services";
import { getSiteUrl } from "@/lib/site-url";

/** Indexable marketing routes for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  const now = new Date();

  const serviceEntries: MetadataRoute.Sitemap = getAllServicePaths().map(
    (path) => ({
      url: `${siteUrl}/${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/serving-area`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceEntries,
  ];
}
