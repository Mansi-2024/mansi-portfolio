'use client';

import React, { useState } from 'react';

interface HeroPortraitProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroPortrait Component — Editorial Redesign
 *
 * Implements:
 * - High-craft 3:4 studio portrait frame with warm monochrome tone
 * - Whisper-quiet 1px architectural hairline border
 * - Authentic architectural silhouette and film grain texture fallback
 * - Zero spinning radar rings, zero cyan tick marks, zero sci-fi HUD badges
 */
export function HeroPortrait({
  className = '',
  imageSrc = '/assets/mansi-konde.jpg',
  imageAlt = 'Mansi Konde — Creative Engineer Portrait',
  innerRef,
}: HeroPortraitProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      ref={innerRef}
      className={`hero-portrait-container relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto select-none ${className}`}
      aria-label="Studio Portrait Frame"
    >
      {/* Outer Editorial Frame Container */}
      <div className="relative aspect-[3/4] w-full rounded-xl border border-white/[0.08] bg-[#121214] overflow-hidden p-2.5 shadow-2xl transition-all duration-300">
        {/* Subtle Film Grain Noise Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />

        {/* Top Minimal Colophon Bar */}
        <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] font-mono text-[10px] text-[#A1A1AA]">
          <span className="tracking-wider uppercase text-[#F4F4F5] font-medium">
            Mansi Konde
          </span>
          <span className="tracking-widest uppercase text-[#71717A]">
            Studio // 3:4
          </span>
        </div>

        {/* Inner Canvas Display Window */}
        <div className="relative w-full h-[calc(100%-2rem)] rounded-lg border border-white/[0.05] bg-[#0E0E10] overflow-hidden flex flex-col items-center justify-center">
          {!imageFailed ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageFailed(true)}
              className={`w-full h-full object-cover transition-opacity duration-700 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}

          {/* Editorial Silhouette Specimen (Active when real photo is pending upload) */}
          {(imageFailed || !imageLoaded) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#18181B] to-[#0E0E10]">
              {/* Refined Architectural Silhouette */}
              <div className="relative w-28 h-28 mb-4 rounded-full border border-white/10 bg-[#161618] flex items-center justify-center shadow-inner">
                <svg
                  className="w-14 h-14 text-[#A1A1AA]/60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M6 21v-2a6 6 0 0 1 12 0v2" />
                </svg>
              </div>

              <div className="font-serif italic text-base text-[#F4F4F5]">
                Creative Engineer
              </div>
              <p className="font-mono text-[11px] text-[#71717A] mt-1 max-w-[200px] leading-relaxed">
                Studio Portrait Framing
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase px-2.5 py-0.5 rounded border border-white/10 text-[#A1A1AA] bg-white/[0.02]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" aria-hidden="true" />
                <span>Mumbai, IN</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroPortrait;
