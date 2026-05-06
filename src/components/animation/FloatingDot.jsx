'use client';

import { motion } from 'framer-motion';

const FloatingDot = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.9, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/3 left-1/3 w-3 h-3 bg-primary/20 rounded-full blur-[2px]"
      />
    </div>
  );
};

export default FloatingDot;
