'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedCounter } from '../animated/AnimatedCounter';
import { GradientCard } from '../animated/GradientCard';

export function About() {
  const capabilities = [
    {
      icon: '🏭',
      title: 'State-of-the-Art Facilities',
      description: 'Advanced manufacturing equipment and infrastructure',
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: '50+ years combined industry experience',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Serving customers in 30+ countries worldwide',
    },
    {
      icon: '⏱️',
      title: 'Fast Turnaround',
      description: 'Quick prototyping and production timelines',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: About Content */}
          <div className="space-y-8">
            <ScrollReveal animation="slide-up" delay={0}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
                  <span className="text-slate-900 dark:text-white">About </span>
                  <span className="gradient-text">PCBTech</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  With over two decades of excellence in PCB manufacturing, we've been pioneers
                  in delivering innovative circuit board solutions to leading electronics companies
                  worldwide. Our commitment to quality and innovation drives everything we do.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="slide-up" delay={100}>
              <div className="grid grid-cols-2 gap-6 py-8 border-y border-slate-200 dark:border-slate-700">
                <div>
                  <p className="text-4xl font-bold font-montserrat text-primary">
                    <AnimatedCounter end={500} duration={2} suffix="+" />
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Active Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-bold font-montserrat text-secondary">
                    <AnimatedCounter end={95} duration={2} suffix="%" />
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">Client Satisfaction</p>
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
          <ScrollReveal animation="slide-in-right" delay={200}>
            <div className="space-y-8">
              {[
                { year: '2002', title: 'Founded', desc: 'Started with single facility' },
                { year: '2010', title: 'Expansion', desc: 'Grew to 3 manufacturing centers' },
                { year: '2018', title: 'Innovation', desc: 'Invested in advanced technology' },
                { year: '2024', title: 'Global Leader', desc: 'Serving 30+ countries' },
              ].map((event, i) => (
                <GradientCard key={i}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                        {event.year.slice(-2)}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold font-montserrat text-slate-900 dark:text-white">
                        {event.year} - {event.title}
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
