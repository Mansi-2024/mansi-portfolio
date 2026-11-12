import React, { useState, Suspense, lazy } from 'react';
import { Project, projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { Sparkles, Terminal } from 'lucide-react';

const ProjectDetailModal = lazy(() => import('../components/projects/ProjectDetailModal'));

export const SelectedWorkSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories: { label: string; value: string; count: number }[] = [
    { label: 'All Inquiries', value: 'All', count: projectsData.length },
    {
      label: 'Security & Trust',
      value: 'Security & Trust',
      count: projectsData.filter((p) => p.category === 'Security & Trust').length,
    },
    {
      label: 'AI & Verification',
      value: 'AI & Verification',
      count: projectsData.filter((p) => p.category === 'AI & Verification').length,
    },
    {
      label: 'Climate & Simulation',
      value: 'Climate & Simulation',
      count: projectsData.filter(
        (p) => p.category === 'Climate & Agriculture' || p.category === 'Immersive Simulation'
      ).length,
    },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Climate & Simulation') {
      return (
        project.category === 'Climate & Agriculture' || project.category === 'Immersive Simulation'
      );
    }
    return project.category === activeCategory;
  });

  const featuredProject = filteredProjects.find((p) => p.isFeatured);
  const remainingProjects = filteredProjects.filter((p) => !p.isFeatured);

  return (
    <section
      id="work"
      aria-label="Selected Work Archive"
      className="relative pt-24 sm:pt-32 pb-24 px-4 sm:px-8 max-w-7xl mx-auto border-t border-border-plum"
    >
      {/* 1. Top Editorial Index Notch */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-10 border-b border-border-plum/50 font-mono text-xs text-ash-mauve">
        <div className="flex items-center gap-2">
          <span className="font-serif text-xl text-dusty-rose font-medium">01</span>
          <span className="text-border-plum">/</span>
          <span className="tracking-widest uppercase text-warm-ivory">Selected Work</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="hidden sm:inline text-ash-mauve/70 font-mono">INDEX: 2024 — 2026</span>
          <span className="px-2.5 py-0.5 rounded-full border border-border-plum/70 bg-aubergine/50 text-dusty-rose font-mono">
            6 Verified Inquiries
          </span>
        </div>
      </div>

      {/* 2. Editorial Headline & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-12">
        <div className="lg:col-span-8">
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-warm-ivory tracking-tight leading-[1.06]">
            Selected inquiries turned into{' '}
            <span className="italic text-dusty-rose font-normal decoration-dusty-rose/40 underline decoration-1 underline-offset-4 sm:underline-offset-8">
              interactive realities.
            </span>
          </h2>
        </div>

        <div className="lg:col-span-4 lg:pt-3 space-y-4">
          <p className="font-sans text-base sm:text-lg text-ash-mauve leading-relaxed">
            An engineering portfolio of six verified technical inquiries spanning financial scam prevention,
            AI patch verification engines, climate risk modeling, and spatial simulation architectures.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-ash-mauve/80 pt-1">
            <Terminal className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
            <span>Strict Evidence Provenance · No Fabricated Metrics</span>
          </div>
        </div>
      </div>

      {/* 3. Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 border-b border-border-plum/30 scrollbar-none font-mono text-xs">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3.5 py-1.5 rounded-full border transition-all duration-200 shrink-0 flex items-center gap-1.5 ${
                isActive
                  ? 'border-dusty-rose bg-aubergine text-warm-ivory shadow-sm'
                  : 'border-border-plum/60 bg-transparent text-ash-mauve hover:text-warm-ivory hover:border-border-plum'
              }`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-dusty-rose/20 text-dusty-rose' : 'bg-aubergine text-ash-mauve/70'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 4. Projects Showcase Container */}
      <div className="space-y-8 sm:space-y-12">
        {/* Primary Featured Case Study (Project 01: RakshaScan) */}
        {featuredProject && (
          <div className="w-full">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] text-dusty-rose uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Primary Featured Case Study</span>
            </div>
            <ProjectCard project={featuredProject} onOpenCaseStudy={setActiveModalProject} />
          </div>
        )}

        {/* Secondary Asymmetric Editorial Grid (Projects 02–06) */}
        {remainingProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4">
            {remainingProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setActiveModalProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* 5. Detailed Case Study Modal View */}
      {activeModalProject && (
        <Suspense fallback={null}>
          <ProjectDetailModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
};

export default SelectedWorkSection;
