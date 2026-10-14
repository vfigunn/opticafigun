import { Link } from 'react-router-dom';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { BUSINESS, FULL_ADDRESS, buildWhatsAppUrl } from '@/lib/business';
import { SERVICES, servicePath } from '@/data/services';
import logo from '@/assets/logo-optica-figun.webp';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Link to="/" aria-label="Óptica Figún - Inicio">
              <img
                src={logo}
                alt="Óptica Figún, óptica en Gualeguaychú"
                width={640}
                height={250}
                loading="lazy"
                className="w-full max-w-[240px] h-auto mb-6"
              />
            </Link>
            <p className="text-base text-gray-200 max-w-xs">
              Óptica y laboratorio óptico en Gualeguaychú. Más de 30 años brindando servicios ópticos de calidad y
              atención personalizada.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Servicios</h2>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link to={servicePath(service)} className="hover:text-secondary transition-colors">
                    {service.name} en Gualeguaychú
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Enlaces</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-secondary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-secondary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-secondary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contacto</h2>
            <address className="not-italic">
              <ul className="space-y-3">
                <li>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:text-secondary transition-colors"
                  >
                    <MapPin size={20} className="mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{FULL_ADDRESS}, {BUSINESS.address.countryName}</span>
                  </a>
                </li>
                <li className="flex items-start">
                  <Clock size={20} className="mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{BUSINESS.hoursDisplay}</span>
                </li>
                <li>
                  <a href={`tel:${BUSINESS.phone}`} className="flex items-center hover:text-secondary transition-colors">
                    <Phone size={20} className="mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>{BUSINESS.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="flex items-center hover:text-secondary transition-colors">
                    <Mail size={20} className="mr-2 flex-shrink-0" aria-hidden="true" />
                    <span>{BUSINESS.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-secondary transition-colors"
                  >
                    <WhatsAppIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                    Escribinos por WhatsApp
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 pb-20 md:pb-24 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> Óptica Figún Gualeguaychú. Todos los derechos reservados. Creado por <a href="https://github.com/vfigunn" target='_blank' rel="noopener noreferrer" className='text-white underline'> vfigun</a>
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a
              href={BUSINESS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
