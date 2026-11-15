'use client';

import React from 'react';
import { CapabilityGroup as CapabilityGroupType } from '@/data/capabilities';
import { Terminal, Cpu, Layers, Code2 } from 'lucide-react';

interface CapabilityGroupProps {
  group: CapabilityGroupType;
  className?: string;
}

function getGroupIcon(index: string) {
  switch (index) {
    case '01':
      return <Terminal className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />;
    case '02':
      return <Cpu className="w-4 h-4 text-[#34D399]" aria-hidden="true" />;
    case '03':
      return <Layers className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />;
    case '04':
      return <Code2 className="w-4 h-4 text-[#F4F4F5]" aria-hidden="true" />;
    default:
      return <Terminal className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />;
  }
}

/**
 * CapabilityGroup Component — Editorial Redesign
 */
export function CapabilityGroupCard({ group, className = '' }: CapabilityGroupProps) {
  return (
    <article
      aria-labelledby={`capability-title-${group.id}`}
      className={`group relative rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300 shadow-xl overflow-hidden ${className}`}
    >
      <div>
        {/* Top Header Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717A] mb-4 pb-3 border-b border-white/[0.06]">
          <span className="text-[#38BDF8] uppercase tracking-wider text-[11px] font-medium">
            {group.tag}
          </span>
          {getGroupIcon(group.index)}
        </div>

        {/* Group Title & Summary */}
        <h3
          id={`capability-title-${group.id}`}
          className="font-sans font-semibold text-2xl sm:text-3xl text-[#F4F4F5] tracking-tight leading-snug group-hover:text-white transition-colors"
        >
          {group.title}
        </h3>

        <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-normal mt-2 mb-6">
          {group.description}
        </p>

        {/* Capability Items List */}
        <div className="space-y-3 pt-4 border-t border-white/[0.06]">
          {group.capabilities.map((cap) => (
            <div
              key={cap.name}
              className="flex items-start gap-2.5 text-xs font-mono"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-1.5 flex-shrink-0" aria-hidden="true" />
              <div className="space-y-0.5">
                <span className="font-medium text-[#F4F4F5] font-sans text-xs sm:text-sm block">
                  {cap.name}
                </span>
                <span className="text-[11px] text-[#71717A] block leading-normal font-normal">
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
