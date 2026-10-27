import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <CtaBanner />
        <Reviews />
        <ServiceArea />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
