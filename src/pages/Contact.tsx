import { Facebook, Instagram, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import Seo from '@/components/seo/Seo';
import ContactForm from '@/components/forms/ContactForm';
import ContactDetails from '@/components/contact/ContactDetails';
import MapEmbed from '@/components/contact/MapEmbed';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { BUSINESS } from '@/lib/business';
import { breadcrumbSchema } from '@/lib/seo';

const BREADCRUMBS = [
  { name: 'Inicio', path: '/' },
  { name: 'Contacto', path: '/contacto' },
];

const Contact = () => {
  return (
    <Layout>
      <Seo
        title="Contacto y ubicación | Óptica Figún, Gualeguaychú"
        description="Contactá a Óptica Figún: WhatsApp +54 9 3446 65-8195, Magnasco 25, Gualeguaychú. Atendemos de lunes a viernes de 8:30 a 12:30 y de 16:30 a 19:30."
        path="/contacto"
        jsonLd={[breadcrumbSchema(BREADCRUMBS)]}
      />
      <PageHeader
        title="Contacto: Óptica Figún en Gualeguaychú"
        subtitle="La forma más rápida de comunicarte es por WhatsApp. También podés llamarnos o visitarnos en la óptica."
        breadcrumbs={BREADCRUMBS}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton size="lg">Escribinos por WhatsApp</WhatsAppButton>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 text-lg border-primary text-primary bg-transparent hover:bg-primary/10 hover:text-primary"
          >
            <a href={`tel:${BUSINESS.phone}`}>
              <Phone aria-hidden="true" />
              Llamar
            </a>
          </Button>
        </div>
      </PageHeader>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Información de contacto" className="mb-8" />
              <ContactDetails />
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Seguinos en redes</h3>
                <div className="flex flex-wrap gap-6">
                  <a
                    href={BUSINESS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <Instagram size={20} className="mr-2" aria-hidden="true" />
                    {BUSINESS.instagramHandle}
                  </a>
                  <a
                    href={BUSINESS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                  >
                    <Facebook size={20} className="mr-2" aria-hidden="true" />
                    {BUSINESS.facebookHandle}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionTitle
                title="Dejanos tu consulta"
                subtitle="Completá tu nombre y te abrimos WhatsApp con el mensaje listo."
                className="mb-8 [&_p]:mx-0"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container mx-auto">
          <MapEmbed className="h-[450px]" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
