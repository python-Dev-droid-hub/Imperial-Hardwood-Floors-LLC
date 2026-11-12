import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ServicePageView } from "@/components/services/ServicePageView";
import {
  getAllServicePaths,
  getServiceBySlug,
  getServiceHref,
} from "@/content/services";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServicePaths().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service not found" };
  }

  const siteUrl = getSiteUrl();
  const path = getServiceHref(service);

  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: siteUrl ? `${siteUrl}${path}` : path,
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

function ServicePageFallback() {
  return (
    <main id="main-content" className="min-h-[42svh] bg-charcoal pt-32">
      <div className="mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <div className="h-4 w-40 animate-pulse rounded bg-ivory/15" />
        <div className="mt-6 h-12 w-full max-w-2xl animate-pulse rounded bg-ivory/20" />
        <div className="mt-4 h-8 w-72 animate-pulse rounded bg-ivory/10" />
      </div>
    </main>
  );
}

async function ServiceDetailContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const siteUrl = getSiteUrl();
  const path = getServiceHref(service);
  const pageUrl = siteUrl ? `${siteUrl}${path}` : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.metaDescription,
    url: pageUrl,
    serviceType: service.name,
    areaServed: {
      "@type": "City",
      name: "Olathe",
      containedInPlace: {
        "@type": "State",
        name: "Kansas",
      },
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: site.businessName,
      telephone: site.phone,
      email: site.email,
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ServicePageView service={service} />
    </>
  );
}

export default function ServiceDetailPage({ params }: PageProps) {
  return (
    <Suspense fallback={<ServicePageFallback />}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}
