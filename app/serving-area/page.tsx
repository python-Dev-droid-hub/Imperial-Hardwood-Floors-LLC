import type { Metadata } from "next";
import { ServingAreaPageView } from "@/components/serving-area/ServingAreaPageView";
import { site } from "@/content/site";

const title = `Flooring Contractor in Olathe, KS | ${site.businessName}`;
const description =
  "Looking for professional flooring services in Olathe, KS? Imperial Hardwood Floors LLC offers hardwood flooring, laminate installation, staircase renovation, and floor repairs.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/serving-area" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title,
    description,
    url: "/serving-area",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServingAreaPage() {
  return <ServingAreaPageView />;
}
