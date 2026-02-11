import React from 'react';
import { SEO } from '../components/SEO';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ProductDetail } from '../components/Solutions';
import { products } from '../data/products';

export const Solutions: React.FC = () => {
  return (
    <div className="pt-20">
      <SEO 
        title="Product Catalog - Complete Range of Waste Management Solutions"
        description="Browse Solwaste's complete product catalog. EcoLoop, CompoGen, CyberSoil composters with German engineering. 50kg to 50 ton capacity. View specifications, features & pricing. Request quote today!"
        keywords="waste management products, composting machines catalog, OWC specifications, composter price list, waste management equipment India, industrial composters, residential composters"
        type="website"
      />
      {/* Header - Mobile Optimized */}
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 uppercase leading-tight">Product Catalog</h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-light">German Engineering. Indian Tenacity. World Class Results.</p>
          </div>
        </ScrollReveal>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {products.map((product) => (
          <ProductDetail key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};