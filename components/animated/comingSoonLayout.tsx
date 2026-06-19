'use client';

// components/ComingSoonLayout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Shared "Coming Soon" layout. All styles are inline Tailwind on each tag.
// Usage:
//   <ComingSoonLayout eyebrow="PCB Products" tagline="..." badge="In Production" />
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ComingSoonLayoutProps {
  eyebrow: string;
  tagline: string;
  badge: string;
}

// ─── Static data (deterministic — no Math.random, avoids hydration mismatch) ─

const PARTICLE_CONFIGS = [
  { left: '8%',  top: '15%', duration: 7,  delay: 0,   size: 4, bg: '#E8632A' },
  { left: '20%', top: '70%', duration: 9,  delay: 1.2, size: 3, bg: '#2563EB' },
  { left: '35%', top: '25%', duration: 6,  delay: 0.5, size: 5, bg: '#60A5FA' },
  { left: '50%', top: '80%', duration: 8,  delay: 2,   size: 3, bg: '#2563EB' },
  { left: '65%', top: '40%', duration: 10, delay: 0.8, size: 4, bg: '#E8632A' },
  { left: '78%', top: '65%', duration: 7,  delay: 1.5, size: 6, bg: '#60A5FA' },
  { left: '88%', top: '20%', duration: 9,  delay: 0.3, size: 3, bg: '#2563EB' },
  { left: '92%', top: '55%', duration: 6,  delay: 1.8, size: 5, bg: '#E8632A' },
  { left: '12%', top: '88%', duration: 8,  delay: 0.9, size: 4, bg: '#60A5FA' },
  { left: '55%', top: '12%', duration: 7,  delay: 2.2, size: 3, bg: '#2563EB' },
  { left: '42%', top: '55%', duration: 11, delay: 0.6, size: 6, bg: '#E8632A' },
  { left: '70%', top: '85%', duration: 8,  delay: 1.1, size: 4, bg: '#60A5FA' },
];

const BLUE_TRACES = [
  { d: 'M 0 120 H 80 V 60 H 200',                delay: 0   },
  { d: 'M 0 240 H 120 V 180 H 280 V 220 H 400',  delay: 0.4 },
  { d: 'M 0 360 H 60 V 300 H 160 V 340 H 300',   delay: 0.8 },
  { d: 'M 600 0 V 80 H 520 V 140 H 420',          delay: 0.2 },
  { d: 'M 600 200 V 160 H 480 V 100 H 360',       delay: 0.6 },
  { d: 'M 600 400 V 340 H 500 V 280 H 380 V 320', delay: 1.0 },
];

const COPPER_TRACES = [
  { d: 'M 200 0 V 60 H 300 V 20 H 420', delay: 0.3 },
  { d: 'M 100 400 V 360 H 220 V 400',   delay: 0.7 },
  { d: 'M 320 0 V 80 H 440 V 40 H 560', delay: 1.2 },
  { d: 'M 450 400 V 350 H 520 V 390',   delay: 0.5 },
];

const BLUE_NODES = [
  { x: 80,  y: 60  }, { x: 200, y: 60  }, { x: 120, y: 180 },
  { x: 280, y: 220 }, { x: 60,  y: 300 }, { x: 160, y: 340 },
];

const COPPER_NODES = [
  { x: 480, y: 100 }, { x: 360, y: 100 }, { x: 500, y: 280 },
  { x: 380, y: 320 }, { x: 300, y: 60  }, { x: 440, y: 80  },
];

// ─── Letter-by-letter animated title ─────────────────────────────────────────

