'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/QuoteModal';
import Link from 'next/link';

export default function HeroSection() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-3 h-3 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-10 w-4 h-4 bg-amber-300 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
                VLP Technologies
              </span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              "Premium Technology Solutions with{' '}
              <span className="text-amber-400 font-semibold">Professional Excellence</span>"
            </p>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Cutting-edge web development, mobile applications, and digital transformation solutions delivered by industry experts.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full btn-hover-effect transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <i className="fas fa-rocket mr-2" />
                Get Free Quote
              </Button>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black px-8 py-4 text-lg font-semibold rounded-full btn-hover-effect transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <i className="fas fa-phone mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 mt-16 text-gray-400 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-amber-400" />
                <span className="text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-shield-alt text-green-400" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-clock text-blue-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-map-marker-alt text-red-400" />
                <span className="text-sm">Noida, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}