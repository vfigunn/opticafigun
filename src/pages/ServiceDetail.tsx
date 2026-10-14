import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import Seo from '@/components/seo/Seo';
import Faq from '@/components/home/Faq';
import CallToAction from '@/components/home/CallToAction';
import SectionTitle from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { SERVICES, getServiceBySlug, servicePath } from '@/data/services';
import { BUSINESS } from '@/lib/business';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/seo';
import NotFound from './NotFound';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug ?? '');

  if (!service) {
    return <NotFound />;
  }

  const breadcrumbs = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/servicios' },
    { name: service.name, path: servicePath(service) },
  ];
  const otherServices = SERVICES.filter((item) => item.slug !== service.slug);

  return (
    <Layout>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={servicePath(service)}
        jsonLd={[serviceSchema(service), breadcrumbSchema(breadcrumbs), faqSchema(service.faqs)]}
      />
      <PageHeader title={service.heading} subtitle={service.shortDescription} breadcrumbs={breadcrumbs}>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton size="lg" message={service.whatsappMessage}>
            Consultar por WhatsApp
          </WhatsAppButton>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title={`${service.name} en Óptica Figún`} className="mb-8" />
              {service.intro.map((paragraph) => (
                <p key={paragraph} className="text-lg text-gray-700 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-primary/10 rounded-lg blur-md"></div>
              <img
                src={service.imageUrl}
                alt={service.imageAlt}
                width={service.imageWidth}
                height={service.imageHeight}
                decoding="async"
                className="rounded-lg shadow-lg w-full max-h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle title="Qué te ofrecemos" center />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature) => (
              <li key={feature.title} className="bg-white p-8 rounded-lg shadow-md">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary">
                  <Check size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq
        faqs={service.faqs}
        title={`Preguntas frecuentes sobre ${service.name.toLowerCase()}`}
        whatsappMessage={service.whatsappMessage}
        className="bg-white"
      />

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle title="Otros servicios" center />
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((item) => (
              <li key={item.slug}>
                <Link
                  to={servicePath(item)}
                  className="group flex h-full items-center justify-between gap-4 rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <span className="text-lg font-semibold text-gray-800 group-hover:text-primary">
                    {item.name} en Gualeguaychú
                  </span>
                  <ArrowRight className="text-primary flex-shrink-0" size={20} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CallToAction
        title={`Consultá por ${service.name.toLowerCase()}`}
        text="Escribinos por WhatsApp y te asesoramos sin compromiso, o visitanos en Magnasco 25, Gualeguaychú."
        whatsappMessage={service.whatsappMessage}
      />
    </Layout>
  );
};

export default ServiceDetail;
