import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Create email content
      const emailContent = `Nova mensagem de contato - LojaRápida MZ

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone || 'Não informado'}
Assunto: ${formData.subject || 'Contato geral'}

Mensagem:
${formData.message}

Data: ${new Date().toLocaleString('pt-MZ')}
Origem: Website LojaRápida MZ`;

      const mailtoLink = `mailto:vijaronaa@gmail.com?subject=Contato LojaRápida MZ - ${formData.subject || 'Nova mensagem'}&body=${encodeURIComponent(emailContent)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "✅ Sua mensagem foi enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse na LojaRápida MZ!",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Erro no envio",
        description: "Tente novamente mais tarde ou entre em contato via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Fale Conosco
          </h1>
          <p className="text-lg text-muted-foreground">
            Estamos aqui para ajudar! Entre em contato conosco
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h2>
              
              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <p className="text-muted-foreground">+258 84 123 4567</p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-primary"
                        onClick={() => {
                          const message = "Olá, tenho interesse em um produto da LojaRápida MZ. Pode me ajudar?";
                          const url = `https://wa.me/+258841234567?text=${encodeURIComponent(message)}`;
                          window.open(url, "_blank");
                        }}
                      >
                        Enviar mensagem
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">vijaronaa@gmail.com</p>
                      <p className="text-sm text-muted-foreground">Respondemos em até 24 horas</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Atendimento</h3>
                      <p className="text-muted-foreground">Maputo, Beira e Matola</p>
                      <p className="text-sm text-muted-foreground">Entrega grátis para estas cidades</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                      <p className="text-muted-foreground">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Trust Badges */}
            <Card className="p-6 bg-accent/30 border-primary/20">
              <h3 className="font-semibold text-foreground mb-4">Por que escolher a LojaRápida MZ?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Entrega grátis para Maputo, Beira e Matola</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Pagamento na entrega</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Produtos de qualidade garantida</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Suporte via WhatsApp</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Envie sua Mensagem
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+258 ..."
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Assunto
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Sobre o que deseja falar?"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Escreva sua mensagem aqui..."
                    rows={6}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-lg"
                  disabled={isLoading}
                >
                  {isLoading ? "Enviando..." : "Enviar Mensagem"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Ao enviar, você será redirecionado para seu cliente de email
                </p>
              </form>
            </Card>
          </div>
        </div>

        {/* Quick Contact */}
        <div className="text-center mt-16">
          <Card className="max-w-md mx-auto p-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Precisa de ajuda rápida?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Fale conosco diretamente no WhatsApp para atendimento imediato
            </p>
            <Button 
              className="bg-green-500 hover:bg-green-600 text-white"
              onClick={() => {
                const message = "Olá, tenho interesse em um produto da LojaRápida MZ. Pode me ajudar?";
                const url = `https://wa.me/+258841234567?text=${encodeURIComponent(message)}`;
                window.open(url, "_blank");
              }}
            >
              <Phone className="h-4 w-4 mr-2" />
              Falar no WhatsApp
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;