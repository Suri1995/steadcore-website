# Component API Reference

## AnimatedButton

Interactive button component with gradient and hover effects.

### Props
```typescript
interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}
```

### Usage
```tsx
<AnimatedButton variant="primary" size="lg">
  Get Started
</AnimatedButton>

<AnimatedButton variant="outline" size="md" icon={<ArrowIcon />}>
  Learn More
</AnimatedButton>
```

---

## GradientCard

Card component with glassmorphism effect and hover lift.

### Props
```typescript
interface GradientCardProps {
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
  glow?: boolean;
}
```

### Usage
```tsx
<GradientCard hoverLift glow>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</GradientCard>
```

---

## ScrollReveal

Scroll-triggered animation component using Intersection Observer.

### Props
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'scale-up';
  delay?: number;
}
```

### Usage
```tsx
<ScrollReveal animation="slide-up" delay={100}>
  <h2>Reveals when scrolled into view</h2>
</ScrollReveal>
```

### Animation Options
- `fade-in`: Fades in (default)
- `slide-up`: Slides up from below
- `slide-down`: Slides down from above
- `scale-up`: Scales up from smaller

---

## AnimatedCounter

Auto-incrementing counter component with scroll trigger.

### Props
```typescript
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}
```

### Usage
```tsx
<AnimatedCounter end={500} duration={2} suffix="+" />
// Displays: 500+

<AnimatedCounter end={95} prefix="$" suffix="%"/>
// Displays: $95%
```

---

## AnimatedText

Staggered text animation component that animates each word.

### Props
```typescript
interface AnimatedTextProps {
  children: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}
```

### Usage
```tsx
<AnimatedText delay={0} staggerDelay={50}>
  Next-Gen PCB Solutions
</AnimatedText>
```

---

## MouseFollow

Mouse-tracking interactive component.

### Props
```typescript
interface MouseFollowProps {
  children: React.ReactNode;
  className?: string;
}
```

### Usage
```tsx
<MouseFollow className="h-96">
  {/* Content that responds to mouse movement */}
</MouseFollow>
```

---

## Section Components

### Header
Navigation component with sticky positioning and mobile menu.

**Features:**
- Sticky header with glassmorphism
- Mobile hamburger menu
- Smooth scroll animations
- Navigation links

**Props:** None (stateful component)

### Hero
Full-screen introductory section with animations.

**Features:**
- Animated gradient background
- Staggered text animations
- CTA buttons
- Statistics display

**Content:**
- Edit heading in component
- Modify CTA button text
- Update stats array

### Features
Feature grid and product showcase section.

**Features:**
- 6-item feature grid
- 6 product category cards
- Gradient overlays
- Hover effects

**Customization:**
```typescript
const features = [
  {
    icon: '⚡',
    title: 'Your Title',
    description: 'Your description'
  },
  // ... more items
]

const products = [
  {
    category: 'Product Name',
    description: 'Description',
    color: 'from-blue-500 to-blue-600'
  },
  // ... more products
]
```

### About
Company information and timeline section.

**Features:**
- Company story
- Statistics with counters
- Timeline events
- Gradient cards

**Customization:**
```typescript
const capabilities = [
  {
    icon: '🏭',
    title: 'Your Title',
    description: 'Your description'
  },
  // ... more items
]

// Timeline events
[
  { year: '2002', title: 'Event', desc: 'Description' },
  // ... more events
]
```

### Infrastructure
Dark-themed facility showcase section.

**Features:**
- 6 facility cards
- Dark gradient background
- Glassmorphism effects
- Animated background grid

**Customization:**
```typescript
const facilities = [
  {
    name: 'Facility Name',
    description: 'Description',
    icon: '🤖'
  },
  // ... more facilities
]
```

### Testimonials
Interactive carousel with testimonials.

**Features:**
- Auto-play carousel
- Manual navigation
- Dot indicators
- Testimonial cards

**Customization:**
```typescript
const testimonials = [
  {
    name: 'Person Name',
    company: 'Company',
    role: 'Role',
    text: 'Testimonial text',
    avatar: '👨‍💼'
  },
  // ... more testimonials
]
```

### CTA
Call-to-action section with gradient background.

**Features:**
- Animated gradient background
- Dual CTA buttons
- Compelling messaging
- Staggered animations

### Footer
Multi-column footer with links and branding.

**Features:**
- Brand information
- Link columns
- Social media icons
- Copyright info

---

## Utility Classes

### Animation Classes
```css
.animate-fade-in        /* 0.6s fade in */
.animate-slide-up       /* 0.6s slide up */
.animate-slide-down     /* 0.6s slide down */
.animate-slide-in-left  /* 0.6s slide from left */
.animate-slide-in-right /* 0.6s slide from right */
.animate-scale-up       /* 0.6s scale from smaller */
.animate-gradient-shift /* 6s infinite gradient shift */
.animate-float          /* 3s infinite floating */
.animate-glow           /* 2s infinite glow */
```

### Effect Classes
```css
.glass                  /* Glassmorphism - light mode */
.glass-dark             /* Glassmorphism - dark mode */
.gradient-text          /* Gradient text effect */
.gradient-bg            /* Gradient background */
.smooth-transition      /* 300ms smooth transition */
.hover-lift             /* Hover scale + lift effect */
.glow-effect            /* Shadow glow effect */
```

---

## Color Tokens

### CSS Variables (globals.css)
```css
/* Brand Colors */
--color-pcb-green: #0B7A2A
--color-tech-blue: #003B8E
--color-graphite: #1E1E1E
--color-industrial-grey: #D9D9D9

/* System Colors */
--color-primary: var(--primary)
--color-secondary: var(--secondary)
--color-muted: var(--muted)
--color-background: var(--background)
--color-foreground: var(--foreground)
```

### Using Colors in Components
```tsx
// Tailwind classes
className="bg-primary text-white"
className="border-secondary"
className="text-muted-foreground"

// Or CSS variables
style={{ backgroundColor: 'var(--color-primary)' }}
```

---

## Animation Timing

All animations follow consistent timing:
- **Short animations**: 300ms (transitions)
- **Medium animations**: 600ms (scroll reveals)
- **Long animations**: 2-6s (loops, gradients)

To modify globally, edit in `globals.css`:
```css
.animate-fade-in {
  animation: fadeIn 0.6s ease-out; /* Change 0.6s here */
}
```

---

## Best Practices

### Performance
- Use `motion.div` from Framer Motion for complex animations
- Avoid animating all elements at once
- Use `will-change` sparingly
- Lazy load heavy images

### Accessibility
- Respect `prefers-reduced-motion`
- Test keyboard navigation
- Add ARIA labels to interactive elements
- Ensure color contrast ≥ 4.5:1

### Mobile
- Test animations on actual devices
- Consider animation performance on low-end devices
- Reduce animation complexity on mobile
- Use CSS containment for better performance

### Responsive
- Mobile-first approach
- Test at all breakpoints
- Use flexbox for layouts
- Avoid fixed widths

---

## Component Import Guide

```typescript
// Animated Components
import { AnimatedButton } from '@/components/animated/AnimatedButton'
import { GradientCard } from '@/components/animated/GradientCard'
import { ScrollReveal } from '@/components/animated/ScrollReveal'
import { AnimatedCounter } from '@/components/animated/AnimatedCounter'
import { AnimatedText } from '@/components/animated/AnimatedText'
import { MouseFollow } from '@/components/animated/MouseFollow'

// Section Components
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Features } from '@/components/sections/Features'
import { About } from '@/components/sections/About'
import { Infrastructure } from '@/components/sections/Infrastructure'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { Footer } from '@/components/sections/Footer'
```
