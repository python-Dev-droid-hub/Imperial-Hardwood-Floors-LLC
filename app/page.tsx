import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HomeSections } from "@/components/sections/HomeSections";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <HomeSections />
      </main>
      <Footer />
    </>
  );
}
