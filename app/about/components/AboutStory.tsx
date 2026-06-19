'use client';

import { Reveal } from '@/components/ui/Reveal';

export function AboutStory() {
  return (
    <section
      aria-labelledby="story-heading"
      className="py-24 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-5">
                Who We Are
              </span>
              <h2
                id="story-heading"
                className="font-black font-montserrat leading-[1.15] tracking-tight text-2xl sm:text-3xl"
              >
                <span className="text-primary">Our</span>{' '}
                <span className="text-slate-900 dark:text-white">Story</span>
              </h2>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.05}>
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                Steadcore Industries was founded in 2026 by Dr. Sri Lakshmi E, who holds a Ph.D. in Electrical and Electronics Engineering from IIT (BHU), Varanasi — built on the conviction that India's electronics sector needed a PCB manufacturer that paired academic rigor with dependable, cost-effective delivery.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                From our facility in Ramdaspally, Hyderabad, we manufacture Single-Sided, Double-Sided, and Metal-Core PCBs to a standard we hold the same way regardless of order size — stringent quality checks, consistent electrical performance, and the durability our customers' own products depend on. We currently produce up to 10,000 square meters of Single-Sided and 3,000 square meters of Double-Sided PCBs every month, which lets us take on small prototype runs and large-volume orders without compromising on either.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                We are a young company, and we are honest about that. What we bring instead of two decades of track record is technical depth from day one, a founder who understands board design from the inside, and a deliberate focus on getting the fundamentals right before we chase scale. Today that means serving LED lighting, consumer electronics, industrial electronics, power electronics, industrial automation, telecommunications, and emerging technology customers — and earning the right to serve more.
              </p>
            </Reveal>

            {/* Draft pull-quote — confirm exact wording with Dr. Sri Lakshmi E before publishing */}
            <Reveal delay={0.2}>
              <blockquote className="border-l-4 border-primary/40 pl-6 py-1 my-2">
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 italic leading-snug">
                  "Every board that leaves Ramdaspally has to meet the standard I'd have wanted in the lab — that's not a tagline, it's how we built this company."
                </p>
                <footer className="mt-3 text-sm text-slate-400 not-italic">
                  — Dr. Sri Lakshmi E, Founder
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}