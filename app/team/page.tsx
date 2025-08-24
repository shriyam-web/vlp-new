import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamHero from '@/components/team/TeamHero';
import TeamGrid from '@/components/team/TeamGrid';
import TeamValues from '@/components/team/TeamValues';

export const metadata: Metadata = {
  title: 'Our Team - VLP Technologies | Meet Our Expert Developers',
  description: 'Meet the talented team behind VLP Technologies. Our expert developers and designers are passionate about creating innovative technology solutions.',
  openGraph: {
    title: 'Our Team - VLP Technologies | Meet Our Expert Developers',
    description: 'Meet the talented team behind VLP Technologies. Our expert developers and designers are passionate about creating innovative solutions.',
  },
};

export default function TeamPage() {
  return (
    <>
      <Header />
      <main>
        <TeamHero />
        <TeamGrid />
        <TeamValues />
      </main>
      <Footer />
    </>
  );
}