'use client';

import React from 'react';

interface DiagramProps {
  className?: string;
}

/**
 * Authentic Architectural Diagrams & Schematics for All 6 Verified Projects
 * Replaces procedural dashed wireframes with real systems models, AST trees,
 * cryptographic canonicalization pipelines, and geospatial schemas.
 */

// -----------------------------------------------------------------------------
// 01: CBRN VR Simulation — Station Decontamination & XR Interaction Model
// -----------------------------------------------------------------------------
export function CbrnVrDiagram({ className = '' }: DiagramProps) {
  return (
    <div className={`w-full h-full rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider">XR INTERACTION WORKFLOW</span>
        </div>
        <span className="text-[#A1A1AA] text-[11px]">UNITY 6 // OPENXR</span>
      </div>

      {/* Main Diagram: 4-Station State Machine */}
      <div className="my-auto py-4 space-y-4">
        <div className="text-[11px] text-[#71717A] tracking-wider uppercase">
          Station-Based Procedural Decontamination Sequence
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-[11px]">
          <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] flex flex-col justify-between">
            <span className="text-[#38BDF8] font-bold">01. PERIMETER</span>
            <span className="text-[#F4F4F5] font-sans text-xs mt-1">Hazard survey & briefing spawn</span>
            <span className="text-[#71717A] text-[10px] mt-2 font-mono">6DOF Observer</span>
          </div>

          <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] flex flex-col justify-between">
            <span className="text-[#38BDF8] font-bold">02. SENSOR</span>
            <span className="text-[#F4F4F5] font-sans text-xs mt-1">Spatial detector calibration</span>
            <span className="text-[#71717A] text-[10px] mt-2 font-mono">Socket Grab</span>
          </div>

          <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] flex flex-col justify-between">
            <span className="text-[#38BDF8] font-bold">03. WASHDOWN</span>
            <span className="text-[#F4F4F5] font-sans text-xs mt-1">Sequential triage decontamination</span>
            <span className="text-[#71717A] text-[10px] mt-2 font-mono">Hose Rigidbody</span>
          </div>

          <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] flex flex-col justify-between">
            <span className="text-[#38BDF8] font-bold">04. GATE</span>
            <span className="text-[#F4F4F5] font-sans text-xs mt-1">Checklist debrief assessment</span>
            <span className="text-[#71717A] text-[10px] mt-2 font-mono">Pass / Review</span>
          </div>
        </div>

        {/* XR Input Mapping Pipeline */}
        <div className="p-3 rounded-lg border border-white/[0.05] bg-[#161618] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[#A1A1AA]">Hardware Target:</span>
            <span className="text-[#F4F4F5]">Meta Quest 2/3 (Standalone)</span>
          </div>
          <div className="flex items-center gap-2 text-[#71717A]">
            <span>Fallback:</span>
            <span className="text-[#A1A1AA]">Desktop 6DOF Controller</span>
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>URP 72/90 FPS TARGET</span>
        <span>XR INTERACTION TOOLKIT</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 02: VibeCheck — Python AST Security Visitor Schema
// -----------------------------------------------------------------------------
export function VibeCheckDiagram({ className = '' }: DiagramProps) {
  return (
    <div className={`w-full h-full rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider">AST STATIC SECURITY VISITOR</span>
        </div>
        <span className="text-[#A1A1AA] text-[11px]">PYTHON // PRE-COMMIT HOOK</span>
      </div>

      {/* AST Code & Node Tree Visualization */}
      <div className="my-auto py-4 space-y-3">
        <div className="text-[11px] text-[#71717A] tracking-wider uppercase">
          LLM Code Anti-Pattern Detection Heuristic
        </div>

        {/* Inset Code Specimen */}
        <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#18181B] text-[11px] leading-relaxed">
          <div className="text-[#71717A]">// Target Source Parse Node</div>
          <div className="text-[#F4F4F5]">
            <span className="text-[#38BDF8]">response</span> = requests.<span className="text-[#F4F4F5]">get</span>(url, <span className="text-[#F87171]">verify=False</span>)
          </div>
          <div className="mt-2 pt-2 border-t border-white/[0.06] text-[10px] flex items-center justify-between text-[#A1A1AA]">
            <span>AST: Call.keywords[verify] -&gt; Constant(False)</span>
            <span className="text-[#F87171] font-semibold">[HIGH] SSL_DISABLED</span>
          </div>
        </div>

        {/* Remediation Flow */}
        <div className="grid grid-cols-3 gap-2 text-[10px]">
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">HEURISTIC:</span>
            <span className="text-[#F4F4F5]">Zero False-Positive</span>
          </div>
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">INSPECTION:</span>
            <span className="text-[#F4F4F5]">Pre-Commit Hook</span>
          </div>
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">TARGET:</span>
            <span className="text-[#34D399]">AI Insecurities</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>SPECIFICATION & TAXONOMY</span>
        <span>GITHUB // Mansi-2024/VibeCheck</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 03: CropShield AI — PostGIS Plot Polygon & Phenology Architecture
// -----------------------------------------------------------------------------
export function CropShieldDiagram({ className = '' }: DiagramProps) {
  return (
    <div className={`w-full h-full rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider">GEOSPATIAL RISK REDUCTION</span>
        </div>
        <span className="text-[#A1A1AA] text-[11px]">POSTGIS // FASTAPI // LEAFLET</span>
      </div>

      {/* Plot Geometry & Phenology Curve */}
      <div className="my-auto py-4 space-y-3">
        <div className="text-[11px] text-[#71717A] tracking-wider uppercase">
          Beed District Test Cluster // Basis Risk Model
        </div>

        {/* Spatial Coordinate Schema */}
        <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#18181B] text-[11px] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[#71717A]">Plot Boundary Polygon:</span>
            <span className="text-[#34D399]">GeoJSON Valid</span>
          </div>
          <div className="text-[#A1A1AA] text-[10px]">
            POLYGON((18.9912 75.7601, 18.9934 75.7625, 18.9920 75.7640, 18.9901 75.7618))
          </div>
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
            <span className="text-[#71717A]">Phenology Windows:</span>
            <span className="text-[#F4F4F5]">Sowing • Flowering • Podding</span>
          </div>
        </div>

        {/* Spectral Index Calibration */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2.5 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">REMOTE SENSING:</span>
            <span className="text-[#F4F4F5] font-medium">Sentinel-2 NDVI/NDWI</span>
          </div>
          <div className="p-2.5 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">GROUND TRUTH:</span>
            <span className="text-[#F4F4F5] font-medium">Confidence Score Trigger</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>PHASE 1 ARCHITECTURE IMPLEMENTED</span>
        <span>POSTGRESQL / FASTAPI</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 04: SealedProof — RFC 8785 Canonicalization & Sealing Pipeline
// -----------------------------------------------------------------------------
export function SealedProofDiagram({ className = '' }: DiagramProps) {
  return (
    <div className={`w-full h-full rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider">CRYPTOGRAPHIC EVIDENCE PIPELINE</span>
        </div>
        <span className="text-[#A1A1AA] text-[11px]">RFC 8785 (JCS) // ED25519</span>
      </div>

      {/* Deterministic Pipeline Flow */}
      <div className="my-auto py-4 space-y-3">
        <div className="text-[11px] text-[#71717A] tracking-wider uppercase">
          Agent Action Non-Repudiation Flow
        </div>

        {/* Step-by-Step Boxes */}
        <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-[#38BDF8]">01. PAYLOAD</span>
            <span className="text-[#A1A1AA]">JSON-LD Action Metadata</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#38BDF8]">02. CANONICALIZE</span>
            <span className="text-[#A1A1AA]">RFC 8785 Deterministic Hash</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#38BDF8]">03. SEAL & SIGN</span>
            <span className="text-[#A1A1AA]">SHA-256 Digest + Agent Key</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
            <span className="text-[#34D399] font-bold">04. OFFLINE VERIFIER</span>
            <span className="text-[#F4F4F5] font-semibold">0-Round-Trip Validation</span>
          </div>
        </div>

        {/* Canonical Spec Details */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">DISCLOSURE:</span>
            <span className="text-[#F4F4F5]">Minimal Redaction Pack</span>
          </div>
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">REASON CODES:</span>
            <span className="text-[#F4F4F5]">Deterministic Flags</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>COLLABORATIVE SPECIFICATION</span>
        <span>github.com/sealedproof</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 05: RakshaScan — 5-State Deterministic Trust Verification State Machine
// -----------------------------------------------------------------------------
export function RakshaScanDiagram({ className = '' }: DiagramProps) {
  return (
    <div className={`w-full h-full rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider">FINANCIAL TRUST CHAIN ENGINE</span>
        </div>
        <span className="text-[#34D399] text-[11px] font-semibold">WORKING PROTOTYPE</span>
      </div>

      {/* 5-State Verification State Machine */}
      <div className="my-auto py-4 space-y-3">
        <div className="text-[11px] text-[#71717A] tracking-wider uppercase">
          Deterministic 5-State Trust Output Matrix
        </div>

        {/* 5 Explicit Verification States */}
        <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
          <div className="p-2 rounded border border-[#34D399]/40 bg-[#34D399]/10 text-[#34D399] font-bold">
            VERIFIED
          </div>
          <div className="p-2 rounded border border-[#F87171]/40 bg-[#F87171]/10 text-[#F87171] font-bold">
            CONTRADICT
          </div>
          <div className="p-2 rounded border border-white/10 bg-[#18181B] text-[#A1A1AA]">
            NOT_FOUND
          </div>
          <div className="p-2 rounded border border-white/10 bg-[#18181B] text-[#71717A]">
            UNKNOWN
          </div>
          <div className="p-2 rounded border border-[#EAB308]/40 bg-[#EAB308]/10 text-[#EAB308]">
            UNAVAILABLE
          </div>
        </div>

        {/* Claim Schema Inspection */}
        <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#18181B] text-[11px] space-y-1">
          <div className="text-[#71717A]">// Decoupled Extraction vs Verdict</div>
          <div className="text-[#A1A1AA]">
            <span className="text-[#38BDF8]">LLM Role:</span> Schema entity extraction from raw DOM
          </div>
          <div className="text-[#F4F4F5]">
            <span className="text-[#34D399]">Python Core:</span> Deterministic registry cross-check
          </div>
        </div>

        {/* Multilingual Support */}
        <div className="flex items-center justify-between p-2.5 rounded border border-white/[0.05] bg-[#161618] text-[11px]">
          <span className="text-[#71717A]">Localization Support:</span>
          <span className="text-[#F4F4F5]">English • हिन्दी (Hindi) • मराठी (Marathi)</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>NEXT.JS 14 • FASTAPI • POSTGRESQL</span>
        <span>FULL-STACK ARCHITECTURE LEAD</span>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// 06: BugProof — Dependency Impact Caller Graph & Regression Test Engine
// -----------------------------------------------------------------------------
export function BugProofDiagram({ className = '' }: DiagramProps) {
  return (
    <div className={`w-full h-full rounded-xl border border-white/[0.08] bg-[#121214] p-5 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}>
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider">IMPACT ANALYSIS & REGRESSION ENGINE</span>
        </div>
        <span className="text-[#A1A1AA] text-[11px]">MEMBER 2 VERIFICATION ENGINE</span>
      </div>

      {/* Impact Tracing Pipeline */}
      <div className="my-auto py-4 space-y-3">
        <div className="text-[11px] text-[#71717A] tracking-wider uppercase">
          Patch Regression Verification Pipeline
        </div>

        {/* 4 Pipeline Stages */}
        <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-2 text-[11px]">
          <div className="flex items-center justify-between">
            <span className="text-[#38BDF8]">01. PATCH INGESTION</span>
            <span className="text-[#A1A1AA]">Diff + Base Commit Context</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#38BDF8]">02. IMPACT GRAPH</span>
            <span className="text-[#A1A1AA]">Caller dependency tree mapping</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[#38BDF8]">03. TEST SYNTHESIS</span>
            <span className="text-[#A1A1AA]">Boundary Pytest test cases</span>
          </div>
          <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
            <span className="text-[#34D399] font-bold">04. ISOLATED RUNNER</span>
            <span className="text-[#F4F4F5] font-semibold">Subprocess execution & report</span>
          </div>
        </div>

        {/* Technical Implementation Note */}
        <div className="grid grid-cols-2 gap-2 text-[10px]">
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">API FRAMEWORK:</span>
            <span className="text-[#F4F4F5]">Flask REST Services</span>
          </div>
          <div className="p-2 rounded border border-white/[0.05] bg-[#161618]">
            <span className="block text-[#71717A]">DATA PERSISTENCE:</span>
            <span className="text-[#F4F4F5]">SQLAlchemy + Alembic</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>COLLABORATIVE VERIFICATION ENGINE</span>
        <span>GIT VERIFIED COMMIT: Member 2</span>
      </div>
    </div>
  );
}

/**
 * Dispatcher to map project ID / slug to the authentic architectural diagram
 */
export function ProjectDiagramDispatcher({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'cbrn-vr':
      return <CbrnVrDiagram />;
    case 'vibecheck':
      return <VibeCheckDiagram />;
    case 'cropshield-ai':
      return <CropShieldDiagram />;
    case 'sealedproof':
      return <SealedProofDiagram />;
    case 'rakshascan':
      return <RakshaScanDiagram />;
    case 'bugproof':
      return <BugProofDiagram />;
    default:
      return <RakshaScanDiagram />;
  }
}
