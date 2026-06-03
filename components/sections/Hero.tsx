'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedButton } from '../animated/AnimatedButton';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <ScrollReveal animation="slide-up" delay={0}>
              <h1 className="text-5xl md:text-7xl font-bold font-montserrat leading-tight">
                <span className="gradient-text">Next-Gen PCB</span>
                <br />
                <span className="text-slate-900 dark:text-white">Solutions</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={100}>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
                Cutting-edge printed circuit board manufacturing with precision engineering and advanced technology for the future of electronics.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="slide-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <AnimatedButton variant="primary" size="lg">
                  Explore Products
                </AnimatedButton>
                <AnimatedButton variant="outline" size="lg">
                  Learn More
                </AnimatedButton>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="slide-up" delay={300}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-700">
                {[
                  { value: '500+', label: 'Projects' },
                  { value: '50+', label: 'Companies' },
                  { value: '99%', label: 'Quality' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold font-montserrat text-primary">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual */}
          <ScrollReveal animation="slide-in-right" delay={200}>
            <div className="relative h-96 md:h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass dark:glass-dark">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent animate-gradient-shift" />
                
                {/* Animated Grid */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 200 200">
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="200" height="200" fill="url(#grid)" />
                </svg>

                {/* PCB Circuit Elements */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-primary/30 rounded-lg animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-secondary/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
