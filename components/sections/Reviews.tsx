"use client";

import TestimonialsMarquee from "@/components/ui/testimonials-with-marquee";
import { reviewsContent } from "@/content/site";

export function Reviews() {
  return (
    <TestimonialsMarquee
      id="reviews"
      title={reviewsContent.title}
      description={reviewsContent.body}
      testimonials={[...reviewsContent.testimonials]}
    />
  );
}
