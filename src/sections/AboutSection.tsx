import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Compass, Lightbulb, Terminal, FileDown, AlertCircle, User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [resumeNotice, setResumeNotice] = useState<boolean>(false);

  return (
    <section
      id="about"
      aria-label="About Mansi Konde"
      className="relative pt-24 pb-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-border-plum"
    >
      {/* Top Section Index Notch */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-plum/40 font-mono text-xs text-ash-mauve">
        <div className="flex items-center gap-2">
          <span className="text-dusty-rose font-bold">02</span>
          <span className="text-border-plum">/</span>
          <span className="tracking-widest uppercase text-warm-ivory">About</span>
        </div>
        <span className="text-ash-mauve/70 font-mono hidden sm:inline">
          CREATIVE ENGINEER PHILOSOPHY
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading, Large Quote, Editorial Portrait & Resume */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-6xl font-normal text-warm-ivory tracking-tight leading-[1.1]">
              Engineering grounded in curiosity,{' '}
              <span className="italic text-dusty-rose font-normal">executed with intention.</span>
            </h2>

            <blockquote className="mt-8 border-l-2 border-dusty-rose pl-6 py-2">
              <p className="font-serif text-2xl text-warm-ivory/95 italic font-light">
                &ldquo;{portfolioData.tagline}&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Editorial Portrait Frame Placeholder */}
          <div className="rounded-lg border border-border-plum bg-aubergine/40 p-4 sm:p-5">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-border-plum/50 font-mono text-[10px] text-ash-mauve">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose" />
                <span className="text-warm-ivory uppercase tracking-wider">PORTRAIT // SPECIMEN FRAME</span>
              </div>
              <span className="text-dusty-rose uppercase tracking-widest">3:4 EDITORIAL CROP</span>
            </div>

            <div className="relative aspect-[3/4] max-w-[280px] mx-auto rounded border border-border-plum/70 bg-midnight-plum/80 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              {/* Subtle Architectural Coordinate Watermarks */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#403344_1px,transparent_1px),linear-gradient(to_bottom,#403344_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Corner Tick Marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-dusty-rose/60" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-dusty-rose/60" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-dusty-rose/60" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-dusty-rose/60" />

              <div className="relative z-10 w-16 h-16 rounded-full bg-raised-plum/80 border border-dusty-rose/40 flex items-center justify-center text-dusty-rose mb-4 shadow-inner">
                <User className="w-8 h-8 opacity-80" />
              </div>

              <div className="relative z-10 font-mono text-[11px] text-warm-ivory font-medium tracking-wide">
                Pending Owner Photograph Asset
              </div>
              <div className="relative z-10 font-mono text-[10px] text-ash-mauve/80 mt-1 max-w-[220px]">
                Editorial portrait frame reserved for owner submission (3:4 ratio)
              </div>
            </div>

            {/* Resume Download Action with Pending Notice */}
            <div className="mt-4 pt-4 border-t border-border-plum/40">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setResumeNotice(!resumeNotice)}
                  className="group inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-md border border-dusty-rose/60 bg-raised-plum/50 hover:bg-raised-plum text-warm-ivory font-mono text-xs tracking-wider transition-all"
                  aria-label="Download Curriculum Vitae (Asset pending owner upload)"
                >
                  <FileDown className="w-4 h-4 text-dusty-rose group-hover:scale-110 transition-transform" />
                  <span>Download Curriculum Vitae</span>
                </button>
                <span className="font-mono text-[10px] uppercase text-dusty-rose bg-dusty-rose/10 px-2 py-1 rounded border border-dusty-rose/30 text-center">
                  [ Pending Owner PDF Asset Upload ]
                </span>
              </div>

              {resumeNotice && (
                <div className="mt-3 p-3 rounded border border-dusty-rose/40 bg-midnight-plum/90 font-mono text-xs text-ash-mauve space-y-1">
                  <div className="flex items-center gap-2 text-dusty-rose font-medium text-[11px]">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>Curriculum Vitae Asset Status</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-warm-ivory/90 pl-5">
                    The PDF document is pending owner upload prior to live competition deployment. Place verified file at <code className="text-dusty-rose">/public/mansi-konde-resume.pdf</code>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Principles */}
        <div className="lg:col-span-6 space-y-6 text-ash-mauve font-sans text-base sm:text-lg leading-relaxed pt-2">
          <p>
            I operate at the intersection of technical rigor and expressive visual design. Rather than treating code as merely a delivery mechanism for mockups, I treat the browser as a responsive, interactive medium where every transition, token, and layout choice communicates purpose.
          </p>
          <p>
            Whether architecting component design systems, orchestrating complex timeline animations, or refining semantic markup for accessibility, my goal is always to build digital artifacts that feel deeply considered and human.
          </p>

          {/* Three Core Tenets */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded border border-border-plum bg-aubergine/30">
              <Compass className="w-4 h-4 text-dusty-rose mb-2" />
              <div className="text-warm-ivory font-medium">Inquiry First</div>
              <div className="text-ash-mauve text-[11px] mt-1">Starting with the core question before writing code.</div>
            </div>
            <div className="p-4 rounded border border-border-plum bg-aubergine/30">
              <Terminal className="w-4 h-4 text-soft-lavender mb-2" />
              <div className="text-warm-ivory font-medium">Systems Craft</div>
              <div className="text-ash-mauve text-[11px] mt-1">Robust TypeScript architectures and token harmony.</div>
            </div>
            <div className="p-4 rounded border border-border-plum bg-aubergine/30">
              <Lightbulb className="w-4 h-4 text-dusty-rose mb-2" />
              <div className="text-warm-ivory font-medium">Deliberate Motion</div>
              <div className="text-ash-mauve text-[11px] mt-1">Purposeful animations that clarify change.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
