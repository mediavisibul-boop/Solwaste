import React from 'react';
import { motion } from 'framer-motion';
import { Flag, AlertTriangle, CloudFog, Droplets, Skull, Settings, ChevronDown, ArrowRight, CheckCircle } from '../components/Icons';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <ScrollReveal variant="fadeInUp" delay={delay}>
    {children}
  </ScrollReveal>
);

export const Vision2047: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <SEO 
        title="Vision 2047 - Building a Zero-Waste India by 2047"
        description="Solwaste's vision for India@100. Achieving zero landfills, 100% waste processing, decentralized waste management across all 4000+ cities. Join the mission for a waste-free independent India by 2047."
        keywords="Vision 2047, zero waste India, waste management vision, India@100, zero landfill, sustainable India 2047, waste-free cities, environmental mission, climate goals India"
        type="article"
      />
      
      {/* HERO SECTION - Mobile Optimized */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white text-center overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-30 sm:opacity-40">
            <img 
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop" 
                alt="India Skyline" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/30"></div>
         </div>

         <div className="relative z-10 max-w-5xl px-4 sm:px-6 py-24 sm:py-28 md:py-32 lg:py-36">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-4 sm:mb-5 md:mb-6">
                    <Flag className="text-brand-gold" size={24} />
                    <span className="text-brand-gold font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm md:text-base">Vision 2047</span>
                    <Flag className="text-brand-gold" size={24} />
                </div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] font-heading font-black leading-tight sm:leading-none mb-4 sm:mb-5 md:mb-6">
                    ARE WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">REALLY FREE?</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed px-2">
                    In 2047, India will mark 100 years of Independence. <br className="hidden sm:block"/>
                    But can a nation call itself free if its waste still owns us?
                </p>
            </motion.div>
         </div>

      </section>

      {/* THE MIRROR - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-brand-cream dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
                <FadeIn>
                    <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-brand-brown mb-5 sm:mb-6 md:mb-7 lg:mb-8 uppercase leading-tight">
                        Waste is a <span className="text-brand-gold underline decoration-2 sm:decoration-4 underline-offset-4 sm:underline-offset-8">Mirror</span>.
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed font-medium border-l-2 sm:border-l-4 border-brand-brown pl-4 sm:pl-5 md:pl-6 mb-5 sm:mb-6 md:mb-7 lg:mb-8">
                        It reflects how we live, how we consume, and how responsibly we think about tomorrow.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        India generates millions of tonnes of waste every year, and nearly <strong>50–60% of it is organic food waste</strong>. This isn't just inert garbage; it is a living, breathing biological hazard that we step over every single day.
                    </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="relative mt-8 lg:mt-0">
                        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-full h-full border border-brand-gold sm:border-2 z-0"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974&auto=format&fit=crop" 
                            alt="Waste Crisis" 
                            className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover contrast-125"
                        />
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* THE INVISIBLE CRISIS - DARK MODE - Mobile Optimized */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-32 sm:p-48 md:p-64 bg-brand-gold opacity-5 blur-[150px] rounded-full"></div>
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <FadeIn>
                <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-5 md:mb-6 uppercase leading-tight">The Invisible Crisis</h2>
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
                        When organic waste is left unattended or mixed with dry waste, it triggers a chain reaction of environmental collapse.
                    </p>
                </div>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8" staggerDelay={0.08} viewport={{ once: true, amount: 0.15 }}>
                {[
                    { icon: <Skull size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Disease Vector", desc: "Becomes a breeding ground for mosquitoes, flies, and dangerous pathogens." },
                    { icon: <CloudFog size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Methane Gas", desc: "Releases methane, a greenhouse gas 25x more potent than CO2." },
                    { icon: <Droplets size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Toxic Leachate", desc: "Contaminates soil and groundwater, poisoning our water tables." },
                    { icon: <AlertTriangle size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10" />, title: "Unlivable Spaces", desc: "Creates persistent foul odours and reduces quality of life." },
                ].map((item, i) => (
                    <StaggerItem key={i}>
                        <div className="bg-gray-900/50 border border-gray-800 p-5 sm:p-6 md:p-7 lg:p-8 hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300 group h-full">
                            <div className="text-gray-500 group-hover:text-brand-gold mb-4 sm:mb-5 md:mb-6 transition-colors">{item.icon}</div>
                            <h3 className="text-lg sm:text-xl font-heading font-bold mb-2 sm:mb-3 uppercase leading-tight">{item.title}</h3>
                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </StaggerItem>
                ))}
            </StaggerContainer>
         </div>
      </section>

      {/* THE FAILURE OF INTENTION */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
            <FadeIn delay={0.2}>
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-center text-brand-brown mb-24 uppercase">
                    Segregation is not a habit.<br/>
                    <span className="text-brand-gold">It is Infrastructure.</span>
                </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <FadeIn>
                    <div className="bg-white p-10 shadow-lg border-t-4 border-gray-300 h-full hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-pointer">
                        <h3 className="text-3xl font-heading font-bold text-gray-400 mb-6 uppercase group-hover:text-gray-600 transition-colors">The Old Way <br/><span className="text-brand-brown text-xl">(Vermicompost Pits)</span></h3>
                        <p className="text-lg text-gray-600 mb-6 font-medium">Why it fails at scale:</p>
                        <ul className="space-y-4">
                            {[
                                "Cannot handle high-volume daily waste",
                                "Requires constant manual monitoring",
                                "Sensitive to moisture & temperature",
                                "Often turns into odour hotspots",
                                "Good intentions collapse under bad systems"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start text-gray-500 group-hover:text-gray-700 transition-colors">
                                    <span className="text-red-400 mr-3 text-xl group-hover:scale-125 transition-transform inline-block">×</span> {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-white p-10 shadow-2xl border-t-4 border-brand-gold h-full transform md:-translate-y-4 hover:shadow-3xl hover:scale-105 hover:border-t-8 transition-all duration-500 group cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-heading font-bold text-brand-gold mb-0 uppercase group-hover:text-brand-gold-dark transition-colors">The Future <br/><span className="text-brand-brown text-xl">(Machine Composting)</span></h3>
                            <Settings className="text-brand-gold group-hover:rotate-180 transition-transform duration-700" size={32} />
                        </div>
                        <p className="text-lg text-gray-600 mb-6 font-medium">Why it is essential infrastructure:</p>
                        <ul className="space-y-4">
                            {[
                                "Process food waste on-site, daily",
                                "Eliminate foul smells and pests instantly",
                                "Reduce waste volume by 90%",
                                "Convert waste to safe compost in hours",
                                "Minimize human handling & health risks"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start text-brand-brown font-medium group-hover:text-brand-dark transition-colors">
                                    <span className="text-brand-gold mr-3 text-xl group-hover:scale-125 transition-transform inline-block">✓</span> {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* SATIRE & TRUTH */}
      <section className="py-32 bg-brand-gold text-white">
        <div className="container mx-auto px-6 text-center">
            <FadeIn>
                <div className="max-w-4xl mx-auto border-4 border-white p-12 relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-brand-gold px-6 text-sm font-bold uppercase tracking-widest">Gentle Satire, Hard Truth</div>
                    <p className="text-2xl md:text-4xl font-heading font-bold leading-tight mb-8">
                        "We celebrate independence with flags and parades. But if our garbage still travels kilometres to rot in landfills, are we independent, or just outsourcing our mess?"
                    </p>
                    <p className="text-xl text-white/80 font-medium">
                        Vision 2047: A Cleaner Definition of Freedom
                    </p>
                </div>
            </FadeIn>
        </div>
      </section>

      {/* THE LOSS */}
      <section className="py-24 bg-brand-dark text-white">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <FadeIn>
                      <h2 className="text-5xl font-heading font-bold uppercase mb-8">What are we <br/>really losing?</h2>
                      <div className="space-y-6 text-xl text-gray-300">
                          <p>When organic waste is ignored, we lose more than just aesthetics.</p>
                          <ul className="space-y-4 list-disc pl-6 text-gray-300">
                              <li><span className="text-white">Public Health</span> to preventable diseases.</li>
                              <li><span className="text-white">Children's Safety</span> to vector-borne infections.</li>
                              <li><span className="text-white">Soil Fertility</span> by discarding what could regenerate it.</li>
                          </ul>
                          <p className="text-white font-bold pt-4 text-2xl">
                              And perhaps most dangerously, we lose time.
                          </p>
                      </div>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                       <img 
                            src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2072&auto=format&fit=crop" 
                            alt="Child playing near clean environment" 
                            className="w-full h-[600px] object-cover transition-all duration-1000 opacity-80"
                        />
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-6">
              <FadeIn>
                  <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-heading font-black text-brand-brown mb-4 sm:mb-6 md:mb-8 uppercase leading-[0.95] max-w-[90vw] mx-auto">
                      Act Now. <span className="text-brand-gold">Not in 2047.</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-4 leading-relaxed">
                      Because the future will not forgive us for the problems we had the technology to solve but chose not to.
                  </p>
                  <Link to="/contact" className="inline-block group">
                    <div className="relative overflow-hidden min-h-[68px] xs:min-h-[72px] sm:min-h-[76px] md:min-h-[80px] flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/90 to-brand-olive/90 backdrop-blur-md border-2 border-brand-gold/40 hover:border-brand-gold shadow-2xl shadow-brand-gold/20 hover:shadow-brand-gold/40 active:scale-[0.97] hover:scale-[1.02] transition-all duration-300 touch-manipulation">
                      
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-olive to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                      
                      {/* Shine effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-2xl"></div>
                      
                      {/* Corner accents */}
                      <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-white/40 rounded-tr-lg group-hover:border-white/60 transition-colors"></div>
                      <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-white/40 rounded-bl-lg group-hover:border-white/60 transition-colors"></div>
                      
                      {/* Button content */}
                      <div className="relative flex items-center justify-center gap-3 xs:gap-4 sm:gap-5 px-10 xs:px-12 sm:px-14 md:px-16 z-10">
                        <span className="text-base xs:text-lg sm:text-xl md:text-2xl font-heading font-black uppercase tracking-wide group-hover:tracking-wider text-brand-dark drop-shadow-sm transition-all duration-300 leading-none">Start Your Waste-Free Journey</span>
                        <div className="relative">
                          <ArrowRight className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-brand-dark flex-shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={2.5} />
                          {/* Icon glow */}
                          <div className="absolute inset-0 bg-brand-dark/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                    </div>
                  </Link>
              </FadeIn>
          </div>
      </section>

    </div>
  );
};