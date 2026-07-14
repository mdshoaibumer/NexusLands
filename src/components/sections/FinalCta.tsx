import { WA_URL } from "@/lib/constants";
import { Link } from "@tanstack/react-router";
import ctaImg from "@/assets/images/cta.jpg";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div className="absolute inset-0">
        <img
          src={ctaImg}
          alt=""
          width={1920}
          height={1008}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/85 to-forest-deep/60" />
      </div>
      <div className="container-luxe relative">
        <div className="mx-auto max-w-3xl text-center text-white">
          <div className="flex justify-center">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-gold">
              <span className="h-px w-10 bg-gold" />
              <span className="font-medium">Take the first step</span>
            </div>
          </div>
          <h2 className="text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[4rem]">
            Ready to discover what your land is truly worth?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-[1.8] text-white/70 text-pretty md:text-[17px]">
            Schedule a free, no-pressure consultation with our experts. We will
            listen to your goals, evaluate your property, and explain the best
            options for your family's future.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex h-14 w-full items-center justify-center rounded-sm bg-gold px-10 text-[12px] font-bold uppercase tracking-[0.15em] text-forest-deep transition-all duration-500 hover:bg-white hover:shadow-elegant sm:w-auto"
            >
              Schedule a Consultation
            </Link>
            <a
              href={WA_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-sm border border-white/20 bg-transparent px-10 text-[12px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-500 hover:border-white/40 hover:bg-white/10 sm:w-auto"
            >
              Discuss Your Property
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
