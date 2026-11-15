'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroScrollIndicatorProps {
  className?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroScrollIndicator Component — Editorial Redesign
 *
 * Minimal animated scroll cue with warm tones and smooth Lenis-aware scroll trigger.
 */
export function HeroScrollIndicator({ className = '', innerRef }: HeroScrollIndicatorProps) {
  const handleScrollClick = () => {
    if (typeof window !== 'undefined') {
      const nextSection = document.getElementById('about') || document.getElementById('selected-work');
      if ((window as any).lenis && nextSection) {
        (window as any).lenis.scrollTo(nextSection);
      } else if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      ref={innerRef}
      onClick={handleScrollClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleScrollClick();
        }
      }}
      className={`hero-scroll-indicator group cursor-pointer flex flex-col items-start gap-1.5 select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded py-1 ${className}`}
      aria-label="Scroll to explore portfolio sections"
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717A] group-hover:text-[#F4F4F5] transition-colors">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3 h-3 text-[#A1A1AA] group-hover:text-[#F4F4F5] transition-colors" aria-hidden="true" />
      </div>

      {/* Slender Visual Track with Sliding Pulse Pill */}
      <div className="relative w-12 h-[1px] bg-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-4 bg-[#38BDF8]/80 animate-[slideRight_2.2s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
      </div>
    </div>
  );
}

export default HeroScrollIndicator;
