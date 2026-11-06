/**
 * LOCKED service page = simple banner + homepage sections.
 * Change copy/images only in content/services.ts.
 */
import { Footer } from "@/components/layout/Footer";
import { HomeSections } from "@/components/sections/HomeSections";
import { PageBanner } from "@/components/sections/PageBanner";
import { type ServicePage } from "@/content/services";
import { site } from "@/content/site";

type ServicePageViewProps = {
  service: ServicePage;
};

export function ServicePageView({ service }: ServicePageViewProps) {
  return (
    <>
      <main id="main-content">
        <PageBanner
          image={{ src: service.image, alt: service.imageAlt }}
          eyebrow={`${site.locationShort} · ${service.shortName}`}
          headline={service.headline}
          supporting={service.summary}
          ariaLabel={`${service.name} in ${site.locationShort}`}
        />
        <HomeSections service={service} />
      </main>
      <Footer />
    </>
  );
}
