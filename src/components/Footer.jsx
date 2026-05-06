'use client';

import Image from 'next/image';
import Link from 'next/link';
import Magnetic from './animation/Magnetic';

const Footer = () => {
  return (
    <footer className="bg-background w-full pt-32 pb-16 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-24">
          <div className="max-w-xl">
            <h2 className="text-editorial text-[30px] md:text-[45px] text-foreground mb-6 leading-tight">
              Ready to build something <span className="text-primary italic">extraordinary?</span>
            </h2>
            <p className="text-muted text-lg">
              I am currently available for freelance opportunities and full-time positions. 
              Let&apos;s turn your vision into a digital reality.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full lg:w-auto">
            <Magnetic>
              <a 
                href="mailto:abdulazizabdul8822@gmail.com" 
                className="px-10 py-5 rounded-full bg-primary text-on-primary font-bold text-center shadow-xl shadow-primary/20 hover:scale-105 transition-all"
              >
                Send an Email
              </a>
            </Magnetic>
            <Magnetic>
              <a 
                href="#contact" 
                className="glass-card px-10 py-5 rounded-full font-bold text-center hover:bg-white/5 transition-all"
              >
                Let&apos;s Chat
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border gap-8">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-black tracking-tighter text-foreground">
              AZIZUL<span className="text-primary">.</span>
            </div>
            <p className="hidden md:block text-[10px] font-mono tracking-[0.3em] uppercase text-muted">
              © 2026 Crafted with passion
            </p>
          </div>

          <div className="flex gap-8">
            {[
              { name: 'linkedin', url: 'https://www.linkedin.com/in/azizul-islam-dev' },
              { name: 'github', url: 'https://github.com/azizul-dev' },
              { name: 'x', url: 'https://x.com/md_azizul63253' }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer" 
                className="text-muted hover:text-primary transition-all uppercase text-[10px] font-mono tracking-widest"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
