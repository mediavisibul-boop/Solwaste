import React from 'react';
import { motion } from 'framer-motion';
import { Flag } from '../Icons';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 sm:opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop" 
          alt="India Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/30"></div>
      </div>

      <div className="relative z-10 max-w-5xl px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-36">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-5 md:mb-6">
            <Flag className="text-white" size={24} />
            <span className="text-white font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base">
              Vision 2047
            </span>
            <Flag className="text-white" size={24} />
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-heading font-black leading-tight sm:leading-none mb-4 sm:mb-5 md:mb-6">
            ARE WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">REALLY FREE?</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-2">
            In 2047, India will mark 100 years of Independence. <br className="hidden sm:block"/>
            But can a nation call itself free if its waste still owns us?
          </p>
        </motion.div>
      </div>
    </section>
  );
};
