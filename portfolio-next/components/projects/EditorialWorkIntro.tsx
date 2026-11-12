'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Compass, Sparkles } from 'lucide-react';

interface EditorialWorkIntroProps {
  className?: string;
}

/**
 * EditorialWorkIntro Component — Visual Pause & Section Bridge
 *
 * Provides a typographic, deliberate introduction between the 3D identity card
 * and the horizontal selected work gallery.
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
      id="work-intro"
      aria-label="Selected Work Introduction"
      className={`relative min-h-[48vh] sm:min-h-[55vh] flex flex-col justify-center border-t border-[#1c1c24] bg-[#07070a] px-6 sm:px-8 py-20 sm:py-28 overflow-hidden ${className}`}
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[linear-gradient(to_right,#1c1c24_1px,transparent_1px),linear-gradient(to_bottom,#1c1c24_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative max-w-7xl mx-auto w-full flex flex-col justify-between space-y-10 sm:space-y-14">
        {/* Top Colophon Tag */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717a]">
          <div className="inline-flex items-center gap-2 text-[#00f0ff] uppercase tracking-widest px-3 py-1 rounded-full border border-[#2a2a36] bg-[#0e0e14]">
            <Compass className="w-3.5 h-3.5" />
            <span>03 // PORTFOLIO LINEUP</span>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-[11px]">
            <span>6 VERIFIED PROJECTS</span>
            <span>•</span>
            <span className="text-[#f4f4f7]">HORIZONTAL CINEMATIC SCRUB</span>
          </div>
        </div>

        {/* Main Editorial Headline */}
        <div className="space-y-4">
          <div className="overflow-hidden py-1">
            <h2
              ref={titleLineRef}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-bold text-[#f4f4f7] tracking-tight will-change-transform"
            >
              Selected{' '}
              <span className="text-[#00f0ff] font-serif italic font-normal tracking-normal">
                Work.
              </span>
            </h2>
          </div>

          <div ref={copyRef} className="max-w-2xl space-y-3 pt-2">
            <p className="font-serif italic text-xl sm:text-2xl text-[#d1d1d9] leading-snug">
              &ldquo;I follow the question. Then I build the answer.&rdquo;
            </p>
            <p className="font-sans text-sm sm:text-base text-[#a1a1aa] leading-relaxed font-light">
              A collection of experiments, systems and experiences shaped by curiosity and engineering.
              Each project addresses a specific technical friction—from deterministic verification to
              hazardous environment simulations.
            </p>
          </div>
        </div>

        {/* Expanding Editorial Divider Rule */}
        <div
          ref={dividerRef}
          className="w-full h-px bg-gradient-to-r from-[#00f0ff]/60 via-[#2a2a36] to-transparent origin-left"
        />
      </div>
    </section>
  );
}

export default EditorialWorkIntro;
