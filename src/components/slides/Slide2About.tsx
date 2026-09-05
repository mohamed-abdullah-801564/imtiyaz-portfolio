import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import GradientBlobCard from '../ui/gradient-bold-card';
import { Target, Compass, TrendingUp, Sparkles } from 'lucide-react';

interface Slide2AboutProps {
  activeSlide?: number;
}

export const Slide2About: React.FC<Slide2AboutProps> = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const bentoCards = [
    {
      icon: <Target className="w-4 h-4 text-blue-400" />,
      title: "Strategy & Marketing",
      description: "Aligning creative design with market positioning & audience target strategy.",
      gradient: "from-pink-500 via-red-500 to-yellow-500",
    },
    {
      icon: <Compass className="w-4 h-4 text-cyan-400" />,
      title: "GCC & Oman Depth",
      description: "Deep understanding of regional Middle Eastern consumer behavior & trends.",
      gradient: "from-cyan-500 via-blue-500 to-purple-600",
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
      title: "Performance & ROI",
      description: "Data-driven Meta & Google ad campaigns engineered for measurable business growth.",
      gradient: "from-emerald-500 via-teal-400 to-cyan-500",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-purple-400" />,
      title: "Creative & Visuals",
      description: "High-converting ad graphics, promo video reels & brand identity systems.",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
    },
  ];

  return (
    <section
      id="slide-2-about"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto md:overflow-hidden snap-start py-12 px-5 md:py-0 md:px-10 lg:px-16 bg-[#030305]"
    >
      {/* Main Layout Split Grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 z-10 my-auto pt-6 pb-2 select-none"
      >
        {/* LEFT COLUMN: CUTOUT PORTRAIT OVER BLUE SPOTLIGHT */}
        <div className="flex flex-col items-center lg:items-start shrink-0">
          <div className="mb-4 text-center lg:text-left">
            <span className="font-mono text-label tracking-[0.25em] uppercase font-semibold text-blue-400 block mb-1">
              Hello, I am
            </span>
            <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-5xl text-white tracking-tight leading-tight md:leading-none">
              {PROFILE_DATA.name}
            </h2>
            <p className="font-jakarta text-body-sm text-zinc-400 mt-1.5 font-medium max-w-xs">
              {PROFILE_DATA.role}
            </p>
          </div>

          {/* Seamless Cutout Portrait floating over blue studio spotlight */}
          <div className="relative w-56 h-72 sm:w-64 sm:h-[340px] flex items-end justify-center">
            {/* Luminous Blue Radial Spotlight Orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 rounded-full opacity-90 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.75) 45%, rgba(15, 23, 42, 0.15) 75%, transparent 88%)',
                filter: 'blur(45px)',
              }}
            />

            {/* Cutout Portrait Image with seamless bottom fade mask */}
            <img
              src={PROFILE_DATA.headshot}
              alt="Mohamed Imtiaz Portrait"
              id="profile-img"
              className="relative z-10 w-full h-full object-cover object-top"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)',
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: BIO & 2x2 BENTO GRID */}
        <div className="flex-1 max-w-2xl text-left w-full">
          {/* Bio Headline & Copy */}
          <div className="mb-5 sm:mb-6">
            <h3 className="font-syne font-extrabold text-2xl sm:text-3xl text-white tracking-tight leading-tight mb-2 flex items-center gap-2">
              <span>About Me</span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </h3>
            <p className="font-jakarta font-normal text-body-sm text-zinc-300 leading-relaxed">
              {PROFILE_DATA.about}
            </p>
          </div>

          {/* 2x2 BENTO GRID VALUE PROPOSITION */}
          <div>
            <h4 className="font-jakarta text-label font-semibold text-blue-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Core Expertise & Focus</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {bentoCards.map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.7, delay: 0.5 + (idx * 0.15) }}
                  className="h-full"
                >
                  <GradientBlobCard blobGradient={card.gradient}>
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-md">
                        {card.icon}
                      </div>
                      <h5 className="font-jakarta font-bold text-body text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                        {card.title}
                      </h5>
                      <p className="font-jakarta font-normal text-body-sm text-zinc-300 leading-relaxed mt-1.5">
                        {card.description}
                      </p>
                    </div>
                  </GradientBlobCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
