// Google Analytics 4 Integration for LojaRápida MZ
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: title,
      page_location: url,
      custom_map: { custom_parameter_1: 'mozambique_ecommerce' }
    });
  }
};

// Track events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      custom_parameters: {
        country: 'mozambique',
        currency: 'MZN'
      }
    });
  }
};

// E-commerce tracking
export const trackPurchase = (transactionId: string, items: any[], value: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: 'MZN',
      items: items.map(item => ({
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        quantity: item.quantity,
        price: item.price
      }))
    });
  }
};

// Add to cart tracking
export const trackAddToCart = (item: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'add_to_cart', {
      currency: 'MZN',
      value: item.price,
      items: [{
        item_id: item.id,
        item_name: item.name,
        category: item.category,
        quantity: 1,
        price: item.price
      }]
    });
  }
};

// WhatsApp contact tracking
export const trackWhatsAppContact = (productId?: string) => {
  trackEvent('whatsapp_contact', 'engagement', productId ? `product_${productId}` : 'general_inquiry');
};