import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import AnimatedDock, { DockItemData } from '../ui/animated-dock';
import { LocationMap } from '../ui/expand-map';
import { Mail, MessageCircle, Check, ArrowUp, Send, Download, Linkedin } from 'lucide-react';


interface Slide8ContactProps {
  onRestart: () => void;
  activeSlide?: number;
}

export const Slide8Contact: React.FC<Slide8ContactProps> = ({
  onRestart,
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleDownloadResume = () => {
    try {
      fetch(PROFILE_DATA.resumeUrl, { method: 'HEAD' })
        .then((res) => {
          if (!res.ok) {
            setCopiedText('Resume coming soon');
            setTimeout(() => setCopiedText(null), 2500);
          }
        })
        .catch(() => {
          setCopiedText('Resume coming soon');
          setTimeout(() => setCopiedText(null), 2500);
        });
    } catch {
      // Fallback
    }
  };

  const dockItems: DockItemData[] = [
    {
      link: `mailto:${PROFILE_DATA.email}`,
      Icon: <Send className="w-5 h-5 text-blue-400" />,
      label: "Start a Project",
      itemClassName: "bg-blue-600/20 hover:bg-blue-600/40 border-blue-500/40 shadow-[0_0_20px_rgba(37,99,235,0.4)]",
    },
    {
      link: PROFILE_DATA.whatsappUrl,
      target: "_blank",
      Icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
      label: "Chat on WhatsApp",
      itemClassName: "bg-emerald-600/20 hover:bg-emerald-600/40 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    },
    {
      onClick: handleDownloadResume,
      Icon: <Download className="w-5 h-5 text-cyan-400" />,
      label: copiedText === 'Resume coming soon' ? 'Resume Requested' : 'Download CV',
      itemClassName: "bg-cyan-600/20 hover:bg-cyan-600/40 border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.4)]",
    },
    {
      link: PROFILE_DATA.linkedinUrl,
      target: "_blank",
      Icon: <Linkedin className="w-5 h-5 text-indigo-400" />,
      label: "LinkedIn Profile",
      itemClassName: "bg-indigo-600/20 hover:bg-indigo-600/40 border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.4)]",
    },
    {
      onClick: () => handleCopy(PROFILE_DATA.email, 'Email'),
      Icon: copiedText === 'Email' ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5 text-purple-400" />,
      label: copiedText === 'Email' ? 'Email Copied!' : 'Copy Email',
      itemClassName: copiedText === 'Email' ? "bg-emerald-600/30 border-emerald-400" : "bg-purple-600/20 hover:bg-purple-600/40 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    },
  ];

  return (
    <section
      id="slide-8-contact"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-between overflow-y-auto md:overflow-hidden snap-start py-12 px-5 md:py-8 md:px-10 lg:px-16 bg-[#030305]"
    >
      {/* Top Header Metadata Bar */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-end select-none z-20 pt-2">

        <button
          onClick={onRestart}
          className="flex items-center gap-1.5 text-label font-jakarta font-medium text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer py-1 px-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>
      </div>

      {/* Main Center Headline & Animated Dock */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 my-auto py-6 select-none"
      >
        {/* CENTERPIECE TYPOGRAPHY */}
        <div className="relative select-none flex flex-col items-center mb-10">
          {/* Luminous Blue Radial Aura */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[260px] rounded-full opacity-85 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.75) 45%, rgba(56, 189, 248, 0.25) 75%, transparent 95%)',
              filter: 'blur(45px)',
            }}
          />

          <span className="font-mono text-label tracking-[0.25em] uppercase font-semibold text-blue-400 block mb-2 z-10">
            Available For New Opportunities
          </span>

          {/* Headline "LET'S CREATE." */}
          <h2
            id="contact-headline"
            className="relative z-10 font-syne font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-tight md:leading-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            style={{ letterSpacing: '-0.03em' }}
          >
            LET'S CREATE.
          </h2>

          {/* Subtitle "MARKET. GROW." in high-contrast blue tracking */}
          <h3 className="relative z-10 font-syne font-extrabold text-xl sm:text-2xl text-blue-400 tracking-[0.2em] uppercase mt-2">
            MARKET. GROW.
          </h3>

          <p className="relative z-10 font-jakarta text-body-sm text-zinc-300 max-w-lg mt-3">
            Transforming Creative Ideas into Digital Success
          </p>
        </div>

        {/* FEEDBACK TOAST/STATUS BADGE */}
        <AnimatePresence>
          {copiedText && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className="mb-4 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-jakarta text-body-sm flex items-center gap-2 shadow-lg backdrop-blur-md"
            >
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>{copiedText === 'Email' ? 'Email copied to clipboard!' : copiedText}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* INTERACTIVE ACTIONS ROW (ANIMATED DOCK & LOCATION MAP SIDE-BY-SIDE) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 w-full mt-2 mb-2 z-20">
          <AnimatedDock items={dockItems} />
          <LocationMap location="Muscat, Oman" coordinates="23.5880° N, 58.3829° E" />
        </div>
      </motion.div>

      {/* GROUNDED PINNED FOOTER BAR */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 text-label font-jakarta text-zinc-400 uppercase z-20 select-none pb-2">
        <span>© 2026 Mohamed Imtiaz • Muscat, Sultanate of Oman</span>
        <button
          onClick={onRestart}
          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1"
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>
      </footer>
    </section>
  );
};
