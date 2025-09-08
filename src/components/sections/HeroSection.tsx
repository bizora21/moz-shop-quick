import { Button } from "@/components/ui/button";
import { CheckCircle, Truck, CreditCard } from "lucide-react";
import heroProducts from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Produtos de
                <span className="block text-primary">Qualidade</span>
                <span className="block text-secondary">para Casa</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Utensílios domésticos modernos e práticos. Entrega grátis para Maputo, Beira e Matola. 
                Pague na entrega com total segurança.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
                <CreditCard className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Pague na Entrega</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
                <Truck className="h-5 w-5 text-secondary" />
                <span className="font-medium text-sm">Entrega Grátis</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 rounded-lg p-4 shadow-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium text-sm">Qualidade Garantida</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg transition-all duration-300"
                onClick={() => window.location.href = '/produtos'}
              >
                Ver Produtos
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white"
                onClick={() => {
                  const message = "Olá, tenho interesse em um produto da LojaRápida MZ. Pode me ajudar?";
                  const url = `https://wa.me/+258841234567?text=${encodeURIComponent(message)}`;
                  window.open(url, "_blank");
                }}
              >
                Contactar Agora
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Entrega 24-48h</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Suporte via WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroProducts} 
                alt="Produtos de qualidade para casa - LojaRápida MZ"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              Novidade!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
              Entrega Grátis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;