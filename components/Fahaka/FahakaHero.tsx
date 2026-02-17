import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FahakaHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.png", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white pt-16 lg:pt-20">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img 
            key={fahakaImages[currentImageIndex]}
            src={fahakaImages[currentImageIndex]} 
            alt="Fahaka Machine" 
            className="w-full h-full object-cover"
            style={{
              objectPosition: 'center'
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
        {/* Simple overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {fahakaImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`rounded-full transition-all duration-300 ${
              idx === currentImageIndex
                ? 'h-2.5 w-10 bg-white'
                : 'h-2.5 w-2.5 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`View image ${idx + 1}`}
          />
        ))}
      </div>
      
      <div className="relative z-20 max-w-5xl px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-4 tracking-tighter">
            FAHAKA
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-200 mb-8 uppercase tracking-wide">
            The Universal Decomposer
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed font-normal">
            Traditional composters fail at contamination. Fahaka thrives on it. <br className="hidden sm:block"/>
            The world's first unified processor for <span className="text-white font-bold">Food, Plastics, Sanitary, and Biochemical Waste</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FahakaHero;
