const teamValues = [
  {
    icon: 'fas fa-users',
    title: 'Collaboration',
    description: 'We work together as a unified team, sharing knowledge and supporting each other to achieve common goals.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Innovation',
    description: 'We constantly explore new technologies and creative solutions to stay ahead in the rapidly evolving tech landscape.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: 'fas fa-graduation-cap',
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth through continuous learning and skill development to deliver cutting-edge solutions.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: 'fas fa-award',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from code quality to client communication and project delivery.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

export default function TeamValues() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Team <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The core principles that guide our team culture and drive our commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamValues.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover text-center">
              <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${value.icon} text-2xl ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation. 
            If you're ready to make an impact, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@vlptechnologies.com"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <i className="fas fa-envelope mr-2" />
            careers@vlptechnologies.com
          </a>
        </div>
      </div>
    </section>
  );
}