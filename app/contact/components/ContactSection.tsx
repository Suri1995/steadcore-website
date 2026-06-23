"use client";

import { useState, FormEvent, ChangeEvent } from "react";

/* ─────────────────────────────────────────────
   Inline SVG icons (no external dependency)
───────────────────────────────────────────── */
type IconProps = { className?: string };

function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M12 21s-7-7.16-7-12a7 7 0 1 1 14 0c0 4.84-7 12-7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}
function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9S9.5 5.6 12 3Z" />
    </svg>
  );
}
function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 3 3 5-5" />
    </svg>
  );
}
function SendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true" focusable="false">
      <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Types & constants
───────────────────────────────────────────── */
type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  website: string; // honeypot
};
type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  name: "", email: "", phone: "", company: "",
  subject: "", message: "", website: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_INFO = [
  {
    Icon: PinIcon,
    label: "Address",
    content: (
      <address className="not-italic text-white/85 leading-relaxed text-sm">
        Survey No. 22A1, Ramdaspally,<br />
        Ibrahimpatnam Mandal,<br />
        Rangareddy District, Telangana, 501510, India
      </address>
    ),
  },
  {
    Icon: PhoneIcon,
    label: "Phone",
    content: (
      <a href="tel:+917233022460" className="text-white/85 hover:text-white transition-colors underline-offset-4 hover:underline text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-sm">
        +91 72330 22460
      </a>
    ),
  },
  {
    Icon: MailIcon,
    label: "Email",
    content: (
      <a href="mailto:info@steadcore.in" className="text-white/85 hover:text-white transition-colors underline-offset-4 hover:underline text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-sm">
        info@steadcore.in
      </a>
    ),
  },
  {
    Icon: ClockIcon,
    label: "Business Hours",
    content: (
      <p className="text-white/85 leading-relaxed text-sm">
        Monday – Saturday: 9:00 AM – 6:00 PM<br />
        Sunday: Closed
      </p>
    ),
  },
] as const;

/* Shared input style — uses your design-system tokens */
const inputBase =
  "w-full px-4 py-2.5 rounded-[var(--radius-md)] border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 text-sm";

const errorBase = "mt-1.5 text-xs text-destructive flex items-center gap-1";

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
export function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors]     = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted]       = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim())    next.name    = "Please enter your full name.";
    if (!formData.email.trim())   next.email   = "Please enter your email address.";
    else if (!EMAIL_PATTERN.test(formData.email.trim()))
                                  next.email   = "Please enter a valid email address.";
    if (!formData.subject)        next.subject = "Please select a subject.";
    if (!formData.message.trim()) next.message = "Please enter a message.";
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.website) { setSubmitted(true); return; } // honeypot
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }
    setIsSubmitting(true);
    try {
      // TODO: replace with real API call
      await new Promise((r) => setTimeout(r, 900));
      setSubmitted(true);
      setFormData(initialFormData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-10">
      <div className="rounded-2xl overflow-hidden border border-border shadow-xl grid lg:grid-cols-5">

        {/* ── Left panel: contact info ─────────────────────────────── */}
        <aside
          className="lg:col-span-2 relative flex flex-col overflow-hidden px-8 py-10 md:px-10 md:py-12"
          style={{ background: "linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)" }}
          aria-label="Steadcore Industries contact information"
        >
          {/* Subtle PCB-grid watermark */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
            viewBox="0 0 200 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern id="pcb-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" stroke="white" strokeWidth="0.5" fill="none"/>
                <circle cx="20" cy="20" r="2.5" fill="white"/>
                <circle cx="0"  cy="0"  r="1.5" fill="white"/>
                <circle cx="40" cy="0"  r="1.5" fill="white"/>
                <circle cx="0"  cy="40" r="1.5" fill="white"/>
                <circle cx="40" cy="40" r="1.5" fill="white"/>
              </pattern>
            </defs>
            <rect width="200" height="400" fill="url(#pcb-grid)" />
          </svg>

          {/* Header */}
          <div className="relative z-10 mb-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              Steadcore Industries
            </p>
            <h2 className="text-2xl font-bold font-montserrat text-white">
              Contact Information
            </h2>
            {/* thin primary-tinted rule */}
            <span className="mt-3 block h-[2px] w-10 rounded-full bg-white/30" aria-hidden="true" />
          </div>

          {/* Info list */}
          <dl className="relative z-10 space-y-6 flex-1">
            {CONTACT_INFO.map(({ Icon, label, content }) => (
              <div key={label} className="flex gap-4 group">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-[var(--radius-sm)] bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-0.5">
                    {label}
                  </dt>
                  <dd>{content}</dd>
                </div>
              </div>
            ))}
          </dl>

          {/* Bottom accent strip */}
          <div className="relative z-10 mt-10 pt-6 border-t border-white/15">
            <p className="text-xs text-white/50 leading-relaxed">
              We aim to respond to all inquiries within 24 hours during business days.
            </p>
          </div>
        </aside>

        {/* ── Right panel: form ────────────────────────────────────── */}
        <div className="lg:col-span-3 bg-card px-8 py-10 md:px-10 md:py-12">

          {submitted ? (
            /* ── Success state ── */
            <div
              role="status"
              aria-live="polite"
              className="h-full flex flex-col items-center justify-center text-center gap-4 py-12"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircleIcon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-montserrat text-xl font-bold text-card-foreground">
                Message Sent!
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                Thank you for reaching out. Our team will get back to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline underline-offset-4 hover:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring rounded-sm transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div className="mb-8">
                <h2 className="font-montserrat text-2xl font-bold text-card-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Fields marked{" "}
                  <span aria-hidden="true" className="text-destructive font-medium">*</span>
                  <span className="sr-only">(required)</span>{" "}
                  are required.
                </p>
              </div>

              {/* Honeypot — hidden from real users */}
              <div className="absolute -left-[9999px] w-px h-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" value={formData.website} onChange={handleChange} />
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                {/* Row 1: Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Full Name <span aria-hidden="true" className="text-destructive">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange}
                      required aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={inputBase}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className={errorBase}>
                        <span aria-hidden="true">⚠</span>{errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Email Address <span aria-hidden="true" className="text-destructive">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange}
                      required aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={inputBase}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className={errorBase}>
                        <span aria-hidden="true">⚠</span>{errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel" id="phone" name="phone"
                      value={formData.phone} onChange={handleChange}
                      className={inputBase}
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-card-foreground mb-1.5">
                      Company
                    </label>
                    <input
                      type="text" id="company" name="company"
                      value={formData.company} onChange={handleChange}
                      className={inputBase}
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                {/* Row 3: Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-1.5">
                    Subject <span aria-hidden="true" className="text-destructive">*</span>
                  </label>
                  <select
                    id="subject" name="subject"
                    value={formData.subject} onChange={handleChange}
                    required aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={inputBase}
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.subject && (
                    <p id="subject-error" role="alert" className={errorBase}>
                      <span aria-hidden="true">⚠</span>{errors.subject}
                    </p>
                  )}
                </div>

                {/* Row 4: Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-1.5">
                    Message <span aria-hidden="true" className="text-destructive">*</span>
                  </label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange}
                    required aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    rows={5}
                    className={`${inputBase} resize-none`}
                    placeholder="Tell us about your PCB project or inquiry…"
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className={errorBase}>
                      <span aria-hidden="true">⚠</span>{errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className={[
                    "w-full inline-flex items-center justify-center gap-2",
                    "rounded-[var(--radius-md)] px-6 py-3",
                    "bg-primary text-primary-foreground",
                    "text-sm font-semibold",
                    "transition-all duration-200",
                    "hover:opacity-90 hover:-translate-y-px",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    "active:scale-[0.98]",
                    "disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0",
                  ].join(" ")}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <SendIcon className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}