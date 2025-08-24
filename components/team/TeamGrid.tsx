const leadership = [
  {
    name: 'Shriyam Parashar',
    role: 'Owner & Founder',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Business Strategy', 'Technology Leadership', 'Project Management', 'Client Relations'],
    bio: 'Visionary leader with extensive experience in technology strategy and business development. Founded VLP Technologies with a mission to deliver premium tech solutions.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
  {
    name: 'Shanvika',
    role: 'Co-owner',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Operations Management', 'Quality Assurance', 'Team Leadership', 'Process Optimization'],
    bio: 'Strategic partner focused on operational excellence and ensuring the highest quality standards in all our deliverables.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
    },
  },
];

const developers = [
  {
    id: 'pranjal-gupta',
    name: 'Pranjal Gupta',
    role: 'Senior Full Stack Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['MERN Stack', 'Next.js', 'TypeScript', 'AWS'],
    bio: 'Expert full-stack developer with 5+ years of experience in building scalable web applications and modern user interfaces.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      portfolio: '#',
    },
    projects: ['E-Commerce Platform', 'Learning Management System', 'Corporate Website'],
  },
  {
    id: 'yash-gupta',
    name: 'Yash Gupta',
    role: 'Mobile App Developer',
    image: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['React Native', 'Flutter', 'iOS', 'Android'],
    bio: 'Specialized mobile developer with expertise in cross-platform development and native mobile applications.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      portfolio: '#',
    },
    projects: ['Food Delivery App', 'Healthcare App', 'Social Media App'],
  },
  {
    id: 'shuaib-akhtar',
    name: 'Shuaib Akhtar',
    role: 'Backend Developer',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'],
    bio: 'Backend specialist focused on building robust, scalable server-side applications and database architectures.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      portfolio: '#',
    },
    projects: ['API Development', 'Database Design', 'Cloud Integration'],
  },
  {
    id: 'kirti-rajani',
    name: 'Kirti Rajani',
    role: 'UI/UX Designer & Frontend Developer',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    expertise: ['UI/UX Design', 'React.js', 'Figma', 'Adobe Creative Suite'],
    bio: 'Creative designer and frontend developer who brings beautiful, user-centered designs to life with clean, efficient code.',
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#',
      portfolio: '#',
    },
    projects: ['Design Systems', 'Brand Identity', 'User Experience Design'],
  },
];

export default function TeamGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Leadership Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the visionary leaders who guide VLP Technologies towards excellence and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-8 text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-blue-100"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{leader.bio}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center space-x-4">
                  <a href={leader.social.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors">
                    <i className="fab fa-linkedin text-xl" />
                  </a>
                  <a href={leader.social.twitter} className="text-blue-400 hover:text-blue-500 transition-colors">
                    <i className="fab fa-twitter text-xl" />
                  </a>
                  <a href={leader.social.github} className="text-gray-700 hover:text-gray-800 transition-colors">
                    <i className="fab fa-github text-xl" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development <span className="gradient-text">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our talented developers and designers who bring innovative ideas to life with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developers.map((developer) => (
              <div key={developer.id} className="bg-white border border-gray-200 rounded-xl shadow-lg card-hover p-6 text-center">
                <img
                  src={developer.image}
                  alt={developer.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-1">{developer.name}</h3>
                <p className="text-blue-600 font-medium mb-3 text-sm">{developer.role}</p>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{developer.bio}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {developer.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Recent Projects:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {developer.projects.map((project, projectIndex) => (
                      <li key={projectIndex} className="flex items-center justify-center">
                        <i className="fas fa-check text-green-500 mr-1 text-xs" />
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center space-x-3 mb-4">
                  <a href={developer.social.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href={developer.social.github} className="text-gray-700 hover:text-gray-800 transition-colors">
                    <i className="fab fa-github" />
                  </a>
                  <a href={developer.social.portfolio} className="text-purple-600 hover:text-purple-700 transition-colors">
                    <i className="fas fa-globe" />
                  </a>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={`/team/${developer.id}`}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    View Profile
                  </a>
                  <button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: `${developer.name} - ${developer.role}`,
                          text: `Check out ${developer.name}'s profile at VLP Technologies`,
                          url: `${window.location.origin}/team/${developer.id}`,
                        });
                      } else {
                        navigator.clipboard.writeText(`${window.location.origin}/team/${developer.id}`);
                        alert('Profile link copied to clipboard!');
                      }
                    }}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-xs font-medium transition-colors"
                  >
                    <i className="fas fa-share-alt" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}