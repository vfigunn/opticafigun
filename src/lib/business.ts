// Única fuente de verdad para los datos del negocio (NAP: nombre, dirección, teléfono).
// Google compara estos datos con el Perfil de Empresa: tienen que ser idénticos en todo el sitio.

export const SITE_URL = 'https://www.opticafigun.com.ar';

export const BUSINESS = {
  name: 'Óptica Figún',
  description:
    'Óptica y laboratorio óptico en Gualeguaychú, Entre Ríos. Anteojos recetados, lentes de contacto, lentes de sol y exámenes visuales con atención personalizada desde hace más de 30 años.',
  phone: '+5493446658195',
  phoneDisplay: '+54 9 3446 65-8195',
  whatsappNumber: '5493446658195',
  email: 'opticafigun@gmail.com',
  address: {
    street: 'Magnasco 25',
    city: 'Gualeguaychú',
    region: 'Entre Ríos',
    postalCode: '2820',
    country: 'AR',
    countryName: 'Argentina',
  },
  geo: {
    latitude: -33.00855447502192,
    longitude: -58.52056042206454,
  },
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '12:30' },
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '16:30', closes: '19:30' },
  ],
  hoursDisplay: 'Lunes a viernes de 8:30 a 12:30 y de 16:30 a 19:30',
  mapsUrl: 'https://maps.google.com/?cid=5588442350174646089',
  mapsEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.818720755096!2d-58.52056042206454!3d-33.00855447502192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95baa82830e4a27b%3A0x4d8e22b569e8af49!2sOptica%20Figun!5e0!3m2!1ses!2sar!4v1744219583114!5m2!1ses!2sar',
  instagram: 'https://www.instagram.com/opticafigun',
  instagramHandle: '@opticafigun',
  facebook: 'https://www.facebook.com/optica.figun/',
  facebookHandle: '@optica.figun',
} as const;

export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.region}`;

export const WHATSAPP_DEFAULT_MESSAGE = '¡Hola! Vengo del sitio web y me gustaría más información.';

export const buildWhatsAppMessage = (topic?: string) =>
  topic
    ? `¡Hola! Vengo del sitio web y me gustaría consultar por ${topic}.`
    : WHATSAPP_DEFAULT_MESSAGE;

export const buildWhatsAppUrl = (message: string = WHATSAPP_DEFAULT_MESSAGE) =>
  `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
