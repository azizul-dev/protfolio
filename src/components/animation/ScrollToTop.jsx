'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-10 right-10 z-[100]"
        >
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 text-primary shadow-2xl flex items-center justify-center hover:scale-[1.05] hover:-translate-y-[2px] hover:border-primary/40 transition-all duration-300 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-y-1 transition-transform duration-300 text-3xl">
              keyboard_arrow_up
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
