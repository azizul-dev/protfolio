'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogo from './animation/AnimatedLogo';
import RadialMenu from './animation/RadialMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRadialOpen, setIsRadialOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  const Logo = () => (
    <Link href="#work" className="flex items-center group transition-transform duration-300 hover:scale-105">
      <AnimatedLogo size={40} showText={false} />
    </Link>
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

  const arcLinks = [
    { label: "Home", href: "#home", icon: "home", color: "text-green-400", id: "home" },
    { label: "About", href: "#about", icon: "user", color: "text-teal-400", id: "about" },
    { label: "Stack", href: "#stack", icon: "code", color: "text-blue-400", id: "stack" },
    { label: "Projects", href: "#projects", icon: "grid", color: "text-pink-400", id: "projects" },
    { label: "Contact", href: "#contact", icon: "phone", color: "text-orange-400", id: "contact" },
    { label: "Resume", href: "/resume.pdf", icon: "file", color: "text-purple-400", id: "resume" },
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
                className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap border ${activeSection === link.id ? 'bg-primary/10 border-primary/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]' : 'hover:bg-white/5 border-transparent hover:scale-[1.02]'}`}
              >
                <span className={`material-symbols-outlined text-[18px] ${link.color} transition-transform duration-300 group-hover:scale-110`}>
                  {link.icon}
                </span>
                <span className={`hidden lg:block text-xs font-bold transition-colors duration-300 ${activeSection === link.id ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                  {link.label}
                </span>
              </Link>
            ))}
            
            {/* More Button - Now triggers Radial Menu */}
            <div className="relative">
              <div 
                id="more-button-trigger"
                className="cursor-pointer relative"
                onClick={() => setIsRadialOpen(!isRadialOpen)}
              >
                <div className={`group flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 border ${isRadialOpen ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]' : 'hover:bg-white/5 border-transparent hover:scale-105'}`}>
                  <span className={`material-symbols-outlined text-[18px] ${isRadialOpen ? 'text-primary' : 'text-blue-400'}`}>
                    apps
                  </span>
                  <span className={`hidden lg:block text-xs font-bold transition-colors duration-300 ${isRadialOpen ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'}`}>
                    More
                  </span>
                </div>
              </div>

              {/* Radial Menu Component - Positioned relative to this container */}
              <RadialMenu 
                isOpen={isRadialOpen} 
                onClose={() => setIsRadialOpen(false)} 
                items={arcLinks} 
              />
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
              {[...navLinks, ...arcLinks].map((link) => (
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
