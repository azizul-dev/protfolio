'use client';

import { motion } from 'framer-motion';

const FloatingDot = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        animate={{
          x: [0, 100, -50, 200, -100, 0],
          y: [0, -150, 100, -200, 150, 0],
          scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
          opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full blur-[2px] shadow-[0_0_15px_#4be277]"
      />
      
      <motion.div
        animate={{
          x: [0, -200, 150, -100, 100, 0],
          y: [0, 200, -150, 200, -100, 0],
          scale: [1, 0.9, 1.1, 0.8, 1.2, 1],
          opacity: [0.2, 0.4, 0.1, 0.3, 0.2],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full blur-[1px] shadow-[0_0_10px_#4be277]"
      />
    </div>
  );
};

export default FloatingDot;
