'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { capabilityGroups } from '@/data/capabilities';
import { CapabilityGroupCard } from './CapabilityGroup';
import { TechnologyStack } from './TechnologyStack';
import { EngineeringApproach } from './EngineeringApproach';
import { Wrench, Sparkles } from 'lucide-react';

interface CapabilitiesSectionProps {
  className?: string;
}

/**
 * CapabilitiesSection Component — What I work with, Technology Stack & Engineering Approach
 *
 * Implements:
 * - Editorial Section Intro with masked typography reveals
 * - 4 Concrete Capability Groups grounded in project evidence
 * - Categorized Technology Index across 5 domains
 * - 4 Practical Engineering Principles
 * - Reduced-motion accessibility bypass
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
      id="capabilities"
      aria-label="Capabilities, Engineering Approach & Technical Stack"
      className={`relative min-h-screen border-t border-[#1c1c24] bg-[#08080c] py-20 sm:py-28 px-6 sm:px-8 overflow-hidden ${className}`}
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#1c1c24_1px,transparent_1px),linear-gradient(to_bottom,#1c1c24_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto w-full space-y-24 sm:space-y-32">
        {/* ================================================================= */}
        {/* A. Editorial Section Introduction                                 */}
        {/* ================================================================= */}
        <div ref={headerRef} className="space-y-8">
          {/* Top Colophon Tag */}
          <div className="flex items-center justify-between font-mono text-xs text-[#71717a] border-b border-[#1c1c24] pb-4">
            <div className="inline-flex items-center gap-2 text-[#00f0ff] uppercase tracking-widest px-3 py-1 rounded-full border border-[#2a2a36] bg-[#0e0e14]">
              <Wrench className="w-3.5 h-3.5" />
              <span>04 // CAPABILITIES &amp; ARCHITECTURE</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <span>CORE DISCIPLINES</span>
              <span>•</span>
              <span className="text-[#f4f4f7]">EVIDENCE-GROUNDED</span>
            </div>
          </div>

          {/* Masked Headline Reveal */}
          <div className="max-w-4xl space-y-4">
            <div className="overflow-hidden py-1">
              <h2
                ref={titleLineRef}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#f4f4f7] tracking-tight will-change-transform"
              >
                What I{' '}
                <span className="text-[#00f0ff] font-serif italic font-normal tracking-normal">
                  work with.
                </span>
              </h2>
            </div>

            <div ref={copyRef} className="max-w-2xl space-y-2">
              <p className="font-sans text-base sm:text-lg text-[#a1a1aa] leading-relaxed font-light">
                From engineering foundations to interactive experiences, I enjoy exploring how
                technology can turn ideas into useful things.
              </p>
              <p className="font-mono text-xs text-[#71717a] pt-1">
                Grounded in four areas of practice: software engineering, intelligent systems,
                creative technology, and rapid prototyping.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* B. Capabilities: 4 Core Groups                                   */}
        {/* ================================================================= */}
        <div className="space-y-8" aria-label="Core Engineering Capabilities">
          <div className="flex items-center justify-between font-mono text-xs text-[#71717a] border-b border-[#1c1c24] pb-3">
            <span className="text-[#f4f4f7] font-semibold uppercase tracking-wider">
              CAPABILITY DOMAINS
            </span>
            <span>4 CORE GROUPS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilityGroups.map((group) => (
              <CapabilityGroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>

        {/* ================================================================= */}
        {/* C. Verified Technology Stack                                      */}
        {/* ================================================================= */}
        <TechnologyStack />

        {/* ================================================================= */}
        {/* D. Engineering Approach / How I Think                             */}
        {/* ================================================================= */}
        <EngineeringApproach />
      </div>
    </section>
  );
}

export default CapabilitiesSection;
