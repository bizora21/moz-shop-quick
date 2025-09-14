import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Product' | 'WebSite' | 'BreadcrumbList';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    
    let structuredData;
    
    switch (type) {
      case 'Organization':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "LojaRápida MZ",
          "description": "Loja online em Moçambique - Produtos de qualidade com entrega rápida",
          "url": "https://lojarapida.mz",
          "logo": "https://lojarapida.mz/favicon-32x32.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+258863181415",
            "contactType": "Customer Service",
            "availableLanguage": ["Portuguese"],
            "areaServed": "MZ"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MZ",
            "addressLocality": "Maputo"
          },
          "sameAs": [
            `https://wa.me/258863181415`
          ],
          ...data
        };
        break;
        
      case 'LocalBusiness':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "LojaRápida MZ",
          "description": "E-commerce moçambicano com produtos de qualidade e entrega rápida",
          "url": "https://lojarapida.mz",
          "telephone": "+258863181415",
          "priceRange": "MZN",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "MZ",
            "addressLocality": "Maputo"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.9655,
            "longitude": 32.5832
          },
          "openingHours": "Mo-Su 08:00-20:00",
          "acceptedPaymentMethod": ["Cash", "CreditCard"],
          ...data
        };
        break;
        
      case 'WebSite':
        structuredData = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "LojaRápida MZ",
          "url": "https://lojarapida.mz",
          "description": "Loja online em Moçambique com produtos de qualidade e entrega rápida",
          "inLanguage": "pt-MZ",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://lojarapida.mz/produtos?q={search_term_string}",
            "query-input": "required name=search_term_string"
          },
          ...data
        };
        break;
        
      default:
        structuredData = { "@context": "https://schema.org", "@type": type, ...data };
    }
    
    script.innerHTML = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [type, data]);

  return null;
};

export default StructuredData;