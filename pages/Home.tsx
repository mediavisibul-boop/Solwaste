import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Recycle, Target, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnersSection from '../components/PartnersSection';
import { SEO } from '../components/SEO';

// Slide type definition
type Slide = {
  id: string;
  type: 'standard' | 'innovation';
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  images?: string[];
  isDark: boolean;
  badge: string;
  specs?: { label: string; value: string; unit: string }[];
};

// Slide Data
const slides: Slide[] = [
  {
    id: 'ecoloop',
    type: 'standard',
    title: "EcoLoop™",
    subtitle: "The Workhorse",
    description: "Designed for Gated Communities and Hotels. Handles 50-1000kg/day with Zero-Maintenance HEPA filtration. No smells, no pests.",
    images: ["/ecoloop.webp", "/ecoloop2.webp","/ecoloop3.webp"], // Single optimized image instead of slideshow
    isDark: false, // Navbar should be Dark
    badge: "Societies & Hotels",
    specs: [
      { label: "Capacity", value: "50-1k", unit: "KG" },
      { label: "Cycle Time", value: "24", unit: "HRS" },
      { label: "Material", value: "SS", unit: "304" },
      { label: "Filtration", value: "HEPA", unit: "+" }
    ]
  },
  {
    id: 'compogen',
    type: 'standard',
    title: "CompoGen™",
    subtitle: "The Enterprise Standard",
    description: "The 1.5+ Ton/day industrial powerhouse. High-torque German motors designed for 24/7 continuous operation in municipal and commercial sectors.",
    images: ["/compogen.webp", "/compogen2.webp"], // Single optimized image instead of slideshow
    isDark: true, // Navbar should be White
    badge: "Industrial & Municipal",
    specs: [
      { label: "Capacity", value: "1.5-50", unit: "TON" },
      { label: "Automation", value: "PLC", unit: "CLOUD" },
      { label: "Warranty", value: "5", unit: "YEARS" },
      { label: "Safety", value: "100", unit: "%" }
    ]
  },
  {
    id: 'cybersoil',
    type: 'standard',
    title: "CyberSoil™",
    subtitle: "Residential Luxury",
    description: "The sleek solution for luxury apartments and executive cabins. Solar Dehydration technology processes waste in total silence.",
    images: ["/cybersoil.webp", "/cybersoil2.webp"], // CyberSoil slideshow
    isDark: false, // Navbar should be Dark
    badge: "Home & Office",
    specs: [
      { label: "Capacity", value: "2-10", unit: "KG" },
      { label: "Power", value: "0.5", unit: "kWh" },
      { label: "Size", value: "STD", unit: "DISH" },
      { label: "Tech", value: "SOLAR", unit: "DRY" }
    ]
  },
  {
    id: 'fahaka',
    type: 'innovation',
    title: "FAHAKA",
    subtitle: "The Universal Decomposer",
    description: "Breaking the barriers of organic waste. Capable of processing Food, Plastic Bottles, and Sanitary Waste into sterile resources.",
    images: ["/fahaka.webp", "/fahaka2.webp", "/fahaka3.webp"], // Fahaka machine slideshow
    isDark: true, // Navbar should be White
    badge: "Innovation Lab"
  }
];

// About Section Component with Touch of Grey
const Card: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
    <div className="bg-white p-6 sm:p-8 border border-gray-100 shadow-sm hover:border-brand-gold hover:shadow-xl transition-all duration-500 group rounded-sm">
      <div className="text-gray-400 group-hover:text-brand-gold mb-4 sm:mb-6 transition-colors duration-300 transform group-hover:scale-110 origin-left">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-brown mb-3 sm:mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-700 leading-relaxed font-normal text-base sm:text-lg">{text}</p>
    </div>
);

