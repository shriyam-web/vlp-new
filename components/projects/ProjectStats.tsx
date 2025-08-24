const stats = [
  { number: 50, suffix: '+', label: 'Projects Completed', icon: 'fas fa-project-diagram' },
  { number: 25, suffix: '+', label: 'Happy Clients', icon: 'fas fa-smile' },
  { number: 15, suffix: '+', label: 'Industries Served', icon: 'fas fa-industry' },
  { number: 98, suffix: '%', label: 'Client Satisfaction', icon: 'fas fa-heart' },
];

export default function ProjectStats() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg card-hover">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-white`} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}