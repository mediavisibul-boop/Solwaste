import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GlassButton } from '../ui/GlassButton';
import { 
  Rocket, ArrowRight, Settings, Sparkles, Package, Timer, 
  Layers, Battery, Shield, ShieldCheck, Gauge, Zap 
} from 'lucide-react';
import { Slide } from '../../data/heroSlides';

interface SlideContentProps {
  slide: Slide;
  currentImageIndex: number;
  setCurrentImageIndex: (idx: number) => void;
}

// Visual proof icons for specs
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

export const SlideContent: React.FC<SlideContentProps> = ({ 
  slide, 
  currentImageIndex, 
  setCurrentImageIndex 
}) => {
  // FAHAKA LAYOUT
  if (slide.type === 'innovation') {
    const currentImage = slide.images ? slide.images[currentImageIndex] : undefined;

    return (
      <div className="relative w-full h-full flex flex-col justify-between text-center overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {currentImage && (
            <AnimatePresence>
              <motion.div 
                key={currentImage}
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${currentImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45"></div>
          
          {/* Image indicators */}
          {slide.images && slide.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
              {slide.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? 'h-2.5 w-10 bg-white shadow-lg'
                      : 'h-2.5 w-2.5 bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 py-24">
           <motion.div
             className="max-w-5xl mx-auto"
             initial="hidden"
             animate="visible"
             variants={{
               visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
               hidden: {}
             }}
           >
             <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }} className="overflow-hidden pb-[0.2em]">
               <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-extrabold text-white mb-3 tracking-tight leading-none text-shadow-lg">
                 {slide.title}
               </h1>
             </motion.div>
             <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }} className="overflow-hidden pb-[0.2em]">
               <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white mb-6 sm:mb-8 uppercase tracking-wide text-shadow-md">
                 {slide.subtitle}
               </p>
             </motion.div>
             <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }} className="overflow-hidden pb-[0.2em]">
               <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium text-shadow-md">
                 Breaking the barriers of organic waste. <br className="hidden sm:block"/>
                 Processing <span className="font-semibold text-white">Food, Plastics, and Sanitary Waste</span> into sterile resources.
               </p>
             </motion.div>
             
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
      </div>
    );
  }

  // STANDARD PRODUCT LAYOUT
  const currentImage = slide.images ? slide.images[currentImageIndex] : slide.image;
  const backgroundClass = currentImage ? 'bg-transparent' : 'bg-white';

  return (
    <div className={`relative w-full h-full flex flex-col justify-between ${backgroundClass}`}>
       {/* Background Image with Slideshow */}
       <div className="absolute inset-0 z-0">
        {currentImage && (
          <AnimatePresence>
            <motion.div 
              key={currentImage}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${currentImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 0.6, ease: "easeInOut" } }}
            />
          </AnimatePresence>
        )}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.12) 0%, transparent 50%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/25"></div>
        
        {/* Image indicators */}
        {slide.images && slide.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {slide.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentImageIndex
                    ? 'h-2.5 w-10 bg-white shadow-lg'
                    : 'h-2.5 w-2.5 bg-white/60 hover:bg-white/80'
                }`}
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Header Content */}
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
           initial="hidden"
           animate="visible"
           variants={{
             visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
             hidden: {}
           }}
        >
          <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }} className="overflow-hidden pb-[0.2em]">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading font-extrabold text-white mb-2 xs:mb-3 sm:mb-4 md:mb-5 lg:mb-6 tracking-tight leading-[1.05] xs:leading-[1.1] sm:leading-tight px-1 xs:px-2 md:px-4 text-shadow-lg">
              {slide.title}
            </h1>
          </motion.div>
          <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }} className="overflow-hidden pb-[0.2em]">
            <h2 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wide sm:tracking-wider text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-7 px-1 xs:px-2 md:px-4 leading-snug text-shadow-md">
              {slide.subtitle}
            </h2>
          </motion.div>
          <motion.div variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }} transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.6 }} className="overflow-hidden pb-[0.2em]">
            <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white max-w-5xl mx-auto leading-relaxed md:leading-loose font-medium text-shadow-md">
              {slide.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Specs & CTA */}
      <div className="relative z-10 container mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 pb-8 xs:pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
          {/* Visual Proof Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 xs:gap-4 sm:gap-4 md:gap-5 lg:gap-6 w-full lg:flex-1 text-white">
            {slide.specs?.map((spec, idx) => (
              <motion.div 
                key={idx} 
                className="relative flex flex-col items-center justify-between bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 md:p-5 lg:p-6 border-2 border-white/30 hover:border-white/80 hover:bg-white/15 transition-all duration-300 group overflow-hidden shadow-xl hover:shadow-2xl aspect-square"
                style={{ willChange: 'transform' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl relative z-10 text-white drop-shadow-lg flex-shrink-0"
                  whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                >
                  {getSpecIcon(spec.label)}
                </motion.div>
                
                <div className="flex flex-col items-center gap-0.5 relative z-10 flex-grow justify-center">
                   <div className="flex items-baseline gap-1 text-shadow-sm">
                     <span className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-heading font-extrabold leading-none text-white group-hover:scale-105 transition-transform duration-300">{spec.value}</span>
                     {spec.unit && <span className="text-xs xs:text-sm sm:text-base font-semibold text-white opacity-90">{spec.unit}</span>}
                   </div>
                   <span className="text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wide relative z-10 text-white text-center leading-tight opacity-90 mt-1">{spec.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-4 w-full lg:w-auto lg:flex-shrink-0 lg:self-end">
             <Link to="/contact" className="w-full xs:flex-1 lg:w-auto">
                <GlassButton 
                  variant="primary" 
                  size="lg" 
                  icon={ArrowRight}
                  glow={true}
                  className="w-full h-full min-h-[56px] sm:min-h-[64px] px-6 sm:px-8 lg:min-w-[220px] text-base sm:text-lg"
                  asChild
                >
                  Order Now
                </GlassButton>
            </Link>
            
            <Link to={`/owc#${slide.id}`} className="w-full xs:flex-1 lg:w-auto">
                <GlassButton 
                  variant="glass" 
                  size="lg" 
                  icon={Settings}
                  className="w-full h-full min-h-[56px] sm:min-h-[64px] px-6 sm:px-8 lg:min-w-[220px] text-base sm:text-lg"
                  asChild
                >
                  Tech Specs
                </GlassButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
