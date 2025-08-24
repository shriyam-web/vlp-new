const missionVisionData = [
  {
    icon: 'fas fa-bullseye',
    title: 'Our Mission',
    description: 'To provide premium technology services at the most affordable and genuine prices, making digital transformation accessible to businesses of all sizes while maintaining the highest standards of quality and customer service.',
    color: 'from-blue-600 to-blue-800',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    icon: 'fas fa-eye',
    title: 'Our Vision',
    description: 'To become India\'s most trusted technology partner, known for our commitment to affordability, quality, and genuine customer care. We aim to bridge the digital divide by making premium tech solutions accessible to everyone.',
    color: 'from-amber-500 to-amber-700',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export default function MissionVision() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Mission & Vision</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by the values of Late Vijay Laxmi Pandey, our mission and vision reflect our commitment 
            to making premium technology accessible and affordable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {missionVisionData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 lg:p-12 rounded-xl shadow-lg card-hover"
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-6`}>
                <i className={`${item.icon} text-2xl ${item.textColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Our Promise Section */}
        <div className="mt-16 bg-white p-8 lg:p-12 rounded-xl shadow-lg text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <i className="fas fa-handshake text-2xl text-white" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              "We promise to deliver premium quality technology services at the most affordable and genuine prices. 
              Every project is treated with the same care and dedication that Late Vijay Laxmi Pandey would have 
              shown - with integrity, passion, and a genuine desire to help our clients succeed."
            </p>
            <div className="inline-flex items-center text-purple-600 font-semibold">
              <i className="fas fa-quote-left mr-2" />
              <span>Affordable • Genuine • Quality</span>
              <i className="fas fa-quote-right ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}