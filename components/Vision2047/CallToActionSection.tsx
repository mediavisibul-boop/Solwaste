import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '../Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

export const CallToActionSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 md:py-24 lg:py-32 bg-white text-center">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <FadeIn>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-gray-900 mb-4 sm:mb-6 md:mb-8 uppercase leading-[0.95] max-w-[90vw] mx-auto">
            Act Now. <span className="text-gray-700">Not in 2047.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 leading-relaxed">
            Because the future will not forgive us for the problems we had the technology to solve but chose not to.
          </p>
          <Link to="/contact" className="inline-block group">
            <div className="relative overflow-hidden min-h-[68px] xs:min-h-[72px] sm:min-h-[76px] md:min-h-[80px] flex items-center justify-center rounded-2xl bg-gray-900 border-2 border-gray-900 hover:bg-gray-800 shadow-2xl hover:shadow-3xl active:scale-[0.97] hover:scale-[1.02] transition-all duration-300 touch-manipulation">
              
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>
              
              {/* Corner accents */}
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg group-hover:border-white/60 transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg group-hover:border-white/60 transition-colors"></div>
              
              {/* Button content */}
              <div className="relative flex items-center justify-center gap-3 xs:gap-4 sm:gap-5 px-10 xs:px-12 sm:px-14 md:px-16 z-10">
                <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-heading font-black uppercase tracking-wide group-hover:tracking-wider text-white drop-shadow-sm transition-all duration-300 leading-none">
                  Start Your Waste-Free Journey
                </span>
                <div className="relative">
                  <ArrowRight 
                    className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-white flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                    strokeWidth={2.5} 
                  />
                  {/* Icon glow */}
                  <div className="absolute inset-0 bg-gray-900/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