const SlideContent: React.FC<{ slide: Slide }> = ({ slide }) => {
  // State for image slideshow (for slides with multiple images)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate images if multiple images exist
  useEffect(() => {
    if (slide.images && slide.images.length > 1) {
      const imageCount = slide.images.length;
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % imageCount);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [slide.images]);

  // FAHAKA LAYOUT
  if (slide.type === 'innovation') {
    // Get the current image for slideshow
    const currentImage = slide.images ? slide.images[currentImageIndex] : undefined;

    return (
      <div className="relative w-full h-full flex flex-col justify-between bg-black text-center px-3 xs:px-4 sm:px-6 overflow-hidden">
        {/* Background Image Slideshow - Optimized for Mobile */}
        <div className="absolute inset-0 z-0">
          {currentImage && (
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImage}
                src={currentImage} 
                alt={slide.title} 
                className="w-full h-full object-cover object-center md:object-contain lg:object-cover"
                style={{
                  objectPosition: 'center center'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
          )}
          {/* Premium black fade overlay for text readability - Stronger on mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80 md:from-black/60 md:via-black/40 md:to-black/70"></div>
        </div>

        {/* Content - Better mobile spacing */}
        <div className="relative z-10 max-w-5xl mx-auto pt-24 xs:pt-28 sm:pt-32 md:pt-36 px-3 xs:px-4 flex-grow flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
           >
             <div className="inline-block border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-md rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-brand-gold font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-6 sm:mb-8 shadow-[0_0_15px_rgba(190,215,84,0.4)]">
               {slide.badge}
             </div>
             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-heading font-black text-white mb-2 tracking-tighter leading-none drop-shadow-2xl">
               {slide.title}
             </h1>
             <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-200 mb-6 sm:mb-8 uppercase tracking-widest drop-shadow-lg">
               {slide.subtitle}
             </p>
             <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-normal px-4 drop-shadow-md">
               Breaking the barriers of organic waste. <br className="hidden sm:block"/>
               Processing <span className="font-bold text-white">Food, Plastics, and Sanitary Waste</span> into sterile resources.
             </p>

             <Link to="/fahaka">
               <Button className="bg-brand-gold text-white border-brand-gold hover:bg-white hover:text-brand-gold py-3 sm:py-4 px-8 sm:px-12 text-base sm:text-lg lg:text-xl shadow-2xl shadow-brand-gold/20 w-full sm:w-auto touch-manipulation">
                 Explore Fahaka
               </Button>
             </Link>
           </motion.div>
        </div>

        {/* Image Slideshow Indicators */}
        {slide.images && slide.images.length > 1 && (
          <div className="relative z-10 pb-6 sm:pb-8">
            <div className="flex justify-center gap-2 sm:gap-2.5">
              {slide.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation ${
                    idx === currentImageIndex 
                      ? 'w-6 sm:w-8 bg-brand-gold' 
                      : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // STANDARD PRODUCT LAYOUT
  const isDark = slide.isDark;
  // Use light colors when there's a background image for better visibility
  const hasBackgroundImage = slide.images || slide.image;
  const textColor = hasBackgroundImage ? 'text-white' : (isDark ? 'text-white' : 'text-brand-brown');
  // Enhanced text visibility: Use lighter grays for dark bg, darker grays for light bg
  const subColor = hasBackgroundImage ? 'text-gray-200' : (isDark ? 'text-gray-200' : 'text-brand-brown');
  const descColor = hasBackgroundImage ? 'text-gray-100' : (isDark ? 'text-gray-100' : 'text-brand-brown');

  // Get the current image (either from images array or single image)
  const currentImage = slide.images ? slide.images[currentImageIndex] : slide.image;

  console.log('Current slide:', slide.id, 'Current image:', currentImage); // Debug log

  const backgroundClass = currentImage ? 'bg-transparent' : (isDark ? 'bg-brand-dark' : 'bg-white');

  return (
    <div className={`relative w-full h-full flex flex-col justify-between ${backgroundClass}`}>
       {/* Background Image with Slideshow - Mobile Optimized */}
       <div className="absolute inset-0 z-0">
        {currentImage && (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              style={{
                objectPosition: 'center center'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onError={(e) => console.error('Image failed to load:', currentImage, e)}
              onLoad={() => console.log('Image loaded:', currentImage)}
            />
          </AnimatePresence>
        )}
        {/* Adaptive overlay - Stronger on mobile for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 md:from-black/30 md:via-black/10 md:to-black/40"></div>
        {/* Light tinted overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/30' : 'bg-gradient-to-b from-white/20 via-transparent to-white/30'}`}></div>
      </div>

      {/* Header Content - Mobile Optimized Spacing */}
      <div className={`relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 text-center`}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
           className="max-w-6xl mx-auto"
        >
            {slide.badge && (
              <span className={`inline-block py-2 sm:py-2.5 md:py-3 px-5 sm:px-6 md:px-8 mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-xs sm:text-sm md:text-base font-bold uppercase tracking-wider sm:tracking-wide md:tracking-widest border-2 ${isDark ? 'border-brand-gold text-brand-gold bg-brand-dark/70' : 'border-brand-olive-dark text-brand-olive-dark bg-white/70'} backdrop-blur-md rounded-lg shadow-lg`}>
              {slide.badge}
            </span>
          )}
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold ${textColor} mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight leading-[1.1] xs:leading-[1.15] sm:leading-tight shadow-sm px-1 xs:px-2 md:px-4`}>
            {slide.title}
          </h1>
          <h2 className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wide sm:tracking-wider md:tracking-widest ${subColor} mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 opacity-90 px-1 xs:px-2 md:px-4 leading-snug`}>
            {slide.subtitle}
          </h2>
          <p className={`text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${descColor} max-w-5xl mx-auto leading-relaxed md:leading-loose font-semibold drop-shadow-md px-3 xs:px-4 sm:px-6 md:px-8`}>
            {slide.description}
          </p>
        </motion.div>
      </div>

      {/* Footer Specs & CTA - Mobile Optimized */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pb-8 xs:pb-10 sm:pb-12 md:pb-14 lg:pb-18 xl:pb-22">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-5 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Specs Grid - Mobile Optimized */}
          <div className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-10 w-full lg:w-auto ${hasBackgroundImage ? 'text-white' : (isDark ? 'text-white' : 'text-brand-brown')}`}>
            {slide.specs?.map((spec, idx) => (
              <div key={idx} className="flex flex-col border-l-2 xs:border-l-3 sm:border-l-4 md:border-l-[5px] border-brand-gold/60 pl-2 xs:pl-3 sm:pl-4 md:pl-5 py-1.5 xs:py-2 hover:border-brand-gold transition-colors">
                <div className="flex items-baseline gap-0.5 xs:gap-1">
                   <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold leading-none">{spec.value}</span>
                   {spec.unit && <span className="text-[10px] xs:text-xs sm:text-sm md:text-base font-bold text-brand-gold">{spec.unit}</span>}
                </div>
                <span className={`text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wide sm:tracking-wider md:tracking-widest mt-1 xs:mt-1.5 sm:mt-2 ${hasBackgroundImage ? 'text-gray-300' : (isDark ? 'text-gray-300' : 'text-gray-600')}`}>{spec.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons - Mobile Optimized */}
          <div className="flex flex-col xs:flex-row gap-2.5 xs:gap-3 sm:gap-4 md:gap-5 w-full lg:w-auto mt-3 xs:mt-4 lg:mt-0 min-h-[48px] items-stretch">
             <Link to="/contact" className="w-full xs:w-1/2 lg:w-auto flex-1 lg:flex-none group">
                <div className={`relative overflow-hidden w-full h-full min-h-[48px] xs:min-h-[50px] sm:min-h-[54px] md:min-h-[58px] lg:min-h-[62px] rounded-lg xs:rounded-xl touch-manipulation transition-all duration-300 ${isDark ? 'bg-gradient-to-r from-white to-gray-100 hover:from-gray-100 hover:to-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]' : 'bg-gradient-to-r from-brand-dark via-brand-olive to-brand-dark hover:from-brand-olive hover:via-brand-dark hover:to-brand-olive shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]'} active:scale-[0.97] hover:scale-[1.02]`}>
                  {/* Shine effect */}
                  <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r ${isDark ? 'from-transparent via-white/40 to-transparent' : 'from-transparent via-brand-gold/40 to-transparent'}`}></div>
                  
                  {/* Glow pulse */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isDark ? 'bg-white/10' : 'bg-brand-gold/10'} animate-pulse`}></div>
                  
                  {/* Button content */}
                  <div className={`relative flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 h-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 ${isDark ? 'text-brand-dark' : 'text-white'}`}>
                    <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide xs:tracking-wider group-hover:tracking-widest transition-all duration-300">Order Now</span>
                    <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
            </Link>
            
            <Link to="/owc" className="w-full xs:w-1/2 lg:w-auto flex-1 lg:flex-none group">
                <div className={`relative overflow-hidden w-full h-full min-h-[48px] xs:min-h-[50px] sm:min-h-[54px] md:min-h-[58px] lg:min-h-[62px] rounded-lg xs:rounded-xl touch-manipulation transition-all duration-300 ${isDark ? 'bg-white/10 hover:bg-white/20 border-2 border-white/50 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]' : 'bg-white/80 hover:bg-white border-2 border-brand-olive-dark/50 hover:border-brand-olive shadow-[0_0_15px_rgba(94,121,96,0.2)] hover:shadow-[0_0_25px_rgba(94,121,96,0.4)]'} backdrop-blur-lg active:scale-[0.97] hover:scale-[1.02]`}>
                  {/* Shine effect */}
                  <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r ${isDark ? 'from-transparent via-white/30 to-transparent' : 'from-transparent via-brand-olive/30 to-transparent'}`}></div>
                  
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ${isDark ? 'ring-2 ring-white/40' : 'ring-2 ring-brand-olive/40'}`}></div>
                  
                  {/* Button content */}
                  <div className={`relative flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 h-full px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 ${isDark ? 'text-white' : 'text-brand-olive-dark group-hover:text-brand-olive'}`}>
                    <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wide xs:tracking-wider group-hover:tracking-widest transition-all duration-300">Tech Specs</span>
                  </div>
                </div>
            </Link>
          </div>
        </div>
        
        {/* Image Slideshow Indicators - Mobile Optimized */}
        {slide.images && slide.images.length > 1 && (
          <div className="flex justify-center items-center gap-1.5 xs:gap-2 sm:gap-2.5 mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8">
            {slide.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`rounded-full transition-all duration-300 ease-in-out touch-manipulation min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center p-1.5 xs:p-2 active:scale-90 ${
                  idx === currentImageIndex
                    ? 'scale-110'
                    : 'scale-100 hover:scale-105'
                }`}
                aria-label={`View image ${idx + 1}`}
              >
                <span className={`block rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? `h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-6 xs:w-8 sm:w-10 md:w-12 ${isDark ? 'bg-white shadow-lg shadow-white/50' : 'bg-brand-dark shadow-lg shadow-brand-dark/50'}`
                    : `h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-1.5 xs:w-2 sm:w-2.5 md:w-3 ${isDark ? 'bg-white/40 hover:bg-white/60' : 'bg-brand-dark/40 hover:bg-brand-dark/60'}`
                }`}></span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Dispatch event when slide changes to update Navbar color
  useEffect(() => {
    const event = new CustomEvent('solwaste-slide-change', { 
        detail: { isDark: slides[currentIndex].isDark } 
    });
    window.dispatchEvent(event);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      zIndex: 1 // Entering slide on top
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0, // Exiting slide below
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) nextIndex = slides.length - 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        return nextIndex;
    });
  };

  return (
    <>
      <SEO 
        title="Home - Leading Organic Waste Management Solutions"
        description="Solwaste offers advanced organic waste composters for societies, hotels, industries & municipalities. EcoLoop, CompoGen, CyberSoil & Fahaka - SWM Rules 2016 compliant. Transform waste into valuable compost with German engineering."
        keywords="organic waste management India, composting machines, waste to compost, EcoLoop waste composter, CompoGen industrial composter, CyberSoil residential composter, Fahaka waste processor, sustainable waste solutions, zero waste technology, SWM Rules 2016"
        type="website"
      />
      {/* FULL SCREEN SLIDER SECTION */}
      <section className="relative h-screen overflow-hidden bg-black">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 25 },
              opacity: { duration: 0.4 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full top-0 left-0"
          >
            <SlideContent slide={slides[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS - Hidden on small mobile, visible on tablet+ */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 md:left-6 lg:left-8 z-20 hidden sm:block">
            <button 
                onClick={() => paginate(-1)} 
                className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-black/20 touch-manipulation"
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:-translate-x-1 transition-transform duration-200" />
            </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-6 lg:right-8 z-20 hidden sm:block">
            <button 
                onClick={() => paginate(1)} 
                className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-black/20 touch-manipulation"
                aria-label="Next slide"
            >
                <ChevronRight size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
        </div>

        {/* BOTTOM INDICATORS - Mobile Optimized with Better Touch Targets */}
        <div className="absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
             {slides.map((_, idx) => (
                 <button 
                    key={idx}
                    onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                    }}
                    className={`min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center p-1.5 xs:p-2 rounded-full transition-all duration-300 ease-in-out touch-manipulation active:scale-90 ${idx === currentIndex ? 'scale-110' : 'scale-100 hover:scale-105'}`}
                    aria-label={`Go to slide ${idx + 1}: ${slides[idx].title}`}
                    aria-current={idx === currentIndex ? 'true' : 'false'}
                 >
                    <span className={`block rounded-full transition-all duration-300 ${idx === currentIndex ? 'h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-10 xs:w-12 sm:w-14 md:w-18 lg:w-20 bg-brand-gold shadow-lg shadow-brand-gold/50' : 'h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-1.5 xs:w-2 sm:w-2.5 md:w-3 bg-white/40 hover:bg-white/70 active:bg-white'}`}></span>
                 </button>
             ))}
        </div>
      </section>

      {/* GOVERNMENT MANDATE SECTION - Enhanced responsive design */}
      <section className="bg-brand-dark py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 relative overflow-hidden border-t border-gray-700">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-olive-dark/30 to-transparent pointer-events-none"></div>
         <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center">
               <div>
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8 uppercase leading-tight">
                     Government <br/><span className="text-brand-gold">Mandate Ready</span>
                  </h2>
                  <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 xs:mb-7 sm:mb-8 md:mb-9 lg:mb-10 max-w-2xl leading-relaxed font-normal">
                     100% Compliant with SWM Rules 2016 & NGT Orders. Don't risk penalties. Install a Solwaste system today.
                  </p>
                  <div className="grid grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8 mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                      <div className="p-4 sm:p-5 md:p-6 bg-brand-olive-dark/20 rounded-lg border-l-4 border-brand-gold">
                          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-1 sm:mb-2">500+</div>
                          <div className="text-xs xs:text-sm sm:text-base text-brand-gold font-bold uppercase tracking-wider">Active Sites</div>
                      </div>
                      <div className="p-4 sm:p-5 md:p-6 bg-brand-olive-dark/20 rounded-lg border-l-4 border-brand-gold">
                          <div className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-1 sm:mb-2">100%</div>
                          <div className="text-xs xs:text-sm sm:text-base text-brand-gold font-bold uppercase tracking-wider">Legal Compliance</div>
                      </div>
                  </div>
                  <a href="https://quark-cornflower-fe8.notion.site/2ef846625722805685eafe2642f29e0e?pvs=105" target="_blank" rel="noopener noreferrer" className="block xs:inline-block">
                     <Button className="w-full xs:w-auto min-h-[48px] sm:min-h-[52px] md:min-h-[56px] bg-brand-gold text-white border-brand-gold hover:bg-white hover:text-brand-gold py-3.5 xs:py-4 sm:py-4.5 md:py-5 px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 text-sm xs:text-base sm:text-lg font-bold uppercase tracking-wider md:tracking-widest touch-manipulation active:scale-95 transition-transform">
                        Get Compliance Audit
                     </Button>
                  </a>
               </div>
               
               <div className="grid grid-cols-1 gap-4 xs:gap-4.5 sm:gap-5 md:gap-6 mt-6 lg:mt-0">
                  {[
                    { title: "SWM Rules 2016", desc: "Mandatory on-site processing for bulk generators (>100kg/day)." },
                    { title: "NGT Compliance", desc: "Adherence to National Green Tribunal guidelines to avoid heavy fines." },
                    { title: "Green Building", desc: "Earn LEED & GRIHA points for sustainable waste management." }
                  ].map((item, i) => (
                    <div key={i} className="p-5 xs:p-6 sm:p-7 md:p-8 lg:p-10 border-2 border-brand-gold-dark/50 hover:border-brand-gold transition-all duration-300 bg-brand-gold-dark/20 hover:bg-brand-gold-dark/30 group rounded-lg">
                       <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-2 xs:mb-2.5 sm:mb-3 md:mb-4 uppercase group-hover:text-brand-gold transition-colors">{item.title}</h3>
                       <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ABOUT SECTION - Enhanced responsive design */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-brand-light border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 items-center mb-12 xs:mb-14 sm:mb-16 md:mb-18 lg:mb-20 xl:mb-24">
            <div>
               <div className="flex items-center gap-3 xs:gap-3.5 sm:gap-4 mb-4 xs:mb-4.5 sm:mb-5 md:mb-6">
                  <div className="h-[2px] xs:h-[2.5px] sm:h-[3px] md:h-1 w-8 xs:w-10 sm:w-12 md:w-16 bg-brand-gold"></div>
                  <span className="text-brand-gold font-bold uppercase tracking-wider sm:tracking-widest text-xs xs:text-sm sm:text-base md:text-lg">Our Expertise</span>
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-brand-dark mb-5 xs:mb-6 sm:mb-7 md:mb-8 uppercase leading-tight">German Engineering. <br/><span className="text-brand-olive-dark">Indian Innovation.</span></h2>
              <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 text-brand-dark leading-relaxed md:leading-loose text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-normal">
                <p>
                  Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable technology.
                </p>
                <p>
                  Leveraging <strong>German engineering</strong> principles, we developed a suite of Organic Waste Composters (OWC) that offer superior efficiency and durability.
                </p>
                <p>
                  Today, with over <strong>500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" mission.
                </p>
              </div>
              <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12">
                 <Link to="/contact" className="block xs:inline-block">
                    <Button variant="outline" className="w-full xs:w-auto min-h-[48px] sm:min-h-[52px] px-6 xs:px-7 sm:px-8 md:px-10 lg:px-12 py-3.5 xs:py-4 sm:py-4.5 text-xs xs:text-sm sm:text-base md:text-lg font-bold border-2 border-brand-gold-dark text-brand-gold-dark hover:border-brand-gold hover:bg-brand-gold hover:text-white uppercase tracking-wider md:tracking-widest touch-manipulation active:scale-95 transition-all duration-300">Read More</Button>
                 </Link>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
                <div className="absolute top-0 right-0 -mr-3 sm:-mr-4 md:-mr-6 lg:-mr-8 -mt-3 sm:-mt-4 md:-mt-6 lg:-mt-8 w-20 h-20 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-white z-0 hidden xs:block rounded-lg"></div>
                <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Team" 
                    className="shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 border-b-4 xs:border-b-6 sm:border-b-8 border-brand-gold rounded-sm"
                />
               <div className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 lg:-bottom-8 -left-3 sm:-left-4 md:-left-6 lg:-left-8 w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 border-l-4 xs:border-l-6 sm:border-l-8 border-b-4 xs:border-b-6 sm:border-b-8 border-brand-dark z-20 hidden sm:block"></div>
            </div>
          </div>

          {/* Mission/Vision Grid - Improved responsive layout */}
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xs:gap-5.5 sm:gap-6 md:gap-7 lg:gap-8">
            <Card 
              icon={<Target size={32} className="xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />}
              title="Our Mission"
              text="To provide robust, zero-landfill solutions that empower communities to manage their waste at the source, reducing environmental impact and generating value."
            />
            <Card 
              icon={<Globe size={32} className="xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />}
              title="Vision 2047"
              text="Supporting India's goal for sustainable cities by creating a circular economy where organic waste is universally viewed as a resource for energy and soil health."
            />
            <Card 
              icon={<Award size={32} className="xs:w-10 xs:h-10 sm:w-11 sm:h-11 md:w-12 md:h-12" />}
              title="Quality Promise"
              text="We commit to German-engineered precision, ensuring our machines deliver maximum uptime, minimal maintenance, and optimal output quality."
            />
          </div>
        </div>
      </section>

      {/* Partners and Testimonials Section */}
      <PartnersSection />
    </>
  );
};