import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const MinimalHero: React.FC = () => {
  return (
    <div className="relative" style={{ margin: 0, padding: 0 }}>
      {/* Hero Content */}
      <div className="relative overflow-hidden" style={{ minHeight: '100vh', padding: 0, margin: 0 }}>
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1678924587605-95551474f015?q=80&w=2942&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        

        {/* Content overlay */}
        <div className="relative z-10 pt-16 lg:pt-26 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-10" style={{ minHeight: 'calc(100vh - 64px)' }}>
          
          {/* Text Group - no extra top padding, handled by layout */}
          <div className="flex flex-col items-center">
            

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-2 sm:mt-3 md:mt-4 text-white font-extrabold mx-auto px-2 text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl leading-tight"
              style={{ lineHeight: 1.3 }}
            >
              Experience next-generation composting.<br/> Superior to traditional methods in every way.
            </motion.h2>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-3 sm:mt-4 md:mt-5"
            >
              <Link
                to="/owc"
                className="inline-flex items-center gap-2 bg-black text-white font-medium hover:bg-gray-800 active:bg-gray-900 transition-colors duration-300 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full text-[11px] xs:text-xs sm:text-[13px] md:text-sm"
                style={{ letterSpacing: '0.02em' }}
              >
                Get Yours Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Hero Machine Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-[92%] xs:max-w-[88%] sm:max-w-[82%] md:max-w-[75%] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1100px] mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 pb-8 sm:pb-10"
          >
            <img 
              src="/ecoloop5.png" 
              alt="EcoLoop Machine" 
              className="w-full object-contain transition-all duration-700 ease-in-out lg:grayscale lg:hover:grayscale-0 max-h-[200px] xs:max-h-[240px] sm:max-h-[320px] md:max-h-[400px] lg:max-h-[480px] xl:max-h-[540px] 2xl:max-h-[580px]"
              style={{ borderRadius: '16px' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Circle Button - overlapping next section */}
      <div className="relative z-20 flex justify-center -mt-8">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={() => {
            const next = document.getElementById('feature-section');
            next?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:bg-gray-800 active:bg-gray-900 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
};
