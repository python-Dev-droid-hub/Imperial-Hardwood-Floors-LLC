import type { Metadata } from "next";
import { ServicesIndexView } from "@/components/services/ServicesIndexView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Flooring Services in Olathe KS",
  description:
    "Your trusted residential or commercial flooring services contractor in Olathe KS. Hardwood, laminate, staircase, custom work, floor repair, and installation from Imperial Hardwood Floors LLC.",
  alternates: { canonical: "/services" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: `Flooring Services in Olathe KS | ${site.businessName}`,
    description:
      "Protect your investment with Imperial Hardwood Floors LLC—professional flooring installation, replacement, and repair services in Olathe, KS.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesIndexView />;
}
