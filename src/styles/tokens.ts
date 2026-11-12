/**
 * Global Design Tokens — Plum Editorial
 * Art Direction: Dark editorial, artistic, sophisticated and human
 */

export const colors = {
  midnightPlum: '#100D16',   // Primary canvas & background
  aubergine: '#211826',      // Secondary surfaces & containers
  raisedPlum: '#302437',     // Cards & elevated surfaces
  warmIvory: '#F3EAF0',      // Primary text & high-contrast elements
  ashMauve: '#B7AAB8',       // Secondary text, subtitles & muted metadata
  dustyRose: '#D7A6B8',      // Primary accent, key interactions, focus states
  softLavender: '#B9A7D0',   // Optional secondary decorative accent & subtle illustrations
  borderPlum: '#403344',     // Fine structural dividers & card outlines
} as const;

export const fonts = {
  serif: '"Instrument Serif", Georgia, serif',
  sans: '"DM Sans", system-ui, -apple-system, sans-serif',
  mono: '"IBM Plex Mono", ui-monospace, SFMono-Regular, monospace',
} as const;

export const designDirection = {
  mood: 'Dark editorial, artistic, sophisticated and human',
  accentIntensity: 'Balanced',
  rules: [
    'Editorial layouts with asymmetrical composition',
    'Expressive serif headlines and restrained technical metadata',
    'Fine borders, subtle texture and generous spacing',
    'Hand-drawn original Little Explorer character',
    'Rose accents for key interactions and important typography',
    'Lavender only for occasional illustration details',
    'Avoid generic gradients, excessive glass effects, excessive neon, unnecessary 3D and repetitive animations',
    'Never use accent colours for long paragraphs',
    'Maintain strong text contrast and WCAG AA compliance for normal text',
  ],
} as const;

export const tokens = {
  colors,
  fonts,
  designDirection,
} as const;

export default tokens;
