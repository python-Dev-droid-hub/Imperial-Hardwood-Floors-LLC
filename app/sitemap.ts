import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Homepage only while other routes are noindex. */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) {
    return [];
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
