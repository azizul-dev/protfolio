'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold font-syne uppercase tracking-tight mb-2">Azizul Islam</h2>
            <p className="text-muted text-sm">Building digital experiences that matter.</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://github.com/azizul-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-variant border border-border flex items-center justify-center hover:border-primary/40 hover:scale-[1.05] hover:-translate-y-[2px] transition-all duration-300 group"
            >
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" width={18} height={18} className="opacity-40 group-hover:opacity-100 dark:invert transition-all" alt="GitHub" />
            </a>
            <a 
              href="https://www.linkedin.com/in/azizul-islam-dev" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-surface-variant border border-border flex items-center justify-center hover:border-primary/40 hover:scale-[1.05] hover:-translate-y-[2px] transition-all duration-300 group"
            >
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" width={18} height={18} className="opacity-40 group-hover:opacity-100 dark:invert transition-all" alt="LinkedIn" />
            </a>
          </div>

          <div className="text-muted text-[10px] font-mono uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
