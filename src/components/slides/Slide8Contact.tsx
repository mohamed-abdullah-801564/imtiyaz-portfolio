import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROFILE_DATA } from '../../data/portfolioData';
import { Mail, MessageCircle, MapPin, Copy, Check, ArrowUp, Send, Download, Linkedin, Instagram } from 'lucide-react';

interface Slide8ContactProps {
  onRestart: () => void;
  activeSlide?: number;
}

export const Slide8Contact: React.FC<Slide8ContactProps> = ({
  onRestart,
  activeSlide = 7,
}) => {
  const isActive = activeSlide === 7;
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Graceful check: attempt download, show notification feedback if file not found
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
      className="slide-section w-screen h-screen relative flex flex-col items-center justify-between overflow-hidden snap-start px-6 sm:px-12 py-6 bg-[#030305]"
    >
      {/* Top Header & Back to Top Bar */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between select-none z-20">
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

      {/* Main Center Headline & Action Pills */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 my-auto select-none"
      >
        {/* CENTERPIECE HEADLINE */}
        <div className="relative select-none flex flex-col items-center mb-6">
          {/* Luminous Blue Radial Aura */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[500px] sm:h-[260px] rounded-full opacity-85 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.75) 45%, rgba(56, 189, 248, 0.25) 75%, transparent 95%)',
              filter: 'blur(45px)',
            }}
          />

          <span className="text-xs sm:text-sm font-mono tracking-[0.35em] text-blue-400 uppercase font-semibold block mb-2 z-10">
            Available For New Opportunities
          </span>

          <h2
            id="contact-headline"
            className="relative z-10 font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white uppercase leading-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            style={{ letterSpacing: '-0.03em' }}
          >
            LET'S CREATE. <br className="hidden sm:inline" /> MARKET. GROW.
          </h2>

          <p className="relative z-10 text-xs sm:text-base font-jakarta tracking-wider text-zinc-300 max-w-lg mt-3 font-medium">
            Transforming Creative Ideas into Digital Success
          </p>
        </div>

        {/* MODERN ACTION PILLS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-2xl mb-6">
          {/* Start a Project Pill (Email Action) */}
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            id="btn-start-project"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:shadow-[0_0_35px_rgba(37,99,235,0.8)] group cursor-pointer"
          >
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Start a Project</span>
          </a>

          {/* Chat on WhatsApp Pill */}
          <a
            href={PROFILE_DATA.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            id="btn-chat-whatsapp"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600/20 hover:bg-emerald-600/35 border border-emerald-500/50 backdrop-blur-md text-xs sm:text-sm font-mono font-bold text-emerald-300 hover:text-white transition-all flex items-center justify-center gap-2.5 shadow-xl hover:shadow-emerald-500/20 group cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Download Resume / CV Pill with Graceful Fallback */}
          <a
            href={PROFILE_DATA.resumeUrl}
            download="Mohamed_Imtiaz_Resume.pdf"
            onClick={handleDownloadResume}
            id="btn-download-resume"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-mono font-bold text-white transition-all flex items-center justify-center gap-2.5 shadow-xl group cursor-pointer"
          >
            <Download className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
            <span>{copiedText === 'Resume coming soon' ? 'Resume Requested' : 'Download CV'}</span>
          </a>
        </div>

        {/* Quick Copy Email & Phone Bar + Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
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

          <button
            onClick={() => handleCopy(PROFILE_DATA.phone, 'Phone')}
            className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/12 text-zinc-300 hover:text-white text-xs flex items-center gap-2 transition-colors cursor-pointer border border-white/10 shadow"
          >
            {copiedText === 'Phone' ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Number Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-emerald-400" />
                <span>Copy Phone</span>
              </>
            )}
          </button>

          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 text-blue-300 hover:text-white text-xs flex items-center gap-2 transition-colors cursor-pointer border border-blue-500/20 shadow"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn Profile</span>
          </a>
        </div>
      </motion.div>

      {/* DEDICATED FOOTER COMPONENT */}
      <footer className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 border-t border-white/10 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase z-20 select-none">
        <span>© 2024 Mohamed Imtiaz • Digital Marketer & Designer</span>
        <div className="flex items-center gap-4">
          <span>Muscat, Sultanate of Oman</span>
          <button
            onClick={onRestart}
            className="hover:text-white transition-colors cursor-pointer"
          >
            ↑ Top
          </button>
        </div>
      </footer>
    </section>
  );
};
