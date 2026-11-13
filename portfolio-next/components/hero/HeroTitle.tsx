'use client';

import React from 'react';
import { profileData } from '@/data/profile';

interface HeroTitleProps {
  className?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroTitle Component — Editorial Redesign
 *
 * Implements:
 * - High-contrast Newsreader serif headline with restrained line breaks
 * - Overflow-masked line wrappers for upward staggered entrance
 * - Publication-grade metadata eyebrow
 * - Quiet action link to selected work
 */
export function HeroTitle({ className = '', innerRef }: HeroTitleProps) {
  return (
    <div
      ref={innerRef}
      className={`hero-title-wrapper flex flex-col justify-center space-y-6 ${className}`}
    >
      {/* Top Editorial Eyebrow */}
      <div className="hero-status-pill inline-flex items-center gap-2.5 self-start font-mono text-[11px] text-[#A1A1AA] uppercase tracking-[0.14em] pb-1 border-b border-white/10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" aria-hidden="true" />
        <span className="text-[#F4F4F5] font-medium">{profileData.name}</span>
        <span className="text-[#71717A]" aria-hidden="true">—</span>
        <span>{profileData.role}</span>
        <span className="text-[#71717A]" aria-hidden="true">—</span>
        <span className="text-[#71717A]">Mumbai, IN</span>
      </div>

      {/* Main Oversized Tagline Headline (Masked for Staggered Entrance) */}
      <h1
        className="hero-heading font-serif text-[#F4F4F5] tracking-tight leading-[1.05] select-none text-[clamp(2.5rem,5.5vw,4.75rem)] font-normal"
        aria-label={profileData.tagline}
      >
        {/* Row 1: "I follow the question." */}
        <span className="block overflow-hidden py-1">
          <span className="hero-title-line inline-block will-change-transform">
            {profileData.taglinePart1} question.
          </span>
        </span>

        {/* Row 2: "Then I build the answer." */}
        <span className="block overflow-hidden py-1">
          <span className="hero-title-line inline-block will-change-transform text-[#E4E4E7]">
            {profileData.taglinePart2} answer.
          </span>
        </span>
      </h1>

      {/* Supporting Editorial Paragraph */}
      <div className="hero-supporting-text max-w-xl">
        <p className="font-sans text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
          {profileData.supportingIntro}
        </p>
      </div>

      {/* Quiet Action Link */}
      <div className="hero-action-row pt-2 flex items-center gap-6">
        <a
          href="#selected-work"
          className="group inline-flex items-center gap-2 font-mono text-xs text-[#F4F4F5] uppercase tracking-wider py-1.5 border-b border-white/20 hover:border-white/80 transition-colors"
        >
          <span>Explore Selected Work</span>
          <span className="text-[#38BDF8] group-hover:translate-y-0.5 transition-transform" aria-hidden="true">↓</span>
        </a>
        <span className="font-mono text-xs text-[#71717A]">
          Vol. 2026 // Folio
        </span>
      </div>
    </div>
  );
}

export default HeroTitle;
