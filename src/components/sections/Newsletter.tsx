import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email && !phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos o email ou telefone.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission to email
      const formData = {
        type: "newsletter",
        email: email,
        phone: phone,
        timestamp: new Date().toISOString(),
        source: "LojaRápida MZ - Newsletter"
      };

      // In a real application, you would send this to your backend
      // For now, we'll create a mailto link for the admin
      const message = `Nova inscrição na Newsletter LojaRápida MZ:

Email: ${email || 'Não informado'}
Telefone: ${phone || 'Não informado'}
Data: ${new Date().toLocaleString('pt-MZ')}
Fonte: Newsletter Website

Por favor, adicione este cliente à lista de emails promocionais.`;

      const mailtoLink = `mailto:vijaronaa@gmail.com?subject=Nova inscrição Newsletter - LojaRápida MZ&body=${encodeURIComponent(message)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "✅ Inscrição realizada com sucesso!",
        description: "Você receberá ofertas exclusivas em breve. Bem-vindo à família LojaRápida MZ!",
      });

      // Clear form
      setEmail("");
      setPhone("");
      
    } catch (error) {
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente mais tarde ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 md:p-12 text-center bg-white/95 backdrop-blur-sm shadow-2xl">
          <div className="animate-slide-up">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-4 rounded-full">
                <Gift className="h-12 w-12 text-primary" />
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ganhe 10% de Desconto!
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Inscreva-se na nossa newsletter e receba ofertas exclusivas, novos produtos e dicas especiais para sua casa. 
              <strong className="text-primary"> Primeira compra com 10% OFF!</strong>
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="email"
                  placeholder="Seu melhor email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 text-center"
                />
              </div>
              
              <Input
                type="tel"
                placeholder="Seu telefone (opcional)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12 text-center"
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg h-12"
                disabled={isLoading}
              >
                {isLoading ? "Inscrevendo..." : "Quero Meu Desconto de 10%!"}
              </Button>
            </form>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Ofertas Exclusivas</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Novos Produtos Primeiro</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Dicas de Casa</span>
              </div>
            </div>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground mt-6">
              Seus dados estão seguros conosco. Prometemos não enviar spam e você pode cancelar a qualquer momento.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;