import React, { useEffect } from 'react';
import { SEO, addSchemaToPage, generateProductSchema } from '../components/SEO';
import { ProductDetail } from '../components/OWC';
import { products } from '../data/products';

export const OWC: React.FC = () => {
  useEffect(() => {
    // Scroll to section if hash is present
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
    
    // Add product schemas for SEO
    const productSchemas = products.map(product => 
      addSchemaToPage(generateProductSchema(product.seoData))
    );
    
    return () => {
      productSchemas.forEach(schema => {
        if (schema?.parentNode) {
          schema.parentNode.removeChild(schema);
        }
      });
    };
  }, []);

  return (
    <div>
      <SEO 
        title="Organic Waste Composters (OWC) for Hotels, Malls & Large Generators"
        description="Complete composting solutions for bulk waste generators (BWGs) in India. EcoLoop for hotels & societies (50kg-1000kg), CompoGen for malls & industries (1.5-50 tons), CyberSoil for offices (2-10kg). Reduce costs, ensure SWM Rules 2026 compliance, achieve ESG goals. German engineering, zero odor, maximum ROI."
        keywords="organic waste composter India, OWC machine, composting solutions for bulk waste generators, BWG, hotel waste management, mall composting solution, industrial composter, EcoLoop hotel composter, CompoGen bulk waste, CyberSoil office composter, on-site waste management, SWM Rules 2026 compliance, waste to wealth, zero landfill technology, HEPA filtration composter"
        type="product"
      />
      {/* Header */}
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/ecoloop.webp" 
            alt="EcoLoop Organic Waste Composter" 
            className="w-full h-full object-cover object-center"
          />
          {/* Premium white fade overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/30"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10 py-24 sm:py-28 md:py-32 lg:py-36">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 lg:mb-8 uppercase leading-tight max-w-6xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 6px 35px rgba(0,0,0,0.4)' }}>Organic Waste Composters</h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-6" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>High-performance composting solutions for every scale. From compact residential units to massive industrial processors.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        {products.map((product) => (
          <div id={product.id} key={product.id}>
            <ProductDetail {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};