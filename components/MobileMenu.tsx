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
      "md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t-2 border-gray-100",
      "transition-all duration-300 ease-in-out origin-top",
      isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
    ].join(" ")}>
      <div className="container mx-auto px-4 xs:px-5 sm:px-6">
        <nav className="flex flex-col p-4 xs:p-5 sm:p-6 md:p-8 space-y-2 xs:space-y-3 sm:space-y-4" role="navigation" aria-label="Mobile navigation">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[48px] flex items-center justify-center text-base xs:text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold active:text-brand-gold transition-all duration-200 py-3 xs:py-3.5 px-4 rounded-lg hover:bg-brand-light/50 active:bg-brand-light active:scale-98 touch-manipulation"
          >
            Home
          </Link>
          <Link 
            to="/owc" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[48px] flex items-center justify-center text-base xs:text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-brand-brown hover:text-brand-gold active:text-brand-gold transition-all duration-200 py-3 xs:py-3.5 px-4 rounded-lg hover:bg-brand-light/50 active:bg-brand-light active:scale-98 touch-manipulation"
          >
            OWC Machines
          </Link>
          <Link 
            to="/fahaka" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[48px] flex items-center justify-center text-base xs:text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-brand-gold bg-brand-light hover:bg-brand-gold hover:text-white active:bg-brand-gold/90 transition-all duration-200 py-3 xs:py-3.5 px-4 rounded-lg active:scale-98 touch-manipulation relative"
          >
            Fahaka 
            <span className="text-[10px] xs:text-xs bg-[#FF0000] text-white px-2 py-1 rounded ml-2 badge-blink font-bold absolute -top-1 -right-1">NEW</span>
          </Link>
          <div className="pt-2">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button className="w-full min-h-[52px] uppercase font-heading py-4 xs:py-4.5 sm:py-5 text-base xs:text-lg sm:text-xl font-bold shadow-lg hover:shadow-xl active:scale-98 transition-all touch-manipulation">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
