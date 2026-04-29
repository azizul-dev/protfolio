'use client';

import React from 'react';

const AnimatedLogo = ({ size = 100, showText = true }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div 
        className="relative rounded-2xl bg-[#0d0d0d] flex items-center justify-center overflow-hidden"
        style={{ width: size, height: size * 1.1 }}
      >
        <svg 
          viewBox="0 0 100 110" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* The Sharp Angular Polygon A (Final State) */}
          <g className="logo-final-shape">
            <polygon points="50,6 80,96 64,96 50,52 36,96 20,96" fill="#22c55e"/>
            <polygon points="50,16 62,50 38,50" fill="#0d0d0d"/>
            <rect x="37" y="58" width="26" height="6" fill="#0d0d0d"/>
            <polygon points="20,96 32,74 36,96" fill="#0d0d0d"/>
            <polygon points="80,96 68,74 64,96" fill="#0d0d0d"/>
          </g>
          
          {/* Drawing Paths (Animation State) */}
          <path
            d="M50 6L20 96"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="square"
            className="logo-draw-path path-left"
          />
          <path
            d="M50 6L80 96"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="square"
            className="logo-draw-path path-right"
          />
          <path
            d="M36 75H64"
            stroke="#22c55e"
            strokeWidth="4"
            strokeLinecap="square"
            className="logo-draw-path path-bar"
          />
          
          {/* Top Dot Accent */}
          <circle
            cx="50"
            cy="4"
            r="3.5"
            fill="#22c55e"
            className="logo-dot"
          />
        </svg>

        <style jsx>{`
          .logo-draw-path {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: drawStroke 3s ease-in-out infinite;
          }

          .path-left { animation-delay: 0s; }
          .path-right { animation-delay: 0.4s; }
          .path-bar { 
            stroke-dasharray: 30; 
            stroke-dashoffset: 30; 
            animation-delay: 0.8s; 
          }

          .logo-final-shape {
            opacity: 0;
            animation: fadeIn 3s ease-in-out infinite;
            animation-delay: 1.2s;
          }

          .logo-dot {
            transform: scale(0);
            transform-origin: 50px 4px;
            animation: popDot 3s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
            animation-delay: 1.5s;
          }

          @keyframes drawStroke {
            0% { stroke-dashoffset: 100; opacity: 1; }
            30%, 70% { stroke-dashoffset: 0; opacity: 1; }
            80%, 100% { stroke-dashoffset: 0; opacity: 0; }
          }

          @keyframes fadeIn {
            0%, 40% { opacity: 0; transform: scale(0.95); }
            50%, 90% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; }
          }

          @keyframes popDot {
            0%, 50% { transform: scale(0); opacity: 0; }
            60%, 90% { transform: scale(1); opacity: 1; }
            100% { transform: scale(1); opacity: 0; }
          }
        `}</style>
      </div>
      
      {showText && (
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#22c55e] font-bold">
          AZIZUL
        </span>
      )}
    </div>
  );
};

export default AnimatedLogo;
