'use client';

import React, { useRef } from 'react';
import { ContactLinks } from './ContactLinks';
import { ClosingStatement } from './ClosingStatement';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Code2, Compass, Sparkles } from 'lucide-react';

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  React.useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-label="Contact and Collaboration"
      className="relative w-full border-t border-[#1c1c24] bg-[#08080a] py-24 px-6 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-[#1c1c24] font-mono text-xs text-[#71717a]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#00f0ff] font-bold">04</span>
            <span>/</span>
            <span className="uppercase tracking-widest text-[#f4f4f7] font-semibold">
              Contact &amp; Collaboration
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]" />
            </span>
            <span className="text-[#34d399] tracking-wider uppercase text-[11px] font-medium">
              Communication Active • Inquiries Welcome
            </span>
          </div>
        </div>

        {/* Two-Column Editorial Grid */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Column: Narrative Headline & Context */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2a2a36] bg-[#0d0e13] font-mono text-[11px] text-[#00f0ff]">
                <Sparkles className="w-3 h-3 text-[#00f0ff]" />
                <span>Initiate Conversation</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-[#f4f4f7] leading-[1.08]">
                Have a question{' '}
                <span className="text-[#00f0ff] font-serif italic font-normal">
                  worth building?
                </span>
              </h2>
            </div>

            <p className="font-sans text-lg sm:text-xl text-[#e6e8ee] leading-relaxed font-light">
              Have an idea, a problem to solve, or an interesting opportunity? Let&apos;s start a conversation.
            </p>

            <div className="p-5 rounded-xl border border-[#2a2a36] bg-[#0d0e13]/80 space-y-3 font-sans">
              <span className="font-mono text-xs uppercase tracking-wider text-[#00f0ff] block font-semibold">
                Collaboration Context
              </span>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                Open to interesting projects, technical collaborations and opportunities to learn and build.
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#71717a] leading-relaxed">
              I operate at the convergence of software architecture, intelligent systems, and interactive creative technology. Whether exploring deterministic verification systems, multi-agent pipelines, or real-time 3D environments, I&apos;m drawn to challenging problems where deep curiosity leads to dependable software.
            </p>

            {/* Quick Coordinates Badge */}
            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-[#71717a]">
              <div className="p-3 rounded-lg border border-[#1c1c24] bg-[#08080a]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#00f0ff] uppercase mb-1">
                  <Compass className="w-3 h-3" />
                  <span>Role &amp; Focus</span>
                </div>
                <span className="text-[#f4f4f7] font-semibold text-xs">Creative Engineer</span>
              </div>

              <div className="p-3 rounded-lg border border-[#1c1c24] bg-[#08080a]">
                <div className="flex items-center gap-1.5 text-[10px] text-[#00f0ff] uppercase mb-1">
                  <Code2 className="w-3 h-3" />
                  <span>Location</span>
                </div>
                <span className="text-[#f4f4f7] font-semibold text-xs">India (IST UTC+5:30)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Action Hub */}
          <div className="lg:col-span-6 w-full">
            <ContactLinks />
          </div>
        </div>

        {/* 3. Closing Typographic Statement */}
        <ClosingStatement />
      </div>
    </section>
  );
}

export default ContactSection;
