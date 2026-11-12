'use client';

import React from 'react';
import { CapabilityGroup as CapabilityGroupType } from '@/data/capabilities';
import { CheckCircle2, Sparkles, Terminal, Code2, Cpu } from 'lucide-react';

interface CapabilityGroupProps {
  group: CapabilityGroupType;
  className?: string;
}

// Map group index to a tasteful icon
function getGroupIcon(index: string) {
  switch (index) {
    case '01':
      return <Terminal className="w-4 h-4 text-[#00f0ff]" />;
    case '02':
      return <Cpu className="w-4 h-4 text-[#10b981]" />;
    case '03':
      return <Sparkles className="w-4 h-4 text-[#a855f7]" />;
    case '04':
      return <Code2 className="w-4 h-4 text-[#eab308]" />;
    default:
      return <Terminal className="w-4 h-4 text-[#00f0ff]" />;
  }
}

/**
 * CapabilityGroup Component — Renders 1 of the 4 core capability groups
 */
export function CapabilityGroupCard({ group, className = '' }: CapabilityGroupProps) {
  return (
    <article
      aria-labelledby={`capability-title-${group.id}`}
      className={`group relative rounded-2xl border border-[#2a2a36] bg-[#0c0c12] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#3f3f52] transition-all duration-300 shadow-xl overflow-hidden ${className}`}
    >
      {/* Background Decorative Index Watermark */}
      <div className="absolute top-3 right-6 font-mono font-bold text-5xl sm:text-6xl text-white/[0.03] select-none pointer-events-none">
        {group.index}
      </div>

      <div>
        {/* Top Header Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717a] mb-4 pb-3 border-b border-[#1c1c24]">
          <div className="flex items-center gap-2">
            <span className="text-[#00f0ff] font-bold text-sm tracking-wider">
              {group.index}
            </span>
            <span>//</span>
            <span className="text-[#a1a1aa] uppercase tracking-wider text-[11px]">
              {group.tag}
            </span>
          </div>
          {getGroupIcon(group.index)}
        </div>

        {/* Group Title & Summary */}
        <h3
          id={`capability-title-${group.id}`}
          className="font-sans font-bold text-2xl sm:text-3xl text-[#f4f4f7] tracking-tight leading-snug group-hover:text-[#00f0ff] transition-colors"
        >
          {group.title}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] leading-relaxed font-light mt-2 mb-6">
          {group.description}
        </p>

        {/* Capability Items List */}
        <div className="space-y-3 pt-4 border-t border-[#1c1c24]/80">
          {group.capabilities.map((cap) => (
            <div
              key={cap.name}
              className="flex items-start gap-2.5 text-xs font-mono"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] mt-0.5 flex-shrink-0" />
              <div className="space-y-0.5">
                <span className="font-semibold text-[#f4f4f7] font-sans text-xs sm:text-sm block">
                  {cap.name}
                </span>
                <span className="text-[11px] text-[#71717a] block leading-normal font-light">
                  {cap.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default CapabilityGroupCard;
