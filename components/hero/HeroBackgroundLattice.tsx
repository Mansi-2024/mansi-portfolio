'use client';

import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HeroBackgroundLatticeProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  z: number; // Depth factor: 0.2 (distant) to 1.0 (foreground)
  radius: number;
  baseAlpha: number;
  speedX: number;
  speedY: number;
}

/**
 * HeroBackgroundLattice Component — Atmospheric Architectural Field
 *
 * Implements:
 * - Fluid volumetric luminous glow responding to cursor movement with LERP inertia
 * - Multi-plane ambient micro-particles (depth vectors) that provide organic spatial depth
 * - Hairline geometric grid with soft proximity node highlights
 * - Automated subtle ambient orbit when idle or on mobile (no touch drag needed)
 * - Zero fake telemetry, fake coordinates, or decorative metadata
 * - High-efficiency canvas rendering: automatically pauses rAF when offscreen
 * - Complete prefers-reduced-motion fallback with zero motion
 */
export function HeroBackgroundLattice({ className = '' }: HeroBackgroundLatticeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Pointer target and interpolated smoothed values
    const pointer = {
      targetX: 0,
      targetY: 0,
      currentX: 0,
      currentY: 0,
      lastMoveTime: 0,
    };

    let isVisible = true;
    let tick = 0;

    // Grid configuration
    const spacing = 64; // Spaced for clean editorial breathing room
    const nodeRadius = 1.25;

    // Generate lightweight multi-plane depth particles
    const particleCount = 28;
    const particles: Particle[] = [];

    const initParticles = (w: number, h: number) => {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        const z = 0.25 + Math.random() * 0.75; // Depth factor
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z,
          radius: 0.8 + z * 0.8,
          baseAlpha: 0.03 + z * 0.07,
          speedX: (Math.random() - 0.5) * 0.15 * z,
          speedY: -(0.08 + Math.random() * 0.12) * z, // Gentle upward drift
        });
      }
    };

    const resize = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      if (particles.length === 0) {
        initParticles(width, height);
      }
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Track mouse over window/hero
    const handleMouseMove = (e: MouseEvent) => {
      if (prefersReducedMotion) return;
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / height - 0.5) * 2;
      pointer.targetX = Math.max(-1, Math.min(1, nx));
      pointer.targetY = Math.max(-1, Math.min(1, ny));
      pointer.lastMoveTime = Date.now();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Pause rendering when hero is offscreen to preserve system resources
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Render loop
    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      tick += 0.012;

      // Handle idle ambient oscillation or active cursor tracking
      const isIdle = Date.now() - pointer.lastMoveTime > 2400;

      if (!prefersReducedMotion) {
        if (isIdle) {
          // Soft Lissajous ambient drift when idle or on mobile
          const ambientX = Math.sin(tick * 0.4) * 0.22;
          const ambientY = Math.cos(tick * 0.3) * 0.16;
          pointer.targetX = ambientX;
          pointer.targetY = ambientY;
        }

        // Smooth LERP momentum damping
        pointer.currentX += (pointer.targetX - pointer.currentX) * 0.045;
        pointer.currentY += (pointer.targetY - pointer.currentY) * 0.045;
      } else {
        pointer.currentX = 0;
        pointer.currentY = 0;
      }

      ctx.clearRect(0, 0, width, height);

      // Save context for perspective transform
      ctx.save();

      // Subtle spatial translation offset (max ±14px)
      const tiltX = pointer.currentX * 14;
      const tiltY = pointer.currentY * 11;
      ctx.translate(tiltX, tiltY);

      // -----------------------------------------------------------------------
      // 1. Primary Volumetric Luminous Glow
      // -----------------------------------------------------------------------
      const glowFocusX = width * 0.55 + pointer.currentX * 60;
      const glowFocusY = height * 0.45 + pointer.currentY * 45;
      const pulse = Math.sin(tick * 0.5) * 0.005;

      const radialGrad = ctx.createRadialGradient(
        glowFocusX,
        glowFocusY,
        20,
        glowFocusX,
        glowFocusY,
        Math.max(width, height) * 0.65
      );
      // Soft atmospheric cyan luminescence fading into charcoal
      radialGrad.addColorStop(0, `rgba(56, 189, 248, ${0.04 + pulse})`);
      radialGrad.addColorStop(0.35, 'rgba(244, 244, 245, 0.012)');
      radialGrad.addColorStop(0.7, 'rgba(24, 24, 27, 0.008)');
      radialGrad.addColorStop(1, 'rgba(11, 11, 12, 0)');

      ctx.fillStyle = radialGrad;
      ctx.fillRect(-60, -60, width + 120, height + 120);

      // -----------------------------------------------------------------------
      // 2. Architectural Hairline Grid
      // -----------------------------------------------------------------------
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.022)';

      const startX = -((spacing - (tiltX % spacing)) % spacing);
      const startY = -((spacing - (tiltY % spacing)) % spacing);

      // Vertical lines
      for (let x = startX; x < width + 60; x += spacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = startY; y < height + 60; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Intersection points (Restrained node highlights near cursor focus)
      for (let x = startX; x < width + 60; x += spacing) {
        for (let y = startY; y < height + 60; y += spacing) {
          const dx = x - glowFocusX;
          const dy = y - glowFocusY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const proximity = Math.max(0, 1 - dist / 320);
          const nodePulse = Math.sin(tick + (x + y) * 0.008) * 0.5 + 0.5;
          const alpha = 0.035 + proximity * 0.12 + nodePulse * 0.015;

          ctx.fillStyle = proximity > 0.35
            ? `rgba(56, 189, 248, ${alpha})`
            : `rgba(255, 255, 255, ${alpha})`;

          ctx.beginPath();
          ctx.arc(x, y, nodeRadius + proximity * 0.6, 0, Math.PI * 2);
          ctx.fill();

          // Sparse quiet crosshair markers at every 6th node (architectural cues)
          if ((Math.floor(x / spacing) + Math.floor(y / spacing)) % 6 === 0) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 1.1})`;
            ctx.beginPath();
            ctx.moveTo(x - 2.5, y);
            ctx.lineTo(x + 2.5, y);
            ctx.moveTo(x, y - 2.5);
            ctx.lineTo(x, y + 2.5);
            ctx.stroke();
          }
        }
      }

      // -----------------------------------------------------------------------
      // 3. Multi-Plane Ambient Micro-Particles (Depth Vectors)
      // -----------------------------------------------------------------------
      if (!prefersReducedMotion) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Drift
          p.x += p.speedX;
          p.y += p.speedY;

          // Wrap edges
          if (p.y < -10) p.y = height + 10;
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          // Multi-plane parallax offset based on z-depth
          const px = p.x + pointer.currentX * 18 * p.z;
          const py = p.y + pointer.currentY * 14 * p.z;

          // Proximity to glow focus enhances visibility slightly
          const dx = px - glowFocusX;
          const dy = py - glowFocusY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const prox = Math.max(0, 1 - dist / 380);

          const pAlpha = p.baseAlpha + prox * 0.08;

          ctx.fillStyle = prox > 0.4
            ? `rgba(56, 189, 248, ${pAlpha})`
            : `rgba(244, 244, 245, ${pAlpha})`;

          ctx.beginPath();
          ctx.arc(px, py, p.radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();

      // If reduced motion is requested, render one clean static frame and stop
      if (prefersReducedMotion) {
        return;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`hero-lattice-container pointer-events-none absolute inset-0 overflow-hidden select-none z-0 ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-85 transition-opacity duration-1000" />
      {/* Top and bottom subtle editorial gradient masks for soft threshold blending */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0B0B0C] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0B0B0C] to-transparent pointer-events-none" />
    </div>
  );
}

export default HeroBackgroundLattice;
