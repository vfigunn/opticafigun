import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BUSINESS } from '@/lib/business';

interface CallToActionProps {
  title?: string;
  text?: string;
  whatsappMessage?: string;
}

const CallToAction = ({
  title = 'Tu visión merece lo mejor',
  text = 'Visitá nuestra óptica en Gualeguaychú o escribinos por WhatsApp: te respondemos y te asesoramos para encontrar la solución visual ideal para vos.',
  whatsappMessage,
}: CallToActionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-primary rounded-xl overflow-hidden relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
              {title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              {text}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppButton variant="bright" size="lg" message={whatsappMessage}>
                Escribinos por WhatsApp
              </WhatsAppButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 text-lg bg-transparent border-white text-white hover:bg-white/10 hover:text-white"
              >
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin aria-hidden="true" />
                  Cómo llegar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
