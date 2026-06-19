'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedCounter } from '../animated/AnimatedCounter';
import { GradientCard } from '../animated/GradientCard';

export function About() {
  const capabilities = [
    {
      icon: '📋',
      title: 'Quality Manufacturing',
      description: 'Single-Sided, Double-Sided, and Metal-Core PCBs',
    },
    {
      icon: '👨‍🔬',
      title: 'Expert Leadership',
      description: 'Founded by Dr. Sri Lakshmi E, Ph.D. in Electrical and Electronics Engineering from IIT (BHU)',
    },
    {
      icon: '🏭',
      title: 'High Capacity',
      description: '10,000 sq.m Single-Sided & 3,000 sq.m Double-Sided PCBs monthly',
    },
    {
      icon: '🌟',
      title: 'Industry Reach',
      description: 'Serving LED, consumer, industrial, power, automation, and telecom sectors',
    },
  ];

  return (
    <section id="about" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About Content */}
          <div className="space-y-8">
            <ScrollReveal animation="slide-up" delay={0}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                  <span className="text-slate-900 dark:text-white">About </span>
                  <span className="gradient-text">Steadcore Industries</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Steadcore Industries, established in 2026 and located in Ramdaspally, Hyderabad, is a dedicated manufacturer of high-quality Printed Circuit Boards (PCBs), contributing to India&apos;s electronics supply chain with precision, reliability, and consistency.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="slide-up" delay={100}>
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-200 dark:border-slate-700">
                <div>
                  <p className="text-4xl font-bold font-montserrat text-primary">
                    <AnimatedCounter end={10000} duration={2} suffix="+" />
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Sq.m Single-Sided Monthly</p>
                </div>
                <div>
                  <p className="text-4xl font-bold font-montserrat text-secondary">
                    <AnimatedCounter end={3000} duration={2} suffix="+" />
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Sq.m Double-Sided Monthly</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Capabilities */}
            <ScrollReveal animation="slide-up" delay={200}>
              <div className="space-y-4">
                {capabilities.map((cap, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{cap.icon}</div>
                    <div>
                      <h4 className="font-bold font-montserrat text-slate-900 dark:text-white mb-1">
                        {cap.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Visual Timeline */}
          <ScrollReveal animation="slide-down" delay={200}>
            <div className="space-y-8">
              {[
                { year: '2026', title: 'Founded', desc: 'Established in Ramdaspally, Hyderabad' },
                { year: 'Now', title: 'Quality Focus', desc: 'Stringent quality standards and precision manufacturing' },
                { year: 'Now', title: 'Innovation', desc: 'Committed to advanced manufacturing processes' },
                { year: 'Future', title: 'Growth', desc: 'Expanding capabilities in electronics sector' },
              ].map((event, i) => (
                <GradientCard key={i}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {event.year === 'Now' ? '✓' : event.year === 'Future' ? '→' : event.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-montserrat text-slate-900 dark:text-white">
                        {event.year !== 'Now' && event.year !== 'Future' ? `${event.year} - ` : ''}{event.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </GradientCard>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
