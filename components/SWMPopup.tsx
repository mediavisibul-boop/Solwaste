import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Building2, Droplets, Scale, CheckCircle, Clock } from 'lucide-react';

export const SWMPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(15);

  useEffect(() => {
    // For testing: uncomment the line below to always show popup
    sessionStorage.removeItem('swm-popup-seen');
    
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('swm-popup-seen');
    
    if (!hasSeenPopup) {
      // Show popup after 500ms delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        console.log('SWM Popup opened');
      }, 500);

      return () => clearTimeout(timer);
    } else {
      console.log('SWM Popup already seen this session');
    }
  }, []);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (countdown === 0) {
      handleClose();
    }
  }, [isOpen, countdown]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('swm-popup-seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            style={{ pointerEvents: 'none' }}
          >
            <div className="bg-white rounded-xl shadow-2xl border-4 border-red-500 w-full max-w-2xl max-h-[90vh] overflow-y-auto" style={{ pointerEvents: 'auto' }}>
              {/* Header with Close Button and Timer */}
              <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white p-4 rounded-t-lg relative">
                <button
                  onClick={handleClose}
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                {/* Countdown Timer */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/20 px-2.5 py-1 rounded-full text-xs font-bold">
                  <Clock size={14} />
                  <span>{countdown}s</span>
                </div>

                {/* Alert Badge */}
                <div className="flex items-center justify-center gap-2 mb-2 mt-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-2xl"
                  >
                    🚨
                  </motion.div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-center uppercase leading-tight mb-1">
                  SWM Rules 2026 Are Coming
                </h2>
                <p className="text-xl text-center font-bold mb-2">Are You Ready?</p>
                <p className="text-sm text-center text-white/90 font-medium">Effective from 1 April 2026</p>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Main Message */}
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-semibold mb-3 text-center">
                  ⚡ Bulk waste generators must process organic waste on-site.
                </p>
                <p className="text-base sm:text-lg text-red-700 font-bold mb-6 text-center">
                  ❌ Non-compliance may lead to penalties and regulatory action.
                </p>

                {/* Applicability - Inline Format */}
                <div className="mb-6">
                  <p className="text-base sm:text-lg text-gray-900 font-bold mb-3 text-center">
                    You're affected if you generate:
                  </p>
                  <p className="text-base sm:text-lg text-center font-semibold text-brand-olive-dark leading-relaxed">
                    100+ kg waste/day <span className="text-gray-400">|</span> 40,000+ L water/day <span className="text-gray-400">|</span> 20,000+ sq.m built-up area
                  </p>
                  <p className="text-sm text-center text-gray-700 font-medium mt-3">
                    (Any one applies)
                  </p>
                </div>

                {/* Urgency Line */}
                <div className="mb-8">
                  <p className="text-base sm:text-lg text-orange-700 font-bold text-center mb-2">
                    ⏳ Demand for composting solutions will surge before 2026.
                  </p>
                  <p className="text-base sm:text-lg text-gray-800 font-semibold text-center">
                    Early adopters save cost, time, and compliance risk.
                  </p>
                </div>

                {/* Read More Button */}
                <a
                  href="/#government-mandate"
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose();
                    // Scroll to Government Mandate section
                    setTimeout(() => {
                      const section = document.querySelector('[data-government-mandate]');
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                  className="block w-full bg-gradient-to-r from-brand-olive-dark via-brand-olive to-brand-olive-dark text-white font-bold uppercase text-base sm:text-lg py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-4 text-center"
                >
                  Read More
                </a>

                {/* Talk to Compliance Expert Button */}
                <a
                  href="/contact"
                  onClick={handleClose}
                  className="block w-full bg-white border-2 border-brand-olive text-brand-olive-dark font-bold uppercase text-base sm:text-lg py-4 rounded-lg hover:bg-brand-light transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  Talk to a Compliance Expert
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SWMPopup;
