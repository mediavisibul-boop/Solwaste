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
      <div className="bg-gray-900 text-white min-h-[80vh] sm:min-h-screen flex items-center justify-center relative overflow-hidden">
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
        <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl text-center relative z-10 py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-3 sm:mb-4 md:mb-5 lg:mb-6 uppercase leading-tight max-w-4xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 6px 35px rgba(0,0,0,0.4)' }}>Organic Waste Composters</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-6" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>High-performance composting solutions for every scale. From compact residential units to massive industrial processors.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl">
        {products.map((product) => (
          <div id={product.id} key={product.id}>
            <ProductDetail {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};