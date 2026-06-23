'use client';

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}
function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>
    </svg>
  );
}

const values = ['Quality', 'Reliability', 'Innovation', 'Service'];

export function CareersCTA() {
  return (
    <>
      {/* Values strip */}
      <div
        className="bg-background border-y border-border py-5"
        aria-label="Company values"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground flex-shrink-0">
              Our promise
            </p>
            {values.map((v, i) => (
              <span
                key={v}
                className={[
                  'inline-flex items-center gap-1.5 text-sm font-semibold',
                  i % 2 === 0 ? 'text-primary' : 'text-secondary dark:text-accent',
                ].join(' ')}
              >
                <span className="w-1 h-1 rounded-full bg-current" aria-hidden="true"/>
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section
        aria-labelledby="careers-cta-heading"
        className="py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-2xl overflow-hidden px-8 py-14 sm:px-14 text-center"
            style={{
              background: 'linear-gradient(135deg, #071d0e 0%, #071428 55%, #081820 100%)',
              boxShadow: '0 0 0 1px rgba(11,122,42,0.2), 0 24px 80px -12px rgba(0,0,0,0.5)',
            }}
          >
            {/* PCB grid watermark */}
            <svg
              className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.06]"
              aria-hidden="true"
            >
              <defs>
                <pattern id="cta-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="white" strokeWidth="0.5"/>
                  <circle cx="0" cy="0" r="1.5" fill="white"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)"/>
            </svg>

            <div className="relative z-10">
              <h2
                id="careers-cta-heading"
                className="font-montserrat font-black text-white leading-tight tracking-tight mb-4"
                style={{ fontSize: 'clamp(24px, 5vw, 48px)' }}
              >
                Ready to build something real?
              </h2>
              <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed mb-8">
                Send your CV to{' '}
                <a
                  href="mailto:careers@steadcore.in"
                  className="text-white/90 underline underline-offset-4 hover:text-white hover:no-underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-sm"
                >
                  careers@steadcore.in
                </a>
                . Tell us what you want to build, not just what you've done.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="#open-roles"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  View open roles
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:careers@steadcore.in"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-px active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  <MailIcon className="w-4 h-4" />
                  Email us directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}