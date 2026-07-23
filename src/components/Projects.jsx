"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleThumbnailClick = (id) => {
    const index = projects.findIndex((p) => p.id === id);
    setActiveIndex(index);
  };

  // Get thumbnails (all projects excluding active one)
  const getThumbnails = () => {
    const thumbnails = [];
    for (let i = 1; i < projects.length; i++) {
      thumbnails.push(projects[(activeIndex + i) % projects.length]);
    }
    return thumbnails;
  };

  return (
    <section
      className="relative w-full min-h-screen py-16 md:py-24 bg-background transition-colors duration-500 overflow-hidden"
      id="projects"
    >
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 flex flex-col min-h-[calc(100vh-160px)]">
        {/* Section Heading */}
        <div className="pt-8 md:pt-16 mb-8 md:mb-12 flex-shrink-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-500 dark:text-emerald-400 text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] mb-4 block drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
          >
            PROJECTS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground font-syne uppercase tracking-tight mb-3 md:mb-4 leading-none break-words max-w-full overflow-hidden"
          >
            Featured <span className="text-primary italic">Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted text-sm md:text-lg max-w-xl font-outfit"
          >
            A collection of projects showcasing my frontend & full-stack development skills. Click any project card to view full case study details.
          </motion.p>
        </div>

        {/* Content & Thumbnails Wrapper */}
        <div className="flex-grow flex flex-col justify-between pb-10 md:pb-16 relative">
          {/* Main Featured Content (Wrapped in Clickable Link Card) */}
          <div className="max-w-6xl relative z-10 py-6 md:py-10">
            <Link
              href={`/projects/${activeProject.slug}`}
              className="block group"
              title={`View ${activeProject.title} project details`}
            >
              <motion.div
                key={`card-${activeProject.id}`}
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                className="glass-card p-8 md:p-14 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/5 shadow-2xl relative overflow-hidden cursor-pointer group-hover:border-primary/50 transition-all duration-500"
              >
                {/* Internal Background Slider */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`bg-${activeProject.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 z-0 pointer-events-none"
                  >
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover opacity-10 md:opacity-20 scale-105 group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/40 to-transparent"></div>
                  </motion.div>
                </AnimatePresence>

                {/* Internal Card Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-primary/15 transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-3 md:gap-4 mb-6 md:mb-10">
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.6em] opacity-80">
                        {activeProject.category}
                      </span>
                      <div className="h-[1px] w-8 md:w-12 bg-primary/30"></div>
                      <span className="text-muted text-[10px] md:text-xs font-mono">
                        {String(activeIndex + 1).padStart(2, "0")} /{" "}
                        {String(projects.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] md:text-xs font-bold uppercase tracking-widest group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                      <span>View Details</span>
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>

                  <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground font-syne uppercase tracking-tighter leading-[0.9] mb-3 drop-shadow-sm break-words max-w-full overflow-hidden group-hover:text-primary transition-colors duration-300">
                    {activeProject.title}
                  </h2>
                  <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-syne text-primary italic uppercase mb-8 md:mb-10 font-extrabold tracking-tight leading-none break-words max-w-full overflow-hidden">
                    {activeProject.subtitle}
                  </h3>
                  <p className="text-muted text-sm md:text-lg leading-relaxed max-w-3xl mb-8 md:mb-10 line-clamp-4 md:line-clamp-none font-medium opacity-80">
                    {activeProject.description}
                  </p>

                  {/* Tech Tags preview */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {activeProject.tags.slice(0, 5).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono font-medium bg-surface-variant/80 border border-border text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                    {activeProject.tags.length > 5 && (
                      <span className="px-3 py-1 rounded-full text-[10px] md:text-xs font-mono font-medium bg-primary/10 text-primary border border-primary/20">
                        +{activeProject.tags.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>

          {/* Bottom Slider Section */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10 mt-auto pt-6">
            {/* Navigation Controls (Left-Bottom) */}
            <div className="flex flex-col gap-4 md:gap-6 order-2 md:order-1">
              <div className="hidden md:block w-48 h-[2px] bg-foreground/10 relative overflow-hidden rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((activeIndex + 1) / projects.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 text-foreground group glass-card"
                  aria-label="Previous project"
                >
                  <span className="material-symbols-outlined text-lg md:text-xl group-hover:scale-110 transition-transform">
                    arrow_back
                  </span>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-foreground/10 flex items-center justify-center hover:bg-foreground hover:text-background transition-all duration-500 text-foreground group glass-card"
                  aria-label="Next project"
                >
                  <span className="material-symbols-outlined text-lg md:text-xl group-hover:scale-110 transition-transform">
                    arrow_forward
                  </span>
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
                  transition={{ delay: index * 0.05 + 0.2 }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => handleThumbnailClick(project.id)}
                  className="relative flex-shrink-0 w-28 md:w-44 aspect-[2/3] rounded-2xl md:rounded-3xl overflow-hidden group border border-foreground/5 shadow-lg text-left"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 120px, 200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 bg-gradient-to-t from-background/90 via-background/40 to-transparent">
                    <h4 className="text-[10px] md:text-xs font-bold text-foreground mb-0.5 truncate">
                      {project.title}
                    </h4>
                    <p className="text-[8px] md:text-[10px] text-primary font-bold uppercase tracking-widest opacity-80 truncate">
                      {project.category}
                    </p>
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
