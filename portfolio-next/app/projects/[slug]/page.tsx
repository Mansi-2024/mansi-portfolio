import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Compass,
  FileCode2,
  FolderGit2,
  Layers,
  Wrench,
  AlertCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} — Mansi Konde Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-28 pb-24 px-6 sm:px-8 max-w-5xl mx-auto w-full space-y-12">
      {/* Return to Gallery Link */}
      <div>
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs text-[#71717a] hover:text-[#00f0ff] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded px-2 py-1 border border-transparent hover:border-[#2a2a36]"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Selected Work</span>
        </Link>
      </div>

      {/* Header Banner */}
      <header className="space-y-4 border-b border-[#1c1c24] pb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#71717a]">
          <div className="flex items-center gap-2">
            <span className="text-[#00f0ff] font-bold">{project.number}</span>
            <span>/</span>
            <span className="uppercase text-[#f4f4f7]">{project.category}</span>
          </div>
          <span className="text-[10px] uppercase px-2.5 py-0.5 rounded border border-[#2a2a36] text-[#00f0ff] bg-[#00f0ff]/10">
            {project.statusBadge}
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-sans font-semibold text-[#f4f4f7] tracking-tight">
          {project.title}
        </h1>

        <p className="font-mono text-sm text-[#00f0ff] font-medium">
          {project.tagline}
        </p>

        <p className="font-sans text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-3xl font-light">
          {project.summary}
        </p>

        {/* Actions & Meta */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00f0ff]/60 bg-[#00f0ff]/10 hover:bg-[#00f0ff]/20 text-[#f4f4f7] font-mono text-xs uppercase tracking-wider transition-all"
          >
            <FolderGit2 className="w-4 h-4 text-[#00f0ff]" />
            <span>View GitHub Repository</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#a1a1aa]" />
          </a>

          <div className="font-mono text-xs text-[#71717a] flex items-center gap-2">
            <span>Role:</span>
            <span className="text-[#f4f4f7]">{project.role}</span>
          </div>
        </div>
      </header>

      {/* Tech Stack Pills */}
      <section aria-label="Technologies Used" className="space-y-2">
        <h2 className="font-mono text-xs uppercase text-[#71717a] tracking-wider">
          Technology Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded text-xs font-mono text-[#f4f4f7] bg-[#0e0e12] border border-[#2a2a36]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Grid: Context & Problem / Solution */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {/* Context & Problem */}
        <div className="p-6 rounded-xl border border-[#2a2a36] bg-[#0e0e12] space-y-4">
          <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Context & Problem</span>
          </div>
          <div className="space-y-3 font-sans text-sm text-[#a1a1aa] leading-relaxed font-light">
            <p>{project.contextAndProblem.problem}</p>
            <div className="pt-2 border-t border-[#1c1c24]">
              <strong className="text-[#f4f4f7] font-mono text-xs block mb-1">
                Why It Matters:
              </strong>
              <p className="text-xs">{project.contextAndProblem.whyItMatters}</p>
            </div>
          </div>
        </div>

        {/* Solution Overview */}
        <div className="p-6 rounded-xl border border-[#2a2a36] bg-[#0e0e12] space-y-4">
          <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Solution Architecture</span>
          </div>
          <p className="font-sans text-sm text-[#a1a1aa] leading-relaxed font-light">
            {project.solutionOverview.coreApproach}
          </p>
          <ul className="space-y-1.5 pt-2 border-t border-[#1c1c24]">
            {project.solutionOverview.keyCapabilities.map((cap, i) => (
              <li key={i} className="text-xs font-sans text-[#f4f4f7] flex items-start gap-2">
                <span className="text-[#00f0ff] mt-0.5">•</span>
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Workflow Architecture */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-[#f4f4f7] font-mono text-xs font-semibold uppercase tracking-wider">
          <FileCode2 className="w-4 h-4 text-[#00f0ff]" />
          <span>Execution Workflow</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {project.workflow.map((w) => (
            <div
              key={w.step}
              className="p-4 rounded-lg border border-[#2a2a36] bg-[#0e0e12] space-y-2"
            >
              <div className="font-mono text-xs text-[#00f0ff] font-bold">{w.step}</div>
              <div className="font-sans text-xs font-medium text-[#f4f4f7]">{w.title}</div>
              <p className="font-sans text-[11px] text-[#71717a] leading-relaxed font-light">
                {w.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Decisions */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center gap-2 text-[#f4f4f7] font-mono text-xs font-semibold uppercase tracking-wider">
          <Wrench className="w-4 h-4 text-[#00f0ff]" />
          <span>Key Technical Decisions</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.technicalDecisions.map((decision, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-[#2a2a36] bg-[#0e0e12] space-y-2"
            >
              <div className="font-mono text-xs text-[#f4f4f7] font-medium">
                {decision.title}
              </div>
              <p className="font-sans text-xs text-[#a1a1aa] leading-relaxed font-light">
                {decision.rationale}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mansi's Personal Contribution */}
      <section className="p-6 rounded-xl border border-[#00f0ff]/30 bg-[#00f0ff]/5 space-y-4">
        <div className="flex items-center gap-2 text-[#00f0ff] font-mono text-xs font-semibold uppercase tracking-wider">
          <CheckCircle2 className="w-4 h-4" />
          <span>Mansi&apos;s Engineering Contribution</span>
        </div>
        <p className="font-sans text-sm text-[#f4f4f7] leading-relaxed">
          {project.mansiContribution.summary}
        </p>
        <ul className="space-y-1.5 pt-2 border-t border-[#00f0ff]/20">
          {project.mansiContribution.highlights.map((h, i) => (
            <li key={i} className="text-xs font-sans text-[#a1a1aa] flex items-start gap-2 font-light">
              <span className="text-[#00f0ff] mt-0.5">•</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Implementation Status & Synthetic Notes */}
      {project.implementationStatusDetails.syntheticOrDemoNotes && (
        <aside
          aria-label="Implementation Status Notice"
          className="p-4 rounded-lg border border-[#2a2a36] bg-[#08080a] font-mono text-xs text-[#71717a] flex items-start gap-3"
        >
          <AlertCircle className="w-4 h-4 text-[#00f0ff] flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {project.implementationStatusDetails.syntheticOrDemoNotes}
          </p>
        </aside>
      )}

      {/* Footer Return Link */}
      <div className="pt-8 border-t border-[#1c1c24] flex items-center justify-between font-mono text-xs">
        <Link
          href="/#work"
          className="text-[#a1a1aa] hover:text-[#00f0ff] transition-colors"
        >
          ← Return to Selected Work Archive
        </Link>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00f0ff] hover:underline"
        >
          Inspect Code on GitHub →
        </a>
      </div>
    </article>
  );
}
