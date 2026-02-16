import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wind, Leaf, Smartphone } from 'lucide-react';

const tabs = [
  { label: 'On the Road', active: false },
  { label: 'For Housing', active: true },
];

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
      className="bg-[#f5f5f5]"
      style={{ padding: '120px 0' }}
    >
      <div className="max-w-[1200px] mx-auto px-2 md:px-6">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-bold text-black"
            style={{ fontSize: '28px', lineHeight: 1.3 }}
          >
            An Innovative Smart Composting Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-[#777] mx-auto"
            style={{ fontSize: '14px', lineHeight: 1.8, maxWidth: '580px' }}
          >
            Solwaste machines convert food waste into compost efficiently. Designed for 
            commercial and residential use with swappable, upgradable components for all scenarios.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-16"
          style={{ gap: '60px' }}
        >
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
              <div className="w-12 h-12 mx-auto flex items-center justify-center text-black">
                {feature.icon}
              </div>
              {/* Title */}
              <h4 
                className="mt-5 font-semibold text-black"
                style={{ fontSize: '16px' }}
              >
                {feature.title}
              </h4>
              {/* Description */}
              <p 
                className="mt-2.5 text-[#777] leading-relaxed mx-auto"
                style={{ fontSize: '13px', maxWidth: '220px' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
