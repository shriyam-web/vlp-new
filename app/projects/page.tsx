import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from '@/components/projects/ProjectsHero';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectStats from '@/components/projects/ProjectStats';

export const metadata: Metadata = {
  title: 'Our Projects - VLP Technologies | Portfolio & Case Studies',
  description: 'Explore our portfolio of successful web development, mobile app, and digital transformation projects. See how we\'ve helped businesses grow with technology.',
  openGraph: {
    title: 'Our Projects - VLP Technologies | Portfolio & Case Studies',
    description: 'Explore our portfolio of successful web development, mobile app, and digital transformation projects.',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectStats />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}