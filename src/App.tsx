import React from 'react';
import { SkipToContent } from './components/SkipToContent';
import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { SelectedWorkSection } from './sections/SelectedWorkSection';
import { AboutSection } from './sections/AboutSection';
import { CapabilitiesSection } from './sections/CapabilitiesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { LittleExplorerCompanion } from './components/character/LittleExplorerCompanion';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-midnight-plum text-warm-ivory flex flex-col selection:bg-dusty-rose selection:text-midnight-plum">
      <SkipToContent />
      <Navigation />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <SelectedWorkSection />
        <AboutSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>
      <Footer />
      <LittleExplorerCompanion />
    </div>
  );
};

export default App;
