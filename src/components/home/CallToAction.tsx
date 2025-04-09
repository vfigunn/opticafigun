
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-primary rounded-xl overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>
          
          <div className="relative px-6 py-16 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Tu visión merece lo mejor
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Visita nuestra óptica en Gualeguaychú y descubre cómo podemos ayudarte a mejorar tu calidad de vida con soluciones visuales personalizadas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contacto">
                <Button variant="secondary" size="lg">
                  Contactanos
                </Button>
              </Link>
              <a 
                href="https://www.instagram.com/opticafigun" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Síguenos en Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
