'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';

export function Infrastructure() {
  const facilities = [
    {
      name: 'Advanced Robotics Lab',
      description: 'Automated PCB assembly with precision drilling',
      icon: '🤖',
    },
    {
      name: 'Testing Center',
      description: 'Comprehensive quality assurance and testing',
      icon: '🧪',
    },
    {
      name: 'Design Studio',
      description: 'CAD design and prototyping services',
      icon: '🎨',
    },
    {
      name: 'Logistics Hub',
      description: 'Fast worldwide shipping and logistics',
      icon: '📦',
    },
    {
      name: 'Research Lab',
      description: 'Innovation and technology development',
      icon: '🔬',
    },
    {
      name: 'Quality Control',
      description: 'ISO 9001 certified processes',
      icon: '✅',
    },
  ];

  return (
    <section className="sm:py-20 py-8 bg-gradient-to-b from-slate-900 to-slate-950 dark:from-slate-900 dark:to-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <ScrollReveal animation="fade-in" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Our Infrastructure
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Cutting-edge facilities and equipment for world-class PCB manufacturing.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, i) => (
            <ScrollReveal
              key={i}
              animation="scale-up"
              delay={i * 50}
            >
              <div className="relative h-48 rounded-xl overflow-hidden group cursor-pointer glass dark:glass-dark hover:shadow-2xl smooth-transition hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent group-hover:from-primary/30 group-hover:via-secondary/20 smooth-transition" />
                
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 smooth-transition">
                    {facility.icon}
                  </div>
                  <h3 className="text-lg font-bold font-montserrat mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Full-width Image Placeholder */}
        <ScrollReveal animation="slide-up" delay={200}>
          <div className="mt-16 rounded-xl overflow-hidden glass dark:glass-dark h-96 md:h-[500px] group cursor-pointer hover:shadow-2xl smooth-transition">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 flex items-center justify-center relative overflow-hidden">
              {/* Animated Grid Background */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 300">
                <defs>
                  <pattern id="grid-large" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="400" height="300" fill="url(#grid-large)" />
              </svg>

              {/* Floating Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="text-6xl mb-4 animate-float">🏭</div>
                  <p className="text-xl font-montserrat text-white text-center">
                    Explore Our World-Class Facilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
