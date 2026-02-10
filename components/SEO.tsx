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
  keywords = 'composting solutions for large waste generators in India, organic waste management, bulk waste generators India, BWG, SWM Rules 2026, on-site composting, composting machines, waste management solutions, EcoLoop, CompoGen, CyberSoil, Fahaka, organic waste composter, sustainable waste management, waste compliance India, zero waste India, ESG sustainability, waste to wealth India',
  image = '/homesol.png',
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
    updateMetaTag('og:image:type', 'image/png', true);
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
    
    // Geo tags for local SEO
    updateMetaTag('geo.region', 'IN');
    updateMetaTag('geo.placename', 'Mumbai');
    updateMetaTag('geo.position', '18.9894;72.8217');
    updateMetaTag('ICBM', '18.9894, 72.8217');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;
    
    // Add hreflang for international SEO
    let hreflang = document.querySelector('link[rel="alternate"][hreflang="en"]') as HTMLLinkElement;
    if (!hreflang) {
      hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = 'en';
      document.head.appendChild(hreflang);
    }
    hreflang.href = currentUrl;
    
    let hreflangXDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement;
    if (!hreflangXDefault) {
      hreflangXDefault = document.createElement('link');
      hreflangXDefault.rel = 'alternate';
      hreflangXDefault.hreflang = 'x-default';
      document.head.appendChild(hreflangXDefault);
    }
    hreflangXDefault.href = currentUrl;

    // Add structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': ['Organization', 'LocalBusiness'],
      name: 'Solwaste',
      alternateName: 'Solwaste - Sustainable Waste Management Solutions',
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      image: `${siteUrl}/homesol.png`,
      description: 'Leading sustainable waste management solutions provider in India. Offering organic waste composters for bulk waste generators (BWGs), industrial composting machines, and innovative waste processing technology. Serving hotels, malls, IT parks, hospitals, and institutions across India.',
      foundingDate: '2015',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Worli, 1st floor, 264-265, Dr. Annie Besant Road',
        addressLocality: 'Worli, Mumbai',
        addressRegion: 'MH',
        postalCode: '400025',
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '18.9894',
        longitude: '72.8217'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9429691308',
        contactType: 'Customer Service',
        email: 'hello@solwaste.co',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN'
      },
      areaServed: [
        {
          '@type': 'Country',
          name: 'India'
        }
      ],
      serviceArea: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: '20.5937',
          longitude: '78.9629'
        },
        geoRadius: '3000000'
      },
      priceRange: '₹₹₹',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '500',
        bestRating: '5',
        worstRating: '1'
      },
      sameAs: [
        'https://www.linkedin.com/company/solwaste/',
        'https://www.instagram.com/solwaste',
        'https://x.com/SolwasteCo'
      ],
      slogan: 'Sustainable Waste Management Solutions for a Zero-Waste Future',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Composting Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'EcoLoop - Composting Solutions for Hotels & Societies',
              description: 'On-site organic waste composters handling 50-1000kg/day with HEPA filtration'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CompoGen - Industrial Composting Systems',
              description: 'Enterprise composting solutions processing 1.5-50 tons/day for industrial and municipal sectors'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'CyberSoil - Office Composters',
              description: 'Compact composters for offices handling 2-10kg/day with IoT monitoring'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fahaka - Industrial Scale Processing',
              description: 'Large-scale wet waste biodigestion systems for bulk waste generators'
            }
          }
        ]
      }
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

// Helper function to generate FAQ structured data
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

// Helper function to generate breadcrumb structured data
export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
};

// Helper function to add additional schema to page
export const addSchemaToPage = (schema: object) => {
  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.textContent = JSON.stringify(schema);
  document.head.appendChild(scriptTag);
  return scriptTag;
};
