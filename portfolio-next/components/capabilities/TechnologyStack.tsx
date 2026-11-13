'use client';

import React from 'react';
import { techStackCategories } from '@/data/capabilities';
import { Check } from 'lucide-react';

interface TechnologyStackProps {
  className?: string;
}

/**
 * TechnologyStack Component — Verified Technology Index
 */
export function TechnologyStack({ className = '' }: TechnologyStackProps) {
  return (
    <div className={`space-y-10 ${className}`} aria-label="Verified Technology Stack">
      {/* Subsection Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10 mb-3">
            <span>VERIFIED TECHNOLOGY INDEX</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight font-normal">
            Tools, Runtimes &amp; Frameworks.
          </h3>
        </div>

        <p className="font-mono text-xs text-[#71717A] max-w-sm sm:text-right">
          Ground truth from active repositories. No inflated buzzwords or speculative proficiency meters.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {techStackCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-xl border border-white/[0.08] bg-[#121214] p-6 flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="border-b border-white/[0.06] pb-3 mb-4">
                <h4 className="font-sans font-medium text-lg text-[#F4F4F5] tracking-tight">
                  {category.title}
                </h4>
                <p className="font-sans text-xs text-[#71717A] font-normal mt-1">
                  {category.description}
                </p>
              </div>

              {/* Technologies List */}
              <ul className="space-y-2.5" role="list">
                {category.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    tabIndex={0}
                    className="group/item flex items-center justify-between p-2.5 rounded-lg border border-white/[0.05] bg-[#161618] hover:border-white/20 hover:bg-[#1A1A1E] transition-all focus:outline-none focus:ring-1 focus:ring-[#38BDF8]"
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-[#F4F4F5] group-hover/item:text-white transition-colors">
                        <span>{tech.name}</span>
                        {tech.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] inline-block" title="Core Technology" />
                        )}
                      </div>
                      <span className="font-sans text-[11px] text-[#71717A] block leading-tight font-normal">
                        {tech.context}
                      </span>
                    </div>

                    <div className="flex-shrink-0 text-[#34D399] opacity-70 group-hover/item:opacity-100 transition-opacity">
                      <Check className="w-3.5 h-3.5" aria-hidden="true" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="font-mono text-[10px] text-[#71717A] pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <span>CATEGORY // {category.id.toUpperCase()}</span>
              <span>{category.technologies.length} VERIFIED</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyStack;
