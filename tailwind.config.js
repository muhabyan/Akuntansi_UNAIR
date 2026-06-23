/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Semantic surfaces — driven by CSS variables (RGB triplets) ──
        // Using `<alpha-value>` enables proper opacity modifier support:
        //   bg-navy-900/50  →  rgb(var(--color-bg-page) / 0.5)
        navy: {
          950: 'rgb(var(--color-bg-footer) / <alpha-value>)',
          900: 'rgb(var(--color-bg-page) / <alpha-value>)',
          850: 'rgb(var(--color-bg-panel) / <alpha-value>)',
          800: 'rgb(var(--color-bg-card) / <alpha-value>)',
          700: 'rgb(var(--color-bg-accent) / <alpha-value>)',
          600: 'rgb(var(--color-border-hover) / <alpha-value>)',
          500: 'rgb(var(--color-border) / <alpha-value>)',
        },
        slate: {
          100: 'rgb(var(--color-text-title) / <alpha-value>)',
          200: 'rgb(var(--color-text-title) / <alpha-value>)',   // alias for title
          300: 'rgb(var(--color-text-main) / <alpha-value>)',
          400: 'rgb(var(--color-text-description) / <alpha-value>)',
          500: 'rgb(var(--color-text-muted) / <alpha-value>)',
          600: 'rgb(var(--color-text-muted) / <alpha-value>)',   // alias for muted
        },
        gold: {
          DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
          light:   'rgb(var(--color-gold-light) / <alpha-value>)',
          dark:    'rgb(var(--color-gold-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:    ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        shimmer: { '100%': { transform: 'translateX(100%)' } },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(15px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-15px) rotate(3deg)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(15px) rotate(-3deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.12', transform: 'scale(1)' },
          '50%':      { opacity: '0.22', transform: 'scale(1.08)' },
        },
      },
      animation: {
        shimmer:         'shimmer 2.5s infinite',
        'fade-in-up':    'fadeInUp 0.4s ease-out forwards',
        float:           'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 8s ease-in-out infinite',
        'pulse-slow':    'pulseSlow 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
