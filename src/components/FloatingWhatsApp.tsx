import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "../config/business";

export function FloatingWhatsApp() {
  return (
    <a
      href={generateWhatsAppLink("Hello Riddhi Enterprises, I would like to inquire about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500/50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
