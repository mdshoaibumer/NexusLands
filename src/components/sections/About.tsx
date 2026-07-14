import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import aboutImg from "@/assets/images/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-sm">
              <img
                src={aboutImg}
                alt="Consultants reviewing land development plans"
                width={1408}
                height={1008}
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover grayscale-[20%] transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03] sm:aspect-[4/3] lg:aspect-[4/5]"
              />
            </div>
            <div className="mt-8 rounded-sm border border-forest/10 bg-card p-6 shadow-soft sm:absolute sm:-bottom-12 sm:-right-8 sm:mt-0 sm:max-w-[280px] sm:p-8">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                Based in
              </div>
              <div className="mt-2 font-display text-[1.5rem] leading-tight tracking-tight text-forest-deep">
                Mysore, Karnataka
              </div>
              <div className="mt-3 text-[14px] leading-[1.8] text-muted-foreground">
                Serving landowners across Mysore, Mandya, Hassan and Bengaluru
                rural.
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <SectionLabel>About NexusLands</SectionLabel>
            <h2 className="mt-8 text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-forest-deep sm:text-5xl md:text-[4rem]">
              Your trusted partner in navigating property development.
            </h2>
            <div className="mt-10 space-y-6 text-[16px] leading-[1.8] text-muted-foreground md:text-[17px]">
              <p>
                For many families in Karnataka, land is more than just an
                asset—it is a generational legacy. But deciding how to develop
                or sell that land can be overwhelming.
              </p>
              <p>
                At NexusLands, we sit on your side of the table. We act as your
                trusted guide, connecting you with vetted developers and
                coordinating with top legal professionals to ensure your
                interests are protected at every single step.
              </p>
              <p>
                Our approach is simple: absolute transparency, clear
                communication, and a commitment to structuring fair agreements.
                Whether you are looking for a Joint Development or an outright
                sale, we handle the complexity so you can make informed
                decisions with confidence.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <Link
                to="/about"
                className="gold-underline inline-flex items-center gap-2 pb-1 text-[11px] font-bold uppercase tracking-[0.2em] text-forest-deep transition-colors hover:text-gold"
              >
                Read Our Full Story <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
