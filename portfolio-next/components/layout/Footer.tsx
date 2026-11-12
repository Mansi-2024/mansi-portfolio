import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1c1c24] bg-[#08080a] py-12 px-6 sm:px-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 font-mono text-xs text-[#71717a]">
        <div className="space-y-1">
          <div className="text-[#f4f4f7] font-sans font-medium text-sm flex items-center gap-2">
            <span>{profileData.name}</span>
            <span className="text-[#00f0ff] text-xs font-mono">// {profileData.role}</span>
          </div>
          <p className="text-[11px] text-[#71717a]">
            {profileData.edition} • Designed with intentional systems craft.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[11px]">
          <a
            href="https://github.com/Mansi-2024"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-[#00f0ff] transition-colors"
          >
            <span>GitHub Profile</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <a
            href="mailto:contact@mansikonde.dev"
            className="flex items-center gap-1 hover:text-[#00f0ff] transition-colors"
          >
            <span>contact@mansikonde.dev</span>
            <span className="text-[9px] uppercase px-1 py-0.5 rounded border border-[#2a2a36] text-[#71717a]">
              Pending Confirmation
            </span>
          </a>
          <span>© {currentYear} Mansi Konde</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
