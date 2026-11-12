import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Monitor scroll state for enhanced border presence
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key and trap body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-midnight-plum/95 backdrop-blur-md border-b border-border-plum shadow-lg shadow-midnight-plum/50 py-3.5'
            : 'bg-midnight-plum/80 backdrop-blur-sm border-b border-border-plum/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark & Tag */}
          <a
            href="#"
            onClick={(e) => handleSmoothScroll(e, '#root')}
            className="group flex items-baseline gap-3.5 focus-visible:outline-none"
            aria-label="Mansi Konde Homepage"
          >
            <span className="font-serif text-3xl sm:text-4xl tracking-tight text-warm-ivory group-hover:text-dusty-rose transition-colors duration-200">
              {portfolioData.wordmark}
            </span>
            <div className="hidden md:flex flex-col text-left">
              <span className="font-sans text-xs font-medium tracking-wide text-warm-ivory/90">
                {portfolioData.name}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-ash-mauve uppercase">
                {portfolioData.positioning}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary Navigation">
            {portfolioData.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="group flex items-center gap-1.5 font-sans text-sm tracking-wide text-ash-mauve hover:text-warm-ivory transition-colors duration-200 py-1"
              >
                <span className="font-mono text-[10px] text-dusty-rose/70 group-hover:text-dusty-rose transition-colors duration-200">
                  {link.index}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          {/* Contact Action & Mobile Trigger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-plum bg-aubergine/60 hover:bg-raised-plum/80 hover:border-dusty-rose/60 text-warm-ivory text-xs font-mono tracking-wider uppercase transition-all duration-200 group"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dusty-rose opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-dusty-rose"></span>
              </span>
              <span>Initiate Dialogue</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ash-mauve group-hover:text-dusty-rose group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md border border-border-plum bg-aubergine/50 text-warm-ivory hover:text-dusty-rose focus-visible:outline-none transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Editorial Drawer */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-40 lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none hidden'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-midnight-plum/80 backdrop-blur-md"
        />

        {/* Drawer Panel */}
        <nav
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-midnight-plum border-l border-border-plum p-8 pt-24 flex flex-col justify-between transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-6">
            <div className="pb-4 border-b border-border-plum/70 font-mono text-xs text-ash-mauve uppercase tracking-widest">
              Navigation Index
            </div>
            <ul className="space-y-4">
              {portfolioData.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="group flex items-baseline justify-between py-2 border-b border-border-plum/40 hover:border-dusty-rose/40 transition-colors"
                  >
                    <span className="font-serif text-2xl text-warm-ivory group-hover:text-dusty-rose transition-colors">
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-ash-mauve">
                      /{link.index}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Drawer Footer Colophon */}
          <div className="pt-6 border-t border-border-plum/60 space-y-4 font-mono text-xs text-ash-mauve">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-dusty-rose" />
              <span>{portfolioData.status}</span>
            </div>
            <p className="text-[11px] leading-relaxed text-ash-mauve/80">
              {portfolioData.tagline}
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
