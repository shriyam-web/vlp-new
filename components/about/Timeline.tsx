const timelineEvents = [
  {
    year: '2021',
    title: 'Foundation',
    description: 'VLP Technologies was founded in loving memory of Late Vijay Laxmi Pandey with a mission to provide affordable tech solutions.',
    icon: 'fas fa-seedling',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    year: '2022',
    title: 'First Milestone',
    description: 'Completed our first 10 successful projects and established a reputation for quality and affordability in Noida.',
    icon: 'fas fa-trophy',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    year: '2023',
    title: 'Team Expansion',
    description: 'Expanded our team with skilled developers and designers to serve a growing client base across India.',
    icon: 'fas fa-users',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    year: '2024',
    title: 'Service Diversification',
    description: 'Expanded our services to include mobile app development, SEO solutions, and comprehensive digital consulting.',
    icon: 'fas fa-chart-line',
    color: 'text-amber-600',
    bgColor: 'bg-amber-100',
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Continuing to grow while maintaining our core values of affordability, quality, and genuine customer care.',
    icon: 'fas fa-rocket',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
];

export default function Timeline() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From our humble beginnings to becoming a trusted technology partner, 
            here's the story of our growth and commitment to excellence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-600 to-amber-500" />

            {timelineEvents.map((event, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-6 h-6 ${event.bgColor} border-4 border-white rounded-full flex items-center justify-center shadow-lg`}>
                      <i className={`${event.icon} text-xs ${event.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`bg-white p-6 md:p-8 rounded-xl shadow-lg card-hover ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                  } md:w-5/12`}>
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-blue-600 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Be Part of Our Story?</h3>
          <p className="text-gray-600 mb-6">
            Join the growing list of satisfied clients who trust VLP Technologies for their digital transformation needs.
          </p>
          <a
            href="https://wa.me/919648974867?text=Hello, I'd like to discuss a project"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-whatsapp mr-2" />
            Let's Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}