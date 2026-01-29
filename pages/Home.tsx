import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { GlassButton } from '../components/ui/GlassButton';
import { FloatingCard, AnimatedIcon, GlassCard } from '../components/ui/AnimatedComponents';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Zap, ShieldCheck, Recycle, Target, Globe, Award, Box as BoxIcon, Clock, Settings, Battery, Leaf, Check, X, Building2, Scale, Flame, Layers, CloudFog, RefreshCw, FileText, TrendingUp, CheckCircle, Factory, Briefcase, Rocket, ArrowRight, Mail, Sparkles, Package, Timer, Shield, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnersSection from '../components/PartnersSection';
import { SEO } from '../components/SEO';
import { GovernmentMandate, ImpactStats, ProcessFlow, MissionGrid } from '../components/Home';

// Re-export some icons for backwards compatibility
const ChevronLeft = ChevronLeftIcon;
const ChevronRight = ChevronRightIcon;
const Box = BoxIcon;

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

// SlideContent component
const SlideContent = ({ slide, currentImageIndex, setCurrentImageIndex }: { 
  slide: Slide; 
  currentImageIndex: number; 
  setCurrentImageIndex: (idx: number) => void;
}) => {
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
              transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          )}
          {/* Premium white fade overlay for elegant look */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/30"></div>
        </div>

        {/* Content - Better mobile spacing */}
        <div className="relative z-10 max-w-5xl mx-auto pt-24 xs:pt-28 sm:pt-32 md:pt-36 px-3 xs:px-4 flex-grow flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
           >
             {/* badge removed from slides */}
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-white mb-2 tracking-tighter leading-none drop-shadow-2xl">
               {slide.title}
             </h1>
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-200 mb-6 sm:mb-8 uppercase tracking-widest drop-shadow-lg">
               {slide.subtitle}
             </p>
             <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-normal px-4 drop-shadow-md">
               Breaking the barriers of organic waste. <br className="hidden sm:block"/>
               Processing <span className="font-bold text-white">Food, Plastics, and Sanitary Waste</span> into sterile resources.
             </p>
             
             <Link to="/fahaka">
               <GlassButton 
                 variant="primary" 
                 size="xl" 
                 icon={Rocket}
                 glow={true}
                 className="w-full sm:w-auto"
               >
                 Explore Fahaka
               </GlassButton>
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
  
  // Visual proof icons for specs - Using Lucide icons
  const getSpecIcon = (label: string) => {
    const key = label.toLowerCase();
    const iconProps = { size: 32, className: "stroke-2" };
    switch(key) {
      case 'capacity': return <Package {...iconProps} />;
      case 'cycle time': return <Timer {...iconProps} />;
      case 'material': return <Layers {...iconProps} />;
      case 'filtration': return <Sparkles {...iconProps} />;
      case 'automation': return <Settings {...iconProps} />;
      case 'warranty': return <Shield {...iconProps} />;
      case 'safety': return <ShieldCheck {...iconProps} />;
      case 'power': return <Battery {...iconProps} />;
      case 'size': return <Gauge {...iconProps} />;
      case 'tech': return <Zap {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  // Get the current image (either from images array or single image)
  const currentImage = slide.images ? slide.images[currentImageIndex] : slide.image;

  const backgroundClass = currentImage ? 'bg-transparent' : (isDark ? 'bg-brand-dark' : 'bg-white');

  return (
    <div className={`relative w-full h-full flex flex-col justify-between ${backgroundClass}`}>
       {/* Background Image with Slideshow + Parallax - Mobile Optimized */}
       <div className="absolute inset-0 z-0">
        {currentImage && (
          <AnimatePresence mode="wait">
            <motion.div className="w-full h-full overflow-hidden">
              <motion.img 
                key={currentImage}
                src={currentImage} 
                alt={slide.title} 
                loading="eager"
                className="w-full h-full object-cover object-center will-change-transform"
                style={{
                  objectPosition: 'center center',
                  transform: 'translateZ(0)' // Force GPU acceleration
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1
                }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ 
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.7 }
                }}
              />
            </motion.div>
          </AnimatePresence>
        )}
        {/* Static ambient glow effect - performance optimized */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 50%)'
          }}
        />
        {/* Premium white fade overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/30"></div>
        {/* Light tinted overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-white/18 via-transparent to-white/22' : 'bg-gradient-to-b from-white/22 via-transparent to-white/28'}`}></div>
      </div>

      {/* Header Content - Mobile Optimized Spacing */}
      <div className={`relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 text-center`}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
           className="max-w-6xl mx-auto"
        >
            {/* badge removed from slides */}
          <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-bold ${textColor} mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight leading-[1.1] xs:leading-[1.15] sm:leading-tight px-1 xs:px-2 md:px-4`} style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 4px 30px rgba(0,0,0,0.3)' }}>
            {slide.title}
          </h1>
          <h2 className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold uppercase tracking-wide sm:tracking-wider md:tracking-widest ${subColor} mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 opacity-90 px-1 xs:px-2 md:px-4 leading-snug`} style={{ textShadow: '0 2px 15px rgba(0,0,0,0.4), 0 4px 25px rgba(0,0,0,0.2)' }}>
            {slide.subtitle}
          </h2>
          <p className={`text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ${descColor} max-w-5xl mx-auto leading-relaxed md:leading-loose font-semibold px-3 xs:px-4 sm:px-6 md:px-8`} style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 3px 20px rgba(0,0,0,0.2)' }}>
            {slide.description}
          </p>
        </motion.div>
      </div>

      {/* Footer Specs & CTA - Mobile Optimized */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Visual Proof Blocks - Premium Glass Morphism Cards */}
          <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full lg:flex-1 ${hasBackgroundImage ? 'text-white' : (isDark ? 'text-white' : 'text-brand-brown')}`}>
            {slide.specs?.map((spec, idx) => (
              <motion.div 
                key={idx} 
                className="relative flex flex-col bg-white/5 backdrop-blur-md rounded-lg xs:rounded-xl p-2.5 xs:p-3 sm:p-4 border border-white/10 hover:border-brand-gold/60 hover:bg-white/10 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-brand-gold/20"
                style={{ willChange: 'transform' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <motion.div 
                  className="text-2xl xs:text-3xl sm:text-4xl mb-2 relative z-10 text-brand-gold"
                >
                  {getSpecIcon(spec.label)}
                </motion.div>
                
                {/* Value */}
                <div className="flex items-baseline gap-1 relative z-10 mb-1" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4), 0 3px 15px rgba(0,0,0,0.2)' }}>
                   <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-black leading-none group-hover:text-brand-gold transition-colors duration-300">{spec.value}</span>
                   {spec.unit && <span className="text-xs xs:text-sm font-bold text-brand-gold/80 group-hover:text-brand-gold">{spec.unit}</span>}
                </div>
                
                {/* Label */}
                <span className={`text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-widest relative z-10 ${hasBackgroundImage ? 'text-gray-200' : (isDark ? 'text-gray-200' : 'text-gray-400')} group-hover:text-white transition-colors`} style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3), 0 2px 12px rgba(0,0,0,0.2)' }}>{spec.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons - Premium Glass Morphism CTAs */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-3.5 sm:gap-4 w-full lg:w-auto lg:flex-shrink-0">
             <Link to="/contact" className="w-full xs:flex-1 lg:w-auto lg:min-w-[180px]">
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight}
                  glow={true}
                  className="w-full"
                >
                  Order Now
                </GlassButton>
            </Link>
            
            <Link to={`/owc#${slide.id}`} className="w-full xs:flex-1 lg:w-auto lg:min-w-[180px]">
                <GlassButton 
                  variant="glass" 
                  size="lg" 
                  icon={Settings}
                  className="w-full"
                >
                  Tech Specs
                </GlassButton>
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Track scroll progress - optimized with passive listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dispatch event when slide changes to update Navbar color
  useEffect(() => {
    const event = new CustomEvent('solwaste-slide-change', { 
        detail: { isDark: slides[currentIndex].isDark } 
    });
    window.dispatchEvent(event);
    setCurrentImageIndex(0); // Reset image index when slide changes
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
        title="Composting Solutions for Large Waste Generators in India"
        description="Solwaste provides composting solutions for large waste generators in India - hotels, malls, IT parks, hospitals & institutions. On-site waste management that reduces costs, ensures compliance with SWM Rules, and supports ESG goals. Process 100kg to several tons daily with proven German engineering. Zero landfill, maximum ROI."
        keywords="composting solutions for large waste generators in India, bulk waste generators, organic waste management India, on-site composting, hotel waste management, mall waste solutions, IT park composting, hospital waste management, institutional composting, SWM Rules compliance, waste to wealth India, zero waste India, ESG sustainability, EcoLoop, CompoGen, CyberSoil, Fahaka, composting machines India"
        type="website"
      />
      
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-gold via-brand-gold-dark to-brand-gold z-50 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
      />
      
      {/* Sticky CTA Button - Enhanced with Glass Morphism */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: scrollProgress > 10 ? 1 : 0,
          y: scrollProgress > 10 ? 0 : 100
        }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/contact">
          <motion.div
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl shadow-brand-gold/40 flex items-center justify-center cursor-pointer overflow-hidden group"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-gold via-brand-gold-dark to-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            {/* Static ring - performance optimized */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-gold/60" />
            
            {/* Icon */}
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-brand-dark text-white text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Request Site Visit
            </div>
          </motion.div>
        </Link>
      </motion.div>
      
      {/* FULL SCREEN SLIDER SECTION */}
      <section className="relative h-screen overflow-hidden bg-black">
        {/* Ambient animated blobs + subtle noise for premium background */}
        <div className="ambient-blobs" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.3 }
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
            <SlideContent slide={slides[currentIndex]} currentImageIndex={currentImageIndex} setCurrentImageIndex={setCurrentImageIndex} />
          </motion.div>
        </AnimatePresence>

        {/* CONTROLS - Hidden on small mobile, visible on tablet+ */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 md:left-6 lg:left-8 z-20 hidden sm:block">
            <button 
                onClick={() => paginate(-1)} 
                className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-white/10 touch-manipulation"
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:-translate-x-1 transition-transform duration-200" />
            </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-6 lg:right-8 z-20 hidden sm:block">
            <button 
                onClick={() => paginate(1)} 
                className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-white/10 touch-manipulation"
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

      <GovernmentMandate />
      <ImpactStats />

      {/* Our Expertise Section - Full Width */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-brand-light border-t border-gray-200">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-brand-gold"></div>
              <span className="text-brand-gold font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-brand-dark mb-5 uppercase">German Engineering. <span className="text-brand-olive-dark">Indian Innovation.</span></h2>
            <div className="space-y-3 text-brand-dark leading-relaxed">
              <p>Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable technology.</p>
              <p>Leveraging <strong>German engineering</strong> principles, we developed a suite of Organic Waste Composters (OWC) that offer superior efficiency and durability.</p>
              <p>Today, with over <strong>500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" mission.</p>
            </div>
            <div className="mt-6">
              <Link to="/contact" className="inline-block">
                <div className="relative overflow-hidden px-6 py-3.5 border-2 border-brand-gold-dark rounded-lg hover:shadow-lg">
                  <div className="absolute inset-0 bg-brand-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                  <span className="relative z-10 text-sm font-bold uppercase">Read More</span>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Flow Section - Full Width */}
      <ProcessFlow />

      {/* Mission Grid Section - Full Width */}
      <MissionGrid />

      {/* Partners and Testimonials Section */}
      <PartnersSection />
    </>
  );
};