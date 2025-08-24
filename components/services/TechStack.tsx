const techCategories = [
  {
    title: 'Frontend Technologies',
    icon: 'fas fa-desktop',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    technologies: [
      { name: 'React.js', icon: 'fab fa-react' },
      { name: 'Next.js', icon: 'fas fa-code' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Angular', icon: 'fab fa-angular' },
      { name: 'TypeScript', icon: 'fas fa-code' },
      { name: 'Tailwind CSS', icon: 'fas fa-paint-brush' },
    ],
  },
  {
    title: 'Backend Technologies',
    icon: 'fas fa-server',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    technologies: [
      { name: 'Node.js', icon: 'fab fa-node-js' },
      { name: 'Express.js', icon: 'fas fa-code' },
      { name: 'MongoDB', icon: 'fas fa-database' },
      { name: 'PostgreSQL', icon: 'fas fa-database' },
      { name: 'MySQL', icon: 'fas fa-database' },
      { name: 'Redis', icon: 'fas fa-memory' },
    ],
  },
  {
    title: 'Mobile Development',
    icon: 'fas fa-mobile-alt',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    technologies: [
      { name: 'React Native', icon: 'fab fa-react' },
      { name: 'Flutter', icon: 'fas fa-mobile' },
      { name: 'iOS Native', icon: 'fab fa-apple' },
      { name: 'Android Native', icon: 'fab fa-android' },
      { name: 'Expo', icon: 'fas fa-rocket' },
      { name: 'Ionic', icon: 'fas fa-mobile-alt' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fas fa-cloud',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    technologies: [
      { name: 'AWS', icon: 'fab fa-aws' },
      { name: 'Google Cloud', icon: 'fab fa-google' },
      { name: 'Docker', icon: 'fab fa-docker' },
      { name: 'Kubernetes', icon: 'fas fa-dharmachakra' },
      { name: 'CI/CD', icon: 'fas fa-sync' },
      { name: 'Vercel', icon: 'fas fa-rocket' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies and industry best practices to deliver robust, scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg card-hover">
              <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                <i className={`${category.icon} text-xl ${category.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex} className="flex items-center space-x-3">
                    <i className={`${tech.icon} ${category.color}`} />
                    <span className="text-gray-700 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}