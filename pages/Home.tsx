import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { GlassButton } from '../components/ui/GlassButton';
import { FloatingCard, AnimatedIcon, GlassCard } from '../components/ui/AnimatedComponents';
import { ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Zap, ShieldCheck, Recycle, Target, Globe, Award, Box as BoxIcon, Clock, Settings, Battery, Leaf, Check, X, Building2, Scale, Flame, Layers, CloudFog, RefreshCw, FileText, TrendingUp, CheckCircle, Factory, Briefcase, Rocket, ArrowRight, Mail, Sparkles, Package, Timer, Shield, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnersSection from '../components/PartnersSection';
import { SEO, addSchemaToPage, generateFAQSchema } from '../components/SEO';
import { GovernmentMandate, BWGInfo, ImpactStats, ProcessFlow, MissionGrid } from '../components/Home';

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

// Premium Card Component
const Card: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
    <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 border border-gray-100 dark:border-gray-700 rounded-premium shadow-premium hover:shadow-premium-lg hover:border-brand-primary transition-all duration-400 group">
      <div className="text-brand-charcoal-light dark:text-gray-400 group-hover:text-brand-primary mb-4 sm:mb-6 transition-all duration-300 transform group-hover:scale-105 origin-left">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-heading font-bold text-brand-charcoal dark:text-white mb-3 sm:mb-4 uppercase tracking-wide leading-tight">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-normal text-base sm:text-lg">{text}</p>
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
            <AnimatePresence>
              <motion.img 
                key={currentImage}
                src={currentImage} 
                alt={slide.title} 
                className="absolute inset-0 w-full h-full object-cover object-center md:object-contain lg:object-cover"
                style={{
                  objectPosition: 'center center',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </AnimatePresence>
          )}
          {/* Dark overlay for text visibility on all devices */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45"></div>
        </div>

        {/* Content - Better mobile spacing */}
        <div className="relative z-10 max-w-5xl mx-auto pt-24 xs:pt-28 sm:pt-32 md:pt-36 px-3 xs:px-4 flex-grow flex flex-col justify-center">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
           >
             {/* badge removed from slides */}
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-white mb-3 tracking-tight leading-none text-shadow-lg">
               {slide.title}
             </h1>
             <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white mb-6 sm:mb-8 uppercase tracking-wide text-shadow-md">
               {slide.subtitle}
             </p>
             <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium px-4 text-shadow-md">
               Breaking the barriers of organic waste. <br className="hidden sm:block"/>
               Processing <span className="font-semibold text-white">Food, Plastics, and Sanitary Waste</span> into sterile resources.
             </p>
             
             <Link to="/fahaka" className="inline-block">
               <GlassButton 
                 variant="primary" 
                 size="xl" 
                 icon={Rocket}
                 glow={true}
                 className="w-full sm:w-auto"
                 asChild
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
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 touch-manipulation cursor-pointer ${
                    idx === currentImageIndex 
                      ? 'w-6 sm:w-8 bg-brand-gold' 
                      : 'w-1.5 sm:w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                  type="button"
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

  const backgroundClass = currentImage ? 'bg-transparent' : (isDark ? 'bg-brand-dark' : 'bg-brand-cream');

  return (
    <div className={`relative w-full h-full flex flex-col justify-between ${backgroundClass}`}>
       {/* Background Image with Slideshow + Parallax - Mobile Optimized */}
       <div className="absolute inset-0 z-0">
        {currentImage && (
          <AnimatePresence>
            <motion.img 
              key={currentImage}
              src={currentImage} 
              alt={slide.title} 
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{
                objectPosition: 'center center',
                transform: 'translateZ(0)', // Force GPU acceleration
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                opacity: { duration: 0.6, ease: "easeInOut" }
              }}
            />
          </AnimatePresence>
        )}
        {/* Static ambient glow effect - performance optimized */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 50%)'
          }}
        />
        {/* Dark overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45"></div>
      </div>

      {/* Header Content - Mobile Optimized Spacing */}
      <div className={`relative z-20 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pt-20 xs:pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 text-center`}>
        <div
           className="max-w-6xl mx-auto"
           style={{ 
             WebkitFontSmoothing: 'antialiased',
             WebkitTextSizeAdjust: '100%',
             transform: 'translate3d(0,0,0)',
             isolation: 'isolate',
             opacity: 1,
             visibility: 'visible'
           }}
        >
            {/* badge removed from slides */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-extrabold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight leading-[1.05] xs:leading-[1.1] sm:leading-tight px-1 xs:px-2 md:px-4 text-shadow-lg">
            {slide.title}
          </h1>
          <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wide sm:tracking-wider text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 px-1 xs:px-2 md:px-4 leading-snug text-shadow-md">
            {slide.subtitle}
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-5xl mx-auto leading-relaxed md:leading-loose font-medium px-3 xs:px-4 sm:px-6 md:px-8 text-shadow-md">
            {slide.description}
          </p>
        </div>
      </div>

      {/* Footer Specs & CTA - Mobile Optimized */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Visual Proof Blocks - Premium Glass Morphism Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full lg:flex-1 text-white">
            {slide.specs?.map((spec, idx) => (
              <motion.div 
                key={idx} 
                className="relative flex flex-col bg-black/50 rounded-lg xs:rounded-xl p-2.5 xs:p-3 sm:p-4 border border-white/20 hover:border-brand-gold/60 hover:bg-black/60 transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-xl hover:shadow-brand-gold/20"
                style={{ willChange: 'transform' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -2, transition: { duration: 0.2 } }}
              >
                {/* Icon */}
                <motion.div 
                  className="text-2xl xs:text-3xl sm:text-4xl mb-2 relative z-10 text-brand-primary drop-shadow-lg"
                >
                  {getSpecIcon(spec.label)}
                </motion.div>
                
                {/* Value */}
                <div className="flex items-baseline gap-1 relative z-10 mb-1 text-shadow-sm">
                   <span className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold leading-none text-white group-hover:text-brand-primary transition-colors duration-300">{spec.value}</span>
                   {spec.unit && <span className="text-xs xs:text-sm font-semibold text-brand-primary group-hover:text-white">{spec.unit}</span>}
                </div>
                
                {/* Label */}
                <span className="text-[10px] xs:text-xs sm:text-sm font-semibold uppercase tracking-wider relative z-10 text-white group-hover:text-brand-primary transition-colors text-shadow-sm">{spec.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Buttons - Premium Glass Morphism CTAs */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-3.5 sm:gap-4 w-full lg:w-auto lg:flex-shrink-0 lg:self-end">
             <Link to="/contact" className="w-full xs:flex-1 lg:w-auto lg:min-w-[200px]">
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight}
                  glow={true}
                  className="w-full h-full"
                  asChild
                >
                  Order Now
                </GlassButton>
            </Link>
            
            <Link to={`/owc#${slide.id}`} className="w-full xs:flex-1 lg:w-auto lg:min-w-[200px]">
                <GlassButton 
                  variant="glass" 
                  size="lg" 
                  icon={Settings}
                  className="w-full h-full"
                  asChild
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
                className={`rounded-full transition-all duration-300 ease-in-out touch-manipulation cursor-pointer min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center p-1.5 xs:p-2 active:scale-90 ${
                  idx === currentImageIndex 
                    ? 'scale-110'
                    : 'scale-100 hover:scale-105'
                }`}
                aria-label={`View image ${idx + 1}`}
                type="button"
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [imageIndices, setImageIndices] = useState<number[]>(slides.map(() => 0));

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

  // Track which slide is visible using IntersectionObserver
  useEffect(() => {
    const slidesEl = document.querySelectorAll('[data-slide]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setCurrentIndex(index);

            window.dispatchEvent(
              new CustomEvent('solwaste-slide-change', {
                detail: { isDark: slides[index].isDark }
              })
            );
          }
        });
      },
      { threshold: 0.6 }
    );

    slidesEl.forEach(slide => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  const setCurrentImageIndex = (index: number) => {
    setImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[currentIndex] = index;
      return newIndices;
    });
  };

  // Add FAQ schema for SEO
  useEffect(() => {
    const faqSchema = generateFAQSchema([
      {
        question: "What is a Bulk Waste Generator (BWG) under SWM Rules 2026?",
        answer: "Under SWM Rules 2026 effective from April 1, 2026, Bulk Waste Generators (BWGs) include facilities with built-up area of 20,000 sq.m or more, OR water consumption of 40,000 litres/day or more, OR waste generation of 100 kg/day or more. BWGs must process organic waste on-site."
      },
      {
        question: "What composting solutions does Solwaste offer?",
        answer: "Solwaste offers four main composting solutions: EcoLoop (50-1000kg/day for hotels and societies), CompoGen (1.5-50 tons/day for industrial and municipal sectors), CyberSoil (2-10kg/day for offices), and Fahaka (large-scale industrial wet waste processing)."
      },
      {
        question: "How does on-site composting help with SWM Rules 2026 compliance?",
        answer: "On-site composting helps bulk waste generators comply with SWM Rules 2026 by processing organic waste at source, reducing landfill dependency, and meeting regulatory requirements. This prevents penalties and regulatory action while supporting ESG goals."
      },
      {
        question: "What industries can benefit from Solwaste composting solutions?",
        answer: "Hotels, gated communities, shopping malls, IT parks, hospitals, educational institutions, corporate offices, industrial facilities, and municipal corporations can all benefit from Solwaste's composting solutions tailored to their waste generation capacity."
      },
      {
        question: "What are the benefits of choosing Solwaste composting machines?",
        answer: "Solwaste composting machines offer zero odor with HEPA filtration, German engineering quality, IoT monitoring for real-time tracking, reduced waste management costs, SWM Rules 2026 compliance, ESG sustainability achievements, and proven ROI across 500+ installations."
      }
    ]);
    
    const schemaScript = addSchemaToPage(faqSchema);
    return () => {
      if (schemaScript && schemaScript.parentNode) {
        schemaScript.parentNode.removeChild(schemaScript);
      }
    };
  }, []);

  return (
    <>
      <SEO 
        title="Composting Solutions for Large Waste Generators in India"
        description="Solwaste provides composting solutions for bulk waste generators in India - hotels, malls, IT parks, hospitals & institutions. On-site waste management that reduces costs, ensures compliance with SWM Rules 2026 (Effective 1 April 2026), and supports ESG goals. BWGs include facilities with 20,000+ sq.m area, 40,000L/day water use, or 100kg/day waste. Process waste at source with proven German engineering. Zero landfill, maximum ROI."
        keywords="composting solutions for large waste generators in India, bulk waste generators, BWG, SWM Rules 2026, organic waste management India, on-site composting, hotel waste management, mall waste solutions, IT park composting, hospital waste management, institutional composting, waste to wealth India, zero waste India, ESG sustainability, EcoLoop, CompoGen, CyberSoil, Fahaka, composting machines India"
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
        className="fixed bottom-6 right-6 z-40 touch-manipulation"
        initial={{ opacity: 0, y: 100 }}
        animate={{ 
          opacity: scrollProgress > 10 ? 1 : 0,
          y: scrollProgress > 10 ? 0 : 100
        }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/contact" className="block">
          <motion.div
            className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-2xl shadow-brand-gold/40 flex items-center justify-center cursor-pointer overflow-hidden group touch-manipulation"
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
      <section className="relative h-screen overflow-hidden" data-hero-section>
        {/* Ambient animated blobs + subtle noise for premium background */}
        <div className="ambient-blobs" aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Native Horizontal Scroll with Snap */}
        <div
          className="
            hero-scroll
            h-full
            w-full
            overflow-x-auto
            overflow-y-hidden
            flex
            snap-x
            snap-mandatory
            scroll-smooth
          "
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              data-slide
              data-index={index}
              className="
                h-screen
                w-screen
                flex-shrink-0
                snap-start
              "
            >
              <SlideContent
                slide={slide}
                currentImageIndex={imageIndices[index]}
                setCurrentImageIndex={setCurrentImageIndex}
              />
            </div>
          ))}
        </div>

        {/* CONTROLS - Hidden on small mobile, visible on tablet+ */}
        <div className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-4 md:left-6 lg:left-8 z-20 hidden sm:block">
            <button 
                onClick={() => {
                  const targetIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
                  document.querySelector(`[data-index="${targetIndex}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }} 
                className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-white/10 touch-manipulation cursor-pointer"
                aria-label="Previous slide"
                type="button"
            >
                <ChevronLeft size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:-translate-x-1 transition-transform duration-200" />
            </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-6 lg:right-8 z-20 hidden sm:block">
            <button 
                onClick={() => {
                  const targetIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
                  document.querySelector(`[data-index="${targetIndex}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                }} 
                className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-white/10 touch-manipulation cursor-pointer"
                aria-label="Next slide"
                type="button"
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
                        document.querySelector(`[data-index="${idx}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                    }}
                    className={`min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center p-1.5 xs:p-2 rounded-full transition-all duration-300 ease-in-out touch-manipulation active:scale-90 cursor-pointer ${idx === currentIndex ? 'scale-110' : 'scale-100 hover:scale-105'}`}
                    aria-label={`Go to slide ${idx + 1}: ${slides[idx].title}`}
                    aria-current={idx === currentIndex ? 'true' : 'false'}
                    type="button"
                 >
                    <span className={`block rounded-full transition-all duration-300 ${idx === currentIndex ? 'h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-10 xs:w-12 sm:w-14 md:w-18 lg:w-20 bg-brand-gold shadow-lg shadow-brand-gold/50' : 'h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-1.5 xs:w-2 sm:w-2.5 md:w-3 bg-white/40 hover:bg-white/70 active:bg-white'}`}></span>
                 </button>
             ))}
        </div>
      </section>

      <GovernmentMandate />
      <BWGInfo />
      <ImpactStats />

      {/* Our Expertise Section - Full Width */}
      <section className="py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-brand-light border-t border-gray-200">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image - Shows first on mobile, second on desktop */}
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200">
                <img 
                  src="/about.webp" 
                  alt="German Engineering Indian Innovation"
                  className="h-64 sm:h-80 lg:h-96 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-800 backdrop-blur-xl border-2 border-brand-primary px-4 py-3 sm:px-6 sm:py-4 rounded-premium-lg shadow-premium-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-brand-primary font-heading font-bold text-sm sm:text-base uppercase tracking-wide">
                  500+ Installations
                </div>
              </motion.div>
            </motion.div>

            {/* Text - Shows second on mobile, first on desktop */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }} 
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-16 bg-brand-primary rounded-full"></div>
                <span className="text-brand-primary font-semibold uppercase tracking-wide text-sm">Our Expertise</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-6 leading-tight">
                German Engineering. <span className="text-brand-olive">Indian Innovation.</span>
              </h2>
              <div className="space-y-4 text-brand-charcoal-light dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable technology.</p>
                <p>Leveraging <strong className="font-semibold text-brand-charcoal dark:text-white">German engineering</strong> principles, we developed a suite of Organic Waste Composters (OWC) that offer superior efficiency and durability.</p>
                <p>Today, with over <strong className="font-semibold text-brand-charcoal dark:text-white">500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" mission.</p>
              </div>
            </motion.div>
          </div>
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