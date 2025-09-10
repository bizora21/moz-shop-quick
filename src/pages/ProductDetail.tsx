import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, ArrowLeft, Shield, Truck, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const allProducts = [
  {
    id: 1,
    name: "Cortador de Legumes Multifuncional",
    price: "450",
    originalPrice: "650",
    image: product1,
    rating: 4.8,
    reviews: 124,
    category: "utensílios",
    badge: "Mais Vendido",
    description: "Cortador multifuncional que facilita o preparo de refeições. Corta, fatia e pica legumes com precisão e segurança. Feito com material resistente e fácil de limpar.",
    features: ["Material resistente", "Fácil de limpar", "Múltiplas funções", "Design ergonômico"]
  },
  {
    id: 2,
    name: "Amassador de Alho Premium",
    price: "280",
    originalPrice: "350",
    image: product2,
    rating: 4.7,
    reviews: 89,
    category: "utensílios",
    badge: "Oferta",
    description: "Amassador de alho premium que preserva o sabor e facilita o preparo. Design ergonômico e material durável para uso diário na cozinha.",
    features: ["Design ergonômico", "Material durável", "Fácil de usar", "Preserva sabor"]
  },
  {
    id: 3,
    name: "Kit Utensílios de Cozinha",
    price: "890",
    originalPrice: "1200",
    image: product3,
    rating: 4.9,
    reviews: 156,
    category: "kits",
    badge: "Kit Completo",
    description: "Kit completo com os principais utensílios para sua cozinha. Inclui cortador, amassador, descascador e outros itens essenciais para o dia a dia.",
    features: ["Kit completo", "Vários utensílios", "Qualidade premium", "Ótimo custo-benefício"]
  },
  {
    id: 4,
    name: "Descascador de Batatas Automático",
    price: "320",
    originalPrice: null,
    image: product1,
    rating: 4.6,
    reviews: 78,
    category: "utensílios",
    badge: "Novo",
    description: "Descascador automático que facilita o preparo de batatas. Rápido, eficiente e fácil de usar. Economiza tempo na cozinha.",
    features: ["Automático", "Rápido e eficiente", "Fácil de usar", "Economiza tempo"]
  },
  {
    id: 5,
    name: "Conjunto de Facas Premium",
    price: "680",
    originalPrice: "850",
    image: product2,
    rating: 4.8,
    reviews: 92,
    category: "utensílios",
    badge: "Premium",
    description: "Conjunto de facas premium com lâminas afiadas e cabo ergonômico. Ideal para todos os tipos de corte na cozinha.",
    features: ["Lâminas afiadas", "Cabo ergonômico", "Material premium", "Versátil"]
  },
  {
    id: 6,
    name: "Kit Bem-estar Doméstico",
    price: "1200",
    originalPrice: "1500",
    image: product3,
    rating: 4.9,
    reviews: 134,
    category: "bem-estar",
    badge: "Completo",
    description: "Kit completo para bem-estar doméstico com produtos essenciais para uma vida mais saudável e prática em casa.",
    features: ["Kit completo", "Bem-estar", "Produtos essenciais", "Vida saudável"]
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);

  const product = allProducts.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Produto não encontrado</h1>
            <Button onClick={() => navigate("/produtos")}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar aos Produtos
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "✅ Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleBuyNow = () => {
    const message = `Olá! Gostaria de comprar: ${product.name} - ${product.price} MT. Pode me ajudar com o processo de compra?`;
    const url = `https://wa.me/+258863181415?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <button onClick={() => navigate("/")} className="hover:text-primary transition-colors">
            Início
          </button>
          <span>/</span>
          <button onClick={() => navigate("/produtos")} className="hover:text-primary transition-colors">
            Produtos
          </button>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
              />
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
              {product.originalPrice && (
                <Badge variant="destructive" className="absolute top-4 right-4">
                  -{Math.round((1 - parseInt(product.price) / parseInt(product.originalPrice)) * 100)}%
                </Badge>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-foreground font-medium">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} avaliações)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl font-bold text-primary">{product.price} MT</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice} MT
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Características</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Badges */}
            <Card className="p-4 bg-accent/50 border-primary/20">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-1">
                  <Truck className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Entrega Grátis</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <CreditCard className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Pague na Entrega</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Compra Segura</span>
                </div>
              </div>
            </Card>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-foreground font-medium">Quantidade:</span>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </Button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg text-lg py-6"
                  onClick={handleBuyNow}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Comprar Agora - Pague na Entrega
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white py-6"
                  onClick={handleAddToCart}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>

            {/* Delivery Info */}
            <Card className="p-4 border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">🚚 Informações de Entrega</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>✅ <strong>Entrega Grátis</strong> para Maputo, Beira e Matola</p>
                <p>📦 Entrega em 1-3 dias úteis</p>
                <p>💳 Pagamento na entrega disponível</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Button variant="ghost" onClick={() => navigate("/produtos")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Produtos
          </Button>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetail;