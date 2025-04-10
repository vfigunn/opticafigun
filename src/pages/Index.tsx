
import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Óptica Figún | Óptica en Gualeguaychú - Lentes de contacto, Lentes Recetados y de Sol';
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutPreview />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
};

export default Index;
