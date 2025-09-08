import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Cortador de Legumes Multifuncional",
    price: "450",
    originalPrice: "650",
    image: product1,
    rating: 4.8,
    reviews: 124,
    badge: "Mais Vendido"
  },
  {
    id: 2,
    name: "Amassador de Alho Premium",
    price: "280",
    originalPrice: "350",
    image: product2,
    rating: 4.7,
    reviews: 89,
    badge: "Oferta"
  },
  {
    id: 3,
    name: "Kit Utensílios de Cozinha",
    price: "890",
    originalPrice: "1200",
    image: product3,
    rating: 4.9,
    reviews: 156,
    badge: "Kit Completo"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os produtos mais procurados pelos nossos clientes em Moçambique. 
            Qualidade garantida e entrega rápida.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.location.href = `/produto/${product.id}`}
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  {product.badge}
                </div>
                {product.originalPrice && (
                  <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-semibold">
                    -{Math.round((1 - parseInt(product.price) / parseInt(product.originalPrice)) * 100)}%
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} avaliações)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.price} MT
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      {product.originalPrice} MT
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2">
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      const message = `Olá! Gostaria de comprar: ${product.name} - ${product.price} MT. Pode me ajudar?`;
                      const url = `https://wa.me/+258841234567?text=${encodeURIComponent(message)}`;
                      window.open(url, "_blank");
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar Agora
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/produto/${product.id}`;
                    }}
                  >
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.location.href = '/produtos'}
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;