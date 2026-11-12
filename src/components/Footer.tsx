import React from 'react';
import { portfolioData } from '../data/portfolio';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border-plum bg-midnight-plum pt-16 pb-12 px-6 sm:px-8 text-ash-mauve font-mono text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-border-plum/50">
        <div>
          <span className="font-serif text-3xl sm:text-4xl text-warm-ivory block tracking-tight">
            {portfolioData.name}
          </span>
          <span className="text-xs text-dusty-rose tracking-wider uppercase block mt-1">
            {portfolioData.positioning}
          </span>
          <p className="font-sans text-sm text-ash-mauve/80 mt-4 max-w-md leading-relaxed">
            &ldquo;{portfolioData.tagline}&rdquo;
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
          <div className="space-y-1 text-left sm:text-right text-[11px]">
            <div>One Who Codes 2026 Competition Edition</div>
            <div className="text-ash-mauve/70">Plum Editorial Design System</div>
          </div>

          <a
            href="#top"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-3.5 py-2 rounded border border-border-plum hover:border-dusty-rose text-warm-ivory transition-colors"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-dusty-rose group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[10px] text-ash-mauve/60">
        <div>
          © {new Date().getFullYear()} Mansi Konde. All rights reserved. Built with React, TypeScript &amp; GSAP.
        </div>
        <div>
          Set in Instrument Serif, DM Sans &amp; IBM Plex Mono.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
