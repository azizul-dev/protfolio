'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';

const Projects = () => {
  const projects = [
    {
      title: "Keen Keeper",
      description: "A smart relationship management tool to keep track of friends, interactions, and meaningful connections. Built with Next.js for optimal performance.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/images/projects/keen-keeper.png",
      link: "https://assignment-7-swart-one.vercel.app/",
    },
    {
      title: "DigiTools",
      description: "A versatile digital asset platform for designers and developers. High-performance React application with a clean, modern interface.",
      tags: ["React.js", "JavaScript", "Tailwind"],
      image: "/images/projects/digitools.png",
      link: "https://demo-assignment-gamma.vercel.app/",
    },
    {
      title: "CineTrack",
      description: "Discover your next favorite movie. A comprehensive movie tracking and discovery app using real-time data from TMDB API.",
      tags: ["React.js", "TMDB API", "JavaScript"],
      image: "/images/projects/cinetrack.png",
      link: "https://cinetrack-az0.netlify.app/",
    },
    {
      title: "PH Play Store Next",
      description: "An innovative app distribution platform. Built with Next.js App Router for a seamless and productive user experience.",
      tags: ["Next.js", "App Router", "Tailwind"],
      image: "/images/projects/playstore.png",
      link: "https://ph-play-store-next.vercel.app/",
    },
  ];

  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tags.includes(filter)));
    }
  }, [filter]);

  const filterTags = ['All', 'Next.js', 'React.js', 'Tailwind CSS'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { scale: 0.8, opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.01em] mb-4 text-on-surface">
          Featured Projects
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto mb-10">
          A collection of my best work, showcasing my journey across different frameworks and technologies.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all border ${
                filter === tag 
                ? 'bg-primary text-on-primary border-primary shadow-[0_0_15px_rgba(75,226,119,0.4)]' 
                : 'bg-surface-container border-primary/10 text-on-surface-variant hover:border-primary/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <TiltCard project={project} index={index} itemVariants={itemVariants} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

const TiltCard = ({ project, index, itemVariants }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width - 0.5) * 20; // Max rotation 10deg
    const yPct = (mouseY / height - 0.5) * -20;
    
    setRotate({ x: yPct, y: xPct });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative group/project h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      style={{ perspective: '1000px' }}
    >
      <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-surface-container border border-primary/20 flex items-center justify-center font-mono font-bold text-base text-primary shadow-2xl z-30 group-hover/project:bg-primary group-hover/project:text-on-primary transition-all duration-500">
        {(index + 1).toString().padStart(2, '0')}
      </div>

      <BorderTrace className="rounded-2xl h-full relative">
        <motion.div 
          variants={itemVariants}
          animate={{ rotateX: rotate.x, rotateY: rotate.y }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="group flex flex-col h-full relative bg-surface-container/50 rounded-2xl overflow-hidden"
        >
          <div className="relative h-64 overflow-hidden rounded-t-2xl">
            <Image
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              src={project.image}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-60"></div>
          </div>
          <div className="p-8 flex flex-col flex-1 relative z-10">
            <div className="flex gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-surface-container text-[10px] font-mono text-primary rounded border border-primary/20 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-on-surface-variant text-sm mb-6 flex-1">
              {project.description}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              className="group/btn flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider w-fit"
            >
              View Live Site
              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                open_in_new
              </span>
            </a>
          </div>
        </motion.div>
      </BorderTrace>
    </div>
  );
};

export default Projects;
