import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Recycle, ShieldCheck, Flame, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Fahaka: React.FC = () => {
  return (
    <div className="pt-20 bg-brand-dark text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden px-6">
         <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
         
         <div className="relative z-20 max-w-5xl">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-md rounded-full px-8 py-2 text-brand-gold font-bold uppercase tracking-widest text-sm mb-10 shadow-[0_0_20px_rgba(190,215,84,0.3)]">
                    Solwaste Innovation Lab
                </div>
                <h1 className="text-8xl md:text-[10rem] font-heading font-black text-white mb-4 tracking-tighter leading-none">
                    FAHAKA
                </h1>
                <p className="text-3xl md:text-5xl font-heading font-bold text-gray-400 mb-12 uppercase tracking-wide">
                    The Universal Decomposer
                </p>
                
                <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto mb-16 leading-relaxed font-normal">
                    Traditional composters fail at contamination. Fahaka thrives on it. <br/>
                    The world's first unified processor for <span className="text-white font-bold">Food, Plastics, and Sanitary Waste</span>.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Link to="/contact">
                        <Button className="w-full md:w-auto bg-brand-gold border-brand-gold text-white hover:bg-white hover:text-brand-gold px-12 py-5 text-xl">
                            Request Private Demo
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" className="w-full md:w-auto border-gray-500 text-gray-300 hover:border-white hover:text-white px-12 py-5 text-xl">
                            Download Whitepaper
                        </Button>
                    </Link>
                </div>
            </motion.div>
         </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-32 bg-brand-dark">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-white">Why Fahaka?</h2>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed font-normal">
                        In real-world scenarios, segregation is never 100%. A single plastic wrapper or sanitary napkin can jam traditional composters or contaminate the output manure.
                    </p>
                    <p className="text-gray-300 text-xl mb-8 leading-relaxed font-normal">
                        Fahaka uses a proprietary <strong>Multi-Stage Thermal Decomposition</strong> process. It doesn't just compost; it breaks down molecular bonds.
                    </p>
                    <ul className="space-y-6 mt-10">
                        {[
                            "Accepts Mixed Waste Streams", 
                            "Sterilizes Pathogens at High Temp", 
                            "Reduces Volume by 95%", 
                            "Zero Landfill Output"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-2xl text-white font-medium">
                                <Zap className="text-brand-gold mr-5 w-8 h-8" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-900 p-12 rounded-2xl border border-gray-800 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-brand-gold blur-[100px] opacity-20 rounded-full"></div>
                    <div className="relative z-10 grid grid-cols-1 gap-8">
                        <div className="bg-brand-dark/50 p-8 rounded border border-gray-700">
                            <h3 className="text-gray-400 uppercase text-sm font-bold tracking-widest mb-3">Input</h3>
                            <div className="flex space-x-2 text-3xl font-bold">
                                <span>🍏 Food</span>
                                <span className="text-gray-500">+</span>
                                <span>🥤 Plastic</span>
                                <span className="text-gray-500">+</span>
                                <span>🧴 Sanitary</span>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Flame size={48} className="text-brand-gold animate-pulse" />
                        </div>
                        <div className="bg-brand-gold/20 p-8 rounded border border-brand-gold/50">
                            <h3 className="text-brand-gold uppercase text-sm font-bold tracking-widest mb-3">Output</h3>
                            <div className="text-3xl font-bold text-white">
                                Sterile Inert Ash / Bio-Coal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-32 bg-brand-dark border-t border-gray-800">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24">
                  <h2 className="text-5xl font-heading font-bold mb-6 text-white">Core Specifications</h2>
                  <div className="w-24 h-2 bg-brand-gold mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                      { icon: <Layers size={40}/>, label: "Capacity", value: "Customizable", sub: "50kg - 5Ton" },
                      { icon: <Flame size={40}/>, label: "Process Temp", value: "150°C - 300°C", sub: "Auto-Regulated" },
                      { icon: <ShieldCheck size={40}/>, label: "Sterilization", value: "Log 6", sub: "Medical Grade" },
                      { icon: <Recycle size={40}/>, label: "Residue", value: "< 5%", sub: "Of Input Volume" }
                  ].map((spec, idx) => (
                      <div key={idx} className="bg-brand-dark p-10 border border-gray-700 hover:border-brand-gold transition-colors duration-300 text-center group">
                          <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-gray-900 text-gray-400 group-hover:bg-brand-gold group-hover:text-white mb-8 transition-all">
                              {spec.icon}
                          </div>
                          <h3 className="text-gray-300 font-bold uppercase tracking-widest text-sm mb-3">{spec.label}</h3>
                          <div className="text-3xl font-bold text-white mb-2">{spec.value}</div>
                          <div className="text-gray-400 text-base">{spec.sub}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-gold">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-5xl md:text-7xl font-heading font-black text-white mb-8 uppercase">Ready to deploy Fahaka?</h2>
              <p className="text-white/90 text-2xl max-w-3xl mx-auto mb-14 font-medium">
                  This technology is currently available for pilot programs in select municipalities and large townships.
              </p>
              <Link to="/contact">
                <Button variant="white" className="py-6 px-14 text-xl font-bold uppercase">
                    Schedule Consultation
                </Button>
              </Link>
          </div>
      </section>
    </div>
  );
};