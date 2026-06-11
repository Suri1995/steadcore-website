'use client';

import { Reveal } from '@/components/ui/Reveal';

export function AboutCTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-8 sm:px-16 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2
                id="cta-heading"
                className="text-2xl sm:text-3xl font-black font-montserrat text-slate-900 dark:text-white mb-3 leading-tight"
              >
                Want to know if we're the right fit?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
                Send us your Gerber files and our DFM team will come back with honest feedback within one business day — no cost, no commitment.
              </p>
            </div>

            <div className="flex flex-col gap-3 flex-shrink-0">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 smooth-transition whitespace-nowrap"
              >
                Talk to an engineer
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/capabilities"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 smooth-transition whitespace-nowrap"
              >
                View our capabilities
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}