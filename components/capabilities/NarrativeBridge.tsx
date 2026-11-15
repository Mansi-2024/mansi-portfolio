'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface NarrativeBridgeProps {
  className?: string;
}

export function NarrativeBridge({ className = '' }: NarrativeBridgeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === 'undefined' || !containerRef.current || prefersReducedMotion) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
        },
      });

      if (lineRef.current) {
        tl.fromTo(
          lineRef.current,
          { scaleY: 0, opacity: 0 },
          { scaleY: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
        );
      }

      if (textRef.current) {
        tl.fromTo(
          textRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.3'
        );
      }
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`relative py-12 sm:py-16 flex flex-col items-center justify-center text-center ${className}`}
    >
      {/* Vertical Hairline Connecting Accent */}
      <div
        ref={lineRef}
        className="w-[1px] h-12 bg-gradient-to-b from-white/20 via-white/10 to-transparent mb-6 origin-top"
      />

      {/* Editorial Perspective Shift */}
      <div ref={textRef} className="max-w-2xl px-6 space-y-2">
        <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#E4E4E7] italic font-normal tracking-tight leading-relaxed">
          &ldquo;Tools provide capability. Engineering discipline determines whether software actually holds up under real conditions.&rdquo;
        </blockquote>
        <p className="font-sans text-xs sm:text-sm text-[#71717A] tracking-normal font-normal">
          From the technologies I use &rarr; to how I approach architecture, data flow, and verification.
        </p>
      </div>

      {/* Subtle Return Accent */}
      <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/10 to-white/20 mt-6" />
    </div>
  );
}

export default NarrativeBridge;
