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
  role: 'Creative Engineer',
  positioning: 'Creative Engineer & Systems Architect',
  tagline: 'Full-stack engineer building software that feels effortless',
  taglinePart1: 'Full-stack engineer',
  taglinePart2: 'building software that feels effortless',
  bio: 'An engineering student and creative developer exploring ideas, building practical software, and learning through engineering.',
  supportingIntro:
    'A creative engineer exploring ideas, solving problems and building experiences through technology.',
  location: 'India',
  timezone: '',
  status: 'Open to software engineering roles and collaborative projects',
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
