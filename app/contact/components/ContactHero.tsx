"use client";

import { useRef } from "react";

const CHIPS = [
  { icon: "📦", label: "Product Information" },
  { icon: "🔧", label: "Technical Assistance" },
  { icon: "📋", label: "Project Consultation" },
  { icon: "🧾", label: "Quotations" },
  { icon: "🤝", label: "Partnerships" },
] as const;

const STATS = [
  { value: "24h", label: "Response Time" },
  { value: "ISO", label: "Certified Quality" },
  { value: "Custom", label: "PCB Solutions" },
] as const;

export function ContactHero() {
  const svgRef = useRef<SVGSVGElement>(null);

  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-12 sm:pt-40 sm:pb-20"
      aria-labelledby="contact-hero-heading"
    >
      {/* ── Circuit-trace SVG background ──────────────────────────────── */}
      {!prefersReduced && (
        <svg
          ref={svgRef}
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06] dark:opacity-[0.10]"
          viewBox="0 0 900 300"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          focusable="false"
        >
          <style>{`
            @keyframes drawTrace { to { stroke-dashoffset: 0; } }
            .trace-a {
              stroke-dasharray: 600;
              stroke-dashoffset: 600;
              animation: drawTrace 2.4s cubic-bezier(.4,0,.2,1) .5s forwards;
            }
            .trace-b {
              stroke-dasharray: 400;
              stroke-dashoffset: 400;
              animation: drawTrace 2s cubic-bezier(.4,0,.2,1) 1.1s forwards;
            }
          `}</style>
          {/* Primary (green) trace — top */}
          <path
            className="trace-a"
            d="M0,80 L80,80 L80,180 L200,180 L200,120 L350,120
               L350,200 L500,200 L500,140 L640,140 L640,60
               L760,60 L760,160 L900,160"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="1.5"
          />
          {([
            [80, 80], [200, 180], [350, 120],
            [500, 200], [640, 140], [760, 60],
          ] as [number, number][]).map(([cx, cy]) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx} cy={cy} r={4}
              fill="var(--primary)"
              opacity={0.55}
            />
          ))}
          {/* Secondary (blue) trace — bottom */}
          <path
            className="trace-b"
            d="M0,240 L120,240 L120,180 L260,180 L260,260
               L450,260 L450,190 L600,190 L600,240 L780,240 L780,180 L900,180"
            fill="none"
            stroke="var(--secondary)"
            strokeWidth="1"
          />
          {([
            [120, 240], [260, 180], [450, 260], [600, 190], [780, 240],
          ] as [number, number][]).map(([cx, cy]) => (
            <circle
              key={`s-${cx}-${cy}`}
              cx={cx} cy={cy} r={3}
              fill="var(--secondary)"
              opacity={0.45}
            />
          ))}
        </svg>
      )}

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-10 text-center">

        {/* Eyebrow — primary tinted badge */}
        <div
          className={[
            "mb-7 inline-flex items-center gap-2 rounded-[var(--radius-sm)] border px-3.5 py-1.5",
            "text-[11px] font-semibold uppercase tracking-[0.12em]",
            "border-primary/25 bg-primary/10 text-primary",
            !prefersReduced && "animate-[fadeUp_.55s_ease_.05s_both]",
          ].join(" ")}
        >
          <span
            className={[
              "h-2 w-2 rounded-full bg-primary",
              !prefersReduced && "animate-[pulse_2.4s_ease-in-out_.7s_infinite]",
            ].join(" ")}
            aria-hidden="true"
          />
          PCB Manufacturing Specialists
        </div>

        {/* Heading */}
        <h1
          id="contact-hero-heading"
          className={[
            "mb-6 font-montserrat text-5xl font-extrabold leading-[1.08]",
            "tracking-tight text-foreground md:text-6xl",
            !prefersReduced && "animate-[fadeUp_.6s_ease_.18s_both]",
          ].join(" ")}
        >
          Get In{" "}
          {/* "Touch" in primary green with animated underline */}
          <span className="relative inline-block text-primary after:absolute after:bottom-[2px] after:left-0 after:right-0 after:h-[3px] after:rounded-sm after:bg-primary after:origin-left after:scale-x-0 after:[animation:underlineIn_.55s_cubic-bezier(.4,0,.2,1)_.78s_forwards]">
            Touch
          </span>
        </h1>

        {/* Divider — secondary blue icon */}
        <div
          className={[
            "mx-auto mb-7 flex max-w-[200px] items-center gap-3",
            !prefersReduced && "animate-[fadeUp_.5s_ease_.35s_both]",
          ].join(" ")}
          aria-hidden="true"
        >
          <span className="h-px flex-1 bg-border" />
          <svg
            width="16" height="16" viewBox="0 0 24 24"
            fill="none" stroke="var(--secondary)" strokeWidth="1.8"
            aria-hidden="true"
          >
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M4 9h4M16 9h4M4 15h4M16 15h4M9 4v4M9 16v4M15 4v4M15 16v4" />
          </svg>
          <span className="h-px flex-1 bg-border" />
        </div>

        {/* Lead paragraph */}
        <p
          className={[
            "mx-auto mb-5 max-w-6xl text-lg leading-[1.75] text-muted-foreground md:text-xl",
            !prefersReduced && "animate-[fadeUp_.55s_ease_.45s_both]",
          ].join(" ")}
        >
          We would be pleased to hear from you and discuss how Steadcore
          Industries can support your PCB manufacturing requirements. Whether you
          need product information, technical assistance, project consultation, or
          a customized PCB solution, our team is ready to assist you. 
          We are committed to providing prompt responses, professional support,
          and reliable service to help meet your business needs for inquiries,
          quotations, partnerships, or any information regarding our products and
          manufacturing capabilities.
        </p>
      </div>
    </section>
  );
}