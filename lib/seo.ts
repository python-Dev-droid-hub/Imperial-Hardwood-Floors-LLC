import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const seo = {
  title: `Floor Installation in Olathe, KS | ${site.businessName}`,
  description: `Floor installation for homes and remodel projects in Olathe, Kansas. Contact ${site.contactName} at ${site.email}. Hours: ${site.hoursShort} Central Time.`,
  keywords: [
    "floor installation Olathe",
    "hardwood floor installation Olathe KS",
    "hardwood flooring contractor Olathe",
    "Imperial Hardwood Floors LLC",
  ],
  ogImagePath: "/images/hero/floor-hero.jpg",
  locale: "en_US",
} as const;

/** Verified HomeAndConstructionBusiness properties only — no invented NAP. */
export function buildLocalBusinessJsonLd() {
  const siteUrl = getSiteUrl();

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.businessName,
    description: seo.description,
    email: site.email,
    telephone: site.phone,
    image: siteUrl ? `${siteUrl}/logo.png` : undefined,
    logo: siteUrl ? `${siteUrl}/logo.png` : undefined,
    url: siteUrl || undefined,
    areaServed: {
      "@type": "City",
      name: "Olathe",
      containedInPlace: {
        "@type": "State",
        name: "Kansas",
      },
    },
    knowsAbout: [
      "Floor installation",
      "Hardwood floor installation",
      "Residential flooring",
      "Floor replacement",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      telephone: site.phone,
      availableLanguage: "English",
    },
    // Hours supplied by the business; Olathe observes America/Chicago.
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  };

  // Strip undefined so we do not emit empty schema fields
  return JSON.parse(
    JSON.stringify(data, (_key, value) =>
      value === undefined ? undefined : value,
    ),
  ) as Record<string, unknown>;
}
