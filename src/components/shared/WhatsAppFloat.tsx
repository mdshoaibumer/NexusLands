import { MessageCircle } from "lucide-react";
import { WA_URL } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with NexusLands on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6"
    >
      <span className="hidden rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-forest-deep shadow-elegant md:inline-flex">
        Discuss Your Property
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform duration-500 hover:scale-110">
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
      </span>
    </a>
  );
}
