import type { Metadata } from "next";
import { ServingAreaPageView } from "@/components/serving-area/ServingAreaPageView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Serving Areas · Flooring in ${site.locationShort}`,
  description: `Serving areas for ${site.businessName}. Browse flooring services in ${site.locationShort}—floor installation, hardwood, laminate, staircase, custom work, floor repair, and Imperial concrete coating.`,
  alternates: { canonical: "/serving-area" },
  openGraph: {
    title: `Serving Areas · Flooring in ${site.locationShort} | ${site.businessName}`,
    description: `Pick your serving area, then open the flooring service page that matches your project in ${site.locationShort}.`,
    url: "/serving-area",
  },
};

export default function ServingAreaPage() {
  return <ServingAreaPageView />;
}
