'use client';

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { IdentityCardFallback } from './IdentityCardFallback';
import { Move, ArrowUpRight, FileText } from 'lucide-react';
import { profileData } from '@/data/profile';
import { EditorialCapabilityCards } from './EditorialCapabilityCards';

// Dynamically import 3D Canvas Scene with SSR disabled to prevent WebGL server-side errors
const IdentityCardScene = dynamic(
  () => import('./IdentityCardScene').then((mod) => mod.IdentityCardScene),
  {
    ssr: false,
    loading: () => <IdentityCardFallback />,
  }
);

/**
 * IdentityCard Component — Stage 3.5 Editorial Redesign
 *
 * Repositions Mansi Konde as an aspiring Software Developer:
 * - Anchored top editorial headline spanning full section width
 * - Balanced 5/12 3D stage with spring-drop physics & interactive tilt cue
 * - Generous 7/12 editorial narrative with zero artificial card boxes
 * - Focus areas: Full-Stack Development, Applied AI, Systems & Code Quality, Placement Readiness
 * - Action links to GitHub profile and Resume
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

  // GSAP ScrollTrigger Integration
  useGSAP(
    () => {
      if (typeof window === 'undefined' || !containerRef.current) return;

      const container = containerRef.current;

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

      // Staggered reveal for editorial content
      if (container && !prefersReducedMotion) {
        gsap.fromTo(
          container.querySelectorAll('.fade-in-item'),
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 70%',
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
      aria-label="About Mansi Konde and Interactive 3D Identity Object"
      className="relative min-h-[85vh] sm:min-h-screen border-t border-white/[0.08] bg-[#0E0E10] py-20 sm:py-28 px-6 sm:px-8 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="fade-in-item flex flex-col space-y-4 pb-8 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 self-start font-mono text-xs text-[#A1A1AA] uppercase tracking-wider pb-1 border-b border-white/10">
            <span>02 / About</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F4F4F5] tracking-tight leading-[1.1] font-normal max-w-4xl">
            Building practical software and understanding systems from the ground up.
          </h2>
        </div>

        {/* Two-Column Balanced Composition */}
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-16">
          {/* Left Column: 3D Stage (Suspended Lanyard & Identity Badge) */}
          <div
            ref={cardStageRef}
            className="w-full lg:w-5/12 h-[460px] sm:h-[500px] lg:h-[520px] relative flex items-center justify-center shrink-0"
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
                <span>INTERACTIVE 3D // DRAG OR TILT</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Perspective & Core Narrative */}
          <div ref={infoColRef} className="w-full lg:w-7/12 flex flex-col justify-center space-y-8 lg:pl-4">
            {/* Core Narrative */}
            <div className="fade-in-item space-y-5">
              <p className="font-sans text-lg sm:text-xl text-[#F4F4F5] leading-relaxed font-normal">
                I&apos;m an engineering student and software developer who enjoys turning ideas into working applications. I work across frontend and backend development, explore AI-powered solutions, and learn by building projects that solve practical problems.
              </p>
              <p className="font-sans text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
                From designing application architecture to implementing features, connecting APIs, and debugging issues, I enjoy understanding the entire development process rather than focusing on just one part of it.
              </p>
            </div>

            {/* Action Links */}
            <div className="fade-in-item flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://github.com/Mansi-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-white/50 bg-white/[0.04] hover:bg-white/[0.08] font-mono text-xs text-[#F4F4F5] hover:text-white transition-all group"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white transition-colors" />
              </a>

              <a
                href="/mansi-konde-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-white/30 bg-transparent font-mono text-xs text-[#A1A1AA] hover:text-[#F4F4F5] transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-[#71717A]" />
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Lower Row: Horizontal Editorial Capability Cards */}
        <div className="pt-8 sm:pt-12 border-t border-white/[0.08]">
          <EditorialCapabilityCards />
        </div>
      </div>
    </section>
  );
}

export default IdentityCard;
