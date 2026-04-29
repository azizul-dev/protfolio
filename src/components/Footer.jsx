'use client';

import Image from 'next/image';
import Link from 'next/link';
import Magnetic from './animation/Magnetic';

const Footer = () => {
  return (
    <footer className="bg-background w-full pt-20 pb-10 border-t border-outline-variant">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
        {/* Brand & Description */}
        <div className="space-y-6">
          <div className="text-3xl font-black text-primary tracking-tighter">
            AZIZUL.
          </div>
          <p className="text-on-surface-variant leading-relaxed">
            A passionate beginner developer focused on creating immersive web experiences and exploring modern technologies.
          </p>
          <div className="flex gap-4">
             <span className="material-symbols-outlined text-primary">location_on</span>
             <span className="text-on-surface-variant text-sm">Bogra, Rajshahi, Bangladesh</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-on-surface uppercase tracking-widest">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-4">
            {['Home', 'Stack', 'Projects', 'Services', 'Education', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-on-surface-variant hover:text-primary transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Connect */}
        <div className="space-y-6">
          <h4 className="text-lg font-bold text-on-surface uppercase tracking-widest">Connect With Me</h4>
          <p className="text-on-surface-variant text-sm">Follow my journey and stay updated with my latest projects.</p>
          <div className="flex gap-4">
            <Magnetic>
              <a href="https://www.linkedin.com/in/azizul-islam-dev" target="_blank" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary group transition-colors shadow-lg border border-primary/10">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" width={20} height={20} alt="LinkedIn" className="group-hover:invert transition-all opacity-70 group-hover:opacity-100" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/azizul-dev" target="_blank" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary group transition-colors shadow-lg border border-primary/10">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" width={20} height={20} alt="GitHub" className="group-hover:invert transition-all opacity-70 group-hover:opacity-100" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://x.com/md_azizul63253" target="_blank" className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center hover:bg-primary group transition-colors shadow-lg border border-primary/10">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" width={20} height={20} alt="X" className="group-hover:invert transition-all opacity-70 group-hover:opacity-100" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 border-t border-outline-variant pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] font-mono tracking-widest uppercase text-on-surface-variant">
          © 2024 DESIGNED & BUILT BY AZIZUL ISLAM.
        </p>
        <div className="flex gap-6 text-[10px] font-mono tracking-widest uppercase text-on-surface-variant">
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
