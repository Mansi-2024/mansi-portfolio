'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

let isRegistered = false;

export function registerGSAP() {
  if (typeof window !== 'undefined' && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
    isRegistered = true;
  }
}

// Auto-register on import if in browser
if (typeof window !== 'undefined') {
  registerGSAP();
  (window as unknown as { ScrollTrigger?: typeof ScrollTrigger }).ScrollTrigger = ScrollTrigger;
}

export { gsap, ScrollTrigger, useGSAP };
export default gsap;
