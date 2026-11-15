import React from 'react';
import { profileData } from '@/data/profile';
import { ShieldCheck, User } from 'lucide-react';

/**
 * IdentityCardPlaceholder
 * Staged for 3D physics-simulated hanging ID card & lanyard (R3F + Three.js) in upcoming phases.
 */
export function IdentityCardPlaceholder() {
  return (
    <section
      id="identity"
      aria-label="Creative Engineer Identity"
      className="py-16 px-6 sm:px-8 max-w-7xl mx-auto"
    >
      <div className="rounded-xl border border-[#2a2a36] bg-[#0e0e12] p-8 max-w-xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] text-[#00f0ff] uppercase tracking-widest px-2.5 py-0.5 rounded border border-[#2a2a36] bg-[#16161d]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Interactive 3D Identity Stage</span>
        </div>

        <div className="w-20 h-20 mx-auto rounded-full bg-[#16161d] border border-[#2a2a36] flex items-center justify-center text-[#a1a1aa]">
          <User className="w-10 h-10 opacity-60" />
        </div>

        <div className="space-y-1">
          <h2 className="text-xl font-medium text-[#f4f4f7]">{profileData.name}</h2>
          <p className="font-mono text-xs text-[#00f0ff]">{profileData.role}</p>
        </div>

        <p className="text-xs font-mono text-[#71717a] max-w-md mx-auto">
          [ 3D Lanyard & Physics Badge Scene: Infrastructure configured for React Three Fiber + Drei lazy-loading ]
        </p>
      </div>
    </section>
  );
}

export default IdentityCardPlaceholder;
