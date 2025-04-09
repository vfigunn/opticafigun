
import { Link } from 'react-router-dom';
import Button from '../ui/button-custom';

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-secondary/20 rounded-lg blur-md"></div>
            <img 
              src="https://i.ibb.co/21070qzw/Whats-App-Image-2025-04-09-at-13-59-31.jpg" 
              alt="Interior de Óptica Figun" 
              className="rounded-lg shadow-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <p className="text-primary font-bold text-xl md:text-2xl">
                +30 años
              </p>
              <p className="text-gray-600">
                de experiencia
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Sobre Óptica Figún Gualeguaychú
            </h2>
            
            <div className="h-1 w-20 bg-primary mb-6"></div>
            
            <p className="text-lg text-gray-600 mb-6">
              En Óptica Figún Gualeguaychú nos destacamos por brindar soluciones visuales integrales con atención profesional y personalizada. Nuestra trayectoria nos respalda como una de las ópticas de mayor confianza en la región.
            </p>
            
            <p className="text-lg text-gray-600 mb-8">
              Contamos con los mejores productos del mercado, tecnología de vanguardia y un equipo de profesionales altamente capacitados para ofrecer el servicio que nuestros clientes merecen.
            </p>
            
            <div className="flex flex-wrap gap-4 items-center">
              <Link to="/nosotros">
                <Button variant="primary">
                  Conocer Más
                </Button>
              </Link>
              
              <Link to="/contacto" className="text-primary hover:underline transition-all font-medium">
                Contactanos &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
