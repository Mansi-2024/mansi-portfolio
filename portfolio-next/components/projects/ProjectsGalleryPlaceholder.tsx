import React from 'react';
import { projectsData } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { Layers } from 'lucide-react';

export function ProjectsGalleryPlaceholder() {
  return (
    <section
      id="work"
      aria-label="Selected Work Archive"
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1c1c24]"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-12 border-b border-[#1c1c24]">
        <div className="space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[#71717a]">
            <span className="text-[#00f0ff] font-bold">01</span>
            <span>/</span>
            <span className="uppercase tracking-widest text-[#f4f4f7]">Selected Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-sans font-semibold text-[#f4f4f7] tracking-tight">
            Engineering Inquiry Archive
          </h2>
        </div>
        <div className="font-mono text-xs text-[#71717a] flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#00f0ff]" />
          <span>{projectsData.length} Verified Case Studies</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsGalleryPlaceholder;
