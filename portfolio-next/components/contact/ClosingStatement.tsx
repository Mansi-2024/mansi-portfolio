'use client';

import React, { useRef } from 'react';
import { ArrowUp, CornerDownRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, ScrollTrigger } from '@/lib/gsap';

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
      className="relative pt-24 pb-16 border-t border-[#1c1c24] mt-24"
    >
      {/* Corner specimen crosshairs matching hero editorial framing */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-[#2a2a36] font-mono text-[10px] select-none pointer-events-none"
      >
        +
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-[#2a2a36] font-mono text-[10px] select-none pointer-events-none"
      >
        +
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
        {/* Typographic Statement */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717a]">
            <CornerDownRight className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span className="uppercase tracking-widest text-[#00f0ff] font-semibold">
              Closing Statement
            </span>
            <span>//</span>
            <span>Folio Vol. 2026</span>
          </div>

          <h2
            ref={textRef}
            className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold tracking-tight text-[#f4f4f7] leading-[1.06]"
          >
            Still curious.{' '}
            <span className="text-[#00f0ff] font-serif italic font-normal block sm:inline">
              Still building.
            </span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#a1a1aa] font-light max-w-xl leading-relaxed pt-2">
            &ldquo;I follow the question. Then I build the answer.&rdquo;
          </p>
        </div>

        {/* Return to beginning / Back to top action */}
        <div className="shrink-0 flex items-center">
          <button
            type="button"
            onClick={handleScrollToTop}
            className="group inline-flex items-center gap-2.5 px-4 py-3 rounded-xl border border-[#2a2a36] bg-[#0d0e13] hover:bg-[#14151f] hover:border-[#00f0ff]/50 text-[#f4f4f7] text-xs font-mono transition-all shadow-lg hover:shadow-[#00f0ff]/5 focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            aria-label="Scroll back to top of page"
          >
            <span className="tracking-wider uppercase">Return to Beginning</span>
            <div className="w-6 h-6 rounded-md bg-[#181924] border border-[#2a2a36] flex items-center justify-center text-[#00f0ff] group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClosingStatement;
