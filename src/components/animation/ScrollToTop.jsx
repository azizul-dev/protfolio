'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          className="fixed bottom-10 right-10 z-[60]"
        >
          <Magnetic>
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-[0_0_20px_rgba(75,226,119,0.3)] flex items-center justify-center hover:scale-110 transition-all active:scale-90 group"
              aria-label="Scroll to top"
            >
              <span className="material-symbols-outlined text-3xl group-hover:-translate-y-1 transition-transform">
                keyboard_arrow_up
              </span>
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
