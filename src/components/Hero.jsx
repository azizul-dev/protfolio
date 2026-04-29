'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from './animation/Magnetic';
import Typewriter from './animation/Typewriter';
import BorderTrace from './animation/BorderTrace';

const Hero = () => {
  const imageRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20 bg-background" id="work">
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none z-0"></div>
      
      {/* Left Social Sidebar - Hidden on mobile */}
      <div className="hidden lg:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col gap-6 z-20">
        <Magnetic>
          <a href="https://www.linkedin.com/in/azizul-islam-dev" target="_blank" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors group shadow-lg dark:shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" width={18} height={18} alt="LinkedIn" className="opacity-70 group-hover:opacity-100 transition-all dark:invert group-hover:invert-0" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://github.com/azizul-dev" target="_blank" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors group shadow-lg dark:shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" width={18} height={18} alt="GitHub" className="opacity-70 group-hover:opacity-100 transition-all dark:invert group-hover:invert-0" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors group shadow-lg dark:shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/x.svg" width={18} height={18} alt="X" className="opacity-70 group-hover:opacity-100 transition-all dark:invert group-hover:invert-0" />
          </a>
        </Magnetic>
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
        <motion.div 
          className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-base md:text-lg font-medium text-on-surface-variant mb-[12px]">
            Hey, I&apos;m
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[48px] md:text-[84px] leading-[1.1] md:leading-[1] font-bold tracking-tight text-on-surface"
          >
            <span className="inline-flex items-center gap-4 whitespace-nowrap">
              Azizul Islam <span className="animate-waving-hand inline-block text-4xl md:text-7xl">👋</span>
            </span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center md:justify-start items-center gap-x-3 gap-y-2 text-xl md:text-2xl font-medium text-on-surface/80"
          >
            <span>I am</span>
            <Typewriter />
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-[15px] md:text-[16px] leading-[26px] text-on-surface-variant max-w-xl mx-auto md:mx-0"
          >
            🚀 Turning ideas into Stunning Websites 💻 <br />
            | Available for projects and collaborations 🌟
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-primary/10 shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">code</span>
              <span className="text-xs font-bold text-on-surface-variant">Solving Problems</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-primary/10 shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">person</span>
              <span className="text-xs font-bold text-on-surface-variant">Frontend Student</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container border border-primary/10 shadow-sm">
              <span className="material-symbols-outlined text-primary text-sm">rocket_launch</span>
              <span className="text-xs font-bold text-on-surface-variant">Learning Next.js</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-6 flex justify-center md:justify-start">
            <Magnetic>
              <button className="glass-card px-8 md:px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center gap-3 group">
                Say Hello 
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative order-1 md:order-2"
        >
          <BorderTrace className="!rounded-[48px] mx-auto w-fit">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[440px] md:h-[440px] rounded-[48px] p-1.5 border border-primary/30 bg-surface-container-low backdrop-blur-md shadow-2xl">
              <div className="w-full h-full rounded-[42px] overflow-hidden border border-primary/10 bg-surface-container relative">
                <Image
                  alt="Azizul Islam Professional"
                  className="w-full h-full object-cover object-center transition-all duration-700 hover:scale-105"
                  src="/images/profile-professional-v6.jpg"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </BorderTrace>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Fixed to bottom left to match screenshot */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
        onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        className="absolute bottom-10 left-10 flex items-center gap-3 z-20 transition-opacity cursor-pointer group"
      >
        <div className="w-6 h-10 border-2 border-on-surface rounded-full flex justify-center p-1 group-hover:border-primary transition-colors">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: -1, duration: 1.5 }}
            className="w-1 h-2 bg-on-surface group-hover:bg-primary rounded-full transition-colors"
          />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-on-surface group-hover:text-primary transition-colors">Scroll Down ↓</span>
      </motion.div>
    </section>
  );
};

export default Hero;
