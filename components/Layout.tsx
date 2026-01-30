import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { MobileMenu } from './MobileMenu';
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube, X } from './Icons';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSlideDark, setIsSlideDark] = useState(true);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleSlideChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.isDark !== 'undefined') {
        setIsSlideDark(customEvent.detail.isDark);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('solwaste-slide-change', handleSlideChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('solwaste-slide-change', handleSlideChange);
    };
  }, []);

  // IntersectionObserver to detect hero section visibility
  useEffect(() => {
    if (!isHomePage) {
      setIsHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hero is visible if more than 20% of it is in viewport
        setIsHeroVisible(entry.isIntersecting && entry.intersectionRatio > 0.2);
      },
      {
        threshold: [0, 0.2, 0.5, 1],
        rootMargin: '-80px 0px 0px 0px' // Account for header height
      }
    );

    // Find hero section - it should have an id or specific class
    const heroSection = document.querySelector('[data-hero-section]') || 
                        document.querySelector('.hero-section') ||
                        document.querySelector('main > div:first-child');
    
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, [isHomePage, location]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    
    // Handle hash-based scrolling for in-page navigation
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
    
    if (!isHomePage) {
        setIsSlideDark(false); 
    }
  }, [location.hash, isHomePage]);

  const isNavTransparent = isHomePage && isHeroVisible;
  
  const textColorClass = isNavTransparent 
    ? (isSlideDark ? 'text-white' : 'text-brand-brown') 
    : 'text-brand-brown';

  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-hidden max-w-full bg-gray-50">
      <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee {
                will-change: transform;
                animation: marquee 40s linear infinite;
            }
            @keyframes blink-glow {
                0%, 100% { opacity: 1; box-shadow: 0 0 5px rgba(190, 215, 84, 0.5); }
                50% { opacity: 0.6; box-shadow: 0 0 15px rgba(190, 215, 84, 0.9); }
            }
            .badge-blink {
                animation: blink-glow 1.5s ease-in-out infinite;
            }
      `}</style>
      
      <Navigation
        isNavTransparent={isNavTransparent}
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        textColorClass={textColorClass}
      />

      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="flex-grow">
        {children}
      </main>

      <footer className="relative bg-brand-dark text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-gray-800">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] z-0 flex items-center select-none">
             <div className="whitespace-nowrap animate-marquee flex">
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
             </div>
        </div>

        <div className="container mx-auto px-4 xs:px-5 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 lg:gap-10 xl:gap-12 mb-10 sm:mb-12 md:mb-14 lg:mb-16 border-b border-gray-800 pb-8 sm:pb-10 md:pb-12 lg:pb-14">
            
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                 <a href="tel:+919429691308" className="block text-white font-heading font-bold text-xl sm:text-2xl tracking-wide hover:text-brand-gold transition-colors">+91-9429691308</a>
                 <a href="mailto:hello@solwaste.co" className="block text-white font-heading font-bold text-xl sm:text-2xl tracking-wide hover:text-brand-gold transition-colors break-all">hello@solwaste.co</a>
                 <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 font-medium">
                   Worli, 1st floor, 264-265, <br />
                   Dr. Annie Besant Road, <br />
                   Worli, Mumbai, MH 400025
                 </p>
              </div>
              <div className="flex space-x-4 sm:space-x-5 pt-2">
                 <a href="https://www.instagram.com/solwaste?igsh=MXVsMXVpMmZkOWh3Yg==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:-translate-y-1 duration-300 touch-manipulation" aria-label="Instagram">
                     <Instagram size={22} className="sm:w-6 sm:h-6" />
                 </a>
                 <a href="https://x.com/SolwasteCo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:-translate-y-1 duration-300 touch-manipulation" aria-label="X (Twitter)">
                     <X size={22} className="sm:w-6 sm:h-6" />
                 </a>
                 <a href="https://www.linkedin.com/company/solwaste/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:-translate-y-1 duration-300 touch-manipulation" aria-label="LinkedIn">
                     <Linkedin size={22} className="sm:w-6 sm:h-6" />
                 </a>
              </div>
            </div>

            <div className="lg:pl-8">
              <ul className="space-y-2 sm:space-y-3 font-heading font-medium text-base sm:text-lg text-gray-400">
                {[
                  { name: 'Sustainability', path: '/sustainability' },
                  { name: 'Vision 2047', path: '/vision-2047' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                        to={item.path} 
                        className="hover:text-white transition-colors block touch-manipulation py-1"
                    >
                        {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-2 sm:space-y-3 font-heading font-medium text-base sm:text-lg text-gray-400">
                {[
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Contact', path: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link 
                        to={item.path} 
                        className="hover:text-white transition-colors block touch-manipulation py-1"
                    >
                        {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

             <div>
              <ul className="space-y-2 sm:space-y-3 font-heading font-medium text-base sm:text-lg text-gray-400">
                {[
                  { name: 'Press and Media', path: '/press-media' },
                  { name: 'Partner with us', path: '/partner' },
                  { name: 'Careers', path: '/careers' }
                ].map((item) => (
                  <li key={item.name}>
                     <Link 
                        to={item.path} 
                        className="hover:text-white transition-colors block touch-manipulation py-1"
                     >
                        {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs sm:text-sm font-medium gap-3 xs:gap-4 sm:gap-5 md:gap-6">
            <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 md:gap-6">
               <Link to="/privacy-policy" className="hover:text-brand-gold transition-colors touch-manipulation py-1">Privacy Policy</Link>
               <Link to="/accessibility-statement" className="hover:text-brand-gold transition-colors touch-manipulation py-1">Accessibility Statement</Link>
               <Link to="/sitemap" className="hover:text-brand-gold transition-colors touch-manipulation py-1">Sitemap</Link>
            </div>
            <div className="tracking-wide text-center text-gray-400">
               &copy; 2026 Solwaste. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
