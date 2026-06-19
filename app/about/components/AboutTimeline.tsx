'use client';

import { Reveal } from '@/components/ui/Reveal';

const MILESTONES = [
  {
    year: '2026',
    title: 'Founded in Ramdaspally, Hyderabad',
    body: 'Dr. Sri Lakshmi E, a Ph.D. in Electrical and Electronics Engineering from IIT (BHU) Varanasi, establishes Steadcore Industries with a vision to bring reliable, cost-effective, and technologically advanced PCB solutions to India’s rapidly expanding electronics sector.',
  },
  {
    year: 'Day one',
    title: 'Three PCB lines, one quality standard',
    body: 'We launch with the capability to manufacture Single-Sided, Double-Sided, and Metal-Core PCBs, each built to the same stringent quality standards for electrical performance, durability, and long-term dependability.',
  },
  {
    year: 'Today',
    title: 'Production capacity online',
    body: 'Our Ramdaspally facility runs at up to 10,000 square meters of Single-Sided and 3,000 square meters of Double-Sided PCB capacity per month — enough to take on small prototype runs and large-scale orders without compromise.',
  },
  {
    year: 'Today',
    title: 'Seven industries, one supply chain',
    body: 'We serve LED lighting, consumer electronics, industrial electronics, power electronics, industrial automation, telecommunications, and emerging technology customers — each supported by the same rigorous quality control systems.',
  },
  {
    year: 'Ahead',
    title: 'Building toward India’s most trusted PCB partner',
    body: 'We’re investing in advanced technologies, expanding our capabilities, and growing our capacity — guided by quality, integrity, innovation, and customer commitment, with the goal of becoming one of India’s most trusted PCB manufacturers.',
  },
];

export function AboutTimeline() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-5">
                Our Journey
              </span>
              <h2
                id="timeline-heading"
                className="font-black font-montserrat leading-[1.15] tracking-tight text-2xl sm:text-3xl mb-5"
              >
                <span className="text-primary">Where We</span>{' '}
                <span className="text-slate-900 dark:text-white">Began</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                A young company, built deliberately — here’s where we started and where we’re headed.
              </p>
            </div>
          </Reveal>

          <ol aria-label="Steadcore Industries foundation and roadmap" className="relative">
            {/* Connecting line — centered on the 12px dots below (0.75rem / 2 = 1.5) */}
            <div
              aria-hidden="true"
              className="absolute left-1.5 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-700"
            />

            <div className="space-y-0">
              {MILESTONES.map((item, i) => (
                <Reveal key={`${item.year}-${item.title}`} delay={i * 0.06}>
                  <li className="group relative pl-10 sm:pl-12 pb-10 sm:pb-12 last:pb-0">
                    {/* Dot — own dedicated gutter, never collides with text */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 group-hover:border-primary group-hover:scale-110 transition-[border-color,transform] duration-300 z-10"
                    />

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-wider font-montserrat whitespace-nowrap">
                        {item.year}
                      </span>
                      <h3 className="font-bold font-montserrat text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </div>
          </ol>
        </div>
      </div>
    </section>
  );
}