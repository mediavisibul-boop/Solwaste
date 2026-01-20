import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, Recycle, Target, Globe, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    images: ["/ecoloop.png", "/ecoloop2.png", "/ecoloop3.png"], // Multiple images for slideshow
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
    image: "/compogen.png",
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
    image: "/cybersoil.png",
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
    image: "https://www.transparenttextures.com/patterns/carbon-fibre.png",
    isDark: true, // Navbar should be White
    badge: "Innovation Lab"
  }
];

// About Section Component with Touch of Grey
const Card: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
    <div className="bg-white p-8 border border-gray-100 shadow-sm hover:border-brand-gold hover:shadow-xl transition-all duration-500 group rounded-sm">
      <div className="text-gray-400 group-hover:text-brand-gold mb-6 transition-colors duration-300 transform group-hover:scale-110 origin-left">{icon}</div>
      <h3 className="text-2xl font-heading font-bold text-brand-brown mb-4 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-700 leading-relaxed font-normal text-lg">{text}</p>
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
    return (
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-brand-dark text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-gold/20 to-brand-dark z-0"></div>

        <div className="relative z-10 max-w-5xl pt-12">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.3 }}
           >
             <div className="inline-block border border-brand-gold/50 bg-brand-gold/10 backdrop-blur-md rounded-full px-6 py-2 text-brand-gold font-bold uppercase tracking-widest text-xs mb-8 shadow-[0_0_15px_rgba(190,215,84,0.4)]">
               {slide.badge}
             </div>
             <h1 className="text-7xl md:text-[9rem] font-heading font-black text-white mb-2 tracking-tighter leading-none mix-blend-overlay">
               {slide.title}
             </h1>
             <p className="text-3xl md:text-5xl font-heading font-bold text-gray-200 mb-8 uppercase tracking-widest">
               {slide.subtitle}
             </p>
             <p className="text-gray-200 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
               Breaking the barriers of organic waste. <br/>
               Processing <span className="font-bold text-white">Food, Plastics, and Sanitary Waste</span> into sterile resources.
             </p>

             <Link to="/fahaka">
               <Button className="bg-brand-gold text-white border-brand-gold hover:bg-white hover:text-brand-gold py-4 px-12 text-xl shadow-2xl shadow-brand-gold/20">
                 Explore Fahaka
               </Button>
             </Link>
           </motion.div>
        </div>
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
       {/* Background Image with Slideshow */}
       <div className="absolute inset-0 z-0">
        {currentImage && (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={slide.title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onError={(e) => console.error('Image failed to load:', currentImage, e)}
              onLoad={() => console.log('Image loaded:', currentImage)}
            />
          </AnimatePresence>
        )}
        {/* Subtle black fade overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>
        {/* Light tinted overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-brand-dark/20 via-transparent to-brand-dark/30' : 'bg-gradient-to-b from-white/20 via-transparent to-white/30'}`}></div>
      </div>

      {/* Header Content */}
      <div className={`relative z-10 container mx-auto px-6 pt-36 text-center`}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
            {slide.badge && (
              <span className={`inline-block py-2 px-6 mb-6 text-xs font-bold uppercase tracking-[0.2em] border ${isDark ? 'border-brand-gold text-brand-gold bg-brand-dark/60' : 'border-brand-olive-dark text-brand-olive-dark bg-white/60'} backdrop-blur-sm rounded-sm`}>
              {slide.badge}
            </span>
          )}
          <h1 className={`text-6xl md:text-8xl font-heading font-bold ${textColor} mb-4 tracking-tight shadow-sm`}>
            {slide.title}
          </h1>
          <h2 className={`text-2xl md:text-3xl font-bold uppercase tracking-[0.2em] ${subColor} mb-8 opacity-90`}>
            {slide.subtitle}
          </h2>
          <p className={`text-xl md:text-2xl ${descColor} max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow-sm`}>
            {slide.description}
          </p>
        </motion.div>
      </div>

      {/* Footer Specs & CTA */}
      <div className="relative z-10 container mx-auto px-6 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          {/* Specs Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full md:w-auto ${hasBackgroundImage ? 'text-white' : (isDark ? 'text-white' : 'text-brand-brown')}`}>
            {slide.specs?.map((spec, idx) => (
              <div key={idx} className="flex flex-col border-l-4 border-brand-gold/50 pl-6">
                <div className="flex items-baseline">
                   <span className="text-3xl md:text-4xl font-heading font-bold">{spec.value}</span>
                   {spec.unit && <span className="text-sm font-bold text-brand-gold ml-1">{spec.unit}</span>}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest mt-2 ${hasBackgroundImage ? 'text-gray-300' : (isDark ? 'text-gray-300' : 'text-gray-600')}`}>{spec.label}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <Link to="/contact" className="w-full md:w-auto">
                <Button className={`w-full py-4 px-12 text-base shadow-xl ${isDark ? 'bg-white text-brand-dark hover:bg-brand-light border-transparent' : 'bg-brand-dark text-white hover:bg-brand-olive border-transparent'}`}>
                    Order Now
                </Button>
            </Link>
            <Link to="/owc" className="w-full md:w-auto">
                <Button variant={isDark ? 'white' : 'outline'} className={`w-full py-4 px-12 text-base backdrop-blur-sm ${!isDark && 'border-brand-olive-dark text-brand-olive-dark hover:bg-brand-olive hover:text-white'}`}>
                    Tech Specs
                </Button>
            </Link>
          </div>
        </div>

        {/* Image Slideshow Indicators */}
        {slide.images && slide.images.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {slide.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? `w-8 ${isDark ? 'bg-white' : 'bg-brand-dark'}`
                    : `w-2 ${isDark ? 'bg-white/30' : 'bg-brand-dark/30'}`
                }`}
                aria-label={`View image ${idx + 1}`}
              />
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

        {/* CONTROLS */}
        <div className="absolute top-1/2 left-4 z-20 hidden md:block">
            <button 
                onClick={() => paginate(-1)} 
                className="p-6 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95 group"
            >
                <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
            </button>
        </div>
        <div className="absolute top-1/2 right-4 z-20 hidden md:block">
            <button 
                onClick={() => paginate(1)} 
                className="p-6 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-95 group"
            >
                <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        {/* BOTTOM INDICATORS */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
             {slides.map((_, idx) => (
                 <button 
                    key={idx}
                    onClick={() => {
                        setDirection(idx > currentIndex ? 1 : -1);
                        setCurrentIndex(idx);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ease-in-out ${idx === currentIndex ? 'w-16 bg-brand-gold' : 'w-5 bg-white/30 hover:bg-white'}`}
                 />
             ))}
        </div>
      </section>

      {/* GOVERNMENT MANDATE SECTION */}
      <section className="bg-brand-dark py-24 relative overflow-hidden border-t border-gray-700">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-olive-dark/30 to-transparent pointer-events-none"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-8 uppercase leading-none">
                     Government <br/><span className="text-brand-gold">Mandate Ready</span>
                  </h2>
                  <p className="text-gray-300 text-xl mb-10 max-w-lg leading-relaxed font-normal">
                     100% Compliant with SWM Rules 2016 & NGT Orders. Don't risk penalties. Install a Solwaste system today.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-12">
                      <div>
                          <div className="text-5xl font-heading font-bold text-white mb-2">500+</div>
                          <div className="text-sm text-brand-gold font-bold uppercase tracking-widest">Active Sites</div>
                      </div>
                      <div>
                          <div className="text-5xl font-heading font-bold text-white mb-2">100%</div>
                          <div className="text-sm text-brand-gold font-bold uppercase tracking-widest">Legal Compliance</div>
                      </div>
                  </div>
                  <Link to="/contact">
                     <Button className="bg-brand-gold text-white border-brand-gold hover:bg-white hover:text-brand-gold py-5 px-10 text-base uppercase tracking-widest">
                        Get Compliance Audit
                     </Button>
                  </Link>
               </div>
               
               <div className="grid grid-cols-1 gap-6">
                  {[
                    { title: "SWM Rules 2016", desc: "Mandatory on-site processing for bulk generators (>100kg/day)." },
                    { title: "NGT Compliance", desc: "Adherence to National Green Tribunal guidelines to avoid heavy fines." },
                    { title: "Green Building", desc: "Earn LEED & GRIHA points for sustainable waste management." }
                  ].map((item, i) => (
                    <div key={i} className="p-10 border border-brand-gold-dark/50 hover:border-brand-gold transition-colors bg-brand-gold-dark/20 group">
                       <h3 className="text-2xl font-heading font-bold text-white mb-3 uppercase group-hover:text-brand-gold transition-colors">{item.title}</h3>
                       <p className="text-gray-300 text-lg leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* ABOUT SECTION (Touch of Grey Added) */}
      <section className="py-32 bg-brand-light border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div>
               <div className="flex items-center space-x-4 mb-6">
                  <div className="h-[3px] w-12 bg-brand-gold"></div>
                  <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-base">Our Expertise</span>
              </div>
              <h2 className="text-6xl font-heading font-bold text-brand-dark mb-8 uppercase leading-tight">German Engineering. <br/><span className="text-brand-olive-dark">Indian Innovation.</span></h2>
              <div className="space-y-6 text-brand-dark leading-relaxed text-xl font-normal">
                <p>
                  Solwaste was founded with a singular vision: to address the growing organic waste crisis in urban environments through reliable, scalable technology.
                </p>
                <p>
                  Leveraging <strong>German engineering</strong> principles, we developed a suite of Organic Waste Converters (OTC) and Biogas solutions that offer superior efficiency and durability.
                </p>
                <p>
                  Today, with over <strong>500 installations</strong> across commercial, institutional, and residential sectors, we are a trusted partner in India's journey towards the "Waste to Wealth" mission.
                </p>
              </div>
              <div className="mt-12">
                 <Link to="/contact">
                    <Button variant="outline" className="px-10 py-4 text-sm border-brand-gold-dark text-brand-gold-dark hover:border-brand-gold hover:bg-brand-gold hover:text-white uppercase tracking-widest font-bold">Read More</Button>
                 </Link>
              </div>
            </div>
            <div className="relative">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white z-0"></div>
                <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
                    alt="Engineering Team" 
                    className="shadow-2xl relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 border-b-8 border-brand-gold rounded-sm"
                />
               <div className="absolute -bottom-8 -left-8 w-64 h-64 border-l-8 border-b-8 border-brand-dark z-20 hidden md:block"></div>
            </div>
          </div>

          {/* Mission/Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card 
              icon={<Target size={48} />}
              title="Our Mission"
              text="To provide robust, zero-landfill solutions that empower communities to manage their waste at the source, reducing environmental impact and generating value."
            />
            <Card 
              icon={<Globe size={48} />}
              title="Vision 2047"
              text="Supporting India's goal for sustainable cities by creating a circular economy where organic waste is universally viewed as a resource for energy and soil health."
            />
            <Card 
              icon={<Award size={48} />}
              title="Quality Promise"
              text="We commit to German-engineered precision, ensuring our machines deliver maximum uptime, minimal maintenance, and optimal output quality."
            />
          </div>
        </div>
      </section>
    </>
  );
};