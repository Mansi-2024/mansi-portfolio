'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroScrollIndicatorProps {
  className?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroScrollIndicator Component
 *
 * Minimal animated scroll cue that fades out naturally as the user begins scrolling.
 */
export function HeroScrollIndicator({ className = '', innerRef }: HeroScrollIndicatorProps) {
  const handleScrollClick = () => {
    if (typeof window !== 'undefined') {
      const nextSection = document.getElementById('next-preview') || document.getElementById('work');
      if (nextSection) {
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
      className={`hero-scroll-indicator group cursor-pointer flex flex-col items-center gap-2 select-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded p-2 ${className}`}
      aria-label="Scroll to explore portfolio sections"
    >
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#71717a] group-hover:text-[#00f0ff] transition-colors">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3 h-3 text-[#00f0ff] animate-bounce" />
      </div>

      {/* Slender Visual Track with Sliding Pulse Pill */}
      <div className="relative w-[1px] h-8 bg-[#2a2a36] overflow-hidden rounded-full">
        <div className="absolute top-0 left-0 w-full h-3 bg-[#00f0ff] animate-[slideDown_1.8s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
      </div>
    </div>
  );
}

export default HeroScrollIndicator;
