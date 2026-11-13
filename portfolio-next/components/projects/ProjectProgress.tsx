'use client';

import React from 'react';
import { ArrowLeft, ArrowRight, MoveHorizontal } from 'lucide-react';

interface ProjectProgressProps {
  currentIndex: number;
  total: number;
  progress: number; // 0 to 1
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

/**
 * ProjectProgress Component — Editorial Progress & Navigation Bar
 */
export function ProjectProgress({
  currentIndex,
  total,
  progress,
  onPrev,
  onNext,
  className = '',
}: ProjectProgressProps) {
  const currentFormatted = String(currentIndex + 1).padStart(2, '0');
  const totalFormatted = String(total).padStart(2, '0');

  return (
    <div
      aria-label="Gallery Navigation & Progress"
      className={`flex items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-8 py-4 font-mono text-xs text-[#71717A] ${className}`}
    >
      {/* Left: Counter & Scroll Hint */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 font-bold text-[#F4F4F5]">
          <span className="text-[#38BDF8]">{currentFormatted}</span>
          <span className="text-white/20">/</span>
          <span>{totalFormatted}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#71717A] border-l border-white/10 pl-4">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
          <span>Horizontal architectural scrub</span>
        </div>
      </div>

      {/* Center: Slender Scrub Progress Bar */}
      <div className="flex-1 max-w-xs sm:max-w-md mx-6 h-[2px] rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[#38BDF8] transition-all duration-150 ease-out origin-left"
          style={{ width: `${Math.max(5, Math.min(100, progress * 100))}%` }}
        />
      </div>

      {/* Right: Manual Step Arrows */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentIndex <= 0}
          aria-label="Previous project"
          className="p-1.5 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed text-[#F4F4F5] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
        <button
          onClick={onNext}
          disabled={currentIndex >= total - 1}
          aria-label="Next project"
          className="p-1.5 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.08] disabled:opacity-30 disabled:cursor-not-allowed text-[#F4F4F5] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
        >
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default ProjectProgress;
