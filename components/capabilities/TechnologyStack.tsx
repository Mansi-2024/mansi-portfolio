'use client';

import React, { useState, useRef } from 'react';
import { techStackCategories, TechCategory } from '@/data/capabilities';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';

interface TechnologyStackProps {
  className?: string;
}

export function TechnologyStack({ className = '' }: TechnologyStackProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const totalTechCount = techStackCategories.reduce(
    (acc, cat) => acc + cat.technologies.length,
    0
  );

  const filteredCategories: TechCategory[] =
    activeCategory === 'all'
      ? techStackCategories
      : techStackCategories.filter((cat) => cat.id === activeCategory);

  // Subtle staggered reveal animation for technology tiles
  useGSAP(
    () => {
      if (typeof window === 'undefined' || prefersReducedMotion || !gridContainerRef.current) return;

      const items = gridContainerRef.current.querySelectorAll('.tech-tile');
      gsap.fromTo(
        items,
        { opacity: 0, y: 10, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.35,
          stagger: 0.015,
          ease: 'power2.out',
          overwrite: 'auto',
        }
      );
    },
    { scope: containerRef, dependencies: [activeCategory, prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      className={`space-y-8 sm:space-y-10 ${className}`}
      aria-label="Verified Technical Landscape"
    >
      {/* Subsection Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
            <span>Technical Ecosystem</span>
          </div>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F4F5] tracking-tight font-normal">
            Tools, Runtimes &amp; Systems.
          </h3>
        </div>

        <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] max-w-md leading-relaxed font-normal">
          A verified catalog of languages, runtimes, and engineering frameworks applied across
          production systems and open-source software.
        </p>
      </div>

      {/* Domain Filter Pills */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2"
        role="tablist"
        aria-label="Technology Domains"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'all'}
          onClick={() => setActiveCategory('all')}
          className={`shrink-0 px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
            activeCategory === 'all'
              ? 'bg-[#F4F4F5] text-[#0B0B0C] font-semibold shadow-sm'
              : 'bg-white/[0.03] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/[0.08] border border-white/[0.06]'
          }`}
        >
          All Domains ({totalTechCount})
        </button>

        {techStackCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`shrink-0 px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
              activeCategory === category.id
                ? 'bg-[#F4F4F5] text-[#0B0B0C] font-semibold shadow-sm'
                : 'bg-white/[0.03] text-[#A1A1AA] hover:text-[#F4F4F5] hover:bg-white/[0.08] border border-white/[0.06]'
            }`}
          >
            {category.title} ({category.technologies.length})
          </button>
        ))}
      </div>

      {/* Technical Landscape: Compact Category-Based Tile Matrix */}
      <div ref={gridContainerRef} className="space-y-8 sm:space-y-10">
        {filteredCategories.map((category) => (
          <div key={category.id} className="space-y-3.5">
            {/* Category Header Row */}
            <div className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-2.5">
              <div className="flex items-center gap-2.5">
                <h4 className="font-serif text-lg sm:text-xl text-[#F4F4F5] font-normal tracking-tight">
                  {category.title}
                </h4>
                <span className="font-mono text-[11px] text-[#71717A]">
                  ({category.technologies.length})
                </span>
              </div>
              <span className="hidden sm:inline-block font-mono text-xs text-[#71717A]">
                {category.tagline}
              </span>
            </div>

            {/* Compact Technology Tiles Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2.5 sm:gap-3">
              {category.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-tile group relative rounded-lg border border-white/[0.07] bg-[#121214] px-3.5 py-3 sm:px-4 sm:py-3.5 flex items-center justify-between gap-2.5 hover:border-white/25 hover:bg-[#18181B] hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none shadow-sm min-h-[48px]"
                >
                  <span className="font-mono text-xs sm:text-[13px] font-medium text-[#E4E4E7] group-hover:text-white transition-colors leading-snug">
                    {tech.name}
                  </span>
                  {tech.highlight && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/80 shrink-0 group-hover:bg-[#38BDF8] group-hover:scale-125 transition-all mt-0.5 self-center"
                      title="Core Technology"
                      aria-label="Core Technology"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechnologyStack;
