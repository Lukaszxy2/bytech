/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './lib/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy': {
          DEFAULT: 'rgb(var(--brand-navy) / <alpha-value>)',
          deep: 'rgb(var(--brand-navy-deep) / <alpha-value>)',
          lift: 'rgb(var(--brand-navy-lift) / <alpha-value>)',
        },
        'brand-red': {
          DEFAULT: 'rgb(var(--brand-red) / <alpha-value>)',
          bright: 'rgb(var(--brand-red-bright) / <alpha-value>)',
          deep: 'rgb(var(--brand-red-deep) / <alpha-value>)',
        },
        'background-primary': 'rgb(var(--background-primary) / <alpha-value>)',
        'background-secondary': 'rgb(var(--background-secondary) / <alpha-value>)',
        'background-offwhite': 'rgb(var(--background-offwhite) / <alpha-value>)',
        'text-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'text-muted': 'rgb(var(--text-muted) / <alpha-value>)',
        'text-inverse': 'rgb(var(--text-inverse) / <alpha-value>)',
        'text-inverse-muted': 'rgb(var(--text-inverse-muted) / <alpha-value>)',
        'glass-surface': 'rgb(var(--glass-surface) / <alpha-value>)',
        'glass-border': 'rgb(var(--glass-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Hero headline — 95px at the 1344px reference width, fluid below it.
        'heading-xl': ['clamp(2.5rem, 7.068vw, 5.9375rem)', { lineHeight: '1.016', letterSpacing: '-0.032em', fontWeight: '800' }],
        'heading-lg': ['clamp(2rem, 4.17vw, 3.5rem)', { lineHeight: '1.04', letterSpacing: '-0.02em', fontWeight: '800' }],
        'heading-md': ['clamp(1.5rem, 2.38vw, 2rem)', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-sm': ['1.3125rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '700' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'body-md': ['0.9375rem', { lineHeight: '1.65', letterSpacing: '0em', fontWeight: '400' }],
        'body-sm': ['0.8125rem', { lineHeight: '1.55', letterSpacing: '0em', fontWeight: '400' }],
        'label-sm': ['0.8125rem', { lineHeight: '1', letterSpacing: '0.18em', fontWeight: '700' }],
        // Oversized stat counters that sit directly on the background.
        'counter-xl': ['clamp(3.25rem, 7.5vw, 6.5rem)', { lineHeight: '0.9', letterSpacing: '-0.04em', fontWeight: '800' }],
      },
      borderRadius: {
        control: '14px',
        panel: '20px',
        'panel-lg': '28px',
      },
      boxShadow: {
        'glass-heavy': '0 24px 60px -12px rgb(0 0 0 / 0.65), inset 0 1px 0 0 rgb(255 255 255 / 0.14)',
        'glass-light': '0 12px 32px -12px rgb(0 0 0 / 0.5), inset 0 1px 0 0 rgb(255 255 255 / 0.07)',
        'button-primary': '0 0 28px rgb(var(--brand-red) / 0.5), 0 8px 24px -6px rgb(0 0 0 / 0.5), inset 0 1px 0 0 rgb(255 255 255 / 0.28)',
        'button-primary-hover': '0 0 44px rgb(var(--brand-red) / 0.72), 0 12px 30px -6px rgb(0 0 0 / 0.55), inset 0 1px 0 0 rgb(255 255 255 / 0.34)',
        'glow-red': '0 0 32px rgb(var(--brand-red) / 0.42)',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        hover: '280ms',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-trace': {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        'scroll-cue': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'float-slow': 'float 8.5s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        'pulse-trace': 'pulse-trace 3.2s ease-in-out infinite',
        'scroll-cue': 'scroll-cue 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
