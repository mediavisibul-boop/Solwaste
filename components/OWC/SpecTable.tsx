import React from 'react';
import { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

interface SpecTableProps {
  specs: {label: string, value: string}[];
}

export const SpecTable: React.FC<SpecTableProps> = ({ specs }) => (
  <StaggerContainer 
    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6" 
    staggerDelay={0.08} 
    viewport={{ once: true, amount: 0.15 }}
  >
    {specs.map((s, i) => (
      <StaggerItem key={i}>
        <div className="relative group">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-5 sm:p-6 hover:border-gray-900 hover:shadow-lg transition-all duration-300">
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-gray-900/10 to-transparent rounded-tr-xl rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative">
              <div className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2 sm:mb-3 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-900" />
                {s.label}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-gray-900 group-hover:text-gray-700 transition-colors duration-300">
                {s.value}
              </div>
            </div>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl" />
          </div>
        </div>
      </StaggerItem>
    ))}
  </StaggerContainer>
);
