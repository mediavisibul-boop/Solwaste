import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scale, Leaf, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../ui/AnimatedComponents';

export const GovernmentMandate: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-brand-dark via-brand-olive-dark/40 to-brand-dark py-16 sm:py-20 relative overflow-hidden border-t border-brand-gold/20">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      {/* Floating orbs */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div 
                  className="h-1 bg-brand-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <span className="text-brand-gold font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <Shield size={16} />
                  Legal Authority
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 uppercase leading-tight">
                Government <br/>
                <span className="text-brand-gold">Mandate Ready</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
                100% Compliant with SWM Rules 2016 & NGT Orders. Don't risk penalties. Install a Solwaste system today.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.3 }} 
              viewport={{ once: true }}
            >
              {[
                { label: 'SWM 2016', icon: Building2 }, 
                { label: 'NGT', icon: Scale }, 
                { label: 'LEED', icon: Leaf }, 
                { label: 'GRIHA', icon: Building2 }
              ].map((badge, i) => (
                <motion.div 
                  key={i} 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.08, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <GlassCard className="p-6 flex flex-col items-center justify-center aspect-square">
                    {/* Animated icon */}
                    <motion.div
                      className="text-brand-gold mb-3"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <badge.icon size={36} strokeWidth={2} />
                    </motion.div>
                    <span className="text-white font-bold text-xs uppercase tracking-wider">{badge.label}</span>
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-brand-gold/40" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-brand-gold/40" />
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
              <div className="h-96 bg-gradient-to-br from-brand-gold/20 via-brand-olive/20 to-brand-dark bg-cover bg-center" 
                   style={{ backgroundImage: "url('/ecoloop.webp')" }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            </div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur-xl border-2 border-brand-gold/50 px-6 py-4 rounded-2xl shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="text-brand-gold font-bold text-sm uppercase tracking-wider">
                500+ Installations
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentMandate;
