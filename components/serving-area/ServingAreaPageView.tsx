/**
 * Serving Areas direction page — city sections + service button grid.
 * Not the homepage template. Change copy/images in content/serving-areas.ts.
 */
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import {
  servingAreaHero,
  servingAreaPages,
  servingAreaServiceLinks,
} from "@/content/serving-areas";
import { site } from "@/content/site";

export function ServingAreaPageView() {
  return (
    <>
      <main id="main-content">
        <section className="relative min-h-[70svh] overflow-hidden bg-charcoal text-ivory">
          <div className="absolute inset-0">
            <Image
              src={servingAreaHero.image.src}
              alt={servingAreaHero.image.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_35%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/55 to-charcoal/25" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 pb-16 pt-36 md:items-center md:px-8 md:pb-24 md:pt-40">
            <div className="max-w-3xl">
              <h1 className="font-display text-[clamp(1.4rem,2.8vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.015em]">
                {servingAreaHero.headline}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/78 md:text-lg">
                {servingAreaHero.supporting}
              </p>
              <div className="mt-8">
                <Button href={servingAreaHero.primaryCta.href} variant="primary">
                  {servingAreaHero.primaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {servingAreaPages.map((area, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <section
              key={area.slug}
              id={area.slug}
              className="scroll-mt-28 border-t border-charcoal/10 bg-ivory text-charcoal"
              aria-labelledby={`${area.slug}-heading`}
            >
              <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-2 lg:gap-14">
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-charcoal/5 lg:aspect-[5/4] ${
                    imageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={area.image}
                    alt={area.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                <div className={imageLeft ? "lg:order-2" : "lg:order-1"}>
                  <h2
                    id={`${area.slug}-heading`}
                    className="font-display text-[clamp(1.4rem,2.8vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.015em]"
                  >
                    {area.headline}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-ink md:text-lg">
                    {area.description}
                  </p>

                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {servingAreaServiceLinks.map((service) => (
                      <Link
                        key={`${area.slug}-${service.href}`}
                        href={service.href}
                        className="flex min-h-12 items-center justify-center border border-charcoal/15 bg-transparent px-3 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-charcoal transition-colors hover:border-copper hover:bg-copper/5 hover:text-copper"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="border-t border-charcoal/10 bg-charcoal px-5 py-14 text-ivory md:px-8 md:py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper-bright">
                Ready to start
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.4rem,2.8vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.015em]">
                Tell us about your {site.locationShort} project
              </h2>
            </div>
            <Button href="/#contact" variant="primary">
              Request an Estimate
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
