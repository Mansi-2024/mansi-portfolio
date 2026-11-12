'use client';

import React, { useState } from 'react';
import { User } from 'lucide-react';

interface HeroPortraitProps {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

/**
 * HeroPortrait Component
 *
 * Dedicated portrait specimen frame supporting:
 * - Real photograph loading from /public/assets/mansi-konde.jpg (or custom prop)
 * - Graceful fallback to architectural SVG specimen frame when asset is pending upload
 * - Controlled scale, opacity, entrance from below, and subtle parallax
 * - Responsive 3:4 aspect ratio across all device breakpoints
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
      aria-label="Portrait Specimen Frame"
    >
      {/* Outer Editorial Frame Container */}
      <div className="relative aspect-[3/4] w-full rounded-2xl border border-[#2a2a36] bg-[#0c0c10] overflow-hidden p-3.5 shadow-2xl transition-all duration-300">
        {/* Fine Architectural Grid Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(to_right,#1c1c24_1px,transparent_1px),linear-gradient(to_bottom,#1c1c24_1px,transparent_1px)] bg-[size:16px_16px]" />

        {/* Precision Corner Tick Marks */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff]/70" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#00f0ff]/70" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#00f0ff]/70" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff]/70" />

        {/* Top Annotation Bar */}
        <div className="relative z-10 flex items-center justify-between pb-2 mb-2 border-b border-[#1c1c24] font-mono text-[9px] sm:text-[10px] text-[#71717a]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="text-[#f4f4f7] tracking-wider uppercase font-semibold">
              SPECIMEN // MK-01
            </span>
          </div>
          <span className="text-[#00f0ff] tracking-widest uppercase font-mono">
            3:4 RATIO
          </span>
        </div>

        {/* Inner Canvas Display Window */}
        <div className="relative w-full h-[calc(100%-2.25rem)] rounded-xl border border-[#1c1c24] bg-[#08080a] overflow-hidden flex flex-col items-center justify-center p-6 text-center">
          {!imageFailed ? (
            <img
              src={imageSrc}
              alt={imageAlt}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageFailed(true)}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ) : null}

          {/* Neutral Architectural Specimen Fallback (Active when real photo is pending upload) */}
          {(imageFailed || !imageLoaded) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-0">
              {/* Subtle Concentric Radar Rings & Crosshairs */}
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[#2a2a36] animate-[spin_12s_linear_infinite]" />
                <div className="absolute inset-2 rounded-full border border-dashed border-[#1c1c24]" />
                <div className="absolute inset-4 rounded-full border border-[#2a2a36]" />
                <div className="w-12 h-12 rounded-full bg-[#16161d] border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] shadow-inner">
                  <User className="w-6 h-6 opacity-80" />
                </div>
              </div>

              <div className="font-mono text-xs text-[#f4f4f7] font-medium tracking-wide">
                Pending Owner Photograph
              </div>
              <p className="font-mono text-[10px] text-[#71717a] mt-1 max-w-[200px] leading-relaxed">
                Target path: <code className="text-[#00f0ff]">/public/assets/mansi-konde.jpg</code>
              </p>
              <div className="mt-3 inline-flex items-center gap-1 font-mono text-[9px] uppercase px-2 py-0.5 rounded border border-[#2a2a36] text-[#a1a1aa] bg-[#0e0e12]">
                Editorial 3:4 Crop
              </div>
            </div>
          )}

          {/* Coordinate Crosshairs at Midpoints */}
          <div className="absolute top-1/2 left-2 -translate-y-1/2 font-mono text-[8px] text-[#2a2a36]">
            +
          </div>
          <div className="absolute top-1/2 right-2 -translate-y-1/2 font-mono text-[8px] text-[#2a2a36]">
            +
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPortrait;
