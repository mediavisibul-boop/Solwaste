import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Recycle, Target } from 'lucide-react';
import { GlassCard } from '../ui/AnimatedComponents';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ImpactStats: React.FC = () => {
  const stats = [
    { value: '90%', label: 'Volume Reduction', icon: TrendingUp, color: 'from-green-400 to-emerald-600' },
    { value: '24hrs', label: 'Process Time', icon: Clock, color: 'from-blue-400 to-cyan-600' },
    { value: 'Zero', label: 'Landfill Waste', icon: Recycle, color: 'from-purple-400 to-pink-600' },
    { value: '100%', label: 'Satisfaction', icon: Target, color: 'from-orange-400 to-red-600' }
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 bg-brand-light relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-3 sm:mb-4 uppercase text-center">
            Our <span className="text-brand-gold">Impact</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-center">
            Real results from our installations across India
          </p>
        </ScrollReveal>
        
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-6xl mx-auto" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="text-center p-3 sm:p-4 md:p-5 lg:p-6 bg-white hover:-translate-y-3 transition-all duration-500 relative group">
                {/* Gradient orb */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}
                />
                
                {/* Animated icon */}
                <motion.div 
                  className="inline-block text-brand-gold mb-2 sm:mb-3"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <stat.icon size={32} className="sm:w-10 sm:h-10 md:w-12 md:h-12" strokeWidth={2} />
                </motion.div>
                
                {/* Value with counter animation */}
                <motion.div 
                  className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-brand-charcoal dark:text-white mb-1 sm:mb-2 group-hover:text-brand-gold transition-colors"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <div className="text-xs sm:text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider group-hover:text-brand-charcoal dark:group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                
                {/* Decorative line */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-brand-gold to-brand-gold-dark group-hover:w-full group-hover:left-0 transition-all duration-500"
                />
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStats;
