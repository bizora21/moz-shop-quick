import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Maputo",
    rating: 5,
    comment: "Entrega rápida e produtos de qualidade! Recomendo muito a LojaRápida MZ. O cortador de legumes facilitou muito minha vida na cozinha.",
    product: "Cortador de Legumes"
  },
  {
    id: 2,
    name: "João Macamo",
    location: "Beira",
    rating: 5,
    comment: "Excelente atendimento e produtos chegaram em perfeito estado. O pagamento na entrega é muito conveniente. Já fiz várias compras!",
    product: "Kit Utensílios"
  },
  {
    id: 3,
    name: "Ana Mussa",
    location: "Matola",
    rating: 5,
    comment: "Adorei minha compra! O amassador de alho é fantástico e chegou rapidinho. Entrega grátis cumpriu o prometido. Parabéns!",
    product: "Amassador de Alho"
  },
  {
    id: 4,
    name: "Carlos Silva",
    location: "Maputo",
    rating: 5,
    comment: "Serviço impecável da LojaRápida MZ! Produtos de alta qualidade, entrega pontual e preços justos. Já indiquei para toda família.",
    product: "Kit Completo"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos em todo Moçambique
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-4 w-4 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                <p className="text-xs text-primary font-medium mt-1">
                  Comprou: {testimonial.product}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Summary */}
        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8</div>
              <p className="text-muted-foreground">Avaliação Média</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Entregas no Prazo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;