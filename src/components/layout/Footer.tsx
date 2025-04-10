
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import logoPlaceholder from '../../assets/logo-portada-mejorado.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link to="/">
              <img 
                src={logoPlaceholder} 
                alt="Óptica Figun Gualeguaychú" 
                className="h-26 w-auto mb-8"
              />
            </Link>
            <p className="text-base text-gray-300 max-w-xs">
              Brindando servicios ópticos de calidad y atención personalizada en Gualeguaychú desde hace años.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary transition-colors">
                  Inicio
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
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0 mt-1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Magnasco 25, Gualeguaychú, Entre Ríos, Argentina</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>(+59) 3446-658195</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>opticafigun@gmail.com</span>
              </li>
              <li className="flex items-center">
                <a 
                  href="https://wa.me/5493446658195" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-secondary transition-colors"
                >
                  <MessageCircle size={20} className="mr-2" />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <a 
                  href="https://www.facebook.com/optica.figun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-secondary transition-colors"
                >
                  <Facebook size={20} className="mr-2" />
                  @optica.figun
                </a>
              </li>
              <li className="flex items-center">
                <a 
                  href="https://www.instagram.com/opticafigun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-secondary transition-colors"
                >
                  <Instagram size={20} className="mr-2" />
                  @opticafigun
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Óptica Figún Gualeguaychú. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/optica.figun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors" 
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://www.instagram.com/opticafigun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors" 
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://wa.me/5493446658195" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-secondary transition-colors" 
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
