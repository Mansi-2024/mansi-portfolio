'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { HeroTitle } from './HeroTitle';
import { HeroPortrait } from './HeroPortrait';
import { HeroScrollIndicator } from './HeroScrollIndicator';
import { HeroBackgroundLattice } from './HeroBackgroundLattice';

/**
 * Hero Component — Cinematic Architectural Developer Hero
 *
 * Implements:
 * - Fluid atmospheric spatial lattice with volumetric luminous glow & micro-particles
 * - Multi-plane scroll parallax scrub using ScrollTrigger & Lenis
 * - Editorial Newsreader serif headline with masked staggered line reveals
 * - Authentic, untouched portrait specimen framed in an architectural mount
 * - Seamless background cross-fade dissolve into the About section on scroll
 * - Zero artificial telemetry, fake coordinate labels, or synthetic status tags
 * - Prefers-reduced-motion accessibility bypass
 */
export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleWrapperRef = useRef<HTMLDivElement | null>(null);
  const portraitWrapperRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement | null>(null);
  const latticeWrapperRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !heroRef.current) return;

      const hero = heroRef.current;
      const titleLines = hero.querySelectorAll('.hero-title-line');
      const statusPill = hero.querySelector('.hero-status-pill');
      const supportingText = hero.querySelector('.hero-supporting-text');
      const actionRow = hero.querySelector('.hero-action-row');
      const portraitContainer = hero.querySelector('.hero-portrait-container');
      const scrollIndicator = scrollIndicatorRef.current;
      const lattice = latticeWrapperRef.current;

      // -----------------------------------------------------------------------
      // 1. Accessibility: Prefers-Reduced-Motion Immediate Visibility
      // -----------------------------------------------------------------------
      if (prefersReducedMotion) {
        gsap.set(
          [statusPill, titleLines, supportingText, actionRow, portraitContainer, scrollIndicator, lattice],
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
        delay: 0.1,
      });

      // Background lattice soft fade-in
      if (lattice) {
        entranceTl.fromTo(
          lattice,
          { opacity: 0 },
          { opacity: 1, duration: 1.2, ease: 'power2.out' },
          0
        );
      }

      // Editorial eyebrow status emergence
      if (statusPill) {
        entranceTl.fromTo(
          statusPill,
          { opacity: 0, y: -14 },
          { opacity: 1, y: 0, duration: 0.55 },
          0
        );
      }

      // Masked headline lines upward reveal
      if (titleLines.length > 0) {
        entranceTl.fromTo(
          titleLines,
          { yPercent: 112, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.95,
            stagger: 0.12,
            ease: 'power4.out',
          },
          0.08
        );
      }

      // Supporting body text fade-in
      if (supportingText) {
        entranceTl.fromTo(
          supportingText,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          0.32
        );
      }

      // Quiet action link emergence
      if (actionRow) {
        entranceTl.fromTo(
          actionRow,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.48
        );
      }

      // Portrait specimen frame entrance (layered with typography)
      if (portraitContainer) {
        entranceTl.fromTo(
          portraitContainer,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.0,
            ease: 'power3.out',
          },
          0.18
        );
      }

      // Scroll cue indicator
      if (scrollIndicator) {
        entranceTl.fromTo(
          scrollIndicator,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.65
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
            yPercent: -10,
            opacity: 0.85,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }

      // Portrait multi-plane parallax (moves with differential rate to create depth)
      if (portraitContainer) {
        scrollTl.to(
          portraitContainer,
          {
            yPercent: -18,
            scale: 1.01,
            duration: 1,
            ease: 'none',
          },
          0
        );
      }

      // Background lattice softly attenuates into About section threshold
      if (lattice) {
        scrollTl.to(
          lattice,
          {
            opacity: 0.15,
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
      className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-20 sm:pt-28 pb-10 sm:pb-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Atmospheric Architectural Field & Volumetric Luminous Glow */}
      <div ref={latticeWrapperRef} className="absolute inset-0 pointer-events-none">
        <HeroBackgroundLattice />
      </div>

      {/* Main Grid: Oversized Typography & Editorial Portrait */}
      <div className="my-auto py-6 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
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
