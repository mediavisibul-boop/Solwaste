import React, { useState, useEffect } from 'react';
import { Check } from '../Icons';
import { motion, AnimatePresence } from 'framer-motion';
import { SpecTable } from './SpecTable';

interface ProductDetailProps {
  name: string;
  tagline: string;
  description: string;
  images: string[];
  features: string[];
  specs: {label: string, value: string}[];
  reversed?: boolean;
}

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 uppercase leading-tight">
            {name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl mb-5 sm:mb-6 md:mb-7 leading-relaxed font-normal">
            {description}
          </p>
          
          <div>
            <h4 className="font-heading font-bold uppercase text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-gray-900 mr-3 sm:mr-4 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-800 dark:text-gray-200 font-semibold text-base sm:text-lg">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Specifications Section - Full Width */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 border-t-2 border-gray-200 relative overflow-hidden">
        {/* Subtle pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
        
        {/* Floating orb decoration */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gray-900/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-800/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="h-1 w-8 sm:w-12 bg-gray-900 rounded-full" />
              <h4 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-[0.2em]">
                Specifications
              </h4>
              <div className="h-1 w-8 sm:w-12 bg-gray-900 rounded-full" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 uppercase tracking-tight">
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
