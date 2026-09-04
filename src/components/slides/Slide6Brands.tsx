import React from 'react';
import { motion } from 'motion/react';
import { CLIENT_BRANDS } from '../../data/portfolioData';
import { TiltCard } from '../ui/be-ui-tilt-card';
import { Tag, MapPin, Building2 } from 'lucide-react';

interface Slide6BrandsProps {
  activeSlide?: number;
}

export const Slide6Brands: React.FC<Slide6BrandsProps> = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="slide-6-brands"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto md:overflow-hidden snap-start py-12 px-5 md:py-0 md:px-10 lg:px-16 bg-[#030305]"
    >
      {/* Corner Minimal Metadata */}
      <div className="hidden md:flex absolute top-6 left-6 sm:top-8 sm:left-12 items-center gap-3 select-none z-20">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
          06 // CLIENTS & COLLABORATIONS
        </span>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.7, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-4xl mx-auto flex flex-col justify-center z-10 my-auto py-4 select-none"
      >
        {/* Section Header */}
        <div className="text-center mb-4 sm:mb-5">
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight md:leading-none">
            CLIENT BRANDS & COLLABORATIONS
          </h2>
          <p className="font-jakarta font-normal text-xs text-zinc-400 max-w-xl mx-auto mt-1.5 leading-snug">
            Long-term marketing retainer accounts, creative direction & digital ad campaigns across Oman & GCC.
          </p>
        </div>

        {/* 4 Compact Retainer Client Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
          {CLIENT_BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.5 + (idx * 0.15) }}
            >
              <TiltCard
                max={8}
                glare={true}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-white/25 shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Avatar & Location Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-900/80 to-zinc-900 border border-blue-500/40 flex items-center justify-center text-xs font-syne font-black text-blue-300 group-hover:text-white shrink-0 shadow-md transition-colors">
                        {brand.initials}
                      </span>
                      <div>
                        <h3 className="font-jakarta font-bold text-sm text-white group-hover:text-blue-300 transition-colors leading-snug">
                          {brand.name}
                        </h3>
                        {brand.handle && (
                          <span className="font-mono text-[10px] tracking-[0.25em] text-zinc-400 block leading-tight">
                            {brand.handle}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[9px] font-mono flex items-center gap-1 shrink-0">
                      <MapPin className="w-2.5 h-2.5 text-blue-400" />
                      {brand.location}
                    </span>
                  </div>

                  {/* Subtitle & Industry */}
                  <p className="font-jakarta font-normal text-[11px] sm:text-xs text-zinc-300 leading-snug mt-1.5 mb-1.5">
                    {brand.subtitle}
                  </p>

                  <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 mb-2">
                    <Building2 className="w-3 h-3 text-zinc-500" />
                    <span>{brand.industry}</span>
                  </div>
                </div>

                {/* Service Tags Pill Strip */}
                <div className="pt-2 border-t border-white/5 flex flex-wrap gap-1">
                  {brand.services.map((service, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[9px] font-mono flex items-center gap-1"
                    >
                      <Tag className="w-2 h-2 text-blue-400" />
                      {service}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Minimal Metadata */}
      <div className="hidden md:block absolute bottom-6 right-8 sm:right-12 z-20 select-none text-[10px] sm:text-[11px] font-mono text-zinc-600">
        06 // CLIENTS
      </div>
    </section>
  );
};
