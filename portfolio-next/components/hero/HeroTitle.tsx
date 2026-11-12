'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { Sparkles, Terminal } from 'lucide-react';

interface HeroTitleProps {
  className?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroTitle Component
 *
 * Implements:
 * - Fluid oversized typography with responsive clamp()
 * - Overflow-masked line wrappers for upward staggered word entrance
 * - Technical architectural metadata badges
 * - Accessible semantic hierarchy
 */
export function HeroTitle({ className = '', innerRef }: HeroTitleProps) {
  return (
    <div
      ref={innerRef}
      className={`hero-title-wrapper flex flex-col justify-center space-y-6 ${className}`}
    >
      {/* Top Identity & Status Pill */}
      <div className="hero-status-pill inline-flex items-center gap-2 self-start font-mono text-xs text-[#00f0ff] uppercase tracking-widest px-3 py-1 rounded-full border border-[#2a2a36] bg-[#0e0e12]/80 backdrop-blur-sm shadow-sm">
        <Sparkles className="w-3.5 h-3.5" />
        <span className="font-semibold">{profileData.name}</span>
        <span className="text-[#71717a]">//</span>
        <span className="text-[#f4f4f7]">{profileData.role}</span>
      </div>

      {/* Main Oversized Tagline Headline (Masked for Staggered Entrance) */}
      <h1
        className="hero-heading font-sans font-bold text-[#f4f4f7] tracking-tight leading-[0.98] select-none text-[clamp(2.25rem,6.5vw,5.5rem)]"
        aria-label={`${profileData.taglinePart1} question. ${profileData.taglinePart2} answer.`}
      >
        {/* Row 1: "I follow the question." */}
        <span className="block overflow-hidden py-1">
          <span className="hero-title-line inline-block will-change-transform">
            <span>{profileData.taglinePart1}</span>{' '}
            <span className="text-[#00f0ff] font-serif italic font-normal tracking-normal">
              question.
            </span>
          </span>
        </span>

        {/* Row 2: "Then I build the answer." */}
        <span className="block overflow-hidden py-1">
          <span className="hero-title-line inline-block will-change-transform">
            <span>{profileData.taglinePart2}</span>{' '}
            <span className="text-[#f4f4f7] underline decoration-[#00f0ff]/50 decoration-2 underline-offset-8">
              answer.
            </span>
          </span>
        </span>
      </h1>

      {/* Supporting Editorial Paragraph */}
      <div className="hero-supporting-text max-w-xl">
        <p className="font-sans text-base sm:text-lg text-[#a1a1aa] leading-relaxed font-light">
          {profileData.supportingIntro}
        </p>
      </div>

      {/* Technical Metadata Badges */}
      <div className="hero-meta-badges pt-2 flex flex-wrap items-center gap-2 font-mono text-[10px] sm:text-xs text-[#71717a]">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a2a36] bg-[#0c0c10] text-[#a1a1aa]">
          <Terminal className="w-3 h-3 text-[#00f0ff]" />
          <span>Next.js 16 (App Router)</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a2a36] bg-[#0c0c10] text-[#a1a1aa]">
          <span>React 19</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a2a36] bg-[#0c0c10] text-[#a1a1aa]">
          <span>GSAP + Lenis Ticker</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a2a36] bg-[#0c0c10] text-[#a1a1aa]">
          <span>R3F Staged</span>
        </div>
      </div>
    </div>
  );
}

export default HeroTitle;
