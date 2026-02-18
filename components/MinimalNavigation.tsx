import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const MinimalNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'ABOUT', to: '/about' },
    { label: 'OUR MACHINES', to: '/owc' },
    { label: 'PROJECTS', to: '/case-studies' },
    { label: 'CONTACT', to: '/contact' },
  ];

  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 bg-[#f5f5f5]/95 backdrop-blur-md border-b border-black/5">
        <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-8 xl:px-12 2xl:px-20 h-full flex items-center justify-between">

          {/* Left Desktop */}
          <div className="hidden lg:flex items-center gap-12">
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] font-medium uppercase tracking-wider hover:opacity-60 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <img
              src="/logo.png"
              alt="Solwaste Logo"
              className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
            />
            <span className="text-[18px] lg:text-[20px] font-extrabold tracking-tight">
              Solwaste
            </span>
          </Link>

          {/* Right Desktop */}
          <div className="hidden lg:flex items-center gap-12">
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] font-medium uppercase tracking-wider hover:opacity-60 transition-opacity duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-2 rounded-lg active:bg-black/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-16 left-0 right-0 bg-[#f5f5f5] shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-6 py-6 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[15px] font-medium uppercase py-4 border-b border-black/5 active:bg-black/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
