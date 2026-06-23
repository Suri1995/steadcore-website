'use client';

import React, { useEffect, useState, useMemo } from 'react';

type IconProps = {
  className?: string;
  style?: React.CSSProperties;
};

// ─── Icons ──────────────────────────────────────────────────────────────
const ArrowRightIcon = React.memo(({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
));
ArrowRightIcon.displayName = 'ArrowRightIcon';

const MailIcon = React.memo(({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>
  </svg>
));
MailIcon.displayName = 'MailIcon';

const MapPinIcon = React.memo(({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M12 21s-7-7.16-7-12a7 7 0 1 1 14 0c0 4.84-7 12-7 12Z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
));
MapPinIcon.displayName = 'MapPinIcon';

const UsersIcon = React.memo(({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
));
UsersIcon.displayName = 'UsersIcon';

const CalendarIcon = React.memo(({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </svg>
));
CalendarIcon.displayName = 'CalendarIcon';

const AcademicIcon = React.memo(({ className, style }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} style={style} aria-hidden="true">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
));
AcademicIcon.displayName = 'AcademicIcon';

// ─── Constants ────────────────────────────────────────────────────────
const TOTAL_ROLES = 7;

const stats = [
  { num: `${TOTAL_ROLES}`, label: 'Open roles',        Icon: UsersIcon },
  { num: '2026',           label: 'Year founded',       Icon: CalendarIcon },
  { num: 'Hyderabad',      label: 'Location',           Icon: MapPinIcon },
  { num: 'IIT BHU',        label: 'Founder background', Icon: AcademicIcon },
];

// ─── Main Component ──────────────────────────────────────────────────
export const CareersHero = React.memo(() => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        setVisible(true);
        return;
      }
      setTimeout(() => setVisible(true), 80);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const headlineStyle = useMemo(() => ({
    fontSize: 'clamp(36px, 5.5vw, 72px)'
  }), []);

  return (
    <>
      <style>{`
        @keyframes ch-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ch-fade { from{opacity:0} to{opacity:1} }
        @keyframes ch-scale {
          from { opacity: 0; transform: scale(0.95); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes ch-trace {
          from { stroke-dashoffset: 1100; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes ch-blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .ch-v0 { animation: ch-up    .5s ease .05s both; }
        .ch-v1 { animation: ch-up    .55s ease .18s both; }
        .ch-v2 { animation: ch-up    .5s ease .32s both; }
        .ch-v3 { animation: ch-up    .45s ease .46s both; }
        .ch-v4 { animation: ch-scale .5s ease .60s both; }
        .ch-v5 { animation: ch-fade  .6s ease .70s both; }

        .ch-tline {
          stroke-dasharray: 1100;
          stroke-dashoffset: 1100;
          animation: ch-trace 2.8s cubic-bezier(.4,0,.2,1) .8s forwards;
        }
        .ch-cursor { animation: ch-blink 1.1s step-end infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ch-v0,.ch-v1,.ch-v2,.ch-v3,.ch-v4,.ch-v5 {
            animation: none !important; opacity: 1 !important;
          }
          .ch-tline { animation: none !important; stroke-dashoffset: 0 !important; }
          .ch-cursor { animation: none !important; }
        }

        /* ── Responsive adjustments ── */
        @media (max-width: 768px) {
          .ch-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .ch-stats-desktop { display: none !important; }
          .ch-stats-mobile { display: flex !important; }
          .ch-hero-headline { font-size: clamp(28px, 8vw, 42px) !important; }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .ch-hero-grid {
            grid-template-columns: 1fr 240px !important;
            gap: 2rem !important;
          }
          .ch-stats-desktop { display: flex !important; }
          .ch-stats-mobile { display: none !important; }
        }

        @media (min-width: 1025px) {
          .ch-hero-grid {
            grid-template-columns: 1fr 280px !important;
            gap: 3rem !important;
          }
          .ch-stats-desktop { display: flex !important; }
          .ch-stats-mobile { display: none !important; }
        }
      `}</style>

      <section
        aria-labelledby="careers-hero-heading"
        className="relative overflow-hidden bg-background"
        style={{ 
          paddingTop: 'calc(var(--header-height, 80px) + 2rem)',
          paddingBottom: '0'
        }}
      >

        {/* ── Background Grid ── */}
        <svg
          className="pointer-events-none absolute inset-0 w-full h-full"
          style={{ opacity: 0.03 }}
          aria-hidden="true"
        >
          <defs>
            <pattern id="ch-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M48 0H0V48" fill="none" stroke="var(--primary)" strokeWidth="0.5"/>
              <circle cx="0"  cy="0"  r="1" fill="var(--primary)"/>
              <circle cx="48" cy="0"  r="1" fill="var(--primary)"/>
              <circle cx="0"  cy="48" r="1" fill="var(--primary)"/>
              <circle cx="48" cy="48" r="1" fill="var(--primary)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ch-grid)"/>
        </svg>

        {/* ── Main Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-16">
          
          {/* Grid Layout */}
          <div className="ch-hero-grid grid lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
            
            {/* ── LEFT COLUMN ── */}
            <div>

              {/* Eyebrow */}
              <div className={visible ? 'ch-v0' : 'opacity-0'}>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.16em] border border-primary/20">
                  <span className="relative flex w-2 h-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"/>
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-primary"/>
                  </span>
                  Careers at Steadcore Industries
                </span>
              </div>

              {/* Headline */}
              <h2
                id="careers-hero-heading"
                className={`ch-hero-headline font-montserrat font-black leading-[1.04] tracking-[-0.02em] mt-5 mb-5 ${visible ? 'ch-v1' : 'opacity-0'}`}
                style={headlineStyle}
              >
                <span className="text-foreground block">Build the boards.</span>
                <span className="text-primary block">
                  Build the company.
                  <span className="ch-cursor text-primary" aria-hidden="true">_</span>
                </span>
              </h2>

              {/* Description */}
              <div className={`max-w-xl ${visible ? 'ch-v2' : 'opacity-0'}`}>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-2">
                  Steadcore Industries is a PCB manufacturer founded in 2026 in Ramdaspally,
                  Hyderabad. We are small, engineering-led, and early.
                </p>
                <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-7">
                  The people who join now shape what this company becomes.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#open-roles"
                    className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    See open roles
                    <ArrowRightIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:careers@steadcore.in"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <MailIcon className="w-4 h-4" />
                    Send a speculative CV
                  </a>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Stat Cards ── */}
            <div className={`ch-stats-desktop hidden lg:flex flex-col gap-3 pt-1 ${visible ? 'ch-v4' : 'opacity-0'}`}>
              
              {/* "At a glance" label */}
              <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  At a glance
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {stats.map(({ num, label, Icon }, i) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 rounded-xl border px-4 py-3 transition-all hover:shadow-sm"
                  style={{
                    borderColor: i % 2 === 0 ? 'rgba(11,122,42,0.15)' : 'var(--border)',
                    background: i % 2 === 0 ? 'rgba(11,122,42,0.03)' : 'var(--card)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: i % 2 === 0 ? 'rgba(11,122,42,0.08)' : 'rgba(0,59,142,0.06)',
                    }}
                  >
                    <Icon
                      className="w-3.5 h-3.5"
                      style={{ color: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)' }}
                    />
                  </div>
                  <div>
                    <p className="font-montserrat font-extrabold text-base leading-none text-foreground">
                      {num}
                    </p>
                    <p className="text-[11px] mt-0.5 text-muted-foreground">{label}</p>
                  </div>
                </div>
              ))}

              {/* Bottom note */}
              <p className="text-[10px] mt-2 leading-relaxed text-muted-foreground opacity-70">
                All roles are based at our facility in Ramdaspally, Hyderabad.
              </p>
            </div>
          </div>

          {/* ── Mobile & Tablet Stat Pills ── */}
          <div className={`ch-stats-mobile hidden lg:hidden flex-wrap gap-2 mt-6 ${visible ? 'ch-v3' : 'opacity-0'}`}>
            {stats.map(({ num, label, Icon }, i) => (
              <div
                key={label}
                className="flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs"
              >
                <Icon 
                  className="w-3 h-3" 
                  style={{ color: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)' }} 
                />
                <span className="font-montserrat font-bold text-xs">{num}</span>
                <span className="text-[10px] text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── PCB Trace ── */}
        <div
          className={`relative w-full overflow-hidden mt-10 sm:mt-12 lg:mt-14 ${visible ? 'ch-v5' : 'opacity-0'}`}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1400 80"
            preserveAspectRatio="none"
            className="w-full"
            height="72"
          >
            <defs>
              <linearGradient id="ch-tg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="var(--primary)" stopOpacity="0"/>
                <stop offset="12%"  stopColor="var(--primary)" stopOpacity="1"/>
                <stop offset="48%"  stopColor="var(--primary)" stopOpacity="0.8"/>
                <stop offset="68%"  stopColor="var(--secondary)" stopOpacity="1"/>
                <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0"/>
              </linearGradient>
              <filter id="ch-glow-f">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main trace */}
            <path
              className="ch-tline"
              d="M0,40 L100,40 L100,16 L220,16 L220,56 L400,56 L400,24 L540,24 L540,52 L700,52 L700,20 L860,20 L860,50 L1020,50 L1020,24 L1160,24 L1160,40 L1400,40"
              fill="none"
              stroke="url(#ch-tg)"
              strokeWidth="2.2"
              filter="url(#ch-glow-f)"
            />

            {/* Junction dots */}
            {[
              [100,40], [220,16], [400,56], [540,24], 
              [700,52], [860,20], [1020,50], [1160,40]
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="5" fill={i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'} opacity="0.8"/>
                <circle cx={cx} cy={cy} r="2" fill="white" opacity="0.9"/>
              </g>
            ))}
          </svg>

          {/* Bottom gradient line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(to right, transparent, var(--primary), var(--secondary), transparent)',
              opacity: 0.15,
            }}
          />
        </div>

      </section>
    </>
  );
});

CareersHero.displayName = 'CareersHero';