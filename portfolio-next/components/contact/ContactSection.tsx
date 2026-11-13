'use client';

import React, { useRef } from 'react';
import { ContactLinks } from './ContactLinks';
import { ClosingStatement } from './ClosingStatement';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { gsap } from '@/lib/gsap';

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
      className="relative w-full border-t border-white/[0.08] bg-[#0B0B0C] py-24 px-6 sm:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-16 border-b border-white/[0.06] font-mono text-xs text-[#71717A]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[#38BDF8] font-bold">04</span>
            <span className="text-white/20">/</span>
            <span className="uppercase tracking-widest text-[#F4F4F5] font-semibold">
              Contact &amp; Dialogue
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
            </span>
            <span className="text-[#34D399] tracking-wider uppercase text-[11px] font-medium">
              Inquiries Active • Available for Build 2026
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
              <div className="inline-flex items-center gap-2 pb-1 border-b border-white/10 font-mono text-xs text-[#A1A1AA] uppercase tracking-widest">
                <span>Direct Dialogue</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F4F4F5] tracking-tight leading-[1.08] font-normal">
                Have a question worth building?
              </h2>
            </div>

            <p className="font-sans text-lg sm:text-xl text-[#D4D4D8] leading-relaxed font-normal">
              Have an idea, an engineering problem to solve, or an opportunity to build together? Let&apos;s start a conversation.
            </p>

            <div className="p-5 rounded-xl border border-white/[0.07] bg-[#121214] space-y-2 font-sans">
              <span className="font-mono text-xs uppercase tracking-wider text-[#38BDF8] block font-semibold">
                Collaboration Scope
              </span>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Open to creative engineering roles, systems architecture research, and select collaborative software commissions in 2026.
              </p>
            </div>

            <p className="font-sans text-sm text-[#71717A] leading-relaxed">
              Operating at the convergence of software architecture, intelligent verification systems, and interactive 3D computing.
            </p>

            {/* Quick Coordinates Badge */}
            <div className="grid grid-cols-2 gap-4 pt-2 font-mono text-xs text-[#71717A]">
              <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#121214]">
                <div className="text-[10px] text-[#A1A1AA] uppercase mb-1">
                  Role &amp; Focus
                </div>
                <span className="text-[#F4F4F5] font-medium text-xs">Creative Engineer</span>
              </div>

              <div className="p-3.5 rounded-lg border border-white/[0.06] bg-[#121214]">
                <div className="text-[10px] text-[#A1A1AA] uppercase mb-1">
                  Location &amp; Zone
                </div>
                <span className="text-[#F4F4F5] font-medium text-xs">Mumbai, India (IST UTC+5:30)</span>
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
