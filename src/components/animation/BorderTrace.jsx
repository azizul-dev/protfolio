'use client';

import { motion } from 'framer-motion';

const BorderTrace = ({ children, className = "" }) => {
  return (
    <div className={`relative p-[1px] overflow-hidden rounded-2xl group ${className}`}>
      {/* Revolving Border Light */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#4be277_50%,transparent_75%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Inner Content Container */}
      <div className="relative rounded-[15px] h-full w-full z-10 overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default BorderTrace;
