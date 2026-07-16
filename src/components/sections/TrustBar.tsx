import { memo } from "react";
import { Reveal } from "@/components/ui/Reveal";

export const TrustBar = memo(function TrustBar() {
  return (
    <section id="trust" className="relative border-y border-forest/10 bg-card">
      <div className="container-luxe py-12">
        <Reveal y={12}>
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between sm:gap-12">
            <p className="font-display text-[1rem] tracking-tight text-forest-deep sm:text-[1.25rem]">
              Trusted by families and landowners across Karnataka
            </p>
            <div className="h-px w-12 bg-gold/50 sm:h-8 sm:w-px" />
            <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] uppercase tracking-[0.2em] text-forest-deep/80 sm:gap-10">
              <span>Transparent Agreements</span>
              <span>Fair Valuations</span>
              <span>Verified Developers</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
});
