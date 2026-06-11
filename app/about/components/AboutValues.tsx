'use client';

import { Reveal } from '@/components/ui/Reveal';

const VALUES = [
  {
    number: '01',
    title: 'Honesty before the sale',
    body: 'We tell you what we can and cannot do — including lead times, layer counts, and risk areas — before you place an order. We have never promised a date we could not keep.',
  },
  {
    number: '02',
    title: 'The engineer on the floor matters',
    body: 'Our operators are trained, fairly paid, and empowered to stop a line when something looks wrong. Good boards come from confident people, not pressured ones.',
  },
  {
    number: '03',
    title: 'Traceability is not optional',
    body: 'Every panel, every batch, every test result is recorded and retrievable for seven years. When our customers need answers, we have them.',
  },
  {
    number: '04',
    title: 'Long-term over transactional',
    body: 'Our average customer tenure is nine years. We earn that by being the partner who flags problems early, not the vendor who ships and disappears.',
  },
];

export function AboutValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <h2
                id="values-heading"
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4"
              >
                What we believe
              </h2>
              <div aria-hidden="true" className="w-8 h-0.5 bg-primary/40 rounded-full mb-6" />
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Principles we hold regardless of how uncomfortable they are commercially.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0" role="list">
            {VALUES.map((v, i) => (
              <Reveal key={v.number} delay={i * 0.08}>
                <div
                  role="listitem"
                  className="group flex gap-8 py-8 border-b border-slate-200 dark:border-slate-700 last:border-0 hover:pl-2 smooth-transition"
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-xs font-black font-montserrat text-slate-300 dark:text-slate-600 group-hover:text-primary smooth-transition pt-1 w-6"
                  >
                    {v.number}
                  </span>
                  <div>
                    <h3 className="font-bold font-montserrat text-slate-900 dark:text-white text-base mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">
                      {v.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}