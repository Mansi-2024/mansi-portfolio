'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';

interface HeroPortraitProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroPortrait Component — Simplified Architectural Portrait Frame
 *
 * Implements:
 * - Gallery-grade 3:4 portrait frame with subtle interactive optical sheen
 * - Responsive sizing (max 250px on mobile, 340px on desktop) ensuring initial fold visibility
 * - Completely authentic, untouched photograph of Mansi Konde
 * - Zero artificial specimen telemetry or fake studio labels
 */
export function HeroPortrait({
  className = '',
  imageSrc = '/assets/mansi-konde.jpg',
  imageAlt = 'Mansi Konde',
  innerRef,
}: HeroPortraitProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSheenPos({ x, y });
  };

  return (
    <div
      ref={innerRef}
      className={`hero-portrait-container relative w-full max-w-[240px] xs:max-w-[260px] sm:max-w-[300px] lg:max-w-[340px] xl:max-w-[360px] mx-auto select-none ${className}`}
      aria-label="Portrait — Mansi Konde"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer Architectural Mount with Interactive Optical Sheen */}
      <div className="group relative aspect-[3/4] w-full rounded-2xl border border-white/[0.08] bg-[#121214] p-2.5 sm:p-3 shadow-2xl transition-all duration-500 hover:border-white/[0.18] overflow-hidden">
        {/* Subtle Film Grain Noise Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] rounded-2xl bg-repeat"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '16px 16px',
          }}
          aria-hidden="true"
        />

        {/* Dynamic Interactive Optical Sheen following cursor angle */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: `radial-gradient(circle 220px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.09), transparent 70%)`,
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
                className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
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
                {profileData.role}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroPortrait;
