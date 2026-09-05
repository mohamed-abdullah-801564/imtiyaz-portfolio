import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';

interface Slide1IntroProps {
  onExplore: () => void;
  activeSlide?: number;
}

export const Slide1Intro: React.FC<Slide1IntroProps> = ({ onExplore }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="slide-1-cover"
      className="slide-section w-screen h-[100dvh] min-h-[100dvh] relative flex flex-col items-center justify-between py-12 md:py-0 px-6 overflow-hidden bg-transparent"
    >
      {/* Top Spacer for Mobile Centering */}
      <div className="w-full h-4 md:hidden pointer-events-none" />

      {/* Main Hero Center Title */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="relative z-10 text-center select-none flex flex-col items-center justify-center my-auto"
      >
        <h1
          id="hero-title"
          className="font-syne font-black text-3xl sm:text-5xl md:text-8xl lg:text-9xl tracking-tight text-white leading-none flex items-center justify-center"
          style={{ letterSpacing: '-0.03em' }}
        >
          PORTFOLIO
          <span
            className="inline-block w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white ml-2 sm:ml-3 md:ml-4 -mt-4 sm:-mt-8 md:-mt-10 lg:-mt-12"
            aria-hidden="true"
          />
        </h1>
        <p className="font-mono text-label text-blue-400 tracking-[0.25em] uppercase font-semibold mt-4">
          {PROFILE_DATA.tagline}
        </p>
      </motion.div>

      {/* Bottom Container: Name + Role on Left, Scroll on Right */}
      <div className="w-full max-w-6xl mx-auto flex items-end justify-between z-20 select-none pb-2 md:pb-8 md:px-6">
        <div className="text-left">
          <p className="text-body-sm font-jakarta font-semibold text-white/90">
            {PROFILE_DATA.name}
          </p>
          <p className="text-label font-jakarta text-zinc-400 mt-0.5">
            {PROFILE_DATA.role} • {PROFILE_DATA.location}
          </p>
        </div>

        <button
          onClick={onExplore}
          id="btn-scroll-indicator"
          className="flex items-center gap-2 group cursor-pointer text-zinc-500 hover:text-white transition-colors select-none"
          aria-label="Scroll to next slide"
        >
          <span className="text-label font-jakarta font-semibold uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
            Scroll
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-cyan-400 group-hover:scale-125 transition-all" />
        </button>
      </div>
    </section>
  );
};
