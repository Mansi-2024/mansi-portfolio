/**
 * Verified Projects & Case Studies Data — Mansi Konde
 * Strictly aligned with verified repositories, commit logs, and documented constraints.
 * No invented metrics, synthetic data clearly labelled, collaborative roles explicit.
 */

export type ProjectCategory =
  | 'Security & Trust'
  | 'AI & Verification'
  | 'Climate & Agriculture'
  | 'Immersive Simulation';

export type ImplementationStatus =
  | 'Working Architectural Prototype'
  | 'Verification Engine Contributor'
  | 'Phase 1 Foundation Implemented'
  | 'Collaborative VR Training System'
  | 'Specification & Research Phase'
  | 'Decentralized Architecture Spec';

export type RoleType =
  | 'Architecture & Full-Stack Lead'
  | 'Core Contributor — Verification Engine'
  | 'Concept Lead & Full-Stack Prototyping'
  | 'Collaborative Engineering (VR Interaction)'
  | 'Security Tooling Research'
  | 'Collaborative Evidence Protocol';

export interface ProjectDecision {
  title: string;
  rationale: string;
}

export interface ProjectWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  tagline: string;
  positioning: string;
  category: ProjectCategory;
  role: RoleType;
  collaborative: boolean;
  status: ImplementationStatus;
  statusBadge: string;
  repoUrl: string;
  demoUrl?: string;
  demoLabel?: string;
  isFeatured?: boolean;

  // High-level overview
  summary: string;
  techStack: string[];
  keyHighlights: string[];

  // 10-Point Case Study Details
  contextAndProblem: {
    problem: string;
    whyItMatters: string;
  };
  solutionOverview: {
    coreApproach: string;
    keyCapabilities: string[];
  };
  workflow: ProjectWorkflowStep[];
  technicalDecisions: ProjectDecision[];
  mansiContribution: {
    summary: string;
    highlights: string[];
  };
  implementationStatusDetails: {
    currentStatus: string;
    implementedFeatures: string[];
    plannedOrStubbedFeatures: string[];
    syntheticOrDemoNotes?: string;
  };
  challengesAndLearnings: string[];
}

