import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const AboutPreview = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-secondary/20 rounded-lg blur-md"></div>
            <img
              src="/images/exhibicion-anteojos-optica-figun.webp"
              alt="Interior de Óptica Figún en Gualeguaychú"
              width={960}
              height={1280}
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
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
              En Óptica Figún nos destacamos por brindar soluciones visuales integrales con atención profesional y
              personalizada. Somos un centro óptico y laboratorio óptico con más de 30 años de trayectoria en
              Gualeguaychú, y una de las ópticas de mayor confianza en la región.
            </p>

            <p className="text-lg text-gray-600 mb-8">
              Contamos con los mejores productos del mercado, tecnología de vanguardia y un equipo de profesionales
              altamente capacitados para ofrecer el servicio que nuestros clientes merecen.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <Button asChild size="lg" className="h-12 text-lg">
                <Link to="/nosotros">Conocé nuestra historia</Link>
              </Button>
              <WhatsAppButton variant="outline" size="lg">
                Escribinos
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
