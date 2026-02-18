import React from 'react';
import { Link } from 'react-router-dom';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden pt-10 xs:pt-12 sm:pt-14 md:pt-16 lg:pt-20">
      {/* Top Bar with Logo + Social */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-5 sm:pb-8 md:pb-10 border-b border-white/10 gap-4 sm:gap-0">
          {/* Logo + Tagline + Social (stacked for mobile/tablet) */}
          <div className="flex flex-col items-center sm:items-start gap-2 w-full sm:w-auto">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <Link to="/" className="flex items-center gap-2">
                <img 
                  src="/logo.png" 
                  alt="Solwaste Logo" 
                  className="w-6 h-6 sm:w-7 sm:h-7 object-contain brightness-0 invert"
                />
                <span className="text-[16px] sm:text-[18px] font-extrabold tracking-tight" style={{ letterSpacing: '-0.02em' }}>
                  Solwaste
                </span>
              </Link>
              <span className="text-xs sm:text-sm text-white/60 font-medium mt-1 ml-1">Nothing Wasted Ever.</span>
            </div>
            {/* Social Icons (centered for mobile/tablet) */}
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-5 mt-2 sm:mt-0">
              <a href="https://www.instagram.com/solwaste?igsh=MXVsMXVpMmZkOWh3Yg==" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://x.com/SolwasteCo" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="X / Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/solwaste/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><polygon fill="black" points="9.545 15.568 15.818 12 9.545 8.432"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Grid */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Column 1 — Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-3 sm:mb-5">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="tel:+919429691308" className="block text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">
                +91-9429691308
              </a>
              <a href="mailto:hello@solwaste.co" className="block text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors break-all">
                hello@solwaste.co
              </a>
              <p className="text-[11px] sm:text-[12px] text-white/50 leading-relaxed">
                Worli, 1st floor, 264-265,<br />
                Dr. Annie Besant Road,<br />
                Worli, Mumbai, MH 400025
              </p>
            </div>
          </div>

          {/* Column 2 — Company */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-3 sm:mb-5">Company</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/about" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/sustainability" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/vision-2047" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Vision 2047</Link></li>
              <li><Link to="/careers" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/partner" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Column 3 — Products */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-3 sm:mb-5">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/owc" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Our Machines</Link></li>
              <li><Link to="/fahaka" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Fahaka</Link></li>
              <li><Link to="/case-studies" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/gallery" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Gallery</Link></li>
            </ul>
          </div>

          {/* Column 4 — Resources */}
          <div>
            <h4 className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-white/50 mb-3 sm:mb-5">Resources</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/press-media" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Press & Media</Link></li>
              <li><Link to="/contact" className="text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="border-t border-white/10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Link to="/privacy-policy" className="text-[10px] sm:text-[11px] text-white/40 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/accessibility-statement" className="text-[10px] sm:text-[11px] text-white/40 hover:text-white/60 transition-colors">
              Accessibility Statement
            </Link>
            <Link to="/sitemap" className="text-[10px] sm:text-[11px] text-white/40 hover:text-white/60 transition-colors">
              Sitemap
            </Link>
          </div>
          <span className="text-[10px] sm:text-[11px] text-white/30">
            &copy; 2026 Solwaste. All rights reserved.
          </span>
        </div>
      </div>

      {/* Large Background Word */}
      <div className="relative h-auto overflow-hidden select-none pointer-events-none">
        <div 
          className="text-center font-extrabold text-white leading-none whitespace-nowrap"
          style={{ 
            fontSize: 'clamp(100px, 14vw, 200px)', 
            opacity: 0.04,
            letterSpacing: '-0.02em',
            transform: 'translateY(25%)',
          }}
        >
          SOLWASTE
        </div>
      </div>
    </footer>
  );
};
