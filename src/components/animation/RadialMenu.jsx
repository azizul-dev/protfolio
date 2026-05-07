'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const RadialMenuItem = ({ item, index, total, isOpen }) => {
  // Calculate position in circle
  // 270 degree arc, starting from pointing left, going down and around
  const angle = Math.PI + (index / (total - 1)) * (1.5 * Math.PI); 
  const radius = 90;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
      animate={isOpen ? {
        opacity: 1,
        scale: 1,
        x,
        y,
        transition: {
          duration: 0.4,
          ease: [0.23, 1, 0.32, 1], // Apple-style ease
          delay: index * 0.04
        }
      } : {
        opacity: 0,
        scale: 0.8,
        x: 0,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeInOut"
        }
      }}
      className="absolute"
      style={{ left: 'calc(50% - 1.5rem)', top: 'calc(50% - 1.5rem)' }}
    >
      <Link
        href={item.href}
        className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-2xl hover:scale-[1.05]"
      >
        <span 
          className={`material-symbols-outlined text-xl ${item.color} group-hover:text-primary transition-all duration-300`}
        >
          {item.icon}
        </span>
        
        {/* Subtle Hover Glow */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-primary/5 blur-md transition-opacity duration-300" />
      </Link>
    </motion.div>
  );
};

const RadialMenu = ({ isOpen, onClose, items }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="absolute top-full right-0 mt-6 z-50 pointer-events-none" ref={containerRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0
            }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{
              duration: 0.4,
              ease: [0.23, 1, 0.32, 1]
            }}
            className="relative flex items-center justify-center w-64 h-64 pointer-events-auto"
          >
            {/* Dashed Static Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/5" />

            {/* Subtle Static Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl opacity-50" />

            {/* Menu Items Container */}
            <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
              {/* Center point */}
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              
              {items.map((item, index) => (
                <RadialMenuItem 
                  key={index} 
                  item={item} 
                  index={index} 
                  total={items.length} 
                  isOpen={isOpen}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RadialMenu;
