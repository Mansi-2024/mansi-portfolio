'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { HeroTitle } from './HeroTitle';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { HeroCanvasSequence } from './HeroCanvasSequence';

/**
 * Hero Component — Cinematic Creative Engineer Foundation
 *
 * Implements:
 * - Coordinated GSAP entrance animation with masked text reveals
 * - Multi-plane scroll parallax scrub using ScrollTrigger & Lenis
 * - Editorial specimen portrait frame integration
 * - Fluid clamp() responsive typography (360px to 1440px+)
 * - Prefers-reduced-motion accessibility bypass
 * - Inactive extensible canvas image sequence integration point
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleWrapperRef = useRef<HTMLDivElement | null>(null);
  const portraitWrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !heroRef.current) return;

      const hero = heroRef.current;
      const titleLines = hero.querySelectorAll('.hero-title-line');
      const statusPill = hero.querySelector('.hero-status-pill');
      const supportingText = hero.querySelector('.hero-supporting-text');
      const metaBadges = hero.querySelectorAll('.hero-meta-badges > div');
      const portraitContainer = hero.querySelector('.hero-portrait-container');
      const scrollIndicator = scrollIndicatorRef.current;

      // -----------------------------------------------------------------------
      // 1. Accessibility: Prefers-Reduced-Motion Immediate Visibility
      // -----------------------------------------------------------------------
      if (prefersReducedMotion) {
        gsap.set(
          [statusPill, titleLines, supportingText, metaBadges, portraitContainer, scrollIndicator],
          {
            opacity: 1,
            y: 0,
            yPercent: 0,
            scale: 1,
            clearProps: 'all',
          }
        );
        return;
      }

      // -----------------------------------------------------------------------
      // 2. Cinematic Entrance Timeline (On Page Mount)
      // -----------------------------------------------------------------------
      const entranceTl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      });

      // Status pill emergence
      if (statusPill) {
        entranceTl.fromTo(
          statusPill,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.55 },
          0
        );
      }

      // Masked title lines upward reveal
      if (titleLines.length > 0) {
        entranceTl.fromTo(
          titleLines,
          { yPercent: 115, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power4.out',
          },
          0.1
        );
      }

      // Supporting copy fade-in
      if (supportingText) {
        entranceTl.fromTo(
          supportingText,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.35
        );
      }

      // Portrait specimen frame entrance (layered with typography)
      if (portraitContainer) {
        entranceTl.fromTo(
          portraitContainer,
          { opacity: 0, y: 50, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.05,
            ease: 'power3.out',
          },
          0.2
        );
      }

      // Technical meta badges stagger
      if (metaBadges.length > 0) {
        entranceTl.fromTo(
          metaBadges,
          { opacity: 0, scale: 0.92, y: 10 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.06,
          },
          0.55
        );
      }

      // Scroll cue indicator
      if (scrollIndicator) {
        entranceTl.fromTo(
          scrollIndicator,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.7
        );
      }

      // -----------------------------------------------------------------------
      // 3. ScrollTrigger Parallax Scrub Interaction
      // -----------------------------------------------------------------------
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8, // Smooth catch-up synchronized with Lenis
          invalidateOnRefresh: true,
        },
      });

      // Quick fade out of the scroll indicator within first 15% scroll
      if (scrollIndicator) {
        scrollTl.to(
          scrollIndicator,
          {
            opacity: 0,
            y: 20,
            duration: 0.15,
            ease: 'power1.out',
          },
          0
        );
      }

      // Headline subtle depth drift
      if (titleWrapperRef.current) {
        scrollTl.to(
          titleWrapperRef.current,
          {
            yPercent: -12,
            opacity: 0.82,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }

      // Portrait multi-plane parallax (moves faster than text to create depth)
      if (portraitContainer) {
        scrollTl.to(
          portraitContainer,
          {
            yPercent: -22,
            scale: 1.02,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }
    },
    { scope: heroRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Cinematic Hero Introduction"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Extensible Canvas Sequence Integration Point (Inactive until 192 frames provided) */}
      <HeroCanvasSequence enabled={false} />

      {/* Main Grid: Oversized Typography & Editorial Portrait */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Oversized Hero Typography */}
        <div className="lg:col-span-7 z-10">
          <HeroTitle innerRef={titleWrapperRef} />
        </div>

        {/* Right Column: Editorial Portrait Specimen Frame */}
        <div className="lg:col-span-5 z-20 flex justify-center lg:justify-end">
          <HeroPortrait innerRef={portraitWrapperRef} />
        </div>
      </div>

      {/* Bottom Row: Minimal Animated Scroll Indicator */}
      <div className="flex items-center justify-between pt-6 border-t border-white/[0.08] font-mono text-xs text-[#71717A] z-10">
        <HeroScrollIndicator innerRef={scrollIndicatorRef} />
      </div>
    </section>
  );
}

export default Hero;
