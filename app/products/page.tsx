'use client';

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS PAGE — Temporarily replaced with "Coming Soon" experience
// Original implementation commented out below; restore when products are ready.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react';
// import { Header } from '@/components/sections/Header';
// import { Footer } from '@/components/sections/Footer';
// import { ScrollReveal } from '@/components/animated/ScrollReveal';
// import { GradientCard } from '@/components/animated/GradientCard';
// import { AnimatedButton } from '@/components/animated/AnimatedButton';
// import Link from 'next/link';
// import { products } from '@/lib/products';

// ─── Coming Soon Page ────────────────────────────────────────────────────────

const TITLE_CHARS = 'COMING SOON'.split('');

/** Single glowing circuit node */
function CircuitNode({ x, y, delay }: { x: number; y: number; delay: number }) {
  return (
    <circle
      cx={x}
      cy={y}
      r="3"
      fill="none"
      stroke="#2563EB"
      strokeWidth="1.5"
      style={{
        animation: `nodePulse 3s ease-in-out ${delay}s infinite`,
        transformOrigin: `${x}px ${y}px`,
      }}
    />
  );
}

/** Animated SVG circuit traces in the background */
function CircuitBackground() {
  // Deterministic pseudo-random layout so SSR and client match
  const traces = [
    { d: 'M 0 120 H 80 V 60 H 200', delay: 0 },
    { d: 'M 0 240 H 120 V 180 H 280 V 220 H 400', delay: 0.4 },
    { d: 'M 0 360 H 60 V 300 H 160 V 340 H 300', delay: 0.8 },
    { d: 'M 600 0 V 80 H 520 V 140 H 420', delay: 0.2 },
    { d: 'M 600 200 V 160 H 480 V 100 H 360', delay: 0.6 },
    { d: 'M 600 400 V 340 H 500 V 280 H 380 V 320', delay: 1.0 },
    { d: 'M 200 0 V 60 H 300 V 20 H 420', delay: 0.3 },
    { d: 'M 100 400 V 360 H 220 V 400', delay: 0.7 },
    { d: 'M 320 0 V 80 H 440 V 40 H 560', delay: 1.2 },
    { d: 'M 450 400 V 350 H 520 V 390', delay: 0.5 },
  ];

  const nodes = [
    { x: 80, y: 60 }, { x: 200, y: 60 }, { x: 120, y: 180 },
    { x: 280, y: 220 }, { x: 60, y: 300 }, { x: 160, y: 340 },
    { x: 480, y: 100 }, { x: 360, y: 100 }, { x: 500, y: 280 },
    { x: 380, y: 320 }, { x: 300, y: 60 }, { x: 440, y: 80 },
  ];

  return (
    <div
      aria-hidden="true"
      className="cs-circuit-bg"
    >
      {/* Top-left quadrant */}
      <svg viewBox="0 0 600 400" className="cs-circuit-svg cs-circuit-tl" preserveAspectRatio="xMidYMid slice">
        {traces.slice(0, 6).map((t, i) => (
          <path key={i} d={t.d} fill="none" stroke="#2563EB" strokeWidth="1"
            strokeDasharray="8 4"
            style={{ animation: `traceDraw 4s linear ${t.delay}s infinite` }}
          />
        ))}
        {nodes.slice(0, 6).map((n, i) => (
          <CircuitNode key={i} x={n.x} y={n.y} delay={i * 0.3} />
        ))}
      </svg>

      {/* Bottom-right quadrant */}
      <svg viewBox="0 0 600 400" className="cs-circuit-svg cs-circuit-br" preserveAspectRatio="xMidYMid slice">
        {traces.slice(6).map((t, i) => (
          <path key={i} d={t.d} fill="none" stroke="#E8632A" strokeWidth="1"
            strokeDasharray="8 4"
            style={{ animation: `traceDraw 4s linear ${t.delay}s infinite` }}
          />
        ))}
        {nodes.slice(6).map((n, i) => (
          <CircuitNode key={i} x={n.x} y={n.y} delay={i * 0.25 + 0.5} />
        ))}
      </svg>
    </div>
  );
}

