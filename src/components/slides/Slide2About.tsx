import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/be-ui-tilt-card';
import { Sparkles, CheckCircle2, ShieldCheck, Target, TrendingUp } from 'lucide-react';

interface Slide2AboutProps {
  activeSlide?: number;
}

export const Slide2About: React.FC<Slide2AboutProps> = ({ activeSlide = 1 }) => {
  const isActive = activeSlide === 1;

  return (
    <section
      id="slide-2-about"
      className="slide-section w-screen h-screen relative flex items-center justify-center overflow-hidden snap-start px-6 sm:px-12 lg:px-16 bg-[#030305]"
    >
      {/* Corner Minimal Metadata */}
      <div className="absolute top-8 left-8 sm:left-12 flex items-center gap-3 select-none z-20">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
          02 // ABOUT & VALUE PROPOSITION
        </span>
      </div>

      {/* Main Layout Split Grid */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14 z-10 my-auto pt-4 pb-2 select-none"
      >
        {/* LEFT COLUMN: CUTOUT PORTRAIT SILHOUETTE */}
        <div className="flex flex-col items-center lg:items-start shrink-0">
          <div className="mb-4 text-center lg:text-left">
            <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold block mb-1">
              Hello, I am
            </span>
            <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
              {PROFILE_DATA.name}
            </h2>
            <p className="text-xs font-jakarta text-zinc-400 mt-1.5 font-medium max-w-xs">
              {PROFILE_DATA.role}
            </p>
          </div>

          {/* Cutout Portrait Silhouette floating over blue studio spotlight */}
          <div className="relative w-60 h-80 sm:w-68 sm:h-[360px] flex items-end justify-center">
            {/* Luminous Blue Radial Spotlight Orb */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 rounded-full opacity-90 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.75) 45%, rgba(15, 23, 42, 0.15) 75%, transparent 88%)',
                filter: 'blur(45px)',
              }}
            />

            {/* Cutout Portrait Image */}
            <img
              src={PROFILE_DATA.headshot}
              alt="Mohamed Imtiaz Portrait"
              id="profile-img"
              className="relative z-10 w-full h-full object-cover object-top"
              style={{
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              }}
            />
          </div>
        </div>

        {/* RIGHT COLUMN: CONCISE BIO & WHY WORK WITH ME VALUE PROPOSITION */}
        <div className="flex-1 max-w-2xl text-left">
          {/* Bio Headline & Copy */}
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-syne font-extrabold text-white tracking-tight mb-2 flex items-center gap-2">
              <span>About Me</span>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </h3>
            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-jakarta font-normal">
              {PROFILE_DATA.about}
            </p>
          </div>

          {/* WHY WORK WITH ME VALUE PROPOSITION CARD */}
          <div className="mb-4">
            <h4 className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Why Work With Me</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {PROFILE_DATA.whyWorkWithMe.map((item, idx) => (
                <TiltCard
                  key={idx}
                  max={8}
                  glare={true}
                  className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2.5">
                      {idx === 0 && <Target className="w-3.5 h-3.5" />}
                      {idx === 1 && <ShieldCheck className="w-3.5 h-3.5" />}
                      {idx === 2 && <TrendingUp className="w-3.5 h-3.5" />}
                    </div>
                    <h5 className="text-xs font-syne font-bold text-white leading-snug mb-1">
                      {item.title}
                    </h5>
                    <p className="text-[11px] text-zinc-400 font-jakarta leading-snug">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Minimal Metadata */}
      <div className="absolute bottom-8 right-8 sm:right-12 z-20 select-none text-[10px] sm:text-[11px] font-mono text-zinc-600">
        02 // ABOUT
      </div>
    </section>
  );
};
