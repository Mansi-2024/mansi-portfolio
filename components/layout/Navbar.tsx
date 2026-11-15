'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0C]/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded py-1 px-1.5"
          aria-label="Mansi Konde Homepage"
        >
          <span className="font-mono text-xs font-semibold text-[#F4F4F5] tracking-wider uppercase">
            {profileData.wordmark}
          </span>
          <span className="text-sm font-medium text-[#F4F4F5] tracking-tight group-hover:text-white transition-colors">
            {profileData.name}
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#71717A] ml-1.5 uppercase tracking-wider">
            {profileData.role}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {profileData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center font-mono text-xs text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] rounded px-1.5 py-0.5"
            >
              <span>{item.label}</span>
            </Link>
          ))}
          <a
            href="https://github.com/Mansi-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-white/10 hover:border-white/40 bg-white/[0.03] text-xs font-mono text-[#F4F4F5] hover:text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
            aria-label="View GitHub profile (opens in new tab)"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#71717A]" aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-white/10 text-[#A1A1AA] hover:text-[#F4F4F5] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#0B0B0C] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {profileData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-white/[0.06] font-mono text-sm text-[#A1A1AA] hover:text-[#F4F4F5]"
              >
                <span>{item.label}</span>
              </Link>
            ))}
            <a
              href="https://github.com/Mansi-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 text-sm font-mono text-[#F4F4F5]"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
