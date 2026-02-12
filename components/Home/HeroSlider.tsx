import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { slides } from '../../data/heroSlides';
import { SlideContent } from './SlideContent';

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageIndices, setImageIndices] = useState<number[]>(
    slides.map(() => 0)
  );

  // Track visible slide
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

  // Auto rotate images
  useEffect(() => {
    const currentSlide = slides[currentIndex];
    const imageCount = currentSlide.images?.length || 0;

    if (imageCount > 1) {
      const interval = setInterval(() => {
        setImageIndices(prev => {
          const updated = [...prev];
          updated[currentIndex] =
            (prev[currentIndex] + 1) % imageCount;
          return updated;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentIndex]);

  const scrollToIndex = (index: number) => {
    document
      .querySelector(`[data-index="${index}"]`)
      ?.scrollIntoView({
        behavior: 'smooth',
        inline: 'start'
      });
  };

  const handlePrevious = () => {
    const target =
      currentIndex - 1 < 0 ? slides.length - 1 : currentIndex - 1;
    scrollToIndex(target);
  };

  const handleNext = () => {
    const target =
      currentIndex + 1 >= slides.length ? 0 : currentIndex + 1;
    scrollToIndex(target);
  };

  return (
    <section
      className="relative min-h-screen w-screen overflow-hidden"
      data-hero-section
    >
      {/* Background Effects */}
      <div className="ambient-blobs pointer-events-none absolute inset-0" />
      <div className="noise-overlay pointer-events-none absolute inset-0" />

      {/* Horizontal Scroll Container */}
      <div className="hero-scroll flex snap-x snap-mandatory scroll-smooth w-full min-h-screen overflow-x-auto overflow-y-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            data-slide
            data-index={index}
            className="snap-start flex-shrink-0 w-screen min-h-screen flex"
          >
            {/* ❗ REMOVE h-full HERE */}
            <div className="flex-1 w-full">
              <SlideContent
                slide={slide}
                currentImageIndex={imageIndices[index]}
                setCurrentImageIndex={(imgIndex: number) => {
                  setImageIndices(prev => {
                    const updated = [...prev];
                    updated[index] = imgIndex;
                    return updated;
                  });
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 z-20 hidden sm:block">
        <button
          onClick={handlePrevious}
          className="w-16 h-16 bg-white/15 hover:bg-white/25 text-white rounded-full backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-6 z-20 hidden sm:block">
        <button
          onClick={handleNext}
          className="w-16 h-16 bg-white/15 hover:bg-white/25 text-white rounded-full backdrop-blur-lg border border-white/20 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className="w-12 h-12 flex items-center justify-center"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'h-2 w-16 bg-gray-900'
                  : 'h-2 w-2 bg-white/50'
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
