"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { serviceAreaContent } from "@/content/site";

export function ServiceArea() {
  return (
    <section
      id="service-area"
      className="scroll-mt-24 border-t border-charcoal/10 bg-ivory text-charcoal"
      aria-labelledby="area-heading"
    >
      {/* Mobile landmark — stacked above content */}
      <div className="relative h-[52vh] min-h-[18rem] overflow-hidden lg:hidden">
        <Image
          src={serviceAreaContent.image.src}
          alt={serviceAreaContent.image.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
        <p className="absolute bottom-5 left-5 rounded-full border border-charcoal/10 bg-ivory/90 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.24em] text-charcoal shadow-sm backdrop-blur-sm">
          {serviceAreaContent.image.caption}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* Left: long-form content scrolls with the page */}
        <div className="px-5 py-12 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-16">
          <div className="mx-auto max-w-xl xl:max-w-2xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper">
              {serviceAreaContent.eyebrow}
            </p>
            <h2
              id="area-heading"
              className="mt-4 font-display text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-charcoal"
            >
              {serviceAreaContent.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-stone-ink md:text-lg">
              {serviceAreaContent.intro}
            </p>

            <div className="mt-10 space-y-10">
              {serviceAreaContent.sections.map((section) => (
                <article key={section.heading} className="space-y-5">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-charcoal md:text-[1.65rem]">
                    {section.heading}
                  </h3>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 48)}
                      className="text-base leading-[1.7] text-stone-ink"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {"subheadings" in section &&
                    section.subheadings?.map((sub) => (
                      <div key={sub.title} className="space-y-3 border-l-2 border-copper/40 pl-5">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-charcoal">
                          {sub.title}
                        </h4>
                        {sub.body.map((paragraph) => (
                          <p
                            key={paragraph.slice(0, 48)}
                            className="text-base leading-[1.7] text-stone-ink"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ))}
                </article>
              ))}
            </div>

            <p className="mt-12 text-sm leading-relaxed text-stone">
              {serviceAreaContent.note}
            </p>

            <div className="mt-10">
              <Button href={serviceAreaContent.cta.href} variant="primaryOnLight">
                {serviceAreaContent.cta.label}
              </Button>
            </div>
          </div>
        </div>

        {/* Right column stretches with left content; image sticks for that full height */}
        <aside className="relative hidden min-h-full lg:block">
          <div className="sticky top-0 h-svh w-full overflow-hidden">
            <Image
              src={serviceAreaContent.image.src}
              alt={serviceAreaContent.image.alt}
              fill
              sizes="50vw"
              className="object-cover object-[center_35%]"
              priority={false}
            />
            <div className="absolute inset-x-0 bottom-0 p-8 xl:p-10">
              <p className="inline-flex rounded-full border border-charcoal/10 bg-ivory/90 px-4 py-2.5 font-display text-sm font-semibold uppercase tracking-[0.26em] text-charcoal shadow-sm backdrop-blur-sm">
                {serviceAreaContent.image.caption}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
