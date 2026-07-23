"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const About = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Projects", value: "7+ Completed", icon: "code_blocks" },
    { label: "Stack", value: "MERN + Next.js", icon: "rocket_launch" },
    { label: "Status", value: "Open To Work", icon: "work" },
  ];

  const githubTheme = mounted && theme === "light" ? "default" : "dark";
  const githubBg = mounted && theme === "light" ? "ffffff" : "0d0d0d";
  const githubBorder = mounted && theme === "light" ? "e5e7eb" : "22c55e";

  return (
    <section
      className="py-20 md:py-32 bg-background relative overflow-hidden"
      id="about"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-5 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-emerald-500 dark:text-emerald-400 text-[10px] md:text-xs font-medium uppercase tracking-[0.4em] mb-4 block drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
            >
              ABOUT ME
            </motion.span>
            <h2 className="text-editorial text-[32px] sm:text-[45px] md:text-[65px] text-foreground mb-6">
              About <span className="text-primary italic">Me</span>
            </h2>
            <p className="text-muted text-lg">
              I am a MERN Stack Developer specializing in full-stack web
              applications with a passion for creating high-performance web
              applications. My journey is defined by continuous learning and a
              commitment to technical excellence.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          {/* Left: Avatar/Image */}
          <div className="flex-1 relative">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] mx-auto rounded-[48px] md:rounded-[56px] overflow-hidden bg-surface border border-border shadow-2xl group">
              <Image
                src="/images/profile-professional-v6.jpg"
                alt="Azizul Islam"
                fill
                className="object-cover object-center grayscale transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-40"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-[1.2] space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all"
                >
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {stat.icon}
                  </span>
                  <div>
                    <div className="text-[10px] font-bold text-foreground mb-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[9px] text-muted uppercase tracking-widest font-mono">
                      {stat.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GitHub Stats Section - Improved Spacing & Size */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api?username=azizul-dev&show_icons=true&theme=${githubTheme}&bg_color=${githubBg}&title_color=22c55e&text_color=${mounted && theme === "light" ? "333333" : "ffffff"}&icon_color=22c55e&border_color=${githubBorder}&border_radius=10`}
                  alt="GitHub Stats"
                  width="100%"
                  loading="lazy"
                  className="rounded-[16px] w-full border border-border transition-all shadow-lg"
                />
                <img
                  src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=azizul-dev&layout=compact&theme=${githubTheme}&bg_color=${githubBg}&title_color=22c55e&text_color=${mounted && theme === "light" ? "333333" : "ffffff"}&border_color=${githubBorder}&border_radius=10&langs_count=6`}
                  alt="Top Languages"
                  width="100%"
                  loading="lazy"
                  className="rounded-[16px] w-full border border-border transition-all shadow-lg"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com?user=azizul-dev&theme=${githubTheme}&background=${githubBg}&ring=22c55e&fire=22c55e&currStreakLabel=22c55e&border=${githubBorder}&border_radius=10`}
                  alt="GitHub Streak"
                  width="100%"
                  loading="lazy"
                  className="rounded-[16px] w-full border border-border transition-all shadow-lg"
                />
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=azizul-dev&theme=${mounted && theme === "light" ? "flat" : "react-dark"}&bg_color=${githubBg}&color=22c55e&line=22c55e&point=22c55e&area=true&hide_border=false`}
                  alt="Contribution Graph"
                  width="100%"
                  loading="lazy"
                  className="rounded-[16px] w-full border border-border transition-all shadow-lg"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1fk2ldV7sHATEM5bmQt10Kzb98wl-DP6o/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-variant border border-border text-sm font-bold flex items-center justify-center gap-3 hover:border-primary/40 hover:scale-[1.02] transition-all duration-300 shadow-lg"
              >
                Download CV
                <span className="material-symbols-outlined text-xl">
                  description
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
