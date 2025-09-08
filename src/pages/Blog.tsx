import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Dicas para Organizar sua Cozinha com Praticidade",
    excerpt: "Descubra como tornar sua cozinha mais funcional e organizada com utensílios inteligentes e técnicas simples.",
    author: "Equipa LojaRápida MZ",
    date: "2024-01-15",
    readTime: "5 min",
    category: "Organização",
    image: "/api/placeholder/400/250",
    featured: true
  },
  {
    id: 2,
    title: "Receitas Rápidas: Pratos Saborosos em 15 Minutos",
    excerpt: "Aprenda a preparar refeições deliciosas e nutritivas usando os utensílios certos para economizar tempo.",
    author: "Chef Ana Moçambique",
    date: "2024-01-12",
    readTime: "7 min",
    category: "Receitas",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 3,
    title: "Como Escolher os Melhores Utensílios para sua Casa",
    excerpt: "Guia completo para selecionar produtos duráveis e funcionais que vão facilitar sua rotina doméstica.",
    author: "Equipa LojaRápida MZ",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Guias",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 4,
    title: "Bem-estar em Casa: Produtos que Fazem a Diferença",
    excerpt: "Conheça os produtos que podem transformar sua casa em um ambiente mais confortável e saudável.",
    author: "Dr. João Maputo",
    date: "2024-01-08",
    readTime: "4 min",
    category: "Bem-estar",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 5,
    title: "Economia Doméstica: Como Poupar com Compras Inteligentes",
    excerpt: "Estratégias para fazer compras mais conscientes e economizar sem abrir mão da qualidade.",
    author: "Maria Economia",
    date: "2024-01-05",
    readTime: "8 min",
    category: "Economia",
    image: "/api/placeholder/400/250",
    featured: false
  },
  {
    id: 6,
    title: "Tendências 2024: Novidades em Utensílios Domésticos",
    excerpt: "Descubra as últimas tendências em produtos para casa que estão revolucionando o mercado moçambicano.",
    author: "Equipa LojaRápida MZ",
    date: "2024-01-03",
    readTime: "5 min",
    category: "Tendências",
    image: "/api/placeholder/400/250",
    featured: false
  }
];

const categories = ["Todos", "Organização", "Receitas", "Guias", "Bem-estar", "Economia", "Tendências"];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Blog LojaRápida MZ
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dicas, receitas e conselhos para tornar sua casa mais prática e confortável. 
            Conteúdo exclusivo para nossos clientes em Moçambique.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Todos" ? "default" : "outline"}
              size="sm"
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {blogPosts.filter(post => post.featured).map((post) => (
          <Card key={post.id} className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl">📚</span>
                </div>
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Destaque
                </Badge>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.date).toLocaleDateString('pt-MZ')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <Badge variant="secondary" className="w-fit mb-3">
                  {post.category}
                </Badge>
                
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Button className="w-fit bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg">
                  Ler Artigo Completo
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card 
              key={post.id} 
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <span className="text-4xl">
                    {post.category === 'Receitas' ? '🍳' : 
                     post.category === 'Organização' ? '🏠' : 
                     post.category === 'Guias' ? '📋' : 
                     post.category === 'Bem-estar' ? '🌿' : 
                     post.category === 'Economia' ? '💰' : '✨'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString('pt-MZ')}</span>
                  </div>
                </div>

                <Button variant="ghost" className="w-full justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  Ler Mais
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-16 p-8 text-center bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Não perca nossas dicas!
          </h3>
          <p className="text-muted-foreground mb-6">
            Inscreva-se na nossa newsletter e receba conteúdo exclusivo sobre casa, organização e bem-estar.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg"
            onClick={() => window.location.href = '/#newsletter'}
          >
            Inscrever-se na Newsletter
          </Button>
        </Card>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;