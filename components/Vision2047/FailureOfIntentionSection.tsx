import React from 'react';
import { Settings } from '../Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

const oldWayItems = [
  "Cannot handle high-volume daily waste",
  "Requires constant manual monitoring",
  "Sensitive to moisture & temperature",
  "Often turns into odour hotspots",
  "Good intentions collapse under bad systems"
];

const futureWayItems = [
  "Process food waste on-site, daily",
  "Eliminate foul smells and pests instantly",
  "Reduce waste volume by 90%",
  "Convert waste to safe compost in hours",
  "Minimize human handling & health risks"
];

export const FailureOfIntentionSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 md:py-24 lg:py-32 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <FadeIn delay={0.2}>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-center text-gray-900 mb-10 sm:mb-14 md:mb-18 lg:mb-24 uppercase">
            Segregation is not a habit.<br/>
            <span className="text-gray-700">It is Infrastructure.</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn>
            <div className="bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border-t-4 border-gray-300 dark:border-gray-600 h-full hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer">
              <h3 className="text-3xl font-heading font-bold text-gray-400 mb-6 uppercase group-hover:text-gray-600 transition-colors">
                The Old Way <br/><span className="text-gray-900 text-xl">(Vermicompost Pits)</span>
              </h3>
              <p className="text-lg text-gray-600 mb-6 font-medium">Why it fails at scale:</p>
              <ul className="space-y-4">
                {oldWayItems.map((text, i) => (
                  <li key={i} className="flex items-start text-gray-500 group-hover:text-gray-700 transition-colors">
                    <span className="text-red-400 mr-3 text-xl group-hover:scale-125 transition-transform inline-block">×</span> 
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-2xl border-t-4 border-gray-900 h-full transform md:-translate-y-4 hover:shadow-3xl hover:scale-105 hover:border-t-8 transition-all duration-500 group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-0 uppercase group-hover:text-gray-700 transition-colors">
                  The Future <br/><span className="text-gray-700 text-xl">(Machine Composting)</span>
                </h3>
                <Settings className="text-gray-900 group-hover:rotate-180 transition-transform duration-700" size={32} />
              </div>
              <p className="text-lg text-gray-600 mb-6 font-medium">Why it is essential infrastructure:</p>
              <ul className="space-y-4">
                {futureWayItems.map((text, i) => (
                  <li key={i} className="flex items-start text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                    <span className="text-gray-900 mr-3 text-xl group-hover:scale-125 transition-transform inline-block">✓</span> 
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
