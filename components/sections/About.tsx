'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedCounter } from '../animated/AnimatedCounter';
import { GradientCard } from '../animated/GradientCard';
import {
  BadgeCheck,
  GraduationCap,
  Cpu,
  Truck,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';

const capabilities = [
  {
    Icon: BadgeCheck,
    title: 'Quality-Focused Manufacturing',
    description: 'Stringent quality control at every stage — every PCB meets customer specs and industry standards for performance and reliability.',
  },
  {
    Icon: GraduationCap,
    title: 'Technical Expertise & Leadership',
    description: 'Founded by Dr. Sri Lakshmi E, Ph.D. (IIT BHU) — deep engineering knowledge powering dependable PCB solutions.',
  },
  {
    Icon: Cpu,
    title: 'Diverse PCB Capabilities',
    description: 'Single-Sided, Double-Sided, and Metal-Core PCBs for LED lighting, consumer electronics, automation, and power electronics.',
  },
  {
    Icon: Truck,
    title: 'Reliable Production & Delivery',
    description: '10,000 sqm (Single-Sided) and 3,000 sqm (Double-Sided) — consistent quality at any scale with on-time delivery.',
  },
  {
    Icon: HeartHandshake,
    title: 'Customer-Centric Approach',
    description: 'Customized PCB solutions delivering the right balance of quality, performance, and cost-effectiveness for every customer.',
  },
  {
    Icon: TrendingUp,
    title: 'Commitment to Continuous Improvement',
    description: 'Ongoing investment in process improvement and operational excellence aligned with evolving industry requirements.',
  },
];

const milestones = [
  {
    title: 'Founded',
    desc: 'Established in Ramdaspally, Hyderabad by Dr. Sri Lakshmi E, Ph.D. (IIT BHU)',
    tag: 'Origin',
  },
  {
    title: 'Production Launch',
    desc: '10,000 sqm Single-Sided and 3,000 sqm Double-Sided PCB capacity achieved',
    tag: 'Capacity',
  },
  {
    title: 'Product Range',
    desc: 'Single-Sided, Double-Sided, and Metal-Core PCBs — serving 8+ industry verticals',
    tag: 'Portfolio',
  },
  {
    title: 'Vision Ahead',
    desc: "Expanding capabilities to become a trusted name in India's PCB manufacturing sector",
    tag: 'Future',
  },
];

/* ─── Promise pills ───────────────────────────────────────────────── */
const promises = ['Quality', 'Reliability', 'Innovation', 'Service'];

/* ═══════════════════════════════════════════════════════════════════ */

export function About() {
  return (
    <>
      <style>{`
        @keyframes ab-line {
          from { transform: scaleY(0); }
          to   { transform: scaleY(1); }
        }
        @keyframes ab-node {
          from { transform: scale(0); opacity: 0; }
          to   { transform: scale(1); opacity: 1; }
        }
        @keyframes ab-fadeup {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ab-tline { animation: ab-line 1.4s cubic-bezier(.4,0,.2,1) .3s both; transform-origin: top; }
        .ab-node  { animation: ab-node .4s cubic-bezier(.4,0,.2,1) both; }
        .ab-node-1 { animation-delay: .5s; }
        .ab-node-2 { animation-delay: .85s; }
        .ab-node-3 { animation-delay: 1.1s; }
        .ab-node-4 { animation-delay: 1.35s; }
        @media (prefers-reduced-motion: reduce) {
          .ab-tline, .ab-node { animation: none !important; }
        }
      `}</style>

      <section
        id="about"
        className="relative py-16 md:py-20 lg:py-24 bg-white dark:bg-slate-900 overflow-hidden"
      >
        {/* Atmospheric watermark — "PCB" bleeds behind the section */}
        <span
          className="pointer-events-none select-none absolute -top-4 right-0 font-montserrat font-black text-primary/[0.04] dark:text-primary/[0.07] leading-none"
          style={{ fontSize: 'clamp(120px, 18vw, 220px)' }}
          aria-hidden="true"
        >
          PCB
        </span>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">

          {/* ── SECTION HEADER ─────────────────────────────────────── */}
          <ScrollReveal animation="slide-up" delay={0}>
            <div className="text-center mb-14 md:mb-16 mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-montserrat mt-3">
                <span className="text-slate-900 dark:text-white">About </span>
                <span className="gradient-text">Steadcore</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-6">
                Established in 2026 in Ramdaspally, Hyderabad, Steadcore Industries is a
                technology-driven PCB manufacturer founded by Dr. Sri Lakshmi E (Ph.D., IIT BHU)
                — built to deliver reliable, cost-effective, and technologically advanced PCB
                solutions that strengthen India's growing electronics ecosystem.
              </p>
            </div>
          </ScrollReveal>

          {/* ── MAIN TWO-COL GRID ───────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">

            {/* LEFT — capabilities as a 2-column reference panel */}
            <div>
              <ScrollReveal animation="slide-up" delay={0}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500 flex-shrink-0">
                    Why Choose Us
                  </p>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={100}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {capabilities.map(({ Icon, title, description }, i) => (
                    <div
                      key={i}
                      className="group relative rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-5 hover:border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/10 hover:shadow-sm transition-all duration-200"
                    >
                      {/* Top-left corner accent on hover */}
                      <span
                        className="absolute top-0 left-0 w-0 h-[2px] rounded-tr bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"
                        aria-hidden="true"
                      />
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                        <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                      </div>
                      <h4 className="font-bold font-montserrat text-slate-900 dark:text-white text-base leading-snug mb-1.5">
                        {title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — vertical timeline */}
            <div>
              <ScrollReveal animation="slide-up" delay={50}>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500 flex-shrink-0">
                    Our Journey
                  </p>
                  <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-up" delay={120}>
                {/* Timeline container */}
                <div className="relative pl-10">

                  {/* The continuous vertical line */}
                  <div
                    className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-primary via-primary/60 to-secondary/40 rounded-full ab-tline"
                    aria-hidden="true"
                  />

                  <div className="space-y-0">
                    {milestones.map(({ title, desc, tag }, i) => (
                      <div key={i} className="relative pb-10 last:pb-0 group">

                        {/* Node dot on the line */}
                        <div
                          className={`ab-node ab-node-${i + 1} absolute -left-10 top-1 w-[30px] h-[30px] rounded-full border-2 border-primary bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm group-hover:border-secondary group-hover:shadow-[0_0_0_4px_rgba(11,122,42,0.12)] transition-all duration-200`}
                          aria-hidden="true"
                        >
                          <span className="w-2.5 h-2.5 rounded-full bg-primary group-hover:bg-secondary transition-colors duration-200" />
                        </div>

                        {/* Card */}
                        <div className="rounded-xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 px-5 py-4 shadow-sm group-hover:border-primary/25 group-hover:shadow-md transition-all duration-200">
                          {/* Tag + title row */}
                          <div className="flex items-center gap-2 flex-wrap mb-1.5">
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-primary/10 text-primary border border-primary/15">
                              {tag}
                            </span>
                            <h4 className="font-bold font-montserrat text-slate-900 dark:text-white text-base">
                              {title}
                            </h4>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            {desc}
                          </p>
                          {/* Bottom accent bar on hover */}
                          <span
                            className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 rounded-b-xl"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

           {/* ── OUR PROMISE STRIP ──────────────────────────────────── */}
                  <ScrollReveal animation="fade-in" delay={0}>
                    <div className="">
                      <div className="rounded-2xl border border-primary/15 bg-card px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                          Our Promise
                        </p>
                        <div className="flex flex-wrap justify-center sm:justify-end gap-2">
                          {promises.map((p, i) => (
                            <span
                              key={p}
                              className={[
                                'inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border',
                                i % 2 === 0
                                  ? 'bg-primary/10 text-primary border-primary/20'
                                  : 'bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent dark:border-accent/20 border-secondary/20',
                              ].join(' ')}
                            >
                              <span className="w-1 h-1 rounded-full bg-current" aria-hidden="true" />
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
        </div>
      </section>
    </>
  );
}