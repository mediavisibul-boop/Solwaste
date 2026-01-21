import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/Button';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSlideDark, setIsSlideDark] = useState(true); // State for Home slide color
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    // Listen for slide change events from Home page
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

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
    // Reset to dark nav (white text) by default when leaving home
    if (!isHomePage) {
        setIsSlideDark(false); 
    }
  }, [location, isHomePage]);

  // Dynamic Styles
  const isNavTransparent = isHomePage && !isScrolled;
  
  // Text Color Logic
  const textColorClass = isNavTransparent 
    ? (isSlideDark ? 'text-white' : 'text-brand-brown') 
    : 'text-brand-brown';

  return (
    <div className="flex flex-col min-h-screen font-sans overflow-x-hidden bg-gray-50">
      {/* Global Animations Style Block */}
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
      
      {/* Main Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
            isNavTransparent
            ? 'bg-transparent py-4 sm:py-5 md:py-6 lg:py-8' 
            : 'bg-white/95 backdrop-blur-md shadow-sm py-3 sm:py-4 border-b border-gray-200' 
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group touch-manipulation">
            <img src="/logo.png" alt="Solwaste Logo" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain" />
            <div className="flex flex-col leading-none select-none">
              <span className={`text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tighter transition-colors duration-300 ${textColorClass}`}>
                SOL<span className="text-brand-gold">WASTE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
            
            <Link
                to="/owc"
                className={`font-heading font-bold text-sm lg:text-base uppercase tracking-[0.15em] hover:text-brand-gold transition-colors duration-300 ${textColorClass}`}
            >
                OWC
            </Link>

            {/* Fahaka Special Button-Link */}
             <Link
                to="/fahaka"
                className={`font-heading font-bold text-sm lg:text-base uppercase tracking-[0.15em] transition-all duration-300 flex items-center group ${textColorClass}`}
            >
                <span className={`mr-2 px-2 py-0.5 text-[10px] font-bold rounded bg-brand-gold text-white badge-blink border border-brand-gold transition-all`}>NEW</span>
                <span className="group-hover:text-brand-gold transition-colors">Fahaka</span>
            </Link>

            <Link to="/contact">
               <Button 
                variant={isNavTransparent && isSlideDark ? 'white' : 'primary'} 
                className="px-6 lg:px-8 py-2 lg:py-2.5 text-xs uppercase tracking-widest font-heading shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 touch-manipulation"
               >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors duration-300 touch-manipulation ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-6 sm:p-8 space-y-5 sm:space-y-6 text-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold transition-colors py-2 touch-manipulation">Home</Link>
            <Link to="/owc" onClick={() => setIsMobileMenuOpen(false)} className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold transition-colors py-2 touch-manipulation">OWC Machines</Link>
            <Link to="/fahaka" onClick={() => setIsMobileMenuOpen(false)} className="text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-brand-gold bg-brand-light py-3 rounded touch-manipulation">Fahaka <span className="text-xs bg-brand-gold text-white px-1.5 py-0.5 rounded ml-1 badge-blink">NEW</span></Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="touch-manipulation">
                <Button className="w-full uppercase font-heading py-3 sm:py-4 text-base sm:text-lg touch-manipulation">Get Quote</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Industry Level Footer - Updated Spacing & Contrast */}
      <footer className="relative bg-brand-dark text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 overflow-hidden border-t border-gray-800">
        
        {/* Marquee Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] z-0 flex items-center select-none">
             <div className="whitespace-nowrap animate-marquee flex">
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
             </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-12 sm:mb-16 border-b border-gray-800 pb-10 sm:pb-12">
            
            {/* Column 1: Contact Info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                 <a href="tel:+919429691308" className="block text-white font-heading font-bold text-xl sm:text-2xl tracking-wide hover:text-brand-gold transition-colors">+91-9429691308</a>
                 <a href="mailto:hello@solwaste.co" className="block text-white font-heading font-bold text-xl sm:text-2xl tracking-wide hover:text-brand-gold transition-colors break-all">hello@solwaste.co</a>
                 <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-4 font-medium">
                   Worli, 1st floor, 264-265, <br/>
                   Dr. Annie Besant Road, <br/>
                   Worli, Mumbai, MH 400025
                 </p>
              </div>
              <div className="flex space-x-4 sm:space-x-5 pt-2">
                 {[Instagram, X, Linkedin, Youtube].map((Icon, i) => (
                     <a key={i} href="#" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:-translate-y-1 duration-300 touch-manipulation" aria-label={`Social media link ${i + 1}`}>
                         <Icon size={22} className="sm:w-6 sm:h-6" />
                     </a>
                 ))}
              </div>
            </div>

            {/* Column 2 - Left Row */}
            <div className="lg:pl-8">
              <ul className="space-y-2 sm:space-y-3 font-heading font-medium text-base sm:text-lg text-gray-400">
                {[
                  { name: 'Blog', path: '#' },
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

            {/* Column 3 - Middle Row */}
            <div>
              <ul className="space-y-2 sm:space-y-3 font-heading font-medium text-base sm:text-lg text-gray-400">
                {[
                  { name: 'Case Studies', path: '/case-studies' },
                  { name: 'Gallery', path: '#' },
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

             {/* Column 4 - Right Row */}
             <div>
              <ul className="space-y-2 sm:space-y-3 font-heading font-medium text-base sm:text-lg text-gray-400">
                {[
                  { name: 'Press and Media', path: '#' },
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
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm font-medium gap-4">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
               <a href="#" className="hover:text-white transition-colors touch-manipulation py-1">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors touch-manipulation py-1">Accessibility Statement</a>
               <a href="#" className="hover:text-white transition-colors touch-manipulation py-1">Sitemap</a>
            </div>
            <div className="tracking-wide text-center">
               &copy; 2026 Solwaste. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};