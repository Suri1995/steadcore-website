'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollReveal } from '@/components/animated/ScrollReveal';
import { GradientCard } from '@/components/animated/GradientCard';
import { AnimatedButton } from '@/components/animated/AnimatedButton';

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* About Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                About <span className="gradient-text">PCBTech</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Leading PCB manufacturing company with decades of expertise in delivering high-quality circuit board solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <ScrollReveal>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=600&fit=crop"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold font-montserrat mb-6">Our Story</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  Founded with a vision to revolutionize PCB manufacturing, PCBTech has been at the forefront of innovation for over two decades. We combine cutting-edge technology with time-tested manufacturing practices to deliver superior quality boards.
                </p>
                <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                  Our commitment to excellence, customer satisfaction, and continuous improvement has made us a trusted partner for businesses worldwide, from startups to Fortune 500 companies.
                </p>

                <div className="space-y-4">
                  {[
                    'Precision Engineering & Quality Control',
                    'State-of-the-Art Manufacturing Equipment',
                    'ISO 9001:2015 Certified Operations',
                    'Environmental Responsibility'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-primary font-bold text-lg">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat text-center mb-16">
              Our <span className="gradient-text">Mission & Values</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every board is manufactured with precision and tested rigorously to exceed industry standards'
              },
              {
                title: 'Innovation',
                description: 'Continuous investment in technology and processes to stay ahead of market demands'
              },
              {
                title: 'Partnership',
                description: 'Building long-term relationships through reliable delivery and exceptional customer service'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <GradientCard className="p-8">
                  <h3 className="text-xl font-bold font-montserrat mb-4 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat text-center mb-16">
              Our <span className="gradient-text">Expert Team</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'Manufacturing', experience: '20+ years', desc: 'Expert engineers with extensive PCB production experience' },
              { role: 'Quality Assurance', experience: '18+ years', desc: 'Rigorous testing and certification specialists' },
              { role: 'Technical Support', experience: '15+ years', desc: 'Dedicated professionals for customer success' }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg smooth-transition text-center">
                  <p className="text-primary font-bold text-lg mb-2">{item.role}</p>
                  <p className="text-2xl font-bold font-montserrat mb-2 text-slate-900 dark:text-white">
                    {item.experience}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat mb-6">Ready to Partner With Us?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Get in touch with our team today and discover why we're the preferred PCB manufacturer for businesses worldwide
            </p>
            <a href="/contact">
              <AnimatedButton variant="primary" size="lg">
                Contact Us Today
              </AnimatedButton>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
