import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BUSINESS, buildWhatsAppUrl } from '@/lib/business';
import logo from '@/assets/logo-optica-figun.webp';

const NAV_ITEMS = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/nosotros', label: 'Nosotros' },
  { to: '/contacto', label: 'Contacto' },
];

const isActivePath = (pathname: string, to: string) =>
  to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(`${to}/`);

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
        <Link to="/" className="flex items-center" aria-label="Óptica Figún - Inicio">
          <img
            src={logo}
            alt="Óptica Figún, óptica en Gualeguaychú"
            width={640}
            height={250}
            className="h-12 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6" aria-label="Navegación principal">
          <div className="flex items-center space-x-6 mr-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                active={isActivePath(location.pathname, item.to)}
                isScrolled={isScrolled}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Social media links */}
          <div className="flex items-center space-x-3">
            <SocialLink
              href={BUSINESS.facebook}
              aria-label="Facebook"
              isScrolled={isScrolled}
            >
              <Facebook size={20} />
            </SocialLink>
            <SocialLink
              href={BUSINESS.instagram}
              aria-label="Instagram"
              isScrolled={isScrolled}
            >
              <Instagram size={20} />
            </SocialLink>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-4 py-2 rounded-full ${
                isScrolled
                  ? 'bg-green-700 text-white hover:bg-green-800'
                  : 'bg-white text-primary hover:bg-white/90'
              } transition-colors`}
            >
              <WhatsAppIcon className="h-[18px] w-[18px] mr-2" />
              <span className="text-sm font-semibold">Escribinos</span>
            </a>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in absolute w-full">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <MobileNavLink key={item.to} to={item.to} active={isActivePath(location.pathname, item.to)}>
                {item.label}
              </MobileNavLink>
            ))}

            {/* Mobile social media links */}
            <div className="flex items-center space-x-4 pt-2 border-t border-gray-100">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                <Facebook size={18} className="mr-2" />
                Facebook
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
              >
                <Instagram size={18} className="mr-2" />
                Instagram
              </a>
            </div>

            {/* Mobile WhatsApp button */}
            <WhatsAppButton className="w-full">Consultar por WhatsApp</WhatsAppButton>
          </nav>
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
      aria-current={active ? 'page' : undefined}
      className={`font-medium transition-colors relative ${
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
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isScrolled: boolean;
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
      aria-current={active ? 'page' : undefined}
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
