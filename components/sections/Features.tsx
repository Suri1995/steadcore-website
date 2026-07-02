'use client';

import React from 'react';
import { GradientCard } from '../animated/GradientCard';
import { ScrollReveal } from '../animated/ScrollReveal';
import Link from 'next/link';
import {
  CircuitBoard,
  Layers,
  Thermometer,
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  Factory,
  Truck,
  HeartHandshake,
  TrendingUp,
} from 'lucide-react';

/* ─── Products ────────────────────────────────────────────────────── */
const products = [
  {
    id: 'single-sided-pcb',
    category: 'Single-Sided PCB',
    tagline: 'Simple. Reliable. Cost-Effective.',
    description:
      'Ideal for basic electronic applications with components mounted on one side. Capacity: 10,000 sqm.',
    icon: CircuitBoard,
    slug: '/products/single-sided-pcb',
    capacity: '10,000 sqm',
  },
  {
    id: 'double-sided-pcb',
    category: 'Double-Sided PCB',
    tagline: 'Enhanced Circuitry. Maximum Efficiency.',
    description:
      'Advanced connectivity with components on both sides for complex, high-density applications. Capacity: 3,000 sqm.',
    icon: Layers,
    slug: '/products/double-sided-pcb',
    capacity: '3,000 sqm',
  },
  {
    id: 'metal-clad-pcb',
    category: 'Metal-Core PCB',
    tagline: 'Superior Thermal Management. Unmatched Durability.',
    description:
      'Aluminum-backed boards engineered for high-power and heat-sensitive applications including LEDs and power electronics.',
    icon: Thermometer,
    slug: '/products/metal-clad-pcb',
    capacity: 'Custom runs',
  },
];


export function Features() {
  return (
    <section
      id="products"
      className="sm:py-24 py-12 bg-primary/5 dark:bg-primary/10 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/8 dark:bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">

       

        {/* ── PRODUCTS SECTION ───────────────────────────────────── */}
        <div className="relative">
          <ScrollReveal animation="fade-in" delay={0}>
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-secondary/10 text-secondary dark:bg-accent/10 dark:text-accent border border-secondary/20 dark:border-accent/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" aria-hidden="true" />
                Our Product Range
              </span>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mt-2 mb-4 leading-tight">
                <span className="text-foreground">Precision PCB</span>
                <span className="text-secondary dark:text-accent"> Solutions</span>
              </h3>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From simple single-sided boards to advanced metal-core solutions,
                we deliver precision-engineered PCBs for every industry and application —
                with the capacity and consistency your production demands.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={i} animation="slide-up" delay={i * 60} className="h-full">
                <Link href={product.slug} className="block h-full group" aria-label={`Learn more about ${product.category}`}>
                  <div className="relative h-[340px] rounded-2xl overflow-hidden
                    bg-gradient-to-br from-primary to-primary/80
                    shadow-lg hover:shadow-2xl transition-all duration-500
                    hover:scale-[1.025] hover:-translate-y-1
                    border border-primary/10">

                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-primary/30 to-transparent" aria-hidden="true" />

                    {/* hover tint */}
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

                    {/* top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary to-primary
                      scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" aria-hidden="true" />

                    {/* card body */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      {/* icon */}
                      <div className="mb-5 p-4 bg-white/15 backdrop-blur-sm rounded-2xl
                        group-hover:scale-110 group-hover:bg-white/25 transition-all duration-300">
                        <product.icon className="w-9 h-9 text-white" aria-hidden="true" />
                      </div>

                      {/* capacity badge */}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white/15 text-white/80 border border-white/20 mb-3">
                        {product.capacity}
                      </span>

                      <h4 className="text-xl font-bold font-montserrat text-white mb-1 leading-snug">
                        {product.category}
                      </h4>
                      <p className="text-secondary dark:text-accent text-xs font-semibold mb-3 brightness-150">
                        {product.tagline}
                      </p>
                      <p className="text-white/75 text-sm leading-relaxed max-w-[220px]">
                        {product.description}
                      </p>
                    </div>

                    {/* bottom CTA */}
                    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5
                      text-white/50 group-hover:text-white transition-all duration-300">
                      <span className="text-xs font-semibold tracking-wide">Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}