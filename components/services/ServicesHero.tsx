'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/QuoteModal';

export default function ServicesHero() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Our <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              From cutting-edge web development to innovative mobile applications, we deliver professional technology services that drive business growth and digital transformation.
            </p>
            <Button
              onClick={() => setIsQuoteModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full btn-hover-effect transform hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <i className="fas fa-rocket mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}