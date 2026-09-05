import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'motion/react';
import { FileText, ExternalLink } from 'lucide-react';
import { ImageModal } from '../ImageModal';

interface Slide3ExperienceProps {
  activeSlide?: number;
  isActive?: boolean;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
}

export const Slide3Experience: React.FC<Slide3ExperienceProps> = ({
  activeSlide,
  isActive,
  scrollContainerRef,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileWrapperRef = useRef<HTMLDivElement>(null);

  const [selectedCertImage, setSelectedCertImage] = useState<{
    image: string;
    title: string;
    category?: string;
  } | null>(null);

  const isCurrentlyActive = isActive !== undefined ? isActive : activeSlide === 2;

  // Desktop Motion Values & Transforms
  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, { stiffness: 80, damping: 25, mass: 0.5 });
  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  // Mobile Scroll-Progress Transforms (Pinned Sticky Scroll)
  const { scrollYProgress: mobileScrollProgress } = useScroll({
    target: mobileWrapperRef,
    offset: ["start start", "end end"],
  });
  const mobileLineHeight = useTransform(mobileScrollProgress, [0, 1], ['0%', '100%']);

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
    { name: "AI Content Tools", label: "AI Creative", color: "text-emerald-400", abbr: "Ai", bg: "bg-emerald-950/60" },
  ];

  const milestones = [
    {
      date: "Mid 2024 - Present",
      title: "Digital Marketing & Accounts",
      institution: "MS Max (Oman) + HubSpot Certified Marketer",
      description: "Leading performance Meta ads, digital marketing strategies, corporate PR campaigns, and retainer account growth in Oman.",
      certificates: [
        {
          name: "View HubSpot Certificate",
          type: "image" as const,
          url: "/certificates/hubspot-digital-marketing-certified.jpeg",
          title: "HubSpot Digital Marketing Certification",
        },
        {
          name: "View Semrush Certificate",
          type: "pdf" as const,
          url: "/certificates/semrush-ai-search-certificate.pdf",
          title: "Semrush AI Search Operating System Certification",
        },
      ],
    },
    {
      date: "2023 - 2024",
      title: "Graphic Designer & Marketer",
      institution: "Spark Digitech Solutions",
      description: "Designed multi-channel ad graphics, agency client branding guidelines, promotional video reels, and social media feed strategies.",
    },
    {
      date: "2021 - 2022",
      title: "Animation, Graphic Design & Video Editing",
      institution: "FGI Media Solution (1-Yr Diploma Program)",
      description: "1-year intensive professional diploma program in visual design, video editing, motion graphics & digital media assets.",
    },
    {
      date: "2020 - 2021",
      title: "Bachelor of Business Administration (BBA)",
      institution: "E.G.S. Pillay Arts & Science College",
      description: "Foundational degree in business management, marketing principles, administration, and corporate communications.",
    },
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
  const pointerEvents1 = useTransform(opacity1, (v) => (v > 0.5 ? 'auto' : 'none'));

  const opacity2 = useTransform(smoothProgress, [0.32, 0.45, 0.58, 0.68], [0, 1, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.32, 0.45, 0.65], [30, 0, -40]);
  const nodeBg2 = useTransform(smoothProgress, [0.32, 0.42, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow2 = useTransform(smoothProgress, [0.32, 0.42, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);
  const pointerEvents2 = useTransform(opacity2, (v) => (v > 0.5 ? 'auto' : 'none'));

  const opacity3 = useTransform(smoothProgress, [0.60, 0.72, 0.82, 0.90], [0, 1, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.60, 0.72, 0.88], [30, 0, -40]);
  const nodeBg3 = useTransform(smoothProgress, [0.60, 0.70, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow3 = useTransform(smoothProgress, [0.60, 0.70, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);
  const pointerEvents3 = useTransform(opacity3, (v) => (v > 0.5 ? 'auto' : 'none'));

  const opacity4 = useTransform(smoothProgress, [0.85, 0.95, 1.0], [0, 1, 1]);
  const y4 = useTransform(smoothProgress, [0.85, 0.95], [30, 0]);
  const nodeBg4 = useTransform(smoothProgress, [0.85, 0.92, 1], ['#27272a', '#ffffff', '#ffffff']);
  const nodeShadow4 = useTransform(smoothProgress, [0.85, 0.92, 1], ['0 0 0px rgba(0,0,0,0)', '0 0 16px rgba(255,255,255,1)', '0 0 16px rgba(255,255,255,1)']);
  const pointerEvents4 = useTransform(opacity4, (v) => (v > 0.5 ? 'auto' : 'none'));

  const desktopTransforms = [
    { opacity: opacity1, y: y1, nodeBg: nodeBg1, nodeShadow: nodeShadow1, pointerEvents: pointerEvents1, pos: 'top-[15%]', isLeft: true },
    { opacity: opacity2, y: y2, nodeBg: nodeBg2, nodeShadow: nodeShadow2, pointerEvents: pointerEvents2, pos: 'top-[42%]', isLeft: false },
    { opacity: opacity3, y: y3, nodeBg: nodeBg3, nodeShadow: nodeShadow3, pointerEvents: pointerEvents3, pos: 'top-[70%]', isLeft: true },
    { opacity: opacity4, y: y4, nodeBg: nodeBg4, nodeShadow: nodeShadow4, pointerEvents: pointerEvents4, pos: 'top-[92%]', isLeft: false },
  ];

  // Mobile Milestone Transforms (Linked to sticky page scroll progress in containerRef)
  // Milestone 1 starts at opacity 0 at initial rest, fading in shortly after scroll starts
  const mobOpacity1 = useTransform(mobileScrollProgress, [0.05, 0.18, 0.28, 0.35], [0, 1, 1, 0]);
  const mobY1 = useTransform(mobileScrollProgress, [0.05, 0.18, 0.28, 0.35], [24, 0, 0, -24]);
  const mobNodeBg1 = useTransform(mobileScrollProgress, [0.05, 0.18, 0.28, 0.35], ['#27272a', '#ffffff', '#ffffff', '#27272a']);
  const mobNodeShadow1 = useTransform(mobileScrollProgress, [0.05, 0.18, 0.28, 0.35], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)', '0 0 0px rgba(0,0,0,0)']);
  const mobPointerEvents1 = useTransform(mobOpacity1, (v) => (v > 0.5 ? 'auto' : 'none'));

  const mobOpacity2 = useTransform(mobileScrollProgress, [0.28, 0.38, 0.48, 0.58], [0, 1, 1, 0]);
  const mobY2 = useTransform(mobileScrollProgress, [0.28, 0.38, 0.48, 0.58], [24, 0, 0, -24]);
  const mobNodeBg2 = useTransform(mobileScrollProgress, [0.28, 0.38, 0.48, 0.58], ['#27272a', '#ffffff', '#ffffff', '#27272a']);
  const mobNodeShadow2 = useTransform(mobileScrollProgress, [0.28, 0.38, 0.48, 0.58], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)', '0 0 0px rgba(0,0,0,0)']);
  const mobPointerEvents2 = useTransform(mobOpacity2, (v) => (v > 0.5 ? 'auto' : 'none'));

  const mobOpacity3 = useTransform(mobileScrollProgress, [0.52, 0.62, 0.72, 0.82], [0, 1, 1, 0]);
  const mobY3 = useTransform(mobileScrollProgress, [0.52, 0.62, 0.72, 0.82], [24, 0, 0, -24]);
  const mobNodeBg3 = useTransform(mobileScrollProgress, [0.52, 0.62, 0.72, 0.82], ['#27272a', '#ffffff', '#ffffff', '#27272a']);
  const mobNodeShadow3 = useTransform(mobileScrollProgress, [0.52, 0.62, 0.72, 0.82], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)', '0 0 0px rgba(0,0,0,0)']);
  const mobPointerEvents3 = useTransform(mobOpacity3, (v) => (v > 0.5 ? 'auto' : 'none'));

  const mobOpacity4 = useTransform(mobileScrollProgress, [0.76, 0.86, 1.0], [0, 1, 1]);
  const mobY4 = useTransform(mobileScrollProgress, [0.76, 0.86, 1.0], [24, 0, 0]);
  const mobNodeBg4 = useTransform(mobileScrollProgress, [0.76, 0.86, 1.0], ['#27272a', '#ffffff', '#ffffff']);
  const mobNodeShadow4 = useTransform(mobileScrollProgress, [0.76, 0.86, 1.0], ['0 0 0px rgba(0,0,0,0)', '0 0 14px rgba(255,255,255,1)', '0 0 14px rgba(255,255,255,1)']);
  const mobPointerEvents4 = useTransform(mobOpacity4, (v) => (v > 0.5 ? 'auto' : 'none'));

  const mobileTransforms = [
    { opacity: mobOpacity1, y: mobY1, nodeBg: mobNodeBg1, nodeShadow: mobNodeShadow1, pointerEvents: mobPointerEvents1 },
    { opacity: mobOpacity2, y: mobY2, nodeBg: mobNodeBg2, nodeShadow: mobNodeShadow2, pointerEvents: mobPointerEvents2 },
    { opacity: mobOpacity3, y: mobY3, nodeBg: mobNodeBg3, nodeShadow: mobNodeShadow3, pointerEvents: mobPointerEvents3 },
    { opacity: mobOpacity4, y: mobY4, nodeBg: mobNodeBg4, nodeShadow: mobNodeShadow4, pointerEvents: mobPointerEvents4 },
  ];

  return (
    <>
      {/* DESKTOP STAGE (>= 768px): Full Block Alternating Timeline */}
      <section
        ref={sectionRef}
        id="slide-3-experience"
        className="hidden md:flex slide-section h-screen w-full relative overflow-hidden flex-col justify-between py-6 px-12 lg:px-20 bg-[#030305] snap-start select-none"
      >
        {/* Header Container */}
        <div className="pt-6 pb-2 text-center select-none shrink-0 z-20">
          <h2 className="text-3xl md:text-4xl font-syne font-black text-white tracking-tight text-center uppercase leading-none">
            EDUCATION & EXPERIENCE
          </h2>
          <p className="text-body-sm font-jakarta text-zinc-400 mt-1 mb-2 max-w-sm mx-auto font-normal">
            Verified academic qualifications, professional background & specialized software stack.
          </p>
        </div>

        {/* Timeline Stage Container */}
        <div className="relative w-full max-w-5xl mx-auto h-[360px] flex items-center justify-center my-auto select-none px-4">
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
                <div key={idx} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Glowing Circle Node */}
                  <motion.div
                    style={{
                      backgroundColor: t.nodeBg,
                      boxShadow: t.nodeShadow,
                    }}
                    className={`absolute left-1/2 -translate-x-1/2 ${t.pos} -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 border-black z-30 transition-colors duration-300 pointer-events-none`}
                  />

                  {/* Cohesive Full Milestone Text Block with Opacity-based Pointer-Events */}
                  <motion.div
                    style={{ opacity: t.opacity, y: t.y, pointerEvents: t.pointerEvents }}
                    className={`w-full flex items-center ${t.isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`w-[calc(50%-2.5rem)] flex flex-col ${
                        t.isLeft
                          ? 'text-right items-end pr-8 sm:pr-12'
                          : 'ml-auto text-left items-start pl-8 sm:pl-12'
                      }`}
                    >
                      <span className="text-label font-jakarta text-blue-400 font-bold tracking-wider uppercase mb-1 inline-block">
                        {milestone.date}
                      </span>
                      <h3 className="text-heading-sm font-syne font-bold text-white leading-snug">
                        {milestone.title}
                      </h3>
                      <p className="text-body-sm font-jakarta text-zinc-300 font-medium mt-0.5">
                        {milestone.institution}
                      </p>
                      <p className="text-body-sm font-jakarta text-zinc-400 leading-relaxed max-w-sm mt-2 font-normal">
                        {milestone.description}
                      </p>

                      {/* Certificate Badges */}
                      {milestone.certificates && (
                        <div className={`mt-3 flex flex-wrap gap-2.5 ${t.isLeft ? 'justify-end' : 'justify-start'}`}>
                          {milestone.certificates.map((cert, cIdx) =>
                            cert.type === 'pdf' ? (
                              <a
                                key={cIdx}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 hover:text-white text-label font-jakarta font-medium transition-all duration-200 shadow-sm cursor-pointer"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>{cert.name}</span>
                              </a>
                            ) : (
                              <button
                                key={cIdx}
                                type="button"
                                onClick={() =>
                                  setSelectedCertImage({
                                    image: cert.url,
                                    title: cert.title,
                                    category: 'Professional Certificate',
                                  })
                                }
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-label font-jakarta font-medium transition-all duration-200 shadow-sm cursor-pointer"
                              >
                                <FileText className="w-3.5 h-3.5" />
                                <span>{cert.name}</span>
                              </button>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Infinite Tool Marquee (Desktop) */}
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
                    className="h-10 px-4 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.08] backdrop-blur-md flex items-center gap-2 shrink-0 transition-all duration-300 shadow-sm mx-2 cursor-pointer group"
                  >
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center font-syne font-black text-[9px] ${item.color} ${
                        item.bg || 'bg-white/10'
                      }`}
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

      {/* MOBILE STAGE (< 768px): Sticky Pinned Scroll Section */}
      <div
        ref={mobileWrapperRef}
        id="slide-3-experience-mobile"
        className="md:hidden relative w-full h-[280vh] bg-[#030305]"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-start py-6 px-5 bg-[#030305] overflow-hidden select-none z-10">
          {/* Mobile Header Container */}
          <div className="pt-4 pb-2 text-center select-none shrink-0 z-20">
            <h2 className="text-2xl font-syne font-black text-white tracking-tight text-center uppercase leading-none">
              EDUCATION & EXPERIENCE
            </h2>
            <p className="text-body-sm font-jakarta text-zinc-400 mt-1 mb-2 max-w-sm mx-auto font-normal">
              Verified academic qualifications, professional background & specialized software stack.
            </p>
          </div>

          {/* Mobile Timeline Stage Container - Uncapped Full Height Stage */}
          <div className="relative w-full max-w-5xl mx-auto flex-1 h-full flex items-center justify-center my-auto select-none px-2 py-4">
            <div className="w-full h-full relative select-none pr-1">
              {/* Left Background Gray Guide Line */}
              <div className="w-[2px] bg-zinc-700/80 absolute left-6 top-4 bottom-8 z-0 block" />

              {/* Left Active White Drawing Line */}
              <motion.div
                style={{ height: mobileLineHeight }}
                className="absolute left-6 top-4 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,1)] origin-top z-10 pointer-events-none"
              />

              {/* Mobile Milestones Absolute Overlapping Stack */}
              <div className="relative w-full h-full z-20">
                {milestones.map((milestone, idx) => {
                  const mt = mobileTransforms[idx];
                  return (
                    <div key={idx} className="absolute inset-0 flex items-center justify-start pointer-events-none">
                      {/* Node Dot on Left Line */}
                      <motion.div
                        style={{
                          backgroundColor: mt.nodeBg,
                          boxShadow: mt.nodeShadow,
                        }}
                        className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-2 border-black z-30 transition-colors duration-300 pointer-events-none"
                      />

                      {/* Milestone Text Block with Opacity-based Pointer-Events */}
                      <motion.div
                        style={{ opacity: mt.opacity, y: mt.y, pointerEvents: mt.pointerEvents }}
                        className="w-full relative flex items-start pl-12 pr-2"
                      >
                        <div className="flex flex-col text-left w-full">
                          <span className="text-label font-jakarta text-blue-400 font-bold uppercase block mb-0.5">
                            {milestone.date}
                          </span>
                          <h3 className="text-heading-sm font-syne font-bold text-white leading-snug">
                            {milestone.title}
                          </h3>
                          <p className="text-body-sm font-jakarta text-zinc-300 font-medium mt-0.5">
                            {milestone.institution}
                          </p>
                          <p className="text-body-sm font-jakarta text-zinc-400 leading-relaxed mt-1 font-normal">
                            {milestone.description}
                          </p>

                          {/* Certificate Badges Mobile */}
                          {milestone.certificates && (
                            <div className="mt-3 flex flex-wrap gap-2 justify-start">
                              {milestone.certificates.map((cert, cIdx) =>
                                cert.type === 'pdf' ? (
                                  <a
                                    key={cIdx}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 hover:text-white text-label font-jakarta font-medium transition-all duration-200 shadow-sm cursor-pointer"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    <span>{cert.name}</span>
                                  </a>
                                ) : (
                                  <button
                                    key={cIdx}
                                    type="button"
                                    onClick={() =>
                                      setSelectedCertImage({
                                        image: cert.url,
                                        title: cert.title,
                                        category: 'Professional Certificate',
                                      })
                                    }
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white text-label font-jakarta font-medium transition-all duration-200 shadow-sm cursor-pointer"
                                  >
                                    <FileText className="w-3.5 h-3.5" />
                                    <span>{cert.name}</span>
                                  </button>
                                )
                              )}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE TOOL MARQUEE (Renders in normal document flow immediately following the pinned timeline section on mobile) */}
      <div className="md:hidden w-full bg-[#030305] py-6 px-5 select-none z-10">
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
                  className="h-8 px-3 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center gap-2 shrink-0 shadow-sm mx-1.5 cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 rounded-md flex items-center justify-center font-syne font-black text-[9px] ${item.color} ${
                      item.bg || 'bg-white/10'
                    }`}
                  >
                    {displayAbbr}
                  </div>
                  <span className="font-jakarta font-semibold text-xs text-zinc-300 tracking-tight">
                    {displayName}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Certificate Image Modal Lightbox */}
      <ImageModal
        isOpen={!!selectedCertImage}
        onClose={() => setSelectedCertImage(null)}
        image={selectedCertImage?.image || ''}
        title={selectedCertImage?.title || ''}
        category={selectedCertImage?.category || 'Certificate'}
      />
    </>
  );
};
