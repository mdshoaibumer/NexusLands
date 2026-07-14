import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import handshakeImg from "@/assets/images/handshake.png";

export const Route = createFileRoute("/services/joint-venture")({
  component: JVPage,
  head: () => ({
    meta: constructSEO({
      title: "Joint Venture Real Estate Consulting in Mysore | NexusLands",
      description:
        "Strategic Joint Venture partnerships for large-scale land development in Karnataka. Expert structuring and advisory by NexusLands.",
      url: "https://nexuslands.in/services/joint-venture",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Joint Venture Consulting",
      }),
    }),
  }),
});

function JVPage() {
  return (
    <ServiceLayout
      title="Joint Ventures"
      description="Partner with leading developers to build commercial or residential projects while retaining partial ownership."
      image={handshakeImg}
      breadcrumbs={[
        { label: "Services", to: "/services" },
        { label: "Joint Venture" },
      ]}
      overviewTitle="Fair Partnerships for Large-Scale Projects"
      overviewContent={
        <>
          <p>
            If you own a large parcel of land, developing it requires a highly
            organized partnership. A Joint Venture is a cooperative agreement
            where you and a trusted developer pool your resources to bring a
            major project to life.
          </p>
          <p className="mt-4">
            NexusLands acts as your strategic advisor. We help you structure a
            fair and transparent partnership, ensuring that you remain actively
            involved and securely share in the project's success. We simplify
            the complex terms so you always know exactly where you stand.
          </p>
        </>
      }
      benefits={[
        {
          title: "Shared Success",
          description:
            "You share directly in the overall profits of the project, rewarding you fairly for the value of your land.",
        },
        {
          title: "Active Involvement",
          description:
            "Unlike a standard sale, you maintain a voice in how your land is developed and marketed.",
        },
        {
          title: "Clear Structures",
          description:
            "We ensure the partnership is organized legally and transparently, protecting everyone involved.",
        },
        {
          title: "Expert Guidance",
          description:
            "We guide you through the entire lifecycle, from the initial handshake to the final property handover.",
        },
      ]}
    />
  );
}
