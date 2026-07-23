"use client";

import { motion } from "framer-motion";

const ProjectFeatures = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <section className="py-12 sm:py-20 bg-background/50 border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
          >
            SYSTEM CAPABILITIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground font-syne uppercase tracking-tight"
          >
            Key <span className="text-primary italic">Features</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">
                  {feature.icon || "star"}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-syne text-foreground mb-3 uppercase tracking-tight">
                {feature.title}
              </h3>

              <p className="text-muted text-xs sm:text-sm leading-relaxed font-outfit">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeatures;
