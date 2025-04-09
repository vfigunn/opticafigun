
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from '../components/ui/button';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Óptica Figun Gualeguaychú - Página no encontrada';
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-secondary/10 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-2xl text-gray-800 mb-8">¡Oops! Página no encontrada</p>
          <p className="text-gray-600 mb-8">
            La página que estás buscando no existe o ha sido trasladada.
          </p>
          <Link to="/">
            <Button variant="primary" size="lg">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
