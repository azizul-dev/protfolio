'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "SkillSphere",
      subtitle: "Learning Platform",
      description: "A modern fully responsive online learning platform where users can browse courses, authenticate with Google, and manage their profile.",
      tags: ["Next.js 15", "Better Auth", "MongoDB"],
      image: "/images/projects/skillsphere.png",
      live: "https://assignment-8-eta-two.vercel.app",
      github: "https://github.com/azizul-dev",
      category: "Education"
    },
    {
      id: 1,
      title: "Keen Keeper",
      subtitle: "Relationship Tool",
      description: "A smart relationship management tool to keep track of friends and interactions with intelligent tracking.",
      tags: ["Next.js", "Tailwind", "Motion"],
      image: "/images/projects/keen-keeper.png",
      live: "https://assignment-7-swart-one.vercel.app/",
      github: "https://github.com/azizul-dev",
      category: "Management"
    },
    {
      id: 2,
      title: "DigiTools",
      subtitle: "Digital Assets",
      description: "A versatile digital asset platform for designers and developers to manage their resources efficiently.",
      tags: ["React", "JavaScript", "CSS"],
      image: "/images/projects/digitools.png",
      live: "https://demo-assignment-gamma.vercel.app/",
      github: "https://github.com/azizul-dev",
      category: "Productivity"
    },
    {
      id: 3,
      title: "CineTrack",
      subtitle: "Movie Discovery",
      description: "Discover your next favorite movie using real-time data from TMDB with a premium interface.",
      tags: ["React", "TMDB API", "Axios"],
      image: "/images/projects/cinetrack.png",
      live: "https://cinetrack-az0.netlify.app/",
      github: "https://github.com/azizul-dev",
      category: "Entertainment"
    },
    {
      id: 4,
      title: "PH Play Store",
      subtitle: "App Distribution",
      description: "An innovative app distribution platform built with Next.js App Router for high performance.",
      tags: ["Next.js", "App Router", "Tailwind"],
      image: "/images/projects/playstore.png",
      live: "https://ph-play-store-next.vercel.app/",
      github: "https://github.com/azizul-dev",
      category: "Platform"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleThumbnailClick = (id) => {
    const index = projects.findIndex(p => p.id === id);
    setActiveIndex(index);
  };

  // Get the thumbnails (all projects excluding active one, starting from next)
  const getThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i < projects.length; i++) {
      thumbnails.push(projects[(activeIndex + i) % projects.length]);
    }
    return thumbnails;
  };

  return (
    <section className="relative w-full min-h-screen py-16 md:py-24 bg-background transition-colors duration-500 overflow-hidden" id="projects">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            sizes="100vw"
            className="object-cover opacity-20 md:opacity-40 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col min-h-[calc(100vh-160px)]">
        {/* New Section Heading */}
        <div className="pt-8 md:pt-16 mb-8 md:mb-12 flex-shrink-0">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] mb-3 md:mb-4 block"
          >
            PROJECTS
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-foreground font-syne uppercase tracking-tight mb-3 md:mb-4 leading-[1.1]"
          >
            Featured <span className="text-primary italic">Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm md:text-lg max-w-xl font-outfit"
          >
            A collection of projects showcasing my frontend development skills.
          </motion.p>
        </div>

        {/* Content & Thumbnails Wrapper */}
        <div className="flex-grow flex flex-col justify-between pb-10 md:pb-16 relative">
          {/* Main Featured Content (Top Section) */}
          <div className="max-w-5xl py-4 md:py-8">
            <motion.div
              key={`content-${activeProject.id}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] opacity-80">
                  {activeProject.category}
                </span>
                <div className="h-[1px] w-8 md:w-12 bg-primary/30"></div>
                <span className="text-muted text-[10px] md:text-xs font-mono">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-black text-foreground font-syne uppercase tracking-tighter leading-[0.8] mb-2 drop-shadow-sm">
                {activeProject.title}
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-syne text-primary italic uppercase mb-6 md:mb-8 font-extrabold tracking-tight leading-none">
                {activeProject.subtitle}
              </h3>
              <p className="text-muted text-sm md:text-lg leading-relaxed max-w-2xl mb-8 md:mb-10 line-clamp-4 md:line-clamp-none font-medium">
                {activeProject.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 md:gap-6">
                <motion.a
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 20px rgba(34,197,94,0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full glass-card flex items-center justify-center border border-primary/40 text-primary shadow-sm transition-all duration-300 group"
                  title="Live Demo"
                >
                  <span className="material-symbols-outlined text-xl md:text-3xl group-hover:scale-110 transition-transform">visibility</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 0 20px rgba(0,0,0,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 md:w-16 h-12 md:h-16 rounded-full glass-card flex items-center justify-center border border-foreground/10 text-foreground transition-all duration-300 group"
                  title="GitHub Repository"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width={20} 
                    height={20} 
                    className="fill-current opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all md:w-6 md:h-6"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Bottom Slider Section (Fixed: No Overlap) */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mt-auto pt-6">
            {/* Navigation Controls (Left-Bottom) */}
            <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
              {/* Progress Line */}
              <div className="hidden md:block w-48 h-[2px] bg-foreground/5 relative overflow-hidden rounded-full">
                <motion.div 
                  key={activeIndex}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  onAnimationComplete={handleNext}
                  className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 text-foreground group glass-card"
                >
                  <span className="material-symbols-outlined text-lg md:text-xl group-hover:scale-110 transition-transform">arrow_back</span>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 text-foreground group glass-card"
                >
                  <span className="material-symbols-outlined text-lg md:text-xl group-hover:scale-110 transition-transform">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Thumbnails (Right-Bottom) */}
            <div className="flex gap-3 md:gap-5 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6 md:mx-0 md:px-0 order-1 md:order-2">
              {getThumbnails().map((project, index) => (
                <motion.button
                  key={project.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
                  onClick={() => handleThumbnailClick(project.id)}
                  className="relative flex-shrink-0 w-24 md:w-44 aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden group border border-foreground/5 shadow-lg"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100px, 200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                    <h4 className="text-[9px] md:text-xs font-bold text-foreground mb-0.5 truncate">{project.title}</h4>
                    <p className="text-[7px] md:text-[10px] text-primary font-bold uppercase tracking-widest opacity-80 truncate">{project.category}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;



