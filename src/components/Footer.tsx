import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

type Page = 'home' | 'services' | 'about' | 'work' | 'contact';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavigation = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    'Website Development',
    'SEO & Marketing',
    'Social Media Management',
    'Branding & Logo Design',
    'Graphic Design',
    'Legal Consulting',
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Glyphiix</h3>
            <p className="text-gray-400 mb-6">
              Premium digital agency delivering results-driven solutions for ambitious businesses worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['home', 'services', 'about', 'work', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => handleNavigation(page as Page)}
                  className="block text-gray-400 hover:text-white transition-colors capitalize"
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              {services.map((service) => (
                <button
                  key={service}
                  onClick={() => handleNavigation('services')}
                  className="block text-gray-400 hover:text-white transition-colors text-left"
                >
                  {service}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:hello@apex.agency" className="hover:text-white transition-colors">
                  glyphiixsolution@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +918750016908
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Farrukhabad, U.P, India 209625 </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Glyphiix Solution. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
