'use client';

import React, { useState, useEffect } from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';

const testimonials = [
  {
    name: 'John Wilson',
    company: 'TechCorp Industries',
    role: 'CEO',
    text: 'PCBTech transformed our production pipeline. Their precision and reliability are unmatched in the industry.',
    avatar: '👨‍💼',
  },
  {
    name: 'Sarah Chen',
    company: 'ElectroSystems Inc',
    role: 'VP Engineering',
    text: 'Working with PCBTech has been a game-changer. Their turnaround time and quality are exceptional.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Rodriguez',
    company: 'InnovateTech Labs',
    role: 'Product Manager',
    text: 'The level of customization and technical support we receive is outstanding. Highly recommended!',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Watson',
    company: 'FutureTech Solutions',
    role: 'Operations Director',
    text: 'Reliable, professional, and always willing to go the extra mile. PCBTech is our trusted partner.',
    avatar: '👩‍🔬',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
  };

  return (
    <section className="sm:py-20 py-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-in" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              <span className="text-slate-900 dark:text-white">Client </span>
              <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Trusted by leading companies across multiple industries.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonials Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            {testimonials.map((testimonial, i) => (
              <ScrollReveal
                key={i}
                animation="fade-in"
                delay={0}
              >
                <div
                  className={`
                    bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl
                    transform transition-all duration-500
                    ${i === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 absolute inset-0'}
                  `}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold font-montserrat text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white smooth-transition"
            >
              ←
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i);
                    setAutoPlay(false);
                  }}
                  className={`w-2 h-2 rounded-full smooth-transition ${
                    i === currentIndex ? 'bg-primary w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white smooth-transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
