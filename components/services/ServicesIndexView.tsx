/**
 * LOCKED services index = simple banner + homepage sections.
 * Change copy only in content/site.ts (servicesPageBanner + shared sections).
 */
import { Footer } from "@/components/layout/Footer";
import { HomeSections } from "@/components/sections/HomeSections";
import { PageBanner } from "@/components/sections/PageBanner";
import { servicesPageBanner } from "@/content/site";

export function ServicesIndexView() {
  return (
    <>
      <main id="main-content">
        <PageBanner
          image={{
            src: "/images/services/floor-installation/01-plank-install.jpg",
            alt: "Flooring contractor installing wood-grain planks in a residential room",
          }}
          eyebrow={servicesPageBanner.eyebrow}
          headline={servicesPageBanner.headline}
          supporting={servicesPageBanner.supporting}
        />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
