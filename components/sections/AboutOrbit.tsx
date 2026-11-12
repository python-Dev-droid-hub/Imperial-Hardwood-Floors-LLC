"use client";

import {
  ClipboardList,
  Home,
  Layers,
  Ruler,
  MessagesSquare,
  CheckCircle2,
} from "lucide-react";
import RadialOrbitalTimeline, {
  type TimelineItem,
} from "@/components/ui/radial-orbital-timeline";
import type { MediaImage } from "@/lib/service-images";

const defaultOrbitData: TimelineItem[] = [
  {
    id: 1,
    title: "Inquiry",
    date: "Step 01",
    content: "Reach out today to discuss your flooring needs and options.",
    category: "Start",
    icon: MessagesSquare,
    relatedIds: [2],
    status: "completed",
    energy: 100,
    image: "/images/hero/floor-hero.jpg",
    borderClass: "border-copper",
  },
  {
    id: 2,
    title: "Scope",
    date: "Step 02",
    content:
      "We outline project requirements, materials, timeline, and accurate estimates.",
    category: "Planning",
    icon: ClipboardList,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
    image: "/images/hero/floor-planks.jpg",
    borderClass: "border-[#c4845a]",
  },
  {
    id: 3,
    title: "Layout",
    date: "Step 03",
    content:
      "We carefully plan room measurements and prep surfaces for installation.",
    category: "Craft",
    icon: Ruler,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 70,
    image: "/images/hero/floor-detail.jpg",
    borderClass: "border-stone",
  },
  {
    id: 4,
    title: "Install",
    date: "Step 04",
    content:
      "Our team expertly lays down your new flooring with precision.",
    category: "Build",
    icon: Layers,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 55,
    image: "/images/hero/floor-install.jpg",
    borderClass: "border-copper-bright",
  },
  {
    id: 5,
    title: "Finish",
    date: "Step 05",
    content:
      "We apply premium stains, sealants, and polishes for longevity.",
    category: "Build",
    icon: Home,
    relatedIds: [4, 6],
    status: "pending",
    energy: 35,
    image: "/images/hero/floor-living.jpg",
    borderClass: "border-[#8a847a]",
  },
  {
    id: 6,
    title: "Handoff",
    date: "Step 06",
    content:
      "We inspect the completed project with you to ensure satisfaction.",
    category: "Finish",
    icon: CheckCircle2,
    relatedIds: [5],
    status: "pending",
    energy: 20,
    image: "/images/hero/floor-room.jpg",
    borderClass: "border-charcoal/40",
  },
];

type AboutOrbitProps = {
  serviceImages?: MediaImage[];
  steps?: { title: string; content: string }[];
};

export function AboutOrbit({
  serviceImages,
  steps,
}: AboutOrbitProps = {}) {
  const withCopy = steps?.length
    ? defaultOrbitData.map((item, index) => {
        const step = steps[index];
        return step
          ? { ...item, title: step.title, content: step.content }
          : item;
      })
    : defaultOrbitData;

  const timelineData =
    serviceImages && serviceImages.length > 0
      ? withCopy.map((item, index) => {
          const photo = serviceImages[index % serviceImages.length];
          return { ...item, image: photo.src };
        })
      : withCopy;

  const center = serviceImages?.[0] ?? {
    src: "/images/hero/floor-detail.jpg",
    alt: "Hardwood flooring detail after professional installation",
  };

  return (
    <RadialOrbitalTimeline
      timelineData={timelineData}
      centerImage={center.src}
      centerAlt={center.alt}
      centerLabel="Olathe · Floors"
      className="bg-ivory py-2 sm:py-4"
    />
  );
}
