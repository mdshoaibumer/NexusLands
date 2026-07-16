import { ShieldCheck, Scale, TrendingUp, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function WhySection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Your Interests Come First",
      body: "We are not brokers. We are advisors who sit on your side of the table, ensuring you get the best possible outcome for your land.",
    },
    {
      icon: Scale,
      title: "Clear & Honest Communication",
      body: "Real estate can be confusing. We break down the jargon and explain every contract in plain language so you always know what you are signing.",
    },
    {
      icon: TrendingUp,
      title: "Zero Upfront Fees",
      body: "We believe in shared success. Our initial consultations are entirely free, and our fee structure is completely transparent from day one.",
    },
    {
      icon: Sparkles,
      title: "Local Market Expertise",
      body: "We understand Mysore's growth. We know the zoning laws, the upcoming developments, and exactly what buyers and developers are looking for.",
    },
  ];

  return (
    <section id="why" className="relative py-32 md:py-48">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>Our Promise</SectionLabel>
          </div>
          <h2 className="mt-8 text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-forest-deep sm:text-5xl md:text-[4rem]">
            Why landowners <em className="text-gold-dark not-italic">trust</em>{" "}
            NexusLands.
          </h2>
          <p className="mt-8 text-pretty text-[16px] leading-[1.8] text-muted-foreground md:text-[17px]">
            A quiet, considered approach to a decision that often defines a
            family for generations.
          </p>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-12 sm:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
          {features.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col">
                <div className="mb-6 inline-flex text-forest transition-colors duration-700 group-hover:text-gold-dark">
                  <c.icon className="h-8 w-8" strokeWidth={1.2} />
                </div>
                <div className="font-display text-[11px] uppercase tracking-[0.25em] text-gold-dark/60 mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-[1.5rem] leading-tight tracking-tight text-forest-deep sm:text-[1.75rem]">
                  {c.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground text-pretty">
                  {c.body}
                </p>
                <div className="mt-6 h-px w-8 bg-forest/10 transition-all duration-700 group-hover:w-full group-hover:bg-gold/40" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
