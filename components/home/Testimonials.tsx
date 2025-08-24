'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    position: 'CEO, TechStart Solutions',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'VLP Technologies delivered exactly what we needed within our budget. Their team is highly skilled and responsive. The website they built for us has increased our online presence significantly.',
  },
  {
    name: 'Priya Sharma',
    position: 'Founder, EcoFriendly Store',
    location: 'Delhi, India',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Amazing work! They created a beautiful e-commerce platform for my business at a very affordable price. The support team is always available on WhatsApp. Highly recommended!',
  },
  {
    name: 'Amit Patel',
    position: 'Marketing Director, GrowBiz',
    location: 'Ahmedabad, India',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'The mobile app they developed for us is fantastic. Clean UI, smooth performance, and delivered on time. VLP Technologies truly understands client requirements.',
  },
  {
    name: 'Sunita Gupta',
    position: 'Owner, Fashion Hub',
    location: 'Jaipur, India',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Professional team with excellent communication. They helped us establish a strong online presence with SEO optimization. Our sales have doubled since the website launch.',
  },
  {
    name: 'Vikram Singh',
    position: 'CTO, StartupXYZ',
    location: 'Bangalore, India',
    image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'VLP Technologies is our go-to development partner. Quality work, fair pricing, and genuine support. They have successfully delivered multiple projects for us.',
  },
  {
    name: 'Meera Joshi',
    position: 'Director, EduTech Solutions',
    location: 'Pune, India',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    text: 'Outstanding service! They developed a comprehensive learning management system for our educational platform. The team is knowledgeable and delivers quality work.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients from across India have to say about our services.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-white/20"
                />
              </div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-amber-400 text-lg mr-1" />
                ))}
              </div>

              <blockquote className="text-lg md:text-xl italic text-gray-200 mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="text-center">
                <h4 className="text-xl font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-amber-400 font-medium">
                  {testimonials[currentIndex].position}
                </p>
                <p className="text-gray-400 text-sm flex items-center justify-center mt-1">
                  <i className="fas fa-map-marker-alt mr-1" />
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <Button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-12 h-12"
            size="icon"
          >
            <i className="fas fa-chevron-left" />
          </Button>
          <Button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-0 rounded-full w-12 h-12"
            size="icon"
          >
            <i className="fas fa-chevron-right" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-amber-400 w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Testimonial Grid Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card key={index} className="bg-white/5 backdrop-blur-md border-white/10 card-hover">
              <CardContent className="p-6 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mx-auto object-cover mb-3"
                />
                <h4 className="font-semibold text-white mb-1">{testimonial.name}</h4>
                <p className="text-amber-400 text-sm mb-2">{testimonial.position}</p>
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-amber-400 text-xs mr-1" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm italic">
                  "{testimonial.text.slice(0, 100)}..."
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}