'use client';

import { motion } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';

const Education = () => {
  const education = [
    {
      degree: "Diploma in Engineering",
      subject: "Computer Technology",
      institution: "Satkhira Polytechnic Institute",
      status: "Currently in 7th Semester",
      year: "Ongoing",
      icon: "engineering",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      subject: "Science",
      institution: "CSECST",
      status: "Passed",
      year: "Completed",
      icon: "school",
    },
  ];

  return (
    <section className="py-32 bg-background relative" id="education">
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-editorial text-[35px] md:text-[50px] text-on-surface mb-6">
              Education <span className="text-primary italic">Journey</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 rounded-[40px] group relative overflow-hidden flex gap-8 items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/5 text-primary text-[9px] font-bold uppercase rounded-full border border-primary/20">
                    {item.year}
                  </span>
                  <span className="text-muted text-[10px] font-mono uppercase tracking-widest">{item.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground font-syne uppercase tracking-tight">{item.degree}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
