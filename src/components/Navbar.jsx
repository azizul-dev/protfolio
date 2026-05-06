'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import Magnetic from './animation/Magnetic';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './animation/AnimatedLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  const Logo = () => (
    <Magnetic>
      <Link href="#work" className="flex items-center group">
        <AnimatedLogo size={40} showText={false} />
      </Link>
    </Magnetic>
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'stack', 'projects', 'services', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", id: "home", icon: "home", color: "text-yellow-400" },
    { label: "About", href: "#about", id: "about", icon: "person", color: "text-emerald-400" },
    { label: "Tech Stack", href: "#stack", id: "stack", icon: "settings", color: "text-cyan-400" },
    { label: "Projects", href: "#projects", id: "projects", icon: "grid_view", color: "text-orange-400" },
    { label: "Contact", href: "#contact", id: "contact", icon: "send", color: "text-pink-400" },
  ];

  const moreLinks = [
    { label: "Education", href: "#education", id: "education", icon: "history_edu", color: "text-blue-400" },
    { label: "CV / Resume", href: "#", id: "cv", icon: "description", color: "text-emerald-400" },
  ];

  return (
    <>
      <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 glass-card bg-background/50 rounded-full px-4 md:px-10 py-3 md:py-4 shadow-2xl flex items-center gap-4 md:gap-6 max-w-[95vw] md:max-w-none transition-all hover:bg-background/80 border-border">
        <Logo />
        <div className="flex items-center gap-1 md:gap-3">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1 md:gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.label}
                href={link.href}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all whitespace-nowrap ${activeSection === link.id ? 'bg-primary/10 border border-primary/30' : 'hover:bg-surface-variant border border-transparent'}`}
              >
                <span className={`material-symbols-outlined text-[18px] ${link.color}`}>
                  {link.icon}
                </span>
                <span className={`hidden lg:block text-xs font-bold transition-colors ${activeSection === link.id ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsMoreOpen(true)}
              onMouseLeave={() => setIsMoreOpen(false)}
            >
              <div className="group flex items-center gap-2 px-3 py-2 rounded-full hover:bg-white/5 transition-all cursor-pointer border border-transparent">
                <span className="material-symbols-outlined text-[18px] text-blue-400">
                  apps
                </span>
                <span className="hidden lg:block text-xs font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                  More
                </span>
              </div>

              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-surface/90 backdrop-blur-2xl border border-border rounded-2xl p-2 shadow-2xl z-50"
                  >
                    {moreLinks.map((link) => (
                      <Link 
                        key={link.label}
                        href={link.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all group"
                      >
                        <span className={`material-symbols-outlined text-[18px] ${link.color}`}>
                          {link.icon}
                        </span>
                        <span className="text-xs font-bold text-on-surface-variant group-hover:text-primary">
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-surface-variant text-on-surface-variant"
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
            className="fixed top-20 md:top-24 left-1/2 -translate-x-1/2 w-[92vw] z-[49] bg-surface/90 backdrop-blur-2xl border border-border rounded-3xl p-4 md:p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 md:gap-4">
              {[...navLinks, ...moreLinks].map((link) => (
                <Link 
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-4 p-3 md:p-4 rounded-2xl hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20"
                >
                  <span className={`material-symbols-outlined text-xl md:text-2xl ${link.color}`}>
                    {link.icon}
                  </span>
                  <span className="text-base md:text-lg font-bold text-on-surface">
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
