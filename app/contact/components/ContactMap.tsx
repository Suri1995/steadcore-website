"use client";

import { useState, useRef, useEffect } from "react";

/* ─── address ─────────────────────────────────────────────────────── */
const ADDRESS =
  "Survey No. 22A1, Ramdaspally, Ibrahimpatnam Mandal, Rangareddy District, Telangana, 501510, India";

/* ─── icons ───────────────────────────────────────────────────────── */
type IP = { className?: string };
const Icon = (d: string) =>
  function I({ className }: IP) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className={className}
        aria-hidden="true" focusable="false">
        <path d={d} />
      </svg>
    );
  };
const IconC = (d: string, extra?: string) =>
  function I({ className }: IP) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
        strokeLinecap="round" strokeLinejoin="round" className={className}
        aria-hidden="true" focusable="false">
        {extra && <circle cx="12" cy="12" r="9" />}
        <path d={d} />
      </svg>
    );
  };

const NavIcon   = Icon("M3 11l19-9-9 19-2-8-8-2Z");
const LinkIcon  = Icon("M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6");
const CopyIcon  = Icon("M9 9h13v13H9zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1");
const CheckIcon = Icon("M20 6 9 17l-5-5");
function PinIcon({ className }: IP) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" className={className}
      aria-hidden="true" focusable="false">
      <path d="M12 21s-7-7.16-7-12a7 7 0 1 1 14 0c0 4.84-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

