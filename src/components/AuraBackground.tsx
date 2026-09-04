import React from 'react';

interface AuraBackgroundProps {
  activeSlide: number;
}

export const AuraBackground: React.FC<AuraBackgroundProps> = ({ activeSlide }) => {
  return (
    <div
      id="ambient-aura-layer"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030305]"
      aria-hidden="true"
    >
      {/* SLIDE 1 (Index 0): Intro Glowing Blue/Violet Ribbon */}
      <div
        id="slide-1-glowing-ribbon"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 0 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[260px] rotate-[-20deg] rounded-[100%] opacity-90 blur-3xl translate-z-0 will-change-transform"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.8) 35%, rgba(99, 102, 241, 0.55) 60%, rgba(168, 85, 247, 0.25) 80%, transparent 95%)',
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[420px] h-[200px] rotate-[15deg] rounded-full opacity-70 blur-3xl translate-z-0 will-change-transform"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.7) 0%, rgba(37, 99, 235, 0.5) 50%, transparent 85%)',
          }}
        />
      </div>

      {/* SLIDE 2 (Index 1): About Ambient Studio Glow */}
      <div
        id="slide-2-ambient-orb"
        className={`absolute rounded-full transition-all duration-1000 ease-out blur-3xl translate-z-0 will-change-transform ${
          activeSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          left: '24%',
          top: '48%',
          transform: 'translate(-50%, -50%)',
          width: '640px',
          height: '640px',
          background:
            'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.7) 35%, rgba(15, 23, 42, 0.25) 70%, transparent 85%)',
        }}
      />

      {/* SLIDE 3 (Index 2): Experience Orbs */}
      <div
        id="slide-3-ambient-layer"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute rounded-full blur-3xl translate-z-0 will-change-transform"
          style={{
            left: '22%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            height: '420px',
            background:
              'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.8) 45%, rgba(56, 189, 248, 0.4) 75%, transparent 90%)',
          }}
        />
        <div
          className="absolute rounded-[100%] opacity-90 blur-3xl translate-z-0 will-change-transform"
          style={{
            right: '-80px',
            bottom: '-100px',
            width: '620px',
            height: '450px',
            transform: 'rotate(-25deg)',
            background:
              'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.9) 0%, rgba(29, 78, 216, 0.75) 40%, rgba(56, 189, 248, 0.35) 70%, transparent 90%)',
          }}
        />
      </div>

      {/* SLIDE 4 (Index 3): Services Centered Glow */}
      <div
        id="slide-4-ambient-layer"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 3 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute rounded-full blur-3xl translate-z-0 will-change-transform"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '480px',
            height: '480px',
            background:
              'radial-gradient(circle at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.8) 45%, rgba(56, 189, 248, 0.35) 75%, transparent 95%)',
          }}
        />
      </div>

      {/* SLIDE 5 (Index 4): Projects Top-Right Subtle Glow */}
      <div
        id="slide-5-ambient-layer"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 4 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute rounded-full blur-3xl translate-z-0 will-change-transform"
          style={{
            right: '10%',
            top: '20%',
            width: '480px',
            height: '480px',
            background:
              'radial-gradient(circle at center, rgba(37, 99, 235, 0.85) 0%, rgba(29, 78, 216, 0.6) 40%, transparent 80%)',
          }}
        />
      </div>

      {/* SLIDE 6 (Index 5): Client Brands Glow */}
      <div
        id="slide-6-ambient-layer"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 5 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute rounded-full blur-3xl translate-z-0 will-change-transform"
          style={{
            left: '30%',
            top: '45%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '400px',
            background:
              'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.85) 0%, rgba(29, 78, 216, 0.65) 45%, rgba(56, 189, 248, 0.25) 75%, transparent 95%)',
          }}
        />
      </div>

      {/* SLIDE 7 (Index 6): Why Me Advantage Luminous Orb */}
      <div
        id="slide-7-ambient-layer"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 6 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute rounded-full blur-3xl translate-z-0 will-change-transform"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '520px',
            height: '420px',
            background:
              'radial-gradient(circle at center, rgba(37, 99, 235, 0.9) 0%, rgba(29, 78, 216, 0.7) 45%, rgba(56, 189, 248, 0.3) 75%, transparent 95%)',
          }}
        />
      </div>

      {/* SLIDE 8 (Index 7): Final Contact Luminous Blue Orb */}
      <div
        id="slide-8-ambient-layer"
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          activeSlide === 7 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute rounded-full blur-3xl translate-z-0 will-change-transform"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '560px',
            height: '380px',
            background:
              'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.95) 0%, rgba(29, 78, 216, 0.75) 45%, rgba(56, 189, 248, 0.3) 75%, transparent 95%)',
          }}
        />
      </div>

      {/* Digital noise texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #000000 1px)',
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px',
        }}
      />

      {/* Vignette edge blending */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.75) 85%, #030305 100%)',
        }}
      />
    </div>
  );
};
