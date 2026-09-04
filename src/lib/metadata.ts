import { Metadata } from 'next';

export const siteMetadata: Metadata = {
  title: {
    default: 'Olasubomi Olubisi - Full Stack Developer',
    template: '%s | Olasubomi Olubisi',
  },
  description:
    'Web developer specializing in React, Next.js, and MERN Stack development. Building fast, scalable, and user-focused web applications.',
  keywords: [
    'Olasubomi Olubisi',
    'Web Developer',
    'Frontend Developer',
    'Full Stack Developer',
    'Next.js',
    'React',
    'JavaScript',
    'MERN Stack',
    'Portfolio',
  ],
  authors: [
    {
      name: 'Olasubomi Olubisi Khan',
    },
  ],
  creator: 'Olasubomi Olubisi',
  metadataBase: new URL('https://olasubomi.is-a.dev'),
  alternates: {
    canonical: './',
  },
  icons: {
    icon: '/logo.webp',
  },
  openGraph: {
    title: 'Olasubomi Olubisi - Full Stack Developer',
    description:
      'Portfolio of Olasubomi Olubisi, Full Stack Developer specializing in MERN stack, Next.js, and polished web experiences.',
    url: 'https://olasubomi.is-a.dev',
    siteName: 'Olasubomi Olubisi Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Olasubomi Olubisi - Full Stack Developer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olasubomi Olubisi - Full Stack Developer',
    description:
      'Portfolio of Olasubomi Olubisi, Full Stack Developer specializing in MERN stack, Next.js, and polished web experiences.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

