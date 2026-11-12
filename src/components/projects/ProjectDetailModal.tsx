import React, { useEffect, useRef } from 'react';
import { Project } from '../../data/projects';
import { ProjectVisual } from './ProjectVisual';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Compass,
  FileCode2,
  Layers,
  Sparkles,
  Users,
  Wrench,
  X,
  AlertCircle,
} from 'lucide-react';

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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    // Focus close button initially
    const closeBtn = modalRef.current?.querySelector<HTMLButtonElement>('[data-close-btn]');
    closeBtn?.focus();

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 overflow-y-auto animate-fade-in"
    >
      {/* Darkened Plum Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-midnight-plum/85 backdrop-blur-md transition-opacity"
        aria-hidden="true"
      />

      {/* Modal Dialog Content Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl border border-border-plum bg-midnight-plum p-6 sm:p-10 text-warm-ivory shadow-2xl shadow-midnight-plum/95 z-10 space-y-10"
      >
        {/* Sticky Header Close & Back Navigation */}
        <div className="sticky top-0 z-20 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 px-6 sm:px-10 py-4 bg-midnight-plum/95 backdrop-blur-md border-b border-border-plum/70 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="group inline-flex items-center gap-2 text-xs font-mono text-ash-mauve hover:text-warm-ivory transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-dusty-rose group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Selected Work</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-ash-mauve/70 hidden sm:inline">
              MK-FOLIO // CASE STUDY 0{project.number}
            </span>
            <button
              data-close-btn
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full border border-border-plum hover:border-dusty-rose bg-aubergine/60 text-ash-mauve hover:text-warm-ivory transition-colors"
              aria-label="Close case study dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Project Introduction & Key Metadata */}
        <section aria-labelledby="case-study-title" className="space-y-4 pt-2">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[10px] sm:text-[11px] text-ash-mauve">
            <span className="font-serif text-2xl text-dusty-rose">/{project.number}</span>
            <span className="text-border-plum">·</span>
            <span className="uppercase text-warm-ivory tracking-widest">{project.category}</span>
            <span className="text-border-plum">·</span>
            <span className="px-2.5 py-0.5 rounded border border-border-plum/70 bg-aubergine/70 text-ash-mauve">
              {project.statusBadge}
            </span>
            {project.collaborative && (
              <span className="px-2.5 py-0.5 rounded-full border border-soft-lavender/40 bg-aubergine/70 text-soft-lavender inline-flex items-center gap-1">
                <Users className="w-3 h-3" />
                <span>Collaborative Repository</span>
              </span>
            )}
          </div>

          <h2
            id="case-study-title"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-warm-ivory tracking-tight leading-[1.08]"
          >
            {project.title}
          </h2>

          <p className="font-mono text-sm sm:text-base text-dusty-rose tracking-wide">
            {project.tagline}
          </p>

          <p className="font-sans text-base sm:text-lg text-ash-mauve leading-relaxed max-w-3xl">
            {project.positioning}
          </p>

          {/* Quick Action Links Bar */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-dusty-rose/60 bg-aubergine hover:bg-raised-plum text-warm-ivory text-xs font-mono uppercase tracking-wider transition-all shadow-md group"
            >
              <GithubIcon className="w-4 h-4 text-dusty-rose" />
              <span>Inspect Source Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-ash-mauve group-hover:text-dusty-rose transition-colors" />
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-plum hover:border-dusty-rose bg-midnight-plum text-warm-ivory text-xs font-mono tracking-wider transition-colors"
              >
                <span>{project.demoLabel || 'Live Demo'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-dusty-rose" />
              </a>
            )}
          </div>
        </section>

        {/* 2. Problem & Context */}
        <section className="p-6 sm:p-8 rounded-xl border border-border-plum bg-aubergine/30 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Problem &amp; Context</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
            <div>
              <h4 className="font-serif text-xl text-warm-ivory mb-2">The Underlying Problem</h4>
              <p className="font-sans text-sm sm:text-base text-ash-mauve leading-relaxed">
                {project.contextAndProblem.problem}
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl text-warm-ivory mb-2">Why It Matters</h4>
              <p className="font-sans text-sm sm:text-base text-ash-mauve leading-relaxed">
                {project.contextAndProblem.whyItMatters}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Solution Overview & Architectural Diagram */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Solution Architecture &amp; Key Capabilities</span>
          </div>

          <p className="font-sans text-base text-ash-mauve leading-relaxed max-w-3xl">
            {project.solutionOverview.coreApproach}
          </p>

          {/* Architectural Vector Visual */}
          <div className="my-6">
            <ProjectVisual projectId={project.id} variant="modal" />
          </div>

          {/* Key Capabilities List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {project.solutionOverview.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-border-plum/60 bg-aubergine/40 font-sans text-xs text-ash-mauve leading-relaxed flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-dusty-rose shrink-0 mt-0.5" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Sequential System Workflow */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <Clock className="w-4 h-4" />
            <span>System Pipeline Workflow</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.workflow.map((item) => (
              <div
                key={item.step}
                className="p-4 rounded-lg border border-border-plum bg-aubergine/30 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-dusty-rose font-semibold block mb-2">
                    STEP {item.step}
                  </span>
                  <h5 className="font-serif text-base text-warm-ivory mb-2">{item.title}</h5>
                  <p className="font-sans text-xs text-ash-mauve leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Key Engineering Decisions & Trade-offs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <Wrench className="w-4 h-4" />
            <span>Key Engineering Decisions</span>
          </div>

          <div className="space-y-3">
            {project.technicalDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg border border-border-plum/60 bg-aubergine/25 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="sm:w-1/3">
                  <span className="font-serif text-base text-warm-ivory block">
                    {decision.title}
                  </span>
                </div>
                <div className="sm:w-2/3">
                  <p className="font-sans text-xs sm:text-sm text-ash-mauve leading-relaxed">
                    {decision.rationale}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Technology Stack */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <FileCode2 className="w-4 h-4" />
            <span>Documented Technology Stack</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-md border border-border-plum bg-aubergine/60 font-mono text-xs text-warm-ivory"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* 7. Mansi's Personal Contribution (Strictly Verified) */}
        <section className="p-6 sm:p-8 rounded-xl border border-dusty-rose/40 bg-raised-plum/30 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Verified Contribution Scope</span>
            </div>
            <span className="font-mono text-[10px] text-warm-ivory/80">{project.role}</span>
          </div>

          <p className="font-sans text-sm sm:text-base text-warm-ivory leading-relaxed">
            {project.mansiContribution.summary}
          </p>

          <ul className="space-y-2 pt-1">
            {project.mansiContribution.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 font-sans text-xs sm:text-sm text-ash-mauve">
                <span className="w-1.5 h-1.5 rounded-full bg-dusty-rose shrink-0 mt-2" />
                <span className="leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 8. Current Implementation Status & Stubs */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>Current Implementation Status</span>
          </div>

          <div className="p-5 rounded-lg border border-border-plum bg-aubergine/20 space-y-3 font-sans text-xs text-ash-mauve">
            <div className="font-mono text-xs text-warm-ivory font-medium">
              STATUS: {project.implementationStatusDetails.currentStatus}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div>
                <span className="font-mono text-[11px] text-dusty-rose uppercase block mb-2">
                  Implemented Foundations:
                </span>
                <ul className="space-y-1.5">
                  {project.implementationStatusDetails.implementedFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-dusty-rose">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-mono text-[11px] text-ash-mauve/70 uppercase block mb-2">
                  Planned / Stubbed Horizons:
                </span>
                <ul className="space-y-1.5">
                  {project.implementationStatusDetails.plannedOrStubbedFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-ash-mauve/70">
                      <span>○</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {project.implementationStatusDetails.syntheticOrDemoNotes && (
              <div className="mt-4 pt-3 border-t border-border-plum/50 flex items-start gap-2 text-ash-mauve/80 text-[11px]">
                <AlertCircle className="w-3.5 h-3.5 text-dusty-rose shrink-0 mt-0.5" />
                <p>{project.implementationStatusDetails.syntheticOrDemoNotes}</p>
              </div>
            )}
          </div>
        </section>

        {/* 9. Challenges and Technical Learnings */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-dusty-rose uppercase tracking-widest">
            <Compass className="w-4 h-4" />
            <span>Technical Challenges &amp; Learnings</span>
          </div>

          <div className="space-y-2">
            {project.challengesAndLearnings.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg border border-border-plum/40 bg-aubergine/20 font-sans text-xs text-ash-mauve leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 10. Bottom Action Bar */}
        <div className="pt-6 border-t border-border-plum flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-border-plum hover:border-dusty-rose bg-aubergine text-warm-ivory font-mono text-xs uppercase tracking-wider transition-colors"
          >
            ← Return to Selected Work
          </button>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-dusty-rose bg-raised-plum hover:bg-aubergine text-warm-ivory font-mono text-xs uppercase tracking-wider transition-all shadow-lg text-center"
          >
            <GithubIcon className="w-4 h-4 text-dusty-rose" />
            <span>View GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-ash-mauve" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
