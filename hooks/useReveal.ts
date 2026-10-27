"use client";

import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

type Options = {
  scope: RefObject<HTMLElement | null>;
  y?: number;
  stagger?: number;
  start?: string;
  /** Unique id prefix to avoid duplicate ScrollTriggers across sections */
  id?: string;
};

/** Coordinated scroll reveal for `[data-reveal]` children inside a section. */
export function useReveal({
  scope,
  y = 36,
  stagger = 0.08,
  start = "top 78%",
  id = "section-reveal",
}: Options) {
  useGSAP(
    () => {
      registerGsap();
      const root = scope.current;
      if (!root) return;

      const triggerId = `${id}-${root.id || "anon"}`;
      ScrollTrigger.getById(triggerId)?.kill();

      const mm = gsap.matchMedia();

      mm.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { motion } = context.conditions as { motion: boolean };
          const items = gsap.utils.toArray<HTMLElement>(
            root.querySelectorAll("[data-reveal]"),
          );

          if (!items.length) return;

          if (!motion) {
            gsap.set(items, { clearProps: "all", autoAlpha: 1, y: 0 });
            return;
          }

          gsap.set(items, { autoAlpha: 0, y });

          gsap.to(items, {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            stagger,
            overwrite: "auto",
            scrollTrigger: {
              id: triggerId,
              trigger: root,
              start,
              once: true,
              invalidateOnRefresh: true,
            },
          });
        },
      );

      return () => {
        ScrollTrigger.getById(triggerId)?.kill();
        mm.revert();
      };
    },
    { scope, dependencies: [id, y, stagger, start] },
  );
}
