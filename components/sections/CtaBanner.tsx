"use client";

import FinalCtaBanner from "@/components/ui/final-cta-banner";
import { site } from "@/content/site";

export function CtaBanner() {
  return (
    <div id="get-started" className="scroll-mt-24 bg-ivory px-5 py-10 md:px-8 md:py-14">
      <FinalCtaBanner
        eyebrow="Ready to build"
        heading={`Let's frame your next residential project in ${site.locationShort}.`}
        body={`Tell ${site.contactName} about your new home, addition, or renovation framing needs. You'll get a clear conversation focused on scope—not pressure.`}
        primaryLabel="Request an Estimate"
        primaryHref="#contact"
        secondaryLabel={`Email ${site.contactName.split(" ")[0]}`}
        secondaryHref={`mailto:${site.email}`}
        backgroundImage="/images/hero/framing-crew.webp"
        backgroundAlt="Residential framing crew on a construction site"
        gradientColors={["#c98a5e", "#b8734a", "#5c3d2e", "#141210"]}
      />
    </div>
  );
}
