const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce platform with advanced features including payment integration, inventory management, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
    features: ['Payment Gateway', 'Admin Panel', 'Mobile Responsive', 'SEO Optimized'],
    link: '#',
    client: 'Fashion Retail Store',
  },
  {
    id: 2,
    title: 'Food Delivery App',
    category: 'Mobile Development',
    description: 'Cross-platform mobile application for food delivery with real-time tracking and payment integration.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Google Maps', 'Razorpay'],
    features: ['Real-time Tracking', 'Push Notifications', 'Payment Integration', 'Rating System'],
    link: '#',
    client: 'Local Restaurant Chain',
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Professional corporate website with modern design, CMS integration, and SEO optimization.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Strapi'],
    features: ['CMS Integration', 'SEO Optimized', 'Fast Loading', 'Analytics'],
    link: '#',
    client: 'Tech Consulting Firm',
  },
  {
    id: 4,
    title: 'Learning Management System',
    category: 'Web Development',
    description: 'Comprehensive LMS platform with course management, student tracking, and assessment tools.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['MERN Stack', 'Socket.io', 'AWS S3', 'JWT'],
    features: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Certificates'],
    link: '#',
    client: 'Educational Institute',
  },
  {
    id: 5,
    title: 'Healthcare App',
    category: 'Mobile Development',
    description: 'Healthcare mobile application with appointment booking, telemedicine, and health tracking features.',
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'WebRTC', 'Cloud Functions'],
    features: ['Appointment Booking', 'Video Consultation', 'Health Records', 'Prescription Management'],
    link: '#',
    client: 'Healthcare Provider',
  },
  {
    id: 6,
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing platform with advanced search, virtual tours, and lead management system.',
    image: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Express.js', 'PostgreSQL', 'Google Maps'],
    features: ['Property Search', 'Virtual Tours', 'Lead Management', 'Map Integration'],
    link: '#',
    client: 'Real Estate Agency',
  },
];

export default function ProjectsGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Client: {project.client}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-700">
                        <i className="fas fa-check text-green-500 mr-2 text-xs" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.link}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1" />
                    View Project
                  </a>
                  <a
                    href="https://wa.me/919648974867?text=I'm interested in a similar project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <i className="fab fa-whatsapp mr-1" />
                    Discuss Similar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that exceeds your expectations.
            </p>
            <a
              href="https://wa.me/919648974867?text=Hello, I have a project idea to discuss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-whatsapp mr-2" />
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}