
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoPlaceholder from '../../assets/logo-placeholder.svg';

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
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
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
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/" active={location.pathname === "/"}>
            Inicio
          </NavLink>
          <NavLink to="/nosotros" active={location.pathname === "/nosotros"}>
            Nosotros
          </NavLink>
          <NavLink to="/contacto" active={location.pathname === "/contacto"}>
            Contacto
          </NavLink>
          <a 
            href="https://www.instagram.com/opticafigun" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
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
            <a 
              href="https://www.instagram.com/opticafigun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-primary hover:bg-gray-100 rounded-md transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
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
  active 
}: { 
  children: React.ReactNode; 
  to: string; 
  active: boolean;
}) => {
  return (
    <Link
      to={to}
      className={`font-medium transition-colors relative ${
        active 
        ? 'text-primary' 
        : 'text-gray-700 hover:text-primary'
      }`}
    >
      {children}
      {active && (
        <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-primary" />
      )}
    </Link>
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
