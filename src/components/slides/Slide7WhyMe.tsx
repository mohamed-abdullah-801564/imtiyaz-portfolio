import React from 'react';
import { motion } from 'motion/react';
import { TiltCard } from '../ui/be-ui-tilt-card';
import { TrendingUp, Compass, Layers, CheckCircle2 } from 'lucide-react';

interface Slide7WhyMeProps {
  activeSlide?: number;
}

export const Slide7WhyMe: React.FC<Slide7WhyMeProps> = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const pillars = [
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-400" />,
      title: "Performance & ROI Focus",
      description:
        "Every ad creative, reel, and graphic is engineered with audience psychology and clear call-to-actions to maximize campaign conversion.",
      highlights: ["Data-informed ad creative design", "Meta & Google performance setup", "Conversion-first visual hierarchy"],
    },
    {
      icon: <Compass className="w-5 h-5 text-cyan-400" />,
      title: "GCC & Oman Regional Depth",
      description:
        "Based in Muscat, Oman with direct experience navigating local market dynamics, GCC consumer preferences, and regional commercial trends.",
      highlights: ["Oman & GCC audience alignment", "Regional brand positioning", "Localized promo content"],
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack Creative Execution",
      description:
        "Eliminating agency handoff friction by handling end-to-end campaign asset creation—from graphic design and promo reels to ad management.",
      highlights: ["Design, video & copy integration", "Single point of accountability", "Rapid turnarounds"],
    },
  ];

  return (
    <section
      id="slide-7-whyme"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto md:overflow-hidden snap-start py-12 px-5 md:py-0 md:px-10 lg:px-16 bg-[#030305]"
    >
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-5xl mx-auto flex flex-col justify-center z-10 my-auto py-4 select-none"
      >
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-tight md:leading-none max-w-3xl mx-auto">
            CREATIVITY + STRATEGY = MEASURABLE GROWTH
          </h2>
          <p className="font-jakarta font-normal text-body-sm text-zinc-400 max-w-xl mx-auto mt-2 leading-relaxed">
            The strategic formula behind high-impact social media, performance ad campaigns, and commercial retainers.
          </p>
        </div>

        {/* 3 Advantage Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 w-full">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: 0.5 + (idx * 0.15) }}
            >
              <TiltCard
                max={8}
                glare={true}
                className="p-4 sm:p-5 rounded-2xl bg-white/[0.045] border border-white/[0.12] hover:border-white/20 shadow-xl transition-all duration-300 h-full flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>

                  <h3 className="font-jakarta font-bold text-heading-sm text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-jakarta font-normal text-body-sm text-zinc-400 leading-relaxed mt-1.5 mb-4">
                    {pillar.description}
                  </p>
                </div>

                <ul className="space-y-1.5 pt-3 border-t border-white/5">
                  {pillar.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="font-jakarta text-body-sm text-zinc-300 flex items-center gap-1.5 font-normal">
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
    </section>
  );
};
