'use client';

import { motion } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: "code",
      skills: ["React JS", "Next JS", "JavaScript", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
      className: "md:col-span-2 md:row-span-2"
    },
    {
      title: "Creative Tools",
      icon: "palette",
      skills: ["Figma", "Photoshop", "After Effects"],
      className: "md:col-span-2 md:row-span-1"
    },
    {
      title: "Deployment",
      icon: "cloud_upload",
      skills: ["Vercel", "Netlify", "GitHub Pages"],
      className: "md:col-span-1 md:row-span-1"
    },
    {
      title: "Learning",
      icon: "school",
      skills: ["Three.js", "GSAP", "Prisma"],
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden" id="stack">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-500 dark:text-emerald-400 text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] mb-4 block drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
            >
              TECH STACK
            </motion.span>
            <h2 className="text-editorial text-[32px] sm:text-[45px] md:text-[60px] text-on-surface mb-6">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              A curated selection of technologies and tools I use to bring digital experiences to life. 
              Always learning, always evolving.
            </p>
          </div>
        </div>

        <div className="bento-grid !grid-rows-none h-fit">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-5 md:p-6 rounded-[24px] md:rounded-[32px] group relative overflow-hidden h-fit ${category.className}`}
            >
              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors"></div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">{category.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1.5 bg-surface-variant text-[10px] font-bold text-muted rounded-full border border-border hover:border-primary/30 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Progress Bar Substitute (Minimalist) */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-surface-variant/20">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
