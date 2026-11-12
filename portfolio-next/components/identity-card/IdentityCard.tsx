'use client';

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { IdentityCardFallback } from './IdentityCardFallback';
import { ShieldCheck, Move, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';

// Dynamically import 3D Canvas Scene with SSR disabled to prevent WebGL server-side errors
const IdentityCardScene = dynamic(
  () => import('./IdentityCardScene').then((mod) => mod.IdentityCardScene),
  {
    ssr: false,
    loading: () => <IdentityCardFallback />,
  }
);

/**
 * IdentityCard Component — Interactive 3D Hanging Identity Card Section
 *
 * Implements:
 * - GSAP ScrollTrigger coordinated entrance: Drops down from top of viewport as user enters the section
 * - Interactive 3D canvas with spring & pendulum physics
 * - Subtle ambient idle sway & mouse parallax
 * - Touch-friendly drag on mobile devices
 * - Graceful fallback for SSR and devices with reduced-motion preferences
 */
export function IdentityCard() {
  const containerRef = useRef<HTMLElement>(null);
  const cardStageRef = useRef<HTMLDivElement>(null);
  const infoColRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Screen size detection
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // GSAP ScrollTrigger Integration for the drop-in entrance
  useGSAP(
    () => {
      if (typeof window === 'undefined' || !containerRef.current) return;

      const container = containerRef.current;
      const infoCol = infoColRef.current;

      // ScrollTrigger to compute scrollProgress (0 to 1) for the 3D card drop
      const trigger = ScrollTrigger.create({
        trigger: container,
        start: 'top 85%',
        end: 'top 20%',
        scrub: 0.6,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });

      // Info Column staggered entrance
      if (infoCol && !prefersReducedMotion) {
        gsap.fromTo(
          infoCol.querySelectorAll('.fade-in-item'),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 65%',
            },
          }
        );
      }

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="identity"
      aria-label="3D Identity Card Specimen"
      className="relative min-h-[85vh] sm:min-h-screen border-t border-[#1c1c24] bg-[#09090d] py-16 sm:py-24 px-6 sm:px-8 overflow-hidden"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#1c1c24_1px,transparent_1px),linear-gradient(to_bottom,#1c1c24_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Left Column: 3D Stage (Suspended Lanyard & Identity Badge) */}
        <div
          ref={cardStageRef}
          className="w-full lg:w-7/12 h-[520px] sm:h-[600px] lg:h-[660px] relative flex items-center justify-center"
        >
          {isMounted ? (
            <IdentityCardScene
              scrollProgress={scrollProgress}
              prefersReducedMotion={prefersReducedMotion}
              isMobile={isMobile}
            />
          ) : (
            <IdentityCardFallback />
          )}

          {/* Interactive Cue Badge */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#a1a1aa] px-3.5 py-1.5 rounded-full border border-[#2a2a36] bg-[#0c0c12]/90 backdrop-blur-md shadow-lg">
              <Move className="w-3.5 h-3.5 text-[#00f0ff] animate-pulse" />
              <span>DRAG TO INSPECT // 3D HARMONIC SUSPENSION</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Credentials & Engineering Colophon */}
        <div ref={infoColRef} className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
          {/* Section Colophon Tag */}
          <div className="fade-in-item inline-flex items-center gap-2 self-start font-mono text-xs text-[#00f0ff] uppercase tracking-widest px-3 py-1 rounded-full border border-[#2a2a36] bg-[#0e0e14]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>02 // IDENTITY SPECIMEN</span>
          </div>

          {/* Main Section Heading */}
          <div className="fade-in-item space-y-2">
            <h2 className="font-sans font-bold text-3xl sm:text-4xl text-[#f4f4f7] tracking-tight leading-tight">
              Physical Artifact, <br />
              <span className="text-[#00f0ff] font-serif italic font-normal">
                Digital Precision.
              </span>
            </h2>
            <p className="font-sans text-base text-[#a1a1aa] leading-relaxed font-light">
              An interactive 3D identity badge suspended from a realistic lanyard. Simulated with
              React Three Fiber, custom damped harmonic oscillator mathematics, and procedural canvas
              textures—zero bulky WASM physics dependencies.
            </p>
          </div>

          {/* Technical Specifications Specimen Block */}
          <div className="fade-in-item rounded-xl border border-[#2a2a36] bg-[#0e0e14] p-5 space-y-3 font-mono text-xs text-[#71717a]">
            <div className="flex items-center justify-between pb-2 border-b border-[#1c1c24]">
              <span className="text-[#f4f4f7] font-semibold">SPECIMEN SPECIFICATION</span>
              <span className="text-[#00f0ff]">ACTIVE 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <div>
                <span className="block text-[#52525b]">HOLDER:</span>
                <span className="text-[#f4f4f7] font-sans font-medium">{profileData.name}</span>
              </div>
              <div>
                <span className="block text-[#52525b]">ROLE:</span>
                <span className="text-[#00f0ff] font-semibold">{profileData.role}</span>
              </div>
              <div>
                <span className="block text-[#52525b]">PROPORTIONS:</span>
                <span className="text-[#a1a1aa]">2.4 × 3.6 × 0.04 (Ratio 1:1.5)</span>
              </div>
              <div>
                <span className="block text-[#52525b]">SIMULATION:</span>
                <span className="text-[#a1a1aa]">Damped Spring / Pendulum</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="fade-in-item flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/Mansi-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#2a2a36] bg-[#14141e] hover:bg-[#1a1a28] hover:border-[#00f0ff]/50 font-mono text-xs text-[#f4f4f7] transition-all group"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>Verify on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a] group-hover:text-[#00f0ff] transition-colors" />
            </a>

            <div className="flex items-center gap-2 text-xs font-mono text-[#71717a]">
              <Sparkles className="w-3.5 h-3.5 text-[#00f0ff]" />
              <span>60–120 FPS Native RAF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IdentityCard;
