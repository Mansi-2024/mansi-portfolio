'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { projectsData } from '@/data/projects';
import { ProjectPanel } from './ProjectPanel';

interface HorizontalProjectsProps {
  className?: string;
}

/**
 * HorizontalProjects Component — Cinematic Spatial Project Gallery
 *
 * Implements:
 * - GSAP ScrollTrigger pinning and natural horizontal scrub on desktop & laptop
 * - Subtle 3D perspective (rotateY ±2.5deg) and restrained opacity depth (~85% resting)
 * - Complete removal of bottom control bar, progress bar, and duplicate index strips
 * - Smooth natural scroll navigation via mouse wheel, trackpad, and touch
 * - Touch-friendly horizontal overflow snap gallery for mobile & tablet
 * - Zero artificial telemetry or decorative // separators
 * - Complete reduced-motion accessibility bypass
 */
export function HorizontalProjects({ className = '' }: HorizontalProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  const total = projectsData.length;

  // Viewport detection for responsive layout switching
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
      ScrollTrigger.getById('projects-horizontal-pin')?.kill();

      const section = sectionRef.current;
      const track = trackRef.current;

      const getScrollAmount = () => {
        return Math.max(0, track.scrollWidth - window.innerWidth + 96);
      };

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          id: 'projects-horizontal-pin',
          trigger: section,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1.2, // Smooth catch-up synchronized with Lenis
          start: 'top top',
          end: () => `+=${Math.round(getScrollAmount() * 1.2 + 480)}`,
          invalidateOnRefresh: true,
          onUpdate: () => {
            // Apply cinematic spatial 3D perspective to panels during scrub
            const panels = track.querySelectorAll('.project-panel-item');
            const viewportCenter = window.innerWidth / 2;

            panels.forEach((p) => {
              const el = p as HTMLElement;
              const rect = el.getBoundingClientRect();
              const panelCenter = rect.left + rect.width / 2;
              const distFromCenter = (panelCenter - viewportCenter) / window.innerWidth;

              // Subtle rotation bounded strictly to ±2.5 degrees
              const rotateY = Math.max(-2.5, Math.min(2.5, -distFromCenter * 4.5));
              // Inactive panels soften slightly to ~85% opacity (never 40% to preserve readability)
              const opacity = Math.max(0.85, 1 - Math.abs(distFromCenter) * 0.15);

              el.style.transform = `perspective(1200px) rotateY(${rotateY.toFixed(2)}deg)`;
              el.style.opacity = opacity.toFixed(3);
            });
          },
        },
      });

      return () => {
        // Reset panel transforms and kill trigger
        const panels = track.querySelectorAll('.project-panel-item');
        panels.forEach((p) => {
          const el = p as HTMLElement;
          el.style.transform = '';
          el.style.opacity = '';
        });
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    },
    { scope: sectionRef, dependencies: [isMobile, prefersReducedMotion, mounted] }
  );

  return (
    <section
      ref={sectionRef}
      id="projects-gallery"
      aria-label="Projects Gallery"
      className={`relative bg-[#0B0B0C] flex items-center overflow-hidden ${
        isMobile || prefersReducedMotion ? 'py-8' : 'min-h-[85vh] lg:min-h-screen'
      } ${className}`}
    >
      {/* Main Gallery Stage: Desktop Pinned Track vs Mobile Touch Snap */}
      <div
        ref={viewportRef}
        className={`relative z-10 w-full flex items-center ${
          isMobile || prefersReducedMotion
            ? 'overflow-x-auto snap-x snap-mandatory py-4 px-6 sm:px-8 scrollbar-none'
            : 'h-[85vh] max-h-[720px] overflow-hidden'
        }`}
      >
        <div
          ref={trackRef}
          style={
            !isMobile && !prefersReducedMotion
              ? {
                  paddingLeft: 'max(2rem, calc((100% - 80rem) / 2))',
                }
              : undefined
          }
          className={`flex items-center gap-6 sm:gap-8 lg:gap-10 ${
            isMobile || prefersReducedMotion
              ? 'flex-nowrap'
              : 'flex-nowrap pr-20 will-change-transform'
          }`}
        >
          {projectsData.map((project, idx) => (
            <div
              key={project.id}
              className={`project-panel-item transition-opacity duration-200 ${
                isMobile || prefersReducedMotion ? 'snap-center' : ''
              }`}
            >
              <ProjectPanel project={project} index={idx} total={total} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HorizontalProjects;
