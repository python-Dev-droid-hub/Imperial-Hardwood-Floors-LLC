import type { Metadata } from "next";
import { ServicesIndexView } from "@/components/services/ServicesIndexView";
import { site } from "@/content/site";

const title = `Flooring Services in Olathe, KS | ${site.businessName}`;
const description =
  "Looking for professional flooring services in Olathe, KS? Imperial Hardwood Floors LLC offers hardwood flooring, laminate installation, staircase renovation, custom work, and floor repairs.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/services" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title,
    description,
    url: "/services",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function ServicesPage() {
  return <ServicesIndexView />;
}
