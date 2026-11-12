import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { PageTransition } from '@/components/transitions/PageTransition';
import { ArrowUpRight, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <PageTransition className="w-full flex flex-col">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Transitional Section Fold (Scroll Destination for Verification) */}
      <section
        id="next-preview"
        aria-label="Upcoming Section Transition"
        className="relative min-h-[40vh] border-t border-[#1c1c24] bg-[#0a0a0e] py-20 px-6 sm:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs text-[#71717a]">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#00f0ff]">
              <Compass className="w-4 h-4" />
              <span className="uppercase tracking-widest font-semibold">
                Phase 2 Hero Verified
              </span>
            </div>
            <p className="text-sm font-sans text-[#a1a1aa] font-light max-w-md">
              Cinematic hero architecture established. Ready for upcoming 3D identity badge and horizontal work gallery phases.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
            <div className="px-3 py-1.5 rounded border border-[#2a2a36] bg-[#08080a] text-[#f4f4f7]">
              Lenis + GSAP ScrollTrigger Active
            </div>
            <a
              href="https://github.com/Mansi-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#00f0ff] hover:underline"
            >
              <span>GitHub Verified Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
