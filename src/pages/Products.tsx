import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Star, Filter } from "lucide-react";
import { useState } from "react";
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
    category: "utensílios",
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
    category: "kits",
    badge: "Kit Completo"
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
    badge: "Novo"
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
    badge: "Premium"
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
    badge: "Completo"
  }
];

const categories = [
  { id: "todos", name: "Todos os Produtos" },
  { id: "utensílios", name: "Utensílios de Cozinha" },
  { id: "kits", name: "Kits Completos" },
  { id: "bem-estar", name: "Bem-estar" }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = selectedCategory === "todos" 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Nossos Produtos
          </h1>
          <p className="text-lg text-muted-foreground">
            Descubra nossa seleção completa de produtos de qualidade
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Categorias</h2>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
          
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="mb-2"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Comprar Agora
                  </Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Nenhum produto encontrado nesta categoria.
            </p>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Products;