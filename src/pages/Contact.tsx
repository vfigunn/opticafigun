
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/forms/ContactForm';
import { Button } from '../components/ui/button';

const Contact = () => {
  useEffect(() => {
    document.title = 'Óptica Figun Gualeguaychú - Contacto';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-32 pb-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Contacto
              </h1>
              <div className="h-1 w-20 bg-primary mb-6"></div>
              <p className="text-xl text-gray-700">
                Estamos aquí para atender todas tus consultas. No dudes en contactarnos.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionTitle 
                  title="Información de Contacto" 
                  className="mb-8"
                />
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Dirección</h3>
                      <p className="text-gray-600">Urquiza 1000</p>
                      <p className="text-gray-600">Gualeguaychú, Entre Ríos, Argentina</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
                      <p className="text-gray-600">(03446) 123456</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                      <p className="text-gray-600">info@opticafigun.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Horarios de Atención</h3>
                      <p className="text-gray-600">Lunes a Viernes: 9:00 - 13:00 / 17:00 - 20:00</p>
                      <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Redes Sociales</h3>
                      <a 
                        href="https://www.instagram.com/opticafigun" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-primary transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        @opticafigun
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <a 
                    href="https://www.instagram.com/opticafigun" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      Síguenos en Instagram
                    </Button>
                  </a>
                </div>
              </div>
              
              <div>
                <SectionTitle 
                  title="Envíanos un mensaje" 
                  className="mb-8"
                />
                
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        {/* Map */}
        <section className="pt-12 pb-0">
          <div className="container mx-auto">
            <div className="bg-white rounded-t-lg shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 h-[500px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.6930047375664!2d-58.51516662426067!3d-32.99466747311384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b0071dbdce3293%3A0x8330b71f7d70e4c9!2sUrquiza%201000%2C%20Gualeguaych%C3%BA%2C%20Entre%20R%C3%ADos!5e0!3m2!1ses-419!2sar!4v1712685693261!5m2!1ses-419!2sar" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Óptica Figun"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
