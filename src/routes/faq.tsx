import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import ctaImg from "@/assets/images/cta.jpg";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: constructSEO({
      title: "Frequently Asked Questions | NexusLands",
      description:
        "Find answers to common questions about Joint Development, land valuation, and working with NexusLands in Mysore.",
      url: "https://nexuslands.in/faq",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is a Joint Development Agreement (JDA)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "A Joint Development Agreement is a contract where a landowner and a developer come together to construct a real estate project on the owner's land.",
            },
          },
        ],
      }),
    }),
  }),
});

function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        description="Clear, honest answers to the most common questions families have about developing and selling land."
        image={ctaImg}
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <div className="pt-24">
        <Faq />
      </div>
      <FinalCta />
    </>
  );
}
