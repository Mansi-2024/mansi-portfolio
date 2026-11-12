import React from 'react';
import { ArrowUpRight, FolderGit2, Sparkles } from 'lucide-react';

export const SelectedWorkIntro: React.FC = () => {
  return (
    <section
      id="work"
      aria-label="Selected Work Introduction"
      className="relative pt-24 pb-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-border-plum"
    >
      {/* Top Editorial Index Notch */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-plum/40 font-mono text-xs text-ash-mauve">
        <div className="flex items-center gap-2">
          <span className="text-dusty-rose font-bold">01</span>
          <span className="text-border-plum">/</span>
          <span className="tracking-widest uppercase text-warm-ivory">Selected Work</span>
        </div>
        <span className="text-ash-mauve/70 font-mono hidden sm:inline">
          INDEX: 2024 — 2026
        </span>
      </div>

      {/* Main Editorial Headline & Transition Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
        <div className="lg:col-span-8">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-warm-ivory tracking-tight leading-[1.08]">
            Selected inquiries turned into{' '}
            <span className="italic text-dusty-rose font-normal">interactive realities.</span>
          </h2>
        </div>

        <div className="lg:col-span-4 lg:pt-3">
          <p className="font-sans text-base sm:text-lg text-ash-mauve leading-relaxed">
            A curated collection of technical explorations, digital systems, and creative engineering artifacts crafted with precision and curiosity.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-dusty-rose">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Full Case Studies Launching in Upcoming Phase</span>
          </div>
        </div>
      </div>

      {/* Upcoming Showcase Preview Frames (Editorial Placeholders) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Preview Frame 1 */}
        <div className="group rounded-lg border border-border-plum bg-aubergine/40 p-6 flex flex-col justify-between min-h-[220px] hover:border-dusty-rose/60 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] text-ash-mauve pb-3 border-b border-border-plum/50">
              <span className="uppercase text-dusty-rose">Inquiry 01</span>
              <span>Interactive Architecture</span>
            </div>
            <h3 className="font-serif text-2xl text-warm-ivory mt-4 group-hover:text-dusty-rose transition-colors">
              Spatial Interfaces &amp; Motion
            </h3>
            <p className="font-sans text-xs text-ash-mauve/90 mt-2 leading-relaxed">
              Explorations in fluid viewport layouts, scroll choreography, and tactile DOM responses.
            </p>
          </div>
          <div className="pt-4 flex items-center justify-between font-mono text-[10px] text-ash-mauve border-t border-border-plum/30">
            <span>[ IN CURATION ]</span>
            <FolderGit2 className="w-3.5 h-3.5 text-dusty-rose/70" />
          </div>
        </div>

        {/* Preview Frame 2 */}
        <div className="group rounded-lg border border-border-plum bg-aubergine/40 p-6 flex flex-col justify-between min-h-[220px] hover:border-dusty-rose/60 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] text-ash-mauve pb-3 border-b border-border-plum/50">
              <span className="uppercase text-dusty-rose">Inquiry 02</span>
              <span>Design Systems</span>
            </div>
            <h3 className="font-serif text-2xl text-warm-ivory mt-4 group-hover:text-dusty-rose transition-colors">
              Token Architectures &amp; Typographic Craft
            </h3>
            <p className="font-sans text-xs text-ash-mauve/90 mt-2 leading-relaxed">
              Systematic colour harmonies, responsive scales, and accessible component libraries.
            </p>
          </div>
          <div className="pt-4 flex items-center justify-between font-mono text-[10px] text-ash-mauve border-t border-border-plum/30">
            <span>[ IN CURATION ]</span>
            <FolderGit2 className="w-3.5 h-3.5 text-dusty-rose/70" />
          </div>
        </div>

        {/* Preview Frame 3 */}
        <div className="group rounded-lg border border-border-plum bg-aubergine/40 p-6 flex flex-col justify-between min-h-[220px] hover:border-dusty-rose/60 transition-all duration-300">
          <div>
            <div className="flex items-center justify-between font-mono text-[10px] text-ash-mauve pb-3 border-b border-border-plum/50">
              <span className="uppercase text-dusty-rose">Inquiry 03</span>
              <span>Creative Technology</span>
            </div>
            <h3 className="font-serif text-2xl text-warm-ivory mt-4 group-hover:text-dusty-rose transition-colors">
              Algorithmic Systems &amp; WebGL
            </h3>
            <p className="font-sans text-xs text-ash-mauve/90 mt-2 leading-relaxed">
              Investigating organic mathematical vectors, canvas simulations, and lightweight performance.
            </p>
          </div>
          <div className="pt-4 flex items-center justify-between font-mono text-[10px] text-ash-mauve border-t border-border-plum/30">
            <span>[ IN CURATION ]</span>
            <FolderGit2 className="w-3.5 h-3.5 text-dusty-rose/70" />
          </div>
        </div>
      </div>

      {/* Transition Callout Footer */}
      <div className="mt-12 p-6 rounded-lg border border-border-plum bg-raised-plum/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ash-mauve">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-soft-lavender" />
          <span>Curated project case studies and live interactive demonstrations will be unveiled in Phase 3.</span>
        </div>
        <a
          href="#about"
          className="inline-flex items-center gap-1.5 text-dusty-rose hover:text-warm-ivory transition-colors"
        >
          <span>Continue to About</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default SelectedWorkIntro;
