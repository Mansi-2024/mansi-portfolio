/**
 * Mansi Konde — Capabilities, Technical Stack & Engineering Approach Data
 * Strictly evidence-based, grounded in verified project repositories and actual architectures.
 * No inflated buzzwords, no unsubstantiated certifications, no fake proficiency meters.
 */

export interface CapabilityItem {
  name: string;
  detail: string;
}

export interface CapabilityGroup {
  id: string;
  index: string;
  title: string;
  description: string;
  tag: string;
  capabilities: CapabilityItem[];
}

export interface TechnologyItem {
  name: string;
  category: string;
  context: string;
  evidenceRepo?: string;
  highlight?: boolean;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  technologies: TechnologyItem[];
}

export interface EngineeringPrinciple {
  number: string;
  headline: string;
  description: string;
}

// -----------------------------------------------------------------------------
// 1. CAPABILITIES GROUPS (4 Groups)
// -----------------------------------------------------------------------------
export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'software-engineering',
    index: '01',
    title: 'Software Engineering',
    tag: 'Foundations & Architecture',
    description:
      'Designing robust application structures, clean client-server boundaries, and maintainable full-stack systems.',
    capabilities: [
      {
        name: 'Programming Fundamentals',
        detail: 'Object-oriented & functional paradigms, clean data structures, and algorithmic complexity.',
      },
      {
        name: 'Frontend Architecture',
        detail: 'React 19 & Next.js App Router, SSR/SSG workflows, component lifecycle, and state normalization.',
      },
      {
        name: 'Backend API Development',
        detail: 'FastAPI & Flask RESTful service design, request validation, and OpenAPI documentation.',
      },
      {
        name: 'Type-Safe Systems',
        detail: 'Strict TypeScript across client and server boundaries to eliminate runtime type regressions.',
      },
    ],
  },
  {
    id: 'ai-intelligent-systems',
    index: '02',
    title: 'AI & Intelligent Systems',
    tag: 'Deterministic AI & Trust',
    description:
      'Applying machine intelligence with deterministic guardrails, structured evaluation, and provenance tracking.',
    capabilities: [
      {
        name: 'LLM Integration & Extraction',
        detail: 'Structured schema extraction and entity normalization from unstructured web documents.',
      },
      {
        name: 'Deterministic Verification Chains',
        detail: 'Separating probabilistic AI extraction from authoritative registry validation to prevent hallucinations.',
      },
      {
        name: 'Static Code & AST Analysis',
        detail: 'Python AST inspection for automated security heuristic checks and pre-commit commit gating.',
      },
      {
        name: 'Automated Test Orchestration',
        detail: 'Pytest test suites, stack trace isolation, and sandboxed test execution in Docker containers.',
      },
    ],
  },
  {
    id: 'creative-technology',
    index: '03',
    title: 'Creative Technology',
    tag: '3D, Motion & Spatial',
    description:
      'Converging browser performance, real-time 3D graphics, and spatial computing to create tactile experiences.',
    capabilities: [
      {
        name: 'Interactive 3D WebGL',
        detail: 'Three.js & React Three Fiber canvas rendering, custom lighting, camera physics, and material shaders.',
      },
      {
        name: 'Cinematic Browser Motion',
        detail: 'GSAP timeline orchestration, ScrollTrigger pinned horizontal scrubs, and Lenis smooth scroll sync.',
      },
      {
        name: 'Procedural Canvas Pipelines',
        detail: 'Client-side high-DPI canvas texture generation, holographic security patterns, and coordinate grids.',
      },
      {
        name: 'Virtual Reality & Simulation',
        detail: 'Unity 6, C#, OpenXR, and XR Interaction Toolkit for hazardous environment training.',
      },
    ],
  },
  {
    id: 'problem-solving-prototyping',
    index: '04',
    title: 'Problem Solving & Prototyping',
    tag: 'Scoping & Execution',
    description:
      'Deconstructing ambiguous problem statements, defining core MVP boundaries, and shipping verifiable prototypes.',
    capabilities: [
      {
        name: 'Rapid Technical Prototyping',
        detail: 'Scoping critical architectural assumptions and building functional prototypes within compressed timelines.',
      },
      {
        name: 'System Design Exploration',
        detail: 'Mapping user journeys, API contract schemas, and database entity relationships before writing code.',
      },
      {
        name: 'Verifiable Evidence Protocols',
        detail: 'Designing cryptographic receipt structures (RFC 8785 JSON-LD Canonicalization) for autonomous systems.',
      },
      {
        name: 'Iterative Engineering Refinement',
        detail: 'Benchmarking performance across devices, eliminating bottlenecks, and iterating on real user feedback.',
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// 2. VERIFIED TECHNOLOGY STACK
// -----------------------------------------------------------------------------
export const techStackCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages used across verified repositories and engineering foundations.',
    technologies: [
      { name: 'Python', category: 'Languages', context: 'FastAPI, Flask, AST analysis, automated Pytest engines', highlight: true },
      { name: 'TypeScript', category: 'Languages', context: 'Strict types across Next.js apps and evidence schemas', highlight: true },
      { name: 'JavaScript (ES6+)', category: 'Languages', context: 'Modern browser runtimes and DOM interactions' },
      { name: 'C#', category: 'Languages', context: 'Unity 6 XR physics scripts and interaction rigs' },
      { name: 'C++', category: 'Languages', context: 'Computational problem solving and algorithmic foundations' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    description: 'Modern component-driven web interfaces built for responsiveness and visual clarity.',
    technologies: [
      { name: 'Next.js 16', category: 'Frontend', context: 'App Router, Turbopack, static site generation, server components', highlight: true },
      { name: 'React 19', category: 'Frontend', context: 'Modern hooks, declarative UI state, and client-side transitions', highlight: true },
      { name: 'Tailwind CSS v4', category: 'Frontend', context: 'CSS variables, fluid typography clamp, and tokenized dark layouts', highlight: true },
      { name: 'HTML5 / Web APIs', category: 'Frontend', context: 'Semantic markup, accessibility compliance, and Canvas 2D API' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Systems',
    description: 'Service frameworks and API architectures handling data ingestion, security, and verification.',
    technologies: [
      { name: 'FastAPI', category: 'Backend', context: 'Asynchronous Python REST APIs with Pydantic validation', highlight: true },
      { name: 'Flask', category: 'Backend', context: 'Lightweight microservices and testing endpoints' },
      { name: 'Node.js', category: 'Backend', context: 'Build tooling, npm ecosystem, and SSR runtime' },
      { name: 'PostgreSQL', category: 'Backend', context: 'Relational data models and scam record indices' },
      { name: 'SQLAlchemy', category: 'Backend', context: 'Python ORM, connection pooling, and schema migrations' },
    ],
  },
  {
    id: 'creative-xr',
    title: 'Creative, 3D & XR',
    description: 'Interactive rendering engines, physics-driven animation, and spatial computing toolkits.',
    technologies: [
      { name: 'Three.js', category: 'Creative / XR', context: 'WebGL scene graph, custom meshes, and procedural materials', highlight: true },
      { name: 'React Three Fiber', category: 'Creative / XR', context: 'Declarative 3D canvas and studio lighting setup', highlight: true },
      { name: 'GSAP & ScrollTrigger', category: 'Creative / XR', context: 'Timeline choreography, pinned horizontal scrub, and Lenis sync', highlight: true },
      { name: 'Unity 6', category: 'Creative / XR', context: 'XR environment authoring, physics simulation, and Meta Quest deploy' },
      { name: 'OpenXR & XRI', category: 'Creative / XR', context: 'Cross-platform VR controller input and spatial interactables' },
    ],
  },
  {
    id: 'developer-tools',
    title: 'Tools & Protocols',
    description: 'Testing frameworks, container environments, and verifiable cryptographic specifications.',
    technologies: [
      { name: 'Git & GitHub', category: 'Tools', context: 'Version control, multi-contributor collaboration, and CI workflows', highlight: true },
      { name: 'Docker', category: 'Tools', context: 'Containerized execution sandboxes for test isolation' },
      { name: 'Pytest', category: 'Tools', context: 'Automated regression test runners and assertion suites' },
      { name: 'JSON-LD (RFC 8785)', category: 'Tools', context: 'Cryptographic canonicalization (JCS) and receipt structures' },
    ],
  },
];

// -----------------------------------------------------------------------------
// 3. ENGINEERING APPROACH (4 Principles)
// -----------------------------------------------------------------------------
export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    number: '01',
    headline: 'Understand the problem before choosing the technology.',
    description:
      'Resist reaching for frameworks or libraries prematurely. Clearly delineating constraints, inputs, and desired failure modes reveals the simplest effective architecture.',
  },
  {
    number: '02',
    headline: 'Build a clear foundation before adding complexity.',
    description:
      'A dependable baseline with clean data flow, deterministic state, and strict typing makes advanced interactive flourishes and 3D scenes straightforward to integrate.',
  },
  {
    number: '03',
    headline: 'Test assumptions instead of trusting appearances.',
    description:
      'AI outputs, incoming client payloads, and third-party data require deterministic verification rather than subjective evaluation. What matters is verifiable proof.',
  },
  {
    number: '04',
    headline: 'Iterate based on what actually works.',
    description:
      'Measure real device performance, audit responsive viewports across screen sizes, and refine through empirical testing rather than theoretical perfection.',
  },
];
