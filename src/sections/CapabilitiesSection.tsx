import React from 'react';
import { CheckCircle2, Code2, Cpu, Eye, Layers } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const capabilityGroups = [
    {
      title: 'Frontend Engineering',
      icon: Code2,
      description: 'Modern, type-safe client applications built with clean architecture, high modularity, and zero bloat.',
      skills: ['React 19 & TypeScript', 'Vite & Modern Bundlers', 'State Modeling & Hooks', 'Performance Profiling'],
    },
    {
      title: 'Motion & Interaction Craft',
      icon: Cpu,
      description: 'Sophisticated choreography that guides user attention without resorting to generic templates.',
      skills: ['GSAP & ScrollTrigger', 'Timeline Sequencing', 'Micro-Interactions', 'Reduced-Motion Adaptation'],
    },
    {
      title: 'Design Systems & Tokens',
      icon: Layers,
      description: 'Living design token infrastructures that bridge typographic scales, palettes, and component states.',
      skills: ['Tailwind CSS v4 & @theme', 'Semantic Color Hierarchies', 'Fluid Typographic Scales', 'Component Libraries'],
    },
    {
      title: 'Web Standards & A11y',
      icon: Eye,
      description: 'Interfaces engineered for universal accessibility, semantic purity, and keyboard navigability.',
      skills: ['WCAG 2.1 AA Compliance', 'Accessible Focus Systems', 'Semantic HTML5', 'Responsive Viewport Logic'],
    },
  ];

  return (
    <section
      id="capabilities"
      aria-label="Capabilities and Technical Competencies"
      className="relative pt-24 pb-20 px-6 sm:px-8 max-w-7xl mx-auto border-t border-border-plum"
    >
      {/* Top Section Index Notch */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-border-plum/40 font-mono text-xs text-ash-mauve">
        <div className="flex items-center gap-2">
          <span className="text-dusty-rose font-bold">03</span>
          <span className="text-border-plum">/</span>
          <span className="tracking-widest uppercase text-warm-ivory">Capabilities</span>
        </div>
        <span className="text-ash-mauve/70 font-mono hidden sm:inline">
          ENGINEERING &amp; DESIGN DISCIPLINES
        </span>
      </div>

      <div className="mb-14 max-w-3xl">
        <h2 className="font-serif text-4xl sm:text-6xl font-normal text-warm-ivory tracking-tight leading-[1.1]">
          Disciplined engineering,{' '}
          <span className="italic text-dusty-rose font-normal">elevated craft.</span>
        </h2>
        <p className="mt-4 font-sans text-base sm:text-lg text-ash-mauve leading-relaxed">
          A focused overview of technical tools, design methodologies, and implementation practices applied across every digital artifact.
        </p>
      </div>

      {/* Grid of 4 Capability Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilityGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-lg border border-border-plum bg-aubergine/30 hover:border-dusty-rose/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-ash-mauve pb-4 border-b border-border-plum/40 mb-5">
                  <div className="flex items-center gap-2 text-dusty-rose">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span className="uppercase tracking-wider font-semibold">{group.title}</span>
                  </div>
                  <span>/0{idx + 1}</span>
                </div>

                <p className="font-sans text-sm text-ash-mauve leading-relaxed mb-6">
                  {group.description}
                </p>
              </div>

              {/* Skill Checklist */}
              <ul className="space-y-2.5 pt-4 border-t border-border-plum/30 font-mono text-xs text-warm-ivory/90">
                {group.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-dusty-rose shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
