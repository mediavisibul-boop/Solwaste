import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Flame, ShieldCheck, Recycle } from '../Icons';

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Mixed Input",
      description: "Food, plastics, sanitary & biochemical waste",
      icon: Recycle,
      badge: "Contaminated"
    },
    {
      number: "02",
      title: "Thermal Break",
      description: "150°C - 300°C controlled heat",
      icon: Flame,
      badge: "Auto-Regulated"
    },
    {
      number: "03",
      title: "Sterilization",
      description: "Medical-grade pathogen elimination",
      icon: ShieldCheck,
      badge: "Log 6 Safety"
    },
    {
      number: "04",
      title: "Clean Output",
      description: "Sterile bio-coal • 95% less volume",
      icon: Recycle,
      badge: "Zero Landfill"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-charcoal dark:text-white mb-2">
            The Process
          </h3>
          <p className="text-gray-600 dark:text-gray-400">From contaminated input to sterile output</p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-brand-gold transition-all duration-300 shadow-sm hover:shadow-md flex flex-col">
                {/* Step Number */}
                <div className="w-12 h-12 rounded-full bg-brand-gold text-brand-charcoal font-bold text-lg flex items-center justify-center mb-4">
                  {step.number}
                </div>
                
                {/* Icon */}
                <step.icon className="w-10 h-10 text-brand-gold mb-3" />
                
                {/* Content */}
                <h4 className="text-lg font-bold text-brand-charcoal dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">{step.description}</p>
              </div>
              
              {/* Arrow (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-brand-gold">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
