"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

/**
 * TechStackOrbital Component
 * A high-end, interactive orbital tech stack visualization using HTML5 Canvas.
 */

const ORBITS_DATA = [
  {
    id: 'frontend',
    radius: 88,
    speed: 0.008,
    color: '#16a34a',
    label: 'Frontend',
    skills: [
      { name: 'React JS', prof: '95%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next JS', prof: '88%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'TypeScript', prof: '82%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'JavaScript', prof: '95%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'Tailwind', prof: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'HTML5', prof: '97%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', prof: '92%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
    ]
  },
  {
    id: 'creative',
    radius: 158,
    speed: -0.005,
    color: '#22c55e',
    label: 'Creative',
    skills: [
      { name: 'Figma', prof: '85%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
      { name: 'Photoshop', prof: '75%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
      { name: 'After FX', prof: '65%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg' },
      { name: 'Illustrator', prof: '60%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg' }
    ]
  },
  {
    id: 'deployment',
    radius: 222,
    speed: 0.003,
    color: '#4ade80',
    label: 'Deployment',
    skills: [
      { name: 'Vercel', prof: '90%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      { name: 'Netlify', prof: '80%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
      { name: 'GitHub', prof: '88%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', prof: '60%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
    ]
  },
  {
    id: 'learning',
    radius: 280,
    speed: -0.002,
    color: '#86efac',
    label: 'Learning',
    skills: [
      { name: 'Three.js', prof: '50%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg' },
      { name: 'GSAP', prof: '55%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }, // GSAP doesn't have a devicon, using JS as placeholder or we could find another
      { name: 'Prisma', prof: '45%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
      { name: 'GraphQL', prof: '40%', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' }
    ]
  }
];

// Helper: Cubic Out Easing
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// Helper: Back Out Easing for pop-in
const easeOutBack = (t) => {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
};

const TechStackOrbital = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [iconsLoaded, setIconsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Internal state refs for animation
  const state = useRef({
    expandProgress: 0,
    orbits: ORBITS_DATA.map((orbit, i) => ({
      ...orbit,
      currentRotation: Math.random() * Math.PI * 2,
      staggerDelay: i * 0.18,
      nodes: orbit.skills.map((skill, j) => ({
        ...skill,
        angle: (j / orbit.skills.length) * Math.PI * 2,
        offsetAngle: 0,
        img: null,
        hovered: false,
        scale: 0
      }))
    })),
    particles: [],
    comets: [],
    ripples: [],
    mouse: { x: 0, y: 0, active: false },
    lastTime: 0,
    dpr: 1,
    width: 0,
    height: 0,
    scale: 1,
    hoveredNode: null,
    isVisible: true
  });

  useEffect(() => {
    // Preload Icons
    let loadedCount = 0;
    let totalIcons = 0;
    state.current.orbits.forEach(orbit => {
      totalIcons += orbit.nodes.length;
      orbit.nodes.forEach(node => {
        const img = new Image();
        img.src = node.icon;
        img.onload = () => {
          node.img = img;
          loadedCount++;
          if (loadedCount === totalIcons) setIconsLoaded(true);
        };
      });
    });

    // Initialize Particles
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    state.current.particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 1000 - 500,
      y: Math.random() * 1000 - 500,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      angle: Math.random() * Math.PI * 2
    }));

    // Initialize Comets
    state.current.comets = state.current.orbits.map(() => ({
      angle: Math.random() * Math.PI * 2,
      speed: (Math.random() * 0.01 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      length: 15
    }));

    const handleResize = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      state.current.width = rect.width;
      state.current.height = rect.height;
      state.current.scale = rect.width / 640;
      state.current.dpr = dpr;

      canvasRef.current.width = rect.width * dpr;
      canvasRef.current.height = rect.height * dpr;
      canvasRef.current.style.width = `${rect.width}px`;
      canvasRef.current.style.height = `${rect.height}px`;
    };

    const handleMouseMove = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      state.current.mouse = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        const rect = canvasRef.current.getBoundingClientRect();
        state.current.mouse = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
          active: true
        };
      }
    };

    const handleMouseLeave = () => {
      state.current.mouse.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    handleResize();

    // Intersection Observer to pause when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        state.current.isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);

    let animationId;
    const animate = (time) => {
      if (state.current.isVisible) {
        const dt = time - state.current.lastTime;
        state.current.lastTime = time;
        update(dt);
        draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    const update = (dt) => {
      const { mouse, orbits, scale, width, height } = state.current;
      const centerX = width / 2;
      const centerY = height / 2;

      // Update Expand Progress
      const targetExpand = isOpen ? 1 : 0;
      const step = 0.045;
      if (state.current.expandProgress < targetExpand) {
        state.current.expandProgress = Math.min(state.current.expandProgress + step, targetExpand);
      } else if (state.current.expandProgress > targetExpand) {
        state.current.expandProgress = Math.max(state.current.expandProgress - step, targetExpand);
      }

      // Update Orbits & Nodes
      orbits.forEach((orbit, i) => {
        orbit.currentRotation += orbit.speed;
        
        // Progress for this specific orbit (staggered)
        const orbitProgress = Math.max(0, Math.min(1, (state.current.expandProgress - orbit.staggerDelay) / (1 - orbit.staggerDelay)));
        const easedProgress = easeOutCubic(orbitProgress);

        orbit.nodes.forEach(node => {
          const baseRadius = orbit.radius * scale;
          const currentRadius = baseRadius * easedProgress;
          const angle = node.angle + orbit.currentRotation + node.offsetAngle;
          
          const nx = centerX + Math.cos(angle) * currentRadius;
          const ny = centerY + Math.sin(angle) * currentRadius;
          
          node.x = nx;
          node.y = ny;

          // Mouse Gravity Pull
          if (mouse.active && isOpen) {
            const dx = mouse.x - nx;
            const dy = mouse.y - ny;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 150 * scale;
            
            if (dist < maxDist) {
              const strength = (1 - dist / maxDist) * 25 * scale;
              node.x += (dx / dist) * strength;
              node.y += (dy / dist) * strength;
            }
          }

          // Node Pop-in Scale
          const nodeProgress = Math.max(0, Math.min(1, (orbitProgress - 0.2) / 0.8));
          node.scale = isOpen ? easeOutBack(nodeProgress) : orbitProgress;

          // Hover detection
          const mouseDist = Math.sqrt(Math.pow(mouse.x - node.x, 2) + Math.pow(mouse.y - node.y, 2));
          if (mouseDist < 25 * scale && isOpen) {
            node.hovered = true;
            state.current.hoveredNode = node;
          } else {
            node.hovered = false;
            if (state.current.hoveredNode === node) state.current.hoveredNode = null;
          }
        });

        // Update Comets
        const comet = state.current.comets[i];
        comet.angle += comet.speed;
      });

      // Update Particles
      state.current.particles.forEach(p => {
        p.angle += 0.002;
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        
        // Wrap around
        if (p.x > 500) p.x = -500;
        if (p.x < -500) p.x = 500;
        if (p.y > 500) p.y = -500;
        if (p.y < -500) p.y = 500;
      });

      // Update Ripples
      state.current.ripples = state.current.ripples.filter(r => r.life > 0);
      state.current.ripples.forEach(r => {
        r.radius += 8 * scale;
        r.life -= 0.015;
      });
    };

    const draw = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const { width, height, dpr, orbits, scale, particles, expandProgress, ripples } = state.current;
      const centerX = width / 2;
      const centerY = height / 2;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      // Radial vignette glow - now uses transparency to blend with parent background
      const bgGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width / 1.5);
      bgGlow.addColorStop(0, isDark ? 'rgba(34, 197, 94, 0.05)' : 'rgba(34, 197, 94, 0.08)');
      bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)'); // Fade to full transparency
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Floating Particles
      particles.forEach(p => {
        const px = centerX + p.x * scale;
        const py = centerY + p.y * scale;
        ctx.fillStyle = `rgba(34, 197, 94, ${0.15 * (1 - Math.abs(p.x/500))})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Ripples
      ripples.forEach(r => {
        ctx.strokeStyle = `rgba(34, 197, 94, ${r.life * 0.4})`;
        ctx.lineWidth = 1.5 * scale;
        ctx.beginPath();
        ctx.arc(centerX, centerY, r.radius, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Orbits
      orbits.forEach((orbit, i) => {
        const orbitProgress = Math.max(0, Math.min(1, (expandProgress - orbit.staggerDelay) / (1 - orbit.staggerDelay)));
        const easedProgress = easeOutCubic(orbitProgress);
        const radius = orbit.radius * scale * easedProgress;

        if (radius > 1) {
          // Orbit Ring
          ctx.strokeStyle = orbit.color;
          ctx.globalAlpha = 0.2 * easedProgress;
          ctx.lineWidth = 1.2 * scale;
          ctx.setLineDash([8, 8]);
          ctx.beginPath();
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
          ctx.globalAlpha = 1;

          // Orbit Comet
          const comet = state.current.comets[i];
          const cometX = centerX + Math.cos(comet.angle) * radius;
          const cometY = centerY + Math.sin(comet.angle) * radius;
          
          const gradient = ctx.createRadialGradient(cometX, cometY, 0, cometX, cometY, 25 * scale);
          gradient.addColorStop(0, orbit.color);
          gradient.addColorStop(0.2, orbit.color);
          gradient.addColorStop(1, 'transparent');
          
          ctx.fillStyle = gradient;
          ctx.globalAlpha = 0.6 * easedProgress;
          ctx.beginPath();
          ctx.arc(cometX, cometY, 5 * scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Nodes
        orbit.nodes.forEach(node => {
          if (node.scale <= 0) return;

          const size = 46 * scale * node.scale;
          const imgSize = 26 * scale * node.scale;

          ctx.save();
          ctx.translate(node.x, node.y);
          
          // Glow if hovered
          if (node.hovered) {
            ctx.shadowBlur = 25 * scale;
            ctx.shadowColor = orbit.color;
            ctx.scale(1.1, 1.1);
          }

          // Node Circle
          ctx.fillStyle = isDark ? '#0a0a0a' : '#ffffff';
          ctx.strokeStyle = orbit.color;
          ctx.lineWidth = 2 * scale;
          ctx.beginPath();
          ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();

          // Icon
          if (node.img) {
            ctx.drawImage(node.img, -imgSize / 2, -imgSize / 2, imgSize, imgSize);
          }

          ctx.restore();
        });
      });

      // Tooltip / Skill Info
      if (state.current.hoveredNode && isOpen) {
        const node = state.current.hoveredNode;
        ctx.font = `bold ${14 * scale}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = isDark ? '#fff' : '#111';
        ctx.textAlign = 'center';
        
        const text = `${node.name} ${node.prof}`;
        const metrics = ctx.measureText(text);
        const padding = 10 * scale;
        const rectW = metrics.width + padding * 2;
        const rectH = 28 * scale;
        
        ctx.fillStyle = isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.95)';
        ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(node.x - rectW/2, node.y - 50*scale, rectW, rectH, 6*scale);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = isDark ? '#fff' : '#111';
        ctx.fillText(text, node.x, node.y - 32*scale);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isOpen, resolvedTheme]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    // Add ripple on click
    if (!isOpen) {
      state.current.ripples.push(
        { radius: 10, life: 1 },
        { radius: 30, life: 0.8 }
      );
    }
  };

  if (!mounted) return null;

  return (
    <div 
      ref={containerRef}
      className="relative w-full max-w-[640px] mx-auto aspect-square select-none transition-colors duration-500"
      style={{ background: 'transparent' }}
    >
      {/* Space Grotesk Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');
      `}</style>

      <canvas 
        ref={canvasRef}
        className="block cursor-crosshair"
      />

      {/* Center "ME" Button */}
      <button
        onClick={toggleOpen}
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
          w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg
          transition-all duration-500 group border-2
          ${isOpen ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-green-500 text-green-500 bg-green-500/10'}
          hover:scale-110 active:scale-95
        `}
        style={{
          boxShadow: isOpen 
            ? '0 0 20px rgba(239, 68, 68, 0.4), inset 0 0 10px rgba(239, 68, 68, 0.2)' 
            : '0 0 30px rgba(34, 197, 94, 0.4), inset 0 0 15px rgba(34, 197, 94, 0.2)',
          fontFamily: "'Space Grotesk', sans-serif"
        }}
      >
        <span className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isOpen ? 'bg-red-500' : 'bg-green-500'}`} />
        ME
      </button>

      {/* Instructional Hint */}
      {!isOpen && (
        <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-sm font-medium pointer-events-none animate-pulse ${isDark ? 'text-white/40' : 'text-black/40'}`}>
          Click to explore stack
        </div>
      )}
    </div>
  );
};

export default TechStackOrbital;
