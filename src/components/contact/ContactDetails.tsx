import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { BUSINESS, FULL_ADDRESS, buildWhatsAppUrl } from '@/lib/business';

const ITEM_ICON_CLASS = 'h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-primary';

interface DetailItemProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

const DetailItem = ({ icon, title, children }: DetailItemProps) => (
  <li className="flex items-start">
    <div className={ITEM_ICON_CLASS}>{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
      {children}
    </div>
  </li>
);

const LINK_CLASS = 'text-gray-600 hover:text-primary underline-offset-4 hover:underline';

const ContactDetails = () => (
  <address className="not-italic">
    <ul className="space-y-6">
      <DetailItem icon={<MapPin size={22} aria-hidden="true" />} title="Dirección">
        <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {FULL_ADDRESS}, {BUSINESS.address.countryName}
        </a>
      </DetailItem>
      <DetailItem icon={<Clock size={22} aria-hidden="true" />} title="Horarios de atención">
        <p className="text-gray-600">{BUSINESS.hoursDisplay}</p>
      </DetailItem>
      <DetailItem icon={<WhatsAppIcon className="h-[22px] w-[22px]" />} title="WhatsApp">
        <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
          {BUSINESS.phoneDisplay}
        </a>
      </DetailItem>
      <DetailItem icon={<Phone size={22} aria-hidden="true" />} title="Teléfono">
        <a href={`tel:${BUSINESS.phone}`} className={LINK_CLASS}>
          {BUSINESS.phoneDisplay}
        </a>
      </DetailItem>
      <DetailItem icon={<Mail size={22} aria-hidden="true" />} title="Email">
        <a href={`mailto:${BUSINESS.email}`} className={LINK_CLASS}>
          {BUSINESS.email}
        </a>
      </DetailItem>
    </ul>
  </address>
);

export default ContactDetails;
