import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Recycle, ShieldCheck, Flame, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Fahaka: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.webp", "/fahaka2.webp", "/fahaka3.webp"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 sm:pt-20 bg-brand-dark text-white min-h-screen">
      <SEO 
        title="Fahaka - Universal Waste Decomposer for Large Generators | Food, Plastic & Sanitary"
        description="Revolutionary Fahaka technology for large waste generators in India. Processes food waste, plastic bottles & sanitary waste into sterile resources. Ideal for hospitals, institutions, food courts, and municipalities. Plasma pyrolysis technology, 850°C thermal decomposition, zero landfill, complete compliance. The future of sustainable waste management."
        keywords="Fahaka waste processor, universal waste decomposer, composting solutions for large waste generators, hospital waste management, institutional waste processor, plasma pyrolysis India, plastic waste management, sanitary waste disposal, biomedical waste, mixed waste processing, thermal decomposition, zero landfill, zero waste India, advanced waste technology, SWM compliance, ESG sustainability"
        type="product"
      />
      
      {/* Hero Section with Image Slideshow - Mobile Optimized */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-3 xs:px-4 sm:px-6">
         {/* Background Image Slideshow - Mobile Optimized */}
         <div className="absolute inset-0 z-0">
           <AnimatePresence mode="wait">
             <motion.img 
               key={fahakaImages[currentImageIndex]}
               src={fahakaImages[currentImageIndex]} 
               alt="Fahaka Machine" 
               className="w-full h-full object-cover object-center"
               style={{
                 objectPosition: 'center center'
               }}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
             />
           </AnimatePresence>
           {/* Premium white fade overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/30"></div>
         </div>
         
         <div className="relative z-20 max-w-5xl px-3 xs:px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-md rounded-full px-3 xs:px-4 sm:px-6 md:px-8 py-1 xs:py-1.5 sm:py-2 text-brand-gold font-bold uppercase tracking-widest text-[9px] xs:text-[10px] sm:text-xs md:text-sm mb-4 xs:mb-5 sm:mb-6 md:mb-8 lg:mb-10 shadow-[0_0_20px_rgba(190,215,84,0.3)]">
                    Solwaste Innovation Lab
                </div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[9rem] font-heading font-black text-white mb-2 xs:mb-3 sm:mb-4 tracking-tighter leading-[1.1] xs:leading-none" style={{ textShadow: '0 4px 25px rgba(0,0,0,0.6), 0 8px 40px rgba(0,0,0,0.4)' }}>
                    FAHAKA
                </h1>
                <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-gray-300 mb-5 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 uppercase tracking-wide" style={{ textShadow: '0 3px 20px rgba(0,0,0,0.5), 0 6px 30px rgba(0,0,0,0.3)' }}>
                    The Universal Decomposer
                </p>
                
                <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mx-auto mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 leading-relaxed font-normal px-3 xs:px-4" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5), 0 4px 25px rgba(0,0,0,0.3)' }}>
                    Traditional composters fail at contamination. Fahaka thrives on it. <br className="hidden sm:block"/>
                    The world's first unified processor for <span className="text-white font-bold">Food, Plastics, and Sanitary Waste</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 justify-center px-3 xs:px-4">
                    <Link to="/contact" className="w-full sm:flex-1 group">
                        <div className="relative overflow-hidden w-full h-full min-h-[48px] xs:min-h-[50px] sm:min-h-[54px] md:min-h-[58px] lg:min-h-[62px] flex items-center justify-center rounded-lg xs:rounded-xl bg-gradient-to-r from-brand-gold via-yellow-500 to-brand-gold hover:from-yellow-500 hover:via-brand-gold hover:to-yellow-500 shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.7)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation">
                          {/* Shine effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                          
                          {/* Glow pulse */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 animate-pulse"></div>
                          
                          {/* Button content */}
                          <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 px-5 xs:px-6 sm:px-8 md:px-10 text-white">
                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">Request Private Demo</span>
                          </div>
                        </div>
                    </Link>
                    <Link to="/contact" className="w-full sm:flex-1 group">
                        <div className="relative overflow-hidden w-full h-full min-h-[48px] xs:min-h-[50px] sm:min-h-[54px] md:min-h-[58px] lg:min-h-[62px] flex items-center justify-center rounded-lg xs:rounded-xl bg-transparent border-2 border-gray-500 hover:border-white backdrop-blur-lg shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation">
                          {/* Shine effect */}
                          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                          
                          {/* Animated border glow */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ring-2 ring-white/30"></div>
                          
                          {/* Button content */}
                          <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 px-5 xs:px-6 sm:px-8 md:px-10 text-gray-300 group-hover:text-white">
                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">Download Whitepaper</span>
                          </div>
                        </div>
                    </Link>
                </div>
            </motion.div>
         </div>

         
      </section>

      {/* The Problem / Solution - Mobile Optimized */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-brand-dark">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
                {/* Left Column - Why Fahaka - Mobile Optimized */}
                <div className="lg:col-span-2">
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 text-white leading-tight">Why Fahaka?</h2>
                    <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-5 sm:mb-6 leading-relaxed font-normal">
                        In real-world scenarios, segregation is never 100%. A single plastic wrapper or sanitary napkin can jam traditional composters or contaminate the output manure.
                    </p>
                    <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mb-6 xs:mb-7 sm:mb-8 leading-relaxed font-normal">
                        Fahaka uses a proprietary <strong>Multi-Stage Thermal Decomposition</strong> process. It doesn't just compost; it breaks down molecular bonds.
                    </p>
                    <ul className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5">
                        {[
                            "Accepts Mixed Waste Streams", 
                            "Sterilizes Pathogens at High Temp", 
                            "Reduces Volume by 95%", 
                            "Zero Landfill Output"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-sm xs:text-base sm:text-lg md:text-xl text-white font-medium">
                                <Zap className="text-brand-gold mr-2 xs:mr-3 sm:mr-4 w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 flex-shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column - Process Flow - Mobile Optimized */}
                <div className="lg:col-span-3 mt-6 xs:mt-7 sm:mt-8 lg:mt-0">
                <div className="relative p-3 xs:p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto lg:mx-0">
                    {/* Elegant background glows */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full"></div>
                    
                    <div className="relative z-10 space-y-5 xs:space-y-6 sm:space-y-8">
                        {/* INPUT SECTION - Mobile Optimized */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-5">
                                <h3 className="text-gray-400 uppercase text-xs xs:text-sm font-medium tracking-wider">Mixed Waste Input</h3>
                                <span className="text-red-400/80 text-[10px] xs:text-xs italic">Contaminated Stream</span>
                            </div>
                            
                            {/* Waste Type Cards with Unsplash backgrounds - Mobile Optimized */}
                            <div className="flex flex-wrap justify-center gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
                                {[
                                    { 
                                        emoji: "🍏", 
                                        label: "Food Waste", 
                                        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&q=80",
                                        overlay: "from-green-900/90 via-green-900/80 to-green-800/70"
                                    },
                                    { 
                                        emoji: "🥤", 
                                        label: "Plastics", 
                                        image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=400&q=80",
                                        overlay: "from-blue-900/90 via-blue-900/80 to-blue-800/70"
                                    },
                                    { 
                                        emoji: "🧴", 
                                        label: "Sanitary", 
                                        image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&q=80",
                                        overlay: "from-purple-900/90 via-purple-900/80 to-purple-800/70"
                                    }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                                        className="relative w-24 h-28 xs:w-28 xs:h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 rounded-xl xs:rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl"
                                    >
                                        {/* Background Image */}
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        ></div>
                                        
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.overlay}`}></div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-2 xs:p-3 sm:p-4 text-center">
                                            <div className="text-2xl xs:text-3xl sm:text-4xl mb-1 xs:mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">{item.emoji}</div>
                                            <div className="text-white text-[10px] xs:text-xs sm:text-sm font-light tracking-wide drop-shadow-md">{item.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* PROCESS INDICATOR - More artistic - Mobile Optimized */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center py-3 xs:py-4"
                        >
                            <div className="relative mb-2 xs:mb-3">
                                <div className="absolute inset-0 bg-brand-gold/20 blur-2xl opacity-60 animate-pulse"></div>
                                <Flame size={40} className="xs:w-11 xs:h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 text-brand-gold relative z-10 drop-shadow-[0_0_15px_rgba(190,215,84,0.5)]" />
                        </div>
                            <div className="flex flex-col items-center space-y-1 xs:space-y-1.5">
                                <p className="text-brand-gold/90 text-[10px] xs:text-xs sm:text-sm font-light tracking-widest">Thermal Decomposition</p>
                                <div className="flex space-x-1 xs:space-x-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="w-1 h-1 bg-brand-gold/60 rounded-full animate-pulse"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        ></div>
                                    ))}
                        </div>
                                <p className="text-gray-500/80 text-[10px] xs:text-xs font-light italic">150°C - 300°C</p>
                            </div>
                        </motion.div>

                        {/* OUTPUT SECTION - Premium look with compost background - Mobile Optimized */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative overflow-hidden rounded-2xl xs:rounded-3xl"
                        >
                            {/* Background Image - Compost/Bio-coal */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&q=80')" }}
                            ></div>
                            
                            {/* Gradient Overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/95 via-brand-gold/90 to-white/15"></div>
                            
                            {/* Elegant glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/30 blur-xl"></div>
                            
                            <div className="relative z-10 backdrop-blur-sm p-4 xs:p-5 sm:p-6 md:p-8">
                                <div className="flex items-center justify-between mb-3 xs:mb-4 sm:mb-5">
                                    <h3 className="text-white uppercase text-xs xs:text-sm font-medium tracking-wider drop-shadow-md">Clean Output</h3>
                                    <span className="text-white/90 text-[10px] xs:text-xs italic drop-shadow-md">95% Reduction</span>
                                </div>
                                
                                <div className="text-center space-y-2 xs:space-y-3">
                                    <div className="flex items-center justify-center space-x-2 xs:space-x-3">
                                        <ShieldCheck className="text-white drop-shadow-lg w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11" />
                                        <div>
                                            <h4 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                                                Sterile Inert Ash
                                            </h4>
                                            <p className="text-white/90 text-[10px] xs:text-xs sm:text-sm font-light mt-0.5 xs:mt-1 drop-shadow">Premium Bio-Coal</p>
                                        </div>
                                    </div>
                                    
                                    {/* Elegant feature tags */}
                                    <div className="flex flex-wrap justify-center gap-1.5 xs:gap-2 sm:gap-3 pt-2 xs:pt-3">
                                        {["Pathogen-Free", "Zero Landfill", "Odorless"].map((tag, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-white/90 text-[10px] xs:text-xs font-light tracking-wider px-2 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm drop-shadow-md"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                            </div>
                            </div>
                        </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Tech Specs - Mobile Optimized */}
      <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32 border-t border-gray-800 overflow-hidden">
          {/* Background Image with Premium Black Fade - Mobile Optimized */}
          <div className="absolute inset-0 z-0">
            <img 
              src={fahakaImages[1]} 
              alt="Fahaka Tech" 
              className="w-full h-full object-cover object-center opacity-30 sm:opacity-40"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/25 to-white/30"></div>
          </div>
          
          <div className="container mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
              <div className="text-center mb-10 xs:mb-12 sm:mb-14 md:mb-16 lg:mb-20 xl:mb-24">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-white">Core Specifications</h2>
                  <div className="w-12 xs:w-14 sm:w-16 md:w-20 lg:w-24 h-1 xs:h-1.5 sm:h-2 bg-brand-gold mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
                  {[
                      { icon: <Layers size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Capacity", value: "Customizable", sub: "50kg - 5Ton" },
                      { icon: <Flame size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Process Temp", value: "150°C - 300°C", sub: "Auto-Regulated" },
                      { icon: <ShieldCheck size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Sterilization", value: "Log 6", sub: "Medical Grade" },
                      { icon: <Recycle size={28} className="xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Residue", value: "< 5%", sub: "Of Input Volume" }
                  ].map((spec, idx) => (
                      <div key={idx} className="bg-brand-dark p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 border border-gray-700 hover:border-brand-gold transition-colors duration-300 text-center group rounded-lg">
                          <div className="inline-flex justify-center items-center w-14 h-14 xs:w-16 xs:h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-900 text-gray-400 group-hover:bg-brand-gold group-hover:text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 transition-all">
                              {spec.icon}
                          </div>
                          <h3 className="text-gray-300 font-bold uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm mb-1.5 xs:mb-2 sm:mb-3">{spec.label}</h3>
                          <div className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-1.5 xs:mb-2">{spec.value}</div>
                          <div className="text-gray-400 text-xs xs:text-sm sm:text-base">{spec.sub}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA - Enhanced responsive design - Mobile Optimized */}
      <section className="relative py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 overflow-hidden">
          {/* Background Image with Premium Black to Gold Fade - Mobile Optimized */}
          <div className="absolute inset-0 z-0">
            <img 
              src={fahakaImages[2]} 
              alt="Fahaka CTA" 
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: 'center center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-brand-gold/30 to-white/40"></div>
          </div>
          
          <div className="container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-heading font-black text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 uppercase leading-tight drop-shadow-2xl px-2">
                Ready to deploy Fahaka?
              </h2>
              <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl max-w-4xl mx-auto mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14 font-medium px-3 xs:px-4 sm:px-6 md:px-8 drop-shadow-lg leading-relaxed">
                  This technology is currently available for pilot programs in select municipalities and large townships.
              </p>
              <Link to="/contact" className="inline-block w-full xs:w-auto group">
                <div className="relative overflow-hidden w-full h-full min-h-[48px] xs:min-h-[52px] sm:min-h-[56px] md:min-h-[60px] lg:min-h-[64px] xl:min-h-[68px] flex items-center justify-center rounded-lg xs:rounded-xl bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_rgba(255,255,255,0.7)] active:scale-[0.98] hover:scale-[1.03] transition-all duration-300 touch-manipulation">
                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
                  
                  {/* Glow pulse */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-gold/10 animate-pulse"></div>
                  
                  {/* Button content */}
                  <div className="relative flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 px-6 xs:px-8 sm:px-10 md:px-12 lg:px-14 xl:px-16 2xl:px-20 text-brand-dark">
                    <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold uppercase tracking-wider group-hover:tracking-widest transition-all duration-300 leading-none whitespace-nowrap">Schedule Consultation</span>
                  </div>
                </div>
              </Link>
          </div>
      </section>
    </div>
  );
};