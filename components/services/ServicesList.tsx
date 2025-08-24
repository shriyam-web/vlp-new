const services = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications using cutting-edge technologies.',
    technologies: ['HTML5 & CSS3', 'JavaScript & TypeScript', 'React.js & Next.js', 'MERN Stack', 'Node.js & Express'],
    features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX', 'Cross-browser Compatible'],
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile applications for iOS and Android.',
    technologies: ['React Native', 'Flutter', 'Native iOS', 'Native Android', 'Hybrid Apps'],
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'App Store Ready', 'Offline Support'],
    color: 'from-green-600 to-green-800',
    bgColor: 'bg-green-50',
    textColor: 'text-green-600',
  },
  {
    icon: 'fas fa-search',
    title: 'SEO & ASO Solutions',
    description: 'Comprehensive search engine and app store optimization strategies.',
    technologies: ['Technical SEO', 'Content Optimization', 'App Store Optimization', 'Analytics', 'Performance Monitoring'],
    features: ['Keyword Research', 'On-Page SEO', 'Technical Audits', 'ASO Strategies', 'Performance Tracking'],
    color: 'from-purple-600 to-purple-800',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-600',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Digital Consulting',
    description: 'Strategic digital transformation and business growth consulting.',
    technologies: ['Strategy Planning', 'Digital Marketing', 'Business Analysis', 'Technology Consulting', 'Growth Hacking'],
    features: ['Strategy Development', 'Market Analysis', 'Technology Roadmap', 'Performance Optimization', 'Growth Planning'],
    color: 'from-amber-600 to-amber-800',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
  {
    icon: 'fas fa-palette',
    title: 'Graphical Support',
    description: 'Creative design solutions for branding and digital presence.',
    technologies: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Graphic Design', 'Print Design'],
    features: ['Brand Development', 'Visual Identity', 'User Experience', 'Creative Design', 'Print Materials'],
    color: 'from-pink-600 to-pink-800',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-600',
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with advanced features and integrations.',
    technologies: ['Shopify', 'WooCommerce', 'Custom E-commerce', 'Payment Gateways', 'Inventory Management'],
    features: ['Payment Integration', 'Order Management', 'Inventory Tracking', 'Admin Dashboard', 'Mobile Commerce'],
    color: 'from-indigo-600 to-indigo-800',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
  },
];

export default function ServicesList() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="gradient-text">Technology Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-8">
              <div className="flex items-start space-x-6">
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${service.icon} text-2xl ${service.textColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <i className="fas fa-check text-green-500 mr-2 text-xs" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}