export default function MapSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Location</span>
          </h2>
          <p className="text-lg text-gray-600">
            Located in the heart of Noida, India - easily accessible and ready to serve you.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129308136!2d77.04417!3d28.527467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635789012345!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="VLP Technologies Location - Noida, India"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <i className="fas fa-map-marker-alt text-3xl text-red-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
            <p className="text-gray-600">Noida, Uttar Pradesh, India</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <i className="fas fa-car text-3xl text-blue-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
            <p className="text-gray-600">Easy access via metro and road transport</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <i className="fas fa-handshake text-3xl text-green-600 mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Meetings</h3>
            <p className="text-gray-600">In-person consultations available by appointment</p>
          </div>
        </div>
      </div>
    </section>
  );
}