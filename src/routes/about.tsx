import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { FinalCta } from "@/components/sections/FinalCta";
import aboutImg from "@/assets/images/about.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: constructSEO({
      title: "About NexusLands | Premium Land Consultants in Mysore",
      description:
        "Learn about NexusLands, Mysore's most trusted land advisory firm specializing in joint development and premium property transactions.",
      url: "https://nexuslands.in/about",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "NexusLands Advisory",
        url: "https://nexuslands.in/about",
      }),
    }),
  }),
});

function AboutPage() {
  return (
    <>
      <PageHero
        title="About NexusLands"
        description="We are a trusted advisory firm helping families and landowners across Karnataka realize the true potential of their land."
        image={aboutImg}
        breadcrumbs={[{ label: "About" }]}
      />
      <About />
      <Stats />
      <FinalCta />
    </>
  );
}
