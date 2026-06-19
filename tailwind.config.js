/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0A0E1A',
        },
        cobalt: {
          500: '#2563EB',
          400: '#60A5FA',
        },
        copper: {
          500: '#E8632A',
        },
      },
      keyframes: {
        // Circuit trace dash animation
        traceDraw: {
          '0%':   { strokeDashoffset: '80', opacity: '0.2' },
          '50%':  { strokeDashoffset: '0',  opacity: '0.8' },
          '100%': { strokeDashoffset: '-80', opacity: '0.2' },
        },
        // Circuit node pulse
        nodePulse: {
          '0%, 100%': { opacity: '0.3' },
          '50%':      { opacity: '1'   },
        },
        // Floating particle rise
        floatUp: {
          '0%':   { transform: 'translateY(0) scale(1)',      opacity: '0'   },
          '15%':  { opacity: '0.9' },
          '80%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(-120px) scale(0.6)', opacity: '0' },
        },
        // Glow ring expand
        ringExpand: {
          '0%':   { transform: 'translate(-50%, -50%) scale(0.4)', opacity: '0.6' },
          '100%': { transform: 'translate(-50%, -50%) scale(2.4)', opacity: '0'   },
        },
        // Horizontal scan line
        scan: {
          '0%':   { top: '-4px'  },
          '100%': { top: '100%' },
        },
        // Background nebula pan
        subtlePan: {
          '0%, 100%': { backgroundPosition: '0% 50%'   },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        // Tagline fade-up entrance
        taglineFade: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
        // Title copper glow breathe
        copperGlow: {
          '0%, 100%': {
            textShadow:
              '0 0 20px rgba(232,99,42,0.4), 0 0 60px rgba(232,99,42,0.15)',
          },
          '50%': {
            textShadow:
              '0 0 40px rgba(232,99,42,0.7), 0 0 100px rgba(232,99,42,0.3)',
          },
        },
        // Animated border trace
        borderTrace: {
          '0%':   { backgroundPosition: '0% 0%'   },
          '100%': { backgroundPosition: '300% 0%' },
        },
        // Letter entrance
        letterIn: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to:   { opacity: '1', transform: 'translateY(0)'    },
        },
      },
      animation: {
        'trace-draw':   'traceDraw 4s linear infinite',
        'node-pulse':   'nodePulse 2s ease-in-out infinite',
        'float-up':     'floatUp 8s ease-in-out infinite',
        'ring-expand':  'ringExpand 4s cubic-bezier(0.25,0.46,0.45,0.94) infinite',
        'scan':         'scan 6s linear infinite',
        'subtle-pan':   'subtlePan 18s ease-in-out infinite',
        'tagline-fade': 'taglineFade 0.7s ease forwards',
        'copper-glow':  'copperGlow 4s ease-in-out 1.5s infinite',
        'border-trace': 'borderTrace 3s linear infinite',
      },
    },
  },
  plugins: [],
};