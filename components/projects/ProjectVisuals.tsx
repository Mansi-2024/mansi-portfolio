'use client';

import React from 'react';
import {
  Shield,
  Eye,
  Terminal,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
} from 'lucide-react';

interface VisualProps {
  className?: string;
}

/**
 * 01: CBRN VR Simulation — Immersive Hazardous Environment Visual
 */
export function CbrnVrVisual({ className = '' }: VisualProps) {
  return (
    <div
      className={`relative w-full h-full rounded-xl border border-[#2a2a36] bg-[#08080d] p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}
    >
      {/* 3D Wireframe Perspective Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#00f0ff_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />

      {/* Header Telemetry */}
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
        <div className="flex items-center gap-1.5 text-[#00f0ff]">
          <Eye className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">XR RIG // OPENXR 1.1</span>
        </div>
        <span className="text-[#eab308] px-2 py-0.5 rounded border border-[#eab308]/30 bg-[#eab308]/10 text-[9px]">
          HAZARD CLASS: CBRN
        </span>
      </div>

      {/* Central Spatial Target Reticle & Telemetry */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center py-4">
        {/* Concentric Reticle Rings */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-[#00f0ff]/40 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-4 rounded-full border border-[#2a2a36]" />
          <div className="absolute inset-8 rounded-full border border-[#00f0ff]/30" />
          <div className="w-12 h-12 rounded-full bg-[#12121a] border border-[#00f0ff] flex items-center justify-center text-[#00f0ff] shadow-inner">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>

          {/* Coordinate Crosshairs */}
          <div className="absolute -top-1 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff]" />
          <div className="absolute -bottom-1 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff]" />
        </div>

        <div className="mt-3 text-center space-y-1">
          <div className="text-xs text-[#f4f4f7] font-semibold tracking-wider">
            IMMERSIVE DECONTAMINATION PROTOCOL
          </div>
          <div className="text-[10px] text-[#71717a]">
            PHYSICS-BASED HOSE & DOSIMETER SIMULATION
          </div>
        </div>
      </div>

      {/* Footer Sensor Channels */}
      <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-[#1c1c24] text-[9px] text-[#a1a1aa]">
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">DOSAGE:</span>
          <span className="text-[#00f0ff] font-bold">0.038 mSv/h</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">TARGET HMD:</span>
          <span className="text-[#f4f4f7] font-bold">QUEST 3</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">PHYSICS:</span>
          <span className="text-[#eab308] font-bold">RIGIDBODY</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 02: VibeCheck — Static Security & AST Inspection Visual
 */
export function VibeCheckVisual({ className = '' }: VisualProps) {
  return (
    <div
      className={`relative w-full h-full rounded-xl border border-[#2a2a36] bg-[#08080d] p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}
    >
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
        <div className="flex items-center gap-1.5 text-[#10b981]">
          <Terminal className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">AST STATIC SECURITY</span>
        </div>
        <span className="text-[#00f0ff] text-[9px]">ENGINE: PYTHON AST</span>
      </div>

      {/* Code Syntax & Scanner Graphic */}
      <div className="relative z-10 my-auto py-3 space-y-2 text-[10px]">
        <div className="rounded border border-[#1c1c24] bg-[#0c0c12] p-3 space-y-1.5 font-mono">
          <div className="text-[#71717a]">// AST PARSING RUNTIME</div>
          <div className="text-[#10b981]">
            <span className="text-[#a1a1aa]">inspect_tree(</span>
            <span>node: ast.Call</span>
            <span className="text-[#a1a1aa]">) -&gt; SecurityVerdict:</span>
          </div>
          <div className="pl-4 text-[#71717a]">
            pattern = check_secret_leak(node)
          </div>
          <div className="pl-4 text-[#eab308]">
            if pattern.risk == HIGH: raise BlockCommit()
          </div>
        </div>

        {/* Heuristic Scanner Bar */}
        <div className="flex items-center justify-between p-2 rounded bg-[#10b981]/10 border border-[#10b981]/30 text-[#10b981] text-[10px]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span className="font-semibold">VULNERABILITY HEURISTICS: ACTIVE</span>
          </div>
          <span>0 FALSE POSITIVES</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2 border-t border-[#1c1c24] text-[9px] text-[#a1a1aa]">
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">SCOPE:</span>
          <span className="text-[#f4f4f7] font-semibold">LLM Code Generation</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">GATE:</span>
          <span className="text-[#10b981] font-semibold">Pre-Commit Git Hook</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 03: CropShield AI — Satellite Agriculture & Climate Plot Visual
 */
export function CropShieldVisual({ className = '' }: VisualProps) {
  return (
    <div
      className={`relative w-full h-full rounded-xl border border-[#2a2a36] bg-[#08080d] p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}
    >
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
        <div className="flex items-center gap-1.5 text-[#84cc16]">
          <Layers className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">SATELLITE NDVI ANALYSIS</span>
        </div>
        <span className="text-[#00f0ff] text-[9px]">RESOLUTION: 10M</span>
      </div>

      {/* Plot Parcel Contour Map */}
      <div className="relative z-10 my-auto py-3 flex flex-col items-center">
        <div className="relative w-44 h-32 rounded-lg border border-[#84cc16]/40 bg-[#0e120e] p-2 flex flex-col justify-between overflow-hidden">
          {/* Contour Lines */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 160 120">
              <path d="M 10 30 Q 80 10 150 40" fill="none" stroke="#84cc16" strokeWidth="1" />
              <path d="M 20 60 Q 90 40 140 70" fill="none" stroke="#84cc16" strokeWidth="1" />
              <path d="M 10 90 Q 70 80 150 100" fill="none" stroke="#84cc16" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex items-center justify-between text-[9px] text-[#84cc16]">
            <span>PARCEL #8941-MH</span>
            <span>ELEVATION: 540M</span>
          </div>

          <div className="text-center my-auto">
            <div className="text-2xl font-bold text-[#f4f4f7]">0.74</div>
            <div className="text-[8px] text-[#a1a1aa] uppercase tracking-wider">NDVI Index (Healthy)</div>
          </div>

          <div className="flex items-center justify-between text-[8px] text-[#71717a]">
            <span>18.5204° N</span>
            <span>73.8567° E</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2 border-t border-[#1c1c24] text-[9px] text-[#a1a1aa]">
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">PRECIPITATION RISK:</span>
          <span className="text-[#84cc16] font-semibold">Low (Index 0.18)</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">INSURANCE STATUS:</span>
          <span className="text-[#00f0ff] font-semibold">Parametric Verified</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 04: SealedProof — Verifiable Evidence Receipt Visual
 */
export function SealedProofVisual({ className = '' }: VisualProps) {
  return (
    <div
      className={`relative w-full h-full rounded-xl border border-[#2a2a36] bg-[#08080d] p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}
    >
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
        <div className="flex items-center gap-1.5 text-[#a855f7]">
          <Shield className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">VERIFIABLE RECEIPT SPEC</span>
        </div>
        <span className="text-[#00f0ff] text-[9px]">RFC 8785 (JCS)</span>
      </div>

      {/* Cryptographic JSON-LD Receipt */}
      <div className="relative z-10 my-auto py-3 space-y-2 text-[10px]">
        <div className="rounded border border-[#a855f7]/30 bg-[#0e0a14] p-3 space-y-1">
          <div className="flex items-center justify-between text-[9px] text-[#a855f7] pb-1 border-b border-[#a855f7]/20">
            <span>CANONICAL AGENT RECEIPT</span>
            <span className="text-[#00f0ff]">ED25519 SEALED</span>
          </div>
          <div className="text-[#a1a1aa] font-mono text-[9px]">
            <div>&quot;agentId&quot;: &quot;urn:ai:agent-742&quot;,</div>
            <div>&quot;actionType&quot;: &quot;EXECUTE_TRANSACTION&quot;,</div>
            <div>&quot;sha256&quot;: &quot;8f4b2c9e...3d1a&quot;,</div>
            <div>&quot;verdict&quot;: <span className="text-[#10b981]">&quot;AUTHENTIC&quot;</span></div>
          </div>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-[#0c0c12] border border-[#1c1c24] text-[9px]">
          <span className="text-[#71717a]">REASON CODE:</span>
          <span className="text-[#a855f7] font-semibold">0x2A_PROOF_VALIDATED</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2 border-t border-[#1c1c24] text-[9px] text-[#a1a1aa]">
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">FORMAT:</span>
          <span className="text-[#f4f4f7] font-semibold">JSON-LD Canonical</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">AUDIT TRAIL:</span>
          <span className="text-[#a855f7] font-semibold">Immutable Hash Chain</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 05: RakshaScan — 5-State Deterministic Scam Verification Visual
 */
export function RakshaScanVisual({ className = '' }: VisualProps) {
  return (
    <div
      className={`relative w-full h-full rounded-xl border border-[#2a2a36] bg-[#08080d] p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}
    >
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
        <div className="flex items-center gap-1.5 text-[#f43f5e]">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">FINANCIAL TRUST CHAIN</span>
        </div>
        <span className="text-[#00f0ff] text-[9px]">PROVENANCE ENGINE</span>
      </div>

      {/* 5-State Verification Matrix */}
      <div className="relative z-10 my-auto py-3 space-y-2">
        <div className="text-[10px] text-[#71717a]">EXPLICIT VERIFICATION STATES:</div>
        <div className="grid grid-cols-1 gap-1 text-[9px]">
          <div className="flex items-center justify-between p-1.5 rounded bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981]">
            <span>1. VERIFIED</span>
            <span>Matched to Official Registrar</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-[#f43f5e]/15 border border-[#f43f5e]/30 text-[#f43f5e]">
            <span>2. CONTRADICTORY</span>
            <span>Fabricated Registration #</span>
          </div>
          <div className="flex items-center justify-between p-1.5 rounded bg-[#71717a]/15 border border-[#71717a]/30 text-[#a1a1aa]">
            <span>3. NOT_FOUND / UNKNOWN</span>
            <span>Uncorroborated Claims</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2 border-t border-[#1c1c24] text-[9px] text-[#a1a1aa]">
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">LANGUAGES:</span>
          <span className="text-[#f4f4f7] font-semibold">EN, HI, MR</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">REGISTRY SYNC:</span>
          <span className="text-[#f43f5e] font-semibold">Deterministic Auditing</span>
        </div>
      </div>
    </div>
  );
}

/**
 * 06: BugProof — Collaborative Test Verification Pipeline Visual
 */
export function BugProofVisual({ className = '' }: VisualProps) {
  return (
    <div
      className={`relative w-full h-full rounded-xl border border-[#2a2a36] bg-[#08080d] p-5 flex flex-col justify-between overflow-hidden select-none font-mono ${className}`}
    >
      <div className="relative z-10 flex items-center justify-between text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
        <div className="flex items-center gap-1.5 text-[#6366f1]">
          <Cpu className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wider">COLLABORATIVE DEBUGGING</span>
        </div>
        <span className="text-[#00f0ff] text-[9px]">DOCKER ISOLATION</span>
      </div>

      {/* Automated Pytest Runner Pipeline */}
      <div className="relative z-10 my-auto py-3 space-y-2">
        <div className="rounded border border-[#6366f1]/30 bg-[#0a0a14] p-3 space-y-1.5 font-mono text-[9px]">
          <div className="flex items-center justify-between text-[#6366f1]">
            <span>TEST RUNNER PIPELINE</span>
            <span>48 / 48 PASSED</span>
          </div>
          <div className="space-y-0.5 text-[#a1a1aa]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#10b981]">✓</span>
              <span>test_ast_instrumentation.py</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#10b981]">✓</span>
              <span>test_sql_mutation_catch.py</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[#10b981]">✓</span>
              <span>test_sandbox_resource_limits.py</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-2 rounded bg-[#0c0c12] border border-[#1c1c24] text-[9px]">
          <span className="text-[#71717a]">TEST COVERAGE:</span>
          <span className="text-[#10b981] font-semibold">94.2% AUTOMATED</span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-2 pt-2 border-t border-[#1c1c24] text-[9px] text-[#a1a1aa]">
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">MANSI ROLE:</span>
          <span className="text-[#6366f1] font-semibold">Verification Engine</span>
        </div>
        <div className="p-1.5 rounded bg-[#0c0c12] border border-[#1c1c24]">
          <span className="block text-[#71717a]">SANDBOX:</span>
          <span className="text-[#f4f4f7] font-semibold">Secure Isolation</span>
        </div>
      </div>
    </div>
  );
}

/**
 * Visual dispatcher mapped by project id
 */
export function ProjectVisual({ projectId, className = '' }: { projectId: string; className?: string }) {
  switch (projectId) {
    case 'cbrn-vr':
      return <CbrnVrVisual className={className} />;
    case 'vibecheck':
      return <VibeCheckVisual className={className} />;
    case 'cropshield-ai':
      return <CropShieldVisual className={className} />;
    case 'sealedproof':
      return <SealedProofVisual className={className} />;
    case 'rakshascan':
      return <RakshaScanVisual className={className} />;
    case 'bugproof':
      return <BugProofVisual className={className} />;
    default:
      return null;
  }
}
