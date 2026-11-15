'use client';

import React, { useEffect, useRef } from 'react';

interface HeroCanvasSequenceProps {
  className?: string;
  enabled?: boolean;
  totalFrames?: number;
  framePathPattern?: string; // e.g. '/images/sequence/frame_%03d.webp'
  progress?: number; // 0 to 1 scroll scrub progress from GSAP ScrollTrigger
}

/**
 * HeroCanvasSequence Component
 *
 * Extensible integration point for scroll-driven canvas image sequence (referencing katsugtgz/migrate-showcase).
 *
 * Architectural Specification:
 * - Kept inactive (enabled: false) until original source frames are supplied by the owner.
 * - Expected Asset Structure when activated:
 *     Directory: /public/images/sequence/
 *     Format: frame_000.webp ... frame_191.webp (192 frames, 16:9 or 4:3 high-res WebP)
 * - Uses devicePixelRatio for retina rendering.
 * - Ready to receive scrub progress directly from GSAP ScrollTrigger timeline.
 */
export function HeroCanvasSequence({
  className = '',
  enabled = false,
  totalFrames = 192,
  framePathPattern = '/images/sequence/frame_%03d.webp',
  progress = 0,
}: HeroCanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    // If not enabled or running on SSR, do not load heavy sequence assets
    if (!enabled || typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retina pixel ratio setup
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Frame drawing logic
    const currentFrameIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(progress * (totalFrames - 1)))
    );

    const img = imagesRef.current[currentFrameIndex];
    if (img && img.complete) {
      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, 0, 0, rect.width, rect.height);
    }
  }, [enabled, progress, totalFrames]);

  // While inactive, keep DOM footprint negligible
  if (!enabled) {
    return (
      <div
        className={`hero-canvas-sequence-placeholder pointer-events-none hidden ${className}`}
        aria-hidden="true"
        data-sequence-status="inactive-pending-source-frames"
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`hero-canvas-sequence w-full h-full object-contain pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}

export default HeroCanvasSequence;
