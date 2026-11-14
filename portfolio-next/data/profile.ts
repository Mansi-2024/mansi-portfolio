/**
 * Mansi Konde — Creative Engineer Portfolio Profile Data
 * Grounded in verified repository facts, identity specifications, and asset status.
 */

export interface SocialLink {
  platform: string;
  label: string;
  url: string;
  status: 'verified' | 'pending_owner';
}

export interface ProfileData {
  name: string;
  wordmark: string;
  role: string;
  positioning: string;
  tagline: string;
  taglinePart1: string;
  taglinePart2: string;
  bio: string;
  supportingIntro: string;
  location: string;
  timezone: string;
  status: string;
  edition: string;
  email: {
    address: string;
    status: 'pending_confirmation' | 'verified';
    responseWindow: string;
  };
  socials: SocialLink[];
  assets: {
    portrait: {
      path: string;
      status: 'pending_upload';
      recommendedDimensions: string;
      aspectRatio: string;
    };
    resume: {
      path: string;
      status: 'pending_upload';
      format: string;
    };
  };
  navigation: {
    label: string;
    href: string;
    index: string;
  }[];
}

export const profileData: ProfileData = {
  name: 'Mansi Konde',
  wordmark: 'MK.',
  role: 'Software Developer',
  positioning: 'Software Developer | Full-Stack Development | Applied AI',
  tagline: 'Full-stack engineer building software that feels effortless',
  taglinePart1: 'Full-stack engineer',
  taglinePart2: 'building software that feels effortless',
  bio: 'An engineering student and software developer turning ideas into working applications across frontend and backend systems, applied AI, and practical software tools.',
  supportingIntro:
    'A software developer exploring ideas, solving problems, and building practical applications from frontend to backend.',
  location: 'India',
  timezone: '',
  status: 'Open to software development internships and fresher opportunities',
  edition: '',
  email: {
    address: 'contact@mansikonde.dev',
    status: 'pending_confirmation',
    responseWindow: '24 — 48 Hours',
  },
  socials: [
    {
      platform: 'GitHub',
      label: 'github.com/Mansi-2024',
      url: 'https://github.com/Mansi-2024',
      status: 'verified',
    },
    {
      platform: 'LinkedIn',
      label: 'LinkedIn Profile',
      url: '#',
      status: 'pending_owner',
    },
  ],
  assets: {
    portrait: {
      path: '/assets/mansi-konde.jpg',
      status: 'pending_upload',
      recommendedDimensions: '1200x1600px',
      aspectRatio: '3:4',
    },
    resume: {
      path: '/mansi-konde-resume.pdf',
      status: 'pending_upload',
      format: 'PDF',
    },
  },
  navigation: [
    { label: 'Work', href: '#work', index: '01' },
    { label: 'About', href: '#about', index: '02' },
    { label: 'Skills', href: '#skills', index: '03' },
    { label: 'Contact', href: '#contact', index: '04' },
  ],
};
