export default function TeamHero() {
  return (
    <section className="pt-20 lg:pt-24 section-padding bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The Talented Minds Behind VLP Technologies
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Our diverse team of experienced developers, designers, and strategists work together to deliver 
            exceptional technology solutions that drive business success.
          </p>
        </div>
      </div>
    </section>
  );
}