import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowDown, Sparkles } from 'lucide-react';

export function HeroPlaceholder() {
  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Top Status & Edition Pill */}
      <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#a1a1aa] border-b border-[#1c1c24] pb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="text-[#f4f4f7] tracking-wider uppercase font-semibold">
            {profileData.status}
          </span>
        </div>
        <span className="text-[#71717a] hidden sm:inline">{profileData.edition}</span>
      </div>

      {/* Main Cinematic Statement */}
      <div className="my-auto py-12 max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest px-3 py-1 rounded-full border border-[#2a2a36] bg-[#0e0e12]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{profileData.role}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-semibold text-[#f4f4f7] tracking-tight leading-[1.05]">
          {profileData.taglinePart1}{' '}
          <span className="text-[#00f0ff] font-serif italic font-normal">question.</span>
          <br />
          {profileData.taglinePart2}{' '}
          <span className="text-[#f4f4f7] underline decoration-[#00f0ff]/50 decoration-2 underline-offset-8">
            answer.
          </span>
        </h1>

        <p className="font-sans text-lg sm:text-xl text-[#a1a1aa] leading-relaxed max-w-2xl font-light">
          {profileData.supportingIntro}
        </p>

        {/* Phase 1 Architecture Notice */}
        <div className="pt-4 font-mono text-xs text-[#71717a] border-l-2 border-[#2a2a36] pl-4 space-y-1">
          <div className="text-[#a1a1aa]">Phase 1 Architecture Active // Next.js 16 + React 19 + GSAP + Lenis</div>
          <div>Canvas image sequence & 3D lanyard physics infrastructure staged for subsequent phases.</div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="flex items-center justify-between pt-6 border-t border-[#1c1c24] font-mono text-xs text-[#71717a]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-3.5 h-3.5 text-[#00f0ff] animate-bounce" />
          <span>SCROLL TO EXPLORE SELECTED WORK</span>
        </div>
      </div>
    </section>
  );
}

export default HeroPlaceholder;
