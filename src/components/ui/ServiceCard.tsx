import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  whatsappMessage: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  href,
  whatsappMessage,
  className
}: ServiceCardProps) => {
  return (
    <article className={cn(
      "group flex flex-col overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white",
      className
    )}>
      <Link to={href} className="relative block h-48 overflow-hidden" tabIndex={-1} aria-hidden="true">
        <img
          src={imageUrl}
          alt={imageAlt}
          width={400}
          height={192}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          <Link to={href} className="hover:text-primary transition-colors">
            {title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            to={href}
            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline"
          >
            Ver más <span className="sr-only">sobre {title.toLowerCase()}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <WhatsAppButton message={whatsappMessage} size="sm" variant="outline">
            Consultar
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
