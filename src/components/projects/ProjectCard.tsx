import React from 'react';
import { Project } from '../../data/projects';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight, BookOpen, Sparkles, Users } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const isPrimary = project.isFeatured;

  return (
    <article
      className={`group relative rounded-xl border border-border-plum bg-aubergine/35 hover:bg-aubergine/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-midnight-plum/70 hover:border-dusty-rose/50 ${
        isPrimary ? 'p-6 sm:p-8 lg:p-10' : 'p-6 sm:p-7'
      }`}
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Top Editorial Index Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 sm:pb-5 border-b border-border-plum/60 font-mono text-[10px] sm:text-[11px] text-ash-mauve">
        <div className="flex items-center gap-2">
          <span className="font-serif text-lg sm:text-xl text-dusty-rose font-medium">
            /{project.number}
          </span>
          <span className="text-border-plum">·</span>
          <span className="tracking-widest uppercase text-warm-ivory/90">{project.category}</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          {project.collaborative ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-soft-lavender/40 bg-aubergine/70 text-soft-lavender text-[9px] sm:text-[10px]">
              <Users className="w-3 h-3" aria-hidden="true" />
              <span>Collaborative Work</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-dusty-rose/40 bg-aubergine/70 text-dusty-rose text-[9px] sm:text-[10px]">
              <Sparkles className="w-3 h-3" aria-hidden="true" />
              <span>Lead Architecture</span>
            </span>
          )}

          <span className="px-2 py-0.5 rounded border border-border-plum/70 bg-midnight-plum/60 text-ash-mauve text-[9px] sm:text-[10px]">
            {project.statusBadge}
          </span>
        </div>
      </div>

      {/* Main Body Layout: Split on Primary Featured, Stacked on Standard */}
      <div
        className={`my-6 ${
          isPrimary ? 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center' : 'space-y-6'
        }`}
      >
        {/* Narrative Side */}
        <div className={isPrimary ? 'lg:col-span-7 flex flex-col justify-between' : 'space-y-4'}>
          <div>
            <h3
              id={`project-title-${project.id}`}
              className={`font-serif tracking-tight text-warm-ivory group-hover:text-dusty-rose transition-colors duration-200 ${
                isPrimary ? 'text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1]' : 'text-2xl sm:text-3xl'
              }`}
            >
              {project.title}
            </h3>

            <p className="font-mono text-xs text-dusty-rose/90 mt-1.5 tracking-wide">
              {project.tagline}
            </p>

            <p className="font-sans text-sm sm:text-base text-ash-mauve mt-4 leading-relaxed font-normal">
              {project.summary}
            </p>
          </div>

          {/* Highlights Checklist */}
          <div className="mt-5 space-y-2 font-sans text-xs text-warm-ivory/80">
            {project.keyHighlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose/80 shrink-0 mt-1.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>

          {/* Role Specification Callout */}
          <div className="mt-5 pt-3 border-t border-border-plum/40 font-mono text-[10px] sm:text-[11px] text-ash-mauve">
            <span className="text-ash-mauve/70 uppercase">Role // </span>
            <span className="text-warm-ivory">{project.role}</span>
          </div>
        </div>

        {/* Visual Architectural Composition Side */}
        <div className={isPrimary ? 'lg:col-span-5' : 'w-full'}>
          <ProjectVisual projectId={project.id} variant={isPrimary ? 'modal' : 'card'} />
        </div>
      </div>

      {/* Card Footer: Tech Stack & Actions */}
      <div className="pt-4 border-t border-border-plum/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[10px] font-mono text-ash-mauve/90 bg-aubergine border border-border-plum/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end shrink-0">
          {/* GitHub Repository Link */}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border-plum hover:border-dusty-rose/60 bg-aubergine/70 text-ash-mauve hover:text-warm-ivory text-xs font-mono transition-colors"
            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
          >
            <GithubIcon className="w-3.5 h-3.5 text-dusty-rose" />
            <span>Repository</span>
            <ArrowUpRight className="w-3 h-3 text-ash-mauve" aria-hidden="true" />
          </a>

          {/* Detailed Case Study Trigger */}
          <button
            type="button"
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-dusty-rose/50 bg-raised-plum/80 hover:bg-raised-plum hover:border-dusty-rose text-warm-ivory text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-md group/btn"
            aria-haspopup="dialog"
          >
            <BookOpen className="w-3.5 h-3.5 text-dusty-rose group-hover/btn:scale-110 transition-transform" />
            <span>Case Study</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
