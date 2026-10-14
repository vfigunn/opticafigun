import { cn } from '@/lib/utils';
import { BUSINESS } from '@/lib/business';

interface MapEmbedProps {
  className?: string;
}

const MapEmbed = ({ className }: MapEmbedProps) => (
  <div className={cn('overflow-hidden rounded-lg bg-gray-100 shadow-lg', className)}>
    <iframe
      src={BUSINESS.mapsEmbedUrl}
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Mapa: Óptica Figún, Magnasco 25, Gualeguaychú"
      className="h-full w-full"
    ></iframe>
  </div>
);

export default MapEmbed;
