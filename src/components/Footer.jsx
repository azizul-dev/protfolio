'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/azizul-dev', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/azizul-islam-dev', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/md_azizul63253', icon: 'x' },,
  ];

  return (
    <footer className="w-full px-4 md:px-10 pb-10 pt-20" id="footer">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative group">
          {/* Main Footer Container */}
          <div className="relative z-10 bg-surface-variant/10 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-[0_0_50px_rgba(34,197,94,0.05)]">
            
            {/* Cinematic Glow Effects */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/10 transition-all duration-700"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-emerald-500/10 transition-all duration-700"></div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center relative z-10">
              
              {/* Left Side: Branding */}
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-black font-syne tracking-tighter uppercase mb-3">
                    <span className="text-foreground">AZIZUL</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                      ISLAM
                    </span>
                  </h2>
                  <p className="text-muted text-xs md:text-sm max-w-[280px] leading-relaxed font-medium uppercase tracking-widest opacity-80">
                     MERN Stack Developer<span className="text-primary/50 mx-1">|</span> Building modern web experiences
                  </p>
                </motion.div>
              </div>

              {/* Center: Navigation Links */}
              <div className="flex flex-col items-center justify-center">
                <nav className="flex flex-wrap justify-center gap-x-6 md:gap-x-10 gap-y-4">
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ scale: 1.05 }}
                      className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-muted hover:text-primary hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all duration-300"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>
              </div>

              {/* Right Side: Social Icons */}
              <div className="flex justify-center lg:justify-end gap-4 md:gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center border border-white/10 hover:border-primary/40 group transition-all duration-300 shadow-xl"
                  >
                    <img 
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/${social.icon}.svg`} 
                      width={20} 
                      height={20} 
                      className="opacity-50 group-hover:opacity-100 dark:invert transition-all group-hover:scale-110" 
                      alt={social.name}
                    />
                  </motion.a>
                ))}
              </div>

            </div>

            {/* Bottom Bar Section */}
            <div className="mt-12 md:mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] md:text-xs font-mono text-muted/50 tracking-wider"
              >
                © 2026 Azizul Islam. All rights reserved.
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-muted/30"
              >
                Built with <span className="text-primary/40">Next.js & Tailwind</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

