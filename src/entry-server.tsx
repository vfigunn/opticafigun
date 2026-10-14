import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppContent } from './App';
import { SERVICES, servicePath } from '@/data/services';
import { SITE_URL } from '@/lib/business';
import { SeoContext, renderHeadHtml, type SeoCollector } from '@/lib/seo';

// Rutas que se generan como HTML estático (y van al sitemap).
export const PRERENDER_ROUTES = [
  '/',
  '/servicios',
  ...SERVICES.map(servicePath),
  '/nosotros',
  '/contacto',
];

export { SITE_URL };

export const render = (url: string) => {
  const seo: SeoCollector = { current: null };
  const html = renderToString(
    <SeoContext.Provider value={seo}>
      <QueryClientProvider client={new QueryClient()}>
        <StaticRouter location={url}>
          <AppContent />
        </StaticRouter>
      </QueryClientProvider>
    </SeoContext.Provider>
  );

  if (!seo.current) {
    throw new Error(`La ruta ${url} no renderizó un componente <Seo>`);
  }

  return { html, head: renderHeadHtml(seo.current) };
};
