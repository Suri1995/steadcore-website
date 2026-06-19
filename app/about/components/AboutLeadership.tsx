'use client';

import { Reveal } from '@/components/ui/Reveal';

const FOUNDER = {
  initials: 'SL',
  name: 'Dr. Sri Lakshmi E',
  title: 'Founder',
  credential: 'Ph.D., Electrical & Electronics Engineering — IIT (BHU), Varanasi',
  bio: 'Leveraging her academic and technical expertise in electronic systems and manufacturing, Dr. Lakshmi founded Steadcore Industries to deliver reliable, cost-effective, and technologically advanced PCB solutions to India’s rapidly expanding electronics sector.',
};

const VALUES = ['Quality', 'Integrity', 'Innovation', 'Customer commitment'];

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="py-16 sm:py-20 lg:py-24 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-5">
                Leadership
              </span>
              <h2
                id="leadership-heading"
                className="font-black font-montserrat leading-[1.15] tracking-tight text-2xl sm:text-3xl mb-5"
              >
                <span className="text-primary">Meet Our</span>{' '}
                <span className="text-slate-900 dark:text-white">Founder</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                Founder-led from day one — the person accountable for every board we ship.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal delay={0.05}>
              <article className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md smooth-transition">
                <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black font-montserrat bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    {FOUNDER.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-slate-900 dark:text-white text-lg leading-tight">
                      {FOUNDER.name}
                    </p>
                    <p className="text-sm text-primary font-semibold mt-0.5">
                      {FOUNDER.title}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                      {FOUNDER.credential}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4 max-w-2xl">
                      {FOUNDER.bio}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-5" aria-label="Core values she leads by">
                      {VALUES.map((v) => (
                        <span
                          key={v}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-700"
                        >
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-sm text-slate-400 dark:text-slate-500 italic px-1">
                Steadcore is founder-led today, by design — as the team grows, this is where you’ll meet the engineers and quality leads who join her.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}