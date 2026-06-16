'use client';

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES PAGE — Temporarily replaced with "Coming Soon" experience
// Original implementation commented out below; restore when services are ready.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from 'react';
// import { Header } from '@/components/sections/Header';
// import { Footer } from '@/components/sections/Footer';
// import { ScrollReveal } from '@/components/animated/ScrollReveal';
// import { GradientCard } from '@/components/animated/GradientCard';

// ─── Coming Soon Page ────────────────────────────────────────────────────────

const TITLE_CHARS = 'COMING SOON'.split('');

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

function CircuitBackground() {
  const traces = [
    { d: 'M 0 100 H 90 V 50 H 210', delay: 0 },
    { d: 'M 0 230 H 130 V 170 H 290 V 210 H 410', delay: 0.4 },
    { d: 'M 0 350 H 70 V 290 H 170 V 330 H 310', delay: 0.8 },
    { d: 'M 600 0 V 90 H 510 V 150 H 410', delay: 0.2 },
    { d: 'M 600 210 V 170 H 470 V 110 H 350', delay: 0.6 },
    { d: 'M 600 390 V 330 H 490 V 270 H 370 V 310', delay: 1.0 },
    { d: 'M 210 0 V 70 H 310 V 30 H 430', delay: 0.3 },
    { d: 'M 110 400 V 370 H 230 V 400', delay: 0.7 },
    { d: 'M 330 0 V 90 H 450 V 50 H 570', delay: 1.2 },
    { d: 'M 460 400 V 360 H 530 V 395', delay: 0.5 },
  ];

  const nodes = [
    { x: 90, y: 50 },  { x: 210, y: 50 },  { x: 130, y: 170 },
    { x: 290, y: 210 }, { x: 70, y: 290 }, { x: 170, y: 330 },
    { x: 470, y: 110 }, { x: 350, y: 110 }, { x: 490, y: 270 },
    { x: 370, y: 310 }, { x: 310, y: 70 },  { x: 450, y: 90 },
  ];

  return (
    <div aria-hidden="true" className="cs-circuit-bg">
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

function Particle({ index }: { index: number }) {
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
            display: 'inline-block',
            width: char === ' ' ? '0.5em' : undefined,
          }}
        >
          {char !== ' ' ? char : '\u00A0'}
        </span>
      ))}
    </h1>
  );
}

function GlowRings() {
  return (
    <div aria-hidden="true" className="cs-rings">
      {[0, 1, 2].map(i => (
        <div key={i} className="cs-ring" style={{ animationDelay: `${i * 0.8}s` }} />
      ))}
    </div>
  );
}

function ScanLine() {
  return <div aria-hidden="true" className="cs-scanline" />;
}

export default function ServicesPage() {
  const [subVisible, setSubVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSubVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
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
          0%   { transform: translateY(0) scale(1);    opacity: 0;   }
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

        .cs-particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

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

        .cs-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
        }

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

        .cs-badge-icon { font-size: 1rem; }

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
        <a href="#cs-main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded">
          Skip to content
        </a>

        <a href="/" className="cs-back" aria-label="Back to home">
          ← Home
        </a>

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

        <CircuitBackground />

        <div className="cs-particles" aria-hidden="true">
          {Array.from({ length: 12 }, (_, i) => <Particle key={i} index={i} />)}
        </div>

        <ScanLine />
        <GlowRings />

        <div className="cs-content" id="cs-main" role="main">
          <div className="cs-eyebrow" aria-hidden="true">
            <span className="cs-eyebrow-dot" />
            Our Services
          </div>

          <AnimatedTitle />

          <div className="cs-title-accent" aria-hidden="true" />

          <p
            className="cs-tagline"
            style={{ animationDelay: subVisible ? '0s' : '0.9s' }}
          >
            Our full suite of PCB manufacturing and design services is being
            finalised. Something worth waiting for is on the way.
          </p>

          <div className="cs-badge" role="status" aria-live="polite">
            <span className="cs-badge-icon" aria-hidden="true">⬡</span>
            In Development
          </div>
        </div>
      </main>
    </>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// ORIGINAL SERVICES PAGE — restore by replacing the export above with this
// ─────────────────────────────────────────────────────────────────────────────
/*
export default function ServicesPageOriginal() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive PCB manufacturing and design services tailored to your unique requirements
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'PCB Design Support',
                description: 'Expert design consultation and optimization for your specific applications and requirements',
                features: ['Design Review', 'Layout Optimization', 'DFM Analysis']
              },
              {
                title: 'Rapid Prototyping',
                description: 'Fast turnaround PCB prototypes to accelerate your product development cycle',
                features: ['5-10 Day Turnaround', 'Flexible Quantities', 'Full Testing']
              },
              {
                title: 'Volume Production',
                description: 'High-volume manufacturing with consistent quality and competitive pricing',
                features: ['Scalable Production', 'Quality Control', 'Cost Optimization']
              },
              {
                title: 'Assembly Services',
                description: 'Complete PCB assembly with component sourcing and soldering options',
                features: ['Component Sourcing', 'Through-Hole', 'Surface Mount']
              },
              {
                title: 'Testing & Certification',
                description: 'Comprehensive testing and certification services to meet industry standards',
                features: ['Electrical Testing', 'AOI Inspection', 'Functional Testing']
              },
              {
                title: 'Technical Support',
                description: '24/7 dedicated technical support team for all your manufacturing needs',
                features: ['Expert Consultation', 'Problem Solving', 'Quality Assurance']
              }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <GradientCard className="p-8 h-full">
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat text-center mb-16">
              Our <span className="gradient-text">Process</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Consultation', desc: 'Discuss your requirements and specifications' },
              { num: '2', title: 'Design Review', desc: 'Review and optimize your design files' },
              { num: '3', title: 'Manufacturing', desc: 'Precision fabrication with quality control' },
              { num: '4', title: 'Delivery', desc: 'Quick shipping with tracking' }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                      {step.num}
                    </div>
                    <h4 className="font-bold font-montserrat mb-2 text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl text-primary">→</div>
                  )}
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