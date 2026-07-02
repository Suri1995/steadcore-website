'use client';

import { Reveal } from '@/components/ui/Reveal';

const MILESTONES = [
  {
    year: '2026',
    title: 'Founded in Ramdaspally, Hyderabad',
    body: 'Steadcore Industries established with a vision to bring reliable, cost-effective, and technologically advanced PCB solutions to India’s rapidly expanding electronics sector.',
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
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
    >
      {/* Ambient PCB grid — faint dot matrix, ties the section to the product without shouting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgb(148 163 184 / 0.4) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
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
            {/* Trace — the main spine, styled like a copper trace with a soft glow, fading in at the top and out at the bottom */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{
                background:
                  'linear-gradient(to bottom, transparent, var(--color-primary, #16a34a) 8%, var(--color-primary, #16a34a) 92%, transparent)',
                opacity: 0.25,
              }}
            />

            <div className="space-y-8 sm:space-y-10">
              {MILESTONES.map((item, i) => (
                <Reveal key={`${item.year}-${item.title}`} delay={i * 0.06}>
                  <li className="group relative pl-10 sm:pl-12">
                    {/* Via — a two-ring solder-pad marker instead of a plain dot */}
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 group-hover:border-primary transition-colors duration-300 z-10 flex items-center justify-center"
                    >
                      <span className="w-[5px] h-[5px] rounded-full bg-slate-300 dark:bg-slate-600 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
                    </span>

                    {/* Lead — short horizontal stub from the via into the card, like a trace branching off the spine */}
                    <span
                      aria-hidden="true"
                      className="absolute left-[15px] top-[10px] w-4 sm:w-5 h-px bg-slate-300 dark:bg-slate-600 group-hover:bg-primary/60 transition-colors duration-300"
                    />

                    <div
                      className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white/60 dark:bg-slate-800/40 p-5 sm:p-6 -mt-3 ml-2 sm:ml-3
                        group-hover:border-primary/25 group-hover:bg-white dark:group-hover:bg-slate-800/80 group-hover:shadow-lg group-hover:shadow-primary/5
                        group-hover:-translate-y-0.5 transition-[transform,box-shadow,border-color,background-color] duration-300"
                    >
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary/10 text-primary text-[11px] font-bold uppercase tracking-wider font-mono whitespace-nowrap">
                          {item.year}
                        </span>
                        <h3 className="font-bold font-montserrat text-slate-900 dark:text-white text-base sm:text-lg leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
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