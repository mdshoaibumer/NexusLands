import { memo } from "react";
import logoImg from "@/assets/images/logo.png";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Footer = memo(function Footer() {
  return (
    <footer className="relative border-t border-forest/10 bg-forest-deep text-primary-foreground">
      <div className="container-luxe grid gap-16 py-24 md:grid-cols-4 md:gap-24 md:py-32">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 opacity-90">
            <Link to="/" aria-label="NexusLands home" className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="NexusLands Logo"
                className="h-12 w-auto rounded bg-white/5 p-1 object-contain sm:h-14"
              />
              <span className="font-display text-2xl font-medium tracking-tight text-white">
                NexusLands
              </span>
            </Link>
          </div>
          <p className="mt-8 max-w-sm text-pretty text-[15px] leading-[1.8] text-white/70">
            Premium land consultancy based in Mysore. Helping landowners unlock
            true value through Joint Development, Joint Ventures and strategic
            property sales.
          </p>
          <div className="mt-10 flex items-center gap-4">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`NexusLands on ${label}`}
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-white/70 transition-all duration-500 hover:border-gold hover:bg-gold hover:text-forest-deep"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
            Navigation
          </div>
          <ul className="mt-6 space-y-4">
            {[
              { href: "/about", label: "About Firm" },
              { href: "/services", label: "Expertise" },
              { href: "/faq", label: "FAQ" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-[14px] leading-none text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
            Contact
          </div>
          <ul className="mt-6 space-y-4 text-[14px] leading-relaxed text-white/70">
            <li>
              <a
                href="mailto:support@nexuslands.in"
                className="transition-colors hover:text-white"
              >
                support@nexuslands.in
              </a>
            </li>
            <li>
              <a
                href="tel:+919902322345"
                className="transition-colors hover:text-white"
              >
                +91 99023 22345
              </a>
            </li>
            <li className="pt-2">335, 3rd Cross, B Zone, Sathgalli</li>
            <li>Mysore, Karnataka 570019</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 py-8">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 sm:flex-row text-[12px] text-white/50 tracking-wide">
          <p>© {new Date().getFullYear()} NexusLands. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/legal/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/legal/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link to="/legal/disclaimer" className="transition-colors hover:text-white">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});
