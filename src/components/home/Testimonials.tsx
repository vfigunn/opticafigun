
import SectionTitle from '../ui/SectionTitle';
import { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "María González",
    text: "La atención en Óptica Figun es excelente. El personal es muy amable y profesional. Me asesoraron perfectamente para elegir los anteojos que mejor se adaptaban a mis necesidades.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    text: "Compré mis lentes de contacto aquí y la experiencia fue muy satisfactoria. Me explicaron detalladamente cómo usarlos y cuidarlos. Sin duda, volveré a comprar aquí.",
    rating: 5
  },
  {
    id: 3,
    name: "Laura Fernández",
    text: "Excelente servicio y variedad de productos. El examen visual fue muy completo y me sentí muy cómoda durante todo el proceso.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };
  
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <SectionTitle 
          title="Lo que dicen nuestros clientes" 
          subtitle="La satisfacción de nuestros clientes es nuestra mayor recompensa"
          center
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonials */}
            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <div className="flex justify-center mb-6">
                {/* Stars */}
                <div className="flex">
                  {[...Array(testimonialsData[activeIndex].rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-center text-gray-700 mb-6">
                "{testimonialsData[activeIndex].text}"
              </blockquote>
              
              <div className="flex flex-col items-center">
                <p className="font-semibold text-primary">{testimonialsData[activeIndex].name}</p>
                <p className="text-sm text-gray-500">Cliente</p>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute -bottom-5 left-0 right-0 flex justify-center space-x-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      idx === activeIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Ver testimonio ${idx + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full shadow-lg p-2 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Testimonio anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white rounded-full shadow-lg p-2 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Siguiente testimonio"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
