import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { FinalCta } from "@/components/sections/FinalCta";
import heroImg from "@/assets/images/hero.jpg";

export const Route = createFileRoute("/services/")({
  component: ServicesIndexPage,
  head: () => ({
    meta: constructSEO({
      title: "Our Services | Land Development & Sales | NexusLands",
      description:
        "Explore our premium land advisory services including Joint Development Agreements (JDA), Joint Ventures, and Strategic Property Sales in Mysore.",
      url: "https://nexuslands.in/services",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "NexusLands Advisory Services",
      }),
    }),
  }),
});

function ServicesIndexPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Whether you want to develop your land or sell it outright, we offer clear, honest advice to help you make the best decision for your family."
        image={heroImg}
        breadcrumbs={[{ label: "Services" }]}
      />
      <div className="pt-24">
        <Services />
      </div>
      <Process />
      <FinalCta />
    </>
  );
}
