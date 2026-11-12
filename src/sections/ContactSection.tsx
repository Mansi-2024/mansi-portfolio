import React, { useState } from 'react';
import { ArrowUpRight, Mail, AlertCircle, Check } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [linkedinNotice, setLinkedinNotice] = useState<boolean>(false);

  return (
    <section
      id="contact"
      aria-label="Contact Mansi Konde"
      className="relative pt-24 pb-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-border-plum"
    >
      {/* Top Section Index Notch */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-plum/40 font-mono text-xs text-ash-mauve">
        <div className="flex items-center gap-2">
          <span className="text-dusty-rose font-bold">04</span>
          <span className="text-border-plum">/</span>
          <span className="tracking-widest uppercase text-warm-ivory">Contact</span>
        </div>
        <span className="text-ash-mauve/70 font-mono hidden sm:inline">
          INITIATE CONVERSATION
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Headline */}
        <div className="lg:col-span-7">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-warm-ivory tracking-tight leading-[1.08]">
            Let&apos;s explore the next{' '}
            <span className="italic text-dusty-rose font-normal">question together.</span>
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-ash-mauve leading-relaxed max-w-xl">
            Whether you have a complex engineering puzzle, a design inquiry, or an ambitious interactive vision for 2026, my inbox is open.
          </p>
        </div>

        {/* Right Contact Card Frame */}
        <div className="lg:col-span-5">
          <div className="p-8 rounded-lg border border-border-plum bg-aubergine/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border-plum/50 font-mono text-xs text-ash-mauve">
              <span className="flex items-center gap-2 text-dusty-rose">
                <span className="h-1.5 w-1.5 rounded-full bg-dusty-rose animate-ping" />
                <span>COMMUNICATION CHANNELS</span>
              </span>
              <span>VERIFIED CHANNELS</span>
            </div>

            <div className="space-y-3">
              {/* Primary Email Dispatch */}
              <div className="p-4 rounded-md border border-border-plum bg-midnight-plum/60 hover:border-dusty-rose transition-all duration-200">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[10px] text-ash-mauve tracking-wider uppercase">Direct Email</span>
                  <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border border-dusty-rose/40 text-dusty-rose bg-dusty-rose/10">
                    Pending Owner Confirmation
                  </span>
                </div>
                <a
                  href="mailto:contact@mansikonde.dev"
                  className="group flex items-center justify-between"
                  aria-label="Send email to contact@mansikonde.dev (Pending owner confirmation)"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-dusty-rose" />
                    <span className="font-mono text-xs sm:text-sm text-warm-ivory group-hover:text-dusty-rose transition-colors">
                      contact@mansikonde.dev
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ash-mauve group-hover:text-dusty-rose transition-colors" />
                </a>
              </div>

              {/* GitHub Profile */}
              <a
                href="https://github.com/Mansi-2024"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-md border border-border-plum bg-midnight-plum/60 hover:border-dusty-rose transition-all duration-200"
                aria-label="View Mansi Konde GitHub profile (opens in a new tab)"
              >
                <div className="flex items-center gap-2.5">
                  <GithubIcon className="w-4 h-4 text-dusty-rose" />
                  <span className="font-mono text-xs sm:text-sm text-warm-ivory group-hover:text-dusty-rose transition-colors">
                    github.com/Mansi-2024
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ash-mauve group-hover:text-dusty-rose transition-colors" />
              </a>

              {/* LinkedIn Placeholder */}
              <div className="p-4 rounded-md border border-border-plum bg-midnight-plum/40">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-ash-mauve" />
                    <span className="font-mono text-xs sm:text-sm text-ash-mauve">
                      LinkedIn Professional Network
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setLinkedinNotice(!linkedinNotice)}
                    className="font-mono text-[9px] uppercase px-1.5 py-0.5 rounded border border-border-plum hover:border-dusty-rose text-ash-mauve hover:text-warm-ivory transition-colors"
                  >
                    Pending Owner URL
                  </button>
                </div>
                {linkedinNotice && (
                  <p className="mt-2 text-[11px] font-mono text-dusty-rose flex items-center gap-1.5 pt-2 border-t border-border-plum/40">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
                    <span>LinkedIn profile link pending owner configuration for final release.</span>
                  </p>
                )}
              </div>

              {/* Operational Metadata */}
              <div className="p-4 rounded-md border border-border-plum/60 bg-midnight-plum/40 font-mono text-xs text-ash-mauve space-y-2 mt-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span>RESPONSE WINDOW</span>
                  <span className="text-warm-ivory">24 — 48 Hours</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>TIMEZONE</span>
                  <span className="text-warm-ivory">IST (UTC +5:30)</span>
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>PORTFOLIO STATUS</span>
                  <span className="text-dusty-rose flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Competition Ready</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs font-mono text-ash-mauve/80 pt-2 border-t border-border-plum/30">
              [ Connect for creative engineering, frontend architecture, or collaborative inquiry ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
