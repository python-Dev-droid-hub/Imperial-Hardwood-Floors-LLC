"use client";

import { useRef } from "react";
import SpatialServiceShowcase, {
  type ServiceShowcaseItem,
} from "@/components/ui/spatial-product-showcase";
import { servicesContent } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";

const showcaseItems: ServiceShowcaseItem[] = [
  {
    id: "new-install",
    label: "New Install",
    title: "New Hardwood Installation",
    description:
      "Full hardwood floor installation for new homes and empty rooms in Olathe—from early layout through fastening and finish-ready surfaces. Clean measuring, solid fastening, and even boards set up a floor that looks right and lasts. Share room sizes, product preferences, site access notes, and timing when you request an estimate so the conversation stays practical. Work is discussed before it is priced—no one-size quotes—so the install matches your space and timeline.",
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
      "Floor replacement for Olathe homes, with careful attention to tear-out, thresholds, and transitions between rooms. Occupied homes need clear sequencing, temporary protection, and access planning while living space stays in use. Bring product samples or photos if you have them; a room list still helps start the talk. Scope is confirmed in conversation, then estimated around the real prep and install work your project needs.",
    image: "/images/hero/floor-planks.jpg",
    imageAlt: "Light hardwood flooring in an open living and dining space",
    accent: "charcoal",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
  {
    id: "remodel",
    label: "Remodel",
    title: "Remodel & Room Installs",
    description:
      "Hardwood installation for remodeled kitchens, living rooms, hallways, and expanded living space in Olathe. Matching patterns, elevations, and transitions matter when the existing house sets the constraints. Share what is changing, what stays, preferred timing, and any product notes you have. You get an install-focused estimate after the work is defined, leaving the floor ready for trim and everyday living.",
    image: "/images/hero/floor-living.jpg",
    imageAlt: "Hardwood flooring in a remodeled residential living space",
    accent: "stone",
    ctaHref: "#contact",
    ctaLabel: "Request an Estimate",
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.08, id: "reveal-services" });

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
            className="font-display text-[clamp(1.85rem,4vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.02em] text-charcoal"
          >
            {servicesContent.title}
          </h2>
        </div>

        <div className="mt-8" data-reveal>
          <SpatialServiceShowcase items={showcaseItems} autoPlayMs={5000} />
        </div>
      </div>
    </section>
  );
}
