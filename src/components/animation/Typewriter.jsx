'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["Learning Web Dev", "Mobile Enthusiast", "Passionate Coder"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-12 overflow-hidden inline-block align-middle">
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="text-3xl md:text-5xl font-black text-on-surface"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;
