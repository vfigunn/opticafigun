
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, MessageCircle } from 'lucide-react';
import logoPlaceholder from '../../assets/portada-modified.png'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-primary py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src={logoPlaceholder}
            alt="Óptica Figun Gualeguaychú"
            className="h-12 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6 mr-6">
            <NavLink to="/" active={location.pathname === "/"} isScrolled={isScrolled}>
              Inicio
            </NavLink>
            <NavLink to="/nosotros" active={location.pathname === "/nosotros"} isScrolled={isScrolled}>
              Nosotros
            </NavLink>
            <NavLink to="/contacto" active={location.pathname === "/contacto"} isScrolled={isScrolled}>
              Contacto
            </NavLink>
          </div>

          {/* Social media links */}
          <div className="flex items-center space-x-3">
            <SocialLink
              href="https://facebook.com/optica.figun"
              aria-label="Facebook"
              isScrolled={isScrolled}
            >
              <Facebook size={20} />
            </SocialLink>
            <SocialLink
              href="https://www.instagram.com/opticafigun"
              aria-label="Instagram"
              isScrolled={isScrolled}
            >
              <Instagram size={20} />
            </SocialLink>
            <a
              href="https://wa.me/5493446658195"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full ${
                isScrolled
                  ? 'bg-primary text-white'
                  : 'bg-white text-primary'
              } hover:opacity-90 transition-all`}
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} className="mr-2" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" active={location.pathname === "/"}>
              Inicio
            </MobileNavLink>
            <MobileNavLink to="/nosotros" active={location.pathname === "/nosotros"}>
              Nosotros
            </MobileNavLink>
            <MobileNavLink to="/contacto" active={location.pathname === "/contacto"}>
              Contacto
            </MobileNavLink>

            {/* Mobile social media links */}
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                <Facebook size={18} className="mr-2" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/opticafigun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                <Instagram size={18} className="mr-2" />
                Instagram
              </a>
            </div>

            {/* Mobile WhatsApp button */}
            <a
              href="https://wa.me/543446123456"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              <MessageCircle size={18} className="mr-2" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({
  children,
  to,
  active,
  isScrolled
}: {
  children: React.ReactNode;
  to: string;
  active: boolean;
  isScrolled: boolean;
}) => {
  return (
    <Link
      to={to}
      className={`font-medium transition-colors relative ${
        // active
        //   ? 'text-primary'
        //   : 
          isScrolled
            ? 'text-gray-700 hover:text-primary'
            : 'text-white hover:text-white/80'
      }`}
    >
      {children}
      {active && (
        <span className={`absolute bottom-[-4px] left-0 w-full h-[2px] ${isScrolled ? 'bg-primary' : 'bg-white'}`} />
      )}
    </Link>
  );
};

const SocialLink = ({
  children,
  href,
  isScrolled,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  isScrolled: boolean;
  [key: string]: any;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition-colors ${
        isScrolled
          ? 'text-primary hover:text-primary/80'
          : 'text-white hover:text-white/80'
      }`}
      {...props}
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({
  children,
  to,
  active
}: {
  children: React.ReactNode;
  to: string;
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-md transition-colors ${
        active
        ? 'bg-primary/10 text-primary font-medium'
        : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
