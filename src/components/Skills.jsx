'use client';

import React from 'react';
import TechStackOrbital from "./animation/TechStackOrbital";

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 bg-background overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-12">
          <p className="text-green-500 tracking-[0.3em] uppercase text-sm mb-4 font-medium">
            Tech Stack
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-on-surface tracking-tight">
            INTERACTIVE <span className="text-green-500">SKILLS</span>
          </h2>

          <p className="text-on-surface-variant mt-4 max-w-2xl mx-auto text-lg opacity-80">
            Click the center button to explore my technologies, tools, and learning journey.
          </p>
        </div>

        <div className="relative z-10">
          <TechStackOrbital />
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
