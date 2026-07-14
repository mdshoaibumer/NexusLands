import { createFileRoute } from "@tanstack/react-router";
import { constructSEO } from "@/lib/seo";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import outrightImg from "@/assets/images/outright.png";

export const Route = createFileRoute("/services/outright-property-sale")({
  component: OutrightPage,
  head: () => ({
    meta: constructSEO({
      title: "Outright Property Sales | Premium Land Transactions | NexusLands",
      description:
        "Discreet, high-value outright land sales in Mysore. We connect landowners directly with premium buyers and developers for swift transactions.",
      url: "https://nexuslands.in/services/outright-property-sale",
      schema: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Property Sales Consulting",
      }),
    }),
  }),
});

function OutrightPage() {
  return (
    <ServiceLayout
      title="Outright Property Sale"
      description="Clean, discreet, and highly lucrative outright sales. We connect premium land assets directly with institutional buyers."
      image={outrightImg}
      breadcrumbs={[
        { label: "Services", to: "/services" },
        { label: "Outright Sale" },
      ]}
      overviewTitle="A Smooth, Secure, and Profitable Sale"
      overviewContent={
        <>
          <p>
            Sometimes the best decision for your family is to simply sell your
            land and secure your financial future. However, navigating the real
            estate market alone can lead to undervaluation and endless
            negotiations with unverified buyers.
          </p>
          <p className="mt-4">
            NexusLands takes the stress out of selling. We connect your property
            directly with our network of serious, verified buyers. We ensure you
            receive the true market value for your land, and we oversee the
            entire transaction to guarantee a smooth and clean handover.
          </p>
        </>
      }
      benefits={[
        {
          title: "Verified Buyers Only",
          description:
            "We only introduce you to serious buyers who have the financial capacity to close the deal.",
        },
        {
          title: "True Market Value",
          description:
            "We evaluate the true potential of your land to ensure you never settle for less than it is worth.",
        },
        {
          title: "Stress-Free Process",
          description:
            "We manage the negotiations, viewings, and coordination, saving you time and frustration.",
        },
        {
          title: "Secure Closing",
          description:
            "We work alongside legal professionals to ensure the paperwork is flawless and your payment is secure.",
        },
      ]}
    />
  );
}
