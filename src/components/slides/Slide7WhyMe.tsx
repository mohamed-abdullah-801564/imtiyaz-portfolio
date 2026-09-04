import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from '../ui/be-ui-tilt-card';
import { TrendingUp, Compass, Layers, CheckCircle2 } from 'lucide-react';

interface Slide7WhyMeProps {
  activeSlide?: number;
}

export const Slide7WhyMe: React.FC<Slide7WhyMeProps> = ({ activeSlide = 6 }) => {
  const isActive = activeSlide === 6;

  const pillars = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Performance & ROI Focus",
      description:
        "Every ad creative, reel, and graphic is engineered with audience psychology and clear call-to-actions to maximize campaign conversion and click-through rates.",
      highlights: ["Data-informed ad creative design", "Meta & Google performance setup", "Conversion-first visual hierarchy"],
    },
    {
      icon: <Compass className="w-6 h-6 text-cyan-400" />,
      title: "GCC & Oman Regional Depth",
      description:
        "Based in Muscat, Oman with direct experience navigating local market dynamics, GCC consumer preferences, and regional commercial trends.",
      highlights: ["Oman & GCC audience alignment", "Regional brand positioning", "Localized promo content"],
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: "Full-Stack Creative Execution",
      description:
        "Eliminating agency handoff friction by handling end-to-end campaign asset creation—from graphic design and promo reels to ad management.",
      highlights: ["Design, video & copy integration", "Single point of accountability", "Rapid turnarounds"],
    },
  ];

  return (
    <section
      id="slide-7-whyme"
      className="slide-section w-screen h-screen relative flex items-center justify-center overflow-hidden snap-start px-6 sm:px-12 lg:px-16 bg-[#030305]"
    >
      {/* Corner Minimal Metadata */}
      <div className="absolute top-8 left-8 sm:left-12 flex items-center gap-3 select-none z-20">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
          07 // THE ADVANTAGE
        </span>
      </div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto flex flex-col justify-center z-10 my-auto py-4 select-none"
      >
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-syne font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-none">
            CREATIVITY + STRATEGY = MEASURABLE GROWTH
          </h2>
          <p className="text-xs sm:text-sm font-jakarta text-zinc-400 max-w-xl mx-auto mt-2 leading-relaxed">
            The strategic formula behind high-impact social media, performance ad campaigns, and commercial retainers.
          </p>
        </div>

        {/* 3 Advantage Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.15 * idx }}
            >
              <TiltCard
                max={8}
                glare={true}
                className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-syne font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-zinc-300 font-jakarta leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/5">
                  {pillar.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="text-[11px] font-jakarta text-zinc-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Minimal Metadata */}
      <div className="absolute bottom-6 right-8 sm:right-12 z-20 select-none text-[10px] sm:text-[11px] font-mono text-zinc-600">
        07 // ADVANTAGE
      </div>
    </section>
  );
};
