'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '../animated/ScrollReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: 'Single Layer PCB', href: '#' },
      { label: 'Double-Layer PCB', href: '#' },
      { label: 'Metal Clad PCB', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#' },
    ],
  };

  const socials = [
    {
      label: 'LinkedIn',
      href: '#',
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: 'Twitter',
      href: '#',
      icon: (
        <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: '#',
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: '#',
      icon: (
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '50+', label: 'Enterprise Clients' },
    { value: '99%', label: 'Quality Rate' },
    { value: '12+', label: 'Years Experience' },
  ];

  return (
    <footer className="relative bg-[#0F0F0F] text-[#D9D9D9] overflow-hidden">

      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M10 10 h20 v20 h20 M50 10 v40 M10 50 h40 M70 10 v60 M10 70 h60" stroke="#0B7A2A" strokeWidth="0.8" fill="none" />
              <circle cx="10" cy="10" r="2" fill="#0B7A2A" />
              <circle cx="50" cy="10" r="2" fill="#003B8E" />
              <circle cx="70" cy="10" r="2" fill="#0B7A2A" />
              <circle cx="10" cy="50" r="2" fill="#003B8E" />
              <circle cx="50" cy="50" r="2" fill="#0B7A2A" />
              <circle cx="70" cy="70" r="2" fill="#003B8E" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8 sm:pb-10">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">

          {/* Brand column — full width on mobile, 2 cols on lg */}
          <div className="col-span-2 lg:col-span-2">
            <ScrollReveal animation="slide-up" delay={0}>
              <div className="flex flex-col gap-5">

                {/* Logo on white pill — always visible */}
                <div className="inline-flex w-fit">
                  <div className="bg-white rounded-xl px-4 py-2.5 shadow-[0_2px_16px_rgba(11,122,42,0.20)] transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/logo.webp"
                      alt="SteadCore Industries"
                      width={200}
                      height={58}
                      className="h-16 w-64"
                    />
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#999999] max-w-xs">
                  Leading PCB manufacturing solutions built for the future of electronics — precision-engineered, performance-certified.
                </p>

                {/* Contact */}
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="mailto:info@steadcore.com"
                    className="flex items-center gap-2 text-[#999999] hover:text-primary transition-all duration-200 group hover:translate-x-1"
                  >
                    <span className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
                      <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    info@steadcore.in
                  </a>
                  <a
                    href="tel:+917233022460"
                    className="flex items-center gap-2 text-[#999999] hover:text-primary transition-all duration-200 group hover:translate-x-1"
                  >
                    <span className="w-7 h-7 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-200">
                      <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-secondary">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    +917233022460
                  </a>
                </div>

                {/* Socials - enhanced hover effects */}
                <div className="flex items-center gap-2.5">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#999999] hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Link columns — 1 col each (2-up on mobile, 4-up on lg) */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <div key={category} className="col-span-1">
              <ScrollReveal animation="slide-up" delay={(idx + 1) * 60}>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="w-[3px] h-5 rounded-full bg-gradient-to-b from-primary to-secondary flex-shrink-0" />
                    <h4 className="text-sm font-bold font-heading uppercase tracking-[0.12em] text-white">
                      {category}
                    </h4>
                  </div>
                  <ul className="flex flex-col gap-2.5 list-none m-0 p-0">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1.5 text-sm text-[#888888] hover:text-primary transition-all duration-200 hover:translate-x-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-transparent group-hover:bg-primary group-hover:w-1.5 group-hover:h-1.5 transition-all duration-200 flex-shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          ))}

          {/* Newsletter Section - New for desktop/tablet */}
          <div className="col-span-2 lg:col-span-1 hidden lg:block">
            <ScrollReveal animation="slide-up" delay={180}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-[3px] h-5 rounded-full bg-gradient-to-b from-secondary to-primary flex-shrink-0" />
                  <h4 className="text-sm font-bold font-heading uppercase tracking-[0.12em] text-white">
                    Stay Updated
                  </h4>
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Get the latest updates on PCB technology and industry insights.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-xs bg-white/[0.05] border border-white/[0.08] rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-primary transition-all duration-200"
                  />
                  <button className="px-3 py-2 text-xs bg-primary hover:bg-primary/80 text-white rounded-lg transition-all duration-200 hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <ScrollReveal animation="fade-in" delay={0}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555555]">
              <p>
                &copy; {currentYear}{' '}
                <span className="text-[#888888] font-medium">SteadCore Industries</span>
                . All rights reserved.
              </p>
              <div className="flex items-center gap-4 flex-wrap justify-center">
                {(['Privacy Policy', 'Terms', 'Compliance'] as const).map((item, i, arr) => (
                  <React.Fragment key={item}>
                    <Link href="#" className="hover:text-primary transition-colors duration-200 hover:translate-y-[-1px] inline-block">
                      {item}
                    </Link>
                    {i < arr.length - 1 && (
                      <span className="w-px h-3 bg-white/[0.12]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
              <p className="flex items-center gap-1.5">
                Crafted with
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-primary animate-pulse">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                for innovation
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-secondary via-primary to-secondary opacity-60" />

    </footer>
  );
}