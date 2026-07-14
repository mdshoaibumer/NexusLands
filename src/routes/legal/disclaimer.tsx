import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import legalImg from "@/assets/images/legal.png";
import { constructSEO } from "@/lib/seo";

export const Route = createFileRoute("/legal/disclaimer")({
  component: Disclaimer,
  head: () => ({
    meta: constructSEO({
      title: "Disclaimer - NexusLands",
      description: "Important legal disclaimers regarding our real estate advisory services.",
      url: "https://nexuslands.in/legal/disclaimer",
    }),
  }),
});

function Disclaimer() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        description="Important legal information regarding our advisory role."
        image={legalImg}
        breadcrumbs={[{ label: "Legal" }, { label: "Disclaimer" }]}
      />
      <section className="container-luxe py-24">
        <div className="prose prose-forest mx-auto max-w-3xl">
          <h2>General Advisory Nature</h2>
          <p>
            NexusLands operates strictly as a real estate advisory firm. We are not a law firm, tax consultancy, or registered financial planner. Any information, guidance, or structures recommended by NexusLands are for informational and strategic purposes only.
          </p>
          
          <h2>No Professional Legal or Tax Advice</h2>
          <p>
            While we coordinate with legal and tax professionals to facilitate transactions, any reliance on the information provided by NexusLands is at your own risk. We strongly recommend that all clients seek independent legal and tax counsel before executing any Joint Development Agreements, Joint Ventures, or Sales Deeds.
          </p>

          <h2>Accuracy of Information</h2>
          <p>
            We strive to ensure that all property valuations, zoning information, and market data presented are accurate and up-to-date. However, real estate markets are dynamic, and regulatory frameworks (such as FSI/FAR rules) can change. NexusLands makes no representations or warranties of any kind regarding the completeness, accuracy, or reliability of this information.
          </p>

          <h2>Third-Party Developers</h2>
          <p>
            Any introductions made to third-party developers, builders, or investors are done in good faith following our internal due diligence. NexusLands is not liable for the actions, defaults, or project delays caused by any third-party entity. The final contractual relationship and associated risks exist strictly between the landowner and the selected developer.
          </p>
        </div>
      </section>
    </>
  );
}
