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
            <span className="text-[#A1A1AA] font-mono">04</span>
            <span className="text-white/20">/</span>
            <span className="uppercase tracking-widest text-[#F4F4F5]">
              Contact
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#A1A1AA] text-xs font-mono">
            <span>Open to opportunities</span>
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
                <span>Get in Touch</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F4F4F5] tracking-tight leading-[1.08] font-normal">
                Have a question worth building?
              </h2>
            </div>

            <p className="font-sans text-lg sm:text-xl text-[#D4D4D8] leading-relaxed font-normal">
              Have an idea, an engineering problem to solve, or an opportunity to build together? Let&apos;s start a conversation.
            </p>

            <div className="p-5 rounded-xl border border-white/[0.07] bg-[#121214] space-y-2 font-sans">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A1A1AA] block font-semibold">
                Opportunities
              </span>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Open to full-stack engineering roles, internships, and collaborative software projects.
              </p>
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
