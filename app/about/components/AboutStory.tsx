'use client';

import { Reveal } from '@/components/ui/Reveal';

/* ─── icons ────────────────────────────────────────────────── */
function GraduationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" focusable="false">
      <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" focusable="false">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" focusable="false">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

/* ─── data ─────────────────────────────────────────────────── */
const credentials = [
  {
    label: 'Doctorate',
    degree: 'Ph.D.',
    field: 'Electrical & Electronics Engineering',
    institute: 'IIT (BHU), Varanasi',
  },
  {
    label: "Master's",
    degree: 'M.Tech',
    field: 'Power Systems Engineering',
    institute: 'Advanced Specialisation',
  },
  {
    label: "Bachelor's",
    degree: 'B.Tech',
    field: 'Electrical & Electronics Engineering',
    institute: 'JNTU Hyderabad',
  },
];

const disciplines = [
  'PCB Manufacturing',
  'Process Engineering',
  'Quality Assurance',
  'Production Management',
  'Supply Chain Operations',
  'Customer Support',
];

const pillars = [
  {
    label: 'Continuous Learning',
    desc: 'We invest in people as deliberately as we invest in equipment.',
  },
  {
    label: 'Teamwork & Accountability',
    desc: 'Every board is a shared responsibility across every department.',
  },
  {
    label: 'Customer-Centric Culture',
    desc: 'Technical excellence exists to serve the end customer, no one else.',
  },
];

/* ═══════════════════════════════════════════════════════════ */
export function AboutStory() {
  return (
    <>
      <style>{`
        @keyframes as-trace {
          from { stroke-dashoffset: 320; }
          to   { stroke-dashoffset: 0; }
        }
        .as-trace-line {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          animation: as-trace 2s cubic-bezier(.4,0,.2,1) .6s forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .as-trace-line { animation: none; stroke-dashoffset: 0; }
        }
      `}</style>

      {/* ══ SECTION 1 — OUR STORY ══════════════════════════════════════ */}
      <section aria-labelledby="story-heading" className="py-24 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Label + prose grid */}
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start mb-16">

            {/* Sticky sidebar */}
            <Reveal from="left">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em] border border-primary/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                    Who We Are
                  </span>
                  <h2 id="story-heading" className="font-montserrat font-black leading-[1.1] tracking-tight text-3xl sm:text-4xl">
                    <span className="text-primary">Our</span>{' '}
                    <span className="text-foreground">Story</span>
                  </h2>
                  <span className="mt-4 block w-10 h-[3px] rounded-full bg-gradient-to-r from-primary to-secondary" aria-hidden="true" />
                </div>

                {/* Production capacity — real numbers, not decoration */}
                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Manufacturing Capacity
                  </p>
                  {[
                    { num: '10,000', unit: 'sqm', label: 'Single-Sided PCB' },
                    { num: '3,000',  unit: 'sqm', label: 'Double-Sided PCB' },
                  ].map(({ num, unit, label }) => (
                    <div key={label}
                      className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3.5 flex items-center gap-4">
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="font-montserrat text-2xl font-extrabold text-primary leading-none">{num}</span>
                          <span className="text-[10px] font-semibold text-muted-foreground">{unit}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Prose */}
            <div className="space-y-6">
              <Reveal delay={0.05}>
                <p className="text-xl text-foreground leading-relaxed font-medium">
                  Steadcore Industries was founded in 2026, and built on the
                  conviction that India's electronics sector needed a PCB manufacturer that paired
                  academic rigor with dependable, cost-effective delivery.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  From our facility in Ramdaspally, Hyderabad, we manufacture Single-Sided,
                  Double-Sided, and Metal-Core PCBs to a standard we hold the same way regardless
                  of order size — stringent quality checks, consistent electrical performance, and
                  the durability our customers' own products depend on.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We are a young company, and we are honest about that. What we bring instead of
                  two decades of track record is technical depth from day one, a founder who
                  understands board design from the inside, and a deliberate focus on getting the
                  fundamentals right before we chase scale — serving LED lighting, consumer
                  electronics, industrial automation, power electronics, telecommunications, and
                  emerging technology customers.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── FOUNDER CARD — completely redesigned ─────────────────── */}
          <Reveal delay={0.2}>
            <figure
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #071d0e 0%, #071428 50%, #081820 100%)',
                boxShadow: '0 0 0 1px rgba(11,122,42,0.18), 0 24px 80px -12px rgba(0,0,0,0.55), 0 0 60px -20px rgba(11,122,42,0.15)',
              }}
            >
              {/* Huge decorative quote mark — pure atmosphere */}
              <span
                className="pointer-events-none select-none absolute -top-6 right-8 font-montserrat font-black text-white leading-none"
                style={{ fontSize: 'clamp(140px, 20vw, 240px)', opacity: 0.035, lineHeight: 1 }}
                aria-hidden="true"
              >
                "
              </span>

              {/* PCB trace SVG — runs along top edge */}
              <svg
                className="absolute top-0 left-0 right-0 w-full"
                height="3" viewBox="0 0 1200 3"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="0" y1="1.5" x2="1200" y2="1.5"
                  className="as-trace-line"
                  stroke="url(#traceGrad)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#0B7A2A" stopOpacity="0"/>
                    <stop offset="30%"  stopColor="#0B7A2A" stopOpacity="1"/>
                    <stop offset="70%"  stopColor="#003B8E" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#003B8E" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>

              {/* Main quote area */}
              <div className="relative z-10 px-8 pt-12 pb-8 sm:px-12 sm:pt-14 sm:pb-10 lg:px-16">

                {/* Quote text — Montserrat display, first word accented */}
                <blockquote className="mb-8">
                  <p className="font-montserrat font-black leading-[1.18] tracking-tight"
                    style={{ fontSize: 'clamp(20px, 3.5vw, 36px)' }}>
                    {/* "Every" in primary green — gives the eye an entry point */}
                    <span className="text-primary">"Every</span>
                    <span className="text-white"> {`board that leaves our facility reflects our commitment to quality. It’s not just a tagline it’s the standard we uphold every day."`}</span>
                  </p>
                </blockquote>

                {/* Attribution — identity block */}
                {/* <figcaption className="flex items-center gap-4"> */}
                  {/* Monogram — gradient ring */}
                  {/* <div className="relative flex-shrink-0">
                    <div
                      className="absolute inset-[-2px] rounded-full"
                      style={{ background: 'linear-gradient(135deg, #0B7A2A, #003B8E)' }}
                      aria-hidden="true"
                    />
                    <div
                      className="relative w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold"
                      style={{ background: 'linear-gradient(135deg, #0f2918, #0c1e35)' }}
                    >
                      SL
                    </div>
                  </div>
                  <div className="border-l border-white/15 pl-4">
                    <p className="text-white font-semibold text-xl font-montserrat">Dr. Sri Lakshmi E</p>
                    <p className="text-white/45 text-sm mt-0.5">Ph.D. , IIT (BHU) Varanasi, Founder & Director, Steadcore Industries</p>
                  </div>
                </figcaption> */}
              </div>
             

              {/* Bottom PCB trace */}
              <svg
                className="absolute bottom-0 left-0 right-0 w-full rotate-180"
                height="3" viewBox="0 0 1200 3"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <line x1="0" y1="1.5" x2="1200" y2="1.5"
                  className="as-trace-line"
                  stroke="url(#traceGrad2)" strokeWidth="1.5"/>
                <defs>
                  <linearGradient id="traceGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%"   stopColor="#003B8E" stopOpacity="0"/>
                    <stop offset="40%"  stopColor="#003B8E" stopOpacity="0.6"/>
                    <stop offset="60%"  stopColor="#0B7A2A" stopOpacity="0.6"/>
                    <stop offset="100%" stopColor="#0B7A2A" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ══ SECTION 2 — OUR TEAM ═══════════════════════════════════════ */}
      {/* <section aria-labelledby="team-heading" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-12 lg:gap-20 items-start"> */}

            {/* Sticky sidebar */}
            {/* <Reveal from="left">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent text-[10px] font-bold uppercase tracking-[0.14em] border border-secondary/20 dark:border-accent/20 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                    Our People
                  </span>
                  <h2 id="team-heading" className="font-montserrat font-black leading-[1.1] tracking-tight text-3xl sm:text-4xl">
                    <span className="text-secondary dark:text-accent">The</span>{' '}
                    <span className="text-foreground">Team</span>
                  </h2>
                  <span className="mt-4 block w-10 h-[3px] rounded-full bg-gradient-to-r from-secondary to-primary dark:from-accent" aria-hidden="true" />
                </div> */}

                {/* Departments list */}
                {/* <div className="space-y-2.5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    Our Departments
                  </p>
                  <ul className="space-y-2" aria-label="Team departments">
                    {disciplines.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-3 h-3 text-primary" />
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal> */}

            {/* Team prose + pillars */}
            {/* <div className="space-y-7">
              <Reveal delay={0.05}>
                <p className="text-xl text-foreground leading-relaxed font-medium">
                  At Steadcore Industries, our strength lies in the knowledge, dedication, and
                  expertise of our team — skilled professionals across every function required to
                  manufacture PCBs to a consistent, uncompromising standard.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  The company is founded and led by Dr. Sri Lakshmi E — who brings a Ph.D. from
                  IIT (BHU), an M.Tech in Power Systems Engineering, and a B.Tech from JNTU
                  Hyderabad. Her depth in electrical systems, electronics, and engineering research
                  is the technical foundation on which the entire organisation is built.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our team spans PCB manufacturing, process engineering, quality assurance,
                  production management, supply chain operations, and customer support — together
                  ensuring every product leaves the facility with precision, consistency, and
                  adherence to our quality standards.
                </p>
              </Reveal> */}

              {/* Culture pillars */}
              {/* <Reveal delay={0.2}>
                <div className="grid sm:grid-cols-3 gap-4 pt-2">
                  {pillars.map(({ label, desc }, i) => (
                    <div
                      key={label}
                      className="rounded-[var(--radius-lg)] border border-border bg-card p-5 flex flex-col gap-3 hover:border-primary/25 hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className={`w-8 h-8 rounded-[var(--radius-sm)] flex items-center justify-center ${i === 1 ? 'bg-secondary/10 dark:bg-accent/10' : 'bg-primary/10'}`}>
                        <UsersIcon className={`w-4 h-4 ${i === 1 ? 'text-secondary dark:text-accent' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-foreground mb-1 font-montserrat leading-snug">{label}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal> */}

              {/* Closing statement */}
              {/* <Reveal delay={0.25}>
                <div className="rounded-[var(--radius-lg)] border border-primary/15 bg-primary/5 dark:bg-primary/10 px-6 py-5">
                  <p className="text-sm text-foreground leading-relaxed">
                    <span className="font-semibold text-primary">Our people are our greatest asset.</span>{' '}
                    Their commitment, professionalism, and passion for excellence form the foundation
                    of our growth and drive our mission to become a trusted partner in the global
                    PCB manufacturing industry.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}