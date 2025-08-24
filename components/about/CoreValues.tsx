const values = [
  {
    icon: 'fas fa-heart',
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in all our dealings.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: 'fas fa-dollar-sign',
    title: 'Affordability',
    description: 'Premium quality services at genuine and accessible prices for all.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: 'fas fa-gem',
    title: 'Quality',
    description: 'We never compromise on quality, delivering excellence in every project.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: 'fas fa-users',
    title: 'Customer Care',
    description: 'Our clients are family, and we treat them with genuine care and respect.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: 'fas fa-rocket',
    title: 'Innovation',
    description: 'We stay ahead with cutting-edge technology and creative solutions.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: 'fas fa-clock',
    title: 'Reliability',
    description: 'Timely delivery and consistent support you can always count on.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
];

export default function CoreValues() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Core <span className="gradient-text">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These values, inspired by the legacy of Late Vijay Laxmi Pandey, guide every decision we make 
            and every service we deliver at VLP Technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg card-hover text-center group"
            >
              <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${value.icon} text-2xl ${value.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}