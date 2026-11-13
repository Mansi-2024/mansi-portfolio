'use client';

import React, { useState } from 'react';

interface HeroPortraitProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroPortrait Component — Authentic Editorial Portrait
 *
 * Implements:
 * - High-craft art-directed 3:4 studio portrait frame
 * - Direct integration of authentic professional portrait photograph of Mansi Konde
 * - Preservation of natural facial features, skin tones, hair, and burgundy ribbed top
 * - Whisper-quiet 1px architectural hairline border with refined dark charcoal palette
 * - Responsive sizing and object-[center_18%] alignment
 * - Graceful fallback handling if image fails to load
 */
export function HeroPortrait({
  className = '',
  imageSrc = '/assets/mansi-konde.jpg',
  imageAlt = 'Professional portrait photograph of Mansi Konde, Creative Engineer',
  innerRef,
}: HeroPortraitProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      ref={innerRef}
      className={`hero-portrait-container relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto select-none ${className}`}
      aria-label="Studio Portrait — Mansi Konde"
    >
      {/* Outer Editorial Mount / Passe-partout Frame */}
      <div className="group relative rounded-2xl border border-white/[0.08] bg-[#121214] p-3 sm:p-3.5 shadow-2xl transition-all duration-500 hover:border-white/[0.16]">
        {/* Subtle Film Grain Noise Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-2xl bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />

        {/* Top Minimal Colophon Bar */}
        <div className="relative z-10 flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/[0.06] font-mono text-[10px] text-[#A1A1AA]">
          <span className="tracking-wider uppercase text-[#F4F4F5] font-medium">
            Mansi Konde
          </span>
          <span className="tracking-widest uppercase text-[#71717A]">
            Studio // 3:4
          </span>
        </div>

        {/* Inner Canvas Display Window — Strict 3:4 Aspect Ratio */}
        <div className="relative aspect-[3/4] w-full rounded-xl border border-white/[0.06] bg-[#0E0E10] overflow-hidden">
          {!imageFailed ? (
            <>
              <img
                src={imageSrc}
                alt={imageAlt}
                onError={() => setImageFailed(true)}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              {/* Subtle architectural hairline inner ring */}
              <div 
                className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.06]"
                aria-hidden="true"
              />
            </>
          ) : (
            /* Graceful Fallback if asset loading ever fails */
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#18181B] to-[#0E0E10]">
              <div className="font-serif italic text-base text-[#F4F4F5]">
                Mansi Konde
              </div>
              <p className="font-mono text-[11px] text-[#71717A] mt-1">
                Creative Engineer
              </p>
            </div>
          )}
        </div>

        {/* Bottom Refined Metadata Strip */}
        <div className="relative z-10 mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-[#71717A]">
          <span className="tracking-wide text-[#A1A1AA]">
            Creative Engineer
          </span>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/[0.08] text-[#F4F4F5] bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" aria-hidden="true" />
            <span>Mumbai, IN</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPortrait;
