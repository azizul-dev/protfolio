"use client";

import { motion } from "framer-motion";

const ProjectLessons = ({ lessonsLearned, futureImprovements }) => {
  return (
    <section className="py-12 sm:py-20 bg-background border-t border-border/40">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Lessons Learned */}
          {lessonsLearned && lessonsLearned.length > 0 && (
            <div>
              <div className="mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
                >
                  TAKEAWAYS & GROWTH
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-black text-foreground font-syne uppercase tracking-tight"
                >
                  Lessons <span className="text-primary italic">Learned</span>
                </motion.h2>
              </div>

              <div className="flex flex-col gap-4">
                {lessonsLearned.map((lesson, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 shadow-md flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">
                      lightbulb
                    </span>
                    <p className="text-foreground/90 text-sm sm:text-base font-outfit leading-relaxed">
                      {lesson}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Future Improvements Roadmap */}
          {futureImprovements && futureImprovements.length > 0 && (
            <div>
              <div className="mb-8">
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] mb-2 block"
                >
                  NEXT HORIZONS
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-4xl font-black text-foreground font-syne uppercase tracking-tight"
                >
                  Future <span className="text-primary italic">Improvements</span>
                </motion.h2>
              </div>

              <div className="flex flex-col gap-4">
                {futureImprovements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="glass-card p-5 sm:p-6 rounded-2xl border border-white/5 shadow-md flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                  >
                    <span className="material-symbols-outlined text-cyan-400 text-xl mt-0.5">
                      rocket_launch
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold font-syne text-foreground uppercase tracking-tight mb-1">
                        {typeof item === "string" ? item : item.title}
                      </h4>
                      {typeof item !== "string" && item.description && (
                        <p className="text-muted text-xs sm:text-sm font-outfit leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectLessons;
