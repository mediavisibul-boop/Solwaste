import React from 'react';
import { motion } from 'framer-motion';
import { Package2, Settings, Flame, Wind, CheckCircle, ArrowRight } from 'lucide-react';
import { GlassCard } from '../ui/AnimatedComponents';

export const ProcessFlow: React.FC = () => {
  const steps = [
    { icon: Package2, title: 'Waste Input', desc: 'Add organic waste directly', color: 'from-green-400 to-emerald-600' },
    { icon: Settings, title: 'Shredding', desc: 'Automated size reduction', color: 'from-blue-400 to-cyan-600' },
    { icon: Flame, title: 'Decomposition', desc: 'Aerobic breakdown process', color: 'from-orange-400 to-red-600' },
    { icon: Wind, title: 'Filtration', desc: 'HEPA air purification', color: 'from-purple-400 to-pink-600' },
    { icon: CheckCircle, title: 'Compost Output', desc: 'Premium quality result', color: 'from-green-500 to-teal-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(90deg, #b59b5b 1px, transparent 1px), linear-gradient(180deg, #b59b5b 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-heading font-bold text-brand-dark mb-4 uppercase">
            How It <span className="text-brand-gold">Works</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Advanced 5-stage process for optimal waste transformation
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting flow line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold/20"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 120 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center p-6 h-full bg-white/90 hover:-translate-y-6 transition-all duration-500 group relative overflow-hidden">
                  {/* Animated gradient background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Step number badge */}
                  <motion.div 
                    className={`absolute -top-4 -left-4 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-2xl shadow-2xl z-10 rotate-12 group-hover:rotate-0 transition-transform duration-500`}
                  >
                    {i + 1}
                  </motion.div>

                  {/* Icon container with animation */}
                  <motion.div 
                    className="relative inline-block mb-4 mt-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-olive-light to-white/50 backdrop-blur-sm flex items-center justify-center text-brand-gold border-2 border-white shadow-xl group-hover:shadow-2xl group-hover:border-brand-gold/50 transition-all duration-500">
                      <step.icon size={36} strokeWidth={2.5} />
                    </div>
                    
                    {/* Orbiting dot */}
                    <motion.div
                      className="absolute top-0 right-0 w-3 h-3 rounded-full bg-brand-gold shadow-lg"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                      style={{
                        transformOrigin: '-35px 35px'
                      }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Bottom accent */}
                  <motion.div 
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.color}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: i * 0.15 + 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  {/* Arrow to next step */}
                  {i < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-brand-gold z-20"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={20} strokeWidth={3} />
                    </motion.div>
                  )}
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
