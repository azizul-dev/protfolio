'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';

const Projects = () => {
  const projects = [
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
      setFilteredProjects(projects.filter(p => p.tags.includes(filter) || p.category === filter));
    }
  }, [filter]);

  const filterTags = ['All', 'Next.js', 'React', 'Management', 'Entertainment'];

  return (
    <section className="py-20 md:py-32 bg-background relative" id="projects">
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-editorial text-[32px] sm:text-[45px] md:text-[65px] text-foreground mb-6">
              Selected <span className="text-primary italic">Works</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Merging aesthetics with functionality to create digital products that stand out.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {filterTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all ${
                  filter === tag 
                  ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' 
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
          className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] md:rounded-[32px] mb-6 md:mb-8 glass-card border-none bg-surface">
                  <Image
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    src={project.image}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 glass-card px-3 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary z-20">
                    {project.category}
                  </div>

                  {/* Overlay on hover - Clean Reveal */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 backdrop-blur-md z-10">
                    <div className="flex gap-4 scale-90 group-hover:scale-100 transition-transform duration-500">
                      <a 
                        href={project.live} 
                        target="_blank" 
                        className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center hover:scale-110 transition-transform"
                        title="Live Demo"
                      >
                        <span className="material-symbols-outlined">visibility</span>
                      </a>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        className="w-12 h-12 rounded-full bg-surface text-foreground flex items-center justify-center border border-border hover:scale-110 transition-transform"
                        title="View Source"
                      >
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg" width={20} height={20} className="dark:invert opacity-70 group-hover:opacity-100" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="px-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors font-syne uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-[9px] font-mono text-muted uppercase tracking-widest bg-surface-variant px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
