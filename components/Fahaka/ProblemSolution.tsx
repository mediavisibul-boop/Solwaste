import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Recycle, ShieldCheck, Flame, Layers, Check, X, AlertTriangle } from '../Icons';
import { ScrollReveal } from '../ui/ScrollReveal';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
      {/* Modern Gradient Mesh Background with Brand Colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-olive-dark/40 to-brand-dark"></div>
      
      {/* Dotted Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(190,215,84,0.4) 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      ></div>
      
      {/* Animated Gradient Orbs with Brand Colors */}
      <motion.div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-brand-gold/15 to-brand-olive/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, 100, 0],
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-brand-olive/15 to-brand-gold/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -100, 0],
          x: [0, -50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-gold/10 to-brand-olive/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Radial Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(68,68,78,0.4)_100%)]"></div>
      
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Header with Modern Typography */}
        <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black mb-4 sm:mb-6 text-white leading-tight">
              Why <span className="text-brand-gold">Fahaka</span>?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              Traditional systems fail at contamination. Fahaka is engineered to <span className="text-brand-gold font-bold">thrive on it</span>.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Left: Problem Statement Card */}
          <ScrollReveal variant="fadeInLeft" viewport={{ once: true, amount: 0.25 }}>
            {/* Glassmorphism Card */}
            <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-white/5 backdrop-blur-2xl border-2 border-white/10 hover:border-brand-olive/30 transition-all duration-500 overflow-hidden group shadow-2xl">
              {/* Gradient Orb */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-brand-olive/20 to-brand-dark/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-olive-dark/30 to-brand-dark/30 flex items-center justify-center backdrop-blur-sm border-2 border-brand-olive/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <AlertTriangle className="w-7 h-7 text-brand-olive" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">The Reality</h3>
                    <p className="text-xs text-brand-olive font-semibold uppercase tracking-wider">Industry Challenge</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-white text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
                  In real-world scenarios, <span className="text-white font-bold bg-brand-olive-dark/20 px-1.5 py-0.5 rounded">segregation is never 100%</span>. A single plastic wrapper or sanitary napkin can jam traditional composters or contaminate the output manure.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { value: "15-30%", label: "Typical Contamination" },
                    { value: "100%", label: "Batch Rejection Rate" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} 
                      className="p-5 rounded-xl bg-gradient-to-br from-brand-olive-dark/10 to-brand-dark/10 border border-brand-olive/20 backdrop-blur-sm hover:border-brand-olive transition-all"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-3xl font-heading font-black text-brand-olive mb-2">{stat.value}</div>
                      <div className="text-xs text-white uppercase tracking-wide font-semibold">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Problem List */}
                <div className="space-y-3 bg-brand-dark/20 rounded-xl p-5 border border-white/5">
                  {[
                    "System shutdown on contamination",
                    "Rejected batches become landfill",
                    "Manure quality compromised",
                    "High maintenance costs"
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-sm text-white list-none"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <X className="w-4 h-4 text-brand-olive mr-3 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Fahaka Solution Card */}
          <ScrollReveal variant="fadeInRight" delay={0.2} viewport={{ once: true, amount: 0.25 }}>
            {/* Glassmorphism Card */}
            <div className="relative p-6 sm:p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-brand-gold/10 to-brand-olive/5 backdrop-blur-2xl border-2 border-brand-gold/30 hover:border-brand-gold transition-all duration-500 overflow-hidden group shadow-2xl shadow-brand-gold/10">
              {/* Gradient Orb */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br from-brand-gold/30 to-brand-olive/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className="flex items-center gap-3 mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-gold/30 to-brand-olive/30 flex items-center justify-center backdrop-blur-sm border-2 border-brand-gold/40 shadow-lg shadow-brand-gold/20"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Zap className="w-7 h-7 text-brand-gold" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">Fahaka Solution</h3>
                    <p className="text-xs text-brand-gold font-semibold uppercase tracking-wider">Next-Gen Technology</p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed">
                  Proprietary <span className="text-brand-gold font-bold bg-brand-gold/10 px-1.5 py-0.5 rounded">Multi-Stage Thermal Decomposition</span>. We don't just compost, we break down molecular bonds.
                </p>

                {/* Feature Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Recycle, label: "Mixed Waste", sub: "No sorting needed" },
                    { icon: Flame, label: "High Temp", sub: "Pathogen-free" },
                    { icon: Layers, label: "95% Less", sub: "Volume reduction" },
                    { icon: ShieldCheck, label: "Zero Landfill", sub: "Clean output" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="p-5 rounded-xl bg-gradient-to-br from-brand-gold/10 to-brand-olive/5 border-2 border-brand-gold/20 hover:border-brand-gold/60 transition-all cursor-pointer backdrop-blur-sm group/card"
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <item.icon className="w-8 h-8 text-brand-gold mb-3 group-hover/card:drop-shadow-[0_0_8px_rgba(190,215,84,0.6)]" />
                      </motion.div>
                      <div className="text-sm font-bold text-white mb-1 font-heading uppercase tracking-wide">{item.label}</div>
                      <div className="text-xs text-white">{item.sub}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Benefit List */}
                <div className="space-y-3 bg-gradient-to-br from-brand-gold/5 to-brand-olive/5 rounded-xl p-5 border border-brand-gold/20">
                  {[
                    "Accepts mixed waste streams",
                    "Sterilizes at molecular level",
                    "Reduces volume by 95%",
                    "Zero landfill output"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start text-sm text-gray-300 list-none"
                    >
                      <motion.div 
                        className="w-6 h-6 rounded-lg bg-gradient-to-br from-brand-gold/20 to-brand-olive/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 border border-brand-gold/30"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Check className="w-4 h-4 text-brand-gold" strokeWidth={3} />
                      </motion.div>
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
