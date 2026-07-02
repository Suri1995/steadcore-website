'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { AboutHero } from './components/AboutHero';
import { AboutStory } from './components/AboutStory';
import { AboutTimeline } from './components/AboutTimeline';
import { AboutLeadership } from './components/AboutLeadership';
import { AboutValues } from './components/AboutValues';
import { AboutCertifications } from './components/AboutCertifications';
import { AboutCTA } from './components/AboutCTA';

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-slate-950">
      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <Header />
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutLeadership />
      <AboutValues />
      {/* <AboutCertifications /> */}
      <AboutCTA />
      <Footer />
    </main>
  );
}