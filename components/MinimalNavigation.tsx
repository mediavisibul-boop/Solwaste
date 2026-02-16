import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const MinimalNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      <nav 
        className="sticky top-0 left-0 right-0 z-50 bg-[#f5f5f5] border-b border-black/5"
        style={{ height: '80px' }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 h-full flex items-center justify-between">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center" style={{ gap: '48px' }}>
            {leftLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] font-medium uppercase hover:opacity-60 transition-opacity duration-300"
                style={{ letterSpacing: '0.08em' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2.5 lg:absolute lg:left-1/2 lg:-translate-x-1/2"
          >
            <img 
              src="/logo.png" 
              alt="Solwaste Logo" 
              className="w-8 h-8 object-contain"
            />
            <span 
              className="text-[20px] font-extrabold tracking-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Solwaste
            </span>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center" style={{ gap: '48px' }}>
            {rightLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[13px] font-medium uppercase hover:opacity-60 transition-opacity duration-300"
                style={{ letterSpacing: '0.08em' }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
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
          className={`absolute top-[80px] left-0 right-0 bg-[#f5f5f5] shadow-lg transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-[14px] font-medium uppercase py-3.5 border-b border-black/5 hover:opacity-60 transition-opacity"
                style={{ letterSpacing: '0.08em' }}
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
