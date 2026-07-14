import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import blueprintImg from "@/assets/images/blueprint.png";

export const Route = createFileRoute("/services/joint-development")({
  component: JDAPage,
  head: () => ({
    meta: constructSEO({
      title: "Joint Development Agreements (JDA) in Mysore | NexusLands",
      description:
        "Partner with top-tier developers in Mysore through a Joint Development Agreement. Retain ownership while unlocking immense property value.",
      url: "https://nexuslands.in/services/joint-development",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Joint Development Consulting",
      }),
    }),
  }),
});

function JDAPage() {
  return (
    <ServiceLayout
      title="Joint Development Agreements (JDA)"
      description="Unlock the maximum potential of your land by partnering with top-tier developers without upfront capital."
      image={blueprintImg}
      breadcrumbs={[
        { label: "Services", to: "/services" },
        { label: "Joint Development" },
      ]}
      overviewTitle="Build on Your Land Without Upfront Costs"
      overviewContent={
        <>
          <p>
            For many families, developing inherited land is a daunting task. It
            requires massive capital, endless approvals, and construction
            expertise. A Joint Development Agreement (JDA) solves this by
            pairing you with a trusted, professional developer.
          </p>
          <p className="mt-4">
            In a JDA, you provide the land, and the developer covers 100% of the
            construction costs. Once the project is completed, you both share
            the newly built apartments or commercial spaces. NexusLands helps
            you choose the right developer and negotiates a fair share, ensuring
            your family's financial security for generations.
          </p>
        </>
      }
      benefits={[
        {
          title: "No Construction Costs",
          description:
            "The developer pays for all construction, labor, and marketing. You invest zero capital.",
        },
        {
          title: "Keep Your Property",
          description:
            "Instead of selling your land and losing the asset, you retain ownership of premium, newly built units.",
        },
        {
          title: "Professional Execution",
          description:
            "We connect you with developers who have a proven track record of delivering high-quality projects on time.",
        },
        {
          title: "Protected Interests",
          description:
            "We work with top legal experts to ensure the agreement protects you from delays and hidden clauses.",
        },
      ]}
    />
  );
}