function AnimatedTitle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(id);
  }, []);

  return (
    <h1
      aria-label="Coming Soon"
      className="m-0 mb-4 font-montserrat text-[clamp(3.5rem,12vw,9rem)] font-extrabold leading-none tracking-tight text-[#F0F4FF]"
      style={{ animation: 'copperGlow 4s ease-in-out 1.5s infinite' }}
    >
      {'COMING SOON'.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block"
          style={{
            opacity:    mounted ? 1 : 0,
            transform:  mounted ? 'translateY(0)' : 'translateY(40px)',
            transition: `opacity 0.6s ease ${0.05 * i + 0.3}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.05 * i + 0.3}s`,
            width:       char === ' ' ? '0.5em' : undefined,
            willChange: 'transform, opacity',
          }}
        >
          {char !== ' ' ? char : '\u00A0'}
        </span>
      ))}
    </h1>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ComingSoonLayout({ eyebrow, tagline, badge }: ComingSoonLayoutProps) {
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setSubVisible(true), 900);
    return () => clearTimeout(id);
  }, []);

  return (
    <main
      className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-[#0A0E1A]"
      style={{
        backgroundImage: `
          radial-gradient(ellipse 70% 60% at 20% 50%, rgba(37,99,235,0.12) 0%, transparent 70%),
          radial-gradient(ellipse 60% 50% at 80% 60%, rgba(232,99,42,0.10) 0%, transparent 70%),
          radial-gradient(ellipse 50% 80% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 70%)
        `,
        backgroundSize: '200% 200%',
        animation: 'subtlePan 18s ease-in-out infinite',
      }}
    >

      {/* ── Keyframes (single <style> tag — required for custom animations) ── */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        @keyframes traceDraw {
          0%   { stroke-dashoffset: 80;  opacity: 0.2; }
          50%  { stroke-dashoffset: 0;   opacity: 0.8; }
          100% { stroke-dashoffset: -80; opacity: 0.2; }
        }
        @keyframes nodePulse {
          0%, 100% { opacity: 0.3; }
          50%      { opacity: 1;   }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1);       opacity: 0;   }
          15%  { opacity: 0.9; }
          80%  { opacity: 0.6; }
          100% { transform: translateY(-120px) scale(0.6); opacity: 0; }
        }
        @keyframes ringExpand {
          0%   { transform: translate(-50%, -50%) scale(0.4); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0;   }
        }
        @keyframes scan {
          0%   { top: -4px;  }
          100% { top: 100%;  }
        }
        @keyframes subtlePan {
          0%, 100% { background-position: 0% 50%;   }
          50%      { background-position: 100% 50%; }
        }
        @keyframes taglineFade {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes copperGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(232,99,42,0.4), 0 0 60px rgba(232,99,42,0.15); }
          50%      { text-shadow: 0 0 40px rgba(232,99,42,0.7), 0 0 100px rgba(232,99,42,0.3); }
        }
        @keyframes borderTrace {
          0%   { background-position: 0% 0%;   }
          100% { background-position: 300% 0%; }
        }
      `}</style>

      {/* Skip link */}
      <a
        href="#cs-main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Back to home */}
      <Link
        href="/"
        aria-label="Back to home"
        className="absolute left-7 top-6 z-20 flex items-center gap-1.5 text-xl font-bold tracking-widest text-[rgba(106,144,222,0.9)] transition-colors duration-200 hover:text-[#60A5FA] focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#60A5FA]"
      >
        ← Home
      </Link>

      {/* PCB corner ornament — top right, cobalt */}
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-6 h-10 w-10 opacity-50"
      >
        <path d="M2 38 V8 Q2 2 8 2 H38" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="2"  cy="38" r="2.5" fill="#2563EB" />
        <circle cx="38" cy="2"  r="2.5" fill="#2563EB" />
      </svg>

      {/* PCB corner ornament — bottom left, copper */}
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-6 h-10 w-10 opacity-50"
      >
        <path d="M2 38 V8 Q2 2 8 2 H38" fill="none" stroke="#E8632A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="2"  cy="38" r="2.5" fill="#E8632A" />
        <circle cx="38" cy="2"  r="2.5" fill="#E8632A" />
      </svg>

      {/* PCB corner ornament — bottom right, copper (mirrored) */}
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 -scale-x-100 -scale-y-100 opacity-50"
      >
        <path d="M2 38 V8 Q2 2 8 2 H38" fill="none" stroke="#E8632A" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="2"  cy="38" r="2.5" fill="#E8632A" />
        <circle cx="38" cy="2"  r="2.5" fill="#E8632A" />
      </svg>

      {/* Circuit background — top left, cobalt */}
      <svg
        viewBox="0 0 600 400"
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-[55%] w-[55%] opacity-35"
        preserveAspectRatio="xMidYMid slice"
      >
        {BLUE_TRACES.map((t, i) => (
          <path
            key={i}
            d={t.d}
            fill="none"
            stroke="#2563EB"
            strokeWidth="1"
            strokeDasharray="8 4"
            style={{ animation: `traceDraw 4s linear ${t.delay}s infinite` }}
          />
        ))}
        {BLUE_NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="3"
            fill="none"
            stroke="#2563EB"
            strokeWidth="1.5"
            style={{ animation: `nodePulse 3s ease-in-out ${i * 0.3}s infinite` }}
          />
        ))}
      </svg>

      {/* Circuit background — bottom right, copper (rotated) */}
      <svg
        viewBox="0 0 600 400"
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[55%] w-[55%] rotate-180 opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        {COPPER_TRACES.map((t, i) => (
          <path
            key={i}
            d={t.d}
            fill="none"
            stroke="#E8632A"
            strokeWidth="1"
            strokeDasharray="8 4"
            style={{ animation: `traceDraw 4s linear ${t.delay}s infinite` }}
          />
        ))}
        {COPPER_NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="3"
            fill="none"
            stroke="#E8632A"
            strokeWidth="1.5"
            style={{ animation: `nodePulse 3s ease-in-out ${i * 0.25 + 0.5}s infinite` }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {PARTICLE_CONFIGS.map((c, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-0"
            style={{
              left:       c.left,
              top:        c.top,
              width:      c.size,
              height:     c.size,
              background: c.bg,
              animation:  `floatUp ${c.duration}s ease-in-out ${c.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* Horizontal scan line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0 z-[1] h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(37,99,235,0.25), rgba(96,165,250,0.5), rgba(37,99,235,0.25), transparent)',
          animation:  'scan 6s linear infinite',
        }}
      />

      {/* Glow rings */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-0">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="absolute h-80 w-80 rounded-full border border-[rgba(37,99,235,0.3)]"
            style={{
              top:        '50%',
              left:       '50%',
              animation:  `ringExpand 4s cubic-bezier(0.25,0.46,0.45,0.94) ${i * 0.8}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div
        id="cs-main"
        role="main"
        className="relative z-10 flex flex-col items-center px-6 py-8 text-center"
      >

        {/* Eyebrow pill */}
        <div
          aria-hidden="true"
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[rgba(96,165,250,0.3)] bg-[rgba(37,99,235,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#60A5FA] backdrop-blur-md"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-[#60A5FA]"
            style={{ animation: 'nodePulse 2s ease-in-out infinite' }}
          />
          {eyebrow}
        </div>

        {/* Animated title */}
        <AnimatedTitle />

        {/* Cobalt → copper accent divider */}
        <div
          aria-hidden="true"
          className="mx-auto mb-8 mt-5 h-[3px] w-20 rounded-full"
          style={{ background: 'linear-gradient(90deg, #2563EB, #E8632A)' }}
        />

        {/* Tagline */}
        <p
          className="mb-12 max-w-[38ch] text-[clamp(0.9rem,2.5vw,1.15rem)] leading-relaxed tracking-wide text-[rgba(176,196,240,0.75)]"
          style={{
            opacity:         0,
            animation:       'taglineFade 0.7s ease forwards',
            animationDelay:  subVisible ? '0s' : '0.9s',
          }}
        >
          {tagline}
        </p>

        {/* Status badge with animated traced border */}
        <div
          role="status"
          aria-live="polite"
          className="relative inline-flex items-center gap-2.5 overflow-hidden rounded-lg px-7 py-3.5 text-sm font-semibold tracking-widest text-[#E8632A]"
          style={{ background: 'rgba(232,99,42,0.06)' }}
        >
          {/* Animated border overlay */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-lg"
            style={{
              padding:              '1px',
              background:           'linear-gradient(90deg, transparent, #E8632A, #2563EB, transparent, #E8632A)',
              backgroundSize:       '300% 100%',
              animation:            'borderTrace 3s linear infinite',
              WebkitMask:           'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              mask:                 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite:  'xor',
              maskComposite:        'exclude',
            }}
          />
          <span aria-hidden="true" className="text-base">⬡</span>
          {badge}
        </div>

      </div>
    </main>
  );
}