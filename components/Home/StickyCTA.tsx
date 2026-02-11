import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 touch-manipulation"
      initial={{ opacity: 0, y: 100 }}
      animate={{ 
        opacity: scrollProgress > 10 ? 1 : 0,
        y: scrollProgress > 10 ? 0 : 100
      }}
      transition={{ duration: 0.3 }}
    >
      <a href="tel:+919429691308" className="block">
        <motion.div
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-900 backdrop-blur-md border-3 border-white shadow-2xl shadow-gray-900/30 flex items-center justify-center cursor-pointer overflow-hidden group touch-manipulation"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Static ring */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20" />
          
          {/* Icon */}
          <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gray-700">
            Call Us Now
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};
