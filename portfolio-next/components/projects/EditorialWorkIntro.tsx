'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface EditorialWorkIntroProps {
  className?: string;
}

/**
 * EditorialWorkIntro Component — Editorial Redesign
 *
 * Provides a typographic, deliberate introduction to the 6 authentic case studies:
 * - High-contrast Newsreader serif headline
 * - Generous whitespace and architectural hairline divider
 * - Eliminates generic neon badges and decorative HUD icons
 */
export function EditorialWorkIntro({ className = '' }: EditorialWorkIntroProps) {
  const introRef = useRef<HTMLDivElement>(null);
  const titleLineRef = useRef<HTMLHeadingElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !introRef.current) return;

      const titleLine = titleLineRef.current;
      const copy = copyRef.current;
      const divider = dividerRef.current;

      if (prefersReducedMotion) {
        gsap.set([titleLine, copy, divider], {
          opacity: 1,
          y: 0,
          yPercent: 0,
          scaleX: 1,
          clearProps: 'all',
        });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introRef.current,
          start: 'top 75%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
        },
      });

      // Masked title upward reveal
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

      // Supporting copy fade-in
      if (copy) {
        tl.fromTo(
          copy,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          0.2
        );
      }

      // Editorial divider line expansion
      if (divider) {
        tl.fromTo(
          divider,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 1.0,
            ease: 'power2.inOut',
          },
          0.35
        );
      }
    },
    { scope: introRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={introRef}
      id="selected-work"
      aria-label="Selected Work Introduction"
      className={`relative min-h-[42vh] sm:min-h-[50vh] flex flex-col justify-center border-t border-white/[0.08] bg-[#0B0B0C] px-6 sm:px-8 py-20 sm:py-28 overflow-hidden ${className}`}
    >
      <div className="relative max-w-7xl mx-auto w-full flex flex-col justify-between space-y-10 sm:space-y-12">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717A]">
          <div className="inline-flex items-center gap-2 text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
            <span>02 // ARCHITECTURAL CASE STUDIES</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px]">
            <span>6 AUTHENTIC PROJECTS</span>
            <span className="text-white/20">•</span>
            <span className="text-[#F4F4F5]">EDITORIAL MAGAZINE PRESENTATION</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="space-y-4">
          <div className="overflow-hidden py-1">
            <h2
              ref={titleLineRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F4F4F5] tracking-tight leading-[1.05] will-change-transform font-normal"
            >
              Selected Work.
            </h2>
          </div>

          <div ref={copyRef} className="max-w-2xl space-y-3 pt-2">
            <p className="font-serif italic text-xl sm:text-2xl text-[#E4E4E7] leading-snug">
              &ldquo;I follow the question. Then I build the answer.&rdquo;
            </p>
            <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
              A curated collection of systems, experiments, and verifiable software architectures.
              Each case study documents real problem discovery, structural decisions, and working implementations—without synthetic metrics or decorative filler.
            </p>
          </div>
        </div>

        {/* Expanding Editorial Divider Rule */}
        <div
          ref={dividerRef}
          className="w-full h-px bg-white/10 origin-left"
        />
      </div>
    </section>
  );
}

export default EditorialWorkIntro;
