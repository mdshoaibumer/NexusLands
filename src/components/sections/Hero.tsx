import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/images/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlay = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden"
    >
      <motion.div className="absolute inset-0" style={{ y }}>
        <img
          src={heroImg}
          alt="Aerial view of premium land ready for development in Karnataka"
          width={1920}
          height={1200}
          className="h-[115%] w-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlay }}
        className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/45 to-background"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/70 via-forest-deep/10 to-transparent" />

      <div className="container-luxe relative z-10 flex min-h-[100dvh] flex-col justify-center pt-28 pb-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.4 : 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-4 rounded-sm border border-white/20 bg-white/5 px-5 py-2 text-[10px] uppercase tracking-[0.25em] text-white/90 backdrop-blur-md">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-gold" />
            </span>
            Land Advisory · Mysore
          </div>
          <h1 className="text-balance font-display text-[2.75rem] leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Helping Landowners Maximize Property Value in Mysore.
          </h1>
          <p className="mt-6 max-w-xl text-[16.5px] leading-[1.8] text-white/80 text-pretty md:text-lg md:leading-[1.75]">
            We partner with landowners across Karnataka to structure fair,
            transparent, and highly profitable Joint Developments and outright
            sales. Your interests always come first.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-gold px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all duration-500 hover:bg-white hover:shadow-elegant"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/services"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-sm border border-white/20 bg-transparent px-8 text-[12px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 text-[10px] uppercase tracking-[0.2em] text-white/60">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-1 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span>Trusted Advisory</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div>15+ Years Expertise</div>
            <div className="hidden h-4 w-px bg-white/20 sm:block" />
            <div>Premium Developer Network</div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#trust"
        aria-label="Scroll to next section"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 text-white/60 sm:block"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.a>
    </section>
  );
}
