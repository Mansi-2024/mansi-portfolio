'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { ArrowUpRight, Check, Copy, ExternalLink, Mail, ShieldAlert, Sparkles } from 'lucide-react';

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function ContactLinks() {
  const [copied, setCopied] = useState(false);
  const emailAddress = profileData.email.address;
  const isEmailVerified = profileData.email.status === 'verified';
  const mailtoSubject = encodeURIComponent('Portfolio Inquiry — Mansi Konde');
  const mailtoHref = `mailto:${emailAddress}?subject=${mailtoSubject}`;

  const handleCopyEmail = async () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2600);
      }
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  const githubSocial = profileData.socials.find((s) => s.platform.toLowerCase() === 'github');
  const linkedinSocial = profileData.socials.find((s) => s.platform.toLowerCase() === 'linkedin');

  return (
    <div className="w-full space-y-6">
      {/* 1. Primary Contact Action Card */}
      <div className="p-6 sm:p-8 rounded-2xl border border-[#2a2a36] bg-[#0d0e13] shadow-2xl relative overflow-hidden">
        {/* Subtle top accent gradient rule */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"
        />

        {/* Card Header */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#1c1c24] font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]" />
            </span>
            <span className="text-[#00f0ff] font-semibold tracking-wider uppercase text-[11px]">
              Direct Inquiry Channel
            </span>
          </div>
          <span className="text-[#71717a] text-[11px] hidden sm:inline">
            Direct Dispatch
          </span>
        </div>

        {/* Email Address & Status Banner */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#a1a1aa]">
              Electronic Mailbox
            </span>

            {isEmailVerified ? (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#10b981]/10 text-[#34d399] border border-[#10b981]/30 self-start sm:self-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
                Verified Active Inbox
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#f59e0b]/10 text-[#fbbf24] border border-[#f59e0b]/30 self-start sm:self-auto">
                <ShieldAlert className="w-3 h-3 text-[#fbbf24]" />
                Configuration Placeholder (Pending Domain Activation)
              </span>
            )}
          </div>

          {/* Email Address Display */}
          <div className="p-4 rounded-xl border border-[#232430] bg-[#08080a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/20 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#00f0ff]" />
              </div>
              <div className="overflow-hidden">
                <span className="block font-mono text-sm sm:text-base font-semibold text-[#f4f4f7] truncate">
                  {emailAddress}
                </span>
                <span className="block text-[11px] text-[#71717a] font-sans">
                  Pre-configured subject: &ldquo;Portfolio Inquiry — Mansi Konde&rdquo;
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#2a2a36] bg-[#12131a] hover:bg-[#1a1b24] hover:border-[#00f0ff]/50 text-[#f4f4f7] text-xs font-mono transition-colors focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34d399]" />
                    <span className="text-[#34d399] font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#a1a1aa]" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={mailtoHref}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#00f0ff] hover:bg-[#38f8ff] text-[#08080a] text-xs font-mono font-bold transition-all shadow-md shadow-[#00f0ff]/20 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00f0ff]"
                aria-label={`Send email to ${emailAddress}`}
              >
                <span>Write Mail</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Advisory Notice for Domain Status */}
          {!isEmailVerified && (
            <p className="text-[11px] font-mono text-[#a1a1aa] leading-relaxed bg-[#14151f]/60 p-3 rounded-lg border border-[#232430]">
              <span className="text-[#fbbf24] font-semibold">Note for visitors:</span> The address above is pre-configured for upcoming domain mailbox deployment. For instant, guaranteed receipt, please message or open an issue on the verified GitHub channel below.
            </p>
          )}
        </div>
      </div>

      {/* 2. Verified Profiles & Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* GitHub — Verified */}
        <a
          href={githubSocial?.url || 'https://github.com/Mansi-2024'}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-xl border border-[#2a2a36] bg-[#0d0e13] hover:border-[#00f0ff]/60 hover:bg-[#12131b] transition-all flex flex-col justify-between gap-4 focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
          aria-label="Visit Mansi Konde verified GitHub profile (opens in new tab)"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#181922] border border-[#2a2a36] flex items-center justify-center text-[#f4f4f7] group-hover:text-[#00f0ff] transition-colors">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-sans text-sm font-semibold text-[#f4f4f7] group-hover:text-[#00f0ff] transition-colors">
                  GitHub Profile
                </span>
                <span className="block font-mono text-[11px] text-[#71717a]">
                  github.com/Mansi-2024
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#71717a] group-hover:text-[#00f0ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#1c1c24] font-mono text-[10px]">
            <span className="inline-flex items-center gap-1 text-[#34d399]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10b981]" />
              Verified Public Repositories
            </span>
            <span className="text-[#71717a]">6 Systems</span>
          </div>
        </a>

        {/* LinkedIn — Configuration Placeholder (Pending Owner Link) */}
        <div
          className="p-5 rounded-xl border border-[#232430] bg-[#0a0b0f] opacity-85 flex flex-col justify-between gap-4 select-none relative"
          aria-label="LinkedIn profile status"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#14151f] border border-[#232430] flex items-center justify-center text-[#71717a]">
                <ExternalLink className="w-4 h-4" />
              </div>
              <div>
                <span className="block font-sans text-sm font-semibold text-[#a1a1aa]">
                  LinkedIn Profile
                </span>
                <span className="block font-mono text-[11px] text-[#71717a]">
                  {linkedinSocial?.label || 'Professional Profile'}
                </span>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-[#232430] text-[#a1a1aa] border border-[#2e3040]">
              Pending Link
            </span>
          </div>

          <div className="pt-3 border-t border-[#1c1c24] font-mono text-[10px] text-[#71717a] flex items-center justify-between">
            <span>Awaiting owner handle confirmation</span>
            <span>Profile 2026</span>
          </div>
        </div>
      </div>

      {/* 3. Operational Metadata Grid */}
      <div className="p-5 rounded-xl border border-[#1c1c24] bg-[#08080a]/80 font-mono text-xs text-[#71717a] space-y-2.5">
        <div className="flex items-center justify-between text-[11px]">
          <span className="tracking-wider uppercase">Expected Response Window</span>
          <span className="text-[#f4f4f7] font-semibold">{profileData.email.responseWindow}</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span className="tracking-wider uppercase">Primary Timezone</span>
          <span className="text-[#f4f4f7] font-semibold">{profileData.timezone}</span>
        </div>
        <div className="pt-2 border-t border-[#1c1c24] flex items-center gap-2 text-[11px] text-[#a1a1aa]">
          <Sparkles className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
          <span>Open to technical architecture, creative engineering, and systems research.</span>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;
