import React from 'react';
import { HeroPlaceholder } from '@/components/hero/HeroPlaceholder';
import { IdentityCardPlaceholder } from '@/components/identity-card/IdentityCardPlaceholder';
import { ProjectsGalleryPlaceholder } from '@/components/projects/ProjectsGalleryPlaceholder';
import { AboutPlaceholder } from '@/components/about/AboutPlaceholder';
import { SkillsPlaceholder } from '@/components/skills/SkillsPlaceholder';
import { ContactPlaceholder } from '@/components/contact/ContactPlaceholder';
import { PageTransition } from '@/components/transitions/PageTransition';

export default function HomePage() {
  return (
    <PageTransition className="w-full flex flex-col space-y-8">
      <HeroPlaceholder />
      <IdentityCardPlaceholder />
      <ProjectsGalleryPlaceholder />
      <AboutPlaceholder />
      <SkillsPlaceholder />
      <ContactPlaceholder />
    </PageTransition>
  );
}
