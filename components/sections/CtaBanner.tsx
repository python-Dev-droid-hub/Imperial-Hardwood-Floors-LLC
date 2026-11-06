"use client";

import FinalCtaBanner from "@/components/ui/final-cta-banner";
import { site } from "@/content/site";
import type { MediaImage } from "@/lib/service-images";

type CtaBannerProps = {
  backgroundImage?: MediaImage;
  serviceName?: string;
};

export function CtaBanner({
  backgroundImage,
  serviceName,
}: CtaBannerProps = {}) {
  const heading = serviceName
    ? `Let's talk about your ${serviceName.toLowerCase()} project in ${site.locationShort}.`
    : `Let's install your next hardwood floor in ${site.locationShort}.`;

  return (
    <div id="get-started" className="scroll-mt-24 bg-ivory px-5 py-10 md:px-8 md:py-14">
      <FinalCtaBanner
        eyebrow="Ready to install"
        heading={heading}
        body={`Tell us about your new install, replacement, or remodel flooring needs. You'll get a clear conversation focused on scope—not pressure.`}
        primaryLabel="Request an Estimate"
        primaryHref="/#contact"
        secondaryLabel="Email us"
        secondaryHref={`mailto:${site.email}`}
        backgroundImage={
          backgroundImage?.src ?? "/images/hero/floor-planks.jpg"
        }
        backgroundAlt={
          backgroundImage?.alt ??
          "Light hardwood flooring installed in an open living space"
        }
        gradientColors={["#c98a5e", "#b8734a", "#5c3d2e", "#141210"]}
      />
    </div>
  );
}
