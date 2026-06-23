'use client';

import React, { useState, useMemo, useCallback, memo } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────
type Role = {
  id: string;
  title: string;
  department: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  location: string;
  level: string;
  description: string;
  skills: string[];
};

// ─── Icons (memoized for performance) ──────────────────────────────────
const MapPinIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 21s-7-7.16-7-12a7 7 0 1 1 14 0c0 4.84-7 12-7 12Z"/>
    <circle cx="12" cy="9" r="2.5"/>
  </svg>
));
MapPinIcon.displayName = 'MapPinIcon';

const BriefcaseIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4"/>
  </svg>
));
BriefcaseIcon.displayName = 'BriefcaseIcon';

const MailIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>
  </svg>
));
MailIcon.displayName = 'MailIcon';

const SparklesIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
));
SparklesIcon.displayName = 'SparklesIcon';

const ChevronRightIcon = memo(({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="m9 18 6-6-6-6"/>
  </svg>
));
ChevronRightIcon.displayName = 'ChevronRightIcon';

// ─── Data ──────────────────────────────────────────────────────────────
const roles: Role[] = [
  {
    id: 'pcb-process-engineer',
    title: 'PCB Process Engineer',
    department: 'Manufacturing',
    type: 'Full-time',
    location: 'Ramdaspally, Hyderabad',
    level: 'Mid-level',
    description:
      'Own and optimise the end-to-end manufacturing process for Single-Sided and Double-Sided PCBs. Work directly with production equipment, identify yield issues, and implement process improvements that ship with your name on them.',
    skills: ['PCB fabrication', 'Process optimisation', 'SPC/SQC', 'Gerber files', 'IPC standards'],
  },
  {
    id: 'quality-engineer',
    title: 'Quality Assurance Engineer',
    department: 'Quality',
    type: 'Full-time',
    location: 'Ramdaspally, Hyderabad',
    level: 'Mid-level',
    description:
      'Build and own the quality management systems that ensure every board leaving our facility meets spec. You will define inspection procedures, analyse failures, and drive corrective actions across manufacturing.',
    skills: ['IPC-A-600', 'AOI', 'First Article Inspection', 'Root cause analysis', 'ISO 9001'],
  },
  {
    id: 'production-supervisor',
    title: 'Production Supervisor',
    department: 'Operations',
    type: 'Full-time',
    location: 'Ramdaspally, Hyderabad',
    level: 'Senior',
    description:
      'Lead the production floor team across shifts. You will be responsible for daily output targets, equipment uptime, team coordination, and maintaining the discipline and quality standards the company is built on.',
    skills: ['Production planning', 'Lean manufacturing', 'Team management', 'OEE', 'Shift scheduling'],
  },
  {
    id: 'design-engineer',
    title: 'PCB Design Engineer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Ramdaspally, Hyderabad',
    level: 'Mid-level',
    description:
      'Design and review PCB layouts for customer projects from concept through to fabrication-ready Gerber files. Work closely with customers and the manufacturing team to ensure designs are both electrically sound and manufacturable.',
    skills: ['Altium / KiCad', 'Signal integrity', 'Thermal analysis', 'DFM', 'Schematic review'],
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Executive',
    department: 'Operations',
    type: 'Full-time',
    location: 'Ramdaspally, Hyderabad',
    level: 'Entry–Mid',
    description:
      'Manage procurement of raw materials, coordinate with suppliers, and ensure production always has what it needs — on time, at the right cost. You will build the supply chain function from an early stage.',
    skills: ['Procurement', 'Vendor management', 'ERP systems', 'Inventory control', 'Negotiation'],
  },
  {
    id: 'customer-support',
    title: 'Technical Customer Support',
    department: 'Customer Success',
    type: 'Full-time',
    location: 'Ramdaspally, Hyderabad',
    level: 'Entry–Mid',
    description:
      'Be the first technical point of contact for customer inquiries, quotation requests, and order follow-ups. You will need enough PCB knowledge to translate customer requirements into clear briefs for the engineering and production teams.',
    skills: ['PCB basics', 'Customer communication', 'Quotation preparation', 'Order management', 'Excel'],
  },
  {
    id: 'intern-ee',
    title: 'Engineering Intern — EEE / ECE',
    department: 'Engineering',
    type: 'Internship',
    location: 'Ramdaspally, Hyderabad',
    level: 'Student / Graduate',
    description:
      'A hands-on placement inside a working PCB factory. You will rotate through manufacturing, quality, and design functions — learning how boards are actually made, not just designed on paper. Suited for final-year or recent graduates in EEE or ECE.',
    skills: ['Electronics fundamentals', 'PCB basics', 'Eager to learn', 'JNTU / IIT preferred'],
  },
];

const departments = ['All', 'Manufacturing', 'Quality', 'Operations', 'Engineering', 'Customer Success'];

// ─── Sub-component: RoleCard (memoized) ─────────────────────────────
const RoleCard = memo(({ role, index }: { role: Role; index: number }) => {
  const typeConfig = useMemo(() => {
    const configs = {
      'Full-time': {
        color: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
        dot: 'bg-emerald-500',
      },
      'Contract': {
        color: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
        dot: 'bg-amber-500',
      },
      'Internship': {
        color: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20',
        dot: 'bg-purple-500',
      },
    };
    return configs[role.type] || configs['Full-time'];
  }, [role.type]);

  return (
    <article
      className="group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 focus-within:ring-2 focus-within:ring-primary/20 focus-within:ring-offset-2 focus-within:ring-offset-background"
      aria-labelledby={`role-${role.id}-title`}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* ── Top accent gradient bar ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />

      {/* ── Hover glow effect ── */}
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(11,122,42,0.06), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative p-6">
        {/* ── Badges + title row ── */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${typeConfig.color}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${typeConfig.dot}`} aria-hidden="true"/>
                {role.type}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted text-muted-foreground border border-border">
                {role.department}
              </span>
            </div>
            <h3
              id={`role-${role.id}-title`}
              className="font-montserrat font-bold text-lg text-foreground leading-snug group-hover:text-primary transition-colors duration-200"
            >
              {role.title}
            </h3>
          </div>
          
          {/* ── Icon container ── */}
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:shadow-md">
            <BriefcaseIcon className="w-5 h-5 text-primary" />
          </div>
        </div>

        {/* ── Meta info ── */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPinIcon className="w-3.5 h-3.5" />
            {role.location}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BriefcaseIcon className="w-3.5 h-3.5" />
            {role.level}
          </span>
        </div>

        {/* ── Description ── */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {role.description}
        </p>

        {/* ── Skills ── */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {role.skills.slice(0, 4).map((s) => (
            <span
              key={s}
              className="px-2.5 py-1 rounded-md text-xs font-medium bg-muted/50 text-muted-foreground border border-border/50 hover:border-primary/20 hover:bg-primary/5 transition-colors duration-200"
            >
              {s}
            </span>
          ))}
          {role.skills.length > 4 && (
            <span className="px-2.5 py-1 rounded-md text-xs font-medium text-muted-foreground">
              +{role.skills.length - 4} more
            </span>
          )}
        </div>

        {/* ── CTA ── */}
        <a
          href={`mailto:careers@steadcore.in?subject=Application: ${encodeURIComponent(role.title)}`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          aria-label={`Apply for ${role.title}`}
        >
          <MailIcon className="w-4 h-4" />
          Apply Now
          <ChevronRightIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
});
RoleCard.displayName = 'RoleCard';

// ─── Main Component ──────────────────────────────────────────────────
export const CareersRoles = React.memo(() => {
  const [activeFilter, setActiveFilter] = useState('All');

  // ── Memoized filtered roles ──
  const filteredRoles = useMemo(() => {
    return activeFilter === 'All'
      ? roles
      : roles.filter((r) => r.department === activeFilter);
  }, [activeFilter]);

  // ── Memoized department buttons ──
  const departmentButtons = useMemo(() => 
    departments.map((dept) => ({
      dept,
      isActive: activeFilter === dept,
    }))
  , [activeFilter]);

  // ── Handlers ──
  const handleFilterChange = useCallback((dept: string) => {
    setActiveFilter(dept);
  }, []);

  const handleResetFilter = useCallback(() => {
    setActiveFilter('All');
  }, []);

  return (
    <>
      <style>{`
        @keyframes cr-slide-up {
          from { opacity: 0; transform: translateY(24px) translateZ(0); }
          to { opacity: 1; transform: translateY(0) translateZ(0); }
        }
        @keyframes cr-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .cr-card {
          animation: cr-slide-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
          will-change: transform, opacity;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .cr-header {
          animation: cr-fade-in 0.6s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .cr-card, .cr-header {
            animation: none !important;
            opacity: 1 !important;
          }
        }

        @media (max-width: 640px) {
          .cr-card { animation-duration: 0.35s; }
        }
      `}</style>

      <section
        id="open-roles"
        aria-labelledby="roles-heading"
        className="relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden"
      >
        {/* ── Background decorations ── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-primary/3 blur-3xl" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-secondary/3 blur-3xl" />
          
          <svg className="absolute inset-0 w-full h-full opacity-[0.015]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cr-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="1" fill="currentColor"/>
                <circle cx="60" cy="0" r="1" fill="currentColor"/>
                <circle cx="0" cy="60" r="1" fill="currentColor"/>
                <circle cx="60" cy="60" r="1" fill="currentColor"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cr-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ── Header ── */}
          <div className="cr-header flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-12">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent text-[10px] font-bold uppercase tracking-[0.16em] border border-secondary/20 dark:border-accent/20 mb-4">
                <span className="relative flex w-2 h-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-75 animate-ping"/>
                  <span className="relative inline-flex rounded-full w-2 h-2 bg-current"/>
                </span>
                Open Positions
              </div>

              {/* Heading */}
              <h2
                id="roles-heading"
                className="font-montserrat font-black text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight"
              >
                {filteredRoles.length} role{filteredRoles.length !== 1 ? 's' : ''} available
              </h2>

              {/* Subtitle */}
              <p className="mt-2 text-muted-foreground text-sm sm:text-base">
                Find your perfect role at Steadcore Industries
              </p>
            </div>

            {/* ── Department filters ── */}
            <div
              role="group"
              aria-label="Filter roles by department"
              className="flex flex-wrap gap-1.5 sm:gap-2"
            >
              {departmentButtons.map(({ dept, isActive }) => (
                <button
                  key={dept}
                  type="button"
                  onClick={() => handleFilterChange(dept)}
                  aria-pressed={isActive}
                  className={`
                    px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring
                    ${isActive
                      ? 'bg-primary text-primary-foreground border-primary shadow-sm'
                      : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground hover:bg-muted/50'
                    }
                  `}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* ── Role cards grid ── */}
          {filteredRoles.length > 0 ? (
            <div 
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
              role="list"
            >
              {filteredRoles.map((role, index) => (
                <div key={role.id} className="cr-card">
                  <RoleCard role={role} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div
              role="status"
              className="text-center py-20 rounded-2xl border-2 border-dashed border-border bg-muted/20"
            >
              <div className="flex flex-col items-center gap-4">
                <SparklesIcon className="w-12 h-12 text-muted-foreground/30" />
                <div>
                  <p className="text-muted-foreground text-lg font-medium">No roles in this department</p>
                  <p className="text-muted-foreground text-sm mt-1">We're always looking for talented people</p>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilter}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  View all roles
                  <ChevronRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── Speculative application nudge ── */}
          <div className="mt-10 sm:mt-12 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-primary/10 dark:to-secondary/10 px-6 sm:px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 transition-all hover:shadow-md">
            <div>
              <div className="flex items-center gap-2">
                <SparklesIcon className="w-4 h-4 text-primary" />
                <p className="font-semibold text-foreground text-sm">Don't see your role listed?</p>
              </div>
              <p className="text-sm text-muted-foreground mt-0.5">
                We occasionally hire for roles we haven't posted yet. Send your CV to{' '}
                <a
                  href="mailto:careers@steadcore.in"
                  className="text-primary font-medium underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm transition-colors"
                >
                  careers@steadcore.in
                </a>{' '}
                with a note on what you'd like to do.
              </p>
            </div>
            <a
              href="mailto:careers@steadcore.in?subject=Speculative Application — Steadcore Industries"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-lg border-2 border-primary/30 bg-transparent px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <MailIcon className="w-4 h-4" />
              Send speculative CV
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

CareersRoles.displayName = 'CareersRoles';