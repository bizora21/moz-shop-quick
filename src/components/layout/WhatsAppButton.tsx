import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const whatsappNumber = "258863181415"; // Número correto para Moçambique
  const message = "Olá! Tenho interesse nos produtos da LojaRápida MZ. Podem me ajudar com informações e preços? Obrigado!";

  const handleWhatsAppClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'whatsapp_button'
      });
    }
    
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="whatsapp-float bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
      size="lg"
      aria-label="Contactar via WhatsApp - LojaRápida MZ"
      title="Fale conosco no WhatsApp - Atendimento rápido e personalizado"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp +258 86 318 1415</span>
    </Button>
  );
};

export default WhatsAppButton;