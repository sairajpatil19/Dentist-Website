import { MessageCircle } from "lucide-react";
import { clinic } from "@/config/clinic";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    `Hello ${clinic.branding.name},\n\nI would like to book an appointment.\n\nName:\nPreferred Date:\nPreferred Time:\nTreatment:\n\nThank you.`,
  );
  const href = `https://wa.me/${clinic.contact.whatsapp}?text=${message}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-success text-success-foreground shadow-elevated transition-transform hover:scale-105 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
