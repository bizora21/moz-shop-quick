import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";
import SEOHead from "@/components/SEOHead";
import StructuredData from "@/components/SEO/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="LojaRápida MZ - E-commerce #1 em Moçambique | Entrega Rápida"
        description="🛒 Loja online confiável em Moçambique! ✅ Produtos de qualidade ✅ Entrega rápida em Maputo, Matola, Beira ✅ Preços em Metical ✅ WhatsApp: +258 86 318 1415"
        keywords="loja online moçambique, e-commerce MZ, produtos maputo, entrega rápida moçambique, compras online metical, marketplace mozambique"
        image="https://lojarapida.mz/hero-products.jpg"
        url="https://lojarapida.mz"
      />
      
      <StructuredData
        type="LocalBusiness"
        data={{
          name: "LojaRápida MZ",
          description: "E-commerce líder em Moçambique",
          telephone: "+258863181415",
          areaServed: ["Maputo", "Matola", "Beira", "Nampula"]
        }}
      />
      
      <StructuredData
        type="WebSite"
        data={{
          name: "LojaRápida MZ",
          alternateName: "LojaRapida Moçambique"
        }}
      />
      
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Carregando...</div>}>
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
