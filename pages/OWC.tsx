import React, { useState, useEffect } from 'react';
import { Check, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const SpecTable: React.FC<{ specs: {label: string, value: string}[] }> = ({ specs }) => (
  <div className="grid grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-6 sm:gap-x-8 mt-4 sm:mt-5 md:mt-6 text-base">
    {specs.map((s, i) => (
      <div key={i} className="flex justify-between border-b border-gray-200 pb-2 sm:pb-3">
        <span className="font-bold text-gray-600 uppercase text-xs tracking-wider">{s.label}</span>
        <span className="font-bold text-brand-brown text-base sm:text-lg">{s.value}</span>
      </div>
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
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 border-b border-gray-200 last:border-0`}>
      <div className="lg:w-1/2 w-full">
        <div className="relative group overflow-hidden bg-gray-100 rounded-sm shadow-xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={`${name} - Image ${currentImageIndex + 1}`}
              className="w-full object-cover h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px]"
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
      <div className="inline-block text-brand-gold font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 border-2 border-brand-gold px-3 py-1">
        {tagline}
      </div>
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

      <div className="bg-brand-light p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 rounded-sm">
         <h4 className="font-heading font-bold uppercase text-brand-brown mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">Technical Specifications</h4>
         <SpecTable specs={specs} />
      </div>

      <div className="mt-5 sm:mt-6 md:mt-7 flex flex-col xs:flex-row gap-3 xs:gap-3.5 sm:gap-4">
        <Link to="/contact" className="w-full xs:flex-1 group">
            <div className="relative overflow-hidden w-full h-full min-h-[52px] xs:min-h-[54px] sm:min-h-[56px] md:min-h-[60px] flex items-center justify-center rounded-lg xs:rounded-xl bg-gradient-to-r from-brand-dark via-brand-olive to-brand-dark hover:from-brand-olive hover:via-brand-dark hover:to-brand-olive shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation">
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent"></div>
              
              {/* Glow pulse */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 px-6 xs:px-7 sm:px-8 md:px-10 text-white">
                <span className="text-sm xs:text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">Get Quote</span>
                <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
        </Link>
        <button className="relative overflow-hidden w-full xs:flex-1 min-h-[52px] xs:min-h-[54px] sm:min-h-[56px] md:min-h-[60px] flex items-center justify-center rounded-lg xs:rounded-xl bg-white hover:bg-brand-light border-2 border-brand-olive-dark hover:border-brand-olive shadow-[0_0_15px_rgba(94,121,96,0.2)] hover:shadow-[0_0_25px_rgba(94,121,96,0.4)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
          {/* Shine effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-brand-olive/20 to-transparent"></div>
          
          {/* Animated border glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ring-2 ring-brand-olive/30"></div>
          
          {/* Button content */}
          <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 px-6 xs:px-7 sm:px-8 md:px-10 text-brand-olive-dark group-hover:text-brand-olive">
            <Download size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:translate-y-0.5 transition-transform duration-300" />
            <span className="text-sm xs:text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">Brochure</span>
          </div>
        </button>
      </div>
    </div>
    </div>
  );
};

export const OWC: React.FC = () => {
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
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/30"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 uppercase" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6), 0 6px 35px rgba(0,0,0,0.4)' }}>Organic Waste Composters</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-xl md:text-2xl font-light" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>High-performance composting solutions for every scale. From compact residential units to massive industrial processors.</p>
        </div>
      </div>

      <div className="container mx-auto px-6">
        
        {/* CompoGen */}
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

        {/* EcoLoop */}
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

        {/* CyberSoil */}
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
    </div>
  );
};