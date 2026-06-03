import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { About } from '@/components/sections/About';
import { Infrastructure } from '@/components/sections/Infrastructure';
import { Testimonials } from '@/components/sections/Testimonials';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/sections/Footer';

export const metadata = {
  title: 'Home - PCB Manufacturing Solutions',
  description: 'Leading PCB manufacturer providing single-sided, double-sided, and metal-clad PCBs with advanced technology and precision.',
};

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <About />
      <Infrastructure />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
