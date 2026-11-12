import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { portfolioData } from '../data/portfolio';
import { InquiryDiagram } from '../components/InquiryDiagram';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

gsap.registerPlugin(useGSAP);

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.7 } });

      if (headlineRef.current) {
        tl.from(headlineRef.current, {
          y: 20,
          duration: 0.8,
        });
      }

      if (visualRef.current) {
        tl.from(
          visualRef.current,
          {
            x: 15,
            duration: 0.9,
          },
          '-=0.4'
        );
      }
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      aria-label="Hero Section"
      className="relative min-h-[92vh] pt-24 sm:pt-36 pb-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-between overflow-x-hidden"
    >
      {/* 1. Top Editorial Masthead Indicator */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 mb-6 border-b border-border-plum/70 font-mono text-[11px] sm:text-xs text-ash-mauve">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-dusty-rose shrink-0" aria-hidden="true" />
          <span className="tracking-widest uppercase text-warm-ivory font-medium">
            {portfolioData.edition}
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden md:inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-soft-lavender" />
            <span className="text-ash-mauve/90">Curiosity-Led Engineering</span>
          </span>
          <span className="inline-flex items-center gap-2 text-dusty-rose bg-aubergine/60 px-2.5 sm:px-3 py-1 rounded-full border border-border-plum/80 text-[10px] sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-dusty-rose animate-pulse" />
            <span>{portfolioData.status}</span>
          </span>
        </div>
      </div>

      {/* 2. Main Asymmetrical Split Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto py-4">
        {/* Left Column: Oversized Editorial Type & Narrative (Cols 1-7) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
          {/* Kicker label */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs text-ash-mauve uppercase tracking-widest mb-4 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-dusty-rose shrink-0" aria-hidden="true" />
            <span>{portfolioData.name} — {portfolioData.positioning}</span>
          </div>

          {/* Core Expressive Headline — Fluid responsive typography */}
          <h1
            ref={headlineRef}
            className="font-serif text-[2.15rem] leading-[1.1] sm:text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-warm-ivory break-words w-full"
          >
            <span className="block">
              {portfolioData.taglinePart1}{' '}
              <span className="italic text-dusty-rose font-normal decoration-dusty-rose/40 underline decoration-1 underline-offset-4 sm:underline-offset-8">
                question.
              </span>
            </span>
            <span className="block mt-2 sm:mt-3 text-warm-ivory/95">
              {portfolioData.taglinePart2}{' '}
              <span className="italic text-dusty-rose font-normal">
                answer.
              </span>
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="font-sans text-base sm:text-lg lg:text-xl text-ash-mauve leading-relaxed max-w-xl mt-6 sm:mt-8 font-normal">
            {portfolioData.supportingIntro}
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 mt-8 sm:mt-10 pt-2 w-full sm:w-auto">
            {/* Primary Action */}
            <a
              href="#work"
              onClick={(e) => handleSmoothScroll(e, '#work')}
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full border border-dusty-rose/50 bg-aubergine hover:bg-raised-plum text-warm-ivory text-xs sm:text-sm font-mono tracking-wider uppercase transition-all duration-200 group shadow-lg shadow-midnight-plum/60 hover:border-dusty-rose text-center"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 text-dusty-rose group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>

            {/* Secondary Action */}
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="inline-flex items-center justify-center gap-2 text-sm font-sans text-ash-mauve hover:text-warm-ivory tracking-wide transition-colors py-2 group underline decoration-border-plum hover:decoration-dusty-rose underline-offset-4 text-center"
            >
              <span>Learn About Me</span>
              <ArrowUpRight className="w-4 h-4 text-ash-mauve group-hover:text-dusty-rose group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>
          </div>

          {/* Technical Metadata Spec Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-8 sm:mt-10 pt-6 border-t border-border-plum/40 text-[10px] sm:text-[11px] font-mono text-ash-mauve/80 w-full">
            <span className="px-2.5 py-1 rounded border border-border-plum/60 bg-aubergine/40">
              Interactive Systems
            </span>
            <span className="px-2.5 py-1 rounded border border-border-plum/60 bg-aubergine/40">
              Digital Craft
            </span>
            <span className="px-2.5 py-1 rounded border border-border-plum/60 bg-aubergine/40">
              Creative Architecture
            </span>
          </div>
        </div>

        {/* Right Column: Visual Inquiry & Specimen Composition (Cols 8-12) */}
        <div ref={visualRef} className="lg:col-span-5 w-full mt-4 lg:mt-0">
          <InquiryDiagram />
        </div>
      </div>

      {/* 3. Bottom Scroll Indicator & Colophon Bar */}
      <div className="pt-6 sm:pt-8 mt-6 border-t border-border-plum/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-ash-mauve">
        <a
          href="#work"
          onClick={(e) => handleSmoothScroll(e, '#work')}
          className="group inline-flex items-center gap-3 text-ash-mauve hover:text-warm-ivory transition-colors"
        >
          <div className="w-5 h-8 rounded-full border border-border-plum group-hover:border-dusty-rose flex items-start justify-center p-1 transition-colors">
            <div className="w-1 h-2 rounded-full bg-dusty-rose animate-bounce" />
          </div>
          <span className="text-[10px] sm:text-[11px] tracking-widest uppercase">
            Scroll to explore archive
          </span>
        </a>

        <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-ash-mauve/70">
          <span>MK-2026 // EDITION 01</span>
          <span>·</span>
          <span>DARK EDITORIAL</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
