"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectHero = ({ project }) => {
  return (
    <section className="relative pt-28 md:pt-36 pb-12 md:pb-20 overflow-hidden bg-background">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] lg:w-[900px] h-[350px] sm:h-[600px] lg:h-[900px] bg-primary/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border text-xs sm:text-sm font-semibold text-muted hover:text-primary hover:border-primary/40 transition-all duration-300 group"
          >
            <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            <span>Back to All Projects</span>
          </Link>
        </motion.div>

        {/* Category & Title */}
        <div className="max-w-4xl mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-3 mb-4"
          >
            <span className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em]">
              {project.category}
            </span>
            <span className="text-muted text-xs font-mono">
              Featured Case Study
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground font-syne uppercase tracking-tighter leading-[0.95] mb-6 break-words"
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted text-base sm:text-xl lg:text-2xl font-outfit leading-relaxed font-medium"
          >
            {project.heroTagline || project.description}
          </motion.p>
        </div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 sm:gap-3 mb-8 md:mb-12"
        >
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-surface-variant/80 backdrop-blur-md border border-border text-foreground text-xs sm:text-sm font-mono font-medium hover:border-primary/40 transition-colors"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Action Buttons (Live Demo & Github) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 md:mb-16"
        >
          {project.live && (
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-on-primary font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-all duration-300"
            >
              <span>Live Demo</span>
              <span className="material-symbols-outlined text-xl">
                open_in_new
              </span>
            </motion.a>
          )}

          {project.github && (
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card border border-border text-foreground font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:border-primary/50 transition-all duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                width={20}
                height={20}
                className="fill-current"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span>GitHub Repository</span>
            </motion.a>
          )}
        </motion.div>

        {/* Large Project Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden glass-card border border-white/10 shadow-2xl"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectHero;
