import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Scale, Leaf, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../ui/AnimatedComponents';
import { ScrollReveal } from '../ui/ScrollReveal';

export const GovernmentMandate: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-20 relative overflow-hidden border-t border-gray-700" data-government-mandate id="government-mandate">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
              <div className="flex items-center gap-3 mb-6 justify-center">
                <motion.div 
                  className="h-1 bg-white"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <span className="text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <Shield size={16} />
                  Legal Authority
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-6 uppercase leading-tight text-white">
                Government <br/>
                <span className="text-gray-300">Mandate Ready</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                100% Compliant with SWM Rules 2026 (Effective 1 April 2026). India is taking a strong step towards sustainable urban living. Don't risk penalties. Install a Solwaste system today.
              </p>
            </ScrollReveal>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }} 
              viewport={{ once: true, amount: 0.3 }}
            >
              {[
                { label: 'SWM 2026', desc: 'Waste Management Rules', icon: Building2 }, 
                { label: 'NGT', desc: 'National Green Tribunal', icon: Scale }, 
                { label: 'LEED', desc: 'Green Building Cert.', icon: Leaf }, 
                { label: 'GRIHA', desc: 'India Green Rating', icon: Building2 }
              ].map((badge, i) => (
                <motion.div 
                  key={i} 
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-5 flex flex-col items-center justify-center min-h-[140px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-lg hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                    <div className="text-white mb-3">
                      <badge.icon size={32} strokeWidth={2} />
                    </div>
                    <div className="text-white font-bold text-base uppercase tracking-wider text-center leading-tight mb-2 block">{badge.label}</div>
                    <div className="text-gray-200 text-xs text-center leading-relaxed block">{badge.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentMandate;
