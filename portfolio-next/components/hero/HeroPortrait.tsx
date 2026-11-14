'use client';

import React, { useState } from 'react';

interface HeroPortraitProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroPortrait Component — Simplified Personal Portrait
 *
 * Implements:
 * - Gallery-grade 3:4 portrait frame with subtle architectural border
 * - Authentic photograph of Mansi Konde without technical specimen decorations
 * - Responsive sizing and object-[center_18%] alignment
 * - Zero studio labels, fake ratios, or status indicators
 */
export function HeroPortrait({
  className = '',
  imageSrc = '/assets/mansi-konde.jpg',
  imageAlt = 'Mansi Konde',
  innerRef,
}: HeroPortraitProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      ref={innerRef}
      className={`hero-portrait-container relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto select-none ${className}`}
      aria-label="Portrait — Mansi Konde"
    >
      {/* Outer Editorial Mount */}
      <div className="group relative aspect-[3/4] w-full rounded-2xl border border-white/[0.08] bg-[#121214] p-2.5 sm:p-3 shadow-2xl transition-all duration-500 hover:border-white/[0.16] overflow-hidden">
        {/* Subtle Film Grain Noise Texture */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-2xl bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />

        {/* Inner Canvas Display Window — Strict 3:4 Aspect Ratio */}
        <div className="relative w-full h-full rounded-xl border border-white/[0.06] bg-[#0E0E10] overflow-hidden">
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
      </div>
    </div>
  );
}

export default HeroPortrait;
