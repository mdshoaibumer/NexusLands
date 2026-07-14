import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Minus, Plus } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WA_URL } from "@/lib/constants";
import aerialImg from "@/assets/images/aerial.png";

export function Faq() {
  const items = [
    {
      q: "How does a Joint Development Agreement (JDA) work in simple terms?",
      a: "In a JDA, you provide the land, and a trusted developer provides the money and expertise to build on it. Once the project is finished, you share the newly built properties. This allows you to develop your land without spending any of your own money.",
    },
    {
      q: "Do you provide direct legal or tax advice?",
      a: "No, we are land advisors, not a law firm or an accounting firm. However, we work closely alongside top real estate lawyers and tax professionals to ensure your contracts are safe, secure, and properly structured.",
    },
    {
      q: "How do you ensure the developer is trustworthy?",
      a: "We do not work with just anyone. We rigorously check a developer's past projects, financial health, and legal history before introducing them to you. We only recommend developers who have a proven track record of finishing projects on time.",
    },
    {
      q: "What happens if there are construction delays?",
      a: "We help structure agreements that include strict timelines and penalty clauses. If the developer is late, they are legally required to compensate you. We make sure these protections are clearly written into your contract.",
    },
    {
      q: "Is it better to take a share of the revenue or a share of the built area?",
      a: "It depends on your goals. Area sharing gives you physical apartments or commercial spaces you can keep or rent out. Revenue sharing gives you a percentage of the sales money. We will help you understand which option is best for your family.",
    },
    {
      q: "Who handles the government approvals?",
      a: "The developer is entirely responsible for securing all necessary government approvals, including RERA registration, environmental clearances, and zoning permits. You do not have to navigate the bureaucracy.",
    },
    {
      q: "Do I lose ownership of my land during a Joint Development?",
      a: "No. You retain ownership of the land until the project is completed and the agreed-upon shares are legally divided. We ensure your ownership rights are fully protected throughout the construction phase.",
    },
    {
      q: "What is the difference between a Joint Development and a Joint Venture?",
      a: "A Joint Development is usually simpler: you give land, they build, you share the result. A Joint Venture is typically for much larger projects where you form a new partnership company together, sharing both the responsibilities and the overall profits.",
    },
    {
      q: "How do you calculate the true value of my land?",
      a: "We look far beyond standard broker rates. We analyze recent sales data, upcoming local infrastructure, zoning rules, and the land's future development potential to determine exactly what your property is worth today.",
    },
    {
      q: "Can you help me if I just want to sell my land quickly?",
      a: "Yes. If an outright sale is the best choice for you, we can connect you directly with our network of serious, verified buyers. This helps you avoid time-wasters and secures a professional, smooth transaction.",
    },
    {
      q: "Are there any hidden fees?",
      a: "Absolutely not. We believe in total transparency. All our advisory fees and structures are discussed openly during our very first meetings, long before any agreements are signed.",
    },
    {
      q: "What are the first steps to evaluating my land?",
      a: "It starts with a simple conversation. You can book a free consultation with us to discuss your property. We will review the location, listen to your goals, and outline the best options for your family with zero pressure.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <section id="faq" className="relative bg-cream py-32 md:py-48">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="mt-8 font-display text-[2.5rem] leading-[1.05] tracking-tight text-forest-deep sm:text-5xl">
            Clarity in every transaction.
          </h2>
          <p className="mt-8 text-[16px] leading-[1.8] text-muted-foreground text-pretty">
            Real estate decisions are significant. We believe in absolute
            transparency from our very first meeting. Here are straightforward
            answers to the questions families ask us most.
          </p>
          <div className="mt-12 overflow-hidden rounded-sm border border-forest/10 shadow-soft">
            <img src={aerialImg} alt="Premium plotted land aerial view" className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <a
            href={WA_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-sm border border-forest/20 bg-background px-8 py-3.5 text-[14px] font-medium uppercase tracking-[0.08em] text-forest transition-all duration-700 hover:border-forest-deep hover:bg-forest-deep hover:text-white"
          >
            <MessageCircle className="h-4 w-4" /> Ask us directly
          </a>
        </div>

        <div className="border-t border-forest/10">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b border-forest/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="group flex w-full items-start justify-between gap-8 py-8 text-left transition-colors duration-500 hover:text-gold"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-[1.25rem] leading-snug tracking-tight text-forest-deep sm:text-[1.5rem] group-hover:text-gold transition-colors duration-500">
                    {it.q}
                  </span>
                  <span
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-forest-deep transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-gold ${
                      isOpen ? "rotate-180 text-gold" : ""
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" strokeWidth={1.5} />
                    ) : (
                      <Plus className="h-5 w-5" strokeWidth={1.5} />
                    )}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pr-12 text-[15px] leading-[1.8] text-muted-foreground text-pretty md:text-[16px]">
                    {it.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