/** Floating copper particle */
function Particle({ index }: { index: number }) {
  // Deterministic positions seeded by index
  const configs = [
    { left: '8%',  top: '15%', dur: 7,  delay: 0,   size: 4 },
    { left: '20%', top: '70%', dur: 9,  delay: 1.2, size: 3 },
    { left: '35%', top: '25%', dur: 6,  delay: 0.5, size: 5 },
    { left: '50%', top: '80%', dur: 8,  delay: 2,   size: 3 },
    { left: '65%', top: '40%', dur: 10, delay: 0.8, size: 4 },
    { left: '78%', top: '65%', dur: 7,  delay: 1.5, size: 6 },
    { left: '88%', top: '20%', dur: 9,  delay: 0.3, size: 3 },
    { left: '92%', top: '55%', dur: 6,  delay: 1.8, size: 5 },
    { left: '12%', top: '88%', dur: 8,  delay: 0.9, size: 4 },
    { left: '55%', top: '12%', dur: 7,  delay: 2.2, size: 3 },
    { left: '42%', top: '55%', dur: 11, delay: 0.6, size: 6 },
    { left: '70%', top: '85%', dur: 8,  delay: 1.1, size: 4 },
  ];
  const c = configs[index % configs.length];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        left: c.left,
        top: c.top,
        width: c.size,
        height: c.size,
        borderRadius: '50%',
        background: index % 3 === 0 ? '#E8632A' : index % 3 === 1 ? '#2563EB' : '#60A5FA',
        opacity: 0,
        animation: `floatUp ${c.dur}s ease-in-out ${c.delay}s infinite`,
        willChange: 'transform, opacity',
      }}
    />
  );
}

/** Letter-by-letter staggered reveal with glow */
function AnimatedTitle() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <h1 className="cs-title" aria-label="Coming Soon">
      {TITLE_CHARS.map((char, i) => (
        <span
          key={i}
          className="cs-letter"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(40px)',
            transition: `opacity 0.6s ease ${0.05 * i + 0.3}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${0.05 * i + 0.3}s`,
            display: char === ' ' ? 'inline-block' : 'inline-block',
            width: char === ' ' ? '0.5em' : undefined,
          }}
        >
          {char !== ' ' ? char : '\u00A0'}
        </span>
      ))}
    </h1>
  );
}

/** Pulsing ring halo behind the text */
function GlowRings() {
  return (
    <div aria-hidden="true" className="cs-rings">
      {[0, 1, 2].map(i => (
        <div key={i} className="cs-ring" style={{ animationDelay: `${i * 0.8}s` }} />
      ))}
    </div>
  );
}

/** Horizontal scanning line effect */
function ScanLine() {
  return <div aria-hidden="true" className="cs-scanline" />;
}

