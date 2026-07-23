"use client";

import { motion } from "framer-motion";

const ProjectTechStack = ({ techStack }) => {
  if (!techStack) return null;

  const categories = [
    { title: "Frontend", items: techStack.frontend, icon: "code", color: "border-emerald-500/30 text-emerald-400" },
    { title: "Backend", items: techStack.backend, icon: "dns", color: "border-cyan-500/30 text-cyan-400" },
    { title: "Database", items: techStack.database, icon: "database", color: "border-orange-500/30 text-orange-400" },
    { title: "Authentication", items: techStack.authentication, icon: "verified_user", color: "border-purple-500/30 text-purple-400" },
    { title: "Deployment", items: techStack.deployment, icon: "cloud_upload", color: "border-pink-500/30 text-pink-400" },
    ...(techStack.aiApis
      ? [{ title: "AI APIs", items: techStack.aiApis, icon: "psychology", color: "border-yellow-500/30 text-yellow-400" }]
      : [])
  ];

  return (
    <section className="py-12 sm:py-20 bg-background border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
          >
            TECHNICAL SPECIFICATIONS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground font-syne uppercase tracking-tight"
          >
            Tech <span className="text-primary italic">Stack</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`material-symbols-outlined text-2xl sm:text-3xl ${cat.color.split(" ")[1]}`}>
                    {cat.icon}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-syne text-foreground uppercase tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items && cat.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-xl bg-surface-variant/80 border border-border text-foreground text-xs sm:text-sm font-mono font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectTechStack;
