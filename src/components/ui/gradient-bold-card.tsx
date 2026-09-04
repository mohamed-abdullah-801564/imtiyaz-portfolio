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
  blobGradient = "from-pink-500 via-red-500 to-yellow-500",
}) => {
  if (!children) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-[200px] h-[250px] rounded-[14px] flex flex-col items-center justify-center
                        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] dark:shadow-[20px_20px_60px_#111,-20px_-20px_60px_#222]
                        overflow-hidden">

          {/* Glassy Background */}
          <div className="absolute top-[5px] left-[5px] w-[190px] h-[240px] bg-white/95 dark:bg-black/70 backdrop-blur-[24px]
                          rounded-[10px] outline outline-2 outline-white dark:outline-gray-700 z-10"></div>

          {/* Animated Gradient Blob (same bold colors for light & dark mode) */}
          <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] rounded-full opacity-100
                          filter blur-[12px] z-0 animate-blob 
                          bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"></div>

          {/* Inline keyframes animation */}
          <style>
            {`
              @keyframes blob {
                0% {
                  transform: translate(-100%, -100%);
                }
                25% {
                  transform: translate(0%, -100%);
                }
                50% {
                  transform: translate(0%, 0%);
                }
                75% {
                  transform: translate(-100%, 0%);
                }
                100% {
                  transform: translate(-100%, -100%);
                }
              }

              .animate-blob {
                animation: blob 5s linear infinite;
              }
            `}
          </style>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-[14px] overflow-hidden h-full flex flex-col justify-between
                  shadow-[10px_10px_30px_rgba(0,0,0,0.6),-10px_-10px_30px_rgba(30,30,40,0.3)]
                  dark:shadow-[10px_10px_30px_rgba(0,0,0,0.7),-10px_-10px_30px_rgba(255,255,255,0.03)]
                  group hover:scale-[1.015] transition-all duration-300 ${containerClassName}`}
    >
      {/* Glassy Background Inner Layer */}
      <div
        className="absolute inset-[5px] bg-black/80 dark:bg-zinc-950/85 backdrop-blur-[24px]
                    rounded-[10px] outline outline-1 outline-white/10 dark:outline-gray-800/80 z-10 transition-all duration-300 group-hover:outline-white/25"
      />

      {/* Content wrapper on top of glassy background */}
      <div className={`relative z-20 h-full p-4 sm:p-5 flex flex-col justify-between ${className}`}>
        {children}
      </div>

      {/* Animated Gradient Blob */}
      <div
        className={`absolute top-1/2 left-1/2 w-[160px] h-[160px] rounded-full opacity-90
                    filter blur-[16px] z-0 animate-blob 
                    bg-gradient-to-r ${blobGradient}`}
      />

      {/* Inline keyframes animation */}
      <style>
        {`
          @keyframes blob {
            0% {
              transform: translate(-100%, -100%);
            }
            25% {
              transform: translate(0%, -100%);
            }
            50% {
              transform: translate(0%, 0%);
            }
            75% {
              transform: translate(-100%, 0%);
            }
            100% {
              transform: translate(-100%, -100%);
            }
          }

          .animate-blob {
            animation: blob 5s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default GradientBlobCard;
