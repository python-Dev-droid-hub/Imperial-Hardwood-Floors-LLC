/**
 * Production site origin. Canonical, OG, sitemap, and JSON-LD `@id`/`url`
 * are emitted only when this is set (e.g. https://example.com).
 */
export function getSiteUrl(): string | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return undefined;
  return raw.replace(/\/$/, "");
}
