"use client";

import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const ORBITS_DATA = [
  {
    id: "inner",
    radius: 0.22, // Reduced for breathing room
    speed: 0.005,
    color: "#22c55e",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    id: "middle",
    radius: 0.42, // Reduced for breathing room
    speed: -0.003,
    color: "#4ade80",
    skills: [
      { name: "JS", icon: "javascript" },
      { name: "TS", icon: "typescript" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "GitHub", icon: "github" },
      { name: "Illustrator", icon: "adobeillustrator" },
    ],
  },
  {
    id: "outer",
    radius: 0.62, // Reduced to prevent hitting the border
    speed: 0.002,
    color: "#86efac",
    skills: [
      { name: "Photoshop", icon: "adobephotoshop" },
      { name: "Docker", icon: "docker" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Vercel", icon: "vercel" },
    ],
  },
];

const TechStackOrbital = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const imagesRef = useRef({});

  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState(null);

  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const engine = useRef({
    isOpen: false,
    expand: 0,
    width: 0,
    height: 0,
    mouse: { x: 0, y: 0 },
    rotationOffsets: ORBITS_DATA.map(() => Math.random() * Math.PI * 2),
    stars: [],
    nebulae: [],
  });

  useEffect(() => {
    engine.current.isOpen = isOpen;
  }, [isOpen]);

  useEffect(() => {
    setMounted(true);
    ORBITS_DATA.forEach(orbit => {
      orbit.skills.forEach(skill => {
        const img = new Image();
        img.src = `https://cdn.simpleicons.org/${skill.icon}`;
        img.onload = () => { imagesRef.current[skill.icon] = img; };
      });
    });
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      engine.current.width = rect.width;
      engine.current.height = rect.height;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.scale(dpr, dpr);

      // Galaxy stars
      engine.current.stars = Array.from({ length: 150 }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 1.5,
        speed: Math.random() * 0.04 + 0.02,
        twinkle: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.05 + 0.01,
      }));

      // Nebula glows
      engine.current.nebulae = Array.from({ length: 3 }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        radius: Math.random() * 200 + 100,
        color: Math.random() > 0.5 ? "rgba(34,197,94,0.03)" : "rgba(74,222,128,0.02)",
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      }));
    };

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      engine.current.mouse.x = e.clientX - rect.left;
      engine.current.mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const render = () => {
      const { width, height, isOpen: targetOpen, expand, mouse, stars, nebulae, rotationOffsets } = engine.current;
      if (width === 0) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Galaxy
      nebulae.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < -n.radius) n.x = width + n.radius;
        if (n.x > width + n.radius) n.x = -n.radius;
        if (n.y < -n.radius) n.y = height + n.radius;
        if (n.y > height + n.radius) n.y = -n.radius;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius);
        grad.addColorStop(0, n.color); grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2); ctx.fill();
      });

      stars.forEach(s => {
        s.y += s.speed; if (s.y > height) s.y = 0;
        s.twinkle += s.twinkleSpeed;
        const op = (Math.sin(s.twinkle) + 1) / 2 * 0.4 + 0.1;
        ctx.fillStyle = `rgba(255, 255, 255, ${op})`;
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill();
      });

      const centerX = width / 2;
      const centerY = height / 2;
      // Adjusted scale to keep outer orbit inside
      const maxOrbitSize = Math.min(width, height) * (width < 768 ? 0.44 : 0.42);

      const targetExpand = targetOpen ? 1 : 0;
      engine.current.expand += (targetExpand - expand) * 0.08;
      const curExp = engine.current.expand;

      let currentHover = null;

      ORBITS_DATA.forEach((orbit, oIdx) => {
        rotationOffsets[oIdx] += orbit.speed;
        const radius = orbit.radius * maxOrbitSize * 1.4 * curExp;

        if (curExp > 0.05) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.strokeStyle = orbit.color;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 12]);
          ctx.globalAlpha = 0.15 * curExp;
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.globalAlpha = 1;
        }

        orbit.skills.forEach((skill, sIdx) => {
          const angle = (sIdx / orbit.skills.length) * Math.PI * 2 + rotationOffsets[oIdx];
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          const nodeRadius = width < 768 ? 14 : 20;
          
          if (curExp > 0.5) {
            const dist = Math.hypot(mouse.x - x, mouse.y - y);
            if (dist < nodeRadius * 1.5) {
              currentHover = { ...skill, x, y, color: orbit.color };
            }
          }

          if (curExp > 0.02) {
            ctx.save();
            ctx.globalAlpha = Math.min(1, curExp * 2);
            const isH = currentHover?.name === skill.name;
            ctx.shadowBlur = isH ? 25 : 12;
            ctx.shadowColor = orbit.color;
            ctx.fillStyle = isDark ? "#080808" : "#ffffff";
            ctx.strokeStyle = isH ? "#ffffff" : orbit.color;
            ctx.lineWidth = 1.5;

            ctx.beginPath();
            ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            const img = imagesRef.current[skill.icon];
            if (img && img.complete) {
              const iconSize = nodeRadius * 1.3;
              ctx.drawImage(img, x - iconSize/2, y - iconSize/2, iconSize, iconSize);
            } else {
              ctx.fillStyle = orbit.color;
              ctx.font = `bold ${nodeRadius}px sans-serif`;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(skill.name[0], x, y);
            }
            ctx.restore();
          }
        });
      });

      if (currentHover?.name !== hoveredNode?.name) setHoveredNode(currentHover);
      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted, isDark]);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[800px] mx-auto aspect-square flex items-center justify-center overflow-visible px-4"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      <AnimatePresence>
        {hoveredNode && engine.current.expand > 0.8 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute z-[100] px-4 py-2 rounded-xl bg-background/95 backdrop-blur-xl border-2 shadow-2xl flex flex-col items-center pointer-events-none"
            style={{ 
              left: hoveredNode.x, 
              top: hoveredNode.y - 60,
              transform: "translateX(-50%)",
              borderColor: hoveredNode.color
            }}
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Skill</span>
            <span className="text-sm font-bold text-foreground">{hoveredNode.name}</span>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-r-2 border-b-2 rotate-45" style={{ borderColor: hoveredNode.color }}></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-16 h-16 md:w-28 md:h-28 rounded-full font-black transition-all duration-700
          flex items-center justify-center group cursor-pointer
          ${
            isOpen
              ? "bg-primary border-primary text-background shadow-[0_0_50px_rgba(34,197,94,0.4)] scale-90"
              : "bg-primary/10 border-primary/50 text-primary shadow-[0_0_30px_rgba(34,197,94,0.2)] hover:scale-105"
          }
          border-2 uppercase tracking-[0.2em] text-base md:text-xl`}
        >
          ME
        </button>
        <div className={`absolute inset-[-10px] md:inset-[-15px] rounded-full border-2 border-dashed transition-all duration-1000 pointer-events-none
          ${isOpen ? "border-primary/50 rotate-180 scale-110" : "border-primary/20 rotate-0 scale-100"}`}>
        </div>
      </div>

      {!isOpen && (
        <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-primary/80 font-black animate-pulse bg-background/40 px-6 py-2 rounded-full border border-primary/10 backdrop-blur-sm">
          Explore Stack
        </p>
      )}
    </div>
  );
};

export default TechStackOrbital;
