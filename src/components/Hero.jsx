'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';
import Typewriter from './animation/Typewriter';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20 bg-background" id="home">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none z-0"></div>
      
      {/* Scanning Light Effect */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-primary/5 to-transparent skew-x-12 pointer-events-none z-0"
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent skew-x-12 pointer-events-none z-0"
      />
      
      {/* Subtle Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-24 relative z-10">
        <motion.div 
          className="flex-1 text-center md:text-left order-2 md:order-1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-[0.2em] text-primary h-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for projects
            </span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center md:justify-start gap-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.6em] text-primary/80 mb-4"
          >
            HEY, I&apos;M
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="inline-block origin-[70%_70%] text-lg md:text-xl"
            >
              👋
            </motion.span>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-editorial text-[35px] sm:text-[55px] md:text-[85px] lg:text-[105px] text-on-surface mb-6 leading-[1.1] md:leading-[1] uppercase"
          >
            Azizul <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">Islam</span>
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-2xl md:text-4xl font-semibold mb-10 min-h-[1.5em]"
          >
            <span className="text-foreground font-syne uppercase tracking-tight">I AM</span>
            <span className="text-primary/30 font-light">|</span>
            <Typewriter 
              words={["I build modern web experiences", "I love creating beautiful websites"]} 
              className="text-primary drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]"
              cursorClassName="text-primary animate-pulse ml-1"
            />
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8">
              <a 
                href="#projects" 
                className="group relative px-8 py-4 rounded-full bg-primary text-on-primary font-bold overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-[2px]"
              >
                <span className="relative z-10 flex items-center gap-2 uppercase tracking-widest text-xs">
                  View My Projects
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </span>
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-4 rounded-full bg-surface-variant border border-border text-foreground font-bold transition-all duration-300 hover:scale-[1.02] hover:-translate-y-[2px] hover:bg-surface-variant/80 uppercase tracking-widest text-xs"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-12">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="px-5 py-2.5 rounded-full bg-surface-variant/30 backdrop-blur-md border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-lg shadow-primary/5 hover:scale-[1.05] transition-all cursor-default flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Frontend Developer
              </div>
              <div className="px-5 py-2.5 rounded-full bg-surface-variant/30 backdrop-blur-md border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-lg shadow-primary/5 hover:scale-[1.05] transition-all cursor-default">
                🚀 Open to Opportunities
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 relative order-1 md:order-2"
        >
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] mx-auto group">
            {/* Minimalist Border */}
            <div className="absolute -inset-4 border border-primary/5 rounded-full pointer-events-none"></div>
            
            <BorderTrace className="!rounded-full w-full h-full p-2">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-border relative shadow-2xl">
                <Image
                  alt="Azizul Islam"
                  className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-100"
                  src="/images/profile-professional-v6.jpg"
                  fill
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-40"></div>
              </div>
            </BorderTrace>
          </div>
        </motion.div>
      </div>



      {/* Bottom Scroll Indicator - Minimal */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-30"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
