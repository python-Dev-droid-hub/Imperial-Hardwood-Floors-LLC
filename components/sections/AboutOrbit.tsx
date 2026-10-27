"use client";

import {
  ClipboardList,
  Hammer,
  Home,
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
      "Share your residential framing needs in Bellingham—new home, addition, or renovation.",
    category: "Start",
    icon: MessagesSquare,
    relatedIds: [2],
    status: "completed",
    energy: 100,
    image: "/images/hero/framing-neighborhood.webp",
    borderClass: "border-copper",
  },
  {
    id: 2,
    title: "Scope",
    date: "Step 02",
    content:
      "We review plans, access, and structural goals so the framing scope is clear before estimating.",
    category: "Planning",
    icon: ClipboardList,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
    image: "/images/hero/frame-main.jpg",
    borderClass: "border-[#c4845a]",
  },
  {
    id: 3,
    title: "Layout",
    date: "Step 03",
    content:
      "Accurate layout sets walls, floors, and openings so the frame stays square and true.",
    category: "Craft",
    icon: Ruler,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 70,
    image: "/images/hero/frame-beams.jpg",
    borderClass: "border-stone",
  },
  {
    id: 4,
    title: "Framing",
    date: "Step 04",
    content:
      "Structural framing for residential construction—built with careful connections and clean workmanship.",
    category: "Build",
    icon: Hammer,
    relatedIds: [3, 5],
    status: "in-progress",
    energy: 55,
    image: "/images/hero/framing-crew.webp",
    borderClass: "border-copper-bright",
  },
  {
    id: 5,
    title: "Structure",
    date: "Step 05",
    content:
      "Walls, floors, and roof framing come together as the backbone of the home.",
    category: "Build",
    icon: Home,
    relatedIds: [4, 6],
    status: "pending",
    energy: 35,
    image: "/images/hero/frame-detail.jpg",
    borderClass: "border-[#8a847a]",
  },
  {
    id: 6,
    title: "Handoff",
    date: "Step 06",
    content:
      "We wrap the framing stage and coordinate follow-up so the next trades can move forward.",
    category: "Finish",
    icon: CheckCircle2,
    relatedIds: [5],
    status: "pending",
    energy: 20,
    image: "/images/hero/frame-skyline.jpg",
    borderClass: "border-charcoal/40",
  },
];

export function AboutOrbit() {
  return (
    <RadialOrbitalTimeline
      timelineData={aboutOrbitData}
      centerImage="/images/hero/framing-neighborhood.webp"
      centerAlt="Residential wood framing homes under construction"
      centerLabel="Bellingham · Framing"
      className="bg-ivory py-2 sm:py-4"
    />
  );
}
