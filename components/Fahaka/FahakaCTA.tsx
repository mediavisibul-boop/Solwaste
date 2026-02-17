import React, { useState, useEffect } from 'react';

export const FahakaCTA: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.png", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden">
      {/* Background Image with Premium Black to Gold Fade - Mobile Optimized */}
      <div className="absolute inset-0 z-0">
        <img 
          src={fahakaImages[2]} 
          alt="Fahaka CTA" 
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/40"></div>
      </div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-black text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 uppercase leading-tight drop-shadow-2xl px-2">
          Ready to deploy Fahaka?
        </h2>
        <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-4xl mx-auto mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 font-medium px-3 xs:px-4 sm:px-6 md:px-8 drop-shadow-lg leading-relaxed">
          This technology is currently available for pilot programs in select municipalities and large townships.
        </p>
      </div>
    </section>
  );
};

export default FahakaCTA;
