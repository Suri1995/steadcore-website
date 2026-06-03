'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollReveal } from '@/components/animated/ScrollReveal';
import { GradientCard } from '@/components/animated/GradientCard';
import { AnimatedButton } from '@/components/animated/AnimatedButton';
import Link from 'next/link';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <main className="w-full overflow-hidden">
      <Header />
      
      {/* Products Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 animate-slide-up">
                Our <span className="gradient-text">PCB Products</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Choose from our comprehensive range of professionally manufactured circuit boards designed for every application requirement
              </p>
            </div>
          </ScrollReveal>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.1}>
                <div className="group h-full flex flex-col">
                  <GradientCard className="flex-1 flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">
                        {product.name}
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                        {product.shortDescription}
                      </p>

                      {/* Features Preview */}
                      <div className="mb-6 space-y-2">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1 flex-shrink-0">✓</span>
                            <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <Link href={`/products/${product.id}`} className="inline-block">
                      <AnimatedButton variant="primary" size="md" className="w-full">
                        View Details
                      </AnimatedButton>
                    </Link>
                  </GradientCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-center mb-16">
              Why Choose Our <span className="gradient-text">PCBs?</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Precision Manufacturing',
                description: 'State-of-the-art equipment ensures accurate trace widths, spacing, and hole placement for reliable performance'
              },
              {
                title: 'Quality Assurance',
                description: 'Every board undergoes rigorous testing to meet international standards including IPC-6012 and ISO 9001'
              },
              {
                title: 'Fast Turnaround',
                description: 'Efficient production processes deliver boards quickly without compromising on quality or precision'
              },
              {
                title: 'Competitive Pricing',
                description: 'Optimized manufacturing techniques allow us to offer premium quality at competitive market rates'
              }
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg smooth-transition hover-lift">
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
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
