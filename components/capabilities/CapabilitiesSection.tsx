'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TechnologyStack } from './TechnologyStack';

interface CapabilitiesSectionProps {
  className?: string;
}

/**
 * CapabilitiesSection Component — Skills & Technical Range
 *
 * Implements:
 * - Clean editorial section header with Newsreader typography
 * - Technical Ecosystem (7 verified domains, project evidence badges, domain filtering)
 * - Zero artificial checklist icons, progress meters, or duplicate card grids
 */
export function CapabilitiesSection({ className = '' }: CapabilitiesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleLineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !sectionRef.current) return;

      const titleLine = titleLineRef.current;
      const copy = copyRef.current;

      if (prefersReducedMotion) {
        gsap.set([titleLine, copy], {
          opacity: 1,
          y: 0,
          yPercent: 0,
          clearProps: 'all',
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current || sectionRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        },
      });

      if (titleLine) {
        tl.fromTo(
          titleLine,
          { yPercent: 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
          },
          0
        );
      }

      if (copy) {
        tl.fromTo(
          copy,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
          },
          0.2
        );
      }
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-label="Skills & Technical Ecosystem"
      className={`relative min-h-screen border-t border-white/[0.08] bg-[#0E0E10] py-20 sm:py-28 px-6 sm:px-8 overflow-hidden ${className}`}
    >
      <div className="relative max-w-7xl mx-auto w-full space-y-16 sm:space-y-20">
        {/* ================================================================= */}
        {/* A. Editorial Section Introduction                                 */}
        {/* ================================================================= */}
        <div ref={headerRef} className="space-y-8">
          {/* Top Eyebrow Tag */}
          <div className="flex items-center justify-between font-mono text-xs text-[#71717A] border-b border-white/[0.06] pb-4">
            <div className="inline-flex items-center gap-2 text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
              <span>Skills &amp; Technical Stack</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <span>7 Verified Domains</span>
            </div>
          </div>

          {/* Masked Headline Reveal */}
          <div className="max-w-4xl space-y-4">
            <div className="overflow-hidden py-1">
              <h2
                ref={titleLineRef}
                className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F4F5] tracking-tight leading-[1.05] will-change-transform font-normal"
              >
                Technical Range &amp; Architecture.
              </h2>
            </div>

            <div ref={copyRef} className="max-w-2xl space-y-2">
              <p className="font-sans text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
                A grounded view of the tools, runtimes, and frameworks I use to build systems across
                web applications, backend services, and intelligent software.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* B. Technical Ecosystem & Landscape (7 Domains)                    */}
        {/* ================================================================= */}
        <TechnologyStack />
      </div>
    </section>
  );
}

export default CapabilitiesSection;
