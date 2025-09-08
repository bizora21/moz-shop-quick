import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CheckCircle, Users, Truck, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Qualidade Garantida",
      description: "Todos os nossos produtos passam por rigoroso controle de qualidade antes de chegarem até você."
    },
    {
      icon: <Truck className="h-8 w-8 text-secondary" />,
      title: "Entrega Rápida",
      description: "Entrega gratuita em 24-48h para Maputo, Beira e Matola. Acompanhe seu pedido em tempo real."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Pagamento Seguro",
      description: "Pague na entrega com total segurança. Só pague quando receber seu produto em perfeitas condições."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Suporte Dedicado",
      description: "Nossa equipe está sempre disponível via WhatsApp para tirar suas dúvidas e ajudar com seu pedido."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">LojaRápida MZ</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos uma loja online moçambicana dedicada a trazer produtos de qualidade 
            para o seu dia a dia, com a conveniência e segurança que você merece.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Facilitar o acesso a produtos de qualidade para os moçambicanos, oferecendo 
                uma experiência de compra online simples, segura e conveniente.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Acreditamos que todos merecem ter acesso a utensílios domésticos modernos 
                e práticos que tornem o dia a dia mais fácil e agradável.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Produtos cuidadosamente selecionados</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Preços justos e acessíveis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Atendimento personalizado</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 animate-slide-up">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nossos Números
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">98%</div>
                    <div className="text-sm text-muted-foreground">Taxa de Satisfação</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">3</div>
                    <div className="text-sm text-muted-foreground">Cidades Atendidas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary">24h</div>
                    <div className="text-sm text-muted-foreground">Entrega Rápida</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Por que escolher a LojaRápida MZ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Oferecemos uma experiência de compra única e personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Confiança</h3>
              <p className="text-muted-foreground">
                Construímos relacionamentos duradouros baseados na transparência e honestidade.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary mb-3">Inovação</h3>
              <p className="text-muted-foreground">
                Sempre buscamos novas maneiras de melhorar a experiência de nossos clientes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Excelência</h3>
              <p className="text-muted-foreground">
                Comprometemo-nos com a mais alta qualidade em produtos e atendimento.
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

export default About;