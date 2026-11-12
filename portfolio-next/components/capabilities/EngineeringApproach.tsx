'use client';

import React from 'react';
import { engineeringPrinciples } from '@/data/capabilities';
import { Compass } from 'lucide-react';

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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1c1c24] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#2a2a36] bg-[#0c0c12] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>MINDSET &amp; PHILOSOPHY</span>
          </div>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-[#f4f4f7] tracking-tight">
            How I approach a problem.
          </h3>
        </div>

        <p className="font-mono text-xs text-[#71717a] max-w-sm sm:text-right">
          Practical mental models developed through prototype engineering and collaborative building.
        </p>
      </div>

      {/* 4 Principles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {engineeringPrinciples.map((principle) => (
          <div
            key={principle.number}
            className="group relative rounded-2xl border border-[#2a2a36] bg-[#0c0c12] p-6 sm:p-8 flex flex-col justify-between space-y-4 hover:border-[#38384a] transition-all duration-300"
          >
            {/* Number Indicator */}
            <div className="flex items-center justify-between font-mono text-xs text-[#71717a] border-b border-[#1c1c24] pb-3">
              <span className="text-[#00f0ff] font-bold text-sm tracking-wider">
                PRINCIPLE // {principle.number}
              </span>
              <span className="text-[10px] text-[#52525b] uppercase">EMPIRICAL METHOD</span>
            </div>

            <div className="space-y-2 py-2">
              <h4 className="font-sans font-semibold text-lg sm:text-xl text-[#f4f4f7] tracking-tight leading-snug group-hover:text-[#00f0ff] transition-colors">
                {principle.headline}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light">
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
