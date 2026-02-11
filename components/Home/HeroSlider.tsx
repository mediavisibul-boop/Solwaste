import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../../data/heroSlides';
import { SlideContent } from './SlideContent';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState<number[]>(slides.map(() => 0));

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

  // Auto-rotate images for each slide
  useEffect(() => {
    const currentSlide = slides[currentIndex];
    const imageCount = currentSlide.images?.length || 0;
    
    if (imageCount > 1) {
      const interval = setInterval(() => {
        setImageIndices(prev => {
          const newIndices = [...prev];
          newIndices[currentIndex] = (prev[currentIndex] + 1) % imageCount;
          return newIndices;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    const targetIndex = currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    document.querySelector(`[data-index="${targetIndex}"]`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };

  const handleNext = () => {
    const targetIndex = currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    document.querySelector(`[data-index="${targetIndex}"]`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };

  const goToSlide = (idx: number) => {
    document.querySelector(`[data-index="${idx}"]`)?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'nearest', 
      inline: 'start' 
    });
  };

  return (
    <section 
      className="relative overflow-hidden" 
      data-hero-section 
      style={{ 
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        maxWidth: '100vw',
        position: 'relative'
      }}
    >
      {/* Ambient animated blobs + subtle noise */}
      <div className="ambient-blobs" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      
      {/* Native Horizontal Scroll with Snap */}
      <div
        className="hero-scroll flex snap-x snap-mandatory scroll-smooth"
        style={{
          height: '100%',
          width: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
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
            className="flex-shrink-0 snap-start"
            style={{
              height: '100vh',
              width: '100vw',
              minWidth: '100vw',
              maxWidth: '100vw',
              margin: 0,
              padding: 0
            }}
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
          onClick={handlePrevious}
          className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-white/10 touch-manipulation cursor-pointer"
          aria-label="Previous slide"
          type="button"
        >
          <ChevronLeft size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:-translate-x-1 transition-transform duration-200" />
        </button>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-4 md:right-6 lg:right-8 z-20 hidden sm:block">
        <button 
          onClick={handleNext}
          className="min-w-[56px] min-h-[56px] md:min-w-[64px] md:min-h-[64px] lg:min-w-[72px] lg:min-h-[72px] p-3 md:p-4 lg:p-5 bg-white/15 hover:bg-white/25 active:bg-white/30 text-white rounded-full backdrop-blur-lg border-2 border-white/20 hover:border-white/30 transition-all duration-300 hover:scale-110 active:scale-95 group shadow-2xl shadow-white/10 touch-manipulation cursor-pointer"
          aria-label="Next slide"
          type="button"
        >
          <ChevronRight size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      {/* BOTTOM INDICATORS */}
      <div className="absolute bottom-4 xs:bottom-5 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
        {slides.map((slide, idx) => (
          <button 
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`min-w-[40px] min-h-[40px] xs:min-w-[44px] xs:min-h-[44px] flex items-center justify-center p-1.5 xs:p-2 rounded-full transition-all duration-300 ease-in-out touch-manipulation active:scale-90 cursor-pointer ${idx === currentIndex ? 'scale-110' : 'scale-100 hover:scale-105'}`}
            aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
            aria-current={idx === currentIndex ? 'true' : 'false'}
            type="button"
          >
            <span className={`block rounded-full transition-all duration-300 ${idx === currentIndex ? 'h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-10 xs:w-12 sm:w-14 md:w-18 lg:w-20 bg-gray-900 shadow-lg border border-gray-700' : 'h-1.5 xs:h-2 sm:h-2.5 md:h-3 w-1.5 xs:w-2 sm:w-2.5 md:w-3 bg-white/40 hover:bg-white/70 active:bg-white'}`}></span>
          </button>
        ))}
      </div>
    </section>
  );
};
