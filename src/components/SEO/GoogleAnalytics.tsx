import { useEffect } from 'react';

interface GoogleAnalyticsProps {
  trackingId: string;
}

const GoogleAnalytics = ({ trackingId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Google Analytics 4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {'custom_parameter_1': 'country'},
        country: 'Mozambique'
      });
    `;
    document.head.appendChild(script2);

    // Enhanced E-commerce tracking for Mozambique
    (window as any).gtag = (window as any).gtag || function() {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push(arguments);
    };

    return () => {
      if (document.head.contains(script1)) {
        document.head.removeChild(script1);
      }
      if (document.head.contains(script2)) {
        document.head.removeChild(script2);
      }
    };
  }, [trackingId]);

  return null;
};

// Enhanced tracking functions for e-commerce
export const trackEvent = (eventName: string, parameters: any = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      currency: 'MZN',
      country: 'Mozambique',
      ...parameters
    });
  }
};

export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'MZN',
    items: items.map(item => ({
      ...item,
      currency: 'MZN'
    }))
  });
};

export const trackAddToCart = (item: any) => {
  trackEvent('add_to_cart', {
    currency: 'MZN',
    value: item.price,
    items: [{
      ...item,
      currency: 'MZN'
    }]
  });
};

export default GoogleAnalytics;