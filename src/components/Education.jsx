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
    <section className="py-24 max-w-[1200px] mx-auto px-6" id="education">
      <div className="mb-16">
        <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.01em] text-on-surface mb-2">
          Educational Background
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((item, index) => (
          <BorderTrace key={index} className="rounded-3xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-surface-container/50 flex gap-6 items-start"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">
                  {item.icon}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-full border border-primary/20">
                    {item.year}
                  </span>
                  <span className="text-on-surface-variant text-sm font-medium">{item.status}</span>
                </div>
                <h3 className="text-2xl font-bold text-on-surface">{item.degree}</h3>
                <p className="text-lg text-primary font-medium">{item.subject}</p>
                <p className="text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_city</span>
                  {item.institution}
                </p>
              </div>
            </motion.div>
          </BorderTrace>
        ))}
      </div>
    </section>
  );
};

export default Education;
