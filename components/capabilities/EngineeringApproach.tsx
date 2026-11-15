'use client';

import React from 'react';
import Link from 'next/link';
import { engineeringPrinciples } from '@/data/capabilities';
import { ArrowUpRight, Compass } from 'lucide-react';

interface EngineeringApproachProps {
  className?: string;
}

export function EngineeringApproach({ className = '' }: EngineeringApproachProps) {
  return (
    <div className={`space-y-12 sm:space-y-16 ${className}`} aria-label="Engineering Mindset & Approach">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
            <span>Engineering Mindset</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F4F5] tracking-tight font-normal">
            How I approach a problem.
          </h3>
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] max-w-md leading-relaxed font-normal">
          Habits, architectural trade-offs, and empirical verification principles developed through
          building real-world software across frontend, backend, and intelligent systems.
        </p>
      </div>

      {/* Stepped Architectural Principles Flow */}
      <div className="space-y-12 sm:space-y-16">
        {engineeringPrinciples.map((principle, index) => (
          <article
            key={principle.id}
            aria-labelledby={`principle-title-${principle.id}`}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 sm:pb-16 border-b border-white/[0.06] last:border-b-0 last:pb-0"
          >
            {/* Left Column: Principle & Mindset (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 font-mono text-xs text-[#71717A]">
                  <span className="text-[#38BDF8] font-medium">0{index + 1}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
                  <span className="text-[#A1A1AA]">{principle.subtitle}</span>
                </div>

                <h4
                  id={`principle-title-${principle.id}`}
                  className="font-serif text-2xl sm:text-3xl text-[#F4F4F5] font-normal tracking-tight leading-snug group-hover:text-white transition-colors"
                >
                  {principle.headline}
                </h4>

                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal pt-1">
                  {principle.description}
                </p>
              </div>
            </div>

            {/* Right Column: Grounded Project Evidence (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="rounded-xl border border-white/[0.08] bg-[#121214] p-5 sm:p-6 space-y-3 group-hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-between gap-2 border-b border-white/[0.06] pb-2.5">
                  <div className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA]">
                    <Compass className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                    <span>Project Application</span>
                  </div>

                  <Link
                    href={`/projects/${principle.caseEvidence.projectSlug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#F4F4F5] hover:text-white transition-colors group/link"
                  >
                    <span>{principle.caseEvidence.projectTitle}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#71717A] group-hover/link:text-white transition-colors" aria-hidden="true" />
                  </Link>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="font-mono text-xs text-[#F4F4F5] font-medium">
                    {principle.caseEvidence.implementation}
                  </div>
                  <p className="font-sans text-xs text-[#A1A1AA] leading-relaxed font-normal">
                    {principle.caseEvidence.decision}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default EngineeringApproach;
