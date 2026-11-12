import React from 'react';
import { LittleExplorerArt } from './character/LittleExplorerArt';

/**
 * Editorial Inquiry & Exploration Visual Composition
 * Merges technical coordinate drafting with organic exploration paths.
 * Integrates the Little Explorer character in the Field Specimen Canvas.
 */
export const InquiryDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none aspect-[4/3] sm:aspect-[16/11] rounded-lg border border-border-plum bg-aubergine/30 p-4 sm:p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-midnight-plum/80">
      {/* Blueprint Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #B7AAB8 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      {/* Top Header Metadata */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[10px] tracking-wider text-ash-mauve border-b border-border-plum/50 pb-2.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-sm bg-dusty-rose" />
          <span className="text-warm-ivory uppercase">System 01 // Inquiry Matrix</span>
        </div>
        <span className="text-ash-mauve/70 font-mono">LAT: 18.5204° N · LON: 73.8567° E</span>
      </div>

      {/* Center Interactive Drawing Surface */}
      <div className="relative flex-1 my-3 flex items-center justify-center">
        {/* SVG Architectural Vector Work */}
        <svg
          viewBox="0 0 460 260"
          className="w-full h-full text-border-plum"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Editorial technical diagram depicting the path from question to answer"
        >
          {/* Subtle Coordinate Axis Rules */}
          <line x1="20" y1="130" x2="440" y2="130" stroke="#403344" strokeWidth="0.75" strokeDasharray="3 3" />
          <line x1="230" y1="20" x2="230" y2="240" stroke="#403344" strokeWidth="0.75" strokeDasharray="3 3" />

          {/* Focal Coordinate Markers */}
          <text x="25" y="125" fill="#858B93" fontSize="8" fontFamily="IBM Plex Mono">ORIGIN [-0.00]</text>
          <text x="390" y="125" fill="#858B93" fontSize="8" fontFamily="IBM Plex Mono">[+1.00] END</text>

          {/* Concentric Geometric Arcs (Soft Lavender & Dusty Rose) */}
          <circle cx="230" cy="130" r="90" stroke="#B9A7D0" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="4 6" />
          <circle cx="230" cy="130" r="60" stroke="#D7A6B8" strokeWidth="0.75" strokeOpacity="0.35" />
          <circle cx="230" cy="130" r="30" stroke="#B7AAB8" strokeWidth="0.5" strokeOpacity="0.4" />

          {/* Hand-Drawn-Feel Bezier Inquiry Curves (The Path of Discovery) */}
          <path
            d="M 50 160 C 100 80, 140 190, 200 120 S 300 70, 360 140 S 410 110, 425 125"
            stroke="#D7A6B8"
            strokeWidth="1.75"
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />

          <path
            d="M 60 180 C 130 220, 180 60, 240 140 S 340 180, 410 95"
            stroke="#B9A7D0"
            strokeWidth="1"
            strokeDasharray="4 4"
            strokeOpacity="0.6"
            strokeLinecap="round"
          />

          {/* Key Milestones Along the Vector Path */}
          {/* Node Alpha: The Question */}
          <circle cx="50" cy="160" r="4" fill="#D7A6B8" />
          <circle cx="50" cy="160" r="8" stroke="#D7A6B8" strokeWidth="0.5" strokeOpacity="0.5" />
          <text x="40" y="185" fill="#F3EAF0" fontSize="9" fontFamily="DM Sans" fontWeight="500">α. The Question</text>

          {/* Node Delta: Iteration & Prototyping */}
          <circle cx="200" cy="120" r="3" fill="#B9A7D0" />
          <text x="180" y="105" fill="#B7AAB8" fontSize="8" fontFamily="IBM Plex Mono">Δ. Exploration</text>

          {/* Node Omega: The Answer */}
          <circle cx="425" cy="125" r="4.5" fill="#F3EAF0" />
          <circle cx="425" cy="125" r="10" stroke="#D7A6B8" strokeWidth="1" strokeDasharray="2 2" />
          <text x="375" y="155" fill="#D7A6B8" fontSize="9" fontFamily="DM Sans" fontWeight="600">Ω. The Answer</text>
        </svg>

        {/* Specimen 01: The Little Explorer (Active Integration) */}
        <div className="absolute right-3 bottom-2 sm:right-6 sm:bottom-4 w-48 sm:w-56 p-2.5 sm:p-3 rounded border border-border-plum bg-midnight-plum/95 backdrop-blur-md shadow-lg shadow-midnight-plum">
          <div className="flex items-center justify-between pb-1.5 border-b border-border-plum/40 font-mono text-[9px] text-ash-mauve">
            <span className="flex items-center gap-1.5 text-dusty-rose font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-dusty-rose animate-pulse" />
              SPECIMEN 01
            </span>
            <span className="text-[8px] uppercase tracking-wider text-ash-mauve/80">Active Companion</span>
          </div>
          <div className="pt-2 flex items-center gap-2.5">
            <div className="shrink-0 p-1 rounded bg-aubergine/60 border border-border-plum/60 flex items-center justify-center">
              <LittleExplorerArt pose="exploring" size={48} />
            </div>
            <div className="text-left overflow-hidden">
              <span className="font-serif italic text-warm-ivory text-sm sm:text-base block truncate">
                The Little Explorer
              </span>
              <span className="font-mono text-[8.5px] text-dusty-rose block mt-0.5">
                Trajectory Guide
              </span>
              <span className="font-sans text-[10px] text-ash-mauve/80 block mt-1 leading-tight line-clamp-2">
                Hand-drawn companion charting the path of inquiry.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Footnote */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-ash-mauve/80 pt-2 border-t border-border-plum/40">
        <span>FIGURE 1.0 — TRAJECTORY OF INQUIRY</span>
        <span className="text-dusty-rose/90 font-medium">PRECISION CRAFT × CURIOSITY</span>
      </div>
    </div>
  );
};

export default InquiryDiagram;
