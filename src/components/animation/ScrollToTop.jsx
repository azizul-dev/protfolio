'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import Magnetic from './Magnetic';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
          className="fixed bottom-24 right-4 md:bottom-10 md:right-10 z-[60]"
        >
          <Magnetic>
            <div className="relative group cursor-pointer" onClick={scrollToTop}>
              {/* Progress Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-primary/20 fill-none"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="stroke-primary fill-none"
                  strokeWidth="6"
                  strokeLinecap="round"
                  style={{ pathLength }}
                />
              </svg>
              
              <button
                className="w-12 h-12 md:w-14 md:h-14 bg-surface-container text-primary rounded-full shadow-[0_0_20px_rgba(75,226,119,0.2)] flex items-center justify-center hover:scale-105 transition-all active:scale-90"
                aria-label="Scroll to top"
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl group-hover:-translate-y-1 transition-transform">
                  keyboard_arrow_up
                </span>
              </button>
            </div>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
