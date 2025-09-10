import { Search, ShoppingCart, Menu, User, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">LojaRápida</h1>
            <span className="ml-1 text-sm font-medium text-secondary">MZ</span>
          </Link>

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
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Início</Link>
            <Link to="/produtos" className="text-foreground hover:text-primary transition-colors">Produtos</Link>
            <Link to="/sobre" className="text-foreground hover:text-primary transition-colors">Sobre</Link>
            <Link to="/contato" className="text-foreground hover:text-primary transition-colors">Contato</Link>
            <Link to="/carrinho" className="text-foreground hover:text-primary transition-colors">Carrinho</Link>
          </nav>

          {/* Cart and User Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link to="/carrinho">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  1
                </span>
              </Link>
            </Button>
            
            {/* User Authentication Dropdown */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Minha Conta
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">
                    <LogIn className="mr-2 h-4 w-4" />
                    Entrar
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/cadastro">Cadastrar</Link>
                </Button>
              </div>
            )}

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
              <Link to="/" className="text-foreground hover:text-primary transition-colors py-2">Início</Link>
              <Link to="/produtos" className="text-foreground hover:text-primary transition-colors py-2">Produtos</Link>
              <Link to="/sobre" className="text-foreground hover:text-primary transition-colors py-2">Sobre</Link>
              <Link to="/contato" className="text-foreground hover:text-primary transition-colors py-2">Contato</Link>
              <Link to="/carrinho" className="text-foreground hover:text-primary transition-colors py-2">Carrinho</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors py-2">Minha Conta</Link>
                  <button 
                    onClick={() => signOut()} 
                    className="text-left text-foreground hover:text-primary transition-colors py-2"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-foreground hover:text-primary transition-colors py-2">Entrar</Link>
                  <Link to="/cadastro" className="text-foreground hover:text-primary transition-colors py-2">Cadastrar</Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;