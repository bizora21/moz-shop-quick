import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem Enviada!",
      description: "Obrigado pelo seu contacto. Responderemos em breve.",
    });
    
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsAppContact = () => {
    const message = "Olá! Gostaria de entrar em contacto com a LojaRápida MZ.";
    const url = `https://wa.me/+258841234567?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telefone",
      details: ["+258 84 123 4567", "+258 87 654 3210"],
      description: "Ligue para nós durante o horário comercial"
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "E-mail",
      details: ["info@lojarapida.mz", "suporte@lojarapida.mz"],
      description: "Envie-nos um e-mail a qualquer momento"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Localizações",
      details: ["Maputo", "Beira", "Matola"],
      description: "Áreas de entrega gratuita"
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Horário",
      details: ["Segunda - Sexta: 8h - 18h", "Sábado: 8h - 14h"],
      description: "Horário de atendimento"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contacto</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Entre em contacto connosco através de qualquer 
            um dos canais abaixo.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="p-8 animate-slide-up">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Envie-nos uma Mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="+258 XX XXX XXXX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Como podemos ajudá-lo?"
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-glow">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Contacto Rápido via WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6">
                Para um atendimento mais rápido, contacte-nos directamente via WhatsApp. 
                Responderemos em poucos minutos!
              </p>
              <Button 
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 text-white"
                size="lg"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contactar via WhatsApp
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1 mb-2">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-foreground font-medium">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="bg-muted rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Perguntas Frequentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Como funciona a entrega?
              </h3>
              <p className="text-muted-foreground">
                Fazemos entrega gratuita em Maputo, Beira e Matola em 24-48h. 
                Você será contactado para confirmar o endereço e horário.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Posso pagar na entrega?
              </h3>
              <p className="text-muted-foreground">
                Sim! Aceitamos pagamento na entrega em dinheiro. Só pague quando 
                receber o produto em perfeitas condições.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                E se eu não gostar do produto?
              </h3>
              <p className="text-muted-foreground">
                Oferecemos garantia de satisfação. Se não gostar, pode devolver 
                o produto em até 7 dias em perfeitas condições.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Como acompanhar meu pedido?
              </h3>
              <p className="text-muted-foreground">
                Após o pedido, enviaremos atualizações via WhatsApp sobre o 
                status da sua encomenda até a entrega.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;