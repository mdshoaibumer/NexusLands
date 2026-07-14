import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/ui/PageHero";
import legalImg from "@/assets/images/legal.png";
import { constructSEO } from "@/lib/seo";

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: constructSEO({
      title: "Privacy Policy - NexusLands",
      description: "Privacy Policy and data protection guidelines for NexusLands.",
      url: "https://nexuslands.in/legal/privacy",
    }),
  }),
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your information."
        image={legalImg}
        breadcrumbs={[{ label: "Legal" }, { label: "Privacy Policy" }]}
      />
      <section className="container-luxe py-24">
        <div className="prose prose-forest mx-auto max-w-3xl">
          <h2>1. Information We Collect</h2>
          <p>
            When you interact with NexusLands, we may collect personal information such as your name, email address, phone number, and property details. This information is primarily collected through our contact forms and WhatsApp interactions.
          </p>
          
          <h2>2. How We Use Your Information</h2>
          <p>
            The information you provide is used strictly to evaluate your property, offer advisory services, and communicate with you regarding your real estate inquiries. We do not sell or rent your personal information to third parties.
          </p>

          <h2>3. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access or disclosure. However, no internet transmission is entirely secure.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            We use third-party analytics tools (e.g., Google Analytics) to improve our website experience. These tools may use cookies to collect anonymous usage data. By continuing to use our site, you consent to the use of these tools.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:support@nexuslands.in">support@nexuslands.in</a>.
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Last Updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>
    </>
  );
}
