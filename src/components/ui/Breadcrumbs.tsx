import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex items-center text-[10px] uppercase tracking-[0.2em]"
    >
      <Link to="/" className="text-white/60 transition-colors hover:text-gold">
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.label} className="flex items-center">
            <ChevronRight className="mx-2 h-3 w-3 text-white/40" />
            {isLast || !item.to ? (
              <span className="text-white font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link
                  to={item.to}
                  className="text-white/60 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              </>
            )}
          </div>
        );
      })}
    </nav>
  );
}
