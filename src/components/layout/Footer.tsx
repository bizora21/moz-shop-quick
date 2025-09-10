import { Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-primary">LojaRápida</h3>
              <span className="ml-1 text-sm font-medium text-secondary">MZ</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              A sua loja online de confiança em Moçambique. Produtos de qualidade, 
              entrega rápida e pagamento na entrega para Maputo, Beira e Matola.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contactos */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contactos</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+258 86 318 1415</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@lojarapida.mz</span>
              </div>
              <div className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-1" />
                <div>
                  <p>Maputo, Beira, Matola</p>
                  <p className="text-sm">Entrega Grátis</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <a href="/sobre" className="block text-muted-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="/produtos" className="block text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="/contato" className="block text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 LojaRápida MZ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;