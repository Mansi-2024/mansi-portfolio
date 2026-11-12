import React from 'react';

interface ProjectVisualProps {
  projectId: string;
  className?: string;
  variant?: 'card' | 'modal';
}

/**
 * ProjectVisual — Handcrafted Architectural Vector Compositions
 * Clearly treated as illustrative technical visualisations, not captured product screenshots.
 * Aligned with the Plum Editorial design system.
 */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({
  projectId,
  className = '',
  variant = 'card',
}) => {
  return (
    <div
      className={`relative w-full rounded-lg border border-border-plum bg-aubergine/40 overflow-hidden flex flex-col justify-between select-none shadow-xl shadow-midnight-plum/60 ${
        variant === 'modal' ? 'aspect-[16/10] sm:aspect-[21/10]' : 'aspect-[16/10]'
      } ${className}`}
      aria-label={`Architectural diagram for project ${projectId}`}
    >
      {/* Blueprint Dot-Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #B7AAB8 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Render Project Specific Architectural Visualization */}
      {projectId === 'rakshascan' && <RakshaScanVisual />}
      {projectId === 'bugproof' && <BugProofVisual />}
      {projectId === 'cropshield-ai' && <CropShieldVisual />}
      {projectId === 'cbrn-vr' && <CbrnVrVisual />}
      {projectId === 'vibecheck' && <VibeCheckVisual />}
      {projectId === 'sealedproof' && <SealedProofVisual />}
    </div>
  );
};

/* =========================================================================
   01: RAKSHASCAN — Financial Trust Chain & 5-State Verification Matrix
   ========================================================================= */
const RakshaScanVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between">
      {/* Header bar */}
      <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-ash-mauve border-b border-border-plum/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
          <span className="text-warm-ivory uppercase tracking-wider">System 01 // Trust Chain</span>
        </div>
        <span className="text-ash-mauve/70">PROVENANCE: STRICT-DETERMINISTIC</span>
      </div>

      {/* Vector Surface */}
      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 460 210" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Ingestion Node */}
          <rect x="20" y="75" width="85" height="50" rx="4" fill="#211826" stroke="#403344" strokeWidth="1.2" />
          <text x="30" y="96" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">URL INGEST</text>
          <text x="30" y="112" fill="#F3EAF0" fontSize="9" fontFamily="DM Sans" fontWeight="500">DOM Sanitizer</text>

          {/* Connection Vector */}
          <path d="M 105 100 L 145 100" stroke="#D7A6B8" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="145,100 139,97 139,103" fill="#D7A6B8" />

          {/* Extraction Engine */}
          <rect x="145" y="65" width="105" height="70" rx="4" fill="#302437" stroke="#D7A6B8" strokeWidth="1.2" />
          <text x="155" y="86" fill="#D7A6B8" fontSize="8" fontFamily="IBM Plex Mono">CLAIM EXTRACTION</text>
          <text x="155" y="103" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Entity &amp; Yields</text>
          <text x="155" y="122" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">Multi-Lang (EN/HI/MR)</text>

          {/* Connection Branch */}
          <path d="M 250 100 C 275 100, 275 60, 295 60" stroke="#403344" strokeWidth="1.2" />
          <path d="M 250 100 L 295 100" stroke="#D7A6B8" strokeWidth="1.5" />
          <path d="M 250 100 C 275 100, 275 140, 295 140" stroke="#403344" strokeWidth="1.2" />

          {/* Verification States Matrix */}
          {/* State 1: VERIFIED */}
          <rect x="295" y="44" width="140" height="24" rx="3" fill="#211826" stroke="#D7A6B8" strokeWidth="1" />
          <circle cx="308" cy="56" r="3" fill="#D7A6B8" />
          <text x="318" y="59" fill="#F3EAF0" fontSize="9" fontFamily="IBM Plex Mono">STATE: VERIFIED</text>

          {/* State 2: CONTRADICTORY */}
          <rect x="295" y="74" width="140" height="24" rx="3" fill="#211826" stroke="#403344" strokeWidth="1" />
          <circle cx="308" cy="86" r="3" fill="#B7AAB8" />
          <text x="318" y="89" fill="#B7AAB8" fontSize="9" fontFamily="IBM Plex Mono">CONTRADICTORY</text>

          {/* State 3: UNAVAILABLE / STUB */}
          <rect x="295" y="104" width="140" height="24" rx="3" fill="#211826" stroke="#403344" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="308" cy="116" r="3" fill="#858B93" />
          <text x="318" y="119" fill="#858B93" fontSize="9" fontFamily="IBM Plex Mono">UNAVAILABLE [STUB]</text>

          {/* State 4/5 Footnote */}
          <text x="298" y="145" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">NOT_FOUND · UNKNOWN</text>

          {/* Provenance Hash Pill */}
          <rect x="20" y="160" width="230" height="22" rx="3" fill="#100D16" stroke="#403344" strokeWidth="0.8" />
          <text x="30" y="174" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">
            PROVENANCE_DIGEST: SHA256[d91a...e84]
          </text>
        </svg>
      </div>

      {/* Footer indicator */}
      <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-ash-mauve/80 border-t border-border-plum/40 pt-1.5">
        <span>FIGURE 1.1 — SEPARATION OF EXTRACTION FROM VERIFICATION</span>
        <span className="text-dusty-rose">SYNTHETIC DEMO BENCHMARK</span>
      </div>
    </div>
  );
};

