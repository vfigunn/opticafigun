import { Link } from 'react-router-dom';
import { Check, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BUSINESS } from '@/lib/business';

const HIGHLIGHTS = ['Más de 30 años de experiencia', 'Laboratorio óptico', 'Atención personalizada'];

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/95 to-primary min-h-[600px] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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

      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16 md:pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold mb-6">
              <MapPin size={16} aria-hidden="true" />
              {BUSINESS.address.street} · {BUSINESS.address.city}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-2xl md:text-3xl font-semibold text-secondary mb-3">
                Óptica en Gualeguaychú
              </span>{' '}
              Cuidamos tu visión, mejoramos tu vida
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-lg animate-slide-in">
              En <b>Óptica Figún</b> te asesoramos con anteojos recetados, lentes de contacto, lentes de sol y
              exámenes visuales. Soluciones visuales personalizadas para toda la familia.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton variant="bright" size="lg">
                Consultar por WhatsApp
              </WhatsAppButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 text-lg bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
              >
                <Link to="/servicios">Ver servicios</Link>
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm md:text-base text-white/90">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={18} className="text-secondary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/30 rounded-lg blur-xl"></div>
              <img
                src="/images/local-optica-figun-gualeguaychu.webp"
                alt="Local de Óptica Figún en Gualeguaychú con exhibición de anteojos"
                width={960}
                height={1280}
                className="rounded-lg shadow-2xl h-80 relative z-10 object-cover w-full animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
