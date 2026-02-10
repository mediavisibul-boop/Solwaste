import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from './Icons';
import { Button } from './ui/Button';
import { useTheme } from '../utils/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav 
      className={[
        "fixed w-full z-50 transition-all duration-500 ease-in-out",
        isNavTransparent
          ? "bg-transparent py-3 sm:py-4 md:py-5 lg:py-6 xl:py-8" 
          : "bg-white backdrop-blur-md shadow-sm py-2 sm:py-3 md:py-4 border-b border-gray-200"
      ].join(" ")}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group touch-manipulation">
          <img 
            src="/logo.png" 
            alt="Solwaste Logo" 
            className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 object-contain transition-all duration-300 flex-shrink-0 group-hover:scale-105"
          />
          <div className="flex flex-col leading-none select-none">
            <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-heading font-bold tracking-tight transition-colors duration-300 whitespace-nowrap">
              <span className={isNavTransparent ? 'text-white' : 'text-[#44444E]'}>SOL</span>
              <span className="text-[#BED754]">WASTE</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
          {/* Theme Toggle Button - TEMPORARILY DISABLED */}
          {/* <button
            onClick={toggleTheme}
            className={[
              "min-w-[40px] min-h-[40px] p-2 flex items-center justify-center rounded-lg",
              "transition-all duration-300 hover:scale-110 active:scale-95",
              isNavTransparent
                ? "text-white hover:bg-white/10 active:bg-white/20"
                : "text-brand-brown hover:bg-gray-100 active:bg-gray-200"
            ].join(" ")}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon size={20} className="transition-transform duration-300" />
            ) : (
              <Sun size={20} className="transition-transform duration-300" />
            )}
          </button> */}
          
          <Link
            to="/owc"
            className={[
              "font-heading font-semibold text-sm xl:text-base uppercase tracking-wider whitespace-nowrap",
              "hover:text-[#BED754] transition-all duration-300 relative group",
              isNavTransparent ? "text-white" : "text-[#44444E]"
            ].join(" ")}
          >
            OWC
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary group-hover:w-full transition-all duration-300"></span>
          </Link>

          <Link
            to="/fahaka"
            className={[
              "font-heading font-semibold text-sm xl:text-base uppercase tracking-wider",
              "transition-all duration-300 flex items-center gap-2.5 group whitespace-nowrap",
              isNavTransparent ? "text-white" : "text-[#44444E]"
            ].join(" ")}
          >
            <span className="relative px-2.5 py-1 text-[10px] xl:text-[11px] font-bold rounded-md bg-gradient-to-br from-red-600 to-red-500 text-white badge-blink shadow-md shadow-red-500/30 uppercase tracking-wide">
              NEW
            </span>
            <span className="group-hover:text-[#BED754] transition-colors relative">
              Fahaka
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#BED754] group-hover:w-full transition-all duration-300"></span>
            </span>
          </Link>

          <Link to="/contact">
            <Button 
              variant="primary"
              size="md"
              className={[
                "uppercase tracking-wide",
                "shadow-md hover:shadow-lg",
                "transition-all duration-300 transform hover:-translate-y-0.5",
                "touch-manipulation",
                isNavTransparent 
                  ? "bg-[#BED754] hover:bg-white hover:text-[#44444E] border-[#BED754] hover:border-white" 
                  : ""
              ].join(" ")}
            >
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Actions - Menu Only */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle - TEMPORARILY DISABLED */}
          {/* <button
            onClick={toggleTheme}
            className={[
              "min-w-[44px] min-h-[44px] p-2.5 flex items-center justify-center rounded-lg",
              "transition-all duration-300 active:scale-95",
              isNavTransparent
                ? "text-white hover:bg-white/10 active:bg-white/20"
                : "text-brand-brown hover:bg-gray-100 active:bg-gray-200"
            ].join(" ")}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button> */}

          {/* Mobile Toggle */}
          <button 
          type="button"
          className={[
              "min-w-[44px] min-h-[44px] sm:min-w-[48px] sm:min-h-[48px] p-2.5 sm:p-3 flex items-center justify-center",
              "transition-all duration-300 touch-manipulation active:scale-95 flex-shrink-0",
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
              <X size={24} className="w-6 h-6 sm:w-7 sm:h-7" />
            ) : (
              <Menu size={24} className="w-6 h-6 sm:w-7 sm:h-7" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};
