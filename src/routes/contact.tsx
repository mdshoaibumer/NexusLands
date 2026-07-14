import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { PageHero } from "@/components/ui/PageHero";
import { Contact } from "@/components/sections/Contact";
import heroImg from "@/assets/images/hero.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: constructSEO({
      title: "Contact NexusLands | Book a Free Consultation",
      description:
        "Get in touch with NexusLands Advisory in Mysore. Book a free consultation to discuss your land's true value and development potential.",
      url: "https://nexuslands.in/contact",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "NexusLands",
        telephone: "+919000000000",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Jayalakshmipuram",
          addressLocality: "Mysore",
        },
      }),
    }),
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        description="We are ready to discuss your property. Reach out to schedule a confidential consultation with our advisory team."
        image={heroImg}
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Contact />
    </>
  );
}
