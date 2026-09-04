import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { Mail, MessageCircle, Copy, Check, ArrowUp, Send, Download, Linkedin } from 'lucide-react';

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

  return (
    <section
      id="slide-8-contact"
      className="slide-section min-h-[100dvh] md:h-screen w-full relative flex flex-col items-center justify-between overflow-y-auto md:overflow-hidden snap-start px-5 sm:px-10 lg:px-16 py-8 bg-[#030305]"
    >
      {/* Top Header Metadata Bar */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between select-none z-20 pt-2">
        <div className="flex items-center gap-3">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-zinc-500 uppercase">
            08 // CONTACT & INQUIRIES
          </span>
        </div>

        <button
          onClick={onRestart}
          className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-zinc-400 hover:text-white transition-colors uppercase cursor-pointer py-1 px-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Back to Top</span>
        </button>
      </div>

      {/* Main Center Headline & Redesigned Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.6, delay: isMobile ? 1 : 0.5 }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 my-auto py-6 select-none"
      >
        {/* CENTERPIECE TYPOGRAPHY */}
        <div className="relative select-none flex flex-col items-center mb-8">
          {/* Luminous Blue Radial Aura */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[500px] sm:h-[260px] rounded-full opacity-85 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.75) 45%, rgba(56, 189, 248, 0.25) 75%, transparent 95%)',
              filter: 'blur(45px)',
            }}
          />

          <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-zinc-400 uppercase font-semibold block mb-2 z-10">
            Available For New Opportunities
          </span>

          {/* Headline "LET'S CREATE." */}
          <h2
            id="contact-headline"
            className="relative z-10 font-syne font-extrabold text-3xl sm:text-4xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            style={{ letterSpacing: '-0.03em' }}
          >
            LET'S CREATE.
          </h2>

          {/* Subtitle "MARKET. GROW." in high-contrast blue tracking */}
          <h3 className="relative z-10 font-mono font-bold text-xl sm:text-3xl text-blue-400 tracking-[0.25em] uppercase mt-2">
            MARKET. GROW.
          </h3>

          <p className="relative z-10 font-sans text-xs sm:text-sm tracking-wider text-zinc-300 max-w-lg mt-3 font-medium">
            Transforming Creative Ideas into Digital Success
          </p>
        </div>

        {/* PRIMARY ACTION ROW: Sleek Prominent Action Pills */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl mb-5">
          {/* 1. Start a Project */}
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            id="btn-start-project"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2.5 border border-blue-400/40 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.8)] group cursor-pointer"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Start a Project</span>
          </a>

          {/* 2. Chat on WhatsApp */}
          <a
            href={PROFILE_DATA.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            id="btn-chat-whatsapp"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/35 border border-emerald-500/50 backdrop-blur-md text-xs sm:text-sm font-mono font-bold text-emerald-300 hover:text-white transition-all flex items-center justify-center gap-2.5 shadow-xl hover:shadow-emerald-500/20 group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* SECONDARY UTILITY ROW: Minimal Action Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
          {/* Download CV */}
          <a
            href={PROFILE_DATA.resumeUrl}
            download="Mohamed_Imtiaz_Resume.pdf"
            onClick={handleDownloadResume}
            id="btn-download-resume"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/12 text-zinc-300 hover:text-white text-xs flex items-center gap-2 transition-colors cursor-pointer border border-white/10 shadow"
          >
            <Download className="w-3.5 h-3.5 text-blue-400" />
            <span>{copiedText === 'Resume coming soon' ? 'Resume Requested' : 'Download CV'}</span>
          </a>

          {/* LinkedIn Profile */}
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/12 text-zinc-300 hover:text-white text-xs flex items-center gap-2 transition-colors cursor-pointer border border-white/10 shadow"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
          </a>

          {/* Copy Email */}
          <button
            onClick={() => handleCopy(PROFILE_DATA.email, 'Email')}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/12 text-zinc-300 hover:text-white text-xs flex items-center gap-2 transition-colors cursor-pointer border border-white/10 shadow"
          >
            {copiedText === 'Email' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Email Copied!</span>
              </>
            ) : (
              <>
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* GROUNDED PINNED FOOTER BAR */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase z-20 select-none pb-2">
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
