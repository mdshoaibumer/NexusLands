import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Process() {
  const steps = [
    {
      n: "01",
      title: "Initial Consultation",
      body: "We start with a simple conversation to understand your family's goals, timeline, and expectations. No pressure, no obligations.",
    },
    {
      n: "02",
      title: "Property Evaluation",
      body: "Our team assesses your land's true market value by analyzing local zoning laws, upcoming infrastructure, and current market data.",
    },
    {
      n: "03",
      title: "Strategy & Structuring",
      body: "We present the best options for your property—whether that is a Joint Development, a Joint Venture, or an outright sale.",
    },
    {
      n: "04",
      title: "Execution & Handover",
      body: "We coordinate with trusted developers and legal experts to finalize the paperwork and ensure a smooth, secure transaction.",
    },
  ];

  return (
    <section id="process" className="relative py-32 md:py-48">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <SectionLabel>The Journey</SectionLabel>
          </div>
          <h2 className="mt-8 text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-forest-deep sm:text-5xl md:text-[4rem]">
            A simple, considered process.
          </h2>
          <p className="mt-8 text-pretty text-[16px] leading-[1.8] text-muted-foreground md:text-[17px]">
            Five deliberate steps designed to remove ambiguity and protect your
            interests.
          </p>
        </div>

        <div className="relative mx-auto mt-24 max-w-4xl sm:mt-32">
          <div className="absolute left-[28px] top-4 bottom-4 w-px bg-forest/10 md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-16 sm:space-y-24">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  className={`relative flex flex-col gap-6 pl-20 md:grid md:grid-cols-2 md:gap-24 md:pl-0 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:col-start-2" : ""
                  }`}
                >
                  <div
                    className={
                      i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"
                    }
                  >
                    <div className="font-display text-[11px] uppercase tracking-[0.25em] text-gold-dark">
                      Phase {s.n}
                    </div>
                    <h3 className="mt-4 font-display text-[1.75rem] leading-tight tracking-tight text-forest-deep sm:text-[2rem]">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-[1.8] text-muted-foreground text-pretty">
                      {s.body}
                    </p>
                  </div>
                  <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center bg-background md:left-1/2 md:h-16 md:w-16 md:-translate-x-1/2">
                    <span className="font-display text-2xl text-forest/80">
                      {s.n}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
