import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <div className={[
      "lg:hidden fixed top-[60px] sm:top-[64px] md:top-[72px] left-0 w-full bg-white dark:bg-gray-900 shadow-2xl border-t-2 border-gray-100 dark:border-gray-700 z-[60]",
      "transition-all duration-300 ease-in-out origin-top overflow-hidden",
      isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
    ].join(" ")}>
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex flex-col p-4 sm:p-6 md:p-8 space-y-2 sm:space-y-3 md:space-y-4" role="navigation" aria-label="Mobile navigation">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[48px] flex items-center justify-center text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-brand-charcoal dark:text-white hover:text-brand-gold active:text-brand-gold transition-all duration-200 py-3 sm:py-3.5 px-4 rounded-lg hover:bg-brand-light/50 dark:hover:bg-gray-800 active:bg-brand-light dark:active:bg-gray-700 active:scale-98 touch-manipulation"
          >
            Home
          </Link>
          <Link 
            to="/owc" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[48px] flex items-center justify-center text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-brand-charcoal dark:text-white hover:text-brand-gold active:text-brand-gold transition-all duration-200 py-3 sm:py-3.5 px-4 rounded-lg hover:bg-brand-light/50 dark:hover:bg-gray-800 active:bg-brand-light dark:active:bg-gray-700 active:scale-98 touch-manipulation"
          >
            OWC Machines
          </Link>
          <Link 
            to="/fahaka" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[48px] flex items-center justify-center text-base sm:text-lg md:text-xl font-heading font-bold uppercase tracking-wider text-brand-gold bg-brand-light hover:bg-brand-gold hover:text-white active:bg-brand-gold/90 transition-all duration-200 py-3 sm:py-3.5 px-4 rounded-lg active:scale-98 touch-manipulation relative"
          >
            Fahaka 
            <span className="text-[10px] sm:text-xs bg-gradient-to-r from-red-600 to-red-500 text-white px-2 py-1 rounded-md ml-2 badge-blink font-bold absolute -top-1 -right-1 shadow-md shadow-red-500/40">NEW</span>
          </Link>
          <div className="pt-2">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full min-h-[52px] uppercase font-heading py-4 sm:py-4.5 md:py-5 text-base sm:text-lg md:text-xl font-bold shadow-lg hover:shadow-xl active:scale-98 transition-all touch-manipulation">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
