import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wind, Leaf, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: 'Fast Processing',
    description: 'Convert waste into compost within hours using advanced composting technology.',
  },
  {
    icon: <Wind size={28} strokeWidth={1.5} />,
    title: 'Odor Control',
    description: 'Advanced filtration system eliminates smell completely during composting.',
  },
  {
    icon: <Leaf size={28} strokeWidth={1.5} />,
    title: 'Energy Efficient',
    description: 'Low power consumption design for sustainable and cost-effective operation.',
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: 'Smart Monitoring',
    description: 'Real-time tracking and remote control via mobile app integration.',
  },
];

export const FeatureSection: React.FC = () => {
  return (
    <section 
      id="feature-section" 
      className="bg-[#f5f5f5] py-14 xs:py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-bold text-black text-lg xs:text-xl sm:text-[22px] md:text-2xl lg:text-[28px] xl:text-3xl leading-tight"
          >
            An Innovative Smart Composting Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 sm:mt-4 md:mt-5 text-[#777] mx-auto px-2 max-w-xl text-xs sm:text-[13px] md:text-sm leading-relaxed"
          >
            Solwaste machines convert food waste into compost efficiently. Designed for 
            commercial and residential use with swappable, upgradable components for all scenarios.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-8 sm:mt-12 md:mt-16 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto flex items-center justify-center text-black">
                {feature.icon}
              </div>
              {/* Title */}
              <h4 className="mt-3 sm:mt-4 md:mt-5 font-semibold text-black text-[12px] xs:text-[13px] sm:text-sm md:text-[15px] lg:text-base">
                {feature.title}
              </h4>
              {/* Description */}
              <p className="mt-1.5 sm:mt-2 md:mt-3 text-[#777] leading-relaxed mx-auto max-w-[220px] text-[10px] xs:text-[11px] sm:text-xs md:text-[13px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
