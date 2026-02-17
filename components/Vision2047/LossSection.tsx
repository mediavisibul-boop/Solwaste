import React from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

export const LossSection: React.FC = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-8">
              What are we <br/>really losing?
            </h2>
            <div className="space-y-6 text-base sm:text-lg md:text-xl text-gray-300">
              <p className="text-white">When organic waste is ignored, we lose more than just aesthetics.</p>
              <ul className="space-y-4 list-disc pl-6 text-gray-300">
                <li><span className="text-white">Public Health</span> to preventable diseases.</li>
                <li><span className="text-white">Children's Safety</span> to vector-borne infections.</li>
                <li><span className="text-white">Soil Fertility</span> by discarding what could regenerate it.</li>
              </ul>
              <p className="text-white font-bold pt-4 text-lg sm:text-xl md:text-2xl">
                And perhaps most dangerously, we lose time.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <img 
              src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2072&auto=format&fit=crop" 
              alt="Child playing near clean environment" 
              className="w-full h-[280px] xs:h-[320px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px] object-cover transition-all duration-1000 opacity-80"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
