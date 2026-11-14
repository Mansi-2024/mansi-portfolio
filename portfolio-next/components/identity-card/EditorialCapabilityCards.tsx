'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CapabilityCardItem {
  id: string;
  title: string;
  description: React.ReactNode;
  gridSpanClass?: string;
}

const capabilityCards: CapabilityCardItem[] = [
  {
    id: 'full-stack',
    title: 'Full-Stack Development & Architecture',
    description: (
      <>
        Building responsive, structured web applications using{' '}
        <strong className="text-[#E4E4E7] font-medium">React, Next.js, and TypeScript</strong>,
        connected to reliable backend services, databases, and RESTful APIs with an emphasis on
        maintainability and clarity.
      </>
    ),
  },
  {
    id: 'applied-ai',
    title: 'Applied AI & Practical Intelligence',
    description: (
      <>
        Exploring practical implementations of{' '}
        <strong className="text-[#E4E4E7] font-medium">machine learning in software</strong>—from
        computer vision pipelines for agricultural diagnostics to automated verification workflows
        that make applications more helpful and reliable.
      </>
    ),
  },
  {
    id: 'systems-craft',
    title: 'Systems Thinking & Engineering Craft',
    description: (
      <>
        Focusing on writing{' '}
        <strong className="text-[#E4E4E7] font-medium">clean, well-tested code</strong>,
        understanding how data flows across the stack, and debugging issues methodically. Also
        exploring interactive 3D in the browser as an additional technical curiosity.
      </>
    ),
    gridSpanClass: 'md:col-span-2 lg:col-span-1',
  },
];

/**
 * EditorialCapabilityCards Component — Stage 3.6
 *
 * Implements a balanced horizontal 3-card layout:
 * - Isolated GSAP entrance reveal on outer wrappers (ScrollTrigger 'top 85%', once: true, y: 20, stagger: 0.12, duration: 0.6s)
 * - Isolated CSS hover interactions on inner cards (-translate-y-1, border brightening, 300ms transition)
 * - Responsive triage: 3 columns on desktop (>=1024px), 2 columns with centered span on tablet (768px), stacked on mobile (390px)
 * - Restrained editorial aesthetic: warm charcoal (#121214), Newsreader headings, zero generic SaaS badges or icons
 * - Full accessibility: cards remain visible by default if JS/animations fail or prefers-reduced-motion is true
 */
export function EditorialCapabilityCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !containerRef.current) return;
      if (prefersReducedMotion) return;

      const wrappers = containerRef.current.querySelectorAll('.capability-card-wrapper');
      if (!wrappers.length) return;

      gsap.fromTo(
        wrappers,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      aria-label="Core Engineering Capabilities"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
    >
      {capabilityCards.map((card) => (
        <div
          key={card.id}
          className={`capability-card-wrapper h-full flex flex-col ${card.gridSpanClass || ''}`}
        >
          {/* Inner card: handles CSS hover transform and styling isolated from parent GSAP transform */}
          <div className="capability-card-inner group relative h-full flex flex-col justify-start rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/20 hover:bg-[#151518] hover:shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h3 className="font-serif text-xl sm:text-2xl text-[#F4F4F5] font-normal tracking-tight leading-snug">
              {card.title}
            </h3>
            <p className="font-sans text-sm sm:text-[0.9375rem] text-[#A1A1AA] leading-relaxed mt-3 sm:mt-4">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditorialCapabilityCards;
