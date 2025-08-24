const contactMethods = [
  {
    icon: 'fas fa-phone',
    title: 'Phone',
    info: '+91 9648974867',
    description: 'Call us for immediate assistance',
    action: () => window.open('tel:+919648974867', '_self'),
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: 'fab fa-whatsapp',
    title: 'WhatsApp',
    info: '+91 9648974867',
    description: 'Quick response via WhatsApp',
    action: () => window.open('https://wa.me/919648974867?text=Hello, I need help with your services', '_blank'),
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    info: 'info@vlptechnologies.com',
    description: 'Send us a detailed message',
    action: () => window.open('mailto:info@vlptechnologies.com', '_self'),
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    info: 'Noida, India',
    description: 'Visit our office',
    action: () => window.open('https://share.google/chIkaxCwJ4QBcyrtk', '_blank'),
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '10:00 AM - 5:00 PM' },
  { day: 'Sunday', hours: 'Emergency Support Only' },
];

export default function ContactInfo() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              onClick={method.action}
              className="bg-white p-6 rounded-xl shadow-lg card-hover cursor-pointer border border-gray-200"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center`}>
                  <i className={`${method.icon} text-xl ${method.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                  <p className="text-gray-600 font-medium">{method.info}</p>
                  <p className="text-gray-500 text-sm">{method.description}</p>
                </div>
                <i className="fas fa-arrow-right text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <i className="fas fa-clock text-blue-600 mr-2" />
            Business Hours
          </h3>
          <div className="space-y-3">
            {businessHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-700 font-medium">{schedule.day}</span>
                <span className="text-gray-600">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-green-700 text-sm flex items-center">
              <i className="fas fa-info-circle mr-2" />
              24/7 WhatsApp support available for urgent matters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}