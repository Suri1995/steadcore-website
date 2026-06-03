'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollReveal } from '@/components/animated/ScrollReveal';
import { GradientCard } from '@/components/animated/GradientCard';

export default function ServicesPage() {
  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Services Hero */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6">
                Our <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Comprehensive PCB manufacturing and design services tailored to your unique requirements
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'PCB Design Support',
                description: 'Expert design consultation and optimization for your specific applications and requirements',
                features: ['Design Review', 'Layout Optimization', 'DFM Analysis']
              },
              {
                title: 'Rapid Prototyping',
                description: 'Fast turnaround PCB prototypes to accelerate your product development cycle',
                features: ['5-10 Day Turnaround', 'Flexible Quantities', 'Full Testing']
              },
              {
                title: 'Volume Production',
                description: 'High-volume manufacturing with consistent quality and competitive pricing',
                features: ['Scalable Production', 'Quality Control', 'Cost Optimization']
              },
              {
                title: 'Assembly Services',
                description: 'Complete PCB assembly with component sourcing and soldering options',
                features: ['Component Sourcing', 'Through-Hole', 'Surface Mount']
              },
              {
                title: 'Testing & Certification',
                description: 'Comprehensive testing and certification services to meet industry standards',
                features: ['Electrical Testing', 'AOI Inspection', 'Functional Testing']
              },
              {
                title: 'Technical Support',
                description: '24/7 dedicated technical support team for all your manufacturing needs',
                features: ['Expert Consultation', 'Problem Solving', 'Quality Assurance']
              }
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <GradientCard className="p-8 h-full">
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat text-center mb-16">
              Our <span className="gradient-text">Process</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Consultation', desc: 'Discuss your requirements and specifications' },
              { num: '2', title: 'Design Review', desc: 'Review and optimize your design files' },
              { num: '3', title: 'Manufacturing', desc: 'Precision fabrication with quality control' },
              { num: '4', title: 'Delivery', desc: 'Quick shipping with tracking' }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <div className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center h-full">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                      {step.num}
                    </div>
                    <h4 className="font-bold font-montserrat mb-2 text-slate-900 dark:text-white">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {step.desc}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-2xl text-primary">
                      →
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
