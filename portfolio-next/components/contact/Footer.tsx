'use client';

import React, { useState, useEffect } from 'react';
import { profileData } from '@/data/profile';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function GithubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }
  };

  const githubLink = profileData.socials.find((s) => s.platform.toLowerCase() === 'github');

  return (
    <footer
      aria-label="Site Footer"
      className="w-full border-t border-[#1c1c24] bg-[#060608] py-14 px-6 sm:px-8 text-[#71717a] font-mono text-xs select-none"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-10 border-b border-[#1c1c24]/80">
          {/* Col 1: Identity & Positioning */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-sans font-bold text-lg text-[#f4f4f7] tracking-tight">
                {profileData.name}
              </span>
              <span className="text-[#00f0ff] font-mono text-xs">// {profileData.role}</span>
            </div>
            <p className="font-sans text-xs text-[#a1a1aa] max-w-sm font-light leading-relaxed">
              &ldquo;{profileData.tagline}&rdquo;
            </p>
            <div className="text-[11px] text-[#71717a] pt-1">
              {profileData.edition}
            </div>
          </div>

          {/* Col 2: Navigation & Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            {/* Quick Navigation */}
            <nav aria-label="Footer Navigation" className="flex items-center gap-5 text-[11px]">
              <a
                href="#hero"
                className="hover:text-[#00f0ff] transition-colors focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1"
              >
                Top
              </a>
              <a
                href="#about"
                className="hover:text-[#00f0ff] transition-colors focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1"
              >
                About
              </a>
              <a
                href="#work"
                className="hover:text-[#00f0ff] transition-colors focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1"
              >
                Work
              </a>
              <a
                href="#capabilities"
                className="hover:text-[#00f0ff] transition-colors focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1"
              >
                Capabilities
              </a>
              <a
                href="#contact"
                className="hover:text-[#00f0ff] transition-colors focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1"
              >
                Contact
              </a>
            </nav>

            {/* Verified GitHub Link */}
            <a
              href={githubLink?.url || 'https://github.com/Mansi-2024'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#2a2a36] bg-[#0d0e13] hover:border-[#00f0ff]/50 text-[#f4f4f7] hover:text-[#00f0ff] text-[11px] transition-colors focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
              aria-label="Mansi Konde GitHub Profile (opens in new tab)"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#71717a]" />
            </a>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={handleScrollToTop}
              className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2a2a36] bg-[#0d0e13] hover:border-[#00f0ff]/50 text-[#f4f4f7] text-[11px] transition-colors focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#00f0ff] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Colophon & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#71717a]">
          <div className="flex items-center gap-2">
            <span>© {currentYear} Mansi Konde. All rights reserved.</span>
            <span>•</span>
            <span className="text-[#a1a1aa]">Designed and built with curiosity.</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-[#52525b]">
            <span>Next.js 16 + React 19 + GSAP</span>
            <span>•</span>
            <span>Tailwind CSS 4</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
