import { useContext, useEffect } from 'react';
import { SeoContext, applyHeadTags, opticianSchema, websiteSchema, type SeoProps } from '@/lib/seo';

// Define título, descripción, canonical, Open Graph y JSON-LD de cada página.
// En el build se escribe en el HTML estático; en el navegador se actualiza al navegar.
const Seo = ({ title, description, path, image, noindex, jsonLd = [] }: SeoProps) => {
  const collector = useContext(SeoContext);
  if (collector) {
    collector.current = { title, description, path, image, noindex, jsonLd };
  }

  useEffect(() => {
    applyHeadTags({ title, description, path, image, noindex });
  }, [title, description, path, image, noindex]);

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [opticianSchema(), websiteSchema(), ...jsonLd],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
};

export default Seo;
