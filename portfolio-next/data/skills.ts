/**
 * Mansi Konde — Technical Skills & Engineering Competencies Data
 */

export interface SkillItem {
  name: string;
  level?: string;
  focus?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  index: string;
  description: string;
  skills: SkillItem[];
}

export const skillsCategories: SkillCategory[] = [
  {
    id: 'creative-frontend',
    name: 'Creative Frontend & Motion',
    index: '01',
    description: 'Cinematic browser choreography, responsive typography, and tactile micro-interactions.',
    skills: [
      { name: 'Next.js 16 (App Router)', focus: 'SSR / Streaming' },
      { name: 'React 19 & TypeScript', focus: 'Type-Safe Architecture' },
      { name: 'GSAP 3 & ScrollTrigger', focus: 'Timeline Orchestration' },
      { name: 'Lenis Smooth Scroll', focus: 'Scroll Synchronization' },
      { name: 'Tailwind CSS v4', focus: 'Token Systems & Fluid Type' },
      { name: 'Framer Motion', focus: 'Micro-Interactions' },
    ],
  },
  {
    id: '3d-graphics',
    name: '3D Graphics & Simulation',
    index: '02',
    description: 'WebGL rendering, spatial computing interfaces, and interactive physics.',
    skills: [
      { name: 'Three.js', focus: 'WebGL Scene Graphs' },
      { name: 'React Three Fiber (R3F)', focus: 'Declarative 3D Canvas' },
      { name: 'React Three Drei', focus: 'Shaders & Camera Controls' },
      { name: 'Physics Simulation (Rapier)', focus: 'Rigid Body & Constraints' },
      { name: 'Canvas Image Sequences', focus: 'Scroll-Driven Scrubbing' },
      { name: 'GLTF / GLB Optimization', focus: 'Mesh Tree-Shaking' },
    ],
  },
  {
    id: 'systems-architecture',
    name: 'Systems, Trust & Backend',
    index: '03',
    description: 'Deterministic verification protocols, API design, and containerized runtimes.',
    skills: [
      { name: 'Python & FastAPI / Flask', focus: 'Verification APIs' },
      { name: 'Deterministic Verification', focus: 'Cryptographic Provenance' },
      { name: 'PostgreSQL & SQLAlchemy', focus: 'Relational Schemas' },
      { name: 'Docker & Containerization', focus: 'Isolated Test Runners' },
      { name: 'REST & GraphQL APIs', focus: 'Contract Enforcement' },
      { name: 'Automated Regression Testing', focus: 'Pytest & Impact Analysis' },
    ],
  },
];
