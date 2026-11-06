import { services } from "@/content/services";
import { site } from "@/content/site";

export type ServingAreaPage = {
  slug: string;
  name: string;
  shortName: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
};

/** City sections on /serving-area — one section per serving area. */
export const servingAreaPages: ServingAreaPage[] = [
  {
    slug: "olathe-ks",
    name: "Olathe, KS",
    shortName: "Olathe",
    headline: "Services in Olathe, KS",
    description:
      "Imperial Hardwood Floors LLC focuses on flooring work for Olathe homes. Choose a service below to open the page that matches your project, then request an estimate.",
    image: "/images/service-area/olathe-landmark.png",
    imageAlt: "Clock tower and plaza landmark in Olathe, Kansas",
  },
];

export const servingAreaHero = {
  eyebrow: `${site.businessName}`,
  headline: `Serving Area in ${site.locationShort}`,
  supporting:
    "Residential flooring services in Olathe, KS. Pick your city section, then open the service page that matches your project.",
  primaryCta: { label: "Request an Estimate", href: "/#contact" },
  image: {
    src: "/images/service-area/olathe-landmark.png",
    alt: "Clock tower and plaza landmark in Olathe, Kansas",
  },
} as const;

export const servingAreaServiceLinks = services.map((service) => ({
  label: service.name,
  href: `/${service.path}`,
}));
