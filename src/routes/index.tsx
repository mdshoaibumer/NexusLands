import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WhySection } from "@/components/sections/WhySection";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";
import { constructSEO } from "@/lib/seo";

export const Route = createFileRoute("/")({
  component: NexusLandsPage,
  head: () => ({
    meta: constructSEO({
      title: "NexusLands | Premium Land Consultancy & Joint Development Mysore",
      description:
        "NexusLands is a premium land consultancy in Mysore, Karnataka. We help landowners unlock maximum value through Joint Development (JDA), Joint Ventures, and strategic outright property sales.",
      url: "https://nexuslands.in/",
    }),
  }),
});

function NexusLandsPage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhySection />
      <Services />
      <Process />
      <Stats />
      <About />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
