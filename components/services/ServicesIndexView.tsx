/**
 * LOCKED services index = simple banner + homepage sections.
 * Card list data still comes from content/services.ts via HomeSections.
 */
import { Footer } from "@/components/layout/Footer";
import { HomeSections } from "@/components/sections/HomeSections";
import { PageBanner } from "@/components/sections/PageBanner";
import { site } from "@/content/site";

export function ServicesIndexView() {
  return (
    <>
      <main id="main-content">
        <PageBanner
          image={{
            src: "/images/services/floor-installation/01-plank-install.jpg",
            alt: "Flooring contractor installing wood-grain planks in a residential room",
          }}
          eyebrow={`Services · ${site.locationShort}`}
          headline={`Flooring Services in ${site.locationShort}`}
          supporting="Seven focused services for Olathe homes—from hardwood and laminate to stairs, repairs, custom details, and Imperial concrete coating."
        />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
