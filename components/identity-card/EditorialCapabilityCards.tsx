'use client';

import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface CapabilityCardItem {
  id: string;
  index: string;
  title: string;
  description: React.ReactNode;
  gridSpanClass?: string;
}

const capabilityCards: CapabilityCardItem[] = [
  {
    id: 'full-stack',
    index: '01',
    title: 'Full-Stack Development & Architecture',
    description: (
      <>
        Building responsive, structured web applications using{' '}
        <strong className="text-[#F4F4F5] font-medium">React, Next.js, and TypeScript</strong>,
        connected to reliable backend services, databases, and RESTful APIs with an emphasis on
        maintainability and clarity.
      </>
    ),
  },
  {
    id: 'applied-ai',
    index: '02',
    title: 'Applied AI & Practical Intelligence',
    description: (
      <>
        Exploring practical implementations of{' '}
        <strong className="text-[#F4F4F5] font-medium">machine learning in software</strong>—from
        computer vision pipelines for agricultural diagnostics to automated verification workflows
        that make applications more helpful and reliable.
      </>
    ),
  },
  {
    id: 'systems-craft',
    index: '03',
    title: 'Systems Thinking & Engineering Craft',
    description: (
      <>
        Focusing on writing{' '}
        <strong className="text-[#F4F4F5] font-medium">clean, well-tested code</strong>,
        understanding how data flows across the stack, and debugging issues methodically. Also
        exploring interactive 3D in the browser as an additional technical curiosity.
      </>
    ),
    gridSpanClass: 'md:col-span-2 lg:col-span-1',
  },
];

interface CapabilityCardProps {
  card: CapabilityCardItem;
}

function CapabilityCard({ card }: CapabilityCardProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  return (
    <div
      className={`capability-card-wrapper h-full flex flex-col ${card.gridSpanClass || ''}`}
    >
      {/* Inner card: isolated CSS hover transform and styling */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="capability-card-inner group relative h-full flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-white/20 hover:bg-[#151518] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] overflow-hidden"
      >
        {/* Subtle Top Edge Architectural Highlight */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.14] to-transparent pointer-events-none group-hover:via-white/30 transition-all duration-500" />

        {/* Dynamic Specular Sheen Following Mouse Proximity */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(circle 260px at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.05), transparent 70%)`,
          }}
          aria-hidden="true"
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col justify-start">


          <h3 className="font-serif text-xl sm:text-2xl text-[#F4F4F5] font-normal tracking-tight leading-snug pt-1">
            {card.title}
          </h3>

          <p className="font-sans text-sm sm:text-[0.9375rem] text-[#A1A1AA] leading-relaxed mt-3 sm:mt-4">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/**
 * EditorialCapabilityCards Component — Refined Editorial Architecture
 *
 * Implements a balanced horizontal 3-card layout:
 * - Preserves the three approved cards and exact approved text
 * - Isolated GSAP entrance reveal on outer wrappers
 * - Isolated CSS hover interactions on inner cards with interactive specular sheen
 * - Responsive triage: 3 columns on desktop, 2 columns on tablet, 1 column on mobile
 * - Restrained editorial aesthetic with Newsreader headings and warm charcoal tones
 * - Full accessibility: cards remain visible by default if JS/animations fail
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
          duration: 0.65,
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
        <CapabilityCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default EditorialCapabilityCards;
