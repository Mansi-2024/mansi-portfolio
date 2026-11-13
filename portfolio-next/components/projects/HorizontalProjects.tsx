'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { projectsData } from '@/data/projects';
import { ProjectPanel } from './ProjectPanel';
import { ProjectProgress } from './ProjectProgress';

interface HorizontalProjectsProps {
  className?: string;
}

/**
 * HorizontalProjects Component — Cinematic Gallery
 *
 * Implements:
 * - GSAP ScrollTrigger pinning and horizontal scrub on desktop & laptop
 * - Natural Lenis ticker synchronization with invalidateOnRefresh
 * - Touch-friendly horizontal overflow snap gallery for mobile & tablet (avoiding pin-trapping)
 * - Complete reduced-motion accessibility bypass
 * - 6 authentic, verified project panels featuring authentic architectural diagrams
 */
export function HorizontalProjects({ className = '' }: HorizontalProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const total = projectsData.length;

  // Viewport detection
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      // Mobile & small tablet touch viewports (<= 768px)
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop Pinned Horizontal Scroll with GSAP ScrollTrigger
  useGSAP(
    () => {
      if (typeof window === 'undefined' || !sectionRef.current || !trackRef.current) return;
      if (isMobile || prefersReducedMotion) return;

      // Kill any previous instance before creating
      ScrollTrigger.getById('work-horizontal-pin')?.kill();

      const section = sectionRef.current;
      const track = trackRef.current;

      const getScrollAmount = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth + 120);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          id: 'work-horizontal-pin',
          trigger: section,
          pin: true,
          scrub: 1, // Smooth catch-up synchronized with Lenis
          start: 'top top',
          end: () => `+=${getScrollAmount() + 400}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
            const activeIdx = Math.min(
              total - 1,
              Math.max(0, Math.floor(self.progress * total * 0.99))
            );
            setCurrentIndex(activeIdx);
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [isMobile, prefersReducedMotion, mounted] }
  );

  // Manual step navigation for accessible buttons & keyboard
  const scrollToProject = useCallback(
    (targetIdx: number) => {
      const idx = Math.max(0, Math.min(total - 1, targetIdx));
      setCurrentIndex(idx);

      if (isMobile || prefersReducedMotion) {
        if (viewportRef.current) {
          const panels = viewportRef.current.querySelectorAll('article');
          const targetPanel = panels[idx] as HTMLElement | undefined;
          if (targetPanel) {
            targetPanel.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
          }
        }
      } else if (sectionRef.current) {
        // Desktop pinned scroll target
        const st = ScrollTrigger.getById('work-horizontal-pin');
        if (st) {
          const targetScroll = st.start + (st.end - st.start) * (idx / (total - 1));
          window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        }
      }
    },
    [isMobile, prefersReducedMotion, total]
  );

  const handlePrev = () => scrollToProject(currentIndex - 1);
  const handleNext = () => scrollToProject(currentIndex + 1);

  // Update mobile active index based on horizontal scroll
  const handleMobileScroll = () => {
    if (!viewportRef.current || !isMobile) return;
    const scrollLeft = viewportRef.current.scrollLeft;
    const maxScroll = viewportRef.current.scrollWidth - viewportRef.current.clientWidth;
    const prog = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setProgress(prog);
    const activeIdx = Math.min(total - 1, Math.round(prog * (total - 1)));
    setCurrentIndex(activeIdx);
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      aria-label="Selected Engineering Work Gallery"
      className={`relative bg-[#0B0B0C] border-t border-white/[0.08] flex flex-col justify-between overflow-hidden ${
        isMobile || prefersReducedMotion ? 'py-12' : 'min-h-screen'
      } ${className}`}
    >
      {/* Top Gallery Header Bar */}
      <div className="relative z-10 pt-6 px-6 sm:px-8 max-w-7xl mx-auto w-full flex items-center justify-between border-b border-white/[0.06] pb-4">
        <div className="font-mono text-xs text-[#A1A1AA] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" aria-hidden="true" />
          <span className="uppercase tracking-widest font-semibold text-[#F4F4F5]">
            SELECTED WORK ARCHIVE
          </span>
          <span className="text-[#71717A] hidden sm:inline">// 6 VERIFIED REPOSITORIES</span>
        </div>

        <div className="font-mono text-[11px] text-[#71717A]">
          <span>INDEX: 01 — 06</span>
        </div>
      </div>

      {/* Main Gallery Stage: Desktop Pinned Track vs Mobile Touch Snap */}
      <div
        ref={viewportRef}
        className={`relative z-10 w-full my-auto flex items-center ${
          isMobile || prefersReducedMotion
            ? 'overflow-x-auto snap-x snap-mandatory py-6 px-6 sm:px-8 scrollbar-none'
            : 'h-[72vh] overflow-hidden'
        }`}
        onScroll={isMobile ? handleMobileScroll : undefined}
      >
        <div
          ref={trackRef}
          className={`flex items-center gap-8 sm:gap-10 lg:gap-12 ${
            isMobile || prefersReducedMotion
              ? 'flex-nowrap'
              : 'flex-nowrap pl-6 sm:pl-12 pr-24 will-change-transform'
          }`}
        >
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={isMobile || prefersReducedMotion ? 'snap-center' : ''}
            >
              <ProjectPanel project={project} index={idx} total={total} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Progress & Navigation Controller */}
      <div className="relative z-10 border-t border-white/[0.08] bg-[#0B0B0C]/90 backdrop-blur-md">
        <ProjectProgress
          currentIndex={currentIndex}
          total={total}
          progress={progress}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}

export default HorizontalProjects;
