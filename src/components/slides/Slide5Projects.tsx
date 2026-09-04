import React from 'react';
import { motion } from 'motion/react';
import { CAMPAIGN_PROJECTS, ProjectItem } from '../../data/portfolioData';
import { Eye, Sparkles } from 'lucide-react';

interface Slide5ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
  activeSlide?: number;
}

export const Slide5Projects: React.FC<Slide5ProjectsProps> = ({
  onSelectProject,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      id="slide-5-projects"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-center overflow-y-auto md:overflow-hidden snap-start px-5 sm:px-10 lg:px-16 py-14 md:py-0 bg-[#030305]"
    >
      {/* Container holding header + grid fitted to viewport height */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-6xl mx-auto flex flex-col justify-center h-full max-h-[90vh] py-6 z-10 select-none"
      >
        {/* Header */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-900/80 to-zinc-900 border border-blue-500/40 flex items-center justify-center text-white font-syne font-black text-sm sm:text-base tracking-wider shadow-lg shrink-0">
              MS
            </div>
            <div>
              <h2 className="font-syncopate font-bold text-2xl sm:text-3xl md:text-2xl lg:text-3xl text-white tracking-wider uppercase leading-none">
                MS MAX & CLIENT CAMPAIGNS
              </h2>
              <p className="font-sans text-xs sm:text-[13px] text-zinc-400 max-w-2xl leading-snug mt-1 font-normal">
                Creative Design, Ad Creatives & Social Content
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-zinc-400 uppercase font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Verified Commercial Work</span>
          </div>
        </div>

        {/* 7 Project Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 w-full items-stretch">
          {CAMPAIGN_PROJECTS.map((project, idx) => {
            const isWhiteBgLogo =
              project.image.includes('Insta_Saver_@gadjetsoman') ||
              project.image.includes('Insta_Saver_@smoko_eats') ||
              project.image.includes('IMG_2126') ||
              project.image.includes('IMG_2127') ||
              project.image.includes('649148396');

            return (
              <motion.div
                key={project.id}
                id={`project-item-${idx}`}
                onClick={() => onSelectProject(project)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, delay: (isMobile ? 1 : 0.5) + 0.08 * idx }}
                className="group relative rounded-2xl border border-white/[0.08] hover:border-white/20 bg-zinc-950/70 hover:bg-zinc-900/80 overflow-hidden backdrop-blur-md shadow-2xl hover:-translate-y-1.5 transition-all duration-300 aspect-[4/3] sm:aspect-square md:h-44 cursor-pointer p-2.5 sm:p-3 flex flex-col justify-between"
              >
                {isWhiteBgLogo ? (
                  /* Inner White Container - Seamless logo fit */
                  <div className="w-full h-full bg-white rounded-xl p-3 flex items-center justify-center shadow-inner overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  /* Full Cover Image */
                  <div className="w-full h-full rounded-xl overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Hover Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 z-20 pointer-events-none rounded-2xl">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-zinc-200 uppercase font-medium block">
                    {project.client}
                  </span>
                  <p className="text-xs font-sans font-bold text-white leading-snug mt-0.5 line-clamp-2">
                    {project.title}
                  </p>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 group-hover:text-white">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    <span>Click to View</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Minimal Metadata */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-12 z-20 select-none text-[10px] sm:text-[11px] font-mono text-zinc-600">
        05 // PROJECTS
      </div>
    </section>
  );
};
