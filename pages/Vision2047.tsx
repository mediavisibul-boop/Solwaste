import React from 'react';
import { motion } from 'framer-motion';
import { Flag, AlertTriangle, CloudFog, Droplets, Skull, Settings, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const Vision2047: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center bg-brand-dark text-white text-center px-6">
         <div className="absolute inset-0 z-0 opacity-40">
            <img 
                src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop" 
                alt="India Skyline" 
                className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
         </div>

         <div className="relative z-10 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex items-center justify-center space-x-3 mb-6">
                    <Flag className="text-brand-gold" size={32} />
                    <span className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm md:text-base">Vision 2047</span>
                    <Flag className="text-brand-gold" size={32} />
                </div>
                <h1 className="text-6xl md:text-[8rem] font-heading font-black leading-none mb-6">
                    ARE WE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">REALLY FREE?</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                    In 2047, India will mark 100 years of Independence. <br/>
                    But can a nation call itself free if its waste still owns us?
                </p>
            </motion.div>
         </div>

         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
         >
            <span className="text-xs uppercase tracking-widest">Explore the Crisis</span>
            <ChevronDown className="animate-bounce" />
         </motion.div>
      </section>

      {/* THE MIRROR */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <FadeIn>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-brand-brown mb-8 uppercase leading-tight">
                        Waste is a <span className="text-brand-gold underline decoration-4 underline-offset-8">Mirror</span>.
                    </h2>
                    <p className="text-2xl text-gray-800 leading-relaxed font-medium border-l-4 border-brand-brown pl-6 mb-8">
                        It reflects how we live, how we consume, and how responsibly we think about tomorrow.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        India generates millions of tonnes of waste every year, and nearly <strong>50–60% of it is organic food waste</strong>. This isn't just inert garbage; it is a living, breathing biological hazard that we step over every single day.
                    </p>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <div className="relative">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-gold z-0"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=1974&auto=format&fit=crop" 
                            alt="Waste Crisis" 
                            className="relative z-10 w-full h-[500px] object-cover grayscale contrast-125"
                        />
                    </div>
                </FadeIn>
            </div>
        </div>
      </section>

      {/* THE INVISIBLE CRISIS - DARK MODE */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 p-64 bg-brand-gold opacity-5 blur-[150px] rounded-full"></div>
         <div className="container mx-auto px-6 relative z-10">
            <FadeIn>
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 uppercase">The Invisible Crisis</h2>
                    <p className="text-gray-300 text-xl">
                        When organic waste is left unattended or mixed with dry waste, it triggers a chain reaction of environmental collapse.
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { icon: <Skull size={40} />, title: "Disease Vector", desc: "Becomes a breeding ground for mosquitoes, flies, and dangerous pathogens." },
                    { icon: <CloudFog size={40} />, title: "Methane Gas", desc: "Releases methane, a greenhouse gas 25x more potent than CO2." },
                    { icon: <Droplets size={40} />, title: "Toxic Leachate", desc: "Contaminates soil and groundwater, poisoning our water tables." },
                    { icon: <AlertTriangle size={40} />, title: "Unlivable Spaces", desc: "Creates persistent foul odours and reduces quality of life." },
                ].map((item, i) => (
                    <FadeIn delay={i * 0.1} key={i}>
                        <div className="bg-gray-900/50 border border-gray-800 p-8 hover:bg-brand-gold/10 hover:border-brand-gold transition-all duration-300 group h-full">
                            <div className="text-gray-500 group-hover:text-brand-gold mb-6 transition-colors">{item.icon}</div>
                            <h3 className="text-xl font-heading font-bold mb-3 uppercase">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    </FadeIn>
                ))}
            </div>
         </div>
      </section>

      {/* THE FAILURE OF INTENTION */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
            <FadeIn>
                <h2 className="text-5xl md:text-7xl font-heading font-bold text-center text-brand-brown mb-24 uppercase">
                    Segregation is not a habit.<br/>
                    <span className="text-brand-gold">It is Infrastructure.</span>
                </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <FadeIn>
                    <div className="bg-white p-10 shadow-lg border-t-4 border-gray-300 h-full">
                        <h3 className="text-3xl font-heading font-bold text-gray-400 mb-6 uppercase">The Old Way <br/><span className="text-brand-brown text-xl">(Vermicompost Pits)</span></h3>
                        <p className="text-lg text-gray-600 mb-6 font-medium">Why it fails at scale:</p>
                        <ul className="space-y-4">
                            {[
                                "Cannot handle high-volume daily waste",
                                "Requires constant manual monitoring",
                                "Sensitive to moisture & temperature",
                                "Often turns into odour hotspots",
                                "Good intentions collapse under bad systems"
                            ].map((text, i) => (
                                <li key={i} className="flex items-start text-gray-500">
                                    <span className="text-red-400 mr-3 text-xl">×</span> {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-white p-10 shadow-2xl border-t-4 border-brand-gold h-full transform md:-translate-y-4">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl font-heading font-bold text-brand-gold mb-0 uppercase">The Future <br/><span className="text-brand-brown text-xl">(Machine Composting)</span></h3>
                            <Settings className="text-brand-gold animate-spin-slow" size={32} />
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
                                <li key={i} className="flex items-start text-brand-brown font-medium">
                                    <span className="text-brand-gold mr-3 text-xl">✓</span> {text}
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
                          <ul className="space-y-4 list-disc pl-6 text-gray-400">
                              <li><span className="text-white">Public Health</span> to preventable diseases.</li>
                              <li><span className="text-white">Children's Safety</span> to vector-borne infections.</li>
                              <li><span className="text-white">Soil Fertility</span> by discarding what could regenerate it.</li>
                          </ul>
                          <p className="text-white font-bold pt-4 text-2xl">
                              And perhaps most dangerously—we lose time.
                          </p>
                      </div>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                       <img 
                            src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?q=80&w=2072&auto=format&fit=crop" 
                            alt="Child playing near clean environment" 
                            className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-80"
                        />
                  </FadeIn>
              </div>
          </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
          <div className="container mx-auto px-6">
              <FadeIn>
                  <h2 className="text-6xl md:text-8xl font-heading font-black text-brand-brown mb-6 uppercase">
                      Act Now. <span className="text-brand-gold">Not in 2047.</span>
                  </h2>
                  <p className="text-2xl text-gray-600 max-w-2xl mx-auto mb-12">
                      Because the future will not forgive us for the problems we had the technology to solve—but chose not to.
                  </p>
                  <Link to="/contact">
                    <Button className="py-6 px-16 text-xl shadow-2xl">
                        Start Your Waste-Free Journey <ArrowRight className="ml-3" />
                    </Button>
                  </Link>
              </FadeIn>
          </div>
      </section>

    </div>
  );
};