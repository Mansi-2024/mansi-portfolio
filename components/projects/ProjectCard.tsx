import React from 'react';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group relative rounded-xl border border-[#2a2a36] bg-[#0e0e12] hover:border-[#3f3f50] p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between"
      aria-labelledby={`project-title-${project.slug}`}
    >
      <div>
        {/* Top Header Notch */}
        <div className="flex items-center justify-between font-mono text-xs text-[#71717a] mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[#00f0ff] font-bold">{project.number}</span>
            <span>/</span>
            <span className="uppercase tracking-wider">{project.category}</span>
          </div>
          <span className="text-[10px] uppercase px-2 py-0.5 rounded border border-[#2a2a36] text-[#a1a1aa] bg-[#16161d]">
            {project.statusBadge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3
          id={`project-title-${project.slug}`}
          className="text-2xl font-sans font-semibold text-[#f4f4f7] group-hover:text-[#00f0ff] transition-colors"
        >
          {project.title}
        </h3>

        <p className="font-mono text-xs text-[#00f0ff]/80 mt-1 mb-3">
          {project.tagline}
        </p>

        <p className="font-sans text-sm text-[#a1a1aa] leading-relaxed line-clamp-3 mb-6 font-light">
          {project.summary}
        </p>
      </div>

      <div>
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-[#a1a1aa] bg-[#16161d] border border-[#2a2a36]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#1c1c24] text-xs font-mono">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-[#f4f4f7] hover:text-[#00f0ff] transition-colors"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#71717a]" />
          </Link>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#71717a] hover:text-[#00f0ff] transition-colors"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
