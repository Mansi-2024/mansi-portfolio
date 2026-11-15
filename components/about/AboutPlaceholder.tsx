import React from 'react';
import { profileData } from '@/data/profile';
import { Compass, Cpu, FileDown, Terminal, User } from 'lucide-react';

export function AboutPlaceholder() {
  return (
    <section
      id="about"
      aria-label="About Mansi Konde"
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1c1c24]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#1c1c24] font-mono text-xs text-[#71717a]">
        <div className="flex items-center gap-2">
          <span className="text-[#00f0ff] font-bold">02</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[#f4f4f7]">About</span>
        </div>
        <span className="hidden sm:inline">CREATIVE ENGINEER PHILOSOPHY</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading, Quote, Asset Frame */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-5xl font-sans font-semibold text-[#f4f4f7] tracking-tight leading-[1.1]">
              Engineering grounded in curiosity,{' '}
              <span className="text-[#00f0ff] font-serif italic font-normal">executed with intention.</span>
            </h2>
            <blockquote className="mt-6 border-l-2 border-[#00f0ff] pl-6 py-2">
              <p className="font-serif text-xl sm:text-2xl text-[#f4f4f7] italic font-light">
                &ldquo;{profileData.tagline}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Reserved Portrait Specimen Frame */}
          <div className="rounded-xl border border-[#2a2a36] bg-[#0e0e12] p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1c1c24] font-mono text-[10px] text-[#71717a]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                <span className="text-[#f4f4f7] uppercase tracking-wider">PORTRAIT · SPECIMEN FRAME</span>
              </div>
              <span className="text-[#00f0ff] uppercase tracking-widest">3:4 EDITORIAL RATIO</span>
            </div>

            <div className="relative aspect-[3/4] max-w-[260px] mx-auto rounded border border-[#2a2a36] bg-[#08080a] flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#16161d] border border-[#2a2a36] flex items-center justify-center text-[#00f0ff] mb-4">
                <User className="w-8 h-8 opacity-70" />
              </div>
              <div className="font-mono text-xs text-[#f4f4f7] font-medium">
                Pending Owner Photograph
              </div>
              <div className="font-mono text-[10px] text-[#71717a] mt-1">
                Target: /public/assets/mansi-konde.jpg (3:4 ratio)
              </div>
            </div>

            {/* Resume Action */}
            <div className="mt-4 pt-4 border-t border-[#1c1c24] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#f4f4f7]">
                <FileDown className="w-4 h-4 text-[#00f0ff]" />
                <span>Curriculum Vitae</span>
              </div>
              <span className="font-mono text-[10px] uppercase text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded border border-[#00f0ff]/30 text-center">
                [ Pending Owner Upload ]
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Principles */}
        <div className="lg:col-span-6 space-y-6 text-[#a1a1aa] font-sans text-base sm:text-lg leading-relaxed font-light">
          <p>
            I operate at the intersection of technical rigor and expressive visual design. Rather than treating code as merely a delivery mechanism for mockups, I treat the browser as a responsive, interactive medium where every transition, token, and layout choice communicates purpose.
          </p>
          <p>
            Whether architecting component design systems, orchestrating complex timeline animations, or engineering deterministic verification backends, my goal is always to build digital artifacts that feel deeply considered, fast, and human.
          </p>

          {/* Three Core Tenets */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-lg border border-[#2a2a36] bg-[#0e0e12]">
              <Compass className="w-4 h-4 text-[#00f0ff] mb-2" />
              <div className="text-[#f4f4f7] font-medium">Inquiry First</div>
              <div className="text-[#71717a] text-[11px] mt-1">Starting with the core question before writing code.</div>
            </div>
            <div className="p-4 rounded-lg border border-[#2a2a36] bg-[#0e0e12]">
              <Terminal className="w-4 h-4 text-[#c6ff55] mb-2" />
              <div className="text-[#f4f4f7] font-medium">Systems Craft</div>
              <div className="text-[#71717a] text-[11px] mt-1">Robust TypeScript architectures and token harmony.</div>
            </div>
            <div className="p-4 rounded-lg border border-[#2a2a36] bg-[#0e0e12]">
              <Cpu className="w-4 h-4 text-[#00f0ff] mb-2" />
              <div className="text-[#f4f4f7] font-medium">Deliberate Motion</div>
              <div className="text-[#71717a] text-[11px] mt-1">Purposeful animations that clarify change.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPlaceholder;
