import Link from 'next/link';
import { Button } from '@/components/ui/button';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Team', href: '/team' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Web Development', href: '/services#web-development' },
  { name: 'Mobile App Development', href: '/services#mobile-development' },
  { name: 'SEO Solutions', href: '/services#seo-solutions' },
  { name: 'Digital Consulting', href: '/services#digital-consulting' },
];

const socialLinks = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', href: 'https://facebook.com/vlptechnologies' },
  { name: 'Twitter', icon: 'fab fa-twitter', href: 'https://twitter.com/vlptechnologies' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/company/vlp-technologies' },
  { name: 'Instagram', icon: 'fab fa-instagram', href: 'https://instagram.com/vlptechnologies' },
  { name: 'GitHub', icon: 'fab fa-github', href: 'https://github.com/vlptechnologies' },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-amber-500 rounded-lg flex items-center justify-center">
                {/* Replace this div with <img src="/logo.png" alt="VLP Technologies" className="w-10 h-10 rounded-lg object-cover" /> when logo is available */}
                <span className="text-white font-bold text-lg">VLP</span>
              </div>
              <div>
                <span className="text-xl font-bold">VLP Technologies</span>
                <p className="text-sm text-gray-400">Premium Tech Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              We deliver cutting-edge technology solutions with unmatched quality and professional excellence. 
              Built in loving memory of Late Vijay Laxmi Pandey.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-sm">
                <i className="fas fa-map-marker-alt text-amber-500 mr-2" />
                Noida, India
              </p>
              <p className="flex items-center text-sm">
                <i className="fas fa-phone text-amber-500 mr-2" />
                +91 9648974867
              </p>
              <p className="flex items-center text-sm">
                <i className="fas fa-envelope text-amber-500 mr-2" />
                info@vlptechnologies.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <i className={`${social.icon} text-sm`} />
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/919648974867"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <i className="fab fa-whatsapp mr-2" />
                  WhatsApp Chat
                </Button>
              </a>
              <div className="h-2" />
              <Link href="https://share.google/chIkaxCwJ4QBcyrtk" target="_blank">
                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                  <i className="fas fa-map-marker-alt mr-2" />
                  View Location
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} VLP Technologies. All rights reserved.</p>
              <p className="mt-1">
                Built in loving memory of <span className="text-amber-500">Late Vijay Laxmi Pandey</span>
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-amber-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-amber-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-gray-400 hover:text-amber-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}