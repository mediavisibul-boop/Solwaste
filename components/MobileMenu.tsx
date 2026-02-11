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
      "lg:hidden fixed left-0 w-full bg-white shadow-2xl border-t-2 border-gray-200 z-40",
      "transition-all duration-300 ease-in-out origin-top overflow-hidden",
      isMobileMenuOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible"
    ].join(" ")}
    style={{ top: 'calc(3rem + 48px)' }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex flex-col p-6 sm:p-8 space-y-3" role="navigation" aria-label="Mobile navigation">
          <Link 
            to="/" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[56px] flex items-center justify-center text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-gray-900 hover:text-gray-600 active:text-gray-700 transition-all duration-200 py-4 px-6 rounded-xl hover:bg-gray-50 active:bg-gray-100 active:scale-98 touch-manipulation border-2 border-transparent hover:border-gray-200"
          >
            Home
          </Link>
          <Link 
            to="/owc" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[56px] flex items-center justify-center text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-gray-900 hover:text-gray-600 active:text-gray-700 transition-all duration-200 py-4 px-6 rounded-xl hover:bg-gray-50 active:bg-gray-100 active:scale-98 touch-manipulation border-2 border-transparent hover:border-gray-200"
          >
            OWC Machines
          </Link>
          <Link 
            to="/fahaka" 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="min-h-[56px] flex items-center justify-center text-lg sm:text-xl font-heading font-bold uppercase tracking-wider text-gray-900 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 py-4 px-6 rounded-xl active:scale-98 touch-manipulation relative border-2 border-gray-200 hover:border-gray-900"
          >
            Fahaka 
            <span className="text-xs bg-gradient-to-r from-red-600 to-red-500 text-white px-2.5 py-1 rounded-md ml-3 badge-blink font-bold shadow-lg shadow-red-500/40 uppercase">NEW</span>
          </Link>
          <div className="pt-3">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block">
              <Button variant="primary" className="w-full min-h-[60px] uppercase font-heading py-4 text-lg sm:text-xl font-bold shadow-xl hover:shadow-2xl active:scale-98 transition-all touch-manipulation bg-gray-900 hover:bg-gray-800 text-white">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
