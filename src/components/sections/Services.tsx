import { Building2, Handshake, Landmark, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Services() {
  const services = [
    {
      icon: Building2,
      tag: "01",
      title: "Joint Development",
      body: "Partner with trusted developers to build on your land without upfront costs. We help you negotiate a fair share of the completed property or revenue, ensuring your long-term wealth.",
      points: [
        "No construction costs for you",
        "Fair property sharing",
        "Vetted developer network",
      ],
      to: "/services/joint-development",
    },
    {
      icon: Handshake,
      tag: "02",
      title: "Joint Venture",
      body: "For larger land parcels, we help structure fair and transparent partnerships. You retain active involvement while an experienced developer handles the heavy lifting of the project.",
      points: [
        "Transparent partnerships",
        "Shared project success",
        "Clear exit strategies",
      ],
      to: "/services/joint-venture",
    },
    {
      icon: Landmark,
      tag: "03",
      title: "Outright Property Sale",
      body: "When you are ready to sell, we connect you with serious, verified buyers. We ensure you get the true market value for your land in a smooth, professional, and stress-free transaction.",
      points: [
        "Verified serious buyers",
        "True market valuation",
        "Smooth & secure handover",
      ],
      to: "/services/outright-property-sale",
    },
  ];

  return (
    <section id="services" className="relative bg-cream py-32 md:py-48">
      <div className="container-luxe">
        <div className="grid items-end gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <div className="max-w-2xl">
            <SectionLabel>Our Expertise</SectionLabel>
            <h2 className="mt-8 text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-forest-deep sm:text-5xl md:text-[4rem]">
              Three ways to unlock what your land is truly worth.
            </h2>
          </div>
          <p className="text-pretty text-[16px] leading-[1.8] text-muted-foreground md:text-[17px]">
            Every parcel is different. We help you choose the path — Joint
            Development, Joint Venture or Sale — that fits your goals, timeline
            and family situation.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:mt-24 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.15}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-sm border border-forest/10 bg-card p-10 transition-all duration-[1200ms] hover:border-gold/30 hover:shadow-elegant">
                <div className="absolute right-10 top-10 font-display text-[13px] tracking-[0.25em] text-gold/60">
                  {s.tag}
                </div>
                <div className="mb-10 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-forest-deep text-gold shadow-sm transition-all duration-700 group-hover:bg-gold group-hover:text-forest-deep">
                  <s.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-[1.75rem] leading-[1.1] tracking-tight text-forest-deep">
                  {s.title}
                </h3>
                <p className="mt-5 text-[15px] leading-[1.8] text-muted-foreground text-pretty">
                  {s.body}
                </p>
                <ul className="mt-8 space-y-4 border-t border-forest/10 pt-8">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-forest-deep/85"
                    >
                      <span className="h-px w-6 bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={s.to}
                  className="mt-10 inline-flex items-center gap-3 self-start text-[11px] font-medium uppercase tracking-[0.25em] text-forest transition-all duration-700 hover:gap-4 hover:text-gold"
                >
                  Explore Service <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
