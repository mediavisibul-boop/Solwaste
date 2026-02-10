import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award, Leaf, Recycle, TrendingUp } from 'lucide-react';
import { GlassCard } from '../ui/AnimatedComponents';

export const MissionGrid: React.FC = () => {
  const cards = [
    { 
      icon: Target, 
      title: 'Our Mission', 
      text: 'To provide robust, zero-landfill solutions that empower communities to manage their waste at the source.',
      gradient: 'from-blue-500 to-cyan-600',
      iconBg: 'from-blue-500/90 to-cyan-600/90',
      delay: 0
    },
    { 
      icon: TrendingUp, 
      title: 'Vision 2047', 
      text: "Supporting India's goal for sustainable cities by creating a circular economy.",
      gradient: 'from-green-500 to-emerald-600',
      iconBg: 'from-green-500/90 to-emerald-600/90',
      delay: 0.1
    },
    { 
      icon: Award, 
      title: 'Quality Promise', 
      text: 'German-engineered precision delivering maximum uptime and minimal maintenance.',
      gradient: 'from-orange-500 to-red-600',
      iconBg: 'from-orange-500/90 to-red-600/90',
      delay: 0.2
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Simplified gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-brand-gold/5 via-transparent to-brand-olive/5"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 relative z-10">
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-primary font-semibold uppercase tracking-wider text-sm mb-6 inline-block">Core Values</span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-5 tracking-tight text-brand-charcoal dark:text-white leading-tight">
            Building A <span className="text-brand-primary">Sustainable Future</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl lg:max-w-3xl mx-auto text-lg sm:text-xl font-normal">
            Innovation. Integrity. Impact.
          </p>
        </motion.div>

        <div className="max-w-8xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-14">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay * 0.15, duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="text-center group">

                {/* Icon */}
                <motion.div 
                  className="inline-flex items-center justify-center mb-6 sm:mb-8"
                  whileHover={{ scale: 1.08, rotate: [0, -3, 3, 0] }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-premium-lg group-hover:shadow-premium-xl transition-all duration-400 border-4 border-gray-100 dark:border-gray-700 group-hover:border-brand-primary">
                    <card.icon size={56} strokeWidth={2.5} className="text-brand-charcoal dark:text-white drop-shadow-sm" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4 uppercase tracking-wide text-brand-charcoal dark:text-white leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm xs:text-base sm:text-lg max-w-sm md:max-w-md mx-auto">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default MissionGrid;
