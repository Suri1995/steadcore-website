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
                Steadcore Industries was founded by Dr. Sri Lakshmi E, who holds a Ph.D. in Electrical and Electronics Engineering from IIT (BHU), Varanasi. Leveraging her extensive academic and technical expertise in electronic systems and manufacturing, she established Steadcore Industries with a vision to deliver reliable, cost-effective, and technologically advanced PCB solutions to India&apos;s rapidly expanding electronics sector.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                Printed Circuit Boards form the foundation of modern electronic products, and we recognize their critical role in ensuring performance and reliability. At Steadcore Industries, every PCB is manufactured to meet stringent quality standards, ensuring superior electrical performance, durability, and long-term dependability. Our manufacturing facility is equipped with the capability to produce up to 10,000 square meters of Single-Sided PCBs and 3,000 square meters of Double-Sided PCBs per month.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
                We proudly serve a diverse range of industries, including LED lighting, consumer electronics, industrial electronics, power electronics, industrial automation, telecommunications, and emerging technology sectors. Through advanced manufacturing processes and rigorous quality control systems, we ensure that every PCB delivered meets the highest standards of precision, performance, and reliability.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <blockquote className="border-l-4 border-primary/40 pl-6 py-1 my-2">
                <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 italic leading-snug">
                  "Building Reliable Connections for a Smarter Future"
                </p>
                <footer className="mt-3 text-sm text-slate-400 not-italic">
                  — Steadcore Industries
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
