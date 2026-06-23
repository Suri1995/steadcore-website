'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatedButton } from '../animated/AnimatedButton';

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* ─────────────────────────────────────────
          HEADER BAR
      ───────────────────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${isScrolled
            ? 'bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(11,122,42,0.10)] border-b border-primary/10'
            : 'bg-white dark:bg-[#0F0F0F]'
          }
        `}
      >
        {/* Green–Blue top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-primary via-secondary to-primary w-full" />

        <nav className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo-2.svg"
                alt="SteadCore Logo"
                width={245}
                height={70}
                className="h-24 w-78 md:w-80 md:h-28"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`
                      relative flex items-center px-4 py-2 rounded-full
                      text-sm font-semibold tracking-wide
                      transition-all duration-200 group
                      ${isActive(item.href)
                        ? 'text-primary bg-primary/10 dark:bg-primary/15'
                        : 'text-foreground/70 dark:text-foreground/60 hover:text-primary hover:bg-primary/8'
                      }
                    `}
                  >
                    {item.label}
                    <span className={`
                      absolute bottom-1.5 left-1/2 -translate-x-1/2
                      h-[2.5px] rounded-full bg-primary
                      transition-all duration-200
                      ${isActive(item.href)
                        ? 'w-4 opacity-100'
                        : 'w-0 opacity-0 group-hover:w-4 group-hover:opacity-100'
                      }
                    `} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-px h-6 bg-primary/20" />
              <AnimatedButton variant="primary" size="sm">
                Get Started
              </AnimatedButton>
            </div>

            {/* Mobile hamburger — only visible on mobile */}
            <button
              className="
                md:hidden flex items-center justify-center
                w-10 h-10 rounded-xl
                bg-primary/8 dark:bg-primary/15
                border border-primary/20
                text-primary
                transition-all duration-200
                hover:bg-primary/15 active:scale-95
              "
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* ─────────────────────────────────────────
          MOBILE DRAWER + BACKDROP
          Rendered outside <header> so it never
          bleeds logos or clips content
      ───────────────────────────────────────── */}

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
        className={`
          fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px]
          md:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`
          fixed top-0 right-0 bottom-0 z-[70]
          w-[80vw] max-w-[300px]
          bg-white dark:bg-[#111111]
          flex flex-col
          md:hidden
          shadow-[-4px_0_40px_rgba(0,0,0,0.18)]
        `}
        style={{
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Drawer top accent */}
        <div className="h-[3px] bg-gradient-to-r from-primary via-secondary to-primary w-full flex-shrink-0" />

        {/* Drawer top bar — title + close button ONLY, no logo */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-primary/10 flex-shrink-0">
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-foreground/40">
            Menu
          </span>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
            className="
              flex items-center justify-center
              w-9 h-9 rounded-xl
              bg-primary/8 border border-primary/15
              text-primary
              transition-all duration-200
              hover:bg-primary/15 active:scale-95
            "
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <Link
  href={item.href}
  onClick={() => setIsMobileMenuOpen(false)}
  className={`
    flex items-center gap-3 px-4 py-3.5 rounded-xl
    text-[15px] font-medium
    ${isActive(item.href)
      ? 'text-primary bg-primary/10 dark:bg-primary/15'
      : 'text-foreground/75 dark:text-foreground/60 hover:text-primary hover:bg-primary/8 dark:hover:bg-primary/12'
    }
  `}
  style={{
    opacity: isMobileMenuOpen ? 1 : 0,
    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(12px)',
    transition: `opacity 0.3s ease ${80 + i * 40}ms, transform 0.3s ease ${80 + i * 40}ms, all 0.2s ease`,
  }}
>
                  {/* Active dot */}
                  <span
                    className={`
                      w-[7px] h-[7px] rounded-full flex-shrink-0
                      transition-all duration-200
                      ${isActive(item.href)
                        ? 'bg-primary scale-100'
                        : 'bg-transparent scale-50 border border-primary/30'
                      }
                    `}
                  />
                  <span className="flex-1">{item.label}</span>
                  {/* Chevron */}
                  <svg className="w-4 h-4 text-primary/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}