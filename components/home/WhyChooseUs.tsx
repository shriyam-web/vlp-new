const reasons = [
  {
    icon: 'fas fa-dollar-sign',
    title: 'Affordable Pricing',
    description: 'Premium quality services at the most genuine and affordable prices in the market.',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    icon: 'fas fa-clock',
    title: 'Quick Delivery',
    description: 'Fast turnaround times without compromising on quality. We deliver on time, every time.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: 'fas fa-heart',
    title: 'Built with Love',
    description: 'Every project is crafted with passion and dedication in loving memory of Late Vijay Laxmi Pandey.',
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
  {
    icon: 'fas fa-shield-alt',
    title: '100% Satisfaction',
    description: 'We guarantee complete satisfaction with unlimited revisions until you are happy.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: 'fas fa-headset',
    title: '24/7 Support',
    description: 'Round-the-clock technical support via WhatsApp, phone, and email for peace of mind.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    icon: 'fas fa-users',
    title: 'Expert Team',
    description: 'Skilled developers and designers with years of experience in cutting-edge technologies.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="gradient-text">VLP Technologies?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We stand out from the competition with our commitment to quality, affordability, and genuine customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
            >
              <div className={`w-16 h-16 ${reason.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${reason.icon} text-2xl ${reason.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Company Memorial */}
        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <i className="fas fa-heart text-2xl text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Built in Loving Memory</h3>
          <p className="text-lg text-gray-700 mb-2">
            <span className="font-semibold">Late Vijay Laxmi Pandey</span>
          </p>
          <p className="text-gray-600 max-w-2xl mx-auto">
            VLP Technologies was founded to honor the memory of Late Vijay Laxmi Pandey. 
            Every project we undertake carries forward her legacy of dedication, quality, and genuine care for others.
          </p>
        </div>
      </div>
    </section>
  );
}