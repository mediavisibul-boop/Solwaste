import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'composting solutions for large waste generators in India, organic waste management, bulk waste generators India, on-site composting, composting machines, waste management solutions, EcoLoop, CompoGen, CyberSoil, Fahaka, organic waste composter, sustainable waste management, waste compliance India, SWM Rules compliance, zero waste India, ESG sustainability, waste to wealth India',
  image = '/logo.png',
  type = 'website',
  author = 'Solwaste',
  publishedTime,
  modifiedTime
}) => {
  const location = useLocation();
  const siteUrl = 'https://solwaste.co'; // Update with your actual domain
  const currentUrl = `${siteUrl}${location.pathname}`;
  const fullTitle = `${title} | Solwaste - Sustainable Waste Management Solutions`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Function to update or create meta tag
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');

    // Open Graph Meta Tags (Facebook, LinkedIn, WhatsApp)
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', imageUrl, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', title, true);
    updateMetaTag('og:site_name', 'Solwaste', true);
    updateMetaTag('og:locale', 'en_US', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);
    updateMetaTag('twitter:image:alt', title);
    updateMetaTag('twitter:site', '@SolwasteCo');
    updateMetaTag('twitter:creator', '@SolwasteCo');

    // Article specific tags
    if (type === 'article' && publishedTime) {
      updateMetaTag('article:published_time', publishedTime, true);
      updateMetaTag('article:author', author, true);
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime, true);
      }
    }

    // Mobile Web App Meta Tags
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', 'Solwaste');
    updateMetaTag('application-name', 'Solwaste');
    updateMetaTag('theme-color', '#BED754');
    updateMetaTag('msapplication-TileColor', '#BED754');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    // Add structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Solwaste',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description: 'Leading sustainable waste management solutions provider in India. Offering organic waste composters, industrial composting machines, and innovative waste processing technology.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Worli, 1st floor, 264-265, Dr. Annie Besant Road',
        addressLocality: 'Worli, Mumbai',
        addressRegion: 'MH',
        postalCode: '400025',
        addressCountry: 'IN'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9429691308',
        contactType: 'Customer Service',
        email: 'hello@solwaste.co',
        availableLanguage: ['English', 'Hindi']
      },
      sameAs: [
        'https://www.linkedin.com/company/solwaste/',
        'https://www.instagram.com/solwaste',
        'https://x.com/SolwasteCo'
      ]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [fullTitle, description, keywords, imageUrl, currentUrl, type, author, publishedTime, modifiedTime]);

  return null;
};

// Helper function to generate product structured data
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  sku?: string;
  brand?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'Solwaste'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Solwaste'
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      url: 'https://solwaste.co/contact'
    }
  };
};
