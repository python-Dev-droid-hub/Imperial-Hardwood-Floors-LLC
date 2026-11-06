import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";
import type { ServicePage } from "@/content/services";
import { pickServiceImages } from "@/lib/service-images";

type HomeSectionsProps = {
  /** When set, section images come from this service's gallery. */
  service?: ServicePage;
};

/** Shared below-the-fold sections used on every marketing page. */
export function HomeSections({ service }: HomeSectionsProps = {}) {
  const images = service ? pickServiceImages(service, 7) : undefined;

  return (
    <>
      <About serviceImages={images} />
      <Services serviceImages={images?.slice(0, 3)} />
      <CtaBanner
        backgroundImage={images?.[0]}
        serviceName={service?.name}
      />
      <Reviews />
      <ServiceArea />
      <Faq />
      <Contact />
    </>
  );
}
