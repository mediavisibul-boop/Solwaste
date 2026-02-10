import React from 'react';
import { motion } from 'framer-motion';
import { Package2, Settings, Flame, Wind, CheckCircle, Target, TrendingUp, Award } from 'lucide-react';

export const ProcessAndValues: React.FC = () => {
  const steps = [
    { icon: Package2, title: 'Waste Input', desc: 'Direct feed' },
    { icon: Settings, title: 'Shredding', desc: 'Auto-sized' },
    { icon: Flame, title: 'Decomposition', desc: 'Aerobic process' },
    { icon: Wind, title: 'Filtration', desc: 'HEPA clean' },
    { icon: CheckCircle, title: 'Output', desc: 'Quality compost' }
  ];

  const values = [
    { icon: Target, title: 'Our Mission', text: 'Zero-landfill solutions for on-site waste management' },
    { icon: TrendingUp, title: 'Vision 2047', text: 'Circular economy for sustainable cities' },
    { icon: Award, title: 'Quality Promise', text: 'German-engineered precision & uptime' }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-[#1a1a1a] dark:via-[#1e1e1e] dark:to-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Process Flow - Compact Timeline */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <span className="text-[#BED754] font-semibold uppercase tracking-wide text-xs sm:text-sm">The Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-gray-100 mt-2 mb-3">
              How It <span className="text-[#BED754]">Works</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Five stages. Zero complexity.</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting line - desktop */}
            <div className="hidden lg:block absolute left-0 right-0 top-10 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Step number */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#BED754] text-gray-900 text-xs font-bold flex items-center justify-center shadow-md">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 rounded-full bg-white dark:bg-[#2a2a2a] border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm group-hover:border-[#BED754] group-hover:shadow-md transition-all duration-300">
                    <step.icon size={28} className="text-gray-700 dark:text-gray-300" strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <h3 className="text-sm sm:text-base font-heading font-semibold text-gray-900 dark:text-gray-100 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values - Compact Cards */}
        <div>
          <div className="text-center mb-8">
            <span className="text-[#BED754] font-semibold uppercase tracking-wide text-xs sm:text-sm">Core Values</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 dark:text-gray-100 mt-2">
              Building A <span className="text-[#BED754]">Sustainable Future</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-[#252525] p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-[#BED754] dark:hover:border-[#BED754] shadow-sm hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="w-12 h-12 mb-4 rounded-full bg-gray-50 dark:bg-[#2a2a2a] flex items-center justify-center group-hover:bg-[#BED754]/10 transition-colors">
                  <value.icon size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-[#BED754]" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndValues;
