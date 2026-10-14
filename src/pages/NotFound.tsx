import { Link } from "react-router-dom";
import Layout from '@/components/layout/Layout';
import Seo from '@/components/seo/Seo';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const NotFound = () => {
  return (
    <Layout>
      <Seo
        title="Página no encontrada | Óptica Figún"
        description="La página que buscás no existe. Volvé al inicio de Óptica Figún, tu óptica en Gualeguaychú."
        path="/404"
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-secondary/10 px-4 pt-24">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <p className="text-2xl text-gray-800 mb-8">¡Oops! Página no encontrada</p>
          <p className="text-gray-600 mb-8">
            La página que estás buscando no existe o fue trasladada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">Volver al inicio</Link>
            </Button>
            <WhatsAppButton variant="outline">Escribinos</WhatsAppButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
