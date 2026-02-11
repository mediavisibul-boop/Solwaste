import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

export const MirrorSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          <FadeIn>
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-gray-900 mb-5 sm:mb-6 md:mb-7 lg:mb-8 uppercase leading-tight">
              Waste is a <span className="text-gray-700 underline decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">Mirror</span>.
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium border-l-2 sm:border-l-4 border-brand-brown pl-4 sm:pl-5 md:pl-6 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              It reflects how we live, how we consume, and how responsibly we think about tomorrow.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              India generates millions of tonnes of waste every year, and nearly <strong>50–60% of it is organic food waste</strong>. This isn't just inert garbage; it is a living, breathing biological hazard that we step over every single day.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-full h-full border border-gray-900 sm:border-2 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974&auto=format&fit=crop" 
                alt="Waste Crisis" 
                className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover contrast-125"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
