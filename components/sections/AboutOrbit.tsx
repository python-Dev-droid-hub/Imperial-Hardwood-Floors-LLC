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

const aboutOrbitData: TimelineItem[] = [
  {
    id: 1,
    title: "Inquiry",
    date: "Step 01",
    content:
      "Share your floor installation needs in Olathe—new hardwood, replacement, or remodel rooms.",
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
      "We review rooms, product preferences, and site conditions so the install scope is clear before estimating.",
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
      "Accurate layout sets starting lines, transitions, and cuts so the hardwood stays even and true.",
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
      "Hardwood floor installation with careful fastening, clean cuts, and attention to every doorway.",
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
      "Rooms, hallways, and transitions come together as a cohesive hardwood floor throughout the home.",
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
      "We wrap the install and coordinate follow-up so trim and everyday living can move forward.",
    category: "Finish",
    icon: CheckCircle2,
    relatedIds: [5],
    status: "pending",
    energy: 20,
    image: "/images/hero/floor-room.jpg",
    borderClass: "border-charcoal/40",
  },
];

export function AboutOrbit() {
  return (
    <RadialOrbitalTimeline
      timelineData={aboutOrbitData}
      centerImage="/images/hero/floor-detail.jpg"
      centerAlt="Hardwood flooring detail after professional installation"
      centerLabel="Olathe · Floors"
      className="bg-ivory py-2 sm:py-4"
    />
  );
}
