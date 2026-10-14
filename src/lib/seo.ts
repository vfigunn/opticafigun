import { createContext } from 'react';
import { BUSINESS, SITE_URL } from '@/lib/business';
import type { Faq, Service } from '@/data/services';
import { SERVICES, servicePath } from '@/data/services';

type JsonLd = Record<string, unknown>;

export interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: JsonLd[];
}

// Durante el prerender (entry-server) el componente <Seo> deja acá sus datos
// para que el script de build los escriba en el <head> del HTML estático.
export interface SeoCollector {
  current: SeoProps | null;
}

export const SeoContext = createContext<SeoCollector | null>(null);

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const absoluteUrl = (path: string) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`);

interface HeadTag {
  tag: 'meta' | 'link';
  key: 'name' | 'property' | 'rel';
  keyValue: string;
  valueAttr: 'content' | 'href';
  value: string;
}

export const buildHeadTags = ({ title, description, path, image, noindex }: SeoProps): HeadTag[] => {
  const url = absoluteUrl(path);
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  const meta = (key: 'name' | 'property', keyValue: string, value: string): HeadTag => ({
    tag: 'meta',
    key,
    keyValue,
    valueAttr: 'content',
    value,
  });

  return [
    meta('name', 'description', description),
    meta('name', 'robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'),
    { tag: 'link', key: 'rel', keyValue: 'canonical', valueAttr: 'href', value: url },
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', ogImage),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
    meta('name', 'twitter:image', ogImage),
  ];
};

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const renderHeadHtml = (seo: SeoProps) => {
  const tags = buildHeadTags(seo).map(
    ({ tag, key, keyValue, valueAttr, value }) =>
      `<${tag} ${key}="${keyValue}" ${valueAttr}="${escapeHtml(value)}" />`
  );
  return [`<title>${escapeHtml(seo.title)}</title>`, ...tags].join('\n    ');
};

export const applyHeadTags = (seo: SeoProps) => {
  document.title = seo.title;
  buildHeadTags(seo).forEach(({ tag, key, keyValue, valueAttr, value }) => {
    let element = document.head.querySelector(`${tag}[${key}="${keyValue}"]`);
    if (!element) {
      element = document.createElement(tag);
      element.setAttribute(key, keyValue);
      document.head.appendChild(element);
    }
    element.setAttribute(valueAttr, value);
  });
};

// ---------- Datos estructurados (schema.org) ----------

const OPTICIAN_ID = `${SITE_URL}/#optica`;
const WEBSITE_ID = `${SITE_URL}/#website`;

export const opticianSchema = (): JsonLd => ({
  '@type': 'Optician',
  '@id': OPTICIAN_ID,
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: absoluteUrl('/'),
  logo: `${SITE_URL}/icon-512.png`,
  image: DEFAULT_OG_IMAGE,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    addressRegion: BUSINESS.address.region,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  hasMap: BUSINESS.mapsUrl,
  areaServed: { '@type': 'City', name: 'Gualeguaychú' },
  openingHoursSpecification: BUSINESS.hours.map((range) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: range.days,
    opens: range.opens,
    closes: range.closes,
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.phone,
    contactType: 'customer service',
    availableLanguage: 'Spanish',
  },
  makesOffer: SERVICES.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      url: absoluteUrl(servicePath(service)),
    },
  })),
  sameAs: [BUSINESS.instagram, BUSINESS.facebook],
});

export const websiteSchema = (): JsonLd => ({
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: absoluteUrl('/'),
  name: BUSINESS.name,
  inLanguage: 'es-AR',
  publisher: { '@id': OPTICIAN_ID },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]): JsonLd => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (faqs: Faq[]): JsonLd => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

export const serviceSchema = (service: Service): JsonLd => ({
  '@type': 'Service',
  name: service.name,
  serviceType: service.name,
  description: service.metaDescription,
  url: absoluteUrl(servicePath(service)),
  image: absoluteUrl(service.imageUrl),
  provider: { '@id': OPTICIAN_ID },
  areaServed: { '@type': 'City', name: 'Gualeguaychú' },
});
