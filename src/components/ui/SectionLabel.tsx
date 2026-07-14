import { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-forest/70">
      <span className="h-px w-12 bg-forest/20" />
      <span>{children}</span>
    </div>
  );
}
