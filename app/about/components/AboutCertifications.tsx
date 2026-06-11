'use client';

import { Reveal } from '@/components/ui/Reveal';

const CERTS = [
  { name: 'ISO 9001:2015', note: 'Quality management' },
  { name: 'IPC Class 3', note: 'High-reliability standard' },
  { name: 'UL Certified', note: 'Safety & materials' },
  { name: 'RoHS Compliant', note: 'Environmental' },
  { name: 'ITAR Registered', note: 'Aerospace & defence' },
];

export function AboutCertifications() {
  return (
    <section
      aria-labelledby="certs-heading"
      className="py-24 border-b border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-center">
          <Reveal from="left">
            <div>
              <h2
                id="certs-heading"
                className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4"
              >
                Certifications
              </h2>
              <div aria-hidden="true" className="w-8 h-0.5 bg-primary/40 rounded-full mb-6" />
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Third-party verified. Audited annually. Available on request.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul
              className="flex flex-wrap gap-3"
              aria-label="PCBTech certifications and compliance standards"
            >
              {CERTS.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary/40 smooth-transition"
                >
                  <span
                    aria-hidden="true"
                    className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-900/40 flex items-center justify-center flex-shrink-0"
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l2.8 2.8L10 3.5" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white leading-none mb-0.5">
                      {cert.name}
                    </p>
                    <p className="text-xs text-slate-400 leading-none">{cert.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}