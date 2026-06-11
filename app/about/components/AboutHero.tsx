'use client';

import { Reveal } from '@/components/ui/Reveal';

const stats = [
  { val: '20+', label: 'Years in operation' },
  { val: '400+', label: 'Engineers on staff' },
  { val: '50M+', label: 'Boards delivered' },
  { val: '60+', label: 'Countries served' },
  { val: '9 yrs', label: 'Avg. customer tenure' },
  { val: '< 0.01%', label: 'Field failure rate' },
];

export function AboutHero() {
  return (
    <section
      id="main-content"
      aria-labelledby="about-heading"
      className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
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

      {/* Background image as subtle texture */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <img
          src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=1920&h=1080&fit=crop&auto=format&q=90"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2px_1fr] gap-0 lg:gap-16 items-start">
          {/* Left — identity */}
          <Reveal from="left">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
                  About PCBTech
                </p>
              </div>
              <h1
                id="about-heading"
                className="font-montserrat font-black leading-[1.08] tracking-tight text-slate-900 dark:text-white mb-8"
                style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.2rem)' }}
              >
                We make the boards the
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  world depends on.
                </span>
              </h1>

              <div className="inline-flex items-baseline gap-3 mb-8">
                <span className="text-5xl font-black font-montserrat bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  2003
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">— founded in Shenzhen</span>
              </div>

              <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-200/50 dark:border-slate-700/50">
                PCBTech is a privately-owned contract PCB manufacturer specialising in rigid, flex, and HDI assemblies for medical, aerospace, and industrial customers who cannot afford failure.
              </p>
            </div>
          </Reveal>

          {/* Divider — desktop only */}
          <div
            aria-hidden="true"
            className="hidden lg:block w-px self-stretch bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"
          />

          {/* Right — fast facts */}
          <Reveal from="right" delay={0.1}>
            <div className="mt-10 lg:mt-14">
              <div className="grid grid-cols-2 gap-px bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-2xl overflow-hidden shadow-xl">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-white dark:bg-slate-900/90 backdrop-blur-sm px-6 py-6 flex flex-col gap-1 hover:bg-gradient-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300 group"
                    role="figure"
                    aria-label={`${s.val} — ${s.label}`}
                  >
                    <span className="text-2xl font-black font-montserrat text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                      {s.val}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/7] relative group shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&h=400&fit=crop&auto=format&q=82"
                  alt="PCBTech production floor, Shenzhen facility"
                  width={900}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <p className="absolute bottom-3 left-4 text-white text-xs font-medium backdrop-blur-sm bg-black/40 px-3 py-1 rounded-full">
                  Shenzhen main campus — Building A production floor
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-slate-400 dark:text-slate-500 tracking-wider">EXPLORE</span>
          <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}