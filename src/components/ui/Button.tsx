import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({
  children,
  href,
  onClick,
  className = "",
  size = "md",
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeCls =
    size === "lg" ? "px-10 py-4 text-[15px]" : "px-8 py-3.5 text-[14px]";
  const cls = `group relative inline-flex items-center justify-center gap-3 rounded-sm bg-forest ${sizeCls} font-medium uppercase tracking-[0.08em] text-primary-foreground transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-forest-deep focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1.5" />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className={cls}
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export function GhostButton({
  children,
  href,
  variant = "light",
}: {
  children: ReactNode;
  href: string;
  variant?: "light" | "dark";
}) {
  const dark = variant === "dark";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-sm border px-8 py-3.5 text-[14px] font-medium uppercase tracking-[0.08em] backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        dark
          ? "border-white/20 bg-white/5 text-white hover:border-white hover:bg-white hover:text-forest-deep"
          : "border-forest/20 bg-transparent text-forest hover:border-forest-deep hover:bg-forest-deep hover:text-white"
      }`}
    >
      <span>{children}</span>
    </a>
  );
}
