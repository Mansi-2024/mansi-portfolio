'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { ArrowUpRight, Check, Copy, Mail, ShieldAlert } from 'lucide-react';

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
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  const githubSocial = profileData.socials.find((s) => s.platform.toLowerCase() === 'github');

  return (
    <div className="w-full space-y-6">
      {/* 1. Primary Contact Action Card */}
      <div className="p-6 sm:p-8 rounded-xl border border-white/[0.08] bg-[#121214] shadow-2xl relative overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-white/[0.06] font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34D399]" aria-hidden="true" />
            <span className="text-[#F4F4F5] font-semibold tracking-wider uppercase text-[11px]">
              Direct Inquiry Channel
            </span>
          </div>
          <span className="text-[#71717A] text-[11px] hidden sm:inline">
            Response: 24–48 Hours
          </span>
        </div>

        {/* Email Address & Status Banner */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-mono text-[11px] tracking-wider uppercase text-[#A1A1AA]">
              Electronic Mailbox
            </span>

            {isEmailVerified ? (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/30 self-start sm:self-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                Verified Active Inbox
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20 self-start sm:self-auto">
                <ShieldAlert className="w-3 h-3 text-amber-400" />
                Inquiry Gateway
              </span>
            )}
          </div>

          {/* Email Address Display */}
          <div className="p-4 rounded-lg border border-white/[0.06] bg-[#18181B] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <div className="truncate">
                <span className="font-mono text-sm sm:text-base font-semibold text-[#F4F4F5] block truncate">
                  {emailAddress}
                </span>
                <span className="font-sans text-[11px] text-[#71717A]">
                  Direct primary address
                </span>
              </div>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/40 text-xs font-mono text-[#F4F4F5] transition-all shrink-0 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34D399]" />
                  <span className="text-[#34D399]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#A1A1AA]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Send Action */}
          <a
            href={mailtoHref}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-white/50 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono text-[#F4F4F5] hover:text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
          >
            <span>Open in Mail Client</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A1A1AA]" />
          </a>
        </div>
      </div>

      {/* 2. Secondary Provenance & Network Card */}
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#121214] space-y-4">
        <span className="font-mono text-[11px] tracking-wider uppercase text-[#71717A] block">
          Network &amp; Code Provenance
        </span>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={githubSocial?.url || 'https://github.com/Mansi-2024'}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 p-3 rounded-lg border border-white/[0.06] bg-[#18181B] hover:border-white/30 text-xs font-mono text-[#F4F4F5] hover:text-white transition-all group flex-1"
          >
            <div className="flex items-center gap-2.5">
              <GithubIcon className="w-4 h-4 text-[#38BDF8]" />
              <span>github.com/Mansi-2024</span>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-white transition-colors" />
          </a>

          <div className="w-full sm:w-auto p-3 rounded-lg border border-white/[0.06] bg-[#18181B] text-xs font-mono text-[#A1A1AA] flex items-center justify-between sm:justify-start gap-4">
            <span className="text-[#71717A]">Timezone:</span>
            <span className="text-[#F4F4F5]">IST (UTC+5:30)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLinks;
