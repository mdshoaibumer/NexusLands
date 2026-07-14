import { motion } from "motion/react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

interface PageHeroProps {
  title: string;
  description: string;
  image: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHero({
  title,
  description,
  image,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[65dvh] w-full overflow-hidden flex items-end pb-24 pt-32">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/80 to-forest-deep/20" />

      <div className="container-luxe relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.8] text-white/80 text-pretty md:text-lg md:leading-[1.75]">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
