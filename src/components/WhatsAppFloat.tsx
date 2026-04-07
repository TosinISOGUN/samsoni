import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

const WhatsAppFloat = () => (
  <a
    href={getWhatsAppLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="h-7 w-7" />
  </a>
);

export default WhatsAppFloat;
