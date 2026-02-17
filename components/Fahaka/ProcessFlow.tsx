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
    <section className="py-20 bg-gray-50 text-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-heading mb-2">
            The Process
          </h2>
          <p className="text-gray-600 text-lg">From contaminated input to sterile output in four simple steps.</p>
        </div>

        <div className="relative">
          {/* Dotted line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-300" style={{ transform: 'translateY(-50%)' }}></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="relative mb-4 inline-block">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-black">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
