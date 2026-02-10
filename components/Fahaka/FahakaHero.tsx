import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FahakaHero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.webp", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image Slideshow - Mobile Optimized */}
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
        {/* Premium white fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/35"></div>
      </div>
      
      <div className="relative z-20 max-w-5xl px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-heading font-black text-white mb-2 xs:mb-3 sm:mb-4 tracking-tighter leading-[1.1] xs:leading-none" style={{ textShadow: '0 4px 25px rgba(0,0,0,0.6), 0 8px 40px rgba(0,0,0,0.4)' }}>
            FAHAKA
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-gray-300 mb-5 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase tracking-wide" style={{ textShadow: '0 3px 20px rgba(0,0,0,0.5), 0 6px 30px rgba(0,0,0,0.3)' }}>
            The Universal Decomposer
          </p>
          
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mx-auto mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed font-normal px-3 xs:px-4" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>
            Traditional composters fail at contamination. Fahaka thrives on it. <br className="hidden sm:block"/>
            The world's first unified processor for <span className="text-white font-bold">Food, Plastics, Sanitary, and Biochemical Waste</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FahakaHero;
