"use client";

import FinalCtaBanner from "@/components/ui/final-cta-banner";
import { ctaContent, site } from "@/content/site";
import type { MediaImage } from "@/lib/service-images";

type CtaBannerProps = {
  backgroundImage?: MediaImage;
  serviceName?: string;
  content?: {
    eyebrow?: string;
    heading: string;
    body: string;
  };
};

export function CtaBanner({
  backgroundImage,
  serviceName,
  content,
}: CtaBannerProps = {}) {
  const heading =
    content?.heading ??
    (serviceName
      ? `Let's talk about your ${serviceName.toLowerCase()} project in ${site.locationShort}.`
      : ctaContent.heading);
  const body = content?.body ?? ctaContent.body;
  const eyebrow = content?.eyebrow ?? ctaContent.eyebrow;

  return (
    <div id="get-started" className="scroll-mt-24 bg-ivory px-5 py-10 md:px-8 md:py-14">
      <FinalCtaBanner
        eyebrow={eyebrow}
        heading={heading}
        body={body}
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
