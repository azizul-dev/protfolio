'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Magnetic from './animation/Magnetic';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#work", icon: "home", color: "text-yellow-400" },
    { label: "Tech Stack", href: "#stack", icon: "settings", color: "text-cyan-400" },
    { label: "Qualification", href: "#services", icon: "school", color: "text-purple-400" },
    { label: "Projects", href: "#projects", icon: "grid_view", color: "text-orange-400" },
    { label: "Contact Me", href: "#contact", icon: "send", color: "text-pink-400" },
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-background/60 backdrop-blur-xl border border-primary/20 rounded-full px-4 md:px-6 py-2 shadow-[0_0_20px_rgba(34,197,94,0.15)] flex items-center gap-2 max-w-[95vw] md:max-w-none">
        <div className="flex items-center gap-1 md:gap-2">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className="group flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/5 transition-all"
              >
                <span className={`material-symbols-outlined text-[18px] ${link.color}`}>
                  {link.icon}
                </span>
                <span className="hidden lg:block text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="group relative flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/5 transition-all cursor-pointer">
              <span className="material-symbols-outlined text-[18px] text-blue-400">
                apps
              </span>
              <span className="hidden lg:block text-xs font-semibold text-on-surface-variant group-hover:text-primary transition-colors">
                More
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/5 text-on-surface-variant"
            >
              <span className="material-symbols-outlined">
                {isOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          <div className="w-[1px] h-4 bg-white/10 mx-2"></div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90vw] z-[49] bg-background/90 backdrop-blur-2xl border border-primary/20 rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                >
                  <span className={`material-symbols-outlined text-2xl ${link.color}`}>
                    {link.icon}
                  </span>
                  <span className="text-lg font-bold text-on-surface">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
