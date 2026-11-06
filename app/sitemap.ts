import type { MetadataRoute } from "next";
import { getAllServicePaths } from "@/content/services";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  const lastModified = new Date();
  const serviceEntries = getAllServicePaths().map((path) => ({
    url: `${siteUrl}/${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/serving-area`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...serviceEntries,
  ];
}
