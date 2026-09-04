export const site = {
  name: 'Olasubomi Olubisi',
  firstName: 'Olasubomi',
  lastName: 'Olubisi',
  handle: 'codeheart',
  brand: 'olasubomi.is-a.dev',
  email: 'codeheart@unmoveabletech.com',
  location: 'South Africa',
  timeZone: 'Africa/Johannesburg',
  timeZoneLabel: 'SAST',
  url: 'https://olasubomi.is-a.dev',
  tagline: 'Full Stack Product Developer crafting fast, expressive web experiences.',
  roles: [
    'Full Stack Product Developer',
    'Product Manager',
    'React & Next.js Engineer',
    'Full Stack Developer',
    'Open to Work Worldwide',
  ],
} as const;

export type SocialKey = 'github' | 'linkedin' | 'instagram' | 'source';

export const socials: Record<SocialKey, { label: string; href: string }> = {
  github: { label: 'GitHub', href: 'https://github.com/firstaxel' },
  linkedin: { label: 'Linkedin', href: 'https://linkedin.com/in/olasubomi-olubisi' },
  instagram: { label: 'Instagram', href: 'https://instagram.com/iamolasubomiolubisi' },
  source: { label: 'Source Code', href: 'https://github.com/firstaxel/my-portfolio' },
};

export const socialList: Array<{ label: string; href: string }> = [
  socials.linkedin,
  socials.instagram,
  socials.github,
  socials.source,
];

export const navLinks = [
  { name: 'Home', href: '/#top', menuOnly: true },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Work', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
] as const;