/* ─── component ───────────────────────────────────────────────────── */
export function ContactMap() {
  const enc    = encodeURIComponent(ADDRESS);
  const dirUrl = `https://www.google.com/maps/dir/?api=1&destination=${enc}`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${enc}`;

  const [loaded,  setLoaded]  = useState(false);
  const [copied,  setCopied]  = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const copy = async () => {
    try { await navigator.clipboard.writeText(ADDRESS); } catch { return; }
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <>
      <style>{`
        /* entrance */
        @keyframes cm-up   { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
        @keyframes cm-in   { from{opacity:0;transform:scale(.97)}       to{opacity:1;transform:none} }
        @keyframes cm-fade { from{opacity:0}                             to{opacity:1}               }
        /* bracket draw */
        @keyframes cm-draw { from{stroke-dashoffset:48} to{stroke-dashoffset:0} }
        /* pin pulse ring */
        @keyframes cm-ring { 0%{transform:scale(.6);opacity:.8} 100%{transform:scale(2.2);opacity:0} }
        /* shimmer */
        @keyframes cm-shim {
          0%  {background-position:-600px 0}
          100%{background-position: 600px 0}
        }
        .cm-shim {
          background:linear-gradient(90deg,
            var(--muted) 25%,
            color-mix(in srgb,var(--muted) 55%,white) 50%,
            var(--muted) 75%);
          background-size:1200px 100%;
          animation:cm-shim 1.8s linear infinite;
        }
        /* staggered reveals */
        .cm-v0 { animation: cm-up   .55s ease .00s both }
        .cm-v1 { animation: cm-up   .55s ease .10s both }
        .cm-v2 { animation: cm-in   .65s ease .20s both }
        .cm-v3 { animation: cm-up   .50s ease .50s both }
        .cm-v4 { animation: cm-fade .50s ease .65s both }
        /* bracket corner draw */
        .cm-bracket { stroke-dasharray:48; stroke-dashoffset:48 }
        .cm-bracket-go { animation: cm-draw .55s cubic-bezier(.4,0,.2,1) .35s forwards }
        @media (prefers-reduced-motion:reduce) {
          .cm-v0,.cm-v1,.cm-v2,.cm-v3,.cm-v4 { animation:none!important;opacity:1!important }
          .cm-bracket-go { animation:none!important;stroke-dashoffset:0!important }
        }
      `}</style>

      <section ref={ref} aria-label="Steadcore Industries location" className="w-full space-y-0">

        {/* ── TOP META BAR ─────────────────────────────────────── */}
        <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 ${visible ? "cm-v0" : "opacity-0"}`}>
          {/* left: eyebrow + title */}
          <div>
            <div className="inline-flex items-center gap-2 mb-2 rounded-[var(--radius-sm)] border border-primary/25 bg-primary/8 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true"/>
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Site Location</span>
            </div>
            <h2 className="font-montserrat text-xl font-bold text-foreground leading-tight">
              Steadcore Industries
              <span className="block text-sm font-normal text-muted-foreground mt-0.5 font-sans">
                Rangareddy District, Telangana
              </span>
            </h2>
          </div>
        </div>

        {/* ── MAP FRAME with registration brackets ─────────────── */}
        <div className={`relative ${visible ? "cm-v2" : "opacity-0"}`}>

          {/* outer card */}
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_4px_40px_-8px_rgba(0,0,0,0.18)] dark:shadow-[0_4px_40px_-8px_rgba(0,0,0,0.55)]">

            {/* shimmer skeleton */}
            {!loaded && (
              <div className="cm-shim absolute inset-0 z-10 pointer-events-none" aria-hidden="true"/>
            )}

            {/* iframe */}
            <iframe
              title="Map showing the location of Steadcore Industries, Survey No. 22A1, Ramdaspally, Ibrahimpatnam Mandal, Rangareddy District, Telangana 501510 India"
              src={`https://maps.google.com/maps?q=${enc}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setLoaded(true)}
              className={`transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
            />

            {/* ── registration corner brackets (SVG overlay) ── */}
            {/* The signature element: PCB-style target corners that draw in on reveal */}
            {(["tl","tr","bl","br"] as const).map((pos) => {
              const isRight  = pos.endsWith("r");
              const isBottom = pos.startsWith("b");
              return (
                <svg
                  key={pos}
                  width="32" height="32" viewBox="0 0 32 32"
                  className={`absolute pointer-events-none z-20 ${isRight ? "right-3" : "left-3"} ${isBottom ? "bottom-3" : "top-3"}`}
                  aria-hidden="true"
                  style={{ transform: `rotate(${isRight && !isBottom ? 90 : isRight && isBottom ? 180 : isBottom ? 270 : 0}deg)` }}
                >
                  {/* horizontal arm */}
                  <line
                    x1="2" y1="2" x2="18" y2="2"
                    stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round"
                    className={`cm-bracket ${visible ? "cm-bracket-go" : ""}`}
                  />
                  {/* vertical arm */}
                  <line
                    x1="2" y1="2" x2="2" y2="18"
                    stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round"
                    className={`cm-bracket ${visible ? "cm-bracket-go" : ""}`}
                    style={{ animationDelay: "0.42s" }}
                  />
                  {/* corner dot */}
                  <circle cx="2" cy="2" r="2" fill="var(--primary)" opacity={loaded ? 1 : 0}
                    style={{ transition: "opacity .4s ease .8s" }}
                  />
                </svg>
              );
            })}

            {/* ── floating address chip ────────────────────────── */}
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-20 ${visible ? "cm-v4" : "opacity-0"}`}>
              <div className="flex items-center gap-2.5 rounded-full border border-border/80 bg-card/90 backdrop-blur-md px-4 py-2 shadow-lg max-w-[90vw]">
                {/* animated pin with pulse ring */}
                <span className="relative flex-shrink-0 w-5 h-5">
                  <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: "2.2s" }} aria-hidden="true"/>
                  <PinIcon className="relative w-5 h-5 text-primary" />
                </span>
                <span className="text-[11px] font-medium text-foreground whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] sm:max-w-xs">
                  Ramdaspally, Ibrahimpatnam Mandal
                </span>
                {/* copy */}
                <button
                  type="button"
                  onClick={copy}
                  aria-label={copied ? "Address copied" : "Copy full address"}
                  className="flex-shrink-0 ml-1 p-1 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {copied
                    ? <CheckIcon className="w-3.5 h-3.5 text-primary"/>
                    : <CopyIcon  className="w-3.5 h-3.5"/>
                  }
                </button>
              </div>
            </div>
          </div>

          {/* faint glow under the card — green left, blue right */}
          <div className="absolute -bottom-4 left-10 right-10 h-8 rounded-full blur-2xl opacity-20 pointer-events-none bg-gradient-to-r from-primary via-transparent to-secondary dark:opacity-30" aria-hidden="true"/>
        </div>

        {/* ── BOTTOM ACTION ROW ─────────────────────────────────── */}
        <div className={`flex flex-col sm:flex-row gap-3 mt-5 ${visible ? "cm-v3" : "opacity-0"}`}>

          {/* address block */}
          <div className="flex-1 flex items-start gap-3 rounded-[var(--radius-lg)] border border-border bg-card px-4 py-3.5">
            <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-[var(--radius-sm)] bg-primary/10 flex items-center justify-center">
              <PinIcon className="w-4 h-4 text-primary"/>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Registered Address</p>
              <address className="not-italic text-xs text-foreground leading-relaxed">
                Survey No. 22A1, Ramdaspally,<br/>
                Ibrahimpatnam Mandal, Rangareddy District,<br/>
                Telangana 501510, India
              </address>
            </div>
          </div>

          {/* CTA stack */}
          <div className="flex flex-row sm:flex-col gap-2 sm:w-40">
            <a
              href={dirUrl}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90 hover:-translate-y-px active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <NavIcon className="w-3.5 h-3.5"/>
              Get Directions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              href={mapUrl}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] border border-secondary/35 dark:border-accent/35 px-4 py-2.5 text-xs font-semibold text-secondary dark:text-accent transition-all duration-200 hover:bg-secondary/8 dark:hover:bg-accent/10 hover:-translate-y-px active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <LinkIcon className="w-3.5 h-3.5"/>
              Open in Maps
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

      </section>
    </>
  );
}