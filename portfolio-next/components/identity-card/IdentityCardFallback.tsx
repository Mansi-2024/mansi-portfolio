'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { User, QrCode } from 'lucide-react';

interface IdentityCardFallbackProps {
  className?: string;
  isStatic?: boolean;
}

/**
 * IdentityCardFallback — High-fidelity CSS 3D Fallback & SSR Placeholder
 *
 * Renders an identical editorial specimen badge with:
 * - Suspended woven lanyard strap
 * - Metallic buckle and clip rings
 * - Verified profile metadata and specimen portrait frame
 * - Smooth CSS hover tilt
 */
export function IdentityCardFallback({ className = '', isStatic = false }: IdentityCardFallbackProps) {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center select-none py-6 ${className}`}
      aria-label="3D Identity Card Specimen"
    >
      {/* 1. Lanyard Strap Hanging from Top */}
      <div className="relative w-7 h-28 -mb-3 z-0 flex justify-between px-1 bg-[#14141c] rounded-b-sm border-x border-[#2a2a36] shadow-md overflow-hidden">
        {/* Subtle Cyan Pinstripes */}
        <div className="w-0.5 h-full bg-[#00f0ff]/60" />
        <div className="w-0.5 h-full bg-[#00f0ff]/60" />
      </div>

      {/* 2. Metallic Clasp & Swivel Buckle Assembly */}
      <div className="relative z-10 flex flex-col items-center -mb-2">
        {/* Top Ring */}
        <div className="w-4 h-4 rounded-full border-2 border-[#a1a1aa] bg-[#22222e] shadow-sm -mb-1" />
        {/* Buckle Box */}
        <div className="w-8 h-4 rounded-xs border border-[#a1a1aa] bg-[#3a3a46] shadow-sm" />
        {/* Slot Hook */}
        <div className="w-5 h-2 rounded-b-sm bg-[#888896] border border-[#a1a1aa]" />
      </div>

      {/* 3. Main Specimen Badge Card */}
      <div
        className={`relative z-20 w-[270px] sm:w-[310px] aspect-[1/1.5] rounded-2xl border border-[#2a2a36] bg-[#0c0c12] p-5 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${
          isStatic ? '' : 'hover:scale-[1.02] hover:-rotate-1'
        }`}
      >
        {/* Top Slot Hole Indication */}
        <div className="w-16 h-2 mx-auto rounded-full bg-[#060608] border border-[#2a2a36] -mt-1 mb-3" />

        {/* Header Colophon */}
        <div className="flex items-center justify-between font-mono text-[10px] text-[#71717a] border-b border-[#1c1c24] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-[#f4f4f7]">{profileData.wordmark}</span>
            <span>// SPECIMEN 2026</span>
          </div>
          <div className="flex items-center gap-1 text-[#00f0ff] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span>ACTIVE</span>
          </div>
        </div>

        {/* Specimen Portrait Window */}
        <div className="relative my-2 w-full aspect-[4/3] rounded-lg border border-[#00f0ff]/30 bg-[#08080c] overflow-hidden flex flex-col items-center justify-center text-center p-3">
          {/* Corner Ticks */}
          <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#00f0ff]" />
          <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#00f0ff]" />
          <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#00f0ff]" />
          <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#00f0ff]" />

          <div className="w-12 h-12 rounded-full bg-[#16161f] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] mb-1.5">
            <User className="w-6 h-6 opacity-75" />
          </div>
          <div className="font-mono text-[10px] text-[#f4f4f7] font-semibold tracking-wider">
            SPECIMEN // MK-01
          </div>
          <div className="font-mono text-[8px] text-[#71717a]">
            PHOTOMETRIC IDENTITY
          </div>
        </div>

        {/* Holographic Security Band */}
        <div className="w-full h-5 rounded-xs bg-gradient-to-r from-[#00f0ff]/20 via-[#d7a6b8]/30 to-[#b9a7d0]/20 border-y border-[#2a2a36] flex items-center justify-center my-1">
          <span className="font-mono text-[7px] text-[#f4f4f7] tracking-widest uppercase opacity-80">
            VERIFIED ARTIFACT • MK-2026 • CREATIVE ENGINEER
          </span>
        </div>

        {/* Identity Details */}
        <div className="space-y-0.5 my-1">
          <h3 className="font-sans font-bold text-lg text-[#f4f4f7] tracking-tight leading-tight">
            {profileData.name}
          </h3>
          <p className="font-mono text-xs text-[#00f0ff] font-semibold">
            {profileData.role}
          </p>
          <p className="font-sans text-[11px] text-[#a1a1aa] leading-tight">
            {profileData.positioning}
          </p>
        </div>

        {/* Metadata Footer */}
        <div className="border-t border-[#1c1c24] pt-2 flex items-center justify-between font-mono text-[9px] text-[#71717a]">
          <div>
            <div>LOC: PUNE, INDIA</div>
            <div>TZ: {profileData.timezone}</div>
          </div>
          <div className="flex items-center gap-1.5">
            <QrCode className="w-6 h-6 text-[#a1a1aa] opacity-80" />
            <div className="text-right">
              <span className="text-[#f4f4f7] font-semibold">MK-CE-089</span>
              <div className="text-[#00f0ff]">AUTHENTIC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdentityCardFallback;
