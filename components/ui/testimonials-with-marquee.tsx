"use client";

import { motion } from "motion/react";
import { AnimatedTestimonials } from "@/components/ui/testimonials-with-marquee-utils/animated-testimonials";

export type TestimonialsMarqueeProps = {
  title?: string;
  description?: string;
  testimonials: {
    name: string;
    handle: string;
    description: string;
    image: string;
  }[];
  className?: string;
  id?: string;
};

export default function TestimonialsMarquee({
  title = "Trusted by homeowners in Olathe",
  description = "What clients value when the floor has to be clean, solid, and ready for everyday living.",
  testimonials,
  className = "",
  id,
}: TestimonialsMarqueeProps) {
  const titleWords = title.split(" ");

  return (
    <section
      id={id}
      className={`relative w-full scroll-mt-24 bg-background ${className}`}
      aria-labelledby="testimonials-heading"
    >
      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="flex flex-col items-center gap-4 px-5 py-8 text-center md:px-8 md:py-10">
          <h2
            id="testimonials-heading"
            className="max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground md:text-6xl"
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={`title-${word}-${index}`}
                initial={{ opacity: 0, filter: "blur(6px)", y: 12 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-2xl px-4 text-base text-muted-foreground md:text-lg"
          >
            {description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="w-full pb-8 md:pb-12"
        >
          <AnimatedTestimonials data={testimonials} rows={2} />
        </motion.div>
      </div>
    </section>
  );
}
