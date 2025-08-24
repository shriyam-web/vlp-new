'use client';

import { useEffect, useState } from 'react';

const stats = [
  { number: 50, suffix: '+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
  { number: 25, suffix: '+', label: 'Happy Clients', icon: 'fas fa-smile' },
  { number: 3, suffix: '+', label: 'Years Experience', icon: 'fas fa-calendar-alt' },
  { number: 24, suffix: '/7', label: 'Support Available', icon: 'fas fa-headset' },
];

export default function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Animate counters
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.number;
            const duration = 2000; // 2 seconds
            const increment = end / (duration / 50);

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = end;
                  return newCounters;
                });
                clearInterval(timer);
              } else {
                setCounters(prev => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(start);
                  return newCounters;
                });
              }
            }, 50);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isVisible]);

  return (
    <section id="stats-section" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Achievement</span> Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering exceptional results and building lasting relationships with our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {counters[index]}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}