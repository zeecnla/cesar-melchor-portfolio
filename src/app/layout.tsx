import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../styles/globals.css';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = generateSEOMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="Los Angeles" />
        <meta name="geo.position" content="34.0522;-118.2437" />
        <meta name="ICBM" content="34.0522, -118.2437" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Cesar Melchor',
              jobTitle: 'Enterprise Full-Stack Developer',
              description: 'Professional full-stack developer with 8+ years of experience specializing in ASP.NET MVC, React, Next.js, and enterprise system integration.',
              url: 'https://cesarmelchor.me',
              sameAs: [
                'https://twitter.com/zeecnla',
                'https://github.com/zeecnla',
                'https://www.youtube.com/@zeecnla',
                'https://www.twitch.tv/zeecnla',
              ],
              knowsAbout: [
                'ASP.NET MVC',
                'React',
                'Next.js',
                'SQL Server',
                'Web APIs',
                'System Integration',
                'Enterprise Development',
                'Full-Stack Development',
                'SEO Optimization',
                'Simple Website Development',
              ],
              offers: {
                '@type': 'Service',
                name: 'Web Development Services',
                description: 'Simple websites, SEO optimization, enterprise applications, system integration, and full-stack development solutions.',
                areaServed: 'United States',
                serviceType: 'Web Development',
                provider: {
                  '@type': 'Person',
                  name: 'Cesar Melchor',
                },
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Los Angeles',
                addressRegion: 'CA',
                addressCountry: 'US',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
