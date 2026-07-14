import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import legalImg from "@/assets/images/legal.png";
import { constructSEO } from "@/lib/seo";

export const Route = createFileRoute("/legal/terms")({
  component: Terms,
  head: () => ({
    meta: constructSEO({
      title: "Terms of Service - NexusLands",
      description: "Terms and conditions governing the use of NexusLands advisory services.",
      url: "https://nexuslands.in/legal/terms",
    }),
  }),
});

function Terms() {
  return (
    <>
      <PageHero
        title="Terms of Service"
        description="The terms governing the use of our advisory services and website."
        image={legalImg}
        breadcrumbs={[{ label: "Legal" }, { label: "Terms of Service" }]}
      />
      <section className="container-luxe py-24">
        <div className="prose prose-forest mx-auto max-w-3xl">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the NexusLands website, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
          
          <h2>2. Advisory Services</h2>
          <p>
            NexusLands provides real estate advisory and consulting services. All valuations, recommendations, and projections provided are estimates based on market data and our professional judgment. They do not constitute binding guarantees of financial returns.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of NexusLands and protected by intellectual property laws. You may not reproduce or distribute any content without our express written permission.
          </p>

          <h2>4. Limitation of Liability</h2>
          <p>
            NexusLands shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or website.
          </p>

          <h2>5. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Your continued use of the website following any changes constitutes your acceptance of the new terms.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Mysore, Karnataka.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </>
  );
}
