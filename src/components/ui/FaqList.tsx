import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Faq } from '@/data/services';

interface FaqListProps {
  faqs: Faq[];
  className?: string;
}

// <details> mantiene las respuestas en el HTML aunque estén cerradas,
// así Google puede leerlas (a diferencia de un acordeón que las desmonta).
const FaqList = ({ faqs, className }: FaqListProps) => (
  <div className={cn('space-y-4', className)}>
    {faqs.map((faq) => (
      <details key={faq.question} className="group rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left text-lg font-semibold text-gray-800 [&::-webkit-details-marker]:hidden">
          <h3>{faq.question}</h3>
          <ChevronDown
            aria-hidden="true"
            className="h-5 w-5 flex-shrink-0 text-primary transition-transform group-open:rotate-180"
          />
        </summary>
        <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
      </details>
    ))}
  </div>
);

export default FaqList;