export default function ProductsPage() {
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSubVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── Keyframe + Component Styles ─────────────────────────────────────── */}
      <style>{`
        /* Respect reduced-motion at the root */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @keyframes traceDraw {
          0%   { stroke-dashoffset: 80; opacity: 0.2; }
          50%  { stroke-dashoffset: 0;  opacity: 0.8; }
          100% { stroke-dashoffset: -80; opacity: 0.2; }
        }

        @keyframes nodePulse {
          0%, 100% { r: 3; opacity: 0.3; }
          50%       { r: 5; opacity: 1;   }
        }

        @keyframes floatUp {
          0%   { transform: translateY(0)    scale(1);   opacity: 0;   }
          15%  { opacity: 0.9; }
          80%  { opacity: 0.6; }
          100% { transform: translateY(-120px) scale(0.6); opacity: 0; }
        }

        @keyframes ringExpand {
          0%   { transform: translate(-50%, -50%) scale(0.4); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0;   }
        }

        @keyframes scan {
          0%   { top: -4px; }
          100% { top: 100%; }
        }

        @keyframes subtlePan {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes taglineFade {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes copperGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(232,99,42,0.4), 0 0 60px rgba(232,99,42,0.15); }
          50%      { text-shadow: 0 0 40px rgba(232,99,42,0.7), 0 0 100px rgba(232,99,42,0.3); }
        }

        @keyframes borderTrace {
          0%   { background-position: 0% 0%; }
          100% { background-position: 300% 0%; }
        }

        /* ── Layout ─────────────────────────────────────────────────── */

        .cs-page {
          position: relative;
          min-height: 100dvh;
          width: 100%;
          overflow: hidden;
          background: #0A0E1A;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Animated gradient nebula */
        .cs-page::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 20% 50%, rgba(37,99,235,0.12) 0%, transparent 70%),
                      radial-gradient(ellipse 60% 50% at 80% 60%, rgba(232,99,42,0.10) 0%, transparent 70%),
                      radial-gradient(ellipse 50% 80% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 70%);
          background-size: 200% 200%;
          animation: subtlePan 18s ease-in-out infinite;
          pointer-events: none;
        }

        /* Dot grid texture */
        .cs-page::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── Circuit background ─────────────────────────────────────── */

        .cs-circuit-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cs-circuit-svg {
          position: absolute;
          width: 55%;
          height: 55%;
        }

        .cs-circuit-tl { top: 0; left: 0; opacity: 0.35; }
        .cs-circuit-br { bottom: 0; right: 0; opacity: 0.3; transform: rotate(180deg); }

        /* ── Particles ──────────────────────────────────────────────── */

        .cs-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* ── Rings ──────────────────────────────────────────────────── */

        .cs-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .cs-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(37,99,235,0.3);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.4);
          animation: ringExpand 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
          will-change: transform, opacity;
        }

        /* ── Scan line ──────────────────────────────────────────────── */

        .cs-scanline {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(37,99,235,0.25), rgba(96,165,250,0.5), rgba(37,99,235,0.25), transparent);
          animation: scan 6s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Content ────────────────────────────────────────────────── */

        .cs-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
        }

        /* Eyebrow label */
        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #60A5FA;
          margin-bottom: 2.5rem;
          padding: 6px 16px;
          border: 1px solid rgba(96,165,250,0.3);
          border-radius: 100px;
          background: rgba(37,99,235,0.08);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .cs-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60A5FA;
          animation: nodePulse 2s ease-in-out infinite;
        }

        /* Main title */
        .cs-title {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(3.5rem, 12vw, 9rem);
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          color: #F0F4FF;
          margin: 0 0 1rem;
          animation: copperGlow 4s ease-in-out 1.5s infinite;
        }

        /* Accent underline */
        .cs-title-accent {
          display: block;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #2563EB, #E8632A);
          border-radius: 2px;
          margin: 1.25rem auto 2rem;
        }

        .cs-letter {
          display: inline-block;
          will-change: transform, opacity;
        }

        /* Tagline */
        .cs-tagline {
          font-size: clamp(0.9rem, 2.5vw, 1.15rem);
          color: rgba(176, 196, 240, 0.75);
          max-width: 38ch;
          line-height: 1.6;
          letter-spacing: 0.01em;
          margin-bottom: 3rem;
          opacity: 0;
          animation: taglineFade 0.7s ease forwards;
        }

        /* Traced border badge */
        .cs-badge {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #E8632A;
          background: rgba(232,99,42,0.06);
          overflow: hidden;
        }

        .cs-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          padding: 1px;
          background: linear-gradient(90deg, transparent, #E8632A, #2563EB, transparent, #E8632A);
          background-size: 300% 100%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderTrace 3s linear infinite;
        }

        .cs-badge-icon {
          font-size: 1rem;
        }

        /* Bottom nav back */
        .cs-back {
          position: absolute;
          top: 1.5rem;
          left: 1.75rem;
          z-index: 20;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(176,196,240,0.6);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
        }

        .cs-back:hover,
        .cs-back:focus-visible {
          color: #60A5FA;
          outline: none;
        }

        .cs-back:focus-visible {
          outline: 2px solid #60A5FA;
          outline-offset: 4px;
          border-radius: 4px;
        }

        /* ── PCB corner ornaments ───────────────────────────────────── */

        .cs-corner {
          position: absolute;
          width: 40px;
          height: 40px;
          pointer-events: none;
          opacity: 0.5;
        }
        .cs-corner--tl { top: 1.5rem; right: 1.5rem; }
        .cs-corner--br { bottom: 1.5rem; left: 1.5rem; }
        .cs-corner--bl { bottom: 1.5rem; right: 1.5rem; transform: scaleY(-1) scaleX(-1); }

        @media (max-width: 640px) {
          .cs-ring { width: 220px; height: 220px; }
          .cs-circuit-svg { width: 80%; height: 50%; }
        }
      `}</style>

      <main className="cs-page">
        {/* Screen-reader landmark */}
        <a href="#cs-main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to content
        </a>

        {/* Back link */}
        <a href="/" className="cs-back" aria-label="Back to home">
          ← Home
        </a>

        {/* PCB corner ornaments */}
        <svg className="cs-corner cs-corner--tl" viewBox="0 0 40 40" aria-hidden="true">
          <path d="M2 38 V8 Q2 2 8 2 H38" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="2" cy="38" r="2.5" fill="#2563EB"/>
          <circle cx="38" cy="2" r="2.5" fill="#2563EB"/>
        </svg>
        <svg className="cs-corner cs-corner--br" viewBox="0 0 40 40" aria-hidden="true">
          <path d="M2 38 V8 Q2 2 8 2 H38" fill="none" stroke="#E8632A" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="2" cy="38" r="2.5" fill="#E8632A"/>
          <circle cx="38" cy="2" r="2.5" fill="#E8632A"/>
        </svg>
        <svg className="cs-corner cs-corner--bl" viewBox="0 0 40 40" aria-hidden="true">
          <path d="M2 38 V8 Q2 2 8 2 H38" fill="none" stroke="#E8632A" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="2" cy="38" r="2.5" fill="#E8632A"/>
          <circle cx="38" cy="2" r="2.5" fill="#E8632A"/>
        </svg>

        {/* Circuit background */}
        <CircuitBackground />

        {/* Particles */}
        <div className="cs-particles" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <Particle key={i} index={i} />)}
        </div>

        {/* Scan line */}
        <ScanLine />

        {/* Radial glow rings */}
        <GlowRings />

        {/* ── Main content ───────────────────────────────────────────── */}
        <div className="cs-content" id="cs-main" role="main">
          {/* Eyebrow */}
          <div className="cs-eyebrow" aria-hidden="true">
            <span className="cs-eyebrow-dot" />
            PCB Products
          </div>

          {/* Title */}
          <AnimatedTitle />

          {/* Accent line */}
          <div className="cs-title-accent" aria-hidden="true" />

          {/* Tagline */}
          <p
            className="cs-tagline"
            style={{ animationDelay: subVisible ? '0s' : '0.9s' }}
          >
            Our full catalogue of precision-manufactured circuit boards is being prepared. 
            Expect something worth the wait.
          </p>

          {/* Status badge */}
          <div className="cs-badge" role="status" aria-live="polite">
            <span className="cs-badge-icon" aria-hidden="true">⬡</span>
            In Production
          </div>
        </div>
      </main>
    </>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// ORIGINAL PRODUCTS PAGE — restore by replacing the export above with this
// ─────────────────────────────────────────────────────────────────────────────
/*
export default function ProductsPageOriginal() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 animate-slide-up">
                Our <span className="gradient-text">PCB Products</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Choose from our comprehensive range of professionally manufactured circuit boards designed for every application requirement
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <div className="group h-full flex flex-col">
                  <GradientCard className="flex-1 flex flex-col">
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 smooth-transition" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">{product.name}</h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">{product.shortDescription}</p>
                      <div className="mb-6 space-y-2">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">✓</span>
                            <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link href={`/products/${product.id}`} className="inline-block">
                      <AnimatedButton variant="primary" size="md" className="w-full">View Details</AnimatedButton>
                    </Link>
                  </GradientCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-16">
              Why Choose Our <span className="gradient-text">PCBs?</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Precision Manufacturing', description: 'State-of-the-art equipment ensures accurate trace widths, spacing, and hole placement for reliable performance' },
              { title: 'Quality Assurance', description: 'Every board undergoes rigorous testing to meet international standards including IPC-6012 and ISO 9001' },
              { title: 'Fast Turnaround', description: 'Efficient production processes deliver boards quickly without compromising on quality or precision' },
              { title: 'Competitive Pricing', description: 'Optimized manufacturing techniques allow us to offer premium quality at competitive market rates' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg smooth-transition hover-lift">
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
*/