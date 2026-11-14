# Mansi Konde — Creative Engineer Portfolio (Next.js 16 Rebuild)

> *"Full-stack engineer building software that feels effortless"*

Dedicated Next.js 16 application directory implementing the cinematic, scroll-driven portfolio architecture for **Mansi Konde**.

---

## Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI Runtime:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Animation Engine:** GSAP 3.15+ (ScrollTrigger, `@gsap/react`)
- **Smooth Scrolling:** Lenis 1.3+ (RAF synchronized with GSAP ticker)
- **3D Graphics & Physics (Staged):** Three.js, React Three Fiber (R3F), React Three Drei
- **Micro-Interactions:** Framer Motion
- **Icons:** Lucide React

---

## Directory Architecture

```text
portfolio-next/
├── app/
│   ├── layout.tsx              # Root HTML, Google Fonts (Inter, Space Grotesk, JetBrains Mono)
│   ├── page.tsx                # Cinematic landing shell
│   ├── globals.css             # Tailwind v4 import, CSS custom variables, Lenis styles
│   └── projects/
│       └── [slug]/
│           └── page.tsx        # Prerendered SSG case studies via generateStaticParams
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Accessible fixed navigation & mobile menu
│   │   └── Footer.tsx          # Colophon, status & verified links
│   ├── hero/
│   │   └── HeroPlaceholder.tsx # Headline, tagline, scroll cues (prepared for canvas scrubber)
│   ├── identity-card/
│   │   └── IdentityCardPlaceholder.tsx # Staged for R3F 3D Hanging ID Card & Physics
│   ├── projects/
│   │   ├── ProjectCard.tsx     # Typed project cards with status badges & tech tags
│   │   └── ProjectsGalleryPlaceholder.tsx # 6-project showcase (staged for horizontal pin)
│   ├── about/
│   │   └── AboutPlaceholder.tsx # Philosophy, core tenets, reserved 3:4 portrait frame
│   ├── skills/
│   │   └── SkillsPlaceholder.tsx # 3-column engineering capability matrix
│   ├── contact/
│   │   └── ContactPlaceholder.tsx # Direct email dispatch, confirmed GitHub link
│   ├── transitions/
│   │   └── PageTransition.tsx  # Framer Motion entrance/exit transitions
│   └── animations/
│       └── SmoothScroll.tsx    # Lenis smooth-scroll provider
├── hooks/
│   ├── useLenis.ts             # Lenis smooth scroll bound to GSAP ticker
│   └── useReducedMotion.ts     # Observes prefers-reduced-motion media query
├── lib/
│   ├── constants.ts            # Global metadata, transition curves, breakpoints
│   ├── tokens.ts               # Architectural high-contrast design tokens
│   ├── utils.ts                # Classname merging and formatting helpers
│   └── gsap/
│       └── index.ts            # Centralized GSAP & ScrollTrigger registration
├── data/
│   ├── projects.ts             # 6 verified engineering case studies (10-point documentation)
│   ├── skills.ts               # Technical competencies and specialization breakdown
│   └── profile.ts              # Core profile metadata, social channels, asset placeholders
└── public/
    ├── assets/                 # Target for mansi-konde.jpg (3:4 portrait)
    ├── images/                 # Target for project preview imagery
    └── fonts/                  # Local font backups
```

---

## Commands

```bash
# Run Next.js development server
npm run dev

# Run TypeScript checks and Next.js production static build (SSG)
npm run build

# Run ESLint validation
npm run lint
```
