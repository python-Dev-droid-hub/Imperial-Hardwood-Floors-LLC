import { faqContent, site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export const seo = {
  title: `Floor Installation in Olathe, KS | ${site.businessName}`,
  description: `Professional hardwood floor installation in Olathe, KS. New installs, replacements, and remodel flooring. Call ${site.phone} or email ${site.email}. Hours: ${site.hoursShort} Central Time.`,
  keywords: [
    "floor installation Olathe",
    "hardwood floor installation Olathe KS",
    "hardwood flooring contractor Olathe",
    "floor replacement Olathe",
    "Imperial Hardwood Floors LLC",
  ],
  ogImagePath: "/images/hero/floor-hero.jpg",
  locale: "en_US",
} as const;

const STATE_NAMES: Record<string, string> = {
  KS: "Kansas",
  MO: "Missouri",
};

function parseServingArea(label: string) {
  const [city, stateCode = "KS"] = label.split(",").map((part) => part.trim());
  return {
    "@type": "City" as const,
    name: city,
    containedInPlace: {
      "@type": "State" as const,
      name: STATE_NAMES[stateCode] ?? stateCode,
    },
  };
}

function absoluteUrl(path: string, siteUrl?: string) {
  if (!siteUrl) return undefined;
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Full JSON-LD @graph for the landing page — Organization, LocalBusiness, areas, FAQ, WebPage. */
export function buildJsonLdGraph() {
  const siteUrl = getSiteUrl();
  const logoUrl = absoluteUrl("/logo.png", siteUrl);
  const ogImageUrl = absoluteUrl(seo.ogImagePath, siteUrl);
  const pageUrl = siteUrl || undefined;

  const orgId = siteUrl ? `${siteUrl}/#organization` : "#organization";
  const localId = siteUrl ? `${siteUrl}/#localbusiness` : "#localbusiness";
  const websiteId = siteUrl ? `${siteUrl}/#website` : "#website";
  const webpageId = siteUrl ? `${siteUrl}/#webpage` : "#webpage";
  const serviceId = siteUrl ? `${siteUrl}/#service` : "#service";

  const areaServed = site.servingAreas.map(parseServingArea);
  const sameAs = [...site.socialProfiles];

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": orgId,
    name: site.businessName,
    legalName: site.businessName,
    url: pageUrl,
    email: site.email,
    telephone: site.phone,
    logo: logoUrl
      ? {
          "@type": "ImageObject",
          url: logoUrl,
        }
      : undefined,
    image: logoUrl,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      telephone: site.phone,
      areaServed: "US",
      availableLanguage: "English",
    },
  };
  if (sameAs.length > 0) organization.sameAs = sameAs;

  const localBusiness: Record<string, unknown> = {
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": localId,
    name: site.businessName,
    description: seo.description,
    url: pageUrl,
    email: site.email,
    telephone: site.phone,
    image: ogImageUrl ?? logoUrl,
    logo: logoUrl,
    parentOrganization: { "@id": orgId },
    areaServed,
    knowsAbout: [
      "Floor installation",
      "Hardwood floor installation",
      "Residential flooring",
      "Floor replacement",
      "Remodel flooring",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      telephone: site.phone,
      availableLanguage: "English",
    },
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
    address: {
      "@type": "PostalAddress",
      addressLocality: "Olathe",
      addressRegion: "KS",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.8814,
      longitude: -94.8191,
    },
  };
  if (sameAs.length > 0) localBusiness.sameAs = sameAs;

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": websiteId,
    url: pageUrl,
    name: site.businessName,
    description: seo.description,
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };

  const webpage: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": webpageId,
    url: pageUrl,
    name: seo.title,
    description: seo.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": localId },
    primaryImageOfPage: ogImageUrl
      ? {
          "@type": "ImageObject",
          url: ogImageUrl,
        }
      : undefined,
    inLanguage: "en-US",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: pageUrl,
        },
      ],
    },
  };

  const service: Record<string, unknown> = {
    "@type": "Service",
    "@id": serviceId,
    name: site.service,
    serviceType: "Hardwood floor installation",
    description:
      "Hardwood floor installation for new homes, replacements, and remodel projects in Olathe, Kansas and nearby communities.",
    provider: { "@id": localId },
    areaServed,
    url: pageUrl ? `${pageUrl}/#services` : undefined,
  };

  const faqPage: Record<string, unknown> = {
    "@type": "FAQPage",
    "@id": siteUrl ? `${siteUrl}/#faq` : "#faq",
    mainEntity: faqContent.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const graph = [
    organization,
    localBusiness,
    website,
    webpage,
    service,
    faqPage,
  ].map((node) =>
    JSON.parse(
      JSON.stringify(node, (_key, value) =>
        value === undefined ? undefined : value,
      ),
    ),
  );

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

/** @deprecated Prefer buildJsonLdGraph — kept for any legacy imports. */
export function buildLocalBusinessJsonLd() {
  return buildJsonLdGraph();
}
