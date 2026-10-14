import SectionTitle from '@/components/ui/SectionTitle';
import FaqList from '@/components/ui/FaqList';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { cn } from '@/lib/utils';
import type { Faq as FaqItem } from '@/data/services';

interface FaqProps {
  faqs: FaqItem[];
  title?: string;
  whatsappMessage?: string;
  className?: string;
}

const Faq = ({ faqs, title = 'Preguntas frecuentes', whatsappMessage, className }: FaqProps) => (
  <section className={cn('section-padding bg-gray-50', className)}>
    <div className="container mx-auto max-w-3xl">
      <SectionTitle title={title} center />
      <FaqList faqs={faqs} />
      <div className="mt-10 text-center">
        <p className="text-lg text-gray-700 mb-4">¿Tenés otra consulta?</p>
        <WhatsAppButton message={whatsappMessage}>Preguntanos por WhatsApp</WhatsAppButton>
      </div>
    </div>
  </section>
);

export default Faq;
