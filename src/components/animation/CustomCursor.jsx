'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursor = useRef(null);
  const cursorOuter = useRef(null);

  useEffect(() => {
    // Hide system cursor
    document.body.style.cursor = 'none';

    let isMoving = false;
    const xTo = gsap.quickTo(cursor.current, 'x', { duration: 0.2, ease: 'power3' });
    const yTo = gsap.quickTo(cursor.current, 'y', { duration: 0.2, ease: 'power3' });
    
    const xOuterTo = gsap.quickTo(cursorOuter.current, 'x', { duration: 0.5, ease: 'power3' });
    const yOuterTo = gsap.quickTo(cursorOuter.current, 'y', { duration: 0.5, ease: 'power3' });

    const handleMouseMove = (e) => {
      if (!isMoving) {
        gsap.to([cursor.current, cursorOuter.current], { opacity: 1, duration: 0.3 });
        isMoving = true;
      }
      xTo(e.clientX);
      yTo(e.clientY);
      xOuterTo(e.clientX);
      yOuterTo(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const ctx = gsap.context(() => {
      // Hover effects
      const handleMouseEnter = () => {
        gsap.to(cursorOuter.current, { scale: 2, duration: 0.3 });
        gsap.to(cursor.current, { scale: 0.5, duration: 0.3 });
      };
      
      const handleMouseLeave = () => {
        gsap.to(cursorOuter.current, { scale: 1, duration: 0.3 });
        gsap.to(cursor.current, { scale: 1, duration: 0.3 });
      };

      const links = document.querySelectorAll('a, button');
      links.forEach((link) => {
        link.addEventListener('mouseenter', handleMouseEnter);
        link.addEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      ctx.revert();
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursor}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorOuter}
        className="fixed top-0 left-0 w-8 h-8 border border-primary/50 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
