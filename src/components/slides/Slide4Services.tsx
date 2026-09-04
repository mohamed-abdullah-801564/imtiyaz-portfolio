import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/be-ui-tilt-card';
import { Target, Share2, Palette, Video, Tag } from 'lucide-react';

interface Slide4ServicesProps {
  activeSlide?: number;
}

export const Slide4Services: React.FC<Slide4ServicesProps> = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const serviceIcons = [
    <Target className="w-5 h-5 text-blue-400" />,
    <Share2 className="w-5 h-5 text-cyan-400" />,
    <Palette className="w-5 h-5 text-purple-400" />,
    <Video className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section
      id="slide-4-services"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto md:overflow-hidden snap-start px-5 sm:px-10 lg:px-16 py-14 md:py-0 bg-[#030305]"
    >
      {/* Corner Minimal Metadata */}
      <div className="hidden md:flex absolute top-6 left-6 sm:top-8 sm:left-12 items-center gap-3 select-none z-20">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
          04 // SERVICES & CAPABILITIES
        </span>
      </div>

      {/* Main Layout Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-5xl mx-auto flex flex-col justify-center z-10 my-auto py-4 select-none"
      >
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-syne font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-none">
            WHAT I DO
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto mt-2 leading-relaxed">
            Core digital marketing & design pillars engineered to accelerate brand visibility and drive revenue.
          </p>
        </div>

        {/* 4 Core Pillars Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
          {PROFILE_DATA.services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, delay: 0.6 + (idx * 0.15), ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard
                max={8}
                glare={true}
                className="p-5 rounded-2xl bg-zinc-950/70 backdrop-blur-md border border-white/[0.08] hover:border-white/20 shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                      {serviceIcons[idx]}
                    </div>
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase font-semibold group-hover:text-blue-400 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-sm sm:text-base text-white tracking-tight leading-snug mb-2 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed font-normal mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Service Feature Tags */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-[10px] font-mono flex items-center gap-1"
                    >
                      <Tag className="w-2.5 h-2.5 text-blue-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Minimal Metadata */}
      <div className="hidden md:block absolute bottom-6 right-6 sm:bottom-8 sm:right-12 z-20 select-none text-[10px] sm:text-[11px] font-mono text-zinc-600">
        04 // SERVICES
      </div>
    </section>
  );
};
