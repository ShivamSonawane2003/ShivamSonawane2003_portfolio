import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Brain3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5]"
    >
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 15, 0],
        }}
        transition={{
          rotateY: {
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          },
          rotateX: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Simplified 3D Brain Representation using CSS */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Brain outline */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full opacity-30"
              style={{
                filter: 'drop-shadow(0 0 20px hsl(190 100% 50% / 0.5))',
              }}
            >
              {/* Left hemisphere */}
              <path
                d="M 50 100 Q 30 60, 50 30 Q 70 20, 80 40 Q 85 50, 80 60 Q 75 80, 70 90 Q 65 100, 60 110 Q 55 120, 50 100 Z"
                fill="none"
                stroke="hsl(190, 100%, 50%)"
                strokeWidth="2"
                className="animate-pulse"
              />
              {/* Right hemisphere */}
              <path
                d="M 150 100 Q 170 60, 150 30 Q 130 20, 120 40 Q 115 50, 120 60 Q 125 80, 130 90 Q 135 100, 140 110 Q 145 120, 150 100 Z"
                fill="none"
                stroke="hsl(190, 100%, 50%)"
                strokeWidth="2"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
              {/* Neural connections */}
              {Array.from({ length: 20 }).map((_, i) => {
                const angle = (i / 20) * Math.PI * 2;
                const x1 = 100 + Math.cos(angle) * 40;
                const y1 = 100 + Math.sin(angle) * 40;
                const x2 = 100 + Math.cos(angle + 0.3) * 60;
                const y2 = 100 + Math.sin(angle + 0.3) * 60;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="hsl(190, 100%, 50%)"
                    strokeWidth="0.5"
                    opacity={0.3}
                  />
                );
              })}
            </svg>

            {/* Animated particles around brain */}
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * Math.PI * 2;
              const radius = 120;
              return (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: Math.cos(angle) * radius - 4,
                    y: Math.sin(angle) * radius - 4,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Brain3D;

