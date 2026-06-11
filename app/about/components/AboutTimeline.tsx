'use client';

import { Reveal } from '@/components/ui/Reveal';

const TIMELINE = [
  {
    year: '2003',
    title: 'Founded in Shenzhen',
    body: 'PCBTech opens with a single SMT production line, three engineers, and one belief: that PCB manufacturing should be transparent, traceable, and honest.',
  },
  {
    year: '2007',
    title: 'First ISO certification',
    body: 'After four years of consistent delivery, we earn ISO 9001 certification — the first in our industrial park to do so with zero corrective actions.',
  },
  {
    year: '2011',
    title: 'Rigid-flex capability added',
    body: 'We invest in laser drilling and lamination presses to serve medical device customers who need flex and rigid-flex assemblies built to IPC Class 3.',
  },
  {
    year: '2015',
    title: 'Aerospace programme win',
    body: 'Our first ITAR-registered production run for an avionics OEM — a milestone that reshapes our quality culture from the ground up.',
  },
  {
    year: '2019',
    title: '50 million boards shipped',
    body: 'We cross a production milestone that few contract manufacturers reach without losing the "small enough to care" attention that defines our customer relationships.',
  },
  {
    year: '2023',
    title: 'Twenty years of precision',
    body: 'Three facilities, 400 engineers, and customers in 60 countries — still run by the same founding team, still obsessed with zero-defect delivery.',
  },
];

export function AboutTimeline() {
  return (
    <section
      aria-labelledby="timeline-heading"
      className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <h2
                id="timeline-heading"
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4"
              >
                Our history
              </h2>
              <div aria-hidden="true" className="w-8 h-0.5 bg-primary/40 rounded-full mb-6" />
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Twenty years of milestones, each one earned rather than announced.
              </p>
            </div>
          </Reveal>

          <ol aria-label="PCBTech company history" className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[3.25rem] sm:left-[4.5rem] top-3 bottom-3 w-px bg-slate-200 dark:bg-slate-700"
            />

            <div className="space-y-0">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.07}>
                  <li className="relative flex gap-6 sm:gap-10 pb-12 last:pb-0 group">
                    <div className="flex-shrink-0 flex flex-col items-center z-10">
                      <div className="w-[6.5rem] sm:w-[9rem] text-right pr-4 sm:pr-6">
                        <span className="text-lg sm:text-xl font-black font-montserrat text-primary leading-none">
                          {item.year}
                        </span>
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className="absolute left-[3.1rem] sm:left-[4.35rem] top-1.5 w-3 h-3 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 group-hover:border-primary smooth-transition z-10"
                    />

                    <div className="pt-0 flex-1 pb-2">
                      <h3 className="font-bold font-montserrat text-slate-900 dark:text-white text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
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