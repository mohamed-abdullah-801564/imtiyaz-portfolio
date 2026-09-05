"use client";

import React from "react";

export interface GradientBlobCardProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  blobGradient?: string;
}

const GradientBlobCard: React.FC<GradientBlobCardProps> = ({
  children,
  className = "",
  containerClassName = "",
}) => {
  return (
    <div
      className={`glow-container relative w-full h-full rounded-2xl group transition-transform duration-300 hover:scale-[1.02] ${containerClassName}`}
    >
      {/* Primary Blurred Rotating Glow Layer (.glow) */}
      <div className="glow absolute -inset-0.5 rounded-2xl pointer-events-none z-0" />

      {/* Glassy Content Wrapper (.glow-content) */}
      <div
        className={`glow-content relative z-10 w-full h-full rounded-2xl bg-zinc-950/90 backdrop-blur-2xl border border-white/10 group-hover:border-white/25 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between ${className}`}
      >
        {children}
      </div>

      {/* Adapted Color Glow Animations & Custom Property Styles */}
      <style>{`
        @property --hue {
          syntax: '<angle>';
          initial-value: 200deg;
          inherits: false;
        }

        .glow-container {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
        }

        .glow {
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: radial-gradient(
            circle at var(--bg-x, 50%) var(--bg-y, 50%),
            hsl(var(--hue, 220deg), 85%, 60%) 0%,
            transparent 70%
          );
          filter: blur(18px);
          opacity: 0.25;
          transition: opacity 0.4s ease, filter 0.4s ease;
          animation: rotate-bg 7s linear infinite, hue-animation 6s ease-in-out infinite alternate, shadow-pulse 4s ease-in-out infinite;
          animation-play-state: paused;
          z-index: 0;
        }

        .glow::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            transparent 0%,
            hsl(var(--hue, 220deg), 80%, 55%) 40%,
            transparent 80%
          );
          filter: blur(22px);
          opacity: 0.2;
          transform: rotate(0deg);
          animation: rotate 8s linear infinite, hue-animation 6s ease-in-out infinite alternate;
          animation-play-state: paused;
          z-index: 0;
        }

        .glow-container:hover .glow {
          opacity: 0.8;
          filter: blur(22px);
          animation-play-state: running;
        }

        .glow-container:hover .glow::after {
          opacity: 0.65;
          animation-play-state: running;
        }

        @keyframes rotate-bg {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes hue-animation {
          0% {
            --hue: 200deg;
          }
          50% {
            --hue: 240deg;
          }
          100% {
            --hue: 280deg;
          }
        }

        @keyframes shadow-pulse {
          0%, 100% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
          }
          50% {
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.25);
          }
        }
      `}</style>
    </div>
  );
};

export default GradientBlobCard;
