'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';
import Magnetic from './animation/Magnetic';

const Projects = () => {
  const projects = [
    {
      title: "SkillSphere — Learning Platform",
      description: "A modern fully responsive online learning platform where users can browse courses, authenticate with Google, and manage their profile.",
      tags: ["Next.js 15", "Better Auth", "MongoDB", "Tailwind CSS"],
      image: "/images/projects/skillsphere.png",
      live: "https://assignment-8-eta-two.vercel.app",
      github: "https://github.com/azizul-dev",
      category: "Education"
    },
    {
      title: "Keen Keeper",
      description: "A smart relationship management tool to keep track of friends and interactions.",
      tags: ["Next.js", "Tailwind", "Motion"],
      image: "/images/projects/keen-keeper.png",
      live: "https://assignment-7-swart-one.vercel.app/",
      github: "https://github.com/azizul-dev",
      category: "Management"
    },
    {
      title: "DigiTools",
      description: "A versatile digital asset platform for designers and developers.",
      tags: ["React", "JavaScript", "CSS"],
      image: "/images/projects/digitools.png",
      live: "https://demo-assignment-gamma.vercel.app/",
      github: "https://github.com/azizul-dev",
      category: "Productivity"
    },
    {
      title: "CineTrack",
      description: "Discover your next favorite movie using real-time data from TMDB.",
      tags: ["React", "TMDB API", "Axios"],
      image: "/images/projects/cinetrack.png",
      live: "https://cinetrack-az0.netlify.app/",
      github: "https://github.com/azizul-dev",
      category: "Entertainment"
    },
    {
      title: "PH Play Store",
      description: "An innovative app distribution platform built with Next.js App Router.",
      tags: ["Next.js", "App Router", "Tailwind"],
      image: "/images/projects/playstore.png",
      live: "https://ph-play-store-next.vercel.app/",
      github: "https://github.com/azizul-dev",
      category: "Platform"
    },
  ];

  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tags.some(tag => tag.includes(filter)) || p.category === filter));
    }
  }, [filter]);

  const filterTags = ['All', 'Next.js', 'React', 'Education', 'Management', 'Entertainment'];

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden" id="projects">
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-2xl">
            <h2 className="text-editorial text-[32px] sm:text-[45px] md:text-[65px] text-foreground mb-6">
              Selected <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed font-outfit">
              Merging aesthetics with functionality to create digital products that stand out.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2.5 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  filter === tag 
                  ? 'bg-primary text-on-primary shadow-[0_0_20px_rgba(34,197,94,0.3)]' 
                  : 'glass-card text-muted hover:bg-surface-variant'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isFeatured = index === 0 && filter === 'All';
              
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.23, 1, 0.32, 1] 
                  }}
                  className={`group relative w-full ${isFeatured ? 'md:col-span-2' : ''}`}
                >
                    <div className="h-full">
                      <BorderTrace className="h-full rounded-[24px] md:rounded-[32px]">
                        <div className={`relative h-full flex flex-col bg-surface/40 backdrop-blur-sm transition-all duration-500 hover:bg-surface/60 overflow-hidden ${isFeatured ? 'md:flex-row md:min-h-[450px]' : ''}`}>
                          {/* Image Container */}
                          <div className={`relative overflow-hidden w-full ${isFeatured ? 'md:w-3/5 h-[250px] sm:h-[350px] md:h-auto' : 'aspect-[16/10] md:aspect-[16/10]'}`}>
                            <Image
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 md:opacity-70 group-hover:opacity-100"
                              src={project.image}
                              fill
                              sizes={isFeatured ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 50vw"}
                              priority={isFeatured}
                            />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 md:top-6 md:left-6 glass-card px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary z-20">
                              {project.category}
                            </div>
                          </div>

                          {/* Content Container */}
                          <div className={`p-6 md:p-10 flex flex-col flex-grow ${isFeatured ? 'md:w-2/5 justify-center' : 'justify-between'}`}>
                            <div className="space-y-3 md:space-y-4">
                              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-1 md:mb-2">
                                {project.tags.map((tag) => (
                                  <span key={tag} className="text-[8px] md:text-[9px] font-mono text-primary/70 uppercase tracking-widest bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              
                              <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors font-syne uppercase tracking-tight leading-tight ${isFeatured ? 'text-2xl sm:text-3xl md:text-5xl' : 'text-lg md:text-2xl'}`}>
                                {project.title}
                              </h3>
                              
                              <p className={`text-muted leading-relaxed line-clamp-3 md:line-clamp-4 ${isFeatured ? 'text-sm md:text-lg' : 'text-[13px] md:text-sm'}`}>
                                {project.description}
                              </p>
                            </div>

                            <div className={`flex flex-wrap gap-3 md:gap-4 items-center ${isFeatured ? 'mt-6 md:mt-8' : 'mt-5 md:mt-6'}`}>
                              <a 
                                href={project.live} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 rounded-full bg-primary text-on-primary font-bold uppercase tracking-widest hover:scale-[1.03] transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.2)] ${isFeatured ? 'px-6 md:px-8 py-3 md:py-4 text-[10px] md:text-sm' : 'px-5 md:px-6 py-2.5 md:py-3 text-[9px] md:text-[10px]'}`}
                              >
                                <span className="material-symbols-outlined text-sm md:text-base">visibility</span>
                                Live Demo
                              </a>
                              <a 
                                href={project.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`rounded-full bg-white/5 text-white flex items-center justify-center border border-white/10 hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 ${isFeatured ? 'w-11 md:w-14 h-11 md:h-14' : 'w-9 md:w-11 h-9 md:h-11'}`}
                              >
                                <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" width={isFeatured ? 20 : 16} height={isFeatured ? 20 : 16} className="invert opacity-70 group-hover:opacity-100" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </BorderTrace>
                    </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
