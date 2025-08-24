export default function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Founded with Love & Purpose
              </h3>
              <p className="text-gray-700 leading-relaxed">
                VLP Technologies was born out of love, respect, and dedication to the memory of 
                <strong className="text-blue-600"> Late Vijay Laxmi Pandey</strong>. Our company name itself 
                is a tribute to her legacy, representing the values she embodied throughout her life.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded by <strong>Shriyam Parashar</strong> (Owner) alongside <strong>Shanvika</strong> (Co-owner), 
                VLP Technologies was established with a clear mission: to provide premium technology services 
                at prices that are both affordable and genuine, making digital transformation accessible to businesses of all sizes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Based in Noida, India, we've grown from a small team with big dreams to a trusted technology 
                partner for businesses across India. Our commitment to quality, affordability, and genuine 
                customer service has helped us build lasting relationships with our clients.
              </p>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-amber-500 p-8 rounded-xl text-white shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-heart text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold">In Loving Memory</h4>
                </div>
                <div className="text-center space-y-3">
                  <p className="text-lg font-semibold">Late Vijay Laxmi Pandey</p>
                  <p className="text-blue-100 italic">
                    "Her values of dedication, integrity, and genuine care for others 
                    continue to guide everything we do at VLP Technologies."
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-16 bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Leadership Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">SP</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Shriyam Parashar</h4>
                <p className="text-blue-600 font-medium">Owner & Founder</p>
                <p className="text-gray-600 mt-2">
                  Visionary leader with expertise in technology strategy and business development.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Shanvika</h4>
                <p className="text-amber-600 font-medium">Co-owner</p>
                <p className="text-gray-600 mt-2">
                  Strategic partner focused on operations excellence and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}