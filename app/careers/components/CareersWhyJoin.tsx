'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';

// ─── Icons ──────────────────────────────────────────────────────────────
const CheckIcon = React.memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" 
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
));
CheckIcon.displayName = 'CheckIcon';

const SparkleIcon = React.memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
));
SparkleIcon.displayName = 'SparkleIcon';

const RocketIcon = React.memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2s-3 4-3 9c0 3.5 1.5 6 3 8 1.5-2 3-4.5 3-8 0-5-3-9-3-9z"/>
    <path d="M8.5 14.5c-1.5 1.5-3 3.5-3 5.5 0 1.5 1 2.5 2.5 2.5 2 0 3.5-1.5 4.5-3.5"/>
    <path d="M15.5 14.5c1.5 1.5 3 3.5 3 5.5 0 1.5-1 2.5-2.5 2.5-2 0-3.5-1.5-4.5-3.5"/>
  </svg>
));
RocketIcon.displayName = 'RocketIcon';

// ─── Data ──────────────────────────────────────────────────────────────
const reasons = [
  {
    number: '01',
    heading: 'Work at the ground floor',
    body: 'Steadcore was founded in 2026. The systems, processes, and culture are still being shaped — which means your decisions have real, visible impact from day one.',
    icon: RocketIcon,
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20',
    borderColor: 'border-emerald-200/50 dark:border-emerald-800/30',
  },
  {
    number: '02',
    heading: 'Engineering-led, IIT-founded',
    body: 'The company is built on technical rigour. We make decisions with data and engineering principles, not just instinct.',
    icon: SparkleIcon,
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20',
    borderColor: 'border-blue-200/50 dark:border-blue-800/30',
  },
  {
    number: '03',
    heading: 'Work on a physical product',
    body: 'Every PCB we ship goes into a real electronic product — LED systems, industrial automation, power electronics. You can hold what you build.',
    icon: CheckIcon,
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20',
    borderColor: 'border-purple-200/50 dark:border-purple-800/30',
  },
  {
    number: '04',
    heading: 'Grow with the industry',
    body: "India's electronics manufacturing sector is expanding rapidly. Being part of a domestic PCB company right now puts you at the centre of that shift.",
    icon: RocketIcon,
    gradient: 'from-amber-500 to-orange-500',
    bgGradient: 'from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20',
    borderColor: 'border-amber-200/50 dark:border-amber-800/30',
  },
  {
    number: '05',
    heading: 'Honest about what we are',
    body: "We won't claim decades of history we don't have. What we offer instead is a team that's serious about the fundamentals, a clear mission, and room to grow.",
    icon: CheckIcon,
    gradient: 'from-rose-500 to-red-500',
    bgGradient: 'from-rose-50/50 to-red-50/50 dark:from-rose-950/20 dark:to-red-950/20',
    borderColor: 'border-rose-200/50 dark:border-rose-800/30',
  },
  {
    number: '06',
    heading: 'Hyderabad — electronics corridor',
    body: "Ramdaspally sits within one of India's most active manufacturing and technology corridors. Proximity to suppliers, customers, and talent matters.",
    icon: SparkleIcon,
    gradient: 'from-cyan-500 to-sky-500',
    bgGradient: 'from-cyan-50/50 to-sky-50/50 dark:from-cyan-950/20 dark:to-sky-950/20',
    borderColor: 'border-cyan-200/50 dark:border-cyan-800/30',
  },
];

// ─── Main Component ──────────────────────────────────────────────────
export const CareersWhyJoin = React.memo(() => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // ── Memoized styles ──
  const sectionStyles = useMemo(() => ({
    background: 'linear-gradient(180deg, rgba(11,122,42,0.03) 0%, transparent 50%, rgba(11,122,42,0.03) 100%)',
  }), []);

  return (
    <>
      <style>{`
        @keyframes wj-float {
          0%, 100% { transform: translateY(0px) translateZ(0); }
          50% { transform: translateY(-6px) translateZ(0); }
        }
        @keyframes wj-glow {
          0%, 100% { opacity: 0.4; transform: scale(1) translateZ(0); }
          50% { opacity: 0.7; transform: scale(1.1) translateZ(0); }
        }
        @keyframes wj-slide-up {
          from { opacity: 0; transform: translateY(30px) translateZ(0); }
          to { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes wj-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .wj-card {
          animation: wj-slide-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .wj-card:nth-child(1) { animation-delay: 0.05s; }
        .wj-card:nth-child(2) { animation-delay: 0.12s; }
        .wj-card:nth-child(3) { animation-delay: 0.19s; }
        .wj-card:nth-child(4) { animation-delay: 0.26s; }
        .wj-card:nth-child(5) { animation-delay: 0.33s; }
        .wj-card:nth-child(6) { animation-delay: 0.40s; }

        .wj-header { animation: wj-fade-in 0.7s ease both; }
        .wj-header-delay { animation-delay: 0.1s; }

        .wj-float {
          animation: wj-float 4s ease-in-out infinite;
          will-change: transform;
          transform: translateZ(0);
        }
        .wj-float-delay { animation-delay: 1.5s; }

        .wj-glow {
          animation: wj-glow 3s ease-in-out infinite;
          will-change: transform, opacity;
          transform: translateZ(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .wj-card, .wj-header, .wj-header-delay {
            animation: none !important;
            opacity: 1 !important;
          }
          .wj-float, .wj-float-delay, .wj-glow {
            animation: none !important;
          }
        }

        @media (max-width: 640px) {
          .wj-card { animation-duration: 0.4s; }
        }
      `}</style>

      <section
        aria-labelledby="why-join-heading"
        className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
        style={sectionStyles}
      >
        {/* ── Background decorative elements ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Gradient orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />
          
          {/* Grid pattern overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wj-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wj-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ── Header ── */}
          <div className={`wj-header text-center mb-12 sm:mb-14 lg:mb-16 ${visible ? '' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.16em] border border-primary/20 mb-5">
              <span className="relative flex w-2 h-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"/>
                <span className="relative inline-flex rounded-full w-2 h-2 bg-primary"/>
              </span>
              Why Steadcore
            </div>

            {/* Heading */}
            <h2
              id="why-join-heading"
              className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight mb-4"
            >
              Honest reasons to join
            </h2>

            {/* Subtitle */}
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              No mission statements about "changing the world". Here is what working at Steadcore actually means.
            </p>

            {/* Decorative line */}
            <div className="flex justify-center mt-6">
              <div className="h-0.5 w-16 rounded-full bg-gradient-to-r from-primary/0 via-primary to-secondary/0" />
            </div>
          </div>

          {/* ── Grid ── */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
            role="list"
          >
            {reasons.map(({ number, heading, body, icon: Icon, gradient, bgGradient, borderColor }) => (
              <div
                key={number}
                className={`wj-card group relative rounded-2xl border ${borderColor} bg-card p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2 focus-within:ring-offset-background`}
                role="listitem"
                style={{
                  background: `linear-gradient(135deg, var(--card) 0%, var(--card) 70%, ${bgGradient} 100%)`,
                }}
              >
                {/* ── Hover glow effect ── */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${bgGradient}, transparent 80%)`,
                  }}
                  aria-hidden="true"
                />

                {/* ── Top gradient bar ── */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(to right, var(--${gradient.split(' ')[0].replace('from-', '')}), var(--${gradient.split(' ')[1]?.replace('to-', '') || gradient.split(' ')[0].replace('from-', '')}))` }}
                  aria-hidden="true"
                />

                {/* ── Icon with floating animation ── */}
                <div className="relative mb-4">
                  <div 
                    className={`w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${gradient} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${number === '01' || number === '04' ? 'wj-float' : 'wj-float-delay'}`}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Glow ring */}
                  <div 
                    className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md wj-glow`}
                    style={{ background: `linear-gradient(135deg, var(--${gradient.split(' ')[0].replace('from-', '')}), var(--${gradient.split(' ')[1]?.replace('to-', '') || gradient.split(' ')[0].replace('from-', '')}))` }}
                    aria-hidden="true"
                  />
                </div>

                {/* ── Content ── */}
                <div className="relative">
                  {/* Number watermark */}
                  <span
                    className="absolute top-0 right-0 font-montserrat font-black text-5xl text-primary/[0.05] dark:text-primary/[0.08] leading-none select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {number}
                  </span>

                  <h3 className="font-montserrat font-bold text-base sm:text-lg text-foreground mb-2 leading-snug pr-8">
                    {heading}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {body}
                  </p>

                  {/* ── Decorative corner accent ── */}
                  <div 
                    className="absolute bottom-3 right-3 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${bgGradient.replace('/50', '/30')}, transparent 70%)`,
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* ── Read more indicator ── */}
                <div className="relative mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium text-primary">Learn more</span>
                  <svg className="w-3.5 h-3.5 text-primary transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* ── Bottom CTA ── */}
          <div className={`wj-header wj-header-delay text-center mt-12 sm:mt-14 ${visible ? '' : 'opacity-0'}`}>
            <p className="text-sm text-muted-foreground">
              Ready to make an impact?{' '}
              <a 
                href="#open-roles" 
                className="font-semibold text-primary hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm transition-colors"
              >
                View open positions
              </a>
              {' '}or{' '}
              <a 
                href="mailto:careers@steadcore.in" 
                className="font-semibold text-primary hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm transition-colors"
              >
                send us your CV
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
});

CareersWhyJoin.displayName = 'CareersWhyJoin';