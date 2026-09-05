import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';

interface Slide3ExperienceProps {
  activeSlide?: number;
  isActive?: boolean;
}

export const Slide3Experience: React.FC<Slide3ExperienceProps> = ({ activeSlide, isActive }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const isCurrentlyActive = isActive !== undefined ? isActive : activeSlide === 2;

  // Desktop Motion Values & Transforms
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, { stiffness: 80, damping: 25, mass: 0.5 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Mobile Motion Values & Transforms (Unified scroll measurement)
  const mobileRawProgress = useMotionValue(0);
  const mobileLineHeight = useTransform(mobileRawProgress, [0, 1], ['0%', '100%']);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollHeight - target.clientHeight;
    if (maxScroll > 0) {
      const progress = Math.max(0, Math.min(1, target.scrollTop / maxScroll));
      mobileRawProgress.set(progress);
    }
  };

  const marqueeItems = [
    { name: "Photoshop", abbr: "Ps", color: "text-[#31a8ff]", bg: "bg-[#001e36]" },
    { name: "Illustrator", abbr: "Ai", color: "text-[#ff9a00]", bg: "bg-[#331c00]" },
    { name: "Premiere Pro", abbr: "Pr", color: "text-[#ea77ff]", bg: "bg-[#2b0036]" },
    { name: "After Effects", abbr: "Ae", color: "text-[#9999ff]", bg: "bg-[#1b103b]" },
    { name: "Canva", label: "Canva", color: "text-cyan-400", abbr: "Cv", bg: "bg-cyan-950/60" },
    { name: "CapCut", label: "CapCut", color: "text-white", abbr: "Cc", bg: "bg-zinc-800" },
    { name: "Meta Business Suite", label: "Meta Ads", color: "text-blue-400", abbr: "Ma", bg: "bg-blue-950/60" },
    { name: "Google Ads", label: "Google Ads", color: "text-amber-400", abbr: "Ga", bg: "bg-amber-950/60" },
    { name: "TikTok Marketing", label: "TikTok", color: "text-pink-400", abbr: "Tt", bg: "bg-pink-950/60" },
    { name: "HubSpot", label: "HubSpot", color: "text-orange-400", abbr: "Hs", bg: "bg-orange-950/60" },
    { name: "AI Content Tools", label: "AI Creative", color: "text-emerald-400", abbr: "Ai", bg: "bg-emerald-950/60" }
  ];

  const milestones = [
    {
      date: "Mid 2024 - Present",
      title: "Digital Marketing & Accounts",
      institution: "MS Max (Oman) + HubSpot Certified Marketer",
      description: "Leading performance Meta ads, digital marketing strategies, corporate PR campaigns, and retainer account growth in Oman."
    },
    {
      date: "2023 - 2024",
      title: "Graphic Designer & Marketer",
      institution: "Spark Digitech Solutions",
      description: "Designed multi-channel ad graphics, agency client branding guidelines, promotional video reels, and social media feed strategies."
    },
    {
      date: "2021 - 2022",
      title: "Animation, Graphic Design & Video Editing",
      institution: "FGI Media Solution (1-Yr Diploma Program)",
      description: "1-year intensive professional diploma program in visual design, video editing, motion graphics & digital media assets."
    },
    {
      date: "2020 - 2021",
      title: "Bachelor of Business Administration (BBA)",
      institution: "E.G.S. Pillay Arts & Science College",
      description: "Foundational degree in business management, marketing principles, administration, and corporate communications."
    }
  ];

  // Native Window Wheel Listener for Desktop Wheel Scrubbing
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const handleWheel = (e: WheelEvent) => {
      if (!isCurrentlyActive) return;

      const current = rawProgress.get();
      const delta = e.deltaY * 0.0008;
      const next = Math.max(0, Math.min(1, current + delta));

      if (e.deltaY > 0) {
        if (current < 1) {
          e.preventDefault();
          e.stopPropagation();
          rawProgress.set(next);
        }
      } else if (e.deltaY < 0) {
        if (current > 0) {
          e.preventDefault();
          e.stopPropagation();
          rawProgress.set(next);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isCurrentlyActive, rawProgress]);

  // Desktop Milestone Transforms
  const opacity1 = useTransform(smoothProgress, [0.05, 0.18, 0.32, 0.40], [0, 1, 1, 0]);
  const y1 = useTransform(smoothProgress, [0.05, 0.18, 0.35], [30, 0, -40]);
  const nodeBg1 = useTransform(smoothProgress, [0, 0.15, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow1 = useTransform(smoothProgress, [0, 0.15, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);

  const opacity2 = useTransform(smoothProgress, [0.32, 0.45, 0.58, 0.68], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.32, 0.45, 0.65], [30, 0, -40]);
  const nodeBg2 = useTransform(smoothProgress, [0.32, 0.42, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow2 = useTransform(smoothProgress, [0.32, 0.42, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);

  const opacity3 = useTransform(smoothProgress, [0.60, 0.72, 0.82, 0.90], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.60, 0.72, 0.88], [30, 0, -40]);
  const nodeBg3 = useTransform(smoothProgress, [0.60, 0.70, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow3 = useTransform(smoothProgress, [0.60, 0.70, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);

  const opacity4 = useTransform(smoothProgress, [0.85, 0.95, 1.0], [0, 1, 1]);
  const y4 = useTransform(smoothProgress, [0.85, 0.95], [30, 0]);
  const nodeBg4 = useTransform(smoothProgress, [0.85, 0.92, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow4 = useTransform(smoothProgress, [0.85, 0.92, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);

  const desktopTransforms = [
    { opacity: opacity1, y: y1, nodeBg: nodeBg1, nodeShadow: nodeShadow1, pos: 'top-[15%]', isLeft: true },
    { opacity: opacity2, y: y2, nodeBg: nodeBg2, nodeShadow: nodeShadow2, pos: 'top-[42%]', isLeft: false },
    { opacity: opacity3, y: y3, nodeBg: nodeBg3, nodeShadow: nodeShadow3, pos: 'top-[70%]', isLeft: true },
    { opacity: opacity4, y: y4, nodeBg: nodeBg4, nodeShadow: nodeShadow4, pos: 'top-[92%]', isLeft: false }
  ];

  // Mobile Milestone Transforms (Linked strictly to mobileRawProgress thresholds)
  const mobOpacity1 = useTransform(mobileRawProgress, [0.05, 0.12], [0, 1]);
  const mobX1 = useTransform(mobileRawProgress, [0.05, 0.12], [20, 0]);
  const mobNodeBg1 = useTransform(mobileRawProgress, [0, 0.10, 1], ['#27272a', '#ffffff', '#ffffff']);
  const mobNodeShadow1 = useTransform(mobileRawProgress, [0, 0.10, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)']);

  const mobOpacity2 = useTransform(mobileRawProgress, [0.30, 0.40], [0, 1]);
  const mobX2 = useTransform(mobileRawProgress, [0.30, 0.40], [20, 0]);
  const mobNodeBg2 = useTransform(mobileRawProgress, [0, 0.38, 1], ['#27272a', '#ffffff', '#ffffff']);
  const mobNodeShadow2 = useTransform(mobileRawProgress, [0, 0.38, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)']);

  const mobOpacity3 = useTransform(mobileRawProgress, [0.60, 0.70], [0, 1]);
  const mobX3 = useTransform(mobileRawProgress, [0.60, 0.70], [20, 0]);
  const mobNodeBg3 = useTransform(mobileRawProgress, [0, 0.68, 1], ['#27272a', '#ffffff', '#ffffff']);
  const mobNodeShadow3 = useTransform(mobileRawProgress, [0, 0.68, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)']);

  const mobOpacity4 = useTransform(mobileRawProgress, [0.88, 0.96], [0, 1]);
  const mobX4 = useTransform(mobileRawProgress, [0.88, 0.96], [20, 0]);
  const mobNodeBg4 = useTransform(mobileRawProgress, [0, 0.95, 1], ['#27272a', '#ffffff', '#ffffff']);
  const mobNodeShadow4 = useTransform(mobileRawProgress, [0, 0.95, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)']);

  const mobileTransforms = [
    { opacity: mobOpacity1, x: mobX1, nodeBg: mobNodeBg1, nodeShadow: mobNodeShadow1 },
    { opacity: mobOpacity2, x: mobX2, nodeBg: mobNodeBg2, nodeShadow: mobNodeShadow2 },
    { opacity: mobOpacity3, x: mobX3, nodeBg: mobNodeBg3, nodeShadow: mobNodeShadow3 },
    { opacity: mobOpacity4, x: mobX4, nodeBg: mobNodeBg4, nodeShadow: mobNodeShadow4 }
  ];

  return (
    <section
      ref={sectionRef}
      id="slide-3-experience"
      className="slide-section h-screen w-full relative overflow-hidden flex flex-col justify-between py-4 sm:py-6 px-4 sm:px-8 md:px-12 lg:px-20 bg-[#030305] snap-start select-none"
    >
      {/* Header Container */}
      <div className="pt-4 md:pt-6 pb-2 text-center select-none shrink-0 z-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-syne font-black text-white tracking-tight text-center uppercase leading-none">
          EDUCATION & EXPERIENCE
        </h2>
        <p className="text-xs text-zinc-400 mt-1 mb-2 max-w-sm mx-auto font-normal">
          Verified academic qualifications, professional background & specialized software stack.
        </p>
      </div>

      {/* Timeline Stage Container */}
      <div className="relative w-full max-w-5xl mx-auto h-[320px] md:h-[360px] flex items-center justify-center my-auto select-none px-2 sm:px-4">
        {!isMobile ? (
          /* Desktop Stage (>= 768px): Full Block Alternating Timeline */
          <div className="relative w-full h-full flex items-center justify-center z-20">
            {/* Background Gray Guide Track */}
            <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-zinc-800 z-0" />

            {/* Active White Drawing Line */}
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-1/2 -translate-x-1/2 top-4 w-[2px] bg-white shadow-[0_0_14px_rgba(255,255,255,1)] origin-top z-10 pointer-events-none"
            />

            {milestones.map((milestone, idx) => {
              const t = desktopTransforms[idx];

              return (
                <div key={idx} className="absolute inset-0 flex items-center justify-center">
                  {/* Glowing Circle Node */}
                  <motion.div
                    style={{
                      backgroundColor: t.nodeBg,
                      boxShadow: t.nodeShadow
                    }}
                    className={`absolute left-1/2 -translate-x-1/2 ${t.pos} -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-black z-30 transition-colors duration-300`}
                  />

                  {/* Cohesive Full Milestone Text Block */}
                  <motion.div
                    style={{ opacity: t.opacity, y: t.y }}
                    className={`w-full flex items-center ${t.isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`w-[calc(50%-2.5rem)] flex flex-col ${t.isLeft
                          ? 'text-right items-end pr-8 sm:pr-12'
                          : 'ml-auto text-left items-start pl-8 sm:pl-12'
                        }`}
                    >
                      <span className="text-xs font-mono text-blue-400 font-bold tracking-wider uppercase mb-1 inline-block">
                        {milestone.date}
                      </span>
                      <h3 className="text-lg sm:text-xl font-syne font-bold text-white leading-snug">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-jakarta text-zinc-300 font-medium mt-0.5">
                        {milestone.institution}
                      </p>
                      <p className="text-xs sm:text-sm font-jakarta text-zinc-400 leading-relaxed max-w-sm mt-2 font-normal">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Mobile Stage (< 768px): Left Line & Touch-Scroll Line Draw */
          <div
            ref={mobileContainerRef}
            onScroll={handleMobileScroll}
            className="w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar relative select-none pr-1"
          >
            {/* Left Background Gray Guide Line */}
            <div className="absolute left-6 sm:left-8 top-4 bottom-12 w-[2px] bg-zinc-800 z-0" />

            {/* Left Active White Drawing Line */}
            <motion.div
              style={{ height: mobileLineHeight }}
              className="absolute left-6 sm:left-8 top-4 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,1)] origin-top z-10 pointer-events-none"
            />

            {/* Mobile Milestones Stack */}
            <div className="space-y-8 pt-4 pb-12 relative z-20">
              {milestones.map((milestone, idx) => {
                const mt = mobileTransforms[idx];
                return (
                  <div key={idx} className="relative flex items-start w-full min-h-[140px] pl-12 sm:pl-16">
                    {/* Node Dot on Left Line */}
                    <motion.div
                      style={{
                        backgroundColor: mt.nodeBg,
                        boxShadow: mt.nodeShadow
                      }}
                      className="absolute left-6 sm:left-8 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-black z-30 transition-colors duration-300"
                    />

                    {/* Right-Side Text Block */}
                    <motion.div style={{ opacity: mt.opacity, x: mt.x }} className="flex flex-col text-left">
                      <span className="text-xs font-mono text-blue-400 font-bold uppercase block mb-0.5">
                        {milestone.date}
                      </span>
                      <h3 className="text-base sm:text-lg font-syne font-bold text-white leading-snug">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-jakarta text-zinc-300 font-medium mt-0.5">
                        {milestone.institution}
                      </p>
                      <p className="text-xs sm:text-sm font-jakarta text-zinc-400 leading-relaxed mt-1 font-normal">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Infinite Tool Marquee */}
      <div className="mt-auto pb-4 shrink-0 z-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden py-1 select-none"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="animate-marquee">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => {
              const displayName = item.label || item.name;
              const displayAbbr = item.abbr || displayName.slice(0, 2);
              return (
                <div
                  key={idx}
                  className="h-8 sm:h-10 px-3 sm:px-4 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-md flex items-center gap-2 shrink-0 transition-all duration-300 shadow-sm mx-1.5 sm:mx-2 cursor-pointer group"
                >
                  <div
                    className={`w-4 h-4 rounded-md flex items-center justify-center font-syne font-black text-[9px] ${item.color} ${item.bg || 'bg-white/10'}`}
                  >
                    {displayAbbr}
                  </div>
                  <span className="font-jakarta font-semibold text-xs text-zinc-300 group-hover:text-white tracking-tight">
                    {displayName}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};









