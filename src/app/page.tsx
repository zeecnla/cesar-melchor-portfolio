import { Suspense } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}
