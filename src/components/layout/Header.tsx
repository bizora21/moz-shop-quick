import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">LojaRápida</h1>
            <span className="ml-1 text-sm font-medium text-secondary">MZ</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Procurar produtos..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Início</a>
            <a href="/produtos" className="text-foreground hover:text-primary transition-colors">Produtos</a>
            <a href="/sobre" className="text-foreground hover:text-primary transition-colors">Sobre</a>
            <a href="/contato" className="text-foreground hover:text-primary transition-colors">Contato</a>
            <a href="/carrinho" className="text-foreground hover:text-primary transition-colors">Carrinho</a>
          </nav>

          {/* Cart and User Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative" onClick={() => window.location.href = '/carrinho'}>
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </Button>
            
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Procurar produtos..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t pt-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-foreground hover:text-primary transition-colors py-2">Início</a>
              <a href="/produtos" className="text-foreground hover:text-primary transition-colors py-2">Produtos</a>
              <a href="/sobre" className="text-foreground hover:text-primary transition-colors py-2">Sobre</a>
              <a href="/contato" className="text-foreground hover:text-primary transition-colors py-2">Contato</a>
              <a href="/carrinho" className="text-foreground hover:text-primary transition-colors py-2">Carrinho</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;