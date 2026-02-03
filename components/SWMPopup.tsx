import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Building2, Droplets, Scale, CheckCircle } from 'lucide-react';

export const SWMPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-[550px] overflow-hidden" style={{ pointerEvents: 'auto' }}>
              {/* Header with Gradient - Orange to Red */}
              <div className="relative" style={{ background: 'linear-gradient(135deg, #FF6B6B 0%, #E04646 100%)' }}>
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                  aria-label="Close"
                >
                  <X size={18} className="text-white" />
                </button>

                {/* Header Content */}
                <div className="text-center py-8 px-6">
                  <h2 className="text-3xl font-bold text-white uppercase tracking-wide mb-2">
                    SWM Rules 2026
                  </h2>
                  <p className="text-sm text-white/90 font-medium">
                    Effective from 1 April 2026
                  </p>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-7">
                {/* Yellow Warning Box */}
                <div className="bg-amber-50 dark:bg-amber-900/30 border-l-4 border-amber-400 dark:border-amber-500 rounded p-3 mb-6 text-left">
                  <strong className="block mb-1 text-sm font-bold text-red-600 dark:text-red-400">⚠️ Compliance Notice</strong>
                  <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed">
                    Non-compliance may lead to penalties and regulatory action. Bulk generators must process waste on-site.
                  </p>
                </div>

                {/* Affected Text */}
                <p className="font-bold text-base text-gray-800 dark:text-gray-200 mb-4 text-center">
                  You are affected if you generate:
                </p>

                {/* 3-Column Criteria Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center">
                    <div className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">100kg+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Waste / day</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center">
                    <div className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">40k L+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Water / day</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-3 text-center">
                    <div className="text-xl font-extrabold text-gray-800 dark:text-gray-100 mb-1">20k m²</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Area</div>
                  </div>
                </div>

                {/* Surge Text */}
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-center">
                  <span className="text-red-600 dark:text-red-400 font-semibold block mb-1">Demand for composting is surging.</span>
                  <span>Early adopters save cost, time, and avoid compliance risk.</span>
                </div>

                {/* Side-by-Side Buttons */}
                <div className="flex gap-3">
                  {/* Secondary Button - Read More */}
                  <a
                    href="/#government-mandate"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClose();
                      setTimeout(() => {
                        const section = document.querySelector('[data-government-mandate]');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }, 100);
                    }}
                    className="flex-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold uppercase text-sm py-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-center"
                    aria-label="Read more about SWM Rules 2026 and compliance requirements"
                  >
                    Learn About SWM Rules 2026
                  </a>

                  {/* Primary Button - Talk to Expert */}
                  <a
                    href="/contact"
                    onClick={handleClose}
                    className="flex-1 bg-green-600 dark:bg-green-700 text-white font-semibold uppercase text-sm py-3.5 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-center shadow-lg shadow-green-600/20"
                  >
                    Talk to Expert
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SWMPopup;
