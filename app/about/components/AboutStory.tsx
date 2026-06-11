'use client';

import { Reveal } from '@/components/ui/Reveal';

export function AboutStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="py-24 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <h2
                id="story-heading"
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4"
              >
                Who we are
              </h2>
              <div aria-hidden="true" className="w-8 h-0.5 bg-primary/40 rounded-full" />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                PCBTech was started because two engineers believed the industry had traded quality for volume — and that a manufacturer genuinely committed to zero-defect delivery could build a business around customers who agreed.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Twenty years later, the founding team still runs the company. We have never taken outside investment, which means our decisions are driven by what is right for our customers and our people — not by a quarterly metric. That independence has allowed us to say no to orders we could not do well, to invest in equipment before it was commercially necessary, and to retain engineers whose institutional knowledge is genuinely irreplaceable.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                We are not the largest PCB manufacturer in Asia. We are deliberate about that. Controlled scale means every new customer gets the same attention as our longest-running account — the same DFM review, the same dedicated engineer, the same first-name relationship with the people who will build their boards.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="border-l-4 border-primary/40 pl-6 py-1 my-2">
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 italic leading-snug">
                  "If we would not put it in our own product, we say so before production starts."
                </p>
                <footer className="mt-3 text-sm text-slate-400 not-italic">
                  — Sunita Kapoor, VP Customer Engineering
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}