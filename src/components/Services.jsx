'use client';

import { motion } from 'framer-motion';
import BorderTrace from './animation/BorderTrace';

const Services = () => {
  const expertises = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, modular interfaces using the latest React patterns and state management solutions.",
      icon: "desktop_windows",
    },
    {
      title: "Responsive Design",
      description: "Ensuring your application looks stunning and works perfectly across every screen size and device.",
      icon: "devices",
    },
    {
      title: "Performance",
      description: "Squeezing every millisecond of speed through code-splitting, lazy loading, and asset optimization.",
      icon: "bolt",
    },
    {
      title: "Consulting",
      description: "Providing architectural guidance and code audits to ensure your stack is built for the future.",
      icon: "psychology",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-background py-24" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-[36px] leading-[44px] font-bold tracking-[-0.01em] text-on-surface mb-2">
            Interests & Focus
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {expertises.map((item) => (
            <BorderTrace key={item.title} className="rounded-xl h-full">
              <motion.div 
                variants={itemVariants}
                className="p-8 flex flex-col gap-4 group cursor-default h-full relative overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-[#22c55e] before:to-[#15803d]"
                style={{ background: 'var(--card-gradient)' }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors duration-500">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-bold text-xl text-on-surface group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </BorderTrace>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
