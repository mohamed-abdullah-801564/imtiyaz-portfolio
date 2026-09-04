import React from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { TiltCard } from '../ui/be-ui-tilt-card';
import { GraduationCap, Briefcase, Sparkles, ShieldCheck } from 'lucide-react';

interface Slide3ExperienceProps {
  activeSlide?: number;
}

export const Slide3Experience: React.FC<Slide3ExperienceProps> = ({ activeSlide = 2 }) => {
  const isActive = activeSlide === 2;

  return (
    <section
      id="slide-3-experience"
      className="slide-section w-screen h-screen relative flex items-center justify-center overflow-hidden snap-start px-6 sm:px-12 lg:px-16 bg-[#030305]"
    >
      {/* Corner Minimal Metadata */}
      <div className="absolute top-8 left-8 sm:left-12 flex items-center gap-3 select-none z-20">
        <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
          03 // EXPERIENCE & CREDENTIALS
        </span>
      </div>

      {/* Main Layout Container */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto flex flex-col justify-center z-10 my-auto py-6 select-none"
      >
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="font-syne font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase leading-none">
            CREDENTIALS & TECH STACK
          </h2>
          <p className="text-xs font-jakarta text-zinc-400 max-w-xl mx-auto mt-1.5 leading-snug">
            Verified academic qualifications, professional background & specialized software stack.
          </p>
        </div>

        {/* DUAL 3D TILT GLASS CARDS (Education & Work Experience) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* CARD A: Education & Credentials */}
          <TiltCard
            max={8}
            glare={true}
            className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education & Certification</span>
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified
                </span>
              </div>

              <ul className="space-y-3">
                <li className="text-xs font-jakarta">
                  <p className="text-white font-semibold leading-snug">Bachelor of Business Administration (BBA)</p>
                  <p className="text-zinc-400 text-[11px] mt-0.5">E.G.S. Pillay Arts & Science College</p>
                </li>
                <li className="text-xs font-jakarta pt-2.5 border-t border-white/5">
                  <p className="text-white font-semibold leading-snug">Animation, Graphic Design & Video Editing</p>
                  <p className="text-zinc-400 text-[11px] mt-0.5">FGI Media Solution (1-Yr Diploma Program)</p>
                </li>
                <li className="text-xs font-jakarta pt-2.5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold leading-snug">Certified Digital Marketer</p>
                    <p className="text-zinc-400 text-[11px] mt-0.5">HubSpot Academy Certification</p>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-orange-500/15 border border-orange-500/30 text-orange-400 text-[9px] font-mono">
                    HubSpot
                  </span>
                </li>
              </ul>
            </div>
          </TiltCard>

          {/* CARD B: Work Experience & Roles */}
          <TiltCard
            max={8}
            glare={true}
            className="p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 shadow-2xl transition-all duration-300 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-xs font-mono font-bold text-blue-400 tracking-wider uppercase flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" />
                  <span>Work Experience</span>
                </h3>
                <span className="text-[10px] font-mono text-zinc-500 uppercase">2+ Years Active</span>
              </div>

              <ul className="space-y-3.5">
                <li className="text-xs font-jakarta">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold">MS Max (Oman)</p>
                    <span className="text-[9px] font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-950/70 border border-blue-500/40">
                      Current
                    </span>
                  </div>
                  <p className="text-zinc-300 text-[11px] font-medium mt-0.5">Digital Marketing & Accounts</p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                    Performance marketing, Meta ad campaigns, brand identity, and managing agency client accounts.
                  </p>
                </li>
                <li className="text-xs font-jakarta pt-2.5 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-bold">Spark Digitech Solutions</p>
                    <span className="text-[9px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      1 Year
                    </span>
                  </div>
                  <p className="text-zinc-300 text-[11px] font-medium mt-0.5">Graphic Designer & Marketer</p>
                  <p className="text-[10px] text-zinc-400 mt-1 leading-relaxed">
                    Created marketing collateral, brand guidelines, social feeds, and promo videos.
                  </p>
                </li>
              </ul>
            </div>
          </TiltCard>
        </div>

        {/* SOFTWARE & MARKETING STACK BADGES */}
        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
          <h4 className="text-xs font-mono font-bold text-zinc-400 tracking-wider uppercase mb-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Software Tools & Marketing Technologies</span>
          </h4>

          <div className="flex flex-wrap items-center gap-2">
            {/* Primary Adobe Suite */}
            {PROFILE_DATA.tools.map((tool) => (
              <div
                key={tool.name}
                title={tool.name}
                className={`w-9 h-9 rounded-xl ${tool.bg} border ${tool.borderColor} flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-default`}
              >
                <span className={`text-xs font-syne font-black ${tool.textColor}`}>
                  {tool.abbr}
                </span>
              </div>
            ))}

            {/* Marketing & Content Badges (Subtle default borders border-white/10 hover:border-white/25) */}
            {PROFILE_DATA.secondaryTools.map((tool) => (
              <div
                key={tool.name}
                title={tool.name}
                className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/25 text-xs font-jakarta text-zinc-300 flex items-center justify-center transition-all cursor-default shadow-md"
              >
                <span className={tool.color}>{tool.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Minimal Metadata */}
      <div className="absolute bottom-6 right-8 sm:right-12 z-20 select-none text-[10px] sm:text-[11px] font-mono text-zinc-600">
        03 // EXPERIENCE
      </div>
    </section>
  );
};
