import { Suspense } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import Newsletter from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
