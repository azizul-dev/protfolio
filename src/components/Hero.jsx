"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';
import Typewriter from './animation/Typewriter';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [showBadgeInfo, setShowBadgeInfo] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20 bg-background" id="home">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-0"></div>
      
      {/* Scanning Lights */}
      <motion.div
        initial={{ x: '-100%' }} animate={{ x: '200%' }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 pointer-events-none z-0"
      />
      
      {/* Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
        <motion.div 
          className="flex-1 text-center md:text-left order-2 md:order-1 w-full"
          initial="hidden" animate="visible" variants={containerVariants}
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for projects
            </span>
          </motion.div>
          
          {/* Greeting */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.5em] text-primary/80 mb-3"
          >
            HEY, I&apos;M
            <motion.span animate={{ rotate: [0, 14, -8, 14, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block origin-[70%_70%] text-lg">👋</motion.span>
          </motion.div>
          
          {/* Name */}
          <motion.h1 
            variants={itemVariants}
            className="text-editorial text-[38px] sm:text-[50px] md:text-[80px] lg:text-[100px] text-on-surface mb-6 leading-[1.1] uppercase font-black"
          >
            Azizul <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim drop-shadow-sm">Islam</span>
          </motion.h1>

          {/* Typewriter Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 text-lg md:text-3xl font-semibold mb-10 min-h-[1.5em]"
          >
            <span className="text-foreground uppercase tracking-tight text-primary">I &apos;AM</span>
            <span className="text-primary/30 font-light">|</span>
            <Typewriter 
              words={["Full Stack Developer", "Creative UI Architect", "Problem Solver"]} 
              className="text-foreground"
              cursorClassName="text-primary ml-1"
            />
          </motion.div>
          
          {/* CTAs */}
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 pt-4">
              <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-on-primary font-bold transition-all hover:scale-105 hover:-translate-y-1 text-center text-xs uppercase tracking-widest">
                View My Work
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-variant/50 border border-border text-foreground font-bold transition-all hover:bg-surface-variant hover:-translate-y-1 text-center text-xs uppercase tracking-widest">
                Let's Talk
              </a>
            </div>
          </motion.div>

          {/* Expertise Badges */}
          <motion.div variants={itemVariants} className="pt-12">
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <div className="px-5 py-2.5 rounded-full bg-surface-variant/30 backdrop-blur-md border border-primary/20 text-[9px] font-bold uppercase tracking-widest text-primary">
               FULL STACK DEVELOPER
              </div>
              <div className="px-5 py-2.5 rounded-full bg-surface-variant/30 backdrop-blur-md border border-primary/20 text-[9px] font-bold uppercase tracking-widest text-primary">
                🚀 Open to Work
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative order-1 md:order-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-none"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-[420px] md:h-[420px] mx-auto">
            {/* Glows */}
            <motion.div animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -inset-8 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Orbits */}
            {[
              { size: 'inset-[-15%]', d: 25, op: 0.2 },
              { size: 'inset-[-30%]', d: 35, op: 0.1, rev: true },
            ].map((r, i) => (
              <motion.div key={i} animate={{ rotate: r.rev ? -360 : 360 }} transition={{ duration: r.d, repeat: Infinity, ease: "linear" }} className={`absolute ${r.size} border border-primary/${r.op * 100} rounded-full`} />
            ))}

            {/* Portrait */}
            <div className="relative w-full h-full rounded-full p-2 bg-background/20 backdrop-blur-sm border border-primary/30 shadow-2xl overflow-hidden">
              <Image
                alt="Azizul Islam"
                src="/images/profile-professional-v6.jpg"
                fill priority
                className="object-cover"
                sizes="(max-width: 768px) 250px, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>

            {/* Round Badge Button */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-6 z-30"
            >
              <div 
                className="relative group cursor-pointer"
                onClick={() => setShowBadgeInfo(!showBadgeInfo)}
              >
                {/* Background Circle */}
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-background/80 backdrop-blur-2xl border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)] group-hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-500 hover:scale-105">
                  
                  {/* Rotating Circular Text Path */}
                  <div className="absolute inset-0 p-1 animate-[spin_15s_linear_infinite] group-hover:animate-[spin_10s_linear_infinite]">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                      </defs>
                      <text className="text-[7px] font-bold uppercase tracking-[0.2em] fill-primary opacity-40 group-hover:opacity-100 transition-opacity">
                        <textPath href="#circlePath">
                          Full Stack Developer • Full Stack Developer •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Inner Icon Circle */}
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center relative z-10">
                    <span className="material-symbols-outlined text-primary text-xl md:text-3xl group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out">code</span>
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                </div>

                {/* Animated Info Bubble on Click */}
                <AnimatePresence>
                  {showBadgeInfo && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: -10 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: -10 }}
                      className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap px-4 py-2 rounded-xl bg-background/90 backdrop-blur-xl border border-primary/30 shadow-2xl z-50"
                    >
                      <span className="text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase">
                       Full Stack Developer
                      </span>
                      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-background border-l border-b border-primary/30 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
