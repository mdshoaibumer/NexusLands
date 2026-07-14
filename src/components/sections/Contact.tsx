import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Field } from "@/components/ui/Field";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WA_URL, WHATSAPP_NUMBER } from "@/lib/constants";

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forest/10 bg-forest/5 text-forest">
        <Icon className="h-4 w-4" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-[0.26em] text-gold">
          {label}
        </div>
        <div className="mt-1.5 text-[14.5px] leading-relaxed text-forest-deep md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  const [status, setStatus] = useState<null | "sending" | "sent">(null);

  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="container-luxe grid gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Reach Out</SectionLabel>
            <h2 className="mt-8 text-balance font-display text-[2.5rem] leading-[1.05] tracking-tight text-forest-deep sm:text-5xl md:text-[4rem]">
              Let's evaluate your land's true potential.
            </h2>
            <p className="mt-8 text-pretty text-[16px] leading-[1.8] text-muted-foreground md:text-[17px]">
              Fill out the form below. One of our senior advisors will review
              your details and contact you within 24 hours. Your information is
              kept strictly confidential.
            </p>
          </div>

          <div className="mt-14 space-y-8">
            <ContactRow icon={MapPin} label="Office">
              NexusLands Advisory
              <br />
              Jayalakshmipuram, Mysore
              <br />
              Karnataka 570012, India
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              <a
                href="tel:+919000000000"
                className="transition-colors hover:text-gold"
              >
                +91 90000 00000
              </a>
            </ContactRow>
            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Message us on WhatsApp
              </a>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a
                href="mailto:hello@nexuslands.in"
                className="transition-colors hover:text-gold"
              >
                hello@nexuslands.in
              </a>
            </ContactRow>
            <ContactRow icon={Clock} label="Business Hours">
              Mon – Sat · 10:00 AM – 7:00 PM IST
            </ContactRow>
          </div>

          <div className="mt-14 overflow-hidden rounded-sm border border-forest/10 shadow-soft">
            <img src="/src/assets/images/team.png" alt="NexusLands advisory team in office" className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("sending");
              const form = e.currentTarget as HTMLFormElement;
              const data = new FormData(form);
              const name = String(data.get("name") ?? "");
              const property = String(data.get("property") ?? "");
              const msg = String(data.get("message") ?? "");
              const text = encodeURIComponent(
                `Hello NexusLands,\n\nMy name is ${name}.\nProperty: ${property}\n\n${msg}`,
              );
              window.open(
                `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
                "_blank",
                "noopener,noreferrer"
              );
              setStatus("sent");
              form.reset();
              setTimeout(() => setStatus(null), 3000);
            }}
            className="rounded-sm border border-forest/10 bg-card p-8 shadow-elegant sm:p-14"
          >
            <div className="mb-12">
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                Property Evaluation
              </div>
              <div className="mt-4 font-display text-[2rem] leading-tight tracking-tight text-forest-deep">
                Tell us about your property
              </div>
              <div className="mt-3 text-[15px] leading-[1.8] text-muted-foreground">
                Share a few details. Your information is kept strictly
                confidential.
              </div>
            </div>
            <div className="grid gap-8">
              <Field name="name" label="Full name" required maxLength={100} />
              <div className="grid gap-8 md:grid-cols-2">
                <Field name="phone" label="Phone" type="tel" required pattern="[0-9\+\-\s\(\)]+" maxLength={20} />
                <Field name="email" label="Email" type="email" maxLength={100} />
              </div>
              <Field
                name="property"
                label="Property location (village / taluk)"
                maxLength={200}
              />
              <Field
                name="message"
                label="Tell us about your enquiry"
                as="textarea"
                maxLength={2000}
              />
              <button
                type="submit"
                className="group mt-6 inline-flex items-center justify-center gap-3 rounded-sm bg-forest px-10 py-4 text-[14px] font-medium uppercase tracking-[0.08em] text-primary-foreground transition-all duration-700 hover:bg-forest-deep focus-visible:ring-2 focus-visible:ring-gold"
              >
                {status === "sent" ? "Opening WhatsApp…" : "Request Evaluation"}
                <ArrowRight className="h-4 w-4 transition-transform duration-700 group-hover:translate-x-1.5" />
              </button>
              <p className="text-center text-[13px] text-muted-foreground">
                By submitting you'll be redirected to WhatsApp.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
