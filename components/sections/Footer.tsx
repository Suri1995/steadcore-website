'use client';

import React from 'react';
import { ScrollReveal } from '../animated/ScrollReveal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Products: [
      { label: 'Single Layer PCB', href: '#' },
      { label: 'Multi-Layer PCB', href: '#' },
      { label: 'HDI PCB', href: '#' },
      { label: 'Flexible PCB', href: '#' },
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
    ],
    Support: [
      { label: 'Documentation', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Blog', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Compliance', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <ScrollReveal animation="slide-up" delay={0}>
            <div className="md:col-span-1">
              <div className="mb-4">
                <h3 className="text-2xl font-bold font-montserrat">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    PCB
                  </span>
                  Tech
                </h3>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Leading PCB manufacturing solutions for the future of electronics.
              </p>
              {/* Social Links */}
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary smooth-transition flex items-center justify-center text-sm font-bold"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <ScrollReveal
              key={category}
              animation="slide-up"
              delay={(idx + 1) * 50}
            >
              <div>
                <h4 className="font-bold font-montserrat mb-4 text-white">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-primary smooth-transition"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom Section */}
        <ScrollReveal animation="fade-in" delay={0}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-slate-400 mb-4 md:mb-0">
              &copy; {currentYear} PCBTech Inc. All rights reserved.
            </p>
            <div className="text-sm text-slate-400">
              Made with <span className="text-primary">❤️</span> for innovation
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
