'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 max-w-[1200px] mx-auto px-6" id="projects">
      <div className="text-center mb-16">
        <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.01em] mb-4 text-on-surface">
          Featured Projects
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">
          A collection of my best work, showcasing my journey across different frameworks and technologies.
        </p>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {projects.map((project) => (
          <BorderTrace key={project.title} className="rounded-2xl h-full">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative z-10 bg-surface-container/50">
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
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
