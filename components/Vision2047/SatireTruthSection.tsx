import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

export const SatireTruthSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 md:py-24 lg:py-32 bg-gray-700 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto border-4 border-white p-5 sm:p-6 md:p-8 lg:p-12 relative">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-700 px-6 text-sm font-bold uppercase tracking-widest">
              Gentle Satire, Hard Truth
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold leading-tight mb-8">
              "We celebrate independence with flags and parades. But if our garbage still travels kilometres to rot in landfills, are we independent, or just outsourcing our mess?"
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium">
              Vision 2047: A Cleaner Definition of Freedom
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
