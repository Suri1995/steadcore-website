'use client';

import React from 'react';
import { GradientCard } from '../animated/GradientCard';
import { ScrollReveal } from '../animated/ScrollReveal';
import Link from 'next/link';
import { 
  Zap, 
  Target, 
  Shield, 
  Leaf, 
  Microscope, 
  Award,
  CircuitBoard,
  Layers,
  Thermometer,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Ultra-fast signal transmission with minimal latency and maximum efficiency.',
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Micro-level accuracy in every trace and component placement.',
  },
  {
    icon: Shield,
    title: 'Advanced Protection',
    description: 'Multi-layer shielding and thermal management systems.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Sustainable manufacturing processes with minimal waste.',
  },
  {
    icon: Microscope,
    title: 'R&D Innovation',
    description: 'Continuous research for cutting-edge PCB technology.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description: 'ISO 9001 & IPC standards compliance guaranteed.',
  },
];

const products = [
  {
    id: 'single-sided-pcb',
    category: 'Single-Sided PCB',
    tagline: 'Simple. Reliable. Cost-Effective.',
    description: 'Ideal for basic electronic applications with components mounted on one side.',
    icon: CircuitBoard,
    slug: '/products/single-sided-pcb',
  },
  {
    id: 'double-sided-pcb',
    category: 'Double-Sided PCB',
    tagline: 'Enhanced Circuitry. Maximum Efficiency.',
    description: 'Advanced connectivity with components on both sides for complex applications.',
    icon: Layers,
    slug: '/products/double-sided-pcb',
  },
  {
    id: 'metal-clad-pcb',
    category: 'Metal-Clad PCB',
    tagline: 'Superior Thermal Management. Unmatched Durability.',
    description: 'Aluminum-backed boards designed for high-power and heat-sensitive applications.',
    icon: Thermometer,
    slug: '/products/metal-clad-pcb',
  },
];

export function Features() {
  return (
    <section 
      id="products" 
      className="sm:py-20 py-8 bg-primary/5 dark:bg-primary/10 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative">
        {/* Header */}
        <ScrollReveal animation="fade-in" delay={0}>
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-accent/10 text-accent border border-accent/20">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-montserrat mt-4 mb-4">
              <span className="text-primary dark:text-primary-light">Excellence in</span>
              <span className="text-accent"> Every Layer</span>
            </h2>
            <p className="text-xl text-secondary dark:text-secondary-light max-w-3xl mx-auto leading-relaxed">
              Industry-leading PCB manufacturing with proven expertise, cutting-edge technology, 
              and unwavering commitment to quality.
            </p>
          </div>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {features.map((feature, i) => (
            <ScrollReveal
              key={i}
              animation="scale-up"
              delay={i * 50}
              className="h-full"
            >
              <GradientCard className="h-full group hover:shadow-2xl transition-all duration-300 border border-primary/10 dark:border-primary/20">
                <div className="flex flex-col items-start">
                  <div className={`
                    p-3 rounded-xl bg-accent/10 text-accent
                    shadow-lg mb-4 group-hover:scale-110 group-hover:bg-accent/20 
                    transition-all duration-300
                  `}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat mb-3 text-primary dark:text-primary-light">
                    {feature.title}
                  </h3>
                  <p className="text-secondary dark:text-secondary-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </GradientCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Products Section */}
        <div className="relative">
          <ScrollReveal animation="fade-in" delay={0}>
            <div className="text-center mb-12">
              <div className="inline-block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-secondary/10 text-secondary border border-secondary/20">
                  Our Product Range
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold font-montserrat mt-4 mb-4">
                <span className="text-primary dark:text-primary-light">Precision PCB</span>
                <span className="text-secondary"> Solutions</span>
              </h3>
              <p className="text-lg text-secondary dark:text-secondary-light max-w-3xl mx-auto leading-relaxed">
                From simple single-sided boards to advanced metal-clad solutions, 
                we deliver precision-engineered PCBs for every industry and application.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <ScrollReveal
                key={i}
                animation="slide-up"
                delay={i * 50}
                className="h-full"
              >
                <Link href={product.slug} className="block h-full group">
                  <div
                    className={`
                      relative h-80 rounded-2xl overflow-hidden
                      bg-gradient-to-br from-primary to-primary/80 dark:from-primary-dark dark:to-primary/90
                      shadow-lg hover:shadow-2xl transition-all duration-500
                      hover:scale-[1.03] hover:-translate-y-1
                      border border-primary/10 dark:border-primary/20
                    `}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                    
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                      {/* Icon */}
                      <div className="mb-5 p-4 bg-white/15 backdrop-blur-sm rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        <product.icon className="w-10 h-10 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h4 className="text-2xl font-bold font-montserrat text-white mb-1">
                        {product.category}
                      </h4>
                      
                      {/* Tagline */}
                      <p className="text-accent text-sm font-semibold mb-3">
                        {product.tagline}
                      </p>
                      
                      {/* Description */}
                      <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                        {product.description}
                      </p>

                      {/* Arrow indicator */}
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors duration-300">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                    
                    {/* Hover overlay accent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
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