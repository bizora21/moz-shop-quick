import { useEffect } from 'react';

interface PreloadResourcesProps {
  resources?: string[];
}

const PreloadResources = ({ resources = [] }: PreloadResourcesProps) => {
  useEffect(() => {
    // Critical resources to preload for LojaRápida MZ
    const defaultResources = [
      '/hero-products.jpg',
      '/product-1.jpg',
      '/product-2.jpg',
      '/product-3.jpg',
      '/favicon-32x32.png'
    ];

    const allResources = [...defaultResources, ...resources];

    // Preload images
    allResources.forEach((resource) => {
      if (resource.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      }
    });

    // Preload fonts
    const fontPreloads = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    fontPreloads.forEach((font) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'style';
      link.href = font;
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const dnsPrefetch = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.googletagmanager.com',
      '//connect.facebook.net',
      '//wa.me',
      '//tbrkkixunojjiticvvxa.supabase.co'
    ];

    dnsPrefetch.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

  }, [resources]);

  return null;
};

export default PreloadResources;