'use client';

import React from 'react';
import { engineeringPrinciples } from '@/data/capabilities';

interface EngineeringApproachProps {
  className?: string;
}

/**
 * EngineeringApproach Component — Communicates Mindset & Problem-Solving Principles
 */
export function EngineeringApproach({ className = '' }: EngineeringApproachProps) {
  return (
    <div className={`space-y-10 ${className}`} aria-label="Engineering Approach">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10 mb-3">
            <span>MINDSET &amp; PHILOSOPHY</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight font-normal">
            How I approach a problem.
          </h3>
        </div>

        <p className="font-mono text-xs text-[#71717A] max-w-sm sm:text-right">
          Practical mental models developed through prototype engineering and collaborative building.
        </p>
      </div>

      {/* 4 Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {engineeringPrinciples.map((principle) => (
          <div
            key={principle.number}
            className="group relative rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all duration-300"
          >
            {/* Number Indicator */}
            <div className="flex items-center justify-between font-mono text-xs text-[#71717A] border-b border-white/[0.06] pb-3">
              <span className="text-[#38BDF8] font-bold text-sm tracking-wider">
                PRINCIPLE // {principle.number}
              </span>
              <span className="text-[10px] text-[#A1A1AA] uppercase">EMPIRICAL METHOD</span>
            </div>

            <div className="space-y-2 py-2">
              <h4 className="font-sans font-medium text-lg sm:text-xl text-[#F4F4F5] tracking-tight leading-snug group-hover:text-white transition-colors">
                {principle.headline}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal">
                {principle.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EngineeringApproach;
