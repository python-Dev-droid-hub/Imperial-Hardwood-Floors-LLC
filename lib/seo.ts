import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const seo = {
  title: `Residential Framing in Bellingham, WA | ${site.businessName}`,
  description: `Residential framing for new construction, additions, and home projects in Bellingham, Washington. Contact ${site.contactName} at ${site.email}. Hours: ${site.hoursShort} Pacific Time.`,
  keywords: [
    "residential framing Bellingham",
    "residential framing Bellingham WA",
    "home framing contractor Bellingham",
    "Joyner Construction LLC",
  ],
  ogImagePath: "/images/hero/framing-neighborhood.webp",
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
    image: siteUrl ? `${siteUrl}/logo.png` : undefined,
    logo: siteUrl ? `${siteUrl}/logo.png` : undefined,
    url: siteUrl || undefined,
    areaServed: {
      "@type": "City",
      name: "Bellingham",
      containedInPlace: {
        "@type": "State",
        name: "Washington",
      },
    },
    knowsAbout: [
      "Residential framing",
      "New home framing",
      "Home addition framing",
      "Renovation framing",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      availableLanguage: "English",
    },
    // Hours supplied by the business; Bellingham observes America/Los_Angeles.
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
