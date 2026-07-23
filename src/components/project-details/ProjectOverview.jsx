"use client";

import { motion } from "framer-motion";

const ProjectOverview = ({ overview }) => {
  if (!overview) return null;

  const items = [
    {
      title: "Purpose",
      content: overview.purpose,
      icon: "flag",
      color: "text-emerald-400"
    },
    {
      title: "Goal",
      content: overview.goal,
      icon: "center_focus_strong",
      color: "text-cyan-400"
    },
    {
      title: "Target Users",
      content: overview.targetUsers,
      icon: "groups",
      color: "text-orange-400"
    },
    {
      title: "Main Functionality",
      content: overview.mainFunctionality,
      icon: "auto_awesome",
      color: "text-purple-400"
    }
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
            ARCHITECTURE & INTENT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground font-syne uppercase tracking-tight"
          >
            Project <span className="text-primary italic">Overview</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl flex flex-col justify-between group hover:border-primary/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <span className={`material-symbols-outlined text-3xl sm:text-4xl ${item.color}`}>
                    {item.icon}
                  </span>
                  <span className="text-muted text-[10px] font-mono font-bold tracking-widest uppercase">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-syne text-foreground mb-3 uppercase tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted text-sm sm:text-base leading-relaxed font-outfit">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
