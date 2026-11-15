'use client';

import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { ProjectDiagramDispatcher } from './ProjectDiagrams';
import { ArrowUpRight, ArrowRight, Users, User } from 'lucide-react';

interface ProjectPanelProps {
  project: Project;
  index: number;
  total: number;
  className?: string;
}

/**
 * ProjectPanel Component — Large Editorial Presentation
 *
 * Implements:
 * - Asymmetric editorial layout with authentic architectural SVG diagrams
 * - Verified project metadata, tech stack pills, and factual contribution role
 * - Direct authenticated GitHub repository link and Case Study deep link
 * - Warm layered charcoal palette with whisper-quiet borders
 */
export function ProjectPanel({ project, index, total, className = '' }: ProjectPanelProps) {
  return (
    <article
      aria-label={`Project ${project.number}: ${project.title}`}
      className={`group relative flex-shrink-0 w-[88vw] sm:w-[82vw] md:w-[76vw] lg:w-[960px] xl:w-[1020px] lg:h-[580px] rounded-xl border border-white/[0.08] bg-[#121214] p-6 sm:p-7 lg:p-8 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Top Header Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-3 mb-4">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-[#38BDF8] uppercase tracking-wider text-[11px] font-medium">
            {project.category}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px]">
          <span className="inline-flex items-center px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.02] text-[#A1A1AA]">
            {project.statusBadge}
          </span>
        </div>
      </div>

      {/* Main Content Grid: Left Narrative Column & Right Standardized Diagram Container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch my-auto flex-1">
        {/* Left Column: Title, Role, Description, Tech Stack */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4 py-1">
          <div className="space-y-2">
            <h3 className="font-sans font-semibold text-2xl sm:text-3xl text-[#F4F4F5] tracking-tight leading-tight group-hover:text-white transition-colors">
              {project.title}
            </h3>

            <p className="font-serif italic text-sm sm:text-base text-[#D4D4D8] leading-snug">
              {project.tagline}
            </p>

            <p className="font-sans text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3 font-normal pt-1">
              {project.summary}
            </p>
          </div>

          {/* Personal Role Attribution Notice */}
          <div className="rounded-lg border border-white/[0.06] bg-[#18181B] p-3 text-xs font-mono">
            <span className="text-[#71717A] block text-[10px] uppercase tracking-wider">
              Mansi&apos;s Engineering Contribution:
            </span>
            <span className="text-[#F4F4F5] font-sans font-medium text-xs sm:text-sm mt-0.5 block">
              {project.role}
            </span>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Technologies used">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded border border-white/[0.08] bg-white/[0.02] font-mono text-[10px] sm:text-xs text-[#A1A1AA]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Standardized Stage for Bespoke Visualizer */}
        <div className="lg:col-span-6 flex items-center justify-center h-[380px] lg:h-full">
          <div className="w-full h-[380px]">
            <ProjectDiagramDispatcher projectId={project.id} />
          </div>
        </div>
      </div>

      {/* Bottom Footer Action Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pt-4 mt-4 border-t border-white/[0.06]">
        <div className="flex items-center gap-3 font-mono text-xs">
          {/* External Verified Repository Link */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/15 hover:border-white/50 bg-white/[0.03] text-xs font-mono text-[#F4F4F5] hover:text-white transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8]"
            aria-label={`View ${project.title} on GitHub (opens in new tab)`}
          >
            <span>View Source Code</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A]" aria-hidden="true" />
          </a>

          {/* Live Demo Link (if available) */}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-xs font-mono text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors"
            >
              <span>{project.demoLabel || 'Live Preview'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        {/* Read Architecture Deep Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA] hover:text-[#F4F4F5] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#38BDF8] py-1"
          aria-label={`Read full architectural case study for ${project.title}`}
        >
          <span>Read Full Architecture</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export default ProjectPanel;
