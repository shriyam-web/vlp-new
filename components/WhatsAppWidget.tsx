'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function WhatsAppWidget() {
  const [isExpanded, setIsExpanded] = useState(false);

  const supportOptions = [
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp Chat',
      subtitle: 'Quick response',
      action: () => window.open('https://wa.me/919648974867?text=Hello, I need help with your services', '_blank'),
      color: 'bg-green-600 hover:bg-green-700',
    },
    {
      icon: 'fas fa-phone',
      title: 'Call Us',
      subtitle: '+91 9648974867',
      action: () => window.open('tel:+919648974867', '_self'),
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      subtitle: 'info@vlptechnologies.com',
      action: () => window.open('mailto:info@vlptechnologies.com', '_self'),
      color: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded Support Options */}
      {isExpanded && (
        <div className="mb-4 space-y-3 animate-fade-in-up">
          <Card className="w-80 shadow-xl">
            <CardContent className="p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <i className="fas fa-headset text-blue-600 mr-2" />
                Need Help? We're here to assist you!
              </h3>
              <div className="space-y-2">
                {supportOptions.map((option, index) => (
                  <Button
                    key={index}
                    onClick={option.action}
                    className={`w-full justify-start text-left ${option.color} text-white`}
                    variant="default"
                  >
                    <i className={`${option.icon} mr-3 text-lg`} />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{option.title}</span>
                      <span className="text-xs opacity-80">{option.subtitle}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ${
          isExpanded 
            ? 'bg-red-600 hover:bg-red-700 transform rotate-45' 
            : 'bg-green-600 hover:bg-green-700 animate-pulse'
        }`}
        size="icon"
      >
        {isExpanded ? (
          <i className="fas fa-times text-xl" />
        ) : (
          <i className="fas fa-headset text-xl" />
        )}
      </Button>

      {/* Floating WhatsApp Button */}
      {!isExpanded && (
        <Button
          onClick={() => window.open('https://wa.me/919648974867?text=Hello, I need help with your services', '_blank')}
          className="absolute -top-16 left-0 w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 shadow-lg animate-bounce"
          size="icon"
        >
          <i className="fab fa-whatsapp text-lg" />
        </Button>
      )}
    </div>
  );
}