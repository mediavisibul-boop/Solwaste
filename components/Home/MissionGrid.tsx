import React from 'react';
import { motion } from 'framer-motion';
import { Target, Globe, Award } from 'lucide-react';
import { GlassCard } from '../ui/AnimatedComponents';

export const MissionGrid: React.FC = () => {
  const cards = [
    { 
      icon: Target, 
      title: 'Our Mission', 
      text: 'To provide robust, zero-landfill solutions that empower communities to manage their waste at the source.',
      gradient: 'from-blue-500 to-cyan-600',
      delay: 0
    },
    { 
      icon: Globe, 
      title: 'Vision 2047', 
      text: "Supporting India's goal for sustainable cities by creating a circular economy.",
      gradient: 'from-green-500 to-emerald-600',
      delay: 0.1
    },
    { 
      icon: Award, 
      title: 'Quality Promise', 
      text: 'German-engineered precision delivering maximum uptime and minimal maintenance.',
      gradient: 'from-orange-500 to-red-600',
      delay: 0.2
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-brand-gold/5 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-olive/5 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-heading font-bold text-brand-dark mb-4 uppercase">
            Our <span className="text-brand-gold">Values</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Driven by purpose, defined by excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: card.delay, type: 'spring', stiffness: 100 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full bg-white/80 hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-gold/20 to-transparent rounded-bl-full" />

                {/* Icon container */}
                <motion.div 
                  className="relative inline-block mb-6"
                  whileHover={{ 
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-2xl group-hover:shadow-3xl transition-shadow`}>
                    <card.icon size={36} strokeWidth={2.5} />
                  </div>

                  {/* Pulse ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient}`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.3
                    }}
                  />
                </motion.div>

                {/* Title with gradient on hover */}
                <h3 className="text-2xl font-heading font-bold text-brand-dark mb-4 uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {card.text}
                </p>

                {/* Bottom accent bar */}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.gradient}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: card.delay + 0.3, duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionGrid;
