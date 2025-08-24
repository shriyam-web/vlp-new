import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import ServiceProcess from '@/components/services/ServiceProcess';
import TechStack from '@/components/services/TechStack';

export const metadata: Metadata = {
  title: 'Our Services - VLP Technologies | Web & Mobile Development',
  description: 'Comprehensive technology services including web development, mobile apps, SEO solutions, and digital consulting. Professional tech services in Noida, India.',
  openGraph: {
    title: 'Our Services - VLP Technologies | Web & Mobile Development',
    description: 'Comprehensive technology services including web development, mobile apps, SEO solutions, and digital consulting.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <TechStack />
        <ServiceProcess />
      </main>
      <Footer />
    </>
  );
}