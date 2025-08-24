'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import QuoteModal from '@/components/QuoteModal';
import Link from 'next/link';

export default function CallToAction() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='30' cy='30' r='12'/%3E%3Ccircle cx='30' cy='30' r='20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's bring your digital vision to life with our expert team. 
              Get a free quote today and discover why clients across India trust VLP Technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-4 text-lg font-semibold rounded-full btn-hover-effect transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <i className="fas fa-rocket mr-2" />
                Get Free Quote Now
              </Button>
              <a
                href="https://wa.me/919648974867?text=Hello, I'm interested in your services"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full btn-hover-effect transform hover:scale-105 transition-all duration-300 bg-transparent"
                  size="lg"
                >
                  <i className="fab fa-whatsapp mr-2" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-phone text-xl" />
                </div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-blue-100">+91 9648974867</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-envelope text-xl" />
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-blue-100">info@vlptechnologies.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                  <i className="fas fa-map-marker-alt text-xl" />
                </div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-blue-100">Noida, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}