import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
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

  // Logo Container Logic
  const logoBgClass = isNavTransparent
    ? (isSlideDark ? 'bg-white text-brand-gold' : 'bg-brand-dark text-white')
    : 'bg-brand-gold text-white';

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
            ? 'bg-transparent py-6 md:py-8' 
            : 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-200' 
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className={`p-2 rounded-sm transition-colors duration-500 shadow-sm ${logoBgClass}`}>
              <Leaf size={24} fill="currentColor" />
            </div>
            <div className="flex flex-col leading-none select-none">
              <span className={`text-2xl md:text-3xl font-heading font-bold tracking-tighter transition-colors duration-300 ${textColorClass}`}>
                SOL<span className="text-brand-gold">WASTE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            
            <Link
                to="/owc"
                className={`font-heading font-bold text-base uppercase tracking-[0.15em] hover:text-brand-gold transition-colors duration-300 ${textColorClass}`}
            >
                OWC
            </Link>

            {/* Fahaka Special Button-Link */}
             <Link
                to="/fahaka"
                className={`font-heading font-bold text-base uppercase tracking-[0.15em] transition-all duration-300 flex items-center group ${textColorClass}`}
            >
                <span className={`mr-2 px-2 py-0.5 text-[10px] font-bold rounded bg-brand-gold text-white badge-blink border border-brand-gold transition-all`}>NEW</span>
                <span className="group-hover:text-brand-gold transition-colors">Fahaka</span>
            </Link>

            <Link to="/contact">
               <Button 
                variant={isNavTransparent && isSlideDark ? 'white' : 'primary'} 
                className="px-8 py-2.5 text-xs uppercase tracking-widest font-heading shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
               >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 transition-colors duration-300 ${textColorClass}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 ease-in-out origin-top overflow-hidden ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col p-8 space-y-6 text-center">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold">Home</Link>
            <Link to="/owc" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold">OWC Machines</Link>
            <Link to="/fahaka" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-heading font-bold uppercase tracking-wider text-brand-gold bg-brand-light py-2 rounded">Fahaka <span className="text-xs bg-brand-gold text-white px-1 rounded ml-1 badge-blink">NEW</span></Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full uppercase font-heading py-4 text-lg">Get Quote</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Industry Level Footer - Updated Spacing & Contrast */}
      <footer className="relative bg-brand-dark text-white pt-20 pb-10 overflow-hidden border-t border-gray-800">
        
        {/* Marquee Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03] z-0 flex items-center select-none">
             <div className="whitespace-nowrap animate-marquee flex">
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
                <span className="text-[15vw] font-heading font-black text-white leading-none mx-8">WASTE REVOLUTION • ZERO LANDFILL •</span>
             </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 border-b border-gray-800 pb-12">
            
            {/* Column 1: Contact Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                 <p className="text-white font-heading font-bold text-2xl tracking-wide">+91-9429691308</p>
                 <p className="text-white font-heading font-bold text-2xl tracking-wide">hello@solwaste.co</p>
                 <p className="text-gray-300 text-lg leading-relaxed mt-4 font-medium">
                   Worli, 1st floor, 264-265, <br/>
                   Dr. Annie Besant Road, <br/>
                   Worli, Mumbai, MH 400025
                 </p>
              </div>
              <div className="flex space-x-5 pt-2">
                 {[Instagram, Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                     <a key={i} href="#" className="text-gray-400 hover:text-brand-gold transition-colors transform hover:-translate-y-1 duration-300">
                         <Icon size={24} />
                     </a>
                 ))}
              </div>
            </div>

            {/* Column 2 Links */}
            <div className="lg:pl-8">
              <ul className="space-y-3 font-heading font-medium text-lg text-gray-400">
                {['Vision 2047', 'Sustainability', 'Blog', 'Gallery'].map((item) => (
                  <li key={item}>
                    <Link 
                        to={item === 'Vision 2047' ? '/vision-2047' : item === 'Sustainability' ? '/sustainability' : '#'} 
                        className="hover:text-white transition-colors block"
                    >
                        {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 Links */}
            <div>
              <ul className="space-y-3 font-heading font-medium text-lg text-gray-400">
                {['Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                        to={item === 'Contact' ? '/contact' : item === 'Careers' ? '/careers' : '#'} 
                        className="hover:text-white transition-colors block"
                    >
                        {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

             {/* Column 4 Links */}
             <div>
              <ul className="space-y-3 font-heading font-medium text-lg text-gray-400">
                {['Press and Media', 'Partner with us', 'Case Studies'].map((item) => (
                  <li key={item}>
                     <Link 
                        to={item === 'Partner with us' ? '/partner' : item === 'Case Studies' ? '/case-studies' : '#'} 
                        className="hover:text-white transition-colors block"
                     >
                        {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
            <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-white transition-colors">Accessibility Statement</a>
               <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <div className="tracking-wide">
               &copy; 2026 Solwaste. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};