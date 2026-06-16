'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedButton } from '../animated/AnimatedButton';

// Feature badge icons as inline SVGs (matching screenshot icon style)
const features = [
  {
    label: 'Precision\nEngineering',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
        <circle cx="20" cy="20" r="12" stroke="#34d399" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" stroke="#34d399" strokeWidth="2" />
        <line x1="20" y1="2" x2="20" y2="8" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="32" x2="20" y2="38" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="20" x2="8" y2="20" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
        <line x1="32" y1="20" x2="38" y2="20" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Reliable\nQuality',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
        <path d="M20 4 L34 10 L34 22 C34 30 20 37 20 37 C20 37 6 30 6 22 L6 10 Z" stroke="#34d399" strokeWidth="2" fill="none" />
        <polyline points="13,20 18,26 28,15" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Advanced\nTechnology',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
        <circle cx="20" cy="20" r="8" stroke="#34d399" strokeWidth="2" />
        <circle cx="20" cy="20" r="14" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="20" cy="6" r="2.5" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="20" cy="34" r="2.5" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="6" cy="20" r="2.5" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="34" cy="20" r="2.5" stroke="#34d399" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    label: 'On-Time\nDelivery',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" width={36} height={36}>
        <rect x="3" y="16" width="26" height="17" rx="2" stroke="#34d399" strokeWidth="2" />
        <path d="M29 20 L35 24 L35 32 L29 32" stroke="#34d399" strokeWidth="2" strokeLinejoin="round" />
        <line x1="3" y1="24" x2="29" y2="24" stroke="#34d399" strokeWidth="1.5" />
        <circle cx="10" cy="33" r="3" stroke="#34d399" strokeWidth="2" />
        <circle cx="22" cy="33" r="3" stroke="#34d399" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Hero() {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      aria-label="Hero section"
      style={{
        height: '100dvh',
        minHeight: '100svh',
        backgroundImage: "url('/circuit-board.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Dark gradient: heavy on the left, fades to transparent right ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(100deg, rgba(0,8,4,0.97) 0%, rgba(0,12,6,0.90) 35%, rgba(0,10,5,0.60) 60%, rgba(0,6,3,0.15) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Bottom fade so feature bar reads cleanly ── */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        aria-hidden="true"
        style={{
          height: '220px',
          background:
            'linear-gradient(to top, rgba(0,8,4,0.92) 0%, transparent 100%)',
          zIndex: 2,
        }}
      />

      {/* ── Subtle green glow on the left ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 2 }}
      >
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 600,
            height: 600,
            top: '10%',
            left: '-5%',
            background: 'radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Main content: left-aligned ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-between"
        style={{ zIndex: 3, height: '100%', paddingTop: '18vh', paddingBottom: '0' }}
      >
        {/* Top content block */}
        <div className="flex flex-col items-start max-w-2xl">

          {/* Eyebrow */}
          <ScrollReveal animation="slide-up" delay={0}>
            <p
              className="mb-5 text-xs font-semibold tracking-[0.22em] uppercase"
              style={{ color: '#34d399' }}
            >
              Precision.&nbsp; Performance.&nbsp; Reliability.
            </p>
          </ScrollReveal>

          {/* Heading — split style: white line / green bold line */}
          <ScrollReveal animation="slide-up" delay={100}>
            <h1
              className="font-bold font-montserrat leading-[1.05] tracking-tight mb-6"
              style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5rem)' }}
            >
              <span
                style={{
                  color: '#ffffff',
                  textShadow: '0 2px 24px rgba(0,0,0,0.8)',
                  display: 'block',
                }}
              >
                Next-Gen PCB
              </span>
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(90deg, #4ade80 0%, #34d399 50%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(52,211,153,0.45))',
                  lineHeight: 1.0,
                }}
              >
                SOLUTIONS
              </span>
            </h1>
          </ScrollReveal>

          {/* Sub-copy */}
          <ScrollReveal animation="slide-up" delay={200}>
            <p
              className="text-sm sm:text-base leading-relaxed mb-10 max-w-md"
              style={{
                color: '#94a3b8',
                textShadow: '0 1px 8px rgba(0,0,0,0.8)',
              }}
            >
              Delivering high-quality printed circuit boards built for
              tomorrow's technology.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <AnimatedButton variant="primary" size="lg">
                Explore Products
              </AnimatedButton>
              <AnimatedButton variant="outline" size="lg">
                Learn More
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Feature badges: pinned to bottom, full-width separator bar ── */}
        <ScrollReveal animation="slide-up" delay={400}>
          <div
            className="w-full"
            style={{ paddingBottom: 0 }}
          >
            {/* thin green rule above bar */}
            <div
              style={{
                height: 1,
                background:
                  'linear-gradient(90deg, #34d399 0%, rgba(52,211,153,0.3) 50%, transparent 100%)',
                marginBottom: 0,
              }}
            />

            <div
              className="grid grid-cols-4"
              role="list"
              aria-label="Key capabilities"
              style={{
                background: 'rgba(0,10,5,0.72)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {features.map((f, i) => (
                <div
                  key={i}
                  role="listitem"
                  className="flex flex-col items-center justify-center gap-3 py-6 cursor-default transition-colors duration-200"
                  style={{
                    borderRight: i < features.length - 1 ? '1px solid rgba(52,211,153,0.15)' : 'none',
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.background = 'rgba(52,211,153,0.06)')
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.background = 'transparent')
                  }
                >
                  {f.icon}
                  <p
                    className="text-[10px] sm:text-xs font-semibold tracking-[0.14em] uppercase text-center leading-snug whitespace-pre-line"
                    style={{ color: '#cbd5e1' }}
                  >
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}