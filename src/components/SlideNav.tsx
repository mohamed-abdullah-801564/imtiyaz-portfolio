import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface SlideNavProps {
  currentSlide: number;
  totalSlides: number;
  onSelectSlide: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const SlideNav: React.FC<SlideNavProps> = ({
  currentSlide,
  totalSlides,
  onSelectSlide,
  onPrev,
  onNext,
}) => {
  return (
    <div
      id="slide-deck-controller"
      className="fixed right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-3 select-none pointer-events-auto"
    >
      {/* Up Button */}
      <button
        id="btn-slide-prev"
        onClick={onPrev}
        disabled={currentSlide === 0}
        aria-label="Previous slide"
        className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-zinc-500 transition-all cursor-pointer"
      >
        <ChevronUp className="w-4 h-4" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="flex flex-col gap-2 py-2">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = currentSlide === idx;
          return (
            <button
              key={idx}
              id={`slide-dot-${idx}`}
              onClick={() => onSelectSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}`}
              className="group relative flex items-center justify-center p-1 cursor-pointer focus:outline-none"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-2 h-6 bg-white shadow-[0_0_12px_rgba(37,99,235,0.9)]'
                    : 'w-1.5 h-1.5 bg-zinc-600 group-hover:bg-zinc-300 group-hover:scale-125'
                }`}
              />
              {/* Tooltip on hover */}
              <span className="absolute right-7 px-2 py-0.5 text-[10px] tracking-widest font-mono text-zinc-400 bg-zinc-900/90 border border-white/10 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
                0{idx + 1}
              </span>
            </button>
          );
        })}
      </div>

      {/* Down Button */}
      <button
        id="btn-slide-next"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        aria-label="Next slide"
        className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 disabled:opacity-20 disabled:hover:bg-transparent disabled:hover:text-zinc-500 transition-all cursor-pointer"
      >
        <ChevronDown className="w-4 h-4" />
      </button>

      {/* Minimal Numeric Slide Counter */}
      <div className="mt-1 text-[10px] font-mono tracking-widest text-zinc-500">
        0{currentSlide + 1}
      </div>
    </div>
  );
};
