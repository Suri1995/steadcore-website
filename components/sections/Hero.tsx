'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedButton } from '../animated/AnimatedButton';

export function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      style={{
        height: '100dvh',
        minHeight: '100svh',
        backgroundImage: "url('/motherboard-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* ── Overlay: deeper, richer dark tint for strong text contrast ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(160deg, rgba(0,10,6,0.88) 0%, rgba(0,22,12,0.78) 50%, rgba(0,10,6,0.92) 100%)',
          zIndex: 1,
        }}
      />

      {/* ── Subtle green glow — kept soft so it doesn't compete with text ── */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 2 }}
      >
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 700,
            height: 700,
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute rounded-full blur-3xl"
          style={{
            width: 500,
            height: 300,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'radial-gradient(circle, rgba(5,150,105,0.07) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Main content ── */}
      <div
        className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 sm:pt-36 sm:pb-20 flex flex-col items-center text-center"
        style={{ zIndex: 3 }}
      >
        {/* Eyebrow */}
        <ScrollReveal animation="slide-up" delay={0}>
          <span
            className="inline-flex items-center gap-2 mb-7 rounded-full px-4 py-1.5
                       text-xs font-semibold tracking-[0.18em] uppercase
                       border border-emerald-400/50 bg-emerald-900/60 backdrop-blur-sm
                       text-emerald-300 shadow-lg shadow-emerald-900/30"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
              aria-hidden="true"
            />
            Advanced Manufacturing
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal animation="slide-up" delay={100}>
          <h1
            className="font-bold font-montserrat leading-[1.1] tracking-tight mb-5"
            style={{ fontSize: 'clamp(2.25rem, 6vw, 3.5rem)' }}
          >
            {/* Bright white-to-emerald gradient — crisp against dark overlay */}
            <span
              style={{
                background: 'linear-gradient(90deg, #6ee7b7 0%, #34d399 40%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 18px rgba(52,211,153,0.35))',
              }}
            >
              Next-Gen PCB {""}
            </span>
            {/* <br /> */}
            <span
              style={{
                color: '#ffffff',
                textShadow: '0 2px 24px rgba(0,0,0,0.7)',
              }}
            >
              Solutions
            </span>
          </h1>
        </ScrollReveal>

        {/* Sub-copy — brighter slate so it's easily readable */}
        <ScrollReveal animation="slide-up" delay={200}>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-3xl mb-10"
            style={{
              color: '#cbd5e1',       /* slate-300 but explicit for safety */
              textShadow: '0 1px 8px rgba(0,0,0,0.8)',
            }}
          >
            Cutting-edge printed circuit board manufacturing with precision
            engineering and advanced technology — built for the future of
            electronics.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal animation="slide-up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center mb-14">
            <AnimatedButton variant="primary" size="lg">
              Explore Products
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              Learn More
            </AnimatedButton>
          </div>
        </ScrollReveal>

        {/* Stats bar — solid dark bg with visible border for strong contrast */}
        <ScrollReveal animation="slide-up" delay={400}>
          <div
            className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-emerald-500/25"
            role="list"
            aria-label="Company statistics"
            style={{
              backdropFilter: 'blur(12px)',
              background: 'rgba(0,20,10,0.70)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '50+',  label: 'Companies Served'  },
              { value: '99%',  label: 'Quality Rate'      },
            ].map((stat, i) => (
              <div
                key={i}
                role="listitem"
                className="flex flex-col items-center py-5 px-3 transition-colors duration-200 cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)' }}
                onMouseEnter={e =>
                  (e.currentTarget.style.background = 'rgba(52,211,153,0.08)')
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')
                }
              >
                <p
                  className="text-2xl sm:text-3xl font-bold font-montserrat leading-none mb-1"
                  aria-label={`${stat.value} ${stat.label}`}
                  style={{
                    color: '#34d399',
                    textShadow: '0 0 20px rgba(52,211,153,0.40)',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[11px] sm:text-xs text-center leading-snug"
                  style={{ color: '#94a3b8' }} /* slate-400 — explicit */
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}