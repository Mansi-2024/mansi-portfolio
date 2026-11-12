import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { IdentityCard } from '@/components/identity-card/IdentityCard';
import { EditorialWorkIntro } from '@/components/projects/EditorialWorkIntro';
import { HorizontalProjects } from '@/components/projects/HorizontalProjects';
import { CapabilitiesSection } from '@/components/capabilities/CapabilitiesSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { PageTransition } from '@/components/transitions/PageTransition';

export default function HomePage() {
  return (
    <PageTransition className="w-full flex flex-col">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Interactive 3D Hanging Identity Card & Lanyard */}
      <IdentityCard />

      {/* 3. Editorial Transition: Selected Work Intro */}
      <EditorialWorkIntro />

      {/* 4. Horizontal Pinned Selected Work Gallery (6 Projects) */}
      <HorizontalProjects />

      {/* 5. Capabilities, Engineering Approach & Technical Stack */}
      <CapabilitiesSection />

      {/* 6. Contact Experience & Editorial Closing Statement */}
      <ContactSection />
    </PageTransition>
  );
}
