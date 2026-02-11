import React from 'react';
import { Skull, CloudFog, Droplets, AlertTriangle } from '../Icons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

const crisisItems = [
  { icon: <Skull size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Disease Vector", desc: "Becomes a breeding ground for mosquitoes, flies, and dangerous pathogens." },
  { icon: <CloudFog size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Methane Gas", desc: "Releases methane, a greenhouse gas 25x more potent than CO2." },
  { icon: <Droplets size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Toxic Leachate", desc: "Contaminates soil and groundwater, poisoning our water tables." },
  { icon: <AlertTriangle size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Unlivable Spaces", desc: "Creates persistent foul odours and reduces quality of life." },
];

export const InvisibleCrisisSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 sm:p-48 md:p-64 bg-gray-800 opacity-5 blur-[150px] rounded-full"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 sm:mb-5 md:mb-6 uppercase leading-tight">
              The Invisible Crisis
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
              When organic waste is left unattended or mixed with dry waste, it triggers a chain reaction of environmental collapse.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8" 
          staggerDelay={0.08} 
          viewport={{ once: true, amount: 0.15 }}
        >
          {crisisItems.map((item, i) => (
            <StaggerItem key={i}>
              <div className="bg-gray-800/50 border border-gray-700 p-5 sm:p-6 md:p-7 lg:p-8 hover:bg-gray-700/10 hover:border-gray-600 transition-all duration-300 group h-full">
                <div className="text-gray-400 group-hover:text-gray-200 mb-4 sm:mb-5 md:mb-6 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 sm:mb-3 uppercase leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