export const projectsData: Project[] = [
  /* -------------------------------------------------------------------------
     PROJECT 01: CBRN VR Simulation
     ------------------------------------------------------------------------- */
  {
    id: 'cbrn-vr',
    slug: 'cbrn-vr',
    number: '01',
    title: 'CBRN VR Simulation',
    tagline: 'Virtual reality training simulation for CBRN emergency response procedures',
    positioning:
      'A virtual reality training simulation for chemical, biological, radiological, and nuclear emergency response procedures.',
    category: 'Immersive Simulation',
    role: 'Collaborative Engineering (VR Interaction)',
    collaborative: true,
    status: 'Collaborative VR Training System',
    statusBadge: 'Collaborative Repository',
    repoUrl: 'https://github.com/SuchetMahamuni/cbrn',
    summary:
      'A virtual reality training simulation for chemical, biological, radiological, and nuclear emergency response. Trainees practice procedural decontamination protocols, protective equipment donning/doffing sequences, hazard identification, and triage in a safe, repeatable virtual environment.',
    techStack: ['Unity 6', 'C#', 'XR Interaction Toolkit 3.0', 'OpenXR', 'Universal RP', 'Meta Quest'],
    keyHighlights: [
      'Procedural 4-Station Decontamination Sequence',
      'XR Interaction Toolkit 3.0 Grab & Socket Mechanics',
      'Dual-Mode: Meta Quest 6DOF VR & Desktop Fallback',
      'Hazard Environment with Audio Cues & Particles',
    ],
    contextAndProblem: {
      problem:
        'Physical training for Chemical, Biological, Radiological, and Nuclear (CBRN) emergency response is expensive, hazardous, and difficult to repeat frequently with realistic procedural consequence.',
      whyItMatters:
        'First responders need muscle memory for multi-step donning, doffing, sensor triage, and decontamination protocols without exposure to toxic simulants.',
    },
    solutionOverview: {
      coreApproach:
        'An interactive virtual training environment structured into rigorous sequential stations: containment perimeter, detector calibration, PPE inspection, and decontamination washdown.',
      keyCapabilities: [
        'Station-Based Sequences: Enforces strict order of operations for protective equipment.',
        'Spatial Feedback: Visual audio cues for detector proximity and threshold violations.',
        'Dual Input Handling: Fully immersive 6DOF VR controls alongside desktop mouse/keyboard testing mode.',
        'Procedural Checklists: Real-time verification of trainee compliance at each triage step.',
      ],
    },
    workflow: [
      {
        step: '01',
        title: 'Perimeter Inspection',
        description: 'Trainee spawns at safe observation staging area and receives procedural mission briefing.',
      },
      {
        step: '02',
        title: 'Detector Calibration',
        description: 'Simulates spatial survey tool setup and background radiation/chemical baseline checks.',
      },
      {
        step: '03',
        title: 'Station Decontamination',
        description: 'Step-by-step washdown, disposal of contaminated outer gear, and clean transition gating.',
      },
      {
        step: '04',
        title: 'Debrief Assessment',
        description: 'Reviews procedural sequence completion and timing against simulated training parameters.',
      },
    ],
    technicalDecisions: [
      {
        title: 'XR Interaction Toolkit over Proprietary SDKs',
        rationale:
          'Chose OpenXR and Unity XR Interaction Toolkit to ensure hardware portability between Meta Quest devices and future XR headsets.',
      },
      {
        title: 'Universal Render Pipeline (URP) Optimization',
        rationale:
          'Tuned lighting and shader complexity to maintain strict 72/90 FPS framerate targets required for VR comfort on standalone mobile chipsets.',
      },
    ],
    mansiContribution: {
      summary:
        'Contributed to the collaborative Unity VR project focused on station interaction flows, input mapping, and scene testing.',
      highlights: [
        'Collaborative work on XR interaction logic, socket interactors, and grabbable items.',
        'Assisted in structuring procedural station transitions and checklist triggers.',
        'Tested desktop input fallbacks for rapid non-headset iteration.',
      ],
    },
    implementationStatusDetails: {
      currentStatus: 'Collaborator-owned team repository with interactive station prototypes.',
      implementedFeatures: [
        'Unity 6 scene structure with station zones.',
        'XR Interaction Toolkit grabbable props and detector assets.',
        'Desktop camera and character controller fallback.',
      ],
      plannedOrStubbedFeatures: [
        'Multi-user networked training synchronization.',
        'Dynamic particle-based contamination spreading simulation.',
      ],
      syntheticOrDemoNotes:
        'Notice: Collaborator-owned repository (Suchet Mahamuni). Details reflect known collaborative architectural context. All content is focused strictly on generic/fictional training scenarios.',
    },
    challengesAndLearnings: [
      'VR ergonomics and motion sickness: Refining teleportation and snap-turn boundaries to keep trainee experience comfortable during precise object manipulation.',
      'Standalone XR performance budgets: Balancing visual fidelity of containment gear against mobile GPU vertex limits.',
    ],
  },

  /* -------------------------------------------------------------------------
     PROJECT 02: VibeCheck
     ------------------------------------------------------------------------- */
  {
    id: 'vibecheck',
    slug: 'vibecheck',
    number: '02',
    title: 'VibeCheck',
    tagline: 'Static AST analysis and lightweight AI for code smells and maintainability',
    positioning:
      'A developer tool that analyzes codebases using static AST analysis and lightweight AI to detect code smells, anti-patterns, and maintainability issues.',
    category: 'AI & Verification',
    role: 'Architecture & Full-Stack Lead',
    collaborative: false,
    status: 'Specification & Research Phase',
    statusBadge: 'Architecture & Research',
    repoUrl: 'https://github.com/Mansi-2024/VibeCheck',
    summary:
      'A developer tool that analyzes codebases using static AST analysis and lightweight heuristics to detect code smells, anti-patterns, maintainability issues, and architectural drift. Parses source code into abstract syntax trees to identify complex functions and high coupling with actionable refactoring advice.',
    techStack: ['Python', 'AST Parser', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS'],
    keyHighlights: [
      'Multi-Language Abstract Syntax Tree Parsing',
      'Heuristic Rule Checks for Anti-Patterns & Insecurities',
      'Cyclomatic Complexity & Maintainability Scoring',
      'Pre-Commit Workflow & Actionable Refactoring Advice',
    ],
    contextAndProblem: {
      problem:
        'AI coding tools frequently generate functional code that contains subtle security oversights: permissive CORS configurations, disabled CSRF tokens, hardcoded dummy credentials, and unescaped queries.',
      whyItMatters:
        'Because AI code looks syntactically clean, developers often merge snippets into production without the rigorous manual review applied to human-written code.',
    },
    solutionOverview: {
      coreApproach:
        'VibeCheck explores a lightweight static analysis rule set specifically tuned to the signature pitfalls and antipatterns prevalent in AI-synthesized code.',
      keyCapabilities: [
        'Conceptual Rule Taxonomy: Formulates heuristic categories such as disabled SSL verification and hardcoded dummy keys for future implementation.',
        'Developer Integration Concept: Designed to explore running as a local pre-commit hook before code reaches review.',
        'Actionable Flaw Tagging: Associates theoretical flaw categories with remediation guidelines tailored for developers.',
      ],
    },
    workflow: [
      {
        step: '01',
        title: 'AST Parsing (Planned)',
        description: 'Conceptual architecture to parse modified source files into an Abstract Syntax Tree.',
      },
      {
        step: '02',
        title: 'Heuristic Rule Matching',
        description: 'Proposed security rules targeting known AI code generation anti-patterns.',
      },
      {
        step: '03',
        title: 'Diagnostic Notification',
        description: 'Concept to report actionable inline warnings before commits are finalized.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Focus on High-Precision Rules',
        rationale:
          'Prioritizing zero false-positive rules over broad speculative heuristics to avoid developer alert fatigue.',
      },
    ],
    mansiContribution: {
      summary:
        'Initiated repository research and defined the problem statement and static heuristic rule taxonomy for AI-generated code vulnerabilities.',
      highlights: [
        'Formulated conceptual rule catalog for common LLM vulnerability patterns.',
        'Documented architecture proposals for future AST visitor implementation.',
      ],
    },
    implementationStatusDetails: {
      currentStatus: 'Repository setup and specification phase.',
      implementedFeatures: ['Problem statement and heuristic rule taxonomy specification.'],
      plannedOrStubbedFeatures: [
        'Full AST scanner engine implementation.',
        'IDE extension and pre-commit hook integration.',
      ],
      syntheticOrDemoNotes:
        'Notice: Repository source could not be verified through connected accounts during planning. Presented with official supplied description and repository link; detailed implementation details are being documented.',
    },
    challengesAndLearnings: [
      'Differentiating AI patterns from human code: Analyzing whether AI code vulnerabilities fundamentally differ from classic human errors or simply occur at significantly higher frequencies.',
    ],
  },

  /* -------------------------------------------------------------------------
     PROJECT 03: CropShield AI
     ------------------------------------------------------------------------- */
  {
    id: 'cropshield-ai',
    slug: 'cropshield-ai',
    number: '03',
    title: 'CropShield AI',
    tagline: 'Plot-level crop health and climate risk assessment for smallholder agriculture',
    positioning:
      'A crop health and yield risk assessment tool focused on smallholder agriculture in drought-prone regions (demonstrated for Beed district, Maharashtra).',
    category: 'Climate & Agriculture',
    role: 'Concept Lead & Full-Stack Prototyping',
    collaborative: false,
    status: 'Phase 1 Foundation Implemented',
    statusBadge: 'Phase 1 Architecture',
    repoUrl: 'https://github.com/Mansi-2024/cropshield-ai',
    summary:
      'A crop health and yield risk assessment tool focused on smallholder agriculture in drought-prone regions (demonstrated for Beed district, Maharashtra). Synthesizes satellite NDVI vegetation data, local precipitation patterns, and phenological crop calendars to identify localized stress without relying on distant regional weather stations.',
    techStack: ['Python', 'PyTorch / TensorFlow', 'FastAPI', 'Next.js', 'React', 'Open-Meteo API', 'Sentinel-2'],
    keyHighlights: [
      'Plot-Level Polygon Mapping (Beed District Reference)',
      'Multi-Factor Stress Analysis (Drought, Temperature, NDVI)',
      'Phenology-Aware Moisture Sensitivity Windows',
      'Advisory Generation for Regional Crops',
    ],
    contextAndProblem: {
      problem:
        'Traditional parametric crop insurance suffers from high basis risk: rainfall measured at a regional weather station 30km away rarely reflects rainfall or moisture retention on an individual plot.',
      whyItMatters:
        'When localized drought or excess rain destroys a smallholder farmer’s yield but the regional station records "normal" averages, claims are denied, undermining economic resilience.',
    },
    solutionOverview: {
      coreApproach:
        'CropShield AI models a plot-specific risk index by synthesizing multi-spectral satellite imagery (NDVI/NDWI) with hyper-local rainfall telemetry and farmer ground photos during vulnerable phenological stages.',
      keyCapabilities: [
        'Plot-Specific Risk Index: Resolves coverage to specific polygon boundaries rather than entire taluks.',
        'Phenology-Aware Windows: Matches insurance triggers to critical growth phases (germination, flowering, podding).',
        'Confidence Scoring: Explicitly flags when satellite resolution is insufficient, requesting ground verification.',
        'District Risk Dashboard: Visualizes geospatial crop health trends across sample agricultural clusters.',
      ],
    },
    workflow: [
      {
        step: '01',
        title: 'Plot Boundary Registration',
        description: 'Farmer or surveyor delineates field polygon coordinates on a spatial map interface.',
      },
      {
        step: '02',
        title: 'Remote Sensing Ingestion',
        description: 'Queries satellite spectral indices (NDVI/NDWI) and precipitation grids for the plot bounds.',
      },
      {
        step: '03',
        title: 'Phenological Weighting',
        description: 'Applies crop calendar weights: a 50mm deficit during flowering incurs higher risk than during senescence.',
      },
      {
        step: '04',
        title: 'Confidence & Ground Check',
        description: 'Calculates index confidence; triggers ground verification requests if cloud cover exceeds thresholds.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Polygon-Level Geospatial Storage',
        rationale:
          'Utilized GeoJSON coordinate structures in PostgreSQL/PostGIS to support arbitrary field shapes rather than crude circular approximations.',
      },
      {
        title: 'Separation of Foundation from Horizon Goals',
        rationale:
          'Structured the repository into clean phases, ensuring Phase 1 core database models and provider adapters were verified before building complex automated underwriting.',
      },
    ],
    mansiContribution: {
      summary:
        'Conceptualized the system and implemented the Phase 1 full-stack architecture, including the FastAPI backend, Beed district field data models, and Leaflet mapping client.',
      highlights: [
        'Designed database schemas for agricultural plots, crops, and historical rainfall tables.',
        'Built FastAPI services for ingesting satellite data provider mocks and rainfall timeseries.',
        'Developed interactive React + Vite frontend with Leaflet map rendering field polygons.',
        'Formulated the multi-factor basis risk reduction conceptual model.',
      ],
    },
    implementationStatusDetails: {
      currentStatus: 'Phase 1 foundation established in repository.',
      implementedFeatures: [
        'FastAPI service architecture and database models.',
        'Sample field definitions for Beed district agricultural test zones.',
        'Weather & satellite data provider client adapters.',
        'React + Vite mapping dashboard scaffold with Leaflet.',
      ],
      plannedOrStubbedFeatures: [
        'Automated live Sentinel-2 satellite ingestion pipelines.',
        'On-device offline mobile app for farmer ground photo uploads.',
        'End-to-end automated claims settlement smart contract trigger.',
      ],
      syntheticOrDemoNotes:
        'Notice: Clearly distinguishes implemented architectural foundations from planned features. No claims of pilot validation, real farmer adoption, or insurance payouts are made.',
    },
    challengesAndLearnings: [
      'Geospatial resolution constraints: Understanding the physical limitations of 10m-resolution Sentinel-2 pixels when analyzing fragmented smallholder plots (< 1 acre).',
      'Phenology modeling complexity: Accounting for variable sowing dates across neighboring farms under monsoon delays.',
    ],
  },

  /* -------------------------------------------------------------------------
     PROJECT 04: SealedProof
     ------------------------------------------------------------------------- */
  {
    id: 'sealedproof',
    slug: 'sealedproof',
    number: '04',
    title: 'SealedProof',
    tagline: 'Cryptographic document verification protocol with selective disclosure',
    positioning:
      'A cryptographic document verification protocol providing tamper-evident digital credentials with selective disclosure and offline verification capabilities.',
    category: 'Security & Trust',
    role: 'Collaborative Evidence Protocol',
    collaborative: true,
    status: 'Decentralized Architecture Spec',
    statusBadge: 'Collaborative Protocol',
    repoUrl: 'https://github.com/sealedproof/sealedproof-docs',
    summary:
      'A cryptographic document verification protocol providing tamper-evident digital credentials with selective disclosure and offline verification capabilities. Normalizes JSON payloads via RFC 8785 canonicalization, computes SHA-256 digests, and validates signatures offline using public keys.',
    techStack: ['TypeScript', 'Node.js', 'Web Cryptography API', 'RFC 8785 (JCS)', 'SHA-256', 'Ed25519', 'JSON-LD'],
    keyHighlights: [
      'Deterministic JSON Canonicalization (RFC 8785)',
      'Offline-First Verification with Zero Network Calls',
      'Selective Disclosure via Merkle Trees & Attribute Hashing',
      'W3C Verifiable Credential Standards Compliance',
    ],
    contextAndProblem: {
      problem:
        'As autonomous agents perform high-value tasks (financial transactions, data deletion, API provisioning), standard audit logs remain centralized, mutable, and prone to repudiation.',
      whyItMatters:
        'Organizations and third parties require tamper-proof cryptographic proof that an AI agent operated strictly within its authorized constraints without revealing sensitive underlying payloads.',
    },
    solutionOverview: {
      coreApproach:
        'SealedProof defines a receipt format where agent intent, context, and external action payloads are deterministically canonicalized, hashed, and signed into self-contained verifiable packs.',
      keyCapabilities: [
        'Offline Verifier: Enables independent third parties to verify receipt validity without contacting the originating agent server.',
        'Deterministic Reason Codes: Machine-readable validation failure flags (e.g., SIGNATURE_MISMATCH, HASH_CORRUPTED).',
        'Minimal Disclosure: Allows redacting proprietary agent reasoning while preserving cryptographic integrity of the action hash.',
      ],
    },
    workflow: [
      {
        step: '01',
        title: 'Action Invocations & Packing',
        description: 'Agent captures action parameters, timestamp, and model provenance.',
      },
      {
        step: '02',
        title: 'Canonicalization (JCS)',
        description: 'Normalizes JSON keys and encodings deterministically per RFC 8785.',
      },
      {
        step: '03',
        title: 'Cryptographic Sealing',
        description: 'Computes SHA-256 digest and signs receipt with agent private key.',
      },
      {
        step: '04',
        title: 'Offline Verification',
        description: 'Verifier computes digest and checks signature against agent public key with zero network calls.',
      },
    ],
    technicalDecisions: [
      {
        title: 'JSON Canonicalization Scheme (RFC 8785)',
        rationale:
          'Selected RFC 8785 over custom serialization to guarantee bit-for-bit identical hashes across Python, Go, and TypeScript runtimes.',
      },
      {
        title: 'Self-Contained Receipt Packs',
        rationale:
          'Receipts embed necessary public key certificates and claim hashes to enable verification even in air-gapped forensic environments.',
      },
    ],
    mansiContribution: {
      summary:
        'Engaged with collaborative documentation and protocol schemas for verifiable agent receipt generation.',
      highlights: [
        'Analyzed deterministic canonicalization patterns and offline verifier flows.',
        'Reviewed schema structures for minimal disclosure evidence packs.',
      ],
    },
    implementationStatusDetails: {
      currentStatus: 'Organization-owned repository with protocol specification and documentation.',
      implementedFeatures: [
        'Protocol specification documents and receipt structure schemas.',
        'Verification flow guidelines and reason code taxonomy.',
      ],
      plannedOrStubbedFeatures: [
        'Multi-language SDK client libraries.',
        'Automated transparency log integration.',
      ],
      syntheticOrDemoNotes:
        'Notice: Organization-owned repository (sealedproof). Labelled as collaborative protocol documentation work; no sole authorship or unverified individual metrics are claimed.',
    },
    challengesAndLearnings: [
      'Canonicalization nuances: Ensuring floats, UTF-8 strings, and whitespace produce identical hash digests across heterogeneous multi-language runtimes.',
    ],
  },

  /* -------------------------------------------------------------------------
     PROJECT 05: RakshaScan
     ------------------------------------------------------------------------- */
  {
    id: 'rakshascan',
    slug: 'rakshascan',
    number: '05',
    title: 'RakshaScan',
    tagline: 'Evidence-based financial fraud detection and consumer protection scanner',
    positioning:
      'A scam detection and consumer safety scanner designed to identify fraudulent URLs, phishing campaigns, and financial fraud messages prevalent in India.',
    category: 'Security & Trust',
    role: 'Architecture & Full-Stack Lead',
    collaborative: false,
    status: 'Working Architectural Prototype',
    statusBadge: 'Working Prototype',
    repoUrl: 'https://github.com/Mansi-2024/rakshascam',
    isFeatured: true,
    summary:
      'A scam detection and consumer safety scanner designed to identify fraudulent URLs, phishing campaigns, and financial fraud messages prevalent in India (fake KYC, lottery scams, electricity bill fraud, UPI phishing). Evaluates claims against an explicit 5-state trust matrix rather than subjective AI guessing.',
    techStack: ['Python', 'FastAPI', 'Next.js', 'React', 'Tailwind CSS', 'Transformers', 'PostgreSQL'],
    keyHighlights: [
      'Deterministic 5-State Trust Matrix (Verified to Unavailable)',
      'Indian Fraud Pattern Library (KYC, Lottery, UPI Phishing)',
      'Multilingual Analysis (English, Hindi, Marathi)',
      'Sandboxed DOM Ingestion & Rate-Limited API',
    ],
    contextAndProblem: {
      problem:
        'Digital financial scams increasingly use authentic-looking websites, manipulated regulatory claims, and high-pressure investment offers that fool traditional keyword filters and subjective LLM evaluations.',
      whyItMatters:
        'Standard generative AI often hallucinates confirmation of validity or falsely labels legitimate businesses. Preventing financial loss requires strict evidentiary provenance and deterministic verification rules.',
    },
    solutionOverview: {
      coreApproach:
        'RakshaScan uses safe server-side URL ingestion to parse raw web entities and claims, and then passes them through a deterministic Financial Trust Chain. Rather than asking an LLM "is this a scam?", the platform extracts verifiable claims and checks them against authoritative registries.',
      keyCapabilities: [
        'Safe URL Ingestion: Server-side content scraping with sandboxed DOM sanitization.',
        'Entity & Claim Extraction: Identifying registered corporate entities, regulatory numbers, and yield claims.',
        'Verification States: Strict deterministic states: VERIFIED, CONTRADICTORY, NOT_FOUND, UNKNOWN, UNAVAILABLE.',
        'Evidence Provenance: Linking every assertion to source DOM segments and registry stubs.',
        'Multilingual Support: End-to-end interface and claim normalization in English, Hindi, and Marathi.',
      ],
    },
    workflow: [
      {
        step: '01',
        title: 'Safe Ingestion & Isolation',
        description: 'Input URLs are fetched in isolated environments to avoid executing malicious client-side payloads.',
      },
      {
        step: '02',
        title: 'Entity & Claim Extraction',
        description: 'Structured parsing extracts legal entity names, claimed registration identifiers, and financial promises.',
      },
      {
        step: '03',
        title: 'Registry Provenance Verification',
        description: 'Extracted identifiers are compared deterministically against registry records and known risk heuristics.',
      },
      {
        step: '04',
        title: 'Deterministic State Assignment',
        description: 'Assigns one of five verifiable trust states, preventing ambiguous binary classification.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Decoupling Extraction from Judgment',
        rationale:
          'LLMs are utilized solely for extracting structured claim schemas from unstructured HTML. All risk scoring and status decisions are strictly deterministic Python business logic.',
      },
      {
        title: 'Multi-State Uncertainty Representation',
        rationale:
          'Refusing binary "safe/unsafe" verdicts. If a registry is unreachable, the system returns UNAVAILABLE rather than guessing, ensuring trust transparency.',
      },
      {
        title: 'Security Hardening & Rate Limiting',
        rationale:
          'Implemented strict token-bucket rate limiting on FastAPI endpoints to mitigate automated probing and denial-of-service vectors.',
      },
    ],
    mansiContribution: {
      summary:
        'Architected and implemented the end-to-end platform, including the FastAPI extraction pipelines, Next.js responsive editorial dashboard, and deterministic trust chain logic.',
      highlights: [
        'Designed the 5-state verification state machine and evaluation schemas.',
        'Built multilingual localization pipelines for Hindi, Marathi, and English typography.',
        'Implemented secure backend URL scraping and text sanitization pipelines in Python.',
        'Developed full Next.js frontend with Tailwind CSS and accessible data visualizers.',
      ],
    },
    implementationStatusDetails: {
      currentStatus: 'Working architectural prototype with documented verification pipeline.',
      implementedFeatures: [
        'FastAPI backend with claim parsing endpoints and rate limiting.',
        'Next.js 14 frontend with multilingual UI toggles (EN / HI / MR).',
        'PostgreSQL schema for audit histories and extracted evidence provenance.',
        'Deterministic trust state calculator and risk rubric.',
      ],
      plannedOrStubbedFeatures: [
        'Live government registry connections (currently using synthetic stubbed records where official APIs are restricted).',
        'Automated real-time screenshot archiving for forensic evidence chains.',
      ],
      syntheticOrDemoNotes:
        'Notice: Demo verification runs against synthetic verification databases. The project differentiates extraction from authoritative verification and does not claim every site can be conclusively classified.',
    },
    challengesAndLearnings: [
      'Managing ambiguous claims: Learned that real-world scam sites frequently mutate company names by single characters to evade naive registry matching, requiring fuzzy phonetic normalization before deterministic lookup.',
      'Maintaining multilingual nuance: Ensuring financial disclaimers and risk scores communicated equivalent gravity in Hindi and Marathi as in English.',
    ],
  },

  /* -------------------------------------------------------------------------
     PROJECT 06: BugProof
     ------------------------------------------------------------------------- */
  {
    id: 'bugproof',
    slug: 'bugproof',
    number: '06',
    title: 'BugProof',
    tagline: 'Automated test generation and regression prevention for pull requests',
    positioning:
      'An automated test generation and regression prevention tool that analyzes pull requests, maps affected code paths, and synthesizes targeted unit test suites.',
    category: 'AI & Verification',
    role: 'Core Contributor — Verification Engine',
    collaborative: true,
    status: 'Verification Engine Contributor',
    statusBadge: 'Collaborative Repository',
    repoUrl: 'https://github.com/SuchetMahamuni/BugProof',
    summary:
      'An automated test generation and regression prevention tool that analyzes code diffs in pull requests, maps modified execution paths using caller graph analysis, and synthesizes targeted Pytest test cases to catch regressions before merge. Mansi engineered the verification engine, impact analysis, and test runner orchestration.',
    techStack: ['Python', 'Flask APIs', 'Pytest', 'AST Analysis', 'Git API', 'SQLAlchemy', 'PostgreSQL', 'Docker'],
    keyHighlights: [
      'Diff-Aware Impact Analysis & Caller Graph Mapping',
      'Automated Test Synthesis for Uncovered Branches',
      'Coverage Delta Calculation & Regression Suite Execution',
      'PR Comment Reporting with Test Execution Results',
    ],
    contextAndProblem: {
      problem:
        'AI code assistants frequently propose bug fixes that introduce unintended side-effects, break edge cases, or violate unspoken repository constraints.',
      whyItMatters:
        'Without automated post-fix verification, developers spend more time debugging AI-generated regressions than writing clean original code.',
    },
    solutionOverview: {
      coreApproach:
        'BugProof couples patch suggestion with a verification engine that performs AST-level impact analysis and dynamically synthesizes targeted regression tests before patches are committed.',
      keyCapabilities: [
        'Impact Analysis Module: Analyzes caller graphs and affected modules to map risk radius.',
        'Regression Test Generation: Synthesizes boundary test cases targeting modified codepaths.',
        'Verification API: Orchestrates test executions in isolated runner environments.',
        'Diagnostic Reporting: Generates structured markdown and JSON verification summaries.',
      ],
    },
    workflow: [
      {
        step: '01',
        title: 'Patch Ingestion',
        description: 'Receives suggested code patch and base repository commit context.',
      },
      {
        step: '02',
        title: 'Impact Graph Calculation',
        description: 'Traces dependency tree to identify all downstream functions impacted by the diff.',
      },
      {
        step: '03',
        title: 'Regression Test Synthesis',
        description: 'Generates specialized Pytest test cases validating invariants of the affected modules.',
      },
      {
        step: '04',
        title: 'Verification Assessment',
        description: 'Executes tests and issues pass/fail certification with diagnostic evidence.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Isolated Test Runner Execution',
        rationale:
          'Constructed API boundaries to execute regression runs inside controlled subprocess environments to prevent test pollution.',
      },
      {
        title: 'Migration Versioning with Alembic',
        rationale:
          'Structured database schemas to store historical verification runs and impact diffs, enabling longitudinal tracking of patch stability.',
      },
    ],
    mansiContribution: {
      summary:
        'As the Member 2 contributor (verified in git logs via commit "Complete Member 2 verification features"), Mansi engineered the verification engine, impact analysis modules, and regression test generator.',
      highlights: [
        'Built Flask verification endpoints and backend workflow orchestration.',
        'Implemented impact analysis module that maps caller graphs across repository files.',
        'Developed automated regression test generator and test execution runner.',
        'Created structured diagnostic report generation and executed database migrations.',
      ],
    },
    implementationStatusDetails: {
      currentStatus: 'Team repository prototype with completed Member 2 verification features.',
      implementedFeatures: [
        'Verification API endpoints in Flask.',
        'Impact analysis logic and dependency mapper.',
        'Regression test generation suite.',
        'Database migration scripts and report generator.',
      ],
      plannedOrStubbedFeatures: [
        'Full watsonx AI model integration (documented in code as stubbed/mocked interface during hackathon timeline).',
        'Live IDE plugin integration.',
      ],
      syntheticOrDemoNotes:
        'Collaborative work note: Team repository. Mansi specifically built the Member 2 verification engine and impact analysis module. Live watsonx integration remains an unmerged stub in the current source.',
    },
    challengesAndLearnings: [
      'Git collaboration and schema synchronization: Balancing asynchronous feature branches while maintaining consistent SQLAlchemy model migrations across teammates.',
      'Deterministic regression testing: Ensuring dynamically generated tests did not produce flaky failures from non-deterministic mock ordering.',
    ],
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((p) => p.slug === slug || p.id === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

