/**
 * Production site origin used for canonical, OG, sitemap, robots, and JSON-LD.
 * Prefers NEXT_PUBLIC_SITE_URL; falls back to the live custom domain.
 */
export const PRODUCTION_SITE_URL = "https://imperialhardwoodfloor.com";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) return raw.replace(/\/$/, "");
  return PRODUCTION_SITE_URL;
}
