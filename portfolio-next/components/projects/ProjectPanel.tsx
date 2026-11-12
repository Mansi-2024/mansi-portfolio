'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { ProjectVisual } from './ProjectVisuals';
import { ArrowUpRight, FolderGit2, Users, User, ArrowRight } from 'lucide-react';

interface ProjectPanelProps {
  project: Project;
  index: number;
  total: number;
  className?: string;
}

/**
 * ProjectPanel Component — Large Editorial Stage for a Single Project
 *
 * Implements:
 * - High-contrast editorial card layout with distinctive SVG/CSS architectural visuals
 * - Verified project metadata, tech stack pills, and factual contribution role
 * - Direct authenticated GitHub repository link and Case Study deep link
 */
export function ProjectPanel({ project, index, total, className = '' }: ProjectPanelProps) {
  return (
    <article
      aria-label={`Project ${project.number}: ${project.title}`}
      className={`group relative flex-shrink-0 w-[85vw] sm:w-[78vw] md:w-[72vw] lg:w-[68vw] xl:w-[64vw] max-w-[960px] min-w-[320px] rounded-2xl border border-[#2a2a36] bg-[#0c0c12] p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Background Decorative Index Watermark */}
      <div className="absolute top-4 right-6 font-mono font-bold text-6xl sm:text-7xl lg:text-8xl text-white/[0.03] select-none pointer-events-none">
        {project.number}
      </div>

      {/* Top Header Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#1c1c24] pb-4 mb-6">
        <div className="flex items-center gap-2.5 font-mono text-xs text-[#71717a]">
          <span className="text-[#00f0ff] font-bold text-sm tracking-wider">
            {project.number}
          </span>
          <span>//</span>
          <span className="text-[#a1a1aa] uppercase tracking-wider text-[11px]">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px]">
          {/* Collaborative or Solo Attribution Badge */}
          {project.collaborative ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-[#2a2a36] bg-[#14141e] text-[#a1a1aa]">
              <Users className="w-3 h-3 text-[#00f0ff]" />
              <span>COLLABORATIVE TEAM WORK</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded border border-[#2a2a36] bg-[#14141e] text-[#a1a1aa]">
              <User className="w-3 h-3 text-[#10b981]" />
              <span>ENGINEERING LEAD</span>
            </span>
          )}

          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded border border-[#2a2a36] bg-[#0e0e14] text-[#71717a]">
            {project.statusBadge}
          </span>
        </div>
      </div>

      {/* Main Content Grid: Left Details & Right Visual */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch my-auto">
        {/* Left Column: Title, Role, Description, Tech Stack */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h3 className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-[#f4f4f7] tracking-tight leading-tight group-hover:text-[#00f0ff] transition-colors">
              {project.title}
            </h3>

            <p className="font-mono text-xs sm:text-sm text-[#00f0ff]/90 font-medium">
              {project.tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#a1a1aa] leading-relaxed line-clamp-3 sm:line-clamp-4 font-light pt-1">
              {project.summary}
            </p>
          </div>

          {/* Personal Role Attribution Notice */}
          <div className="rounded-lg border border-[#1c1c24] bg-[#08080c] p-3 text-xs font-mono">
            <span className="text-[#71717a] block text-[10px] uppercase tracking-wider">
              Mansi&apos;s Engineering Contribution:
            </span>
            <span className="text-[#f4f4f7] font-sans font-medium text-xs sm:text-sm">
              {project.role}
            </span>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded border border-[#2a2a36] bg-[#12121a] font-mono text-[10px] sm:text-xs text-[#a1a1aa]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Handcrafted Architectural Visual */}
        <div className="lg:col-span-6 min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] flex items-center justify-center">
          <ProjectVisual projectId={project.id} className="h-full shadow-lg" />
        </div>
      </div>

      {/* Bottom Actions Row */}
      <div className="relative z-10 flex items-center justify-between pt-6 mt-6 border-t border-[#1c1c24] font-mono text-xs">
        {/* Source Code Link */}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#a1a1aa] hover:text-[#00f0ff] transition-colors group/link"
        >
          <FolderGit2 className="w-3.5 h-3.5 text-[#71717a] group-hover/link:text-[#00f0ff] transition-colors" />
          <span>Source Repository</span>
          <ArrowUpRight className="w-3 h-3 text-[#71717a] group-hover/link:text-[#00f0ff] transition-colors" />
        </a>

        {/* Deep Link to Case Study Page */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#2a2a36] bg-[#14141e] hover:bg-[#1a1a28] hover:border-[#00f0ff]/50 text-[#f4f4f7] hover:text-[#00f0ff] transition-all group/case"
        >
          <span>Explore Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/case:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

export default ProjectPanel;
