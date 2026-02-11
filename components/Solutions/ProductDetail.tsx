import React, { useState, useEffect } from 'react';
import { Check, ArrowRight, Download, FileText } from '../Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

interface ProductDetailProps {
  name: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  specs: {label: string, value: string}[];
  reversed?: boolean;
}

const SpecTable: React.FC<{ specs: {label: string, value: string}[] }> = ({ specs }) => (
  <div className="grid grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-6 sm:gap-x-8 mt-4 sm:mt-5 md:mt-6 text-base">
    {specs.map((s, i) => (
      <div key={i} className="flex justify-between border-b border-gray-200 pb-2 sm:pb-3">
        <span className="font-bold text-gray-600 uppercase text-xs tracking-wider">{s.label}</span>
        <span className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">{s.value}</span>
      </div>
    ))}
  </div>
);

export const ProductDetail: React.FC<ProductDetailProps> = ({ 
  name, 
  tagline, 
  description, 
  images, 
  features, 
  specs, 
  reversed 
}) => {
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
    <ScrollReveal variant={reversed ? "fadeInRight" : "fadeInLeft"} viewport={{ once: true, amount: 0.2 }}>
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
                        ? 'h-2.5 w-10 bg-gray-900 shadow-lg shadow-gray-900/50'
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
          <div className="inline-block text-gray-900 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3 border-2 border-gray-900 px-3 py-1">
            {tagline}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-5 uppercase leading-tight">
            {name}
          </h2>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-7 leading-relaxed font-normal">
            {description}
          </p>
          
          <div className="mb-5 sm:mb-6 md:mb-7">
            <h4 className="font-heading font-bold uppercase text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-gray-900 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-900 font-semibold text-base sm:text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-200 rounded-sm">
            <h4 className="font-heading font-bold uppercase text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
              Technical Specifications
            </h4>
            <SpecTable specs={specs} />
          </div>

          <div className="mt-5 sm:mt-6 md:mt-7 flex flex-col xs:flex-row gap-3 xs:gap-3.5 sm:gap-4">
            <Link to="/contact" className="w-full xs:flex-1 group">
              <div className="relative overflow-hidden w-full h-full min-h-[52px] xs:min-h-[54px] sm:min-h-[56px] md:min-h-[60px] flex items-center justify-center rounded-lg xs:rounded-xl bg-gray-900 hover:bg-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(0,0,0,0.6)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation">
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                {/* Glow pulse */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 animate-pulse"></div>
                
                {/* Button content */}
                <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 px-6 xs:px-7 sm:px-8 md:px-10 text-white">
                  <span className="text-sm xs:text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">
                    Get Quote
                  </span>
                  <FileText className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </div>
              </div>
            </Link>
            
            <button className="relative overflow-hidden w-full xs:flex-1 min-h-[52px] xs:min-h-[54px] sm:min-h-[56px] md:min-h-[60px] flex items-center justify-center rounded-lg xs:rounded-xl bg-white hover:bg-gray-50 border-2 border-gray-900 hover:border-gray-700 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(0,0,0,0.4)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation group">
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-gray-900/10 to-transparent"></div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ring-2 ring-gray-900/30"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 px-6 xs:px-7 sm:px-8 md:px-10 text-gray-900">
                <Download size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0 group-hover:translate-y-0.5 transition-transform duration-300" />
                <span className="text-sm xs:text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">
                  Brochure
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};
