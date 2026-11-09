import type { Metadata } from "next";
import { ServicesIndexView } from "@/components/services/ServicesIndexView";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Flooring Services in ${site.locationShort}`,
  description: `Explore flooring services in ${site.locationShort}: floor installation, hardwood, laminate, staircase, custom work, floor repair, and Imperial concrete coating from ${site.businessName}.`,
  alternates: { canonical: "/services" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: `Flooring Services in ${site.locationShort} | ${site.businessName}`,
    description: `Seven flooring services for homes in ${site.locationShort}. Request an estimate from ${site.businessName}.`,
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesIndexView />;
}
