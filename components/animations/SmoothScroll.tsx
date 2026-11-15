'use client';

import React from 'react';
import { useLenis } from '@/hooks/useLenis';

/**
 * SmoothScroll component initializes Lenis and syncs with GSAP ScrollTrigger.
 */
export function SmoothScroll({ children }: { children?: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}

export default SmoothScroll;