/* =========================================================================
   02: BUGPROOF — Verification Engine & Impact Graph
   ========================================================================= */
const BugProofVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-ash-mauve border-b border-border-plum/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender" />
          <span className="text-warm-ivory uppercase tracking-wider">System 02 // Member 2 Engine</span>
        </div>
        <span className="text-ash-mauve/70">ORCHESTRATION: FLASK + PYTEST</span>
      </div>

      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 460 210" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Patch Ingestion Box */}
          <rect x="25" y="70" width="90" height="55" rx="4" fill="#211826" stroke="#403344" strokeWidth="1.2" />
          <text x="35" y="92" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">DIFF INGEST</text>
          <text x="35" y="108" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Patch AST</text>

          {/* Flow Line to Impact Analysis */}
          <path d="M 115 97 L 155 97" stroke="#B9A7D0" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="155,97 149,94 149,100" fill="#B9A7D0" />

          {/* Impact Analysis Center Node */}
          <rect x="155" y="55" width="130" height="85" rx="5" fill="#302437" stroke="#B9A7D0" strokeWidth="1.2" />
          <text x="168" y="78" fill="#B9A7D0" fontSize="8" fontFamily="IBM Plex Mono">IMPACT ANALYSIS</text>
          <text x="168" y="96" fill="#F3EAF0" fontSize="11" fontFamily="DM Sans" fontWeight="600">Caller Graph Map</text>
          <text x="168" y="112" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">Radius: 3 Dependencies</text>
          <text x="168" y="126" fill="#D7A6B8" fontSize="8" fontFamily="IBM Plex Mono">Alembic Migration Track</text>

          {/* Top Branch: Regression Test Generation */}
          <path d="M 285 85 C 310 85, 315 50, 335 50" stroke="#403344" strokeWidth="1.2" />
          <rect x="335" y="35" width="105" height="36" rx="3" fill="#211826" stroke="#403344" strokeWidth="1" />
          <text x="345" y="52" fill="#D7A6B8" fontSize="8" fontFamily="IBM Plex Mono">REGRESSION GEN</text>
          <text x="345" y="64" fill="#F3EAF0" fontSize="8.5" fontFamily="DM Sans">Targeted Pytest Cases</text>

          {/* Bottom Branch: Verification Report */}
          <path d="M 285 110 C 310 110, 315 145, 335 145" stroke="#B9A7D0" strokeWidth="1.2" />
          <rect x="335" y="128" width="105" height="38" rx="3" fill="#211826" stroke="#B9A7D0" strokeWidth="1" />
          <text x="345" y="145" fill="#B9A7D0" fontSize="8" fontFamily="IBM Plex Mono">VERIFICATION API</text>
          <text x="345" y="157" fill="#F3EAF0" fontSize="8.5" fontFamily="DM Sans">Diagnostic Report</text>
        </svg>
      </div>

      <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-ash-mauve/80 border-t border-border-plum/40 pt-1.5">
        <span>FIGURE 2.1 — VERIFICATION ENGINE &amp; IMPACT GRAPH</span>
        <span className="text-soft-lavender">MEMBER 2 CONTRIBUTION</span>
      </div>
    </div>
  );
};

/* =========================================================================
   03: CROPSHIELD AI — Plot-Level Satellite & Phenology Matrix
   ========================================================================= */
const CropShieldVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-ash-mauve border-b border-border-plum/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
          <span className="text-warm-ivory uppercase tracking-wider">System 03 // Spatial Basis Resolver</span>
        </div>
        <span className="text-ash-mauve/70">BEED COORDS: 18.99° N · 75.76° E</span>
      </div>

      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 460 210" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Spatial Grid Lines */}
          <line x1="30" y1="110" x2="430" y2="110" stroke="#403344" strokeWidth="0.75" strokeDasharray="2 4" />
          <line x1="230" y1="20" x2="230" y2="180" stroke="#403344" strokeWidth="0.75" strokeDasharray="2 4" />

          {/* Polygon Plot Boundary (Field Geometry) */}
          <polygon
            points="60,60 140,40 180,95 130,150 45,120"
            fill="#211826"
            stroke="#D7A6B8"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <circle cx="60" cy="60" r="3" fill="#D7A6B8" />
          <circle cx="140" cy="40" r="3" fill="#D7A6B8" />
          <circle cx="180" cy="95" r="3" fill="#D7A6B8" />
          <circle cx="130" cy="150" r="3" fill="#D7A6B8" />
          <circle cx="45" cy="120" r="3" fill="#D7A6B8" />
          <text x="75" y="98" fill="#F3EAF0" fontSize="9" fontFamily="IBM Plex Mono">PLOT_01 [0.8 Ha]</text>
          <text x="75" y="112" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">SOYBEAN / KHARIF</text>

          {/* Phenology Coverage Bands & Rainfall Curve */}
          <path
            d="M 230 140 Q 280 60 330 90 T 420 50"
            stroke="#B9A7D0"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          {/* Critical Flowering Window Overlay */}
          <rect x="270" y="45" width="70" height="95" fill="#D7A6B8" fillOpacity="0.12" stroke="#D7A6B8" strokeWidth="0.75" strokeDasharray="3 3" />
          <text x="275" y="58" fill="#D7A6B8" fontSize="7.5" fontFamily="IBM Plex Mono">FLOWERING WINDOW</text>
          <text x="275" y="70" fill="#B7AAB8" fontSize="7" fontFamily="IBM Plex Mono">CRITICAL DEFICIT: -42mm</text>

          {/* Confidence Indicator Gauge */}
          <rect x="270" y="150" width="150" height="26" rx="3" fill="#100D16" stroke="#403344" strokeWidth="1" />
          <text x="280" y="166" fill="#F3EAF0" fontSize="8" fontFamily="IBM Plex Mono">
            INDEX CONFIDENCE: <tspan fill="#D7A6B8">0.89 [PASS]</tspan>
          </text>
        </svg>
      </div>

      <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-ash-mauve/80 border-t border-border-plum/40 pt-1.5">
        <span>FIGURE 3.1 — PLOT TELEMETRY VS REGIONAL STATION BASIS</span>
        <span className="text-dusty-rose">PHASE 1 ARCHITECTURE</span>
      </div>
    </div>
  );
};

/* =========================================================================
   04: CBRN VR — Spatial Decontamination Sequence
   ========================================================================= */
const CbrnVrVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-ash-mauve border-b border-border-plum/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender" />
          <span className="text-warm-ivory uppercase tracking-wider">System 04 // Spatial XR Workflow</span>
        </div>
        <span className="text-ash-mauve/70">TARGET: META QUEST + DESKTOP</span>
      </div>

      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 460 210" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Station 01: Perimeter Triage */}
          <rect x="20" y="60" width="115" height="85" rx="4" fill="#211826" stroke="#403344" strokeWidth="1.2" />
          <text x="32" y="82" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">STATION 01</text>
          <text x="32" y="99" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Perimeter Triage</text>
          <text x="32" y="115" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">Sensor Baseline: 0.12 μSv</text>
          <text x="32" y="128" fill="#D7A6B8" fontSize="7.5" fontFamily="IBM Plex Mono">Socket: Detector_A</text>

          {/* Directed Path */}
          <path d="M 135 102 L 170 102" stroke="#D7A6B8" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="170,102 164,99 164,105" fill="#D7A6B8" />

          {/* Station 02: Active Decon */}
          <rect x="170" y="50" width="125" height="105" rx="4" fill="#302437" stroke="#D7A6B8" strokeWidth="1.2" />
          <text x="182" y="74" fill="#D7A6B8" fontSize="8" fontFamily="IBM Plex Mono">STATION 02 // CRITICAL</text>
          <text x="182" y="92" fill="#F3EAF0" fontSize="11" fontFamily="DM Sans" fontWeight="600">Washdown Sequence</text>
          <text x="182" y="108" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">Step 1: Outer PPE Doffing</text>
          <text x="182" y="121" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">Step 2: Solvent Neutralize</text>
          <text x="182" y="134" fill="#F3EAF0" fontSize="7.5" fontFamily="IBM Plex Mono">Step 3: Verification Gate</text>

          {/* Directed Path */}
          <path d="M 295 102 L 330 102" stroke="#B9A7D0" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="330,102 324,99 324,105" fill="#B9A7D0" />

          {/* Station 03: Safe Recovery */}
          <rect x="330" y="60" width="110" height="85" rx="4" fill="#211826" stroke="#403344" strokeWidth="1.2" />
          <text x="342" y="82" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">STATION 03</text>
          <text x="342" y="99" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Safe Debrief</text>
          <text x="342" y="115" fill="#B9A7D0" fontSize="7.5" fontFamily="IBM Plex Mono">Checklist Passed: 100%</text>
          <text x="342" y="128" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">Clean Perimeter Clear</text>
        </svg>
      </div>

      <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-ash-mauve/80 border-t border-border-plum/40 pt-1.5">
        <span>FIGURE 4.1 — STATION-BASED PROCEDURAL XR FLOW</span>
        <span className="text-soft-lavender">COLLABORATIVE REPOSITORY</span>
      </div>
    </div>
  );
};

/* =========================================================================
   05: VIBECHECK — Static Code Security Analysis Heuristics
   ========================================================================= */
const VibeCheckVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-ash-mauve border-b border-border-plum/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
          <span className="text-warm-ivory uppercase tracking-wider">System 05 // Static Code Heuristics</span>
        </div>
        <span className="text-ash-mauve/70">SPECIFICATION STAGE</span>
      </div>

      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 460 210" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Raw AI Code Stream */}
          <rect x="25" y="55" width="115" height="100" rx="4" fill="#211826" stroke="#403344" strokeWidth="1.2" />
          <text x="35" y="78" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">AI CODE ARTIFACT</text>
          <text x="35" y="96" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">import os, requests</text>
          <text x="35" y="108" fill="#D7A6B8" fontSize="7.5" fontFamily="IBM Plex Mono">verify=False  # [FLAG]</text>
          <text x="35" y="120" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">cors = &quot;*&quot;    # [FLAG]</text>
          <text x="35" y="132" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">token = &quot;sk-1...&quot;</text>

          {/* AST Parser Funnel */}
          <path d="M 140 105 L 180 105" stroke="#D7A6B8" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="180,105 174,102 174,108" fill="#D7A6B8" />

          {/* Heuristic Rule Matrix */}
          <rect x="180" y="45" width="145" height="120" rx="4" fill="#302437" stroke="#D7A6B8" strokeWidth="1.2" />
          <text x="192" y="68" fill="#D7A6B8" fontSize="8" fontFamily="IBM Plex Mono">AST RULE CATALOG</text>
          <text x="192" y="86" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Rule 01: Insecure Defaults</text>
          <text x="192" y="100" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">Detection: SSL Disabled</text>
          <text x="192" y="118" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Rule 02: Wildcard Auth</text>
          <text x="192" y="132" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">Detection: Permissive CORS</text>
          <text x="192" y="150" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Rule 03: Dummy Keys</text>

          {/* Diagnostic Action */}
          <path d="M 325 105 L 360 105" stroke="#403344" strokeWidth="1.5" />
          <rect x="360" y="70" width="80" height="70" rx="4" fill="#211826" stroke="#403344" strokeWidth="1" />
          <text x="370" y="92" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">PRE-COMMIT</text>
          <text x="370" y="108" fill="#F3EAF0" fontSize="9" fontFamily="DM Sans" fontWeight="600">Inline Gate</text>
          <text x="370" y="124" fill="#D7A6B8" fontSize="7.5" fontFamily="IBM Plex Mono">[HALT COMMIT]</text>
        </svg>
      </div>

      <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-ash-mauve/80 border-t border-border-plum/40 pt-1.5">
        <span>FIGURE 5.1 — STATIC SECURITY HEURISTIC PIPELINE</span>
        <span className="text-dusty-rose">RESEARCH SPECIFICATION</span>
      </div>
    </div>
  );
};

