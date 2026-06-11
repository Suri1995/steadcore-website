'use client';

import { Reveal } from '@/components/ui/Reveal';

const LEADERS = [
  {
    initials: 'JC',
    name: 'James Chen',
    title: 'Co-founder & CEO',
    bio: 'Former process engineer at Foxconn, James left to prove that a manufacturer could grow globally without abandoning its quality DNA. He still walks the floor every morning.',
    color: 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300',
  },
  {
    initials: 'LW',
    name: 'Linda Wei',
    title: 'Co-founder & CTO',
    bio: 'Linda holds seven patents in micro-via drilling. She leads our R&D team and personally reviews every new material supplier before we add them to our approved list.',
    color: 'bg-violet-50 dark:bg-violet-950 text-violet-700 dark:text-violet-300',
  },
  {
    initials: 'RO',
    name: 'Rafael Osei',
    title: 'VP Quality Assurance',
    bio: '18 years running IPC training programmes across Asia, Rafael rebuilt our inspection culture from "pass/fail" into a data-driven continuous improvement engine.',
    color: 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300',
  },
  {
    initials: 'SK',
    name: 'Sunita Kapoor',
    title: 'VP Customer Engineering',
    bio: "Sunita's team of DFM engineers reviews every new design submission. Her rule: If we would not put it in our own product, we say so before production starts.",
    color: 'bg-amber-50 dark:bg-amber-950 text-amber-700 dark:text-amber-300',
  },
];

export function AboutLeadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="py-24 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">
          <Reveal from="left">
            <div className="lg:sticky lg:top-32">
              <h2
                id="leadership-heading"
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4"
              >
                Leadership
              </h2>
              <div aria-hidden="true" className="w-8 h-0.5 bg-primary/40 rounded-full mb-6" />
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                The people accountable for every board we ship.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5" role="list">
            {LEADERS.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.08}>
                <article
                  role="listitem"
                  className="group p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-slate-200 dark:hover:border-slate-600 hover:shadow-md smooth-transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold font-montserrat ${person.color}`}
                      aria-hidden="true"
                    >
                      {person.initials}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white text-sm leading-tight">
                        {person.name}
                      </p>
                      <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        {person.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {person.bio}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}