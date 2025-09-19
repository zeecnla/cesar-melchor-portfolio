import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
  keywords?: string[];
}

export const generateMetadata = ({
  title = 'Cesar Melchor - Enterprise Full-Stack Developer & SEO Expert',
  description = 'Professional full-stack developer with 8+ years of experience. Specializing in simple websites, SEO optimization, ASP.NET MVC, React, Next.js, and enterprise applications. Available for projects of all sizes.',
  url = 'https://cesarmelchor.me',
  image = '/images/og-image.png',
  type = 'website' as const,
  keywords = ['simple website developer', 'business website', 'SEO optimization', 'enterprise developer', 'full-stack developer', 'ASP.NET MVC', 'React', 'Next.js', 'SQL Server', 'system integration', 'custom solutions', 'web development', 'consulting', 'freelance developer', 'web design', 'search engine optimization']
}: SEOProps = {}): Metadata => {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Cesar Melchor' }],
    creator: 'Cesar Melchor',
    publisher: 'Cesar Melchor',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Cesar Melchor - Full-Stack Developer',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: 'Cesar Melchor - Enterprise Full-Stack Developer & SEO Expert',
        },
      ],
      locale: 'en_US',
      type: type as 'website',
      countryName: 'United States',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@zeecnla',
      site: '@zeecnla',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
  };
};

export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Cesar Melchor',
    jobTitle: 'Full-Stack Developer',
    description: 'Professional full-stack developer specializing in React, Next.js, Node.js, and modern web technologies.',
    url: 'https://cesarmelchor.me',
    sameAs: [
      'https://twitter.com/zeecnla',
      'https://github.com/zeecnla',
      'https://www.youtube.com/@zeecnla',
      'https://www.twitch.tv/zeecnla',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Full-Stack Development',
    ],
    offers: {
      '@type': 'Service',
      name: 'Web Development Services',
      description: 'Full-stack web development, consulting, and technical solutions.',
    },
  };
};
