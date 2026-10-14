import { Link } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/ui/ServiceCard';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SERVICES, servicePath } from '@/data/services';

interface ServicesProps {
  title?: string;
  subtitle?: string;
  showAllLink?: boolean;
}

const Services = ({
  title = 'Servicios ópticos en Gualeguaychú',
  subtitle = 'Ofrecemos soluciones visuales completas con la más alta calidad y atención personalizada',
  showAllLink = true,
}: ServicesProps) => {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle title={title} subtitle={subtitle} center />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.name}
              description={service.shortDescription}
              imageUrl={service.imageUrl}
              imageAlt={service.imageAlt}
              href={servicePath(service)}
              whatsappMessage={service.whatsappMessage}
              className="transform transition-transform hover:-translate-y-2"
            />
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4">
          <WhatsAppButton size="lg">Consultar por WhatsApp</WhatsAppButton>
          {showAllLink && (
            <Button asChild variant="outline" size="lg" className="h-12 text-lg border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <Link to="/servicios">Ver todos los servicios</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
