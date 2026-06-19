'use client';

import { Reveal } from '@/components/ui/Reveal';

const VALUES = [
  {
    number: '01',
    title: 'Quality, engineered in',
    body: 'Every board we manufacture — Single-Sided, Double-Sided, or Metal-Core — is held to the same stringent quality standards before it leaves our Ramdaspally facility. We built our quality control systems on rigor, not shortcuts, because electrical performance and long-term dependability matter more to our customers than how fast we can ship.',
  },
  {
    number: '02',
    title: 'Integrity in how we work',
    body: 'A manufacturing partnership only works when both sides can trust what the other says. From quoted lead times to production capacity, we would rather give you the accurate answer than the convenient one — and we tell you what we can and cannot do before you commit to an order.',
  },
  {
    number: '03',
    title: 'Innovation with intent',
    body: 'Our technical foundation comes from deep academic and engineering expertise in electronic systems. We continuously invest in advanced manufacturing technologies and expand our capabilities — not for its own sake, but to keep pace with where India’s electronics sector is actually headed.',
  },
  {
    number: '04',
    title: 'Customer commitment, not just delivery',
    body: 'We build long-term partnerships through customized solutions, responsive technical support, competitive pricing, and dependable delivery schedules. A board that arrives late or unsupported has not really been delivered — so we measure ourselves on the relationship, not just the shipment.',
  },
];

export function AboutValues() {
  return (
    <section
      aria-labelledby="values-heading"
      className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-5">
                Our Values
              </span>
              <h2
                id="values-heading"
                className="font-black font-montserrat leading-[1.15] tracking-tight text-2xl sm:text-3xl mb-5"
              >
                <span className="text-primary">What We</span>{' '}
                <span className="text-slate-900 dark:text-white">Believe</span>
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
                The four principles that guide every board we build, from day one.
              </p>
            </div>
          </Reveal>

          <div className="space-y-0" role="list">
            {VALUES.map((v, i) => (
              <Reveal key={v.number} delay={i * 0.08}>
                <div
                  role="listitem"
                  className="group flex flex-col sm:flex-row gap-3 sm:gap-8 py-8 border-b border-slate-200 dark:border-slate-700 last:border-0 hover:pl-2 smooth-transition"
                >
                  <span
                    aria-hidden="true"
                    className="flex-shrink-0 text-xs font-black font-montserrat text-slate-300 dark:text-slate-600 group-hover:text-primary smooth-transition pt-1 w-6"
                  >
                    {v.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold font-montserrat text-slate-900 dark:text-white text-base sm:text-lg mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-slate-600 dark:text-slate-400 leading-relaxed">
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