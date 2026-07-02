'use client';

const steps = [
  {
    step: '01',
    title: 'Apply by email',
    desc: "Send your CV and a short note on why this role specifically to careers@steadcore.in. No cover letter templates — just tell us what you've actually done and what you want to do next.",
  },
  {
    step: '02',
    title: 'Technical screening call',
    desc: "A 30-minute call with a member of the relevant team. We'll ask practical questions about your work — no trick questions or theoretical puzzles.",
  },
  {
    step: '03',
    title: 'On-site visit',
    desc: "Come to Ramdaspally, walk the production floor, and meet the team. You'll have a working session relevant to the role and a conversation with Managing Director.",
  },
  {
    step: '04',
    title: 'Offer',
    desc: "If we're a match, we make a direct, written offer within 5 working days of the visit. No drawn-out committee rounds.",
  },
];

export function CareersProcess() {
  return (
    <section
      aria-labelledby="process-heading"
      className="py-20 bg-primary/5 dark:bg-primary/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.14em] border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true"/>
            How to Apply
          </span>
          <h2
            id="process-heading"
            className="font-montserrat font-black text-3xl sm:text-4xl md:text-5xl text-foreground tracking-tight"
          >
            A straightforward process
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            We keep it short. You should know where you stand within two weeks of applying.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">

          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-[26px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-primary/50 to-secondary/30 pointer-events-none"
            aria-hidden="true"
          />

          {steps.map(({ step, title, desc }) => (
            <div key={step} className="relative group flex flex-col items-center sm:items-start lg:items-center text-center sm:text-left lg:text-center">

              {/* Node */}
              <div className="relative mb-5 z-10">
                <div
                  className="w-[52px] h-[52px] rounded-full border-2 border-primary bg-card flex items-center justify-center shadow-sm group-hover:bg-primary transition-all duration-200"
                >
                  <span className="font-montserrat font-black text-sm text-primary group-hover:text-primary-foreground transition-colors duration-200">
                    {step}
                  </span>
                </div>
                {/* Outer glow ring on hover */}
                <span
                  className="absolute inset-[-5px] rounded-full border border-primary/0 group-hover:border-primary/20 transition-all duration-200"
                  aria-hidden="true"
                />
              </div>

              <h3 className="font-montserrat font-bold text-base text-foreground mb-2 leading-snug">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Questions before applying?{' '}
            <a
              href="mailto:careers@steadcore.in"
              className="text-primary font-medium underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm"
            >
              Email careers@steadcore.in
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}