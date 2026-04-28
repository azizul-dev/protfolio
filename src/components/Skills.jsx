'use client';

import { motion } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: "95%", status: "Excellent" },
        { name: "CSS3", level: "90%", status: "Excellent" },
        { name: "JavaScript", level: "85%", status: "Intermediate" },
        { name: "React JS", level: "80%", status: "Intermediate" },
        { name: "Next JS", level: "75%", status: "Intermediate" },
        { name: "Tailwind CSS", level: "95%", status: "Excellent" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node JS", level: "60%", status: "Basic" },
        { name: "MongoDB", level: "65%", status: "Basic" },
        { name: "Express JS", level: "60%", status: "Basic" },
        { name: "Firebase", level: "70%", status: "Intermediate" },
      ],
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: "80%", status: "Intermediate" },
        { name: "Git & GitHub", level: "85%", status: "Excellent" },
        { name: "Photoshop", level: "70%", status: "Intermediate" },
        { name: "VS Code", level: "95%", status: "Excellent" },
      ],
    },
  ];

  return (
    <section className="bg-background py-24" id="stack">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] md:text-[48px] font-bold text-on-surface mb-4">Skills & Technologies</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A comprehensive overview of my technical stack and proficiency levels.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <BorderTrace key={catIndex} className="rounded-3xl h-full">
              <div className="p-8 bg-surface-container/50 h-full">
                <h3 className="text-xl font-bold text-primary mb-8 border-b border-primary/20 pb-4">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-end">
                        <span className="font-bold text-on-surface">{skill.name}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                          {skill.status}
                        </span>
                      </div>
                      <div className="h-2 w-full bg-surface-dim rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-primary shadow-[0_0_10px_#4be277]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BorderTrace>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
