'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { profileData } from '@/data/profile';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08080a]/80 backdrop-blur-md border-b border-[#1c1c24]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded"
          aria-label="Mansi Konde Homepage"
        >
          <span className="font-mono text-xs font-semibold text-[#00f0ff] tracking-wider uppercase">
            {profileData.wordmark}
          </span>
          <span className="text-sm font-medium text-[#f4f4f7] tracking-tight group-hover:text-[#00f0ff] transition-colors">
            {profileData.name}
          </span>
          <span className="hidden sm:inline-block font-mono text-[10px] text-[#71717a] ml-1">
            // {profileData.role}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {profileData.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-1.5 font-mono text-xs text-[#a1a1aa] hover:text-[#f4f4f7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded px-1.5 py-0.5"
            >
              <span className="text-[10px] text-[#71717a] group-hover:text-[#00f0ff] transition-colors">
                {item.index}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
          <a
            href="https://github.com/Mansi-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#2a2a36] hover:border-[#00f0ff] bg-[#0e0e12] text-xs font-mono text-[#f4f4f7] hover:text-[#00f0ff] transition-all"
            aria-label="View GitHub profile (opens in new tab)"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#71717a]" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded border border-[#2a2a36] text-[#a1a1aa] hover:text-[#f4f4f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#1c1c24] bg-[#08080a] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {profileData.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 border-b border-[#1c1c24]/50 font-mono text-sm text-[#a1a1aa] hover:text-[#f4f4f7]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#71717a]">{item.index}</span>
              </Link>
            ))}
            <a
              href="https://github.com/Mansi-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 text-sm font-mono text-[#00f0ff]"
            >
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
