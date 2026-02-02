import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Droplets, Scale, CheckCircle, FileCheck, Send, ClipboardCheck, AlertTriangle } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { GlassCard } from '../ui/AnimatedComponents';

export const BWGInfo: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 relative overflow-hidden border-t border-gray-200">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'linear-gradient(rgba(94,121,96,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(94,121,96,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center gap-3 mb-6 justify-center">
                <motion.div 
                  className="h-1 bg-brand-olive"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                />
                <span className="text-brand-olive font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                  <AlertTriangle size={16} />
                  Know Your Obligations
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 uppercase leading-tight">
                <span className="text-brand-dark">Bulk Waste</span> <br/>
                <span className="text-brand-olive">Generators (BWGs)</span>
              </h2>
              <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
                Under SWM Rules 2026, entities falling under <strong>any of the following categories</strong> are classified as BWGs:
              </p>
            </div>
          </ScrollReveal>

          {/* BWG Criteria Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: Building2,
                value: '20,000 sq.m+',
                label: 'Built-up Area'
              },
              {
                icon: Droplets,
                value: '40,000L/day',
                label: 'Water Use'
              },
              {
                icon: Scale,
                value: '100kg/day',
                label: 'Waste Output'
              }
            ].map((criteria, i) => (
              <ScrollReveal key={i} variant="fadeInUp" delay={i * 0.1} viewport={{ once: true, amount: 0.3 }}>
                <GlassCard className="p-5 text-center">
                  <criteria.icon className="text-brand-olive mx-auto mb-3" size={28} strokeWidth={2} />
                  <div className="text-2xl font-heading font-bold text-brand-olive mb-1">{criteria.value}</div>
                  <div className="text-xs text-gray-600 uppercase tracking-wide">{criteria.label}</div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>

          {/* Two Column Layout for Responsibilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Key Responsibilities */}
            <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.2 }}>
              <div className="bg-gradient-to-br from-brand-light to-white p-6 rounded-lg border border-gray-200 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="text-brand-olive" size={24} strokeWidth={2} />
                  <h3 className="text-xl font-heading font-bold text-brand-dark uppercase">Key Responsibilities</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    'Segregate waste at source (Wet, Dry, Sanitary, Special)',
                    'Hand over to authorized collectors only',
                    'No littering or open burning',
                    'Pay applicable user fees'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-olive mt-1.5"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Column - Additional Duties for BWGs */}
            <ScrollReveal variant="fadeInRight" viewport={{ once: true, amount: 0.2 }}>
              <div className="bg-gradient-to-br from-brand-olive-dark/5 to-white p-6 rounded-lg border-2 border-brand-olive/30 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="text-brand-olive-dark" size={24} strokeWidth={2} />
                  <h3 className="text-xl font-heading font-bold text-brand-dark uppercase">Additional for BWGs</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    'On-site wet waste processing',
                    'Register with local authority/ULB',
                    'Submit annual compliance reports',
                    'Manage construction & biomedical waste scientifically'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-olive-dark mt-1.5"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom CTA Banner */}
          <ScrollReveal variant="fadeInUp" delay={0.2} viewport={{ once: true, amount: 0.5 }}>
            <div className="mt-8 bg-gradient-to-r from-brand-olive-dark via-brand-olive to-brand-olive-dark p-6 rounded-lg shadow-xl text-center text-white">
              <p className="text-base mb-4 leading-relaxed">
                These rules emphasize <strong>accountability, segregation, and decentralized waste processing</strong>. Let's move beyond compliance.
              </p>
              <motion.a
                href="/contact"
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-olive-dark rounded-lg font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 text-sm">
                  <span>Get Compliant Today</span>
                  <CheckCircle size={18} />
                </div>
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BWGInfo;
