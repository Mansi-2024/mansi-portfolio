'use client';

import React, { useRef } from 'react';
import { profileData } from '@/data/profile';
import { ArrowUp } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

export function ClosingStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  React.useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !textRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          y: 28,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative pt-24 pb-16 border-t border-white/[0.08] mt-24"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        {/* Typographic Statement */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717A]">
            <span className="uppercase tracking-widest text-[#A1A1AA]">
              Closing Statement
            </span>
          </div>

          <h2
            ref={textRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#F4F4F5] tracking-tight leading-[1.08] font-normal"
          >
            Full-stack engineer building <br className="hidden sm:inline" />
            software that feels effortless.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#A1A1AA] font-normal max-w-xl leading-relaxed pt-2">
            {profileData.supportingIntro}
          </p>
        </div>

        {/* Return to beginning / Back to top action */}
        <div className="shrink-0 flex items-center">
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 hover:border-white/40 bg-white/[0.02] text-xs font-mono text-[#F4F4F5] hover:text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
            aria-label="Return to top of page"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClosingStatement;
