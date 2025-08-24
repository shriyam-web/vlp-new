const processSteps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, understand your business goals, and create a comprehensive project roadmap.',
    icon: 'fas fa-search',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution.',
    icon: 'fas fa-pencil-ruler',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    step: '03',
    title: 'Development & Testing',
    description: 'We build your solution using best practices, conduct thorough testing, and ensure quality delivery.',
    icon: 'fas fa-code',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    step: '04',
    title: 'Deployment & Support',
    description: 'We deploy your solution and provide ongoing support, maintenance, and optimization services.',
    icon: 'fas fa-rocket',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
];

export default function ServiceProcess() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Development Process</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure successful project delivery and client satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 card-hover`}>
                  <i className={`${step.icon} text-2xl ${step.color}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <a
              href="https://wa.me/919648974867?text=Hello, I'd like to discuss a project"
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