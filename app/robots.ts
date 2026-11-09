import type { MetadataRoute } from "next";
import { getAllServicePaths } from "@/content/services";
import { getSiteUrl } from "@/lib/site-url";

/** Allow homepage crawl; block other marketing routes while they are noindex. */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const servicePaths = getAllServicePaths().map((path) => `/${path}`);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/services",
        "/serving-area",
        ...servicePaths,
      ],
    },
    sitemap: siteUrl ? `${siteUrl}/sitemap.xml` : undefined,
    host: siteUrl,
  };
}
