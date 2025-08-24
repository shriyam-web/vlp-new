import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'VLP Technologies - Premium Web Development & Mobile App Solutions',
    template: '%s | VLP Technologies'
  },
  description: 'VLP Technologies delivers premium web development, mobile app development, and cutting-edge digital solutions. Professional tech services based in Noida, India. Get your quote today!',
  keywords: 'web development, mobile app development, MERN stack, Next.js, React Native, Flutter, SEO, Noida, India',
  authors: [{ name: 'VLP Technologies' }],
  creator: 'VLP Technologies',
  publisher: 'VLP Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://vlptechnologies.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VLP Technologies - Affordable Web Development & Mobile App Solutions',
    description: 'Premium tech solutions at genuine prices. Web development, mobile apps, and digital presence consulting.',
    url: 'https://vlptechnologies.com',
    siteName: 'VLP Technologies',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'VLP Technologies',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VLP Technologies - Affordable Web Development & Mobile App Solutions',
    description: 'Premium tech solutions at genuine prices. Web development, mobile apps, and digital presence consulting.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'VLP Technologies',
              url: 'https://vlptechnologies.com',
              logo: 'https://vlptechnologies.com/logo.png',
              description: 'We provide services at the most affordable and genuine price.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Noida',
                addressCountry: 'IN',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+919648974867',
                contactType: 'customer service',
              },
              sameAs: [
                'https://www.linkedin.com/company/vlp-technologies',
                'https://twitter.com/vlptechnologies',
                'https://www.facebook.com/vlptechnologies',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <WhatsAppWidget />
        <Toaster />
      </body>
    </html>
  );
}