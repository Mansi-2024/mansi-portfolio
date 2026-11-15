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
        className={`relative z-20 w-[270px] sm:w-[310px] aspect-[1/1.5] rounded-2xl border border-white/[0.10] bg-[#121214] p-5 shadow-2xl flex flex-col justify-between transition-transform duration-300 ${
          isStatic ? '' : 'hover:scale-[1.02] hover:-rotate-1'
        }`}
      >
        {/* Top Slot Hole Indication */}
        <div className="w-16 h-2 mx-auto rounded-full bg-[#060608] border border-white/10 -mt-1 mb-3" />

        {/* Header Colophon */}
        <div className="flex items-center justify-between font-mono text-[11px] text-[#A1A1AA] border-b border-white/[0.08] pb-2">
          <span className="font-semibold text-[#F4F4F5] uppercase tracking-wider">{profileData.wordmark}</span>
          <span className="text-[#71717A] tracking-wider uppercase">Folio</span>
        </div>

        {/* Authentic Portrait Window */}
        <div className="relative my-2 w-full aspect-[4/3] rounded-lg border border-white/10 bg-[#18181B] overflow-hidden">
          <img
            src="/assets/mansi-konde-badge.png"
            alt="Mansi Konde"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>

        {/* Identity Details */}
        <div className="space-y-1 my-1">
          <h3 className="font-sans font-bold text-lg text-[#F4F4F5] tracking-tight leading-tight">
            {profileData.name}
          </h3>
          <p className="font-mono text-xs text-[#38BDF8] font-medium">
            {profileData.role}
          </p>
          <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed">
            Full-Stack Development • Applied AI • Software Systems
          </p>
        </div>

        {/* Metadata Footer */}
        <div className="border-t border-white/[0.08] pt-2 flex items-center justify-between font-mono text-[10px] text-[#71717A]">
          <span>github.com/Mansi-2024</span>
          <span className="text-[#A1A1AA]">Profile</span>
        </div>
      </div>
    </div>
  );
}

export default IdentityCardFallback;
