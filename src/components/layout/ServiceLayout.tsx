import { PageHero } from "@/components/ui/PageHero";
import { WhySection } from "@/components/sections/WhySection";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { BreadcrumbItem } from "@/components/ui/Breadcrumbs";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

interface ServiceLayoutProps {
  title: string;
  description: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
  overviewTitle: string;
  overviewContent: React.ReactNode;
  benefits: { title: string; description: string }[];
}

export function ServiceLayout({
  title,
  description,
  image,
  breadcrumbs,
  overviewTitle,
  overviewContent,
  benefits,
}: ServiceLayoutProps) {
  return (
    <>
      <PageHero
        title={title}
        description={description}
        image={image}
        breadcrumbs={breadcrumbs}
      />

      <section className="py-24 md:py-32">
        <div className="container-luxe grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
            <h2 className="mt-8 text-balance font-display text-[2.25rem] leading-[1.1] tracking-tight text-forest-deep sm:text-4xl">
              {overviewTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose prose-lg prose-forest text-muted-foreground">
              {overviewContent}
            </div>
            <div className="mt-16 grid gap-12 sm:grid-cols-2">
              {benefits.map((benefit, i) => (
                <div key={i}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 bg-forest/5 text-[11px] font-medium text-gold-dark">
                    0{i + 1}
                  </div>
                  <h3 className="mt-6 font-display text-xl text-forest-deep">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <WhySection />
      <Process />
      <Faq />
      <FinalCta />
    </>
  );
}
