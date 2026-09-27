/** @type {import('tailwindcss').Config} */
const neutralRamp = { 50: '#F7F5F0', 100: '#EFEBE4', 200: '#E2DDD3', 300: '#CFC8BC', 400: '#A39B8E', 500: '#6E685F', 600: '#5F5A52', 700: '#3E4A55', 800: '#222E3A', 900: '#182632', 950: '#111B24' };
const accentRamp = { 50: '#EEF7F5', 100: '#DBEFEC', 200: '#BCDEDA', 300: '#9ACBC6', 400: '#7FB8B4', 500: '#347579', 600: '#2F6F73', 700: '#285D60', 800: '#214E52', 900: '#183A3D', 950: '#10292B' };
const successRamp = { 50: '#EFF7F1', 100: '#DDEFE1', 200: '#BEDFC8', 300: '#A1D2B0', 400: '#7CC49A', 500: '#33784E', 600: '#2E6B45', 700: '#255B3A', 800: '#1E4A31', 900: '#163926', 950: '#10281B' };
const dangerRamp = { 50: '#FCF2F0', 100: '#F9E2DE', 200: '#F3C4BE', 300: '#F0A9A0', 400: '#F08A80', 500: '#B84037', 600: '#A8322A', 700: '#8C2924', 800: '#72221F', 900: '#561B19', 950: '#3B1413' };
const warningRamp = { 50: '#FFF9EB', 100: '#FAEFD1', 200: '#F4DFA5', 300: '#E9C77E', 400: '#E0B25C', 500: '#966500', 600: '#8A5A00', 700: '#704900', 800: '#593B00', 900: '#422C00', 950: '#2E1F00' };
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: neutralRamp,
        zinc: neutralRamp,
        neutral: neutralRamp,
        slate: neutralRamp,
        blue: accentRamp,
        indigo: accentRamp,
        sky: accentRamp,
        cyan: accentRamp,
        teal: successRamp,
        emerald: successRamp,
        green: successRamp,
        red: dangerRamp,
        rose: dangerRamp,
        amber: warningRamp,
        yellow: warningRamp,
        orange: warningRamp,
        violet: accentRamp,
        purple: accentRamp,
        pink: accentRamp,
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        elevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
        ink: 'rgb(var(--text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
        muted: 'rgb(var(--text-muted) / <alpha-value>)',
        line: 'rgb(var(--border) / <alpha-value>)',
        'line-strong': 'rgb(var(--border-strong) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        success: 'rgb(var(--success) / <alpha-value>)',
        warning: 'rgb(var(--warning) / <alpha-value>)',
        danger: 'rgb(var(--danger) / <alpha-value>)',
        focus: 'rgb(var(--focus) / <alpha-value>)',
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
