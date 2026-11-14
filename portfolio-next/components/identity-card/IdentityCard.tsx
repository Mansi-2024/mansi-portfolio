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
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left Column: 3D Stage (Suspended Lanyard & Identity Badge) */}
          <div
            ref={cardStageRef}
            className="w-full lg:w-5/12 h-[500px] sm:h-[580px] lg:h-[640px] relative flex items-center justify-center lg:sticky lg:top-24 shrink-0"
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

          {/* Right Column: Grounded Perspective & Core Focus */}
          <div ref={infoColRef} className="w-full lg:w-7/12 flex flex-col justify-start space-y-8 lg:pl-4">
            {/* Core Narrative */}
            <div className="fade-in-item space-y-4">
              <p className="font-sans text-lg sm:text-xl text-[#F4F4F5] leading-relaxed font-normal">
                I&apos;m an engineering student and software developer who enjoys turning ideas into working applications. I work across frontend and backend development, explore AI-powered solutions, and learn by building projects that solve practical problems.
              </p>
              <p className="font-sans text-base text-[#A1A1AA] leading-relaxed font-normal">
                From designing application architecture to implementing features, connecting APIs, and debugging issues, I enjoy understanding the entire development process rather than focusing on just one part of it.
              </p>
            </div>

            {/* Structured Editorial Focus Areas (No Cards / Boxes) */}
            <div className="fade-in-item space-y-6 pt-2 border-t border-white/[0.08]">
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#F4F4F5] font-semibold">
                  Full-Stack Development &amp; Architecture
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  Building responsive, structured web applications using <strong className="text-[#E4E4E7] font-medium">React, Next.js, and TypeScript</strong>, connected to reliable backend services, databases, and RESTful APIs with an emphasis on maintainability and clarity.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#F4F4F5] font-semibold">
                  Applied AI &amp; Practical Intelligence
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  Exploring practical implementations of machine learning in software—from computer vision pipelines for agricultural diagnostics to automated verification workflows that make applications more helpful and reliable.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#F4F4F5] font-semibold">
                  Systems Thinking &amp; Engineering Craft
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  Focusing on writing clean, well-tested code, understanding how data flows across the stack, and debugging issues methodically. Also exploring interactive 3D in the browser as an additional technical curiosity.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-[#38BDF8] font-semibold">
                  Internship &amp; Placement Readiness
                </h3>
                <p className="font-sans text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  Actively preparing for <strong className="text-white font-medium">software developer internships and fresher opportunities</strong> where I can contribute to production systems, collaborate with engineering teams, and continue learning by shipping quality software.
                </p>
              </div>
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
      </div>
    </section>
  );
}

export default IdentityCard;
