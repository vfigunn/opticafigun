import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/layout/PageHeader';
import Seo from '@/components/seo/Seo';
import CallToAction from '@/components/home/CallToAction';
import SectionTitle from '@/components/ui/SectionTitle';
import { breadcrumbSchema } from '@/lib/seo';

const BREADCRUMBS = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
];

const About = () => {
  return (
    <Layout>
      <Seo
        title="Nosotros: más de 30 años de óptica en Gualeguaychú | Óptica Figún"
        description="Conocé la historia de Óptica Figún, óptica y laboratorio óptico familiar en Gualeguaychú con más de tres décadas cuidando la salud visual de la región."
        path="/nosotros"
        jsonLd={[breadcrumbSchema(BREADCRUMBS)]}
      />
      <PageHeader
        title="Óptica Figún: más de 30 años en Gualeguaychú"
        subtitle="Conocé más sobre Óptica Figún, nuestra trayectoria y compromiso con la salud visual en Gualeguaychú."
        breadcrumbs={BREADCRUMBS}
      />

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Nuestra Historia" 
                className="mb-8"
              />
              <p className="text-lg text-gray-700 mb-6">
                Fundada hace más de tres décadas, Óptica Figún nació con la visión de brindar soluciones visuales de calidad a los habitantes de Gualeguaychú y alrededores. Lo que comenzó como un pequeño emprendimiento familiar, se ha convertido en un referente en el cuidado de la salud visual en la región.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                A lo largo de los años, hemos crecido y evolucionado, incorporando tecnología de vanguardia y ampliando nuestra oferta de productos y servicios, pero manteniendo siempre la calidez y el trato personalizado que nos caracteriza.
              </p>
              <p className="text-lg text-gray-700">
                Nuestro compromiso con la excelencia y la satisfacción de nuestros clientes ha sido el motor que impulsa nuestro crecimiento, permitiéndonos ganar la confianza de miles de personas que han elegido cuidar su salud visual con nosotros.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-primary/10 rounded-lg blur-md"></div>
              <img
                src="/images/gustavo-figun-optica-figun.webp"
                alt="Gustavo Figún, de Óptica Figún en Gualeguaychú"
                width={432}
                height={576}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle 
            title="Nuestros Valores" 
            subtitle="Los pilares que guían nuestro trabajo día a día"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Calidad</h3>
              <p className="text-gray-600">
                Trabajamos únicamente con productos y marcas de primera calidad, garantizando la mejor experiencia visual posible para nuestros clientes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Profesionalismo</h3>
              <p className="text-gray-600">
                Contamos con un equipo altamente capacitado que se actualiza constantemente para ofrecer el mejor servicio y asesoramiento posible.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Atención Personalizada</h3>
              <p className="text-gray-600">
                Cada cliente es único, por eso nos tomamos el tiempo necesario para entender sus necesidades específicas y ofrecer la mejor solución.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Commitment */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-w-16 aspect-h-9">
              <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-primary/10 rounded-lg blur-md"></div>
              <img
                src="/images/interior-optica-figun-gualeguaychu.webp"
                alt="Interior de Óptica Figún en Gualeguaychú"
                width={576}
                height={432}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <SectionTitle 
                title="Nuestro Compromiso" 
                className="mb-8"
              />
              <p className="text-lg text-gray-700 mb-6">
                En Óptica Figún estamos comprometidos con la salud visual de nuestros clientes. Nos esforzamos por:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-lg text-gray-700">Ofrecer productos de alta calidad que mejoren la calidad de vida.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-lg text-gray-700">Brindar un asesoramiento honesto y profesional.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-lg text-gray-700">Mantenernos actualizados con las últimas tendencias y tecnologías.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">✓</span>
                  <span className="text-lg text-gray-700">Crear relaciones duraderas con nuestros clientes basadas en la confianza y el respeto.</span>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>
      <CallToAction
        title="Vení a conocernos"
        text="Te esperamos en Magnasco 25, Gualeguaychú. Si preferís, escribinos por WhatsApp y te asesoramos."
      />
    </Layout>
  );
};

export default About;
