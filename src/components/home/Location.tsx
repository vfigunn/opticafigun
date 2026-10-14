import { MapPin, Phone } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import ContactDetails from '@/components/contact/ContactDetails';
import MapEmbed from '@/components/contact/MapEmbed';
import { BUSINESS, FULL_ADDRESS } from '@/lib/business';

const Location = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionTitle
        title="Visitá nuestra óptica en Gualeguaychú"
        subtitle={`Te esperamos en ${FULL_ADDRESS}`}
        center
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        <div>
          <ContactDetails />
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton>Escribinos</WhatsAppButton>
            <Button asChild variant="outline" className="h-11 px-5 border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin aria-hidden="true" />
                Cómo llegar
              </a>
            </Button>
            <Button asChild variant="outline" className="h-11 px-5 border-primary text-primary hover:bg-primary/10 hover:text-primary">
              <a href={`tel:${BUSINESS.phone}`}>
                <Phone aria-hidden="true" />
                Llamar
              </a>
            </Button>
          </div>
        </div>
        <MapEmbed className="h-[360px] lg:h-auto lg:min-h-[420px]" />
      </div>
    </div>
  </section>
);

export default Location;
