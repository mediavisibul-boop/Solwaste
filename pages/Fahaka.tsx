import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Recycle, ShieldCheck, Flame, Layers } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Fahaka: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fahakaImages = ["/fahaka.png", "/fahaka1.png", "/fahaka2.png"];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % fahakaImages.length);
    }, 4000); // Change image every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-16 sm:pt-20 bg-brand-dark text-white min-h-screen">
      
      {/* Hero Section with Image Slideshow */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden px-4 sm:px-6">
         {/* Background Image Slideshow */}
         <div className="absolute inset-0 z-0">
           <AnimatePresence mode="wait">
             <motion.img 
               key={fahakaImages[currentImageIndex]}
               src={fahakaImages[currentImageIndex]} 
               alt="Fahaka Machine" 
               className="w-full h-full object-cover object-center"
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.8 }}
             />
           </AnimatePresence>
           {/* Premium black fade overlay */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
         </div>
         
         <div className="relative z-20 max-w-5xl px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="inline-block border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-md rounded-full px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 text-brand-gold font-bold uppercase tracking-widest text-[10px] sm:text-xs md:text-sm mb-6 sm:mb-8 md:mb-10 shadow-[0_0_20px_rgba(190,215,84,0.3)]">
                    Solwaste Innovation Lab
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-heading font-black text-white mb-3 sm:mb-4 tracking-tighter leading-none drop-shadow-2xl">
                    FAHAKA
                </h1>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-300 mb-8 sm:mb-10 md:mb-12 uppercase tracking-wide drop-shadow-lg">
                    The Universal Decomposer
                </p>
                
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-200 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-16 leading-relaxed font-normal px-4 drop-shadow-md">
                    Traditional composters fail at contamination. Fahaka thrives on it. <br className="hidden sm:block"/>
                    The world's first unified processor for <span className="text-white font-bold">Food, Plastics, and Sanitary Waste</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button className="w-full sm:w-auto bg-brand-gold border-brand-gold text-white hover:bg-white hover:text-brand-gold px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl touch-manipulation">
                            Request Private Demo
                        </Button>
                    </Link>
                    <Link to="/contact" className="w-full sm:w-auto">
                        <Button variant="outline" className="w-full sm:w-auto border-gray-500 text-gray-300 hover:border-white hover:text-white px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl touch-manipulation">
                            Download Whitepaper
                        </Button>
                    </Link>
                </div>
            </motion.div>
         </div>

         {/* Image Slideshow Indicators */}
         <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
           <div className="flex justify-center gap-2 sm:gap-2.5">
             {fahakaImages.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setCurrentImageIndex(idx)}
                 className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                   idx === currentImageIndex 
                     ? 'w-6 sm:w-8 bg-brand-gold shadow-lg shadow-brand-gold/50' 
                     : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                 }`}
                 aria-label={`View image ${idx + 1}`}
               />
             ))}
           </div>
         </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-brand-dark">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
                {/* Left Column - Why Fahaka */}
                <div className="lg:col-span-2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-6 sm:mb-8 text-white leading-tight">Why Fahaka?</h2>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 leading-relaxed font-normal">
                        In real-world scenarios, segregation is never 100%. A single plastic wrapper or sanitary napkin can jam traditional composters or contaminate the output manure.
                    </p>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-normal">
                        Fahaka uses a proprietary <strong>Multi-Stage Thermal Decomposition</strong> process. It doesn't just compost; it breaks down molecular bonds.
                    </p>
                    <ul className="space-y-4 sm:space-y-5">
                        {[
                            "Accepts Mixed Waste Streams", 
                            "Sterilizes Pathogens at High Temp", 
                            "Reduces Volume by 95%", 
                            "Zero Landfill Output"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center text-base sm:text-lg md:text-xl text-white font-medium">
                                <Zap className="text-brand-gold mr-3 sm:mr-4 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Column - Process Flow */}
                <div className="lg:col-span-3 mt-8 lg:mt-0">
                <div className="relative p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto lg:mx-0">
                    {/* Elegant background glows */}
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-gold/10 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-gold/5 blur-[100px] rounded-full"></div>
                    
                    <div className="relative z-10 space-y-6 sm:space-y-8">
                        {/* INPUT SECTION */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="flex items-center justify-between mb-5">
                                <h3 className="text-gray-400 uppercase text-sm font-medium tracking-wider">Mixed Waste Input</h3>
                                <span className="text-red-400/80 text-xs italic">Contaminated Stream</span>
                            </div>
                            
                            {/* Waste Type Cards with Unsplash backgrounds */}
                            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
                                        className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer shadow-xl"
                                    >
                                        {/* Background Image */}
                                        <div 
                                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url('${item.image}')` }}
                                        ></div>
                                        
                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.overlay}`}></div>
                                        
                                        {/* Content */}
                                        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-center">
                                            <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition-transform drop-shadow-lg">{item.emoji}</div>
                                            <div className="text-white text-xs sm:text-sm font-light tracking-wide drop-shadow-md">{item.label}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* PROCESS INDICATOR - More artistic */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col items-center py-4"
                        >
                            <div className="relative mb-3">
                                <div className="absolute inset-0 bg-brand-gold/20 blur-2xl opacity-60 animate-pulse"></div>
                                <Flame size={48} className="sm:w-14 sm:h-14 text-brand-gold relative z-10 drop-shadow-[0_0_15px_rgba(190,215,84,0.5)]" />
                        </div>
                            <div className="flex flex-col items-center space-y-1.5">
                                <p className="text-brand-gold/90 text-xs sm:text-sm font-light tracking-widest">Thermal Decomposition</p>
                                <div className="flex space-x-1.5">
                                    {[...Array(5)].map((_, i) => (
                                        <div 
                                            key={i} 
                                            className="w-1 h-1 bg-brand-gold/60 rounded-full animate-pulse"
                                            style={{ animationDelay: `${i * 0.2}s` }}
                                        ></div>
                                    ))}
                        </div>
                                <p className="text-gray-500/80 text-xs font-light italic">150°C - 300°C</p>
                            </div>
                        </motion.div>

                        {/* OUTPUT SECTION - Premium look with compost background */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="relative overflow-hidden rounded-3xl"
                        >
                            {/* Background Image - Compost/Bio-coal */}
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&q=80')" }}
                            ></div>
                            
                            {/* Gradient Overlay for readability */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/95 via-brand-gold/90 to-brand-dark/95"></div>
                            
                            {/* Elegant glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 via-transparent to-brand-gold/30 blur-xl"></div>
                            
                            <div className="relative z-10 backdrop-blur-sm p-6 sm:p-8">
                                <div className="flex items-center justify-between mb-5">
                                    <h3 className="text-white uppercase text-sm font-medium tracking-wider drop-shadow-md">Clean Output</h3>
                                    <span className="text-white/90 text-xs italic drop-shadow-md">95% Reduction</span>
                                </div>
                                
                                <div className="text-center space-y-3">
                                    <div className="flex items-center justify-center space-x-3">
                                        <ShieldCheck className="text-white drop-shadow-lg w-9 h-9 sm:w-11 sm:h-11" />
                                        <div>
                                            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-md">
                                                Sterile Inert Ash
                                            </h4>
                                            <p className="text-white/90 text-xs sm:text-sm font-light mt-1 drop-shadow">Premium Bio-Coal</p>
                                        </div>
                                    </div>
                                    
                                    {/* Elegant feature tags */}
                                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-3">
                                        {["Pathogen-Free", "Zero Landfill", "Odorless"].map((tag, idx) => (
                                            <span 
                                                key={idx} 
                                                className="text-white/90 text-xs font-light tracking-wider px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-sm drop-shadow-md"
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

      {/* Tech Specs */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 border-t border-gray-800 overflow-hidden">
          {/* Background Image with Premium Black Fade */}
          <div className="absolute inset-0 z-0">
            <img 
              src={fahakaImages[1]} 
              alt="Fahaka Tech" 
              className="w-full h-full object-cover object-center opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-black/95"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-16 sm:mb-20 md:mb-24">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 text-white">Core Specifications</h2>
                  <div className="w-16 sm:w-20 md:w-24 h-1.5 sm:h-2 bg-brand-gold mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {[
                      { icon: <Layers size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Capacity", value: "Customizable", sub: "50kg - 5Ton" },
                      { icon: <Flame size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Process Temp", value: "150°C - 300°C", sub: "Auto-Regulated" },
                      { icon: <ShieldCheck size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Sterilization", value: "Log 6", sub: "Medical Grade" },
                      { icon: <Recycle size={32} className="sm:w-9 sm:h-9 md:w-10 md:h-10"/>, label: "Residue", value: "< 5%", sub: "Of Input Volume" }
                  ].map((spec, idx) => (
                      <div key={idx} className="bg-brand-dark p-6 sm:p-8 md:p-10 border border-gray-700 hover:border-brand-gold transition-colors duration-300 text-center group rounded-lg">
                          <div className="inline-flex justify-center items-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gray-900 text-gray-400 group-hover:bg-brand-gold group-hover:text-white mb-6 sm:mb-8 transition-all">
                              {spec.icon}
                          </div>
                          <h3 className="text-gray-300 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2 sm:mb-3">{spec.label}</h3>
                          <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{spec.value}</div>
                          <div className="text-gray-400 text-sm sm:text-base">{spec.sub}</div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
          {/* Background Image with Premium Black to Gold Fade */}
          <div className="absolute inset-0 z-0">
            <img 
              src={fahakaImages[2]} 
              alt="Fahaka CTA" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-brand-gold/85 to-black/80"></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white mb-6 sm:mb-8 uppercase leading-tight drop-shadow-2xl">Ready to deploy Fahaka?</h2>
              <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 font-medium px-4 drop-shadow-lg">
                  This technology is currently available for pilot programs in select municipalities and large townships.
              </p>
              <Link to="/contact" className="inline-block">
                <Button variant="white" className="py-4 sm:py-5 md:py-6 px-10 sm:px-12 md:px-14 text-base sm:text-lg md:text-xl font-bold uppercase touch-manipulation">
                    Schedule Consultation
                </Button>
              </Link>
          </div>
      </section>
    </div>
  );
};