/**
 * LOCKED simple page banner for all non-home routes.
 * Same visual language as the homepage hero, but shorter and simpler.
 * Pass page-specific copy/image only — do not redesign this layout.
 */
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export type PageBannerProps = {
  image: { src: string; alt: string };
  eyebrow: string;
  headline: string;
  supporting: string;
  primaryCta?: { label: string; href: string };
  ariaLabel?: string;
};

export function PageBanner({
  image,
  eyebrow,
  headline,
  supporting,
  primaryCta = { label: "Request an Estimate", href: "/#contact" },
  ariaLabel,
}: PageBannerProps) {
  return (
    <section
      className="relative min-h-[42svh] overflow-hidden bg-charcoal text-ivory md:min-h-[48svh]"
      aria-label={ariaLabel ?? headline}
    >
      <div className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/60 to-charcoal/30" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/35" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[42svh] max-w-7xl items-end px-5 pb-12 pt-32 md:min-h-[48svh] md:px-8 md:pb-16 md:pt-36">
        <div className="max-w-3xl">
          <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-copper-bright">
            {eyebrow}
          </p>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
            {headline}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/78 md:text-lg">
            {supporting}
          </p>
          <div className="mt-7">
            <Button href={primaryCta.href} variant="primary">
              {primaryCta.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
