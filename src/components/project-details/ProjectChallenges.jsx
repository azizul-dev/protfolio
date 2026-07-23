"use client";

import { motion } from "framer-motion";

const ProjectChallenges = ({ challenges }) => {
  if (!challenges || challenges.length === 0) return null;

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
            ENGINEERING TRIALS & TRIUMPHS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-foreground font-syne uppercase tracking-tight"
          >
            Challenges & <span className="text-primary italic">Solutions</span>
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          {challenges.map((challenge, idx) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary text-xs font-mono font-bold">
                  {idx + 1}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-syne text-foreground uppercase tracking-tight">
                  {challenge.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 font-outfit">
                {/* Problem */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface-variant/40 border border-red-500/20">
                  <div className="flex items-center gap-2 mb-2 text-red-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-lg">error_outline</span>
                    <span>Problem</span>
                  </div>
                  <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed">
                    {challenge.problem}
                  </p>
                </div>

                {/* Why it happened */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface-variant/40 border border-amber-500/20">
                  <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-lg">help_outline</span>
                    <span>Why It Happened</span>
                  </div>
                  <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed">
                    {challenge.why}
                  </p>
                </div>

                {/* How I debugged it */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface-variant/40 border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2 text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-lg">bug_report</span>
                    <span>How I Debugged It</span>
                  </div>
                  <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed">
                    {challenge.debug}
                  </p>
                </div>

                {/* Final Solution */}
                <div className="p-5 sm:p-6 rounded-2xl bg-surface-variant/40 border border-emerald-500/20">
                  <div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <span className="material-symbols-outlined text-lg">check_circle_outline</span>
                    <span>Final Solution</span>
                  </div>
                  <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed">
                    {challenge.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectChallenges;
