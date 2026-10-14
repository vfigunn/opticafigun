import { useLocation } from 'react-router-dom';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/business';
import { SERVICES, servicePath } from '@/data/services';

// Botón fijo visible en todo el sitio. En las páginas de servicio el mensaje
// predeterminado menciona el servicio que el usuario está mirando.
const FloatingWhatsApp = () => {
  const { pathname } = useLocation();
  const service = SERVICES.find((item) => servicePath(item) === pathname);
  const message = service?.whatsappMessage ?? WHATSAPP_DEFAULT_MESSAGE;

  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 md:bottom-8 md:right-8"
    >
      <span className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg ring-1 ring-black/5 md:block">
        ¿Consultas? Escribinos
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl ring-2 ring-white transition-transform group-hover:scale-110 group-focus-visible:ring-4 group-focus-visible:ring-green-700 md:h-16 md:w-16">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full bg-whatsapp opacity-60 animate-ping [animation-iteration-count:3] motion-reduce:hidden"
        />
        <WhatsAppIcon className="relative h-8 w-8 md:h-9 md:w-9" />
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
