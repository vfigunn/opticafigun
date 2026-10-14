import Layout from '@/components/layout/Layout';
import Seo from '@/components/seo/Seo';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import Location from '@/components/home/Location';
import Faq from '@/components/home/Faq';
import CallToAction from '@/components/home/CallToAction';
import { HOME_FAQS } from '@/data/faqs';
import { faqSchema } from '@/lib/seo';

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Óptica en Gualeguaychú | Anteojos y Lentes de Contacto - Óptica Figún"
        description="Óptica en Gualeguaychú con más de 30 años de experiencia: anteojos recetados, lentes de contacto, lentes de sol y exámenes visuales. Consultá por WhatsApp."
        path="/"
        jsonLd={[faqSchema(HOME_FAQS)]}
      />
      <Hero />
      <Services />
      <AboutPreview />
      <Testimonials />
      <Location />
      <Faq faqs={HOME_FAQS} />
      <CallToAction />
    </Layout>
  );
};

export default Index;
