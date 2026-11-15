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
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !introRef.current) return;

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
    },
    { scope: introRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={introRef}
      id="projects"
      aria-label="Projects Introduction"
      className={`relative flex flex-col justify-center border-t border-white/[0.08] bg-[#0B0B0C] px-6 sm:px-8 pt-16 sm:pt-20 pb-4 sm:pb-6 overflow-hidden ${className}`}
    >
      <div className="relative max-w-7xl mx-auto w-full flex flex-col justify-between space-y-4 sm:space-y-6">
        {/* Top Eyebrow Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717A]">
          <div className="inline-flex items-center gap-2 text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
            <span>Projects</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="space-y-3">
          <div className="overflow-hidden py-1">
            <h2
              ref={titleLineRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F4F4F5] tracking-tight leading-[1.08] will-change-transform font-normal"
            >
              Projects.
            </h2>
          </div>

          <div ref={copyRef} className="max-w-2xl pt-1">
            <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
              Software projects across full-stack development, applied AI, security verification, and interactive systems—built from repository code to working prototypes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditorialWorkIntro;
