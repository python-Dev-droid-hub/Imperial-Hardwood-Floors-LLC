"use client";

import FinalCtaBanner from "@/components/ui/final-cta-banner";
import { site } from "@/content/site";

export function CtaBanner() {
  return (
    <div id="get-started" className="scroll-mt-24 bg-ivory px-5 py-10 md:px-8 md:py-14">
      <FinalCtaBanner
        eyebrow="Ready to install"
        heading={`Let's install your next hardwood floor in ${site.locationShort}.`}
        body={`Tell us about your new install, replacement, or remodel flooring needs. You'll get a clear conversation focused on scope—not pressure.`}
        primaryLabel="Request an Estimate"
        primaryHref="#contact"
        secondaryLabel="Email us"
        secondaryHref={`mailto:${site.email}`}
        backgroundImage="/images/hero/floor-planks.jpg"
        backgroundAlt="Light hardwood flooring installed in an open living space"
        gradientColors={["#c98a5e", "#b8734a", "#5c3d2e", "#141210"]}
      />
    </div>
  );
}
