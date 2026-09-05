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
    <Target className="w-4.5 h-4.5 text-blue-400" />,
    <Share2 className="w-4.5 h-4.5 text-cyan-400" />,
    <Palette className="w-4.5 h-4.5 text-purple-400" />,
    <Video className="w-4.5 h-4.5 text-emerald-400" />,
  ];

  return (
    <section
      id="slide-4-services"
      className="slide-section h-auto md:min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-start md:justify-center overflow-y-auto snap-start pt-10 pb-12 px-5 md:py-10 md:px-10 lg:px-16 bg-[#030305]"
    >
      {/* Main Layout Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-5xl mx-auto flex flex-col justify-start md:justify-center z-10 my-0 md:my-auto py-1 select-none"
      >
        {/* Section Header */}
        <div className="text-center mb-3 sm:mb-4">
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight md:leading-none">
            WHAT I DO
          </h2>
          <p className="font-jakarta font-normal text-body-sm text-zinc-400 max-w-xl mx-auto mt-1.5 leading-relaxed">
            Core digital marketing & design pillars engineered to accelerate brand visibility and drive revenue.
          </p>
        </div>

        {/* 4 Core Pillars Grid (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 w-full">
          {PROFILE_DATA.services.map((service, idx) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.5 + (idx * 0.15) }}
            >
              <TiltCard
                max={8}
                glare={true}
                className="p-3 sm:p-4 rounded-2xl bg-white/[0.045] border border-white/[0.12] hover:border-white/20 shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-md">
                      {serviceIcons[idx]}
                    </div>
                    <span className="font-jakarta text-label font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="font-jakarta font-bold text-heading-sm text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-jakarta font-normal text-body-sm text-zinc-400 leading-relaxed mt-0.5 mb-2.5">
                    {service.description}
                  </p>
                </div>

                {/* Service Feature Tags */}
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 text-label font-jakarta font-medium flex items-center gap-1"
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
    </section>
  );
};
