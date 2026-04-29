'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Magnetic from './animation/Magnetic';

const About = () => {
  const stats = [
    { label: "Experience", value: "Frontend Student", icon: "school" },
    { label: "Completed", value: "Personal Projects", icon: "code_blocks" },
    { label: "Learning", value: "Next.js & React", icon: "rocket_launch" },
  ];

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6" id="about">
      <div className="text-center mb-16">
        <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.01em] mb-2 text-on-surface">
          About
        </h2>
        <p className="text-on-surface-variant font-mono text-xs uppercase tracking-widest">
          My Introduction
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Avatar/Image */}
        <div className="flex-1 relative">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] mx-auto rounded-[48px] overflow-hidden bg-surface-container border border-primary/20 shadow-2xl">
            <Image
              src="/images/profile-professional-v6.jpg"
              alt="Azizul Islam"
              fill
              className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex-1 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="glass-card p-6 rounded-2xl border-primary/10 flex flex-col items-center text-center gap-3 hover:border-primary/30 transition-all hover:bg-primary/5 group"
              >
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">
                  {stat.icon}
                </span>
                <div>
                  <div className="text-sm font-bold text-on-surface">{stat.label}</div>
                  <div className="text-[10px] text-on-surface-variant uppercase tracking-tighter">{stat.value}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
            I am a passionate Frontend Development student currently focusing on mastering Next.js and modern web technologies. I enjoy building responsive, user-friendly websites and am constantly exploring new tools to improve my craft. I am currently dedicated to completing my frontend course and building my personal portfolio.
          </p>

          <div className="pt-4">
            <Magnetic>
              <a 
                href="#" 
                className="glass-card px-8 py-4 rounded-2xl font-bold flex items-center gap-3 w-fit hover:bg-primary hover:text-on-primary transition-all border-primary/20"
              >
                Download Resume
                <span className="material-symbols-outlined">description</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
