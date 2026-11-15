import React from 'react';
import { skillsCategories } from '@/data/skills';
import { Code2 } from 'lucide-react';

export function SkillsPlaceholder() {
  return (
    <section
      id="skills"
      aria-label="Capabilities and Technical Competencies"
      className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-[#1c1c24]"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between pb-6 mb-12 border-b border-[#1c1c24] font-mono text-xs text-[#71717a]">
        <div className="flex items-center gap-2">
          <span className="text-[#00f0ff] font-bold">03</span>
          <span>/</span>
          <span className="uppercase tracking-widest text-[#f4f4f7]">Capabilities</span>
        </div>
        <span className="hidden sm:inline">TECHNICAL COMPETENCIES</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsCategories.map((category) => (
          <div
            key={category.id}
            className="rounded-xl border border-[#2a2a36] bg-[#0e0e12] p-6 sm:p-8 flex flex-col justify-between space-y-6"
          >
            <div>
              <div className="flex items-center justify-between font-mono text-xs text-[#71717a] mb-3">
                <span className="text-[#00f0ff]">{category.index}</span>
                <Code2 className="w-3.5 h-3.5 text-[#71717a]" />
              </div>
              <h3 className="text-xl font-sans font-semibold text-[#f4f4f7] mb-2">
                {category.name}
              </h3>
              <p className="text-xs text-[#a1a1aa] font-light leading-relaxed mb-6">
                {category.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-[#1c1c24]">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between text-xs font-mono py-1 border-b border-[#1c1c24]/50"
                >
                  <span className="text-[#f4f4f7]">{skill.name}</span>
                  {skill.focus && (
                    <span className="text-[10px] text-[#71717a]">{skill.focus}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsPlaceholder;
