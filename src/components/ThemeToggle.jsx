'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-8 bg-surface-container-high rounded-full p-1 transition-colors duration-300 border border-outline-variant"
      aria-label="Toggle Theme"
    >
      <motion.div
        className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <span className="material-symbols-outlined text-[16px] text-on-primary">
          {theme === 'dark' ? 'dark_mode' : 'light_mode'}
        </span>
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
