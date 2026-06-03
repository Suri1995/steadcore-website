'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ScrollReveal } from '@/components/animated/ScrollReveal';
import { GradientCard } from '@/components/animated/GradientCard';
import { AnimatedButton } from '@/components/animated/AnimatedButton';
import { AnimatedCounter } from '@/components/animated/AnimatedCounter';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products, getProductById } from '@/lib/products';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = getProductById(productId);

  if (!product) {
    return (
      <main className="w-full overflow-hidden">
        <Header />
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold font-montserrat mb-4">Product Not Found</h1>
            <p className="text-slate-600 dark:text-slate-400 mb-8">The product you're looking for doesn't exist.</p>
            <Link href="/products">
              <AnimatedButton variant="primary" size="lg">
                Back to Products
              </AnimatedButton>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id);

  return (
    <main className="w-full overflow-hidden">
      <Header />

      {/* Product Hero */}
      <section className="min-h-[600px] flex items-center justify-center relative overflow-hidden pt-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10`}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20`}></div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.2}>
              <div>
                <p className="text-primary font-montserrat font-bold text-sm mb-3">OUR PRODUCTS</p>
                <h1 className="text-5xl md:text-6xl font-bold font-montserrat mb-6 text-slate-900 dark:text-white">
                  {product.title}
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  {product.description}
                </p>

                <div className="flex gap-4 mb-8">
                  <Link href="/contact">
                    <AnimatedButton variant="primary" size="lg">
                      Request Quote
                    </AnimatedButton>
                  </Link>
                  <Link href="/products">
                    <AnimatedButton variant="secondary" size="lg">
                      View All Products
                    </AnimatedButton>
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-slate-200 dark:border-slate-700">
                  {[
                    { label: 'Production Quality', value: '99.9%' },
                    { label: 'Lead Time', value: '5-10 days' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <p className="text-primary font-bold text-2xl">{stat.value}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat mb-12 text-center">
              Key <span className="gradient-text">Features</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <GradientCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                    <div>
                      <p className="text-slate-900 dark:text-white font-medium">{feature}</p>
                    </div>
                  </div>
                </GradientCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat mb-12 text-center">
              Technical <span className="gradient-text">Specifications</span>
            </h2>
          </ScrollReveal>

          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody>
                {product.specifications.map((spec, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-200 dark:border-slate-700 ${
                      i % 2 === 0 ? 'bg-white dark:bg-slate-800' : 'bg-slate-100 dark:bg-slate-950'
                    }`}
                  >
                    <td className="px-6 py-4 font-montserrat font-bold text-slate-900 dark:text-white">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-400">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat mb-12 text-center">
              <span className="gradient-text">Applications</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.applications.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 hover:border-primary/30 smooth-transition hover-lift">
                  <p className="text-center font-medium text-slate-900 dark:text-white">{app}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl font-bold font-montserrat mb-12 text-center">
              Manufacturing <span className="gradient-text">Process</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {product.manufacturing.map((process, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg smooth-transition">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-montserrat mb-2 text-slate-900 dark:text-white">
                        {process.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Advantages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <ScrollReveal>
              <h3 className="text-2xl font-bold font-montserrat mb-8">Certifications & Standards</h3>
              <div className="space-y-4">
                {product.certifications.map((cert, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
                    <span className="font-medium text-slate-900 dark:text-white">{cert}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Advantages */}
            <ScrollReveal delay={0.1}>
              <h3 className="text-2xl font-bold font-montserrat mb-8">Competitive Advantages</h3>
              <div className="space-y-4">
                {product.advantages.map((advantage, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                    <span className="text-blue-600 dark:text-blue-400 text-xl mt-1">▸</span>
                    <span className="text-slate-900 dark:text-white">{advantage}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use Case */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl bg-white dark:bg-slate-800 p-12 border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold font-montserrat mb-4 text-slate-900 dark:text-white">
                Best For
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                {product.useCase}
              </p>
              <Link href="/contact">
                <AnimatedButton variant="primary" size="lg">
                  Get Started Today
                </AnimatedButton>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-4xl font-bold font-montserrat mb-12 text-center">
                Related <span className="gradient-text">Products</span>
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedProducts.map((relProduct, i) => (
                <ScrollReveal key={relProduct.id} delay={i * 0.1}>
                  <Link href={`/products/${relProduct.id}`}>
                    <GradientCard className="h-full group cursor-pointer">
                      <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
                        />
                      </div>
                      <h4 className="text-xl font-bold font-montserrat mb-2 text-slate-900 dark:text-white group-hover:text-primary smooth-transition">
                        {relProduct.name}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {relProduct.shortDescription}
                      </p>
                    </GradientCard>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
