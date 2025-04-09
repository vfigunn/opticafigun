
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';
import Button from '../ui/button-custom';
import { Link } from 'react-router-dom';

const servicesData = [
  {
    id: 1,
    title: "Anteojos Recetados",
    description: "Amplia variedad de armazones y lentes personalizados para satisfacer tus necesidades visuales con la máxima precisión.",
    imageUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Lentes de Sol",
    description: "Protección UV de alta calidad combinada con el mejor estilo. Disponemos de las mejores marcas del mercado.",
    imageUrl: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Lentes de Contacto",
    description: "Soluciones cómodas y seguras adaptadas a tu estilo de vida, desde opciones diarias hasta mensuales y tóricas.",
    imageUrl: "https://images.unsplash.com/photo-1600963295886-2059072e3644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Exámenes Visuales",
    description: "Evaluaciones completas de la vista realizadas por profesionales experimentados utilizando tecnología de vanguardia.",
    imageUrl: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Nuestros Servicios" 
          subtitle="Ofrecemos soluciones visuales completas con la más alta calidad y atención personalizada"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map(service => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              className="transform transition-transform hover:-translate-y-2"
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/contacto">
            <Button variant="primary" size="lg">
              Consultar por Servicios
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
