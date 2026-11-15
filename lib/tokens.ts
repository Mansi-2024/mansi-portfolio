/**
 * Centralized Design Tokens — Cinematic Creative Engineer Direction
 * Replaces the previous plum palette with an architectural, high-contrast dark system.
 */

export const tokens = {
  colors: {
    background: {
      primary: '#08080a', // Deep obsidian canvas
      secondary: '#0e0e12', // Subtle surface card
      tertiary: '#16161d', // Elevated module
      elevated: '#1e1e28', // Floating panels / modal backdrops
    },
    foreground: {
      primary: '#f4f4f7', // High-contrast crisp bone white
      secondary: '#a1a1aa', // Zinc slate reading text
      muted: '#71717a', // Subtle metadata & notes
      inverted: '#08080a', // Dark text on light accents
      accent: '#00f0ff', // Cinematic electric cyan
      accentLime: '#c6ff55', // High-energy secondary accent
    },
    border: {
      hairline: '#1c1c24', // Delicate separator line
      default: '#2a2a36', // Standard card & button perimeter
      hover: '#3f3f50', // Interactive hover state
      focus: '#00f0ff', // Accessible focus outline
    },
  },
  typography: {
    fonts: {
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
      display: 'var(--font-display)',
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },
  spacing: {
    sectionPaddingY: 'py-24 sm:py-32',
    containerMaxWidth: 'max-w-7xl mx-auto px-6 sm:px-8',
  },
  radii: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
    normal: '300ms cubic-bezier(0.16, 1, 0.3, 1)',
    cinematic: '600ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const;

export type DesignTokens = typeof tokens;
