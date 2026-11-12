"use client";

import { useRef } from "react";
import SpatialServiceShowcase, {
  type ServiceShowcaseItem,
} from "@/components/ui/spatial-product-showcase";
import { servicesContent } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";
import type { MediaImage } from "@/lib/service-images";

const defaultShowcaseItems: ServiceShowcaseItem[] = [
  {
    id: "new-install",
    label: "New Install",
    title: "New Floor Installation",
    description:
      "We expertly install premium hardwood, laminate, and custom flooring engineered for durability, seamless performance, and long-lasting beauty in any space.",
    image: "/images/hero/floor-hero.jpg",
    imageAlt: "Dark hardwood flooring installed in a finished bedroom",
    accent: "copper",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "replacement",
    label: "Replacement",
    title: "Floor Replacement",
    description:
      "Upgrade your property by safely removing old, worn surfaces and replacing them with high-quality, modern flooring materials built to last.",
    image: "/images/hero/floor-planks.jpg",
    imageAlt: "Light hardwood flooring in an open living and dining space",
    accent: "charcoal",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "repair",
    label: "Repair",
    title: "Floor Repair",
    description:
      "Restore the elegance and strength of your existing floors with expert repairs targeting scratches, water damage, warping, and structural wear.",
    image: "/images/hero/floor-living.jpg",
    imageAlt: "Hardwood flooring in a remodeled residential living space",
    accent: "stone",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
];

type ServicesProps = {
  serviceImages?: MediaImage[];
  title?: string;
  items?: { label: string; title: string; description: string }[];
};

export function Services({
  serviceImages,
  title,
  items,
}: ServicesProps = {}) {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.08, id: "reveal-services" });

  const baseItems =
    items?.length
      ? defaultShowcaseItems.map((item, index) => {
          const override = items[index];
          return override
            ? {
                ...item,
                label: override.label,
                title: override.title,
                description: override.description,
              }
            : item;
        })
      : defaultShowcaseItems;

  const showcaseItems =
    serviceImages && serviceImages.length > 0
      ? baseItems.map((item, index) => {
          const photo = serviceImages[index % serviceImages.length];
          return {
            ...item,
            image: photo.src,
            imageAlt: photo.alt,
          };
        })
      : baseItems;

  return (
    <section
      id="services"
      ref={ref}
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory px-5 py-14 text-charcoal md:px-8 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div data-reveal className="mx-auto max-w-3xl text-center">
          <h2
            id="services-heading"
            className="font-display text-[clamp(1.4rem,2.8vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.015em] text-charcoal"
          >
            {title ?? servicesContent.title}
          </h2>
        </div>

        <div className="mt-8" data-reveal>
          <SpatialServiceShowcase items={showcaseItems} autoPlayMs={5000} />
        </div>
      </div>
    </section>
  );
}
