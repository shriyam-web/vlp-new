import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesHighlight from '@/components/home/ServicesHighlight';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import StatsSection from '@/components/home/StatsSection';

export const metadata = {
  title: 'VLP Technologies - Affordable Web Development & Mobile App Solutions',
  description: 'VLP Technologies provides premium web development, mobile app development, and digital solutions at genuine prices. Get your free quote today!',
  openGraph: {
    title: 'VLP Technologies - Affordable Web Development & Mobile App Solutions',
    description: 'Premium tech solutions at genuine prices. Web development, mobile apps, and digital presence consulting.',
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesHighlight />
        <WhyChooseUs />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}