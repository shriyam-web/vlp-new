import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Login / Signup - VLP Technologies | Client Portal',
  description: 'Access your VLP Technologies client portal. Login to manage your projects, view progress, and communicate with our team.',
  openGraph: {
    title: 'Login / Signup - VLP Technologies | Client Portal',
    description: 'Access your VLP Technologies client portal for project management and communication.',
  },
};

export default function AuthPage() {
  return (
    <>
      <Header />
      <main>
        <AuthForm />
      </main>
      <Footer />
    </>
  );
}