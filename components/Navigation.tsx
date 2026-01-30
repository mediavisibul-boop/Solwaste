import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from './Icons';
import { Button } from './ui/Button';

interface NavigationProps {
  isNavTransparent: boolean;
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  textColorClass: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  isNavTransparent,
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  textColorClass,
}) => {
  return (
    <nav 
      className={[
        "fixed w-full z-50 transition-all duration-500 ease-in-out",
        isNavTransparent
          ? "bg-transparent py-4 sm:py-5 md:py-6 lg:py-8" 
          : "bg-white backdrop-blur-md shadow-sm py-3 sm:py-4 border-b border-gray-200"
      ].join(" ")}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-0.5 sm:gap-1 md:gap-1.5 group touch-manipulation">
          <img 
            src="/logo.png" 
            alt="Solwaste Logo" 
            className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 object-contain transition-all duration-500"
          />
          <div className="flex flex-col leading-none select-none">
            <span className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-heading font-bold tracking-tighter transition-colors duration-500">
              <span className={isNavTransparent ? 'text-white' : 'text-brand-brown'}>SOL</span>
              <span className="text-brand-gold">WASTE</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
          <Link
            to="/owc"
            className={[
              "font-heading font-bold text-sm lg:text-base uppercase tracking-[0.15em]",
              "hover:text-brand-gold active:text-brand-gold transition-all duration-300 relative group",
              isNavTransparent ? "text-white" : "text-brand-brown"
            ].join(" ")}
          >
            OWC
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/fahaka"
            className={[
              "font-heading font-bold text-sm lg:text-base uppercase tracking-[0.15em]",
              "transition-all duration-300 flex items-center gap-2 group",
              isNavTransparent ? "text-white" : "text-brand-brown"
            ].join(" ")}
          >
            <span className="relative px-2.5 py-1 text-[10px] font-bold rounded-md bg-gradient-to-r from-red-600 to-red-500 text-white badge-blink shadow-md shadow-red-500/40">
              NEW
            </span>
            <span className="group-hover:text-brand-gold transition-colors relative">
              Fahaka
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          <Link to="/contact">
            <Button className={[
              "min-h-[42px] md:min-h-[44px] lg:min-h-[46px]",
              "px-4 md:px-6 lg:px-8 py-2 md:py-2.5",
              "text-xs md:text-sm uppercase tracking-widest font-heading font-bold",
              "shadow-lg hover:shadow-xl active:shadow-md",
              "transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0",
              "touch-manipulation",
              isNavTransparent 
                ? "bg-brand-gold text-white border-brand-gold hover:bg-white hover:text-brand-gold hover:border-white" 
                : "bg-brand-gold text-white border-brand-gold hover:bg-brand-dark hover:text-white hover:border-brand-dark"
            ].join(" ")}>
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className={[
            "md:hidden min-w-[48px] min-h-[48px] p-3 flex items-center justify-center",
            "transition-all duration-300 touch-manipulation active:scale-95",
            textColorClass,
            isNavTransparent 
              ? "hover:bg-white hover:bg-opacity-10 active:bg-white active:bg-opacity-20" 
              : "hover:bg-gray-100 active:bg-gray-200",
            "rounded-lg"
          ].join(" ")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
          ) : (
            <Menu size={24} className="xs:w-6 xs:h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>
    </nav>
  );
};
