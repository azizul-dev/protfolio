'use client';

import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

// Arc Configuration
const RADIUS = 110;
const START_ANGLE = 90; // Starting from the bottom side
const STAGGER = 120; // ms between each item
const OPEN_DURATION = 600;
const CLOSE_DURATION = 500;

const RadialMenu = ({ isOpen, onClose, items }) => {
  const containerRef = useRef(null);
  const orbitRingRef = useRef(null);
  const itemRefs = useRef([]);
  const animationRefs = useRef([]);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Angles: 25deg to 155deg (downward arc)
  const ANGLES = items.map((_, i) => 25 + (i * (130 / (items.length - 1))));

  const iconMap = {
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.32 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.06 6.06l1.62-1.62a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
  };
  const colors = ['#22c55e', '#4ade80', '#60a5fa', '#f472b6', '#fb923c', '#a78bfa'];

  // Easings
  const easeOutBack = (t) => {
    const c1 = 1.4, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  };
  const easeInCubic = (t) => t * t * t;

  const positionMenu = () => {
    const trigger = document.getElementById('more-button-trigger');
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      setCoords({
        top: rect.bottom + 10,
        left: rect.left + rect.width / 2
      });
    }
  };

  const animateItemOpen = (index, finalAngle) => {
    const el = itemRefs.current[index];
    if (!el) return;

    const delay = index * STAGGER;
    const timeoutId = setTimeout(() => {
      el.style.pointerEvents = 'all';
      const startTime = performance.now();
      const startAngle = START_ANGLE;

      const frame = (now) => {
        const t = Math.min((now - startTime) / OPEN_DURATION, 1);
        const ease = easeOutBack(t);
        const startAngle = START_ANGLE; // start from bottom
        const angle = (startAngle + (finalAngle - startAngle) * ease) * Math.PI / 180;
        const x = RADIUS * Math.cos(angle);
        const y = RADIUS * Math.sin(angle);

        el.style.left = `calc(50% + ${x}px)`;
        el.style.top = `calc(50% + ${y}px)`;
        el.style.opacity = String(Math.min(t * 2, 1));
        el.style.transform = `translate(-50%, -50%) scale(${0.3 + 0.7 * Math.min(t * 1.5, 1)})`;

        if (t < 1) {
          animationRefs.current[index] = requestAnimationFrame(frame);
        }
      };
      animationRefs.current[index] = requestAnimationFrame(frame);
    }, delay);
    animationRefs.current[`timeout-${index}`] = timeoutId;
  };

  const animateItemClose = (index, finalAngle) => {
    const el = itemRefs.current[index];
    if (!el) return;

    cancelAnimationFrame(animationRefs.current[index]);
    clearTimeout(animationRefs.current[`timeout-${index}`]);

    const delay = (items.length - 1 - index) * 130;
    const timeoutId = setTimeout(() => {
      const startTime = performance.now();

      const frame = (now) => {
        const t = Math.min((now - startTime) / CLOSE_DURATION, 1);
        const ease = easeInCubic(t);
        const angle = (finalAngle + (START_ANGLE - finalAngle) * ease) * Math.PI / 180;
        const x = RADIUS * Math.cos(angle);
        const y = RADIUS * Math.sin(angle);

        el.style.left = `calc(50% + ${x}px)`;
        el.style.top = `calc(50% + ${y}px)`;
        el.style.opacity = String(1 - ease);
        el.style.transform = `translate(-50%, -50%) scale(${1 - 0.7 * ease})`;

        if (t < 1) {
          animationRefs.current[index] = requestAnimationFrame(frame);
        } else {
          el.style.pointerEvents = 'none';
        }
      };
      animationRefs.current[index] = requestAnimationFrame(frame);
    }, delay);
    animationRefs.current[`timeout-${index}`] = timeoutId;
  };

  useEffect(() => {
    if (isOpen) {
      positionMenu();
      if (orbitRingRef.current) orbitRingRef.current.style.opacity = '1';
      items.forEach((_, i) => animateItemOpen(i, ANGLES[i]));
    } else {
      if (orbitRingRef.current) orbitRingRef.current.style.opacity = '0';
      items.forEach((_, i) => animateItemClose(i, ANGLES[i]));
    }

    return () => {
      animationRefs.current.forEach(ref => cancelAnimationFrame(ref));
      Object.keys(animationRefs.current).forEach(key => {
        if (key.startsWith('timeout-')) clearTimeout(animationRefs.current[key]);
      });
    };
  }, [isOpen]);

  useEffect(() => {
    const handleOutside = (e) => {
      const trigger = document.getElementById('more-button-trigger');
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target) && trigger && !trigger.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('click', handleOutside);
    window.addEventListener('resize', positionMenu);
    return () => {
      document.removeEventListener('click', handleOutside);
      window.removeEventListener('resize', positionMenu);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div 
      ref={containerRef}
      style={{
        position: 'fixed',
        zIndex: 9999,
        top: coords.top,
        left: coords.left,
        width: 0,
        height: 0,
        pointerEvents: isOpen ? 'all' : 'none'
      }}
    >
      {/* Orbit Ring */}
      <div
        ref={orbitRingRef}
        style={{
          position: 'fixed',
          left: coords.left,
          top: coords.top,
          width: RADIUS * 2,
          height: RADIUS * 2,
          borderRadius: '50%',
          border: '1px dashed rgba(34,197,94,0.2)',
          transform: 'translate(-50%, -50%)',
          animation: isOpen ? 'spinRing 8s linear infinite' : 'none',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.5s'
        }}
      />

      {/* Menu Items */}
      {items.map((item, i) => (
        <a
          key={item.label}
          ref={el => itemRefs.current[i] = el}
          href={item.href}
          target={item.href.startsWith('#') ? undefined : '_blank'}
          rel={item.href.startsWith('#') ? undefined : 'noopener noreferrer'}
          onClick={(e) => {
            if (item.href.startsWith('#')) {
              e.preventDefault();
              const target = document.querySelector(item.href);
              if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
            onClose();
          }}
          style={{
            position: 'absolute',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: '#111',
            border: '1.5px solid #1e1e1e',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: 0,
            transform: 'translate(-50%, -50%) scale(0.2)',
            transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
            pointerEvents: 'none',
            zIndex: 10000
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors[i];
            e.currentTarget.style.background = '#0d2818';
            e.currentTarget.style.boxShadow = '0 0 14px rgba(34,197,94,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#1e1e1e';
            e.currentTarget.style.background = '#111';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke={colors[i]} 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            dangerouslySetInnerHTML={{ __html: iconMap[item.icon] }}
          />
        </a>
      ))}
    </div>,
    document.body
  );
};

export default RadialMenu;
