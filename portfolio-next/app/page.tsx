import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { IdentityCard } from '@/components/identity-card/IdentityCard';
import { EditorialWorkIntro } from '@/components/projects/EditorialWorkIntro';
import { HorizontalProjects } from '@/components/projects/HorizontalProjects';
import { CapabilitiesSection } from '@/components/capabilities/CapabilitiesSection';
import { PageTransition } from '@/components/transitions/PageTransition';
import { ArrowUpRight, Compass } from 'lucide-react';

export default function HomePage() {
  return (
    <PageTransition className="w-full flex flex-col">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Interactive 3D Hanging Identity Card & Lanyard */}
      <IdentityCard />

      {/* 3. Editorial Transition: Selected Work Intro */}
      <EditorialWorkIntro />

      {/* 4. Horizontal Pinned Selected Work Gallery (6 Projects) */}
      <HorizontalProjects />

      {/* 5. Capabilities, Engineering Approach & Technical Stack */}
      <CapabilitiesSection />

      {/* 6. Transitional Section Fold (Scroll Destination for Verification) */}
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
                Phase 5 Capabilities Verified
              </span>
            </div>
            <p className="text-sm font-sans text-[#a1a1aa] font-light max-w-md">
              Capabilities, technical stack and engineering principles established. Ready for final contact and deployment phase.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs font-mono">
            <div className="px-3 py-1.5 rounded border border-[#2a2a36] bg-[#08080a] text-[#f4f4f7]">
              Next.js 16 + React 19 + GSAP
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
