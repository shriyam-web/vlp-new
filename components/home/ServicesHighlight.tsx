import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    description: 'Modern, responsive websites using HTML, CSS, JavaScript, MERN stack, and Next.js.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: 'fas fa-mobile-alt',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile applications using React Native and Flutter.',
    features: ['Cross-Platform', 'Native Performance', 'Push Notifications', 'App Store Ready'],
    color: 'from-green-600 to-green-800',
  },
  {
    icon: 'fas fa-search',
    title: 'SEO & ASO Solutions',
    description: 'Boost your online visibility with our comprehensive SEO and ASO strategies.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'App Store Optimization'],
    color: 'from-purple-600 to-purple-800',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Digital Consulting',
    description: 'Strategic digital presence consulting to grow your business online.',
    features: ['Strategy Planning', 'Digital Marketing', 'Brand Development', 'Analytics'],
    color: 'from-amber-600 to-amber-800',
  },
  {
    icon: 'fas fa-palette',
    title: 'Graphical Support',
    description: 'Creative design solutions including logos, branding, and UI/UX design.',
    features: ['Logo Design', 'Brand Identity', 'UI/UX Design', 'Print Design'],
    color: 'from-pink-600 to-pink-800',
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration and inventory management.',
    features: ['Payment Gateway', 'Inventory Management', 'Order Tracking', 'Admin Panel'],
    color: 'from-indigo-600 to-indigo-800',
  },
];

export default function ServicesHighlight() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of technology services designed to help your business thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${service.icon} text-2xl text-white`} />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <i className="fas fa-check text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full btn-hover-effect">
              <i className="fas fa-arrow-right mr-2" />
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}