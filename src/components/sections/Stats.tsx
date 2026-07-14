import { SectionLabel } from "@/components/ui/SectionLabel";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-24 text-primary-foreground sm:py-28">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-gold blur-3xl" />
      </div>
      <div className="container-luxe relative">
        <div className="mx-auto max-w-xl">
          <SectionLabel>Our Track Record</SectionLabel>
          <h2 className="mt-8 text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-white sm:text-5xl md:text-[4rem]">
            Delivering real value to landowners.
          </h2>
          <p className="mt-8 text-[16px] leading-[1.8] text-white/70 text-pretty md:text-[17px]">
            We have successfully helped families across Mysore and Karnataka
            navigate complex land transactions, turning unused land into secure,
            long-term wealth.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 md:gap-16">
          <div>
            <div className="font-display text-[3.5rem] leading-none tracking-tight text-gold sm:text-[4.5rem]">
              100%
            </div>
            <div className="mt-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white/90">
              Transparent Agreements
            </div>
            <div className="mt-2 text-[14px] text-white/50 text-pretty">
              Every contract is clearly explained.
            </div>
          </div>
          <div>
            <div className="font-display text-[3.5rem] leading-none tracking-tight text-gold sm:text-[4.5rem]">
              0
            </div>
            <div className="mt-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white/90">
              Hidden Fees
            </div>
            <div className="mt-2 text-[14px] text-white/50 text-pretty">
              We believe in complete honesty from day one.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
