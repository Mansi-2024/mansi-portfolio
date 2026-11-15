import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowUpRight, Mail } from 'lucide-react';

export function ContactPlaceholder() {
  return (
    <section
      id="contact"
      aria-label="Contact Mansi Konde"
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1c1c24]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#1c1c24] font-mono text-xs text-[#71717a]">
        <div className="flex items-center gap-2">
          <span className="text-[#00f0ff] font-bold">04</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[#f4f4f7]">Contact</span>
        </div>
        <span className="hidden sm:inline">INITIATE CONVERSATION</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Headline */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-4xl sm:text-6xl font-sans font-semibold text-[#f4f4f7] tracking-tight leading-[1.08]">
            Let&apos;s explore the next{' '}
            <span className="text-[#00f0ff] font-serif italic font-normal">question together.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-xl font-light">
            Whether you have a complex engineering puzzle, a creative frontend inquiry, or an ambitious interactive 3D vision, my inbox is open.
          </p>
        </div>

        {/* Right Contact Card Frame */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-xl border border-[#2a2a36] bg-[#0e0e12] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#1c1c24] font-mono text-xs text-[#71717a]">
              <span className="flex items-center gap-2 text-[#00f0ff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00f0ff] animate-ping" />
                <span>COMMUNICATION CHANNEL</span>
              </span>
              <span>DIRECT DISPATCH</span>
            </div>

            <div className="space-y-3">
              {/* Direct Email */}
              <div className="p-4 rounded-lg border border-[#2a2a36] bg-[#08080a]">
                <div className="flex items-center justify-between mb-1.5 font-mono text-[10px] text-[#71717a] uppercase">
                  <span>Direct Email</span>
                  <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-1.5 py-0.5 rounded border border-[#00f0ff]/30">
                    Pending Confirmation
                  </span>
                </div>
                <a
                  href={`mailto:${profileData.email.address}`}
                  className="group flex items-center justify-between"
                  aria-label="Send email to Mansi Konde"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#00f0ff]" />
                    <span className="font-mono text-xs text-[#f4f4f7] group-hover:text-[#00f0ff] transition-colors">
                      {profileData.email.address}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-[#00f0ff] transition-colors" />
                </a>
              </div>

              {/* GitHub Link */}
              <a
                href="https://github.com/Mansi-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-lg border border-[#2a2a36] bg-[#08080a] hover:border-[#00f0ff] transition-colors"
                aria-label="View Mansi Konde GitHub Profile (opens in new tab)"
              >
                <span className="font-mono text-xs text-[#f4f4f7] group-hover:text-[#00f0ff] transition-colors">
                  github.com/Mansi-2024
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-[#00f0ff] transition-colors" />
              </a>

              {/* Metadata */}
              <div className="p-4 rounded-lg border border-[#1c1c24] bg-[#08080a]/60 font-mono text-xs text-[#71717a] space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span>RESPONSE WINDOW</span>
                  <span className="text-[#f4f4f7]">{profileData.email.responseWindow}</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>TIMEZONE</span>
                  <span className="text-[#f4f4f7]">{profileData.timezone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPlaceholder;
