'use client';

import { Reveal } from '@/components/ui/Reveal';

const stats = [
  { val: '2026', label: 'Year established' },
  { val: '10,000 m²', label: 'Single-sided PCB capacity / mo.' },
  { val: '3,000 m²', label: 'Double-sided PCB capacity / mo.' },
  { val: '3', label: 'PCB types manufactured' },
  { val: '7', label: 'Industries served' },
  { val: 'Hyderabad', label: 'Manufacturing facility location' },
];

export function AboutHero() {
  return (
    <section
      id="main-content"
      aria-labelledby="about-heading"
      className="relative pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Abstract background pattern — decorative only, pure SVG (no image request) */}
      <div aria-hidden="true" className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/20" />
            </pattern>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#glow)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-10 lg:gap-16 items-start">
          {/* Left — identity */}
          <Reveal from="left">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-6">
                About Steadcore Industries
              </span>

              <h1
                id="about-heading"
                className="font-montserrat font-black leading-[1.12] tracking-tight text-slate-900 dark:text-white mb-8"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
              >
                Engineering the circuits powering{' '}
                <span className="text-primary">India's electronics.</span>
              </h1>

              <div className="inline-flex items-baseline gap-3 mb-8">
                <span className="text-4xl sm:text-5xl font-black font-montserrat text-primary">
                  2026
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">— founded in Ramdaspally, Hyderabad</span>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50">
                Steadcore Industries is a dedicated manufacturer of Single-Sided, Double-Sided, and Metal-Core PCBs, built to strengthen India's electronics supply chain with precision, reliability, and consistency.
              </p>

              {/* Founder credibility strip */}
              <div className="mt-5 flex items-center gap-3 max-w-sm">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold font-montserrat text-sm shrink-0"
                >
                  SL
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Dr. Sri Lakshmi E
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Founder · Ph.D, EEE, IIT (BHU) Varanasi
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Divider — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"
          />

          {/* Right — fast facts */}
          <Reveal from="right" delay={0.1}>
            <div>
              <div className="grid grid-cols-2 gap-px bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-xl">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-slate-900/90 px-4 py-5 sm:px-6 sm:py-6 flex flex-col gap-1 hover:bg-primary/5 transition-colors duration-300 group"
                    role="figure"
                    aria-label={`${s.val} — ${s.label}`}
                  >
                    <span className="text-xl sm:text-2xl font-black font-montserrat text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {s.val}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Custom inline illustration — replaces an unreliable stock photo, zero extra network requests */}
              <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/7] relative shadow-xl bg-[#0a3324]">
                <svg
                  viewBox="0 0 900 400"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  role="img"
                  aria-label="Illustration of a populated printed circuit board with copper traces and a central chip"
                >
                  <defs>
                    <linearGradient id="boardBg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#0f4c3a" />
                      <stop offset="100%" stopColor="#08291f" />
                    </linearGradient>
                    <radialGradient id="boardGlow" cx="70%" cy="25%" r="65%">
                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <rect width="900" height="400" fill="url(#boardBg)" />
                  <rect width="900" height="400" fill="url(#boardGlow)" />

                  <g stroke="#d4af6a" strokeWidth="2" fill="none" opacity="0.55">
                    <path d="M40 60 H 260 L 300 100 H 480" />
                    <path d="M40 140 H 180 L 220 180 H 420" />
                    <path d="M40 220 H 140" />
                    <path d="M40 320 H 240 L 280 280 H 400" />
                    <path d="M860 60 H 640 L 600 100 H 540" />
                    <path d="M860 140 H 700 L 660 180 H 540" />
                    <path d="M860 320 H 620 L 580 280 H 540" />
                    <path d="M860 220 H 700" />
                  </g>

                  <g fill="#e8c47e">
                    <circle cx="40" cy="60" r="5" />
                    <circle cx="40" cy="140" r="5" />
                    <circle cx="40" cy="220" r="5" />
                    <circle cx="40" cy="320" r="5" />
                    <circle cx="860" cy="60" r="5" />
                    <circle cx="860" cy="140" r="5" />
                    <circle cx="860" cy="220" r="5" />
                    <circle cx="860" cy="320" r="5" />
                  </g>

                  <rect x="380" y="140" width="140" height="120" rx="6" fill="#111827" stroke="#d4af6a" strokeWidth="2" />
                  <g stroke="#d4af6a" strokeWidth="2">
                    <line x1="380" y1="160" x2="358" y2="160" />
                    <line x1="380" y1="190" x2="358" y2="190" />
                    <line x1="380" y1="220" x2="358" y2="220" />
                    <line x1="380" y1="250" x2="358" y2="250" />
                    <line x1="520" y1="160" x2="542" y2="160" />
                    <line x1="520" y1="190" x2="542" y2="190" />
                    <line x1="520" y1="220" x2="542" y2="220" />
                    <line x1="520" y1="250" x2="542" y2="250" />
                  </g>
                  <text x="450" y="205" textAnchor="middle" fontFamily="monospace" fontSize="13" fill="#d4af6a" opacity="0.85">
                    STEADCORE
                  </text>

                  <rect x="600" y="210" width="42" height="22" rx="2" fill="#1f2937" stroke="#d4af6a" strokeWidth="1.5" />
                  <rect x="258" y="118" width="42" height="22" rx="2" fill="#1f2937" stroke="#d4af6a" strokeWidth="1.5" />
                  <circle cx="700" cy="280" r="14" fill="#1f2937" stroke="#d4af6a" strokeWidth="1.5" />
                </svg>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <p className="absolute bottom-3 left-4 text-white text-xs font-medium backdrop-blur-sm bg-black/40 px-3 py-1 rounded-full">
                  Ramdaspally, Hyderabad — production floor
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Animated scroll indicator — decorative, desktop only */}
        <div aria-hidden="true" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-400 dark:text-slate-500 tracking-wider">EXPLORE</span>
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}