'use client';

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { IdentityCardFallback } from './IdentityCardFallback';
import { Move, ArrowUpRight, FileText } from 'lucide-react';
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
 * IdentityCard Component — Editorial Redesign
 *
 * Serves as both the About section and the Interactive 3D Credential Stage:
 * - Suspended 3D card drops and tilts with spring physics
 * - Editorial perspective detailing Mansi's engineering philosophy
 * - 3 Core Architectural Tenets grounded in real systems practice
 * - Verified links to GitHub and Resume
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
      id="about"
      aria-label="About Mansi Konde and 3D Identity Credential"
      className="relative min-h-[85vh] sm:min-h-screen border-t border-white/[0.08] bg-[#0E0E10] py-16 sm:py-24 px-6 sm:px-8 overflow-hidden"
    >
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
            <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-[#A1A1AA] px-3.5 py-1.5 rounded-full border border-white/10 bg-[#121214]/90 backdrop-blur-md shadow-lg">
              <Move className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
              <span>TACTILE 3D CREDENTIAL // DRAG OR TILT</span>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Perspective & Core Values */}
        <div ref={infoColRef} className="w-full lg:w-5/12 flex flex-col justify-center space-y-6">
          {/* Eyebrow */}
          <div className="fade-in-item inline-flex items-center gap-2 self-start font-mono text-xs text-[#A1A1AA] uppercase tracking-widest pb-1 border-b border-white/10">
            <span>01 // PERSPECTIVE & BACKGROUND</span>
          </div>

          {/* Editorial Headline */}
          <div className="fade-in-item space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F4F4F5] tracking-tight leading-snug font-normal">
              &ldquo;Engineering is not merely the assembly of components; it is the pursuit of truth through working software.&rdquo;
            </h2>
            <p className="font-sans text-base text-[#A1A1AA] leading-relaxed font-normal">
              Mansi Konde is a creative engineer and technologist based in Mumbai, operating at the convergence of systems architecture, spatial computing, and deterministic verification.
            </p>
          </div>

          {/* 3 Core Architectural Tenets */}
          <div className="fade-in-item space-y-3 pt-2">
            <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#121214]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8]">
                <span>[01]</span>
                <span className="font-medium text-[#F4F4F5]">Determinism Over Heuristics</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-1 pl-6 leading-relaxed">
                Prioritizing strict state machines and authoritative registry cross-checks over unverified AI probabilistic guessing.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#121214]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8]">
                <span>[02]</span>
                <span className="font-medium text-[#F4F4F5]">Tactile Human-Interface Craft</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-1 pl-6 leading-relaxed">
                Designing interfaces with physical weight, harmonic spring damping, and intuitive spatial interaction standards.
              </p>
            </div>

            <div className="p-3.5 rounded-lg border border-white/[0.07] bg-[#121214]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#38BDF8]">
                <span>[03]</span>
                <span className="font-medium text-[#F4F4F5]">Evidence-Based Verification</span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] mt-1 pl-6 leading-relaxed">
                Cryptographic receipt protocols (RFC 8785), AST code parsing, and isolated automated test runners.
              </p>
            </div>
          </div>

          {/* Action Links */}
          <div className="fade-in-item flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://github.com/Mansi-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 hover:border-white/50 bg-white/[0.03] font-mono text-xs text-[#F4F4F5] hover:text-white transition-all group"
            >
              <span>Verify on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white transition-colors" />
            </a>

            <a
              href="/mansi-konde-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-white/30 bg-transparent font-mono text-xs text-[#A1A1AA] hover:text-[#F4F4F5] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#71717A]" />
              <span>Curated Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IdentityCard;
