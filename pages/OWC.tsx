import React, { useState, useEffect } from 'react';
import { Check, Download } from '../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const SpecTable: React.FC<{ specs: {label: string, value: string}[] }> = ({ specs }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
    {specs.map((s, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="relative group"
      >
        <div className="bg-white border-2 border-gray-100 rounded-xl p-5 sm:p-6 hover:border-brand-gold/40 hover:shadow-lg transition-all duration-300">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-tr-xl rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative">
            <div className="text-xs sm:text-sm font-bold text-gray-500 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-gold" />
              {s.label}
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-brand-dark group-hover:text-brand-gold transition-colors duration-300">
              {s.value}
            </div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
        </div>
      </motion.div>
    ))}
  </div>
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
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 border-b border-gray-200 last:border-0 px-4 sm:px-6 lg:px-8`}>
      <div className="lg:w-1/2 w-full">
        <div className="relative group overflow-hidden bg-gray-100 rounded-sm shadow-xl aspect-[4/3]">
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
          
          {/* Image indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'h-2.5 w-10 bg-brand-gold shadow-lg shadow-brand-gold/50'
                      : 'h-2.5 w-2.5 bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    <div className="lg:w-1/2 w-full">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-brown mb-3 sm:mb-4 md:mb-5 uppercase leading-tight">{name}</h2>
      <p className="text-gray-800 text-base sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-7 leading-relaxed font-normal">{description}</p>
      
      <div className="mb-5 sm:mb-6 md:mb-7">
        <h4 className="font-heading font-bold uppercase text-brand-brown mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">Key Features</h4>
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <Check className="text-brand-gold mr-3 sm:mr-4 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-900 font-semibold text-base sm:text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gradient-to-br from-brand-light via-white to-brand-light/50 p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-gray-100 rounded-2xl shadow-xl relative overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Floating orb decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-olive/5 rounded-full blur-3xl" />
        
        <div className="relative">
          {/* Section Header */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="h-1 w-8 sm:w-12 bg-gradient-to-r from-brand-gold to-brand-gold-dark rounded-full" />
              <h4 className="text-xs sm:text-sm font-bold text-brand-gold uppercase tracking-[0.2em]">Specifications</h4>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight">
              Technical Details
            </h3>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base max-w-2xl">
              Precision-engineered specifications for optimal performance and reliability
            </p>
          </div>
          
          <SpecTable specs={specs} />
        </div>
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
  }, []);

  return (
    <div className="pt-20">
      <SEO 
        title="Organic Waste Composters (OWC) for Hotels, Malls & Large Generators"
        description="Complete composting solutions for large waste generators in India. EcoLoop for hotels & societies (50kg-1000kg), CompoGen for malls & industries (1.5-50 tons), CyberSoil for offices (2-10kg). Reduce costs, ensure SWM compliance, achieve ESG goals. German engineering, zero odor, maximum ROI."
        keywords="organic waste composter India, OWC machine, composting solutions for large waste generators, hotel waste management, mall composting solution, industrial composter, EcoLoop hotel composter, CompoGen bulk waste, CyberSoil office composter, on-site waste management, SWM Rules compliance, waste to wealth, zero landfill technology, HEPA filtration composter"
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
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
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