'use client';

import React from 'react';
import { GradientCard } from '../animated/GradientCard';
import { ScrollReveal } from '../animated/ScrollReveal';

const features = [
  {
    icon: '⚡',
    title: 'High Performance',
    description: 'Ultra-fast signal transmission with minimal latency and maximum efficiency.',
  },
  {
    icon: '🎯',
    title: 'Precision Engineering',
    description: 'Micro-level accuracy in every trace and component placement.',
  },
  {
    icon: '🛡️',
    title: 'Advanced Protection',
    description: 'Multi-layer shielding and thermal management systems.',
  },
  {
    icon: '♻️',
    title: 'Eco-Friendly',
    description: 'Sustainable manufacturing processes with minimal waste.',
  },
  {
    icon: '🔬',
    title: 'R&D Innovation',
    description: 'Continuous research for cutting-edge PCB technology.',
  },
  {
    icon: '✓',
    title: 'Quality Certified',
    description: 'ISO 9001 & IPC standards compliance guaranteed.',
  },
];

const products = [
  {
    category: 'Single Layer PCB',
    description: 'Ideal for simple, cost-effective applications',
    color: 'from-blue-500 to-blue-600',
  },
  {
    category: 'Multi-Layer PCB',
    description: 'High-density circuits for complex applications',
    color: 'from-purple-500 to-purple-600',
  },
  {
    category: 'HDI PCB',
    description: 'High-density interconnect for advanced devices',
    color: 'from-pink-500 to-pink-600',
  },
  {
    category: 'Flexible PCB',
    description: 'Bendable circuits for mobile and wearables',
    color: 'from-green-500 to-green-600',
  },
  {
    category: 'Rigid-Flex PCB',
    description: 'Combination of rigid and flexible substrates',
    color: 'from-orange-500 to-orange-600',
  },
  {
    category: 'Metal Core PCB',
    description: 'Enhanced thermal conductivity for high-power',
    color: 'from-red-500 to-red-600',
  },
];

export function Features() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal animation="fade-in" delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              <span className="gradient-text">Why Choose Us</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Industry-leading PCB manufacturing with proven expertise and cutting-edge technology.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <ScrollReveal
              key={i}
              animation="scale-up"
              delay={i * 50}
            >
              <GradientCard>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold font-montserrat mb-3 text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </GradientCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Products Section */}
        <ScrollReveal animation="fade-in" delay={0}>
          <div className="text-center mb-12 mt-20">
            <h3 className="text-3xl md:text-4xl font-bold font-montserrat mb-4">
              Our Product Range
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive PCB solutions for every industry and application.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ScrollReveal
              key={i}
              animation="slide-up"
              delay={i * 50}
            >
              <div
                className={`
                  relative h-64 rounded-xl overflow-hidden group cursor-pointer
                  bg-gradient-to-br ${product.color}
                  shadow-lg hover:shadow-2xl smooth-transition hover:scale-105
                `}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <h4 className="text-2xl font-bold font-montserrat text-center mb-2">
                    {product.category}
                  </h4>
                  <p className="text-center text-white/90 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
