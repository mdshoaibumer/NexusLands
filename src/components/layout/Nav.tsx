import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/images/logo.png";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          scrolled
            ? "border-b border-forest/10 bg-white/90 backdrop-blur-3xl py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
      <div className="container-luxe flex items-center justify-between gap-4 lg:grid lg:grid-cols-[auto_1fr_auto]">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="NexusLands home"
        >
          <img
            src={logoImg}
            alt="NexusLands Logo"
            className="h-10 w-auto object-contain sm:h-12 transition-all duration-500"
          />
          <span className={`font-display text-xl font-medium tracking-tight sm:text-2xl transition-colors duration-500 ${scrolled ? "text-forest-deep" : "text-white"}`}>
            NexusLands
          </span>
        </Link>
        <nav className="hidden justify-center gap-10 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`gold-underline text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-500 [&.active]:text-gold-dark [&.active]:bg-[length:100%_1px] ${scrolled ? "text-forest-deep/80 hover:text-forest-deep" : "text-white/80 hover:text-white"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`hidden min-h-10 items-center rounded-full px-5 py-2.5 text-[12px] font-medium tracking-wide transition-all duration-500 hover:bg-gold hover:text-gold-foreground hover:shadow-gold md:inline-flex ${scrolled ? "bg-forest text-primary-foreground" : "bg-white text-forest-deep"}`}
          >
            Talk to Our Experts
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full border backdrop-blur lg:hidden transition-all duration-500 ${scrolled ? "border-forest/15 bg-white/90 text-forest-deep" : "border-white/20 bg-white/10 text-white"}`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      </header>

      {/* Mobile full-screen menu */}
      <motion.div
        role="region"
        aria-label="Mobile navigation overlay"
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl lg:hidden"
      >
        <div className="container-luxe flex h-full flex-col justify-between pb-10 pt-[104px]">
          <nav className="flex flex-col gap-1">
            {links.map((l, i) => (
               <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: open ? 1 : 0, x: open ? 0 : -12 }}
                transition={{
                  delay: open ? 0.08 + i * 0.05 : 0,
                  duration: 0.4,
                }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-forest/10 py-5 font-display text-2xl text-forest-deep [&.active]:text-gold-dark"
                >
                  <span>{l.label}</span>
                  <ArrowUpRight className="h-5 w-5 text-gold-dark" />
                </Link>
              </motion.div>
            ))}
          </nav>
          <div className="space-y-4">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-4 text-sm font-medium text-primary-foreground"
            >
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="text-center text-xs uppercase tracking-[0.28em] text-forest/80">
              Mysore · Karnataka
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
