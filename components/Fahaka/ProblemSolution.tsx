import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Recycle, ShieldCheck, Flame, Layers, Check, X, AlertTriangle } from '../Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-white text-black">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4">
            Why Fahaka?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Traditional systems fail at contamination. Fahaka is engineered to thrive on it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Problem */}
          <div className="border border-gray-200 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold">The Reality</h3>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Industry Challenge</p>
              </div>
            </div>
            <p className="text-gray-700 text-base mb-6">
              In real-world scenarios, segregation is never 100%. A single plastic wrapper or sanitary napkin can jam traditional composters or contaminate the output manure.
            </p>
            <div className="space-y-3">
              {[
                "System shutdown on contamination",
                "Rejected batches become landfill",
                "Manure quality compromised",
                "High maintenance costs"
              ].map((item, i) => (
                <div key={i} className="flex items-start text-base">
                  <X className="w-5 h-5 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          <div className="border border-gray-200 rounded-lg p-8 bg-black text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">The Fahaka Solution</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Next-Gen Technology</p>
              </div>
            </div>
            <p className="text-gray-300 text-base mb-6">
              Proprietary Multi-Stage Thermal Decomposition. We don't just compost, we break down molecular bonds.
            </p>
            <div className="space-y-3">
              {[
                "Accepts mixed waste streams",
                "Sterilizes at molecular level",
                "Reduces volume by 95%",
                "Zero landfill output"
              ].map((item, i) => (
                <div key={i} className="flex items-start text-base">
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <Check className="w-3 h-3 text-black" strokeWidth={3} />
                  </div>
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
