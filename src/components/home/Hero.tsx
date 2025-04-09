
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/95 to-primary min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill="url(#smallGrid)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Cuidamos tu visión, mejoramos tu vida
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg animate-slide-in">
              En Óptica Figun Gualeguaychú nos dedicamos a brindar soluciones visuales personalizadas de la más alta calidad para toda la familia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/nosotros">
                <Button variant="secondary" size="lg">
                  Conocenos
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/30 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Anteojos de alta calidad" 
                className="rounded-lg shadow-2xl relative z-10 object-cover w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
