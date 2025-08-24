import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import Timeline from '@/components/about/Timeline';

export const metadata: Metadata = {
  title: 'About Us - VLP Technologies | Our Story & Mission',
  description: 'Learn about VLP Technologies, founded in loving memory of Late Vijay Laxmi Pandey. Discover our mission to provide affordable and genuine technology services.',
  openGraph: {
    title: 'About Us - VLP Technologies | Our Story & Mission',
    description: 'Learn about VLP Technologies, founded in loving memory of Late Vijay Laxmi Pandey. Discover our mission to provide affordable and genuine technology services.',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <CompanyStory />
        <MissionVision />
        <CoreValues />
        <Timeline />
      </main>
      <Footer />
    </>
  );
}