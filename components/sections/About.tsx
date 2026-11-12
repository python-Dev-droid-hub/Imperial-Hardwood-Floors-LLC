"use client";

import { useRef } from "react";
import { AboutOrbit } from "@/components/sections/AboutOrbit";
import { Button } from "@/components/ui/Button";
import { aboutContent } from "@/content/site";
import { useReveal } from "@/hooks/useReveal";
import type { MediaImage } from "@/lib/service-images";

type AboutProps = {
  serviceImages?: MediaImage[];
  content?: {
    eyebrow?: string;
    heading: string;
    paragraphs: string[];
  };
  orbitSteps?: { title: string; content: string }[];
};

export function About({
  serviceImages,
  content,
  orbitSteps,
}: AboutProps = {}) {
  const ref = useRef<HTMLElement>(null);
  useReveal({ scope: ref, stagger: 0.1, id: "reveal-about" });

  const eyebrow = content?.eyebrow ?? aboutContent.eyebrow;
  const heading = content?.heading ?? aboutContent.heading;
  const paragraphs = content?.paragraphs ?? [...aboutContent.paragraphs];

  return (
    <section
      id="about"
      ref={ref}
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory px-5 py-14 text-charcoal md:px-8 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="about-inner mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="about-copy max-w-xl" data-reveal>
          <p className="about-eyebrow mb-4 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
            {eyebrow}
          </p>
          <h2
            id="about-heading"
            className="about-heading font-display text-[clamp(1.25rem,2.4vw,1.95rem)] font-semibold leading-[1.2] tracking-[-0.015em] text-charcoal"
          >
            {heading}
          </h2>
          <div className="about-body mt-6 space-y-4 text-base leading-relaxed text-stone-ink md:text-lg">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="about-cta mt-8">
            <Button href={aboutContent.cta.href} variant="primaryOnLight">
              {aboutContent.cta.label}
            </Button>
          </div>
        </div>

        <div className="about-visual w-full overflow-visible" data-reveal>
          <AboutOrbit serviceImages={serviceImages} steps={orbitSteps} />
          <p className="mt-2 text-center text-xs text-stone">
            Tap a node to explore each stage of floor installation.
          </p>
        </div>
      </div>
    </section>
  );
}
