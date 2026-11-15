'use client';

import React, { useState } from 'react';
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  FileCode,
  Terminal,
  Eye,
  EyeOff,
  Layers,
  Lock,
  RefreshCw,
  GitCommit,
  GitPullRequest,
  Database,
  MapPin,
  Check,
  X,
  Compass,
} from 'lucide-react';

interface DiagramProps {
  className?: string;
}

// =============================================================================
// 01: CBRN VR Simulation — Spatial 3D Procedural Station Inspector
// Provenance: [ACTUAL SCENE VIEW & SPATIAL GRID]
// =============================================================================
export function CbrnVrDiagram({ className = '' }: DiagramProps) {
  const [viewMode, setViewMode] = useState<'vr' | 'desktop'>('vr');
  const [activeStation, setActiveStation] = useState<number>(0);

  const stations = [
    {
      num: '01',
      title: 'Perimeter Briefing',
      role: 'Spawn observation & survey briefing',
      tech: '6DOF Observer Spawn',
      mechanic: 'Orientation calibration',
      audioZone: 'Low-frequency perimeter ambient',
      hazardLevel: 'Baseline (0.02 µSv/h)',
    },
    {
      num: '02',
      title: 'Detector Calibration',
      role: 'Radiation & chemical baseline check',
      tech: 'XR Socket Interactor',
      mechanic: 'Snap grab & threshold survey',
      audioZone: 'Directional Geiger click rate',
      hazardLevel: 'Elevated (0.45 µSv/h)',
    },
    {
      num: '03',
      title: 'Station Washdown',
      role: 'Sequential triage washdown & disposal',
      tech: 'Hose Rigidbody Physics',
      mechanic: 'Multi-point surface coverage',
      audioZone: 'High-pressure mist acoustic',
      hazardLevel: 'Decontamination gating',
    },
    {
      num: '04',
      title: 'Gate Debrief',
      role: 'Procedural checklist compliance review',
      tech: 'Compliance Verification',
      mechanic: 'Pass / Remediation report',
      audioZone: 'Acoustic debrief isolation',
      hazardLevel: 'Safe clear (< 0.05 µSv/h)',
    },
  ];

  const current = stations[activeStation];

  return (
    <div
      className={`w-full h-[380px] rounded-xl border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}
    >
      {/* Top Header & View Mode Selector */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="text-[#F4F4F5] font-semibold tracking-wider text-[11px]">
            XR PROCEDURAL STAGE
          </span>
        </div>
        <div className="inline-flex rounded-lg border border-white/[0.08] bg-[#18181B] p-0.5 text-[10px]">
          <button
            type="button"
            onClick={() => setViewMode('vr')}
            className={`px-2 py-0.5 rounded transition-colors ${
              viewMode === 'vr'
                ? 'bg-white/10 text-white font-medium shadow-sm'
                : 'text-[#71717A] hover:text-[#A1A1AA]'
            }`}
          >
            Quest 6DOF VR
          </button>
          <button
            type="button"
            onClick={() => setViewMode('desktop')}
            className={`px-2 py-0.5 rounded transition-colors ${
              viewMode === 'desktop'
                ? 'bg-white/10 text-white font-medium shadow-sm'
                : 'text-[#71717A] hover:text-[#A1A1AA]'
            }`}
          >
            Desktop WASD
          </button>
        </div>
      </div>

      {/* Spatial Stage Viewport */}
      <div className="relative rounded-lg border border-white/[0.07] bg-[#18181B] p-3.5 overflow-hidden my-1">
        {/* Background Spatial Grid Wireframe */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Active Station Detail Frame */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#38BDF8] font-bold">STATION {current.num}</span>
              <span className="text-[#F4F4F5] font-sans font-medium text-xs">
                {current.title}
              </span>
            </div>
            <p className="text-[#A1A1AA] font-sans text-[11px] mt-1">
              {current.role}
            </p>
          </div>

          <div className="text-left sm:text-right text-[10px] space-y-0.5 bg-black/40 sm:bg-transparent p-2 sm:p-0 rounded border border-white/[0.04] sm:border-0">
            <div className="text-[#71717A]">
              Input: <span className="text-[#F4F4F5]">{viewMode === 'vr' ? 'Quest Touch 6DOF' : 'WASD + Mouse 6DOF'}</span>
            </div>
            <div className="text-[#38BDF8]">
              {current.tech}
            </div>
          </div>
        </div>

        {/* Spatial Audio & Hazard Telemetry */}
        <div className="relative z-10 mt-3 pt-2.5 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-[10px]">
          <div className="text-[#71717A]">
            <span className="text-[#A1A1AA] block text-[9px] uppercase">Spatial Audio Zone</span>
            <span className="truncate text-[#D4D4D8]">{current.audioZone}</span>
          </div>
          <div className="text-right text-[#71717A]">
            <span className="text-[#A1A1AA] block text-[9px] uppercase">Hazard Sim Level</span>
            <span className="text-[#38BDF8] font-medium">{current.hazardLevel}</span>
          </div>
        </div>
      </div>

      {/* 4 Clickable Station Tabs */}
      <div className="grid grid-cols-4 gap-1.5 text-[10px]">
        {stations.map((st, idx) => (
          <button
            key={st.num}
            type="button"
            onClick={() => setActiveStation(idx)}
            className={`p-2 rounded-lg border text-left transition-all ${
              activeStation === idx
                ? 'border-[#38BDF8]/60 bg-[#38BDF8]/10 text-white'
                : 'border-white/[0.06] bg-[#161618] text-[#71717A] hover:border-white/20 hover:text-[#A1A1AA]'
            }`}
          >
            <div className="flex items-center justify-between font-bold text-[10px]">
              <span className={activeStation === idx ? 'text-[#38BDF8]' : 'text-[#71717A]'}>
                {st.num}
              </span>
              {activeStation === idx && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              )}
            </div>
            <div className="font-sans text-[11px] font-medium truncate mt-0.5 text-[#F4F4F5]">
              {st.title.split(' ')[0]}
            </div>
            <div className="text-[9px] text-[#71717A] truncate font-mono">
              {st.mechanic.split(' ')[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>UNITY 6 • XR INTERACTION TOOLKIT 3.0</span>
        <span>COLLABORATIVE XR PROTOTYPE</span>
      </div>
    </div>
  );
}

// =============================================================================
// 02: VibeCheck — Static AST Security Visitor & Heuristic Taxonomy
// Provenance: [CONCEPTUAL ARCHITECTURAL MODEL]
// =============================================================================
export function VibeCheckDiagram({ className = '' }: DiagramProps) {
  const [selectedHeuristic, setSelectedHeuristic] = useState<number>(0);

  const heuristics = [
    {
      id: 'ssl',
      name: 'SSL Disabled',
      category: 'Insecure Network',
      severity: 'HIGH',
      codeSnippet: 'response = requests.get(url, verify=False)',
      astTarget: 'Call.keywords[verify] -> Constant(False)',
      rationale: 'AI snippets often disable certificate validation for rapid local testing.',
      remediation: 'Remove verify=False or pass explicit cert bundle path.',
    },
    {
      id: 'key',
      name: 'Hardcoded Key',
      category: 'Credential Leak',
      severity: 'CRITICAL',
      codeSnippet: 'openai.api_key = "sk-ant-dummy-placeholder"',
      astTarget: 'Assign.targets -> openai.api_key = Constant(Str)',
      rationale: 'LLMs hallucinate realistic dummy keys that developers accidentally commit.',
      remediation: 'Load secret keys from environment variables (os.environ).',
    },
    {
      id: 'cors',
      name: 'Permissive CORS',
      category: 'Access Control',
      severity: 'MEDIUM',
      codeSnippet: 'app.add_middleware(CORSMiddleware, allow_origins=["*"])',
      astTarget: 'Call.keywords[allow_origins] -> List[Constant("*")]',
      rationale: 'Permissive wildcards bypass cross-origin browser security protections.',
      remediation: 'Restrict origins to explicit domain whitelist.',
    },
  ];

  const current = heuristics[selectedHeuristic];

  return (
    <div
      className={`w-full h-[380px] rounded-xl border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider text-[11px]">
            AST HEURISTIC SCANNER
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
          <span className="text-[10px] text-[#A1A1AA] font-mono">RULE TAXONOMY MODEL</span>
        </div>
      </div>

      {/* 3 Heuristic Selectors */}
      <div className="grid grid-cols-3 gap-1.5 text-[10px]">
        {heuristics.map((h, idx) => (
          <button
            key={h.id}
            type="button"
            onClick={() => setSelectedHeuristic(idx)}
            className={`p-2 rounded-lg border text-left transition-all ${
              selectedHeuristic === idx
                ? 'border-[#34D399]/60 bg-[#34D399]/10 text-white'
                : 'border-white/[0.06] bg-[#161618] text-[#71717A] hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold truncate">{h.name}</span>
              <span
                className={`text-[9px] px-1 py-0.2 rounded font-bold ${
                  h.severity === 'CRITICAL'
                    ? 'text-[#F87171]'
                    : h.severity === 'HIGH'
                    ? 'text-[#FB923C]'
                    : 'text-[#FBBF24]'
                }`}
              >
                {h.severity}
              </span>
            </div>
            <div className="text-[9px] text-[#71717A] truncate mt-0.5 font-sans">
              {h.category}
            </div>
          </button>
        ))}
      </div>

      {/* Code Specimen & Parsed AST Node */}
      <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] text-[11px] space-y-2">
        <div className="flex items-center justify-between text-[10px] text-[#71717A]">
          <span className="text-[#A1A1AA]">Parsed Source Snippet</span>
          <span className="text-[#71717A]">Python AST Visitor</span>
        </div>
        <div className="p-2 rounded bg-black/60 text-[#F4F4F5] font-mono text-xs overflow-x-auto border border-white/[0.04]">
          <code>{current.codeSnippet}</code>
        </div>
        <div className="pt-2 border-t border-white/[0.06] text-[10px] space-y-1">
          <div className="text-[#A1A1AA]">
            <span className="text-[#38BDF8]">AST Target:</span> {current.astTarget}
          </div>
          <div className="text-[#71717A] truncate">
            <span className="text-[#F4F4F5]">Remediation:</span> {current.remediation}
          </div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>PYTHON AST • FASTAPI • HEURISTIC TAXONOMY</span>
        <span>SPECIFICATION & RESEARCH</span>
      </div>
    </div>
  );
}

// =============================================================================
// 03: CropShield AI — PostGIS Plot Polygon & Phenological Risk Strata
// Provenance: [ACTUAL INTERFACE & DATA MODEL]
// Strictly ZERO invented accuracy or FPS metrics
// =============================================================================
export function CropShieldDiagram({ className = '' }: DiagramProps) {
  const [activeStage, setActiveStage] = useState<number>(2);
  const [activeLayer, setActiveLayer] = useState<'ndvi' | 'rainfall' | 'composite'>('ndvi');

  const phenologyStages = [
    {
      name: 'Germination',
      window: 'Days 1–15',
      moistureSensitivity: 'Moderate',
      riskMultiplier: '1.0x',
      thresholdNote: 'Requires steady seedbed moisture for emergence.',
    },
    {
      name: 'Vegetative',
      window: 'Days 16–45',
      moistureSensitivity: 'Low–Moderate',
      riskMultiplier: '0.8x',
      thresholdNote: 'Can tolerate brief dry spells without yield loss.',
    },
    {
      name: 'Flowering',
      window: 'Days 46–75',
      moistureSensitivity: 'Critical',
      riskMultiplier: '1.8x',
      thresholdNote: 'Moisture stress directly halts flower fertilization.',
    },
    {
      name: 'Podding',
      window: 'Days 76–105',
      moistureSensitivity: 'High',
      riskMultiplier: '1.4x',
      thresholdNote: 'Deficit limits pod fill and grain weight.',
    },
  ];

  const current = phenologyStages[activeStage];

  return (
    <div
      className={`w-full h-[380px] rounded-xl border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider text-[11px]">
            GEOSPATIAL RISK STRATA
          </span>
        </div>
        {/* Layer Selector */}
        <div className="inline-flex rounded-lg border border-white/[0.08] bg-[#18181B] p-0.5 text-[10px]">
          {(['ndvi', 'rainfall', 'composite'] as const).map((layer) => (
            <button
              key={layer}
              type="button"
              onClick={() => setActiveLayer(layer)}
              className={`px-1.5 py-0.5 rounded transition-colors uppercase ${
                activeLayer === layer
                  ? 'bg-white/10 text-white font-medium'
                  : 'text-[#71717A] hover:text-[#A1A1AA]'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* Geospatial Plot Coordinates Frame */}
      <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#71717A] text-[11px]">Beed District Field Polygon:</span>
          <span className="text-[#38BDF8] text-[10px]">Phase 1 PostGIS Model (Sentinel-2 Spec)</span>
        </div>
        <div className="p-2 rounded bg-black/60 text-[#A1A1AA] text-[10px] font-mono break-all border border-white/[0.04]">
          POLYGON((18.9912 75.7601, 18.9934 75.7625, 18.9920 75.7640, 18.9901 75.7618))
        </div>
      </div>

      {/* Interactive Phenology Stage Scrubber */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#71717A]">Phenological Growth Window:</span>
          <span className="text-[#34D399] font-medium">
            Stage: {current.name} ({current.window})
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-[10px]">
          {phenologyStages.map((st, idx) => (
            <button
              key={st.name}
              type="button"
              onClick={() => setActiveStage(idx)}
              className={`p-1.5 rounded text-center transition-all ${
                activeStage === idx
                  ? 'border border-[#10B981]/60 bg-[#10B981]/10 text-white font-medium'
                  : 'border border-white/[0.06] bg-[#161618] text-[#71717A] hover:border-white/20'
              }`}
            >
              <div className="truncate">{st.name}</div>
              <div className="text-[9px] text-[#10B981] mt-0.5">{st.riskMultiplier}</div>
            </button>
          ))}
        </div>

        {/* Dynamic Weighting Description */}
        <div className="p-2.5 rounded border border-white/[0.05] bg-[#161618] text-[10px] flex items-center justify-between">
          <span className="text-[#A1A1AA] font-sans truncate">
            {current.thresholdNote}
          </span>
          <span className="text-[#38BDF8] font-bold ml-2 whitespace-nowrap">
            Weight: {current.riskMultiplier}
          </span>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>FASTAPI • POSTGIS • SENTINEL-2 ADAPTER • OPEN-METEO</span>
        <span>PHASE 1 DATA MODEL</span>
      </div>
    </div>
  );
}

// =============================================================================
// 04: SealedProof — RFC 8785 Deterministic Receipt Sealing & Offline Verifier
// Provenance: [CONCEPTUAL PROTOCOL MODEL]
// =============================================================================
export function SealedProofDiagram({ className = '' }: DiagramProps) {
  const [redacted, setRedacted] = useState<boolean>(false);
  const [tampered, setTampered] = useState<boolean>(false);

  return (
    <div
      className={`w-full h-[380px] rounded-xl border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#6366F1]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider text-[11px]">
            CRYPTOGRAPHIC EVIDENCE PACK
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded border border-white/10 bg-[#18181B] text-[#A1A1AA] font-mono">
            SPECIFICATION
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setTampered(!tampered)}
            className={`px-2 py-0.5 rounded text-[10px] border transition-colors ${
              tampered
                ? 'border-[#F87171]/50 bg-[#F87171]/10 text-[#F87171]'
                : 'border-white/10 bg-[#18181B] text-[#A1A1AA] hover:text-white'
            }`}
          >
            {tampered ? 'Tampered Payload' : 'Valid Receipt'}
          </button>
          <button
            type="button"
            onClick={() => setRedacted(!redacted)}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-white/10 bg-[#18181B] text-[10px] text-[#A1A1AA] hover:text-white transition-colors"
          >
            {redacted ? <EyeOff className="w-3 h-3 text-[#38BDF8]" /> : <Eye className="w-3 h-3" />}
            <span>{redacted ? 'Redacted' : 'Full'}</span>
          </button>
        </div>
      </div>

      {/* Verifiable Receipt Frame */}
      <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-2 text-[11px]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#71717A]">Verifiable Credential Payload:</span>
          <span className="text-[#6366F1] font-medium">RFC 8785 Normalizer</span>
        </div>

        <div className="p-2 rounded bg-black/60 text-[10px] font-mono space-y-0.5 border border-white/[0.04]">
          <div>
            <span className="text-[#38BDF8]">"action"</span>: "TRANSFER_FUNDS",
          </div>
          <div>
            <span className="text-[#38BDF8]">"amount"</span>:{' '}
            <span className={tampered ? 'text-[#F87171] font-bold' : ''}>
              {tampered ? '9999.00' : '250.00'}
            </span>,
          </div>
          <div>
            <span className="text-[#38BDF8]">"reasoning"</span>:{' '}
            {redacted ? (
              <span className="text-[#71717A] italic">
                [REDACTED_CLAIMS_HASH: 9f86d081884c7d65...]
              </span>
            ) : (
              <span className="text-[#34D399]">"Authorized per scheduled maintenance invoice"</span>
            )}
          </div>
          <div>
            <span className="text-[#38BDF8]">"signature"</span>: "ed25519:3b0c44298fc1c..."
          </div>
        </div>

        {/* Offline Zero-Round-Trip Verifier Status */}
        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px]">
          <span className="text-[#71717A]">Offline Verifier Status:</span>
          {tampered ? (
            <div className="flex items-center gap-1.5 text-[#F87171] font-semibold">
              <X className="w-3 h-3 text-[#F87171]" />
              <span>SIGNATURE_MISMATCH (Invalid Hash)</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[#34D399] font-semibold">
              <CheckCircle2 className="w-3 h-3 text-[#34D399]" />
              <span>VERIFIED_OK (0 Network Calls)</span>
            </div>
          )}
        </div>
      </div>

      {/* 4 Protocol Steps */}
      <div className="grid grid-cols-4 gap-1.5 text-[9px] text-center">
        <div className="p-1.5 rounded border border-white/[0.05] bg-[#161618]">
          <div className="text-[#38BDF8] font-bold">01. INGEST</div>
          <div className="text-[#71717A] truncate">JSON-LD</div>
        </div>
        <div className="p-1.5 rounded border border-white/[0.05] bg-[#161618]">
          <div className="text-[#38BDF8] font-bold">02. CANON</div>
          <div className="text-[#71717A] truncate">RFC 8785</div>
        </div>
        <div className="p-1.5 rounded border border-white/[0.05] bg-[#161618]">
          <div className="text-[#38BDF8] font-bold">03. SEAL</div>
          <div className="text-[#71717A] truncate">SHA-256</div>
        </div>
        <div className="p-1.5 rounded border border-white/[0.05] bg-[#161618]">
          <div className={tampered ? 'text-[#F87171] font-bold' : 'text-[#34D399] font-bold'}>
            04. VERIFY
          </div>
          <div className="text-[#71717A] truncate">Ed25519</div>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>TYPESCRIPT • RFC 8785 (JCS) • ED25519</span>
        <span>PROTOCOL SPECIFICATION</span>
      </div>
    </div>
  );
}

// =============================================================================
// 05: RakshaScan — Deterministic 5-State Financial Trust Terminal
// Provenance: [ACTUAL WORKING PROTOTYPE UI] (Featured Project)
// =============================================================================
export function RakshaScanDiagram({ className = '' }: DiagramProps) {
  const [selectedState, setSelectedState] = useState<number>(0);
  const [language, setLanguage] = useState<'EN' | 'HI' | 'MR'>('EN');

  const states = [
    {
      label: 'VERIFIED',
      color: 'text-[#34D399]',
      borderColor: 'border-[#34D399]/40',
      bgColor: 'bg-[#34D399]/10',
      meaningEN: 'Entity registration confirmed against authoritative registry records.',
      meaningHI: 'आधिकारिक नियामक रिकॉर्ड के विरुद्ध कॉर्पोरेट पंजीकरण सत्यापित।',
      meaningMR: 'अधिकृत नियामक नोंदींच्या आधारे कंपनी नोंदणी पडताळली.',
    },
    {
      label: 'CONTRADICT',
      color: 'text-[#F87171]',
      borderColor: 'border-[#F87171]/40',
      bgColor: 'bg-[#F87171]/10',
      meaningEN: 'Claimed credentials explicitly contradict official regulatory registries.',
      meaningHI: 'दावा किए गए क्रेडेंशियल आधिकारिक नियामक रजिस्ट्री के विपरीत हैं।',
      meaningMR: 'दावा केलेली माहिती अधिकृत नियामक नोंदींशी थेट विसंगत आहे.',
    },
    {
      label: 'NOT_FOUND',
      color: 'text-[#A1A1AA]',
      borderColor: 'border-white/10',
      bgColor: 'bg-[#18181B]',
      meaningEN: 'No corresponding entity or registration records exist in database.',
      meaningHI: 'डेटाबेस में संबंधित इकाई या पंजीकरण का कोई रिकॉर्ड नहीं मिला।',
      meaningMR: 'डेटाबेसमध्ये संबंधित कंपनी किंवा नोंदणीचा कोणताही रेकॉर्ड आढळला नाही.',
    },
    {
      label: 'UNKNOWN',
      color: 'text-[#71717A]',
      borderColor: 'border-white/10',
      bgColor: 'bg-[#18181B]',
      meaningEN: 'Extracted claim lacks sufficient identifying tokens for registry check.',
      meaningHI: 'निकाले गए दावे में रजिस्ट्री जांच के लिए पर्याप्त टोकन नहीं हैं।',
      meaningMR: 'नोंदणी तपासण्यासाठी दाव्यामध्ये पुरेशी माहिती उपलब्ध नाही.',
    },
    {
      label: 'UNAVAILABLE',
      color: 'text-[#EAB308]',
      borderColor: 'border-[#EAB308]/40',
      bgColor: 'bg-[#EAB308]/10',
      meaningEN: 'Target registry endpoint is offline or rate-limited; refused to guess.',
      meaningHI: 'रजिस्ट्री एंडपॉइंट ऑफ़लाइन या दर-सीमित है; अनुमान लगाने से इनकार किया।',
      meaningMR: 'नोंदणी सर्व्हर तात्पुरता अनुपलब्ध आहे; अंदाजाने निर्णय देण्यास नकार दिला.',
    },
  ];

  const current = states[selectedState];

  return (
    <div
      className={`w-full h-[380px] rounded-xl border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#34D399]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider text-[11px]">
            FINANCIAL FRAUD TERMINAL
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded border border-[#34D399]/30 bg-[#34D399]/10 text-[#34D399] font-mono font-medium">
            WORKING PROTOTYPE
          </span>
        </div>
        <div className="inline-flex rounded border border-white/10 bg-[#18181B] p-0.5 text-[9px]">
          {(['EN', 'HI', 'MR'] as const).map((lang) => (
            <button
              key={lang}
              type="button"
              onClick={() => setLanguage(lang)}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                language === lang
                  ? 'bg-white/20 text-white font-bold'
                  : 'text-[#71717A] hover:text-[#A1A1AA]'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* 5-State Verification Matrix */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#71717A] uppercase tracking-wider">
            Deterministic 5-State Matrix
          </span>
          <span className="text-[10px] text-[#A1A1AA]">No Binary Guessing</span>
        </div>

        {/* 5 Interactive State Buttons */}
        <div className="grid grid-cols-5 gap-1 text-center text-[10px]">
          {states.map((st, idx) => (
            <button
              key={st.label}
              type="button"
              onClick={() => setSelectedState(idx)}
              className={`p-1.5 rounded border transition-all ${
                selectedState === idx
                  ? `${st.borderColor} ${st.bgColor} ${st.color} font-bold ring-1 ring-white/10`
                  : 'border-white/[0.06] bg-[#161618] text-[#71717A] hover:border-white/20'
              }`}
            >
              <div className="truncate text-[9px]">{st.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* State Explanation & Provenance Display */}
      <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-1.5 text-[11px]">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#71717A]">Active Decision State:</span>
          <span className={`${current.color} font-bold`}>[ {current.label} ]</span>
        </div>

        <p className="font-sans text-xs text-[#F4F4F5] leading-relaxed line-clamp-2">
          {language === 'EN' && current.meaningEN}
          {language === 'HI' && current.meaningHI}
          {language === 'MR' && current.meaningMR}
        </p>

        <div className="pt-2 border-t border-white/[0.06] text-[10px] flex items-center justify-between text-[#A1A1AA]">
          <span>FastAPI Sandboxed DOM Scrape</span>
          <span className="text-[#34D399]">Token-Bucket Rate Limited</span>
        </div>
      </div>

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>NEXT.JS • FASTAPI • PYTHON • POSTGRESQL</span>
        <span>WORKING FULL-STACK PROTOTYPE</span>
      </div>
    </div>
  );
}

// =============================================================================
// 06: BugProof — AST Caller Impact Tree & Automated Pytest Regression Runner
// Provenance: [CONCEPTUAL VERIFICATION MODEL]
// =============================================================================
export function BugProofDiagram({ className = '' }: DiagramProps) {
  const [pipelineStep, setPipelineStep] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'terminal' | 'impact'>('terminal');

  const steps = [
    {
      num: '01',
      name: 'Patch Ingest',
      log: 'Git diff AST parse -> 14 lines modified in auth_router.py',
    },
    {
      num: '02',
      name: 'Impact Graph',
      log: 'Caller graph mapped: 3 downstream modules at risk (session_validator, token_cache, user_profile)',
    },
    {
      num: '03',
      name: 'Test Synthesis',
      log: 'Synthesizing 6 boundary Pytest cases testing invariant guarantees',
    },
    {
      num: '04',
      name: 'Isolated Runner',
      log: 'Executed inside Docker subprocess container: 6 passed, 0 regressions [CERTIFIED]',
    },
  ];

  return (
    <div
      className={`w-full h-[380px] rounded-xl border border-white/[0.08] bg-[#121214] p-4 flex flex-col justify-between font-mono select-none overflow-hidden ${className}`}
    >
      {/* Header Bar */}
      <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/[0.06] text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#38BDF8]" aria-hidden="true" />
          <span className="text-[#F4F4F5] font-semibold tracking-wider text-[11px]">
            VERIFICATION & IMPACT ENGINE
          </span>
          <span className="text-[9px] px-1.5 py-0.5 rounded border border-white/10 bg-[#18181B] text-[#A1A1AA] font-mono">
            COLLABORATIVE MODULE
          </span>
        </div>
        <div className="inline-flex rounded-lg border border-white/[0.08] bg-[#18181B] p-0.5 text-[10px]">
          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === 'terminal'
                ? 'bg-white/10 text-white font-medium shadow-sm'
                : 'text-[#71717A] hover:text-[#A1A1AA]'
            }`}
          >
            Runner Output
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('impact')}
            className={`px-2 py-0.5 rounded transition-colors ${
              activeTab === 'impact'
                ? 'bg-white/10 text-white font-medium shadow-sm'
                : 'text-[#71717A] hover:text-[#A1A1AA]'
            }`}
          >
            Caller Impact
          </button>
        </div>
      </div>

      {/* 4 Pipeline Step Buttons */}
      <div className="grid grid-cols-4 gap-1.5 text-[10px]">
        {steps.map((st, idx) => (
          <button
            key={st.num}
            type="button"
            onClick={() => setPipelineStep(idx)}
            className={`p-1.5 rounded text-left transition-all ${
              pipelineStep === idx
                ? 'border border-[#38BDF8]/60 bg-[#38BDF8]/10 text-white font-medium'
                : 'border border-white/[0.06] bg-[#161618] text-[#71717A] hover:border-white/20'
            }`}
          >
            <div className="text-[9px] text-[#38BDF8] font-bold">STEP {st.num}</div>
            <div className="truncate text-[11px] text-[#F4F4F5] mt-0.5">{st.name}</div>
          </button>
        ))}
      </div>

      {/* Terminal or Impact View */}
      {activeTab === 'terminal' ? (
        <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-2">
          <div className="flex items-center justify-between text-[10px] text-[#71717A]">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-[#38BDF8]" />
              <span>verification_runner.py [stdout]</span>
            </div>
            <span className="text-[#34D399] font-mono">Exit Code: 0</span>
          </div>

          <div className="p-2.5 rounded bg-black/60 font-mono text-[11px] text-[#34D399] leading-relaxed border border-white/[0.04]">
            <span className="text-[#71717A]">$ </span>
            {steps[pipelineStep].log}
          </div>

          <div className="pt-2 border-t border-white/[0.06] text-[10px] flex items-center justify-between text-[#A1A1AA]">
            <span>SQLAlchemy Database Migrations</span>
            <span className="text-[#38BDF8]">Member 2 Verification Engine</span>
          </div>
        </div>
      ) : (
        <div className="p-3 rounded-lg border border-white/[0.07] bg-[#18181B] space-y-2 text-[10px]">
          <div className="flex items-center justify-between text-[#71717A]">
            <span>AST Call Hierarchy Tracing:</span>
            <span className="text-[#38BDF8]">3 Modules Bound</span>
          </div>
          <div className="p-2 rounded bg-black/60 font-mono text-[#A1A1AA] space-y-1 border border-white/[0.04]">
            <div className="text-[#F4F4F5]">auth_router.py:login() [MODIFIED]</div>
            <div className="pl-3 text-[#38BDF8]">└── session_validator.py:verify_jwt()</div>
            <div className="pl-6 text-[#A1A1AA]">├── token_cache.py:get_entry()</div>
            <div className="pl-6 text-[#A1A1AA]">└── user_profile.py:load_claims()</div>
          </div>
          <div className="pt-2 border-t border-white/[0.06] text-[10px] text-[#34D399] flex items-center justify-between">
            <span>Regression Synthesizer: 6 Pytest Tests</span>
            <span>0 Flaky Assertions</span>
          </div>
        </div>
      )}

      {/* Footer Specs */}
      <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] text-[#71717A]">
        <span>FLASK • PYTEST • DOCKER • SQLALCHEMY</span>
        <span>MEMBER 2 REGRESSION RUNNER</span>
      </div>
    </div>
  );
}

/**
 * Dispatcher to map project ID / slug to the authentic architectural visualizer
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

export default ProjectDiagramDispatcher;
