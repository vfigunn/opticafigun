// Genera un HTML estático por ruta (con su <head> SEO y el contenido ya renderizado)
// y el sitemap.xml. Se ejecuta después de `vite build` y `vite build --ssr`.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const HEAD_PLACEHOLDER = /<!--seo-head-->[\s\S]*?<!--\/seo-head-->/;
const ROOT_PLACEHOLDER = '<div id="root"></div>';

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
if (!HEAD_PLACEHOLDER.test(template) || !template.includes(ROOT_PLACEHOLDER)) {
  throw new Error('index.html debe contener <!--seo-head-->...<!--/seo-head--> y <div id="root"></div>');
}

const { render, PRERENDER_ROUTES, SITE_URL } = await import(pathToFileURL(ssrEntry).href);

const outputFile = (route) => (route === '/' ? 'index.html' : `${route.slice(1)}.html`);
const pages = [
  ...PRERENDER_ROUTES.map((route) => ({ route, file: outputFile(route) })),
  { route: '/404', file: '404.html' },
];

for (const { route, file } of pages) {
  const { html, head } = render(route);
  const page = template
    .replace(HEAD_PLACEHOLDER, () => head)
    .replace(ROOT_PLACEHOLDER, () => `<div id="root">${html}</div>`);
  const target = path.join(distDir, file);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, page);
  console.log(`prerender ${route} -> dist/${file}`);
}

const lastmod = new Date().toISOString().slice(0, 10);
const urls = PRERENDER_ROUTES.map(
  (route) => `  <url>
    <loc>${route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`
).join('\n');

await fs.writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
);
console.log(`sitemap.xml -> ${PRERENDER_ROUTES.length} URLs`);