/* =========================================================================
   06: SEALEDPROOF — Verifiable Receipt & Evidence Pack Protocol
   ========================================================================= */
const SealedProofVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full p-4 sm:p-6 flex flex-col justify-between">
      <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-ash-mauve border-b border-border-plum/50 pb-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender" />
          <span className="text-warm-ivory uppercase tracking-wider">System 06 // Evidence Receipt Protocol</span>
        </div>
        <span className="text-ash-mauve/70">RFC 8785 CANONICALIZATION</span>
      </div>

      <div className="relative flex-1 my-2 flex items-center justify-center">
        <svg viewBox="0 0 460 210" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Agent Action Payload */}
          <rect x="20" y="60" width="105" height="90" rx="4" fill="#211826" stroke="#403344" strokeWidth="1.2" />
          <text x="30" y="82" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">AGENT ACTION</text>
          <text x="30" y="98" fill="#F3EAF0" fontSize="9.5" fontFamily="DM Sans" fontWeight="600">Invoked Op</text>
          <text x="30" y="112" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">op: &quot;fund_transfer&quot;</text>
          <text x="30" y="124" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">amt: 250.00</text>
          <text x="30" y="136" fill="#D7A6B8" fontSize="7.5" fontFamily="IBM Plex Mono">auth_scope: &quot;tx&quot;</text>

          {/* Canonical Hash Funnel */}
          <path d="M 125 105 L 165 105" stroke="#B9A7D0" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="165,105 159,102 159,108" fill="#B9A7D0" />

          {/* Sealed Receipt Pack */}
          <rect x="165" y="45" width="145" height="120" rx="4" fill="#302437" stroke="#B9A7D0" strokeWidth="1.2" />
          <text x="178" y="68" fill="#B9A7D0" fontSize="8" fontFamily="IBM Plex Mono">SEALED EVIDENCE PACK</text>
          <text x="178" y="86" fill="#F3EAF0" fontSize="10" fontFamily="DM Sans" fontWeight="600">Deterministic Digest</text>
          <text x="178" y="100" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">JCS Canonical JSON</text>
          <text x="178" y="114" fill="#B7AAB8" fontSize="7.5" fontFamily="IBM Plex Mono">SHA-256 Checksum</text>
          <text x="178" y="128" fill="#D7A6B8" fontSize="7.5" fontFamily="IBM Plex Mono">Digital Signature: Ed25519</text>
          <text x="178" y="146" fill="#F3EAF0" fontSize="7.5" fontFamily="IBM Plex Mono">[MINIMAL DISCLOSURE MASK]</text>

          {/* Zero-Round-Trip Offline Verifier */}
          <path d="M 310 105 L 345 105" stroke="#B9A7D0" strokeWidth="1.5" />
          <rect x="345" y="65" width="95" height="80" rx="4" fill="#211826" stroke="#403344" strokeWidth="1" />
          <text x="355" y="87" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">OFFLINE VERIFIER</text>
          <text x="355" y="104" fill="#F3EAF0" fontSize="9.5" fontFamily="DM Sans" fontWeight="600">Zero Network</text>
          <text x="355" y="120" fill="#B9A7D0" fontSize="7.5" fontFamily="IBM Plex Mono">Proof Validated</text>
          <text x="355" y="132" fill="#858B93" fontSize="7.5" fontFamily="IBM Plex Mono">Non-Repudiable</text>
        </svg>
      </div>

      <div className="flex items-center justify-between font-mono text-[8px] sm:text-[9px] text-ash-mauve/80 border-t border-border-plum/40 pt-1.5">
        <span>FIGURE 6.1 — OFFLINE-VERIFIABLE AGENT RECEIPT PROTOCOL</span>
        <span className="text-soft-lavender">ORGANIZATION SPECIFICATION</span>
      </div>
    </div>
  );
};

export default ProjectVisual;
