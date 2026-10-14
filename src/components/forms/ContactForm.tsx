import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { BUSINESS, WHATSAPP_DEFAULT_MESSAGE, buildWhatsAppUrl } from '@/lib/business';
import { SERVICES } from '@/data/services';

const TOPICS = [...SERVICES.map((service) => service.name), 'Otra consulta'];

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Ingresá tu nombre'),
  topic: z.string().optional(),
  message: z.string().trim().max(500, 'El mensaje puede tener hasta 500 caracteres').optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const buildMessage = ({ name, topic, message }: ContactFormValues) =>
  [
    WHATSAPP_DEFAULT_MESSAGE,
    `Mi nombre es ${name.trim()}.`,
    topic && topic !== 'Otra consulta' ? `Quiero consultar por: ${topic}.` : '',
    message?.trim() ?? '',
  ]
    .filter(Boolean)
    .join('\n');

// Formulario mínimo: arma el mensaje y abre WhatsApp listo para enviar.
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', topic: '', message: '' },
  });

  const onSubmit = (values: ContactFormValues) => {
    window.open(buildWhatsAppUrl(buildMessage(values)), '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Tu nombre *
        </label>
        <input
          id="name"
          type="text"
          autoComplete="given-name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          {...register('name')}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600">
            {errors.name.message}
          </p>
        )}
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">¿Sobre qué querés consultar?</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic) => (
            <label key={topic} className="cursor-pointer">
              <input type="radio" value={topic} {...register('topic')} className="peer sr-only" />
              <span className="inline-block rounded-full border border-gray-300 px-4 py-2 text-sm text-gray-700 transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-primary/40">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje <span className="font-normal text-gray-500">(opcional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
          className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600">
            {errors.message.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="inline-flex w-full md:w-auto items-center justify-center gap-2 h-12 px-6 rounded-md bg-green-700 text-white text-lg font-semibold hover:bg-green-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Enviar por WhatsApp
        </button>
        <p className="mt-3 text-sm text-gray-500">
          Se abrirá WhatsApp con tu mensaje listo para enviar. ¿Preferís email? Escribinos a{' '}
          <a href={`mailto:${BUSINESS.email}`} className="text-primary underline underline-offset-2">
            {BUSINESS.email}
          </a>
          .
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
