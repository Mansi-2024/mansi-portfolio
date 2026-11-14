'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { capabilityGroups } from '@/data/capabilities';
import { CapabilityGroupCard } from './CapabilityGroup';
import { TechnologyStack } from './TechnologyStack';
import { EngineeringApproach } from './EngineeringApproach';

interface CapabilitiesSectionProps {
  className?: string;
}

/**
 * CapabilitiesSection Component — Editorial Redesign
 *
 * Implements:
 * - 4 Concrete Capability Groups grounded in project evidence
 * - Categorized Technology Index across 5 domains
 * - 4 Practical Engineering Principles
 * - Warm layered charcoal canvas and Newsreader serif typography
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
      className={`relative min-h-screen border-t border-white/[0.08] bg-[#0E0E10] py-20 sm:py-28 px-6 sm:px-8 overflow-hidden ${className}`}
    >
      <div className="relative max-w-7xl mx-auto w-full space-y-24 sm:space-y-28">
        {/* ================================================================= */}
        {/* A. Editorial Section Introduction                                 */}
        {/* ================================================================= */}
        <div ref={headerRef} className="space-y-8">
          {/* Top Eyebrow Tag */}
          <div className="flex items-center justify-between font-mono text-xs text-[#71717A] border-b border-white/[0.06] pb-4">
            <div className="inline-flex items-center gap-2 text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
              <span>03 / Capabilities</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <span>Core Disciplines &amp; Skills</span>
            </div>
          </div>

          {/* Masked Headline Reveal */}
          <div className="max-w-4xl space-y-4">
            <div className="overflow-hidden py-1">
              <h2
                ref={titleLineRef}
                className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F4F4F5] tracking-tight leading-[1.05] will-change-transform font-normal"
              >
                Capabilities &amp; Architecture.
              </h2>
            </div>

            <div ref={copyRef} className="max-w-2xl space-y-2">
              <p className="font-sans text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
                Core areas of technical practice across full-stack engineering, interactive 3D, intelligent systems, and developer tooling.
              </p>
            </div>
          </div>
        </div>

        {/* ================================================================= */}
        {/* B. Capabilities: 4 Core Groups                                   */}
        {/* ================================================================= */}
        <div className="space-y-8" aria-label="Core Engineering Capabilities">
          <div className="flex items-center justify-between font-mono text-xs text-[#71717A] border-b border-white/[0.06] pb-3">
            <span className="text-[#F4F4F5] font-semibold uppercase tracking-wider">
              Technical Disciplines
            </span>
            <span>4 Focus Areas</span>
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
