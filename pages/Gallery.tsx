import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from '../components/Icons';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ui/ScrollReveal';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    "/gallery/img1.webp",
    "/gallery/img2.webp",
    "/gallery/img3.webp",
    "/gallery/img4.webp",
    "/gallery/img5.webp",
    "/gallery/img6.webp",
    "/gallery/img7.webp",
    "/gallery/img8.webp",
    "/gallery/img9.webp",
    "/gallery/img10.webp",
    "/gallery/img11.webp",
    "/gallery/img12.webp",
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateImage('prev');
      if (e.key === 'ArrowRight') navigateImage('next');
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage]);

  return (
    <div>
      <SEO 
        title="Gallery - Solwaste Installations & Projects"
        description="Explore Solwaste's successful waste management installations and projects across India. View our innovative OWC machines and solutions in action."
        keywords="gallery, installations, projects, waste management photos, OWC installations, composting machines, solwaste projects"
        type="website"
      />
      
      {/* Header - Mobile optimized */}
      <div className="bg-brand-dark text-white min-h-screen flex items-center relative overflow-hidden">
        {/* Background image grid */}
        <div className="absolute inset-0 grid grid-cols-2 xs:grid-cols-3 gap-1 opacity-20">
          {galleryImages.slice(0, 3).map((img, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <img 
                src={img} 
                alt={`Background ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-olive-dark/90 to-brand-dark/95"></div>
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 max-w-6xl text-center relative z-10 py-12 xs:py-14 sm:py-16 md:py-18 lg:py-20">
          <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.3 }}>
            <span className="inline-block py-1.5 xs:py-2 px-4 xs:px-5 sm:px-6 mb-3 xs:mb-4 sm:mb-5 md:mb-6 text-[10px] xs:text-xs sm:text-sm font-bold uppercase tracking-widest border-2 border-brand-gold text-brand-gold bg-brand-dark/70 backdrop-blur-md rounded-lg">
              Our Work
            </span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
              Project Gallery
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2" style={{ textShadow: '0 2px 15px rgba(0,0,0,0.5)' }}>
              Showcasing our successful installations and innovative waste management solutions across India
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Gallery Grid - Mobile optimized */}
      <div className="bg-white py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 max-w-7xl">
          
          {/* Section Title */}
          <ScrollReveal variant="fadeInUp" viewport={{ once: true, amount: 0.4 }}>
            <div className="text-center mb-8 xs:mb-9 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-charcoal dark:text-white mb-2 xs:mb-3 sm:mb-4">
              Installations & Projects
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              A glimpse into our successful deployments and impact across various facilities
            </p>
            </div>
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {galleryImages.slice().reverse().map((image, index) => {
              const originalIndex = galleryImages.length - 1 - index;
              return (
              <motion.div
                key={originalIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-square bg-gray-100"
                onClick={() => openLightbox(originalIndex)}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${originalIndex + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
              );
            })}
          </div>

          {/* Info Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 xs:mt-11 sm:mt-12 md:mt-14 lg:mt-16 text-center"
          >
            <p className="text-xs xs:text-sm sm:text-base text-gray-500 px-2">
              Click on any image to view in full size • Use arrow keys to navigate
            </p>
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button - Touch optimized */}
            <button
              onClick={closeLightbox}
              className="absolute top-2 xs:top-3 sm:top-4 right-2 xs:right-3 sm:right-4 z-50 min-w-[44px] min-h-[44px] p-2 xs:p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="Close"
            >
              <X size={20} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Previous Button - Touch optimized */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('prev');
              }}
              className="absolute left-2 xs:left-3 sm:left-4 z-50 min-w-[44px] min-h-[44px] p-2 xs:p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Next Button - Touch optimized */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage('next');
              }}
              className="absolute right-2 xs:right-3 sm:right-4 z-50 min-w-[44px] min-h-[44px] p-2 xs:p-2.5 sm:p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all hover:scale-110 active:scale-95 touch-manipulation"
              aria-label="Next"
            >
              <ChevronRight size={20} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={galleryImages[selectedImage]}
                alt={`Gallery image ${selectedImage + 1}`}
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Image Counter - Mobile optimized */}
              <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 right-2 xs:right-3 sm:right-4 bg-black/60 backdrop-blur-sm px-3 xs:px-4 py-1.5 xs:py-2 rounded-lg">
                <p className="text-white text-xs xs:text-sm font-semibold">
                  {selectedImage + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
