/**
 * Core Identity & Portfolio Metadata — Mansi Konde
 * Strictly aligned to verified specifications.
 */

export interface NavLink {
  label: string;
  href: string;
  index: string;
}

export interface PortfolioData {
  name: string;
  wordmark: string;
  positioning: string;
  tagline: string;
  taglinePart1: string;
  taglinePart2: string;
  supportingIntro: string;
  edition: string;
  status: string;
  navLinks: NavLink[];
  capabilities: string[];
}

export const portfolioData: PortfolioData = {
  name: 'Mansi Konde',
  wordmark: 'MK.',
  positioning: 'Creative Engineer',
  tagline: 'I follow the question. Then I build the answer.',
  taglinePart1: 'I follow the',
  taglinePart2: 'Then I build the',
  supportingIntro:
    'A creative engineer exploring ideas, solving problems and building experiences through technology.',
  edition: 'Vol. 2026 // Folio Edition 01',
  status: 'Inquiry & Development Active',
  navLinks: [
    { label: 'Selected Work', href: '#work', index: '01' },
    { label: 'About', href: '#about', index: '02' },
    { label: 'Capabilities', href: '#capabilities', index: '03' },
    { label: 'Contact', href: '#contact', index: '04' },
  ],
  capabilities: [
    'Creative Frontend Architecture',
    'Interactive Motion & GSAP Systems',
    'Design Tokens & Typography Craft',
    'TypeScript & Modern Web Standards',
    'Accessibility & Human-Centered UX',
  ],
};

export const portfolioIdentity = portfolioData;
export default portfolioData;
