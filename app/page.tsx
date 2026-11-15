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
    <PageTransition className="w-full block">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Interactive 3D Hanging Identity Card & Lanyard */}
      <IdentityCard />

      {/* 3. Editorial Transition: Projects Intro */}
      <EditorialWorkIntro />

      {/* 4. Horizontal Pinned Projects Gallery (6 Projects) */}
      <HorizontalProjects />

      {/* 5. Capabilities, Engineering Approach & Technical Stack */}
      <CapabilitiesSection />

      {/* 6. Contact Experience */}
      <ContactSection />
    </PageTransition>
  );
}
