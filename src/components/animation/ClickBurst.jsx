'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClickBurst = () => {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();
      const newBurst = {
        id,
        x: e.clientX,
        y: e.clientY,
      };
      setBursts((prev) => [...prev, newBurst]);
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 800);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] overflow-hidden">
      <AnimatePresence>
        {bursts.map((burst) => (
          <BurstEffect key={burst.id} x={burst.x} y={burst.y} />
        ))}
      </AnimatePresence>
    </div>
  );
};

const BurstEffect = ({ x, y }) => {
  const particles = Array.from({ length: 12 });
  
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 150,
            y: (Math.random() - 0.5) * 150,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_#4be277]"
        />
      ))}
    </div >
  );
};

export default ClickBurst;
