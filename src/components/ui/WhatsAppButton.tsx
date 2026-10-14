import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { buildWhatsAppUrl } from '@/lib/business';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';

const whatsAppButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        // Verde oscuro: contraste AA con texto blanco sobre fondos claros
        solid: 'bg-green-700 text-white hover:bg-green-800',
        // Verde WhatsApp: para fondos oscuros (verde de la marca)
        bright: 'bg-whatsapp text-gray-900 hover:bg-whatsapp-hover',
        outline: 'border-2 border-green-700 text-green-700 hover:bg-green-50',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
);

interface WhatsAppButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    VariantProps<typeof whatsAppButtonVariants> {
  message?: string;
}

const WhatsAppButton = React.forwardRef<HTMLAnchorElement, WhatsAppButtonProps>(
  ({ message, variant, size, className, children = 'Escribinos por WhatsApp', ...props }, ref) => (
    <a
      ref={ref}
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(whatsAppButtonVariants({ variant, size }), className)}
      {...props}
    >
      <WhatsAppIcon className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
      {children}
    </a>
  )
);
WhatsAppButton.displayName = 'WhatsAppButton';

export { WhatsAppButton, whatsAppButtonVariants };
