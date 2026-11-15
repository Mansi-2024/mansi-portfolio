/**
 * Mansi Konde — Capabilities, Technical Stack & Engineering Approach Data
 * Strictly evidence-based, grounded in verified project repositories and actual architectures.
 * No inflated buzzwords, no unsubstantiated certifications, no fake proficiency meters.
 */

export interface TechnologyProjectRef {
  slug: string;
  title: string;
}

export interface TechnologyItem {
  name: string;
  context: string;
  highlight?: boolean;
  projects?: TechnologyProjectRef[];
}

export interface TechCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: TechnologyItem[];
}

export interface EngineeringPrinciple {
  id: string;
  headline: string;
  subtitle: string;
  description: string;
  caseEvidence: {
    projectSlug: string;
    projectTitle: string;
    implementation: string;
    decision: string;
  };
}

// -----------------------------------------------------------------------------
// 1. VERIFIED TECHNICAL ECOSYSTEM (7 Domains)
// -----------------------------------------------------------------------------
export const techStackCategories: TechCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    tagline: 'Foundations & Runtimes',
    description: 'Core programming languages used across verified repositories and engineering foundations.',
    technologies: [
      {
        name: 'Python',
        context: 'FastAPI services, AST static analysis, automated Pytest engines, and data pipelines',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'vibecheck', title: 'VibeCheck' },
          { slug: 'bugproof', title: 'BugProof' },
          { slug: 'cropshield-ai', title: 'CropShield AI' },
        ],
      },
      {
        name: 'TypeScript',
        context: 'Strict typing across Next.js applications, RFC 8785 evidence schemas, and UI components',
        highlight: true,
        projects: [
          { slug: 'sealedproof', title: 'SealedProof' },
        ],
      },
      {
        name: 'JavaScript (ES6+)',
        context: 'Modern browser runtime execution, asynchronous DOM manipulation, and dynamic canvas APIs',
      },
      {
        name: 'C#',
        context: 'Unity 6 XR interaction rigs, spatial grab mechanics, and emergency procedure scripts',
        highlight: true,
        projects: [
          { slug: 'cbrn-vr', title: 'CBRN VR' },
        ],
      },
      {
        name: 'C++',
        context: 'Data structures, algorithmic problem solving, and academic engineering coursework',
      },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Architecture',
    tagline: 'Modern Web Interfaces',
    description: 'Component-driven web applications built for clarity, responsiveness, and performance.',
    technologies: [
      {
        name: 'Next.js 16',
        context: 'App Router architecture, React Server Components, Turbopack, and static site generation',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'vibecheck', title: 'VibeCheck' },
          { slug: 'cropshield-ai', title: 'CropShield AI' },
        ],
      },
      {
        name: 'React 19',
        context: 'Declarative component composition, custom hooks, UI state management, and transitions',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'vibecheck', title: 'VibeCheck' },
        ],
      },
      {
        name: 'Tailwind CSS v4',
        context: 'Modern CSS variables, tokenized dark themes, fluid typography clamps, and responsive layouts',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'vibecheck', title: 'VibeCheck' },
        ],
      },
      {
        name: 'HTML5 & Web APIs',
        context: 'Semantic DOM architecture, Web Cryptography API, Canvas 2D procedural graphics, and accessibility',
        projects: [
          { slug: 'sealedproof', title: 'SealedProof' },
        ],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    tagline: 'Reliable Service Architecture',
    description: 'Service frameworks and API architectures handling data ingestion, security, and verification.',
    technologies: [
      {
        name: 'FastAPI',
        context: 'High-performance asynchronous Python REST APIs, dependency injection, and Pydantic validation',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'cropshield-ai', title: 'CropShield AI' },
          { slug: 'vibecheck', title: 'VibeCheck' },
        ],
      },
      {
        name: 'Flask',
        context: 'Lightweight backend microservices, impact verification endpoints, and test orchestration',
        projects: [
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
      {
        name: 'Node.js',
        context: 'Build runtimes, npm package ecosystem, cryptographic verification scripts, and SSR tooling',
        projects: [
          { slug: 'sealedproof', title: 'SealedProof' },
        ],
      },
      {
        name: 'RESTful Architecture',
        context: 'Resource modeling, structured error contracts, token-bucket rate limiting, and OpenAPI specs',
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
    ],
  },
  {
    id: 'databases',
    title: 'Data & Persistence',
    tagline: 'Structured Storage & Schemas',
    description: 'Relational data models, geospatial representation, and version-controlled migrations.',
    technologies: [
      {
        name: 'PostgreSQL',
        context: 'Relational schema design, audit logs, scam pattern stores, and indexed verification records',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
      {
        name: 'SQLAlchemy & Alembic',
        context: 'Declarative Python ORM models, connection pooling, and version-controlled database migrations',
        projects: [
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
      {
        name: 'PostGIS & GeoJSON',
        context: 'Geospatial coordinate storage, field polygon boundary representation, and spatial indexing',
        projects: [
          { slug: 'cropshield-ai', title: 'CropShield AI' },
        ],
      },
    ],
  },
  {
    id: 'ai-verification',
    title: 'Applied AI & Verification',
    tagline: 'Deterministic Logic & Evaluation',
    description: 'Static AST inspection, deterministic guardrails, structured evaluation, and provenance.',
    technologies: [
      {
        name: 'Python AST (ast module)',
        context: 'Source code syntax tree parsing, security anti-pattern detection, and caller dependency mapping',
        highlight: true,
        projects: [
          { slug: 'vibecheck', title: 'VibeCheck' },
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
      {
        name: 'Deterministic Verification Chains',
        context: 'Separating probabilistic AI extraction from authoritative registry validation to prevent hallucinations',
        highlight: true,
        projects: [
          { slug: 'rakshascan', title: 'RakshaScan' },
        ],
      },
      {
        name: 'Pytest Test Orchestration',
        context: 'Automated regression suite generation, failure isolation, and coverage delta calculation',
        projects: [
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
      {
        name: 'Applied ML & Remote Sensing',
        context: 'Multi-spectral Sentinel-2 NDVI index synthesis, weather telemetry correlation, and risk modeling',
        projects: [
          { slug: 'cropshield-ai', title: 'CropShield AI' },
        ],
      },
    ],
  },
  {
    id: 'creative-3d',
    title: 'Interactive 3D & XR',
    tagline: 'Spatial Computing & Physics',
    description: 'WebGL scene graphs, physics-driven browser animation, and virtual reality simulations.',
    technologies: [
      {
        name: 'Three.js',
        context: 'WebGL scene graph, procedural geometry, lighting, camera physics, and material shaders',
        highlight: true,
      },
      {
        name: 'React Three Fiber & Drei',
        context: 'Declarative 3D canvas management, adaptive DPR scaling, and pointer physics interaction',
        highlight: true,
      },
      {
        name: 'GSAP & ScrollTrigger',
        context: 'Timeline choreography, pinned horizontal gallery scrub, and Lenis smooth scroll synchronization',
        highlight: true,
      },
      {
        name: 'Unity 6 & OpenXR',
        context: 'XR Interaction Toolkit 3.0, 6DOF grab mechanics, and virtual emergency training environments',
        highlight: true,
        projects: [
          { slug: 'cbrn-vr', title: 'CBRN VR' },
        ],
      },
    ],
  },
  {
    id: 'tools-protocols',
    title: 'Tools & Protocols',
    tagline: 'Engineering Workflow & Standards',
    description: 'Testing frameworks, container environments, and verifiable cryptographic specifications.',
    technologies: [
      {
        name: 'Git & GitHub',
        context: 'Version control, asynchronous feature branches, PR reviews, and multi-contributor collaboration',
        highlight: true,
        projects: [
          { slug: 'bugproof', title: 'BugProof' },
          { slug: 'cbrn-vr', title: 'CBRN VR' },
        ],
      },
      {
        name: 'Docker',
        context: 'Containerized execution sandboxes for clean, isolated regression test execution',
        projects: [
          { slug: 'bugproof', title: 'BugProof' },
        ],
      },
      {
        name: 'RFC 8785 (JSON Canonicalization)',
        context: 'Cryptographic JSON canonicalization (JCS) and deterministic hash digest generation',
        projects: [
          { slug: 'sealedproof', title: 'SealedProof' },
        ],
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// 2. ENGINEERING APPROACH (4 Concrete Principles Grounded in Case Studies)
// -----------------------------------------------------------------------------
export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'constraints-first',
    headline: 'Understand constraints before choosing a solution.',
    subtitle: 'Resist reaching for frameworks or AI models prematurely.',
    description:
      'Every technical problem has inherent invariants: latency budgets, security threat vectors, data volatility, and failure modes. Delineating what cannot fail before selecting tools avoids accidental architectural complexity and premature optimization.',
    caseEvidence: {
      projectSlug: 'rakshascan',
      projectTitle: 'RakshaScan',
      implementation: 'Decoupled probabilistic LLM extraction from risk classification.',
      decision:
        'Generative AI models frequently hallucinate confirmation when evaluating fraudulent websites. Rather than asking an LLM for a safety score, RakshaScan uses the model strictly to parse unstructured HTML into structured claim schemas, executing all risk scoring through deterministic Python business logic.',
    },
  },
  {
    id: 'modular-deconstruction',
    headline: 'Deconstruct complexity into verifiable components.',
    subtitle: 'Design explicit boundaries where each stage can be validated independently.',
    description:
      'Monolithic systems fail in opaque, unpredictable ways. Breaking workflows into decoupled modules with explicit input and output schemas makes each stage verifiable in isolation, easier to test, and resilient to failures in adjacent layers.',
    caseEvidence: {
      projectSlug: 'cbrn-vr',
      projectTitle: 'CBRN VR Simulation',
      implementation: '4-station procedural emergency decontamination sequence.',
      decision:
        'Instead of an unconstrained training sandbox, the simulation partitions emergency triage into four discrete stations: perimeter briefing, detector calibration, PPE inspection, and decontamination washdown. Each station validates trainee compliance before advancing.',
    },
  },
  {
    id: 'traceable-state',
    headline: 'Design for traceability and explainable state.',
    subtitle: 'Never hide system uncertainty behind a simplified binary verdict.',
    description:
      'Software that informs high-stakes decisions—whether financial fraud detection, crop risk evaluation, or code verification—must be able to explain how it arrived at a conclusion. Explicit state machines build trust far more reliably than opaque heuristics.',
    caseEvidence: {
      projectSlug: 'rakshascan',
      projectTitle: 'RakshaScan',
      implementation: '5-state deterministic trust matrix (VERIFIED to UNAVAILABLE).',
      decision:
        'Refused a binary "safe/unsafe" verdict. If a government registry API is unreachable, the system explicitly returns UNAVAILABLE rather than guessing. Every assertion links directly back to the exact DOM segment and registry evidence stub that produced it.',
    },
  },
  {
    id: 'deterministic-validation',
    headline: 'Validate through deterministic tests and real-world constraints.',
    subtitle: 'Test assumptions against edge cases and actual execution environments.',
    description:
      'Theoretical correctness is meaningless if software fails under edge conditions, network delays, or unexpected hardware constraints. Empirical testing through isolated test runners, dependency impact mapping, and multi-viewport auditing ensures systems actually hold up.',
    caseEvidence: {
      projectSlug: 'bugproof',
      projectTitle: 'BugProof',
      implementation: 'Caller-graph impact analysis and isolated test execution.',
      decision:
        'Traced caller graphs across pull request diffs to dynamically synthesize Pytest test cases targeting modified codepaths. Test suites run inside isolated subprocess environments to prevent state pollution and flaky test passes.',
    },
  },
];

// Preserved capability groups type for compatibility
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

export const capabilityGroups: CapabilityGroup[] = [];
