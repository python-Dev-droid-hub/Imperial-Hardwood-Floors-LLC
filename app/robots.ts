import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** Allow indexing of marketing pages; keep API routes out of crawl. */
export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/services"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
