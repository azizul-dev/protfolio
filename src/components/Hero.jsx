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
          <a href="https://www.linkedin.com/in/azizul-islam-dev" target="_blank" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors group shadow-lg">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzkinyOFiw27lN0ievIiZjWdenAVAD1PoBOvDK6POXSp3tH_2BwVvpPfdCzyYi_WOMpdAMIP5yH3q7UcbJdFuZxjp7pqPCz9b-bzyQpAWVAhMSd5_vk8YJ7t586iIMcYbKt1Y1FU_8gV4Q_LsWoTt5SMojNGaxUTG_JDZVqCJJmzscjPjL3iC9odHqymQC69mNwBNiez3rHsAM7Eb_oaEWYv2YgOKYesZB1GMoYxNXi3Adit6bFZgmz21lorRPYoMTHsihJ8o0HTGY" width={16} height={16} alt="LinkedIn" className="group-hover:invert transition-all" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="https://github.com/azizul-dev" target="_blank" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors group shadow-lg">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN2eV4l-fAQ3RT4rnT_0jXqGki2PHQQW751RxlUUijt9nPmat7cgQsm4ah4AKj0ktFU-ZtRu199D6u_oyHIS22BIKoOwB-cY2nJ_BSl3m3C7isrFB8nYJ3lN0OOo8rtEADlKXZkpHceD3qYu8nos_6GZ4Bxi_RgibVJXtoSvUStzgNDPtgCAltZbpLWT-slQUTiwbAxvvK3MPha-490cF0U-OkUDl2obmaWVU6gi2wjYG_LZc77FeLjZ_LwX6QI2viHKxnaCCs755k" width={16} height={16} alt="GitHub" className="group-hover:invert transition-all" />
          </a>
        </Magnetic>
        <Magnetic>
          <a href="#" className="w-10 h-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors group shadow-lg">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyZhtkeog4P7K3KJr4tuIwDHT0dM9KGXTV4jMznBHtbKXiOCKyrmFmE01X4sZ79mI2i4DR7KvlSIcR5Blp5ki1CJFn8PJkF3Lw7XwCAL0Tj6kdq1C8APIaTlZ0N31eEnxs7XvoO4takDGUB-BaSM5-8ubMTHlaOTGsq7_WV4zITj1r9NtVaJ-blZheIyXqHDxvYcNh03Tva6XMSrJx3_FhmV4W0o-ics_7CA9yE2jNf56iHi77ItSQDWWzEe_mn-FQgSqxrL3shBk9" width={16} height={16} alt="X" className="group-hover:invert transition-all" />
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
          <motion.div variants={itemVariants} className="text-lg md:text-xl font-medium text-on-surface">
            Hey, I&apos;m
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[48px] md:text-[84px] leading-[1.1] md:leading-[1] font-bold tracking-tight text-on-surface flex flex-wrap justify-center md:justify-start items-center gap-4"
          >
            Azizul Islam <span className="animate-waving-hand inline-block text-4xl md:text-7xl">👋</span>
          </motion.h1>
          
          <motion.div variants={itemVariants}>
            <Typewriter />
          </motion.div>
          
          <motion.p 
            variants={itemVariants}
            className="text-[15px] md:text-[16px] leading-[26px] text-on-surface-variant max-w-xl mx-auto md:mx-0"
          >
            🚀 Turning ideas into Stunning Websites 💻 <br />
            | Available for projects and collaborations 🌟
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-4 flex justify-center md:justify-start">
            <Magnetic>
              <button className="glass-card px-8 md:px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all flex items-center gap-3 group">
                Say Hello 
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex-1 relative order-1 md:order-2"
        >
          <BorderTrace className="!rounded-full mx-auto w-fit">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] rounded-full p-4 border border-primary/5 bg-gradient-to-b from-primary/10 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/20 bg-surface-container relative">
                <Image
                  alt="Azizul Islam"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBteVSY_hicEkMsrgBLfJVtyt2sBimua-xCvgqxx-np1XFfLLeMlTbL-NLrVvKBeKq1bWhGryCGNEdDII5p4sZH0uzovsnZbT4zqoRxUyosauZsW3_JBDHjMK1fsNUoVqwTTEJvOlhqth7tadg2qqBAkkXmcrYTcpDe6bD5k75GHlpop7trsrJ8sNXD7vsbVW3mKt4GdvIEoOpwxv5aoQRiENZVJqrAcTrfbRRHRBovu3fGjFTOAO_vo6tYqGD94cN30uzT2qXG1eEP"
                  width={450}
                  height={450}
                  priority
                />
              </div>
            </div>
          </BorderTrace>

          {/* Floating Stats - Updated for real experience */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -right-2 md:-right-4 top-4 md:top-10 glass-card border-primary/30 px-3 md:px-4 py-2 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(34,197,94,0.1)] z-20 scale-90 md:scale-100"
          >
            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 md:p-2 rounded-lg text-sm md:text-base">code</span>
            <div>
              <div className="text-base md:text-lg font-bold">Solving</div>
              <div className="text-[8px] md:text-[10px] text-neutral-500 uppercase tracking-tighter leading-none">Problems</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 glass-card border-primary/30 px-3 md:px-4 py-2 md:py-3 rounded-2xl flex items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(34,197,94,0.1)] z-20 scale-90 md:scale-100"
          >
            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 md:p-2 rounded-lg text-sm md:text-base">person</span>
            <div>
              <div className="text-base md:text-lg font-bold">Junior</div>
              <div className="text-[8px] md:text-[10px] text-neutral-500 uppercase tracking-tighter leading-none">Developer</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -bottom-2 md:-bottom-4 left-1/2 -translate-x-1/2 glass-card border-primary/30 px-4 md:px-6 py-2 md:py-3 rounded-2xl flex items-center gap-3 md:gap-4 shadow-[0_0_20px_rgba(34,197,94,0.1)] z-20 whitespace-nowrap scale-90 md:scale-100"
          >
            <span className="material-symbols-outlined text-primary bg-primary/10 p-1.5 md:p-2 rounded-lg text-sm md:text-base">rocket_launch</span>
            <div>
              <div className="text-base md:text-lg font-bold">Personal</div>
              <div className="text-[8px] md:text-[10px] text-neutral-500 uppercase tracking-tighter leading-none">Projects</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator - Hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-10 left-10 items-center gap-3 z-20 opacity-60 hover:opacity-100 transition-opacity cursor-default">
        <div className="w-6 h-10 border-2 border-on-surface rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: -1, duration: 1.5 }}
            className="w-1 h-2 bg-on-surface rounded-full"
          />
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-on-surface">Scroll Down ↓</span>
      </div>
    </section>
  );
};

export default Hero;
