'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';
import { AnimatedButton } from '../animated/AnimatedButton';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient-shift">
      <div className="max-w-4xl mx-auto text-center text-white">
        <ScrollReveal animation="slide-up" delay={0}>
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
            Ready to Transform Your PCB Manufacturing?
          </h2>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={100}>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of leading companies that trust <span className='font-semibold text-[#23ea5b]'>Steadcore </span>for their circuit board manufacturing needs. Let&apos;s build the future together.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold font-montserrat rounded-lg hover:shadow-2xl smooth-transition hover:scale-105 active:scale-95">
              Get a Quote
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold font-montserrat rounded-lg hover:bg-white/10 smooth-transition hover:scale-105 active:scale-95">
              Schedule Demo
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
