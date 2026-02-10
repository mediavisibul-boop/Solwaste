import React, { useState, useEffect } from 'react';
import { Check, Download } from '../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO, addSchemaToPage, generateProductSchema } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const SpecTable: React.FC<{ specs: {label: string, value: string}[] }> = ({ specs }) => (
  <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6" staggerDelay={0.08} viewport={{ once: true, amount: 0.15 }}>
    {specs.map((s, i) => (
      <StaggerItem key={i}>
        <div className="relative group">
        <div className="bg-brand-cream dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-xl p-5 sm:p-6 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-tr-xl rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            <div className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-gold" />
              {s.label}
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-brand-charcoal dark:text-white group-hover:text-brand-gold transition-colors duration-300">
              {s.value}
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
        </div>
      </div>
      </StaggerItem>
    ))}
  </StaggerContainer>
);

const ProductDetail: React.FC<{ 
  name: string; 
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  specs: {label: string, value: string}[];
  reversed?: boolean;
}> = ({ name, tagline, description, images, features, specs, reversed }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images if multiple images exist
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
      <div className="py-12 sm:py-16 md:py-20 border-b border-gray-200 dark:border-gray-700 last:border-0">
      {/* Product Details - Image + Description Side by Side */}
      <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8 mb-12`}>
        <div className="lg:w-1/2 w-full">
          <div className="relative group overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-sm shadow-xl aspect-[4/3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-charcoal dark:text-white mb-3 sm:mb-4 md:mb-5 uppercase leading-tight">{name}</h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-7 leading-relaxed font-normal">{description}</p>
          
          <div>
            <h4 className="font-heading font-bold uppercase text-brand-charcoal dark:text-white mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">Key Features</h4>
            <ul className="space-y-2 sm:space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-brand-gold mr-3 sm:mr-4 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-800 dark:text-gray-200 font-semibold text-base sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications Section - Full Width */}
      <div className="bg-gradient-to-br from-brand-light via-white to-brand-light/50 dark:from-[#1e1e1e] dark:via-[#252525] dark:to-[#1e1e1e] py-8 sm:py-10 lg:py-12 px-4 sm:px-6 border-t-2 border-gray-100 dark:border-gray-700 relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Floating orb decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-olive/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-full" />
              <h4 className="text-xs sm:text-sm font-bold text-brand-gold uppercase tracking-[0.2em]">Specifications</h4>
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-l from-brand-gold to-brand-gold-dark rounded-full" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-charcoal dark:text-white uppercase tracking-tight">
              Technical Details
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl mx-auto">
              Precision-engineered specifications for optimal performance and reliability
            </p>
          </div>
          
          <SpecTable specs={specs} />
        </div>
      </div>
    </div>
  );
};

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
    const ecoloopSchema = addSchemaToPage(generateProductSchema({
      name: 'EcoLoop - Organic Waste Composter for Hotels & Societies',
      description: 'On-site composting solution handling 50-1000kg/day with HEPA filtration, zero odor, and German engineering. Perfect for hotels, gated communities, and bulk waste generators.',
      image: 'https://solwaste.co/ecoloop.webp',
      sku: 'ECOLOOP-50-1000',
      brand: 'Solwaste'
    }));
    
    const compogenSchema = addSchemaToPage(generateProductSchema({
      name: 'CompoGen - Industrial Composting System',
      description: 'Enterprise-grade composting solution processing 1.5-50 tons/day for industrial and municipal sectors. PLC-controlled with cloud monitoring and 24/7 operation capability.',
      image: 'https://solwaste.co/compogen.webp',
      sku: 'COMPOGEN-1.5-50T',
      brand: 'Solwaste'
    }));
    
    const cybersoilSchema = addSchemaToPage(generateProductSchema({
      name: 'CyberSoil - Smart Office Composter',
      description: 'Compact IoT-enabled composter for offices handling 2-10kg/day. Ultra-quiet operation, cloud monitoring, and sleek design perfect for corporate environments.',
      image: 'https://solwaste.co/cybersoil.webp',
      sku: 'CYBERSOIL-2-10',
      brand: 'Solwaste'
    }));
    
    return () => {
      if (ecoloopSchema?.parentNode) ecoloopSchema.parentNode.removeChild(ecoloopSchema);
      if (compogenSchema?.parentNode) compogenSchema.parentNode.removeChild(compogenSchema);
      if (cybersoilSchema?.parentNode) cybersoilSchema.parentNode.removeChild(cybersoilSchema);
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
      <div className="bg-brand-dark text-white min-h-screen flex items-center justify-center relative overflow-hidden">
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
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 uppercase leading-tight max-w-6xl mx-auto" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 6px 35px rgba(0,0,0,0.4)' }}>Organic Waste Composters</h1>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto font-light leading-relaxed px-4 sm:px-6" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>High-performance composting solutions for every scale. From compact residential units to massive industrial processors.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">

        {/* CyberSoil */}
        <div id="cybersoil">
        <ProductDetail 
          name="CyberSoil™"
          tagline="Residential & VP Cabins"
          description="Sustainability meets luxury. CyberSoil brings advanced solar dehydration technology into a form factor that fits under a dishwasher. Perfect for luxury apartments and executive offices."
          images={["/cybersoil.webp", "/cybersoil2.webp"]}
          features={[
            "Advanced Solar Dehydration Technology",
            "Compact Under-Counter Dimensions",
            "Plug & Play Installation",
            "Dry Sterile Biomass Output"
          ]}
          specs={[
            { label: "Capacity", value: "2 kg - 10 kg" },
            { label: "Power", value: "0.5 kWh/day" },
            { label: "Dimensions", value: "Standard Dishwasher Size" },
            { label: "Noise", value: "Silent" }
          ]}
        />
        </div>
        
        {/* EcoLoop */}
        <div id="ecoloop">
        <ProductDetail 
          name="EcoLoop™"
          tagline="Societies & Hotels"
          description="A zero-maintenance workhorse designed for residential societies, hotels, and resorts. The EcoLoop ensures that waste management doesn't impact the aesthetics or air quality of your premises."
          images={["/ecoloop.webp", "/ecoloop2.webp", "/ecoloop3.webp"]}
          reversed
          features={[
            "Zero Odor & Pest Free Operation",
            "HEPA + Activated Carbon Filtration System",
            "Medical Grade SS 304 Construction",
            "Silent Operation (< 60dB)"
          ]}
          specs={[
            { label: "Capacity", value: "50 kg - 1000 kg" },
            { label: "Cycle Time", value: "24 Hours" },
            { label: "Reduction", value: "85-90% Volume" },
            { label: "Output", value: "Soil Enricher" }
          ]}
        />
        </div>

        {/* CompoGen */}
        <div id="compogen">
        <ProductDetail 
          name="CompoGen™"
          tagline="Industrial & Municipal"
          description="The CompoGen series is built for the heavy lifting. Designed for municipal corporations and large industrial parks, it uses high-torque German geared motors to crush and compost massive volumes of organic waste."
          images={["/compogen.webp", "/compogen2.webp"]}
          features={[
            "Fully PLC Controlled with Cloud BMS Integration",
            "High-Torque German Geared Motors",
            "Emergency Stop & Overload Protection Systems",
            "5-Year Chassis Warranty"
          ]}
          specs={[
            { label: "Capacity", value: "1.5 Ton - 50 Ton" },
            { label: "Power", value: "3 Phase / 415V" },
            { label: "Body", value: "Heavy Duty MS/SS" },
            { label: "Process", value: "Aerobic Digestion" }
          ]}
        />
        </div>
      </div>
    </div>
  );
};