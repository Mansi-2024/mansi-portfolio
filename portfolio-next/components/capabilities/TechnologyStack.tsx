'use client';

import React from 'react';
import { techStackCategories } from '@/data/capabilities';
import { Layers, Check } from 'lucide-react';

interface TechnologyStackProps {
  className?: string;
}

/**
 * TechnologyStack Component — Verified Technology Index
 *
 * Categorized, typography-led representation of technologies supported by
 * repository evidence and production application code.
 */
export function TechnologyStack({ className = '' }: TechnologyStackProps) {
  return (
    <div className={`space-y-12 ${className}`} aria-label="Verified Technology Stack">
      {/* Subsection Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1c1c24] pb-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#2a2a36] bg-[#0c0c12] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>VERIFIED TECHNOLOGY INDEX</span>
          </div>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-[#f4f4f7] tracking-tight">
            Tools, Runtimes &amp; Frameworks.
          </h3>
        </div>

        <p className="font-mono text-xs text-[#71717a] max-w-sm sm:text-right">
          Ground truth from active repositories. No inflated buzzwords or speculative proficiency meters.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techStackCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-[#2a2a36] bg-[#0a0a0f] p-6 flex flex-col justify-between space-y-6 hover:border-[#38384a] transition-all duration-300"
          >
            <div>
              {/* Category Header */}
              <div className="border-b border-[#1c1c24] pb-3 mb-4">
                <h4 className="font-sans font-semibold text-lg text-[#f4f4f7] tracking-tight">
                  {category.title}
                </h4>
                <p className="font-sans text-xs text-[#71717a] font-light mt-1">
                  {category.description}
                </p>
              </div>

              {/* Technologies List */}
              <ul className="space-y-2.5" role="list">
                {category.technologies.map((tech) => (
                  <li
                    key={tech.name}
                    tabIndex={0}
                    className="group/item flex items-center justify-between p-2.5 rounded-lg border border-[#1c1c24] bg-[#0e0e14] hover:border-[#00f0ff]/40 hover:bg-[#12121c] transition-all focus:outline-none focus:ring-1 focus:ring-[#00f0ff]"
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className="flex items-center gap-1.5 font-mono text-xs font-medium text-[#f4f4f7] group-hover/item:text-[#00f0ff] transition-colors">
                        <span>{tech.name}</span>
                        {tech.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] inline-block" title="Core Technology" />
                        )}
                      </div>
                      <span className="font-sans text-[11px] text-[#71717a] block leading-tight font-light">
                        {tech.context}
                      </span>
                    </div>

                    <div className="flex-shrink-0 text-[#10b981] opacity-70 group-hover/item:opacity-100 transition-opacity">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tag */}
            <div className="font-mono text-[10px] text-[#52525b] pt-3 border-t border-[#1c1c24] flex items-center justify-between">
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
