import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import Seo from '@/components/seo/Seo';
import ServicesGrid from '@/components/home/Services';
import CallToAction from '@/components/home/CallToAction';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { breadcrumbSchema } from '@/lib/seo';

const BREADCRUMBS = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
];

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Servicios ópticos en Gualeguaychú | Óptica Figún"
        description="Anteojos recetados, lentes de contacto, lentes de sol y exámenes visuales en Gualeguaychú. Conocé los servicios de Óptica Figún y consultá por WhatsApp."
        path="/servicios"
        jsonLd={[breadcrumbSchema(BREADCRUMBS)]}
      />
      <PageHeader
        title="Servicios ópticos en Gualeguaychú"
        subtitle="Todo lo que necesitás para cuidar tu visión en un solo lugar: anteojos recetados, lentes de contacto, lentes de sol y exámenes visuales, con atención personalizada."
        breadcrumbs={BREADCRUMBS}
      >
        <WhatsAppButton size="lg" className="mt-8">
          Consultar por WhatsApp
        </WhatsAppButton>
      </PageHeader>
      <ServicesGrid
        title="Elegí el servicio que necesitás"
        subtitle="Hacé clic en cada servicio para conocer más o escribinos directamente por WhatsApp"
        showAllLink={false}
      />
      <CallToAction />
    </Layout>
  );
};

export default Services;
