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
 * ProjectProgress Component — Horizontal Scrub Scrubber & Navigation Indicator
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
      className={`flex items-center justify-between w-full max-w-7xl mx-auto px-6 sm:px-8 py-4 font-mono text-xs text-[#71717a] ${className}`}
    >
      {/* Left: Counter & Scroll Hint */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 font-bold text-[#f4f4f7]">
          <span className="text-[#00f0ff]">{currentFormatted}</span>
          <span>/</span>
          <span>{totalFormatted}</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#71717a] border-l border-[#1c1c24] pl-4">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
          <span>Scroll to explore gallery</span>
        </div>
      </div>

      {/* Center: Slender Scrub Progress Bar */}
      <div className="flex-1 max-w-xs sm:max-w-md mx-6 h-1 rounded-full bg-[#1c1c24] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] transition-all duration-150 ease-out origin-left"
          style={{ width: `${Math.max(5, Math.min(100, progress * 100))}%` }}
        />
      </div>

      {/* Right: Manual Step Arrows (Accessible click / keyboard alternative) */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={currentIndex <= 0}
          aria-label="Previous project"
          className="p-1.5 rounded border border-[#2a2a36] bg-[#0e0e14] hover:bg-[#14141e] disabled:opacity-30 disabled:cursor-not-allowed text-[#f4f4f7] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
        <button
          onClick={onNext}
          disabled={currentIndex >= total - 1}
          aria-label="Next project"
          className="p-1.5 rounded border border-[#2a2a36] bg-[#0e0e14] hover:bg-[#14141e] disabled:opacity-30 disabled:cursor-not-allowed text-[#f4f4f7] transition-colors"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

export default ProjectProgress;
