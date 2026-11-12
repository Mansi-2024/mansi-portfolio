/**
 * Little Explorer Character & Scroll Interaction Types
 */

export type ExplorerPose = 'exploring' | 'observing' | 'thinking' | 'building' | 'celebrating';

export interface PoseSpeechConfig {
  sectionId: string;
  pose: ExplorerPose;
  message: string;
  label: string;
}

export const SECTION_POSES: PoseSpeechConfig[] = [
  {
    sectionId: 'hero',
    pose: 'exploring',
    message: 'Curiosity brought me here.',
    label: 'Origin // Exploring',
  },
  {
    sectionId: 'work',
    pose: 'observing',
    message: "Let's see what this became.",
    label: 'Archive // Observing',
  },
  {
    sectionId: 'about',
    pose: 'thinking',
    message: 'Every good build starts with a question.',
    label: 'Philosophy // Thinking',
  },
  {
    sectionId: 'capabilities',
    pose: 'building',
    message: 'Tools change. Curiosity stays.',
    label: 'Workshop // Building',
  },
  {
    sectionId: 'contact',
    pose: 'celebrating',
    message: 'Have something interesting in mind?',
    label: 'Dialogue // Celebrating',
  },
];
