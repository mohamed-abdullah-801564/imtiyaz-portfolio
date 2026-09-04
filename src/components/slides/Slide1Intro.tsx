import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';

interface Slide1IntroProps {
  onExplore: () => void;
  activeSlide?: number;
}

export const Slide1Intro: React.FC<Slide1IntroProps> = ({ onExplore, activeSlide = 0 }) => {
  const isActive = activeSlide === 0;

  return (
    <section
      id="slide-1-cover"
      className="slide-section w-screen h-screen relative flex flex-col items-center justify-center overflow-hidden snap-start px-6 bg-transparent"
    >
      {/* Main Hero Center Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 text-center select-none flex flex-col items-center justify-center"
      >
        <h1
          id="hero-title"
          className="font-sans font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none flex items-center justify-center"
          style={{ letterSpacing: '-0.03em' }}
        >
          PORTFOLIO
          <span
            className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white ml-2 sm:ml-3 md:ml-4 -mt-6 sm:-mt-8 md:-mt-10 lg:-mt-12"
            aria-hidden="true"
          />
        </h1>
        <p className="font-mono text-xs sm:text-sm md:text-base text-blue-400 tracking-[0.3em] uppercase font-semibold mt-4">
          {PROFILE_DATA.tagline}
        </p>
      </motion.div>

      {/* Bottom Left Corner Details */}
      <div className="absolute bottom-8 left-8 sm:left-12 z-20 select-none text-left">
        <p className="text-xs sm:text-sm font-sans font-semibold text-white/90">
          {PROFILE_DATA.name}
        </p>
        <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 mt-0.5">
          {PROFILE_DATA.role} • {PROFILE_DATA.location}
        </p>
      </div>

      {/* Bottom Right Minimal Scroll Indicator */}
      <button
        onClick={onExplore}
        id="btn-scroll-indicator"
        className="absolute bottom-8 right-8 sm:right-12 z-20 flex items-center gap-2 group cursor-pointer text-zinc-500 hover:text-white transition-colors select-none"
        aria-label="Scroll to next slide"
      >
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-zinc-600 group-hover:text-zinc-400 transition-colors">
          Scroll
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
      </button>
    </section>
  );
};
