import { buildWhatsAppMessage } from '@/lib/business';

export interface Faq {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string[];
  features: ServiceFeature[];
  faqs: Faq[];
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  whatsappMessage: string;
}

const LOCATION_FAQ: Faq = {
  question: '¿Dónde queda la óptica y en qué horario atienden?',
  answer:
    'Estamos en Magnasco 25, Gualeguaychú, Entre Ríos. Atendemos de lunes a viernes de 8:30 a 12:30 y de 16:30 a 19:30. También podés escribirnos por WhatsApp al +54 9 3446 65-8195.',
};

export const SERVICES: Service[] = [
  {
    slug: 'anteojos-recetados',
    name: 'Anteojos recetados',
    shortDescription:
      'Amplia variedad de armazones y lentes personalizados para satisfacer tus necesidades visuales con la máxima precisión.',
    metaTitle: 'Anteojos recetados en Gualeguaychú | Óptica Figún',
    metaDescription:
      'Anteojos recetados en Gualeguaychú: armazones para toda la familia y cristales a medida de tu receta. Pedí tu presupuesto por WhatsApp en Óptica Figún.',
    heading: 'Anteojos recetados en Gualeguaychú',
    intro: [
      'En Óptica Figún armamos tus anteojos recetados a partir de la indicación de tu médico oftalmólogo, con armazones de calidad y cristales adaptados a tu graduación y a tu forma de vida.',
      'Te asesoramos para elegir el armazón que mejor le queda a tu rostro y el cristal ideal para leer, trabajar frente a la computadora, manejar o usar todo el día. Como laboratorio óptico, cuidamos cada detalle del armado de tus anteojos.',
    ],
    features: [
      {
        title: 'Armazones para toda la familia',
        description: 'Modelos clásicos y de tendencia para adultos, jóvenes y niños, en distintos materiales y estilos.',
      },
      {
        title: 'Cristales monofocales',
        description: 'Para ver con nitidez de lejos o de cerca, según lo que indique tu receta.',
      },
      {
        title: 'Cristales multifocales y bifocales',
        description: 'Una solución cómoda para ver bien a todas las distancias con un solo par de anteojos.',
      },
      {
        title: 'Tratamientos para tus cristales',
        description: 'Antirreflejo, filtro de luz azul para pantallas y cristales fotocromáticos que se oscurecen con el sol.',
      },
    ],
    faqs: [
      {
        question: '¿Necesito receta para hacerme anteojos?',
        answer:
          'Sí. Para anteojos recetados necesitás la indicación de tu médico oftalmólogo. Traela a la óptica o mandanos una foto por WhatsApp y te asesoramos sobre armazones y cristales.',
      },
      {
        question: '¿Cuánto cuestan los anteojos recetados?',
        answer:
          'El precio depende del armazón y del tipo de cristal que necesites. Escribinos por WhatsApp con una foto de tu receta y te pasamos un presupuesto sin compromiso.',
      },
      {
        question: '¿Puedo usar mi armazón actual con cristales nuevos?',
        answer:
          'En muchos casos sí. Traé tu armazón a la óptica y revisamos si está en condiciones de recibir cristales nuevos.',
      },
      LOCATION_FAQ,
    ],
    imageUrl: '/images/anteojos-recetados-gualeguaychu.webp',
    imageWidth: 734,
    imageHeight: 670,
    imageAlt: 'Armazones de anteojos recetados en exhibición en Óptica Figún, Gualeguaychú',
    whatsappMessage: buildWhatsAppMessage('anteojos recetados'),
  },
  {
    slug: 'lentes-de-contacto',
    name: 'Lentes de contacto',
    shortDescription:
      'Soluciones cómodas y seguras adaptadas a tu estilo de vida, desde opciones diarias hasta mensuales y tóricas.',
    metaTitle: 'Lentes de contacto en Gualeguaychú | Óptica Figún',
    metaDescription:
      'Lentes de contacto en Gualeguaychú: descartables diarias y mensuales, tóricas para astigmatismo, líquidos y accesorios. Consultá por WhatsApp en Óptica Figún.',
    heading: 'Lentes de contacto en Gualeguaychú',
    intro: [
      'Las lentes de contacto son una alternativa cómoda a los anteojos para el día a día, el deporte o las ocasiones especiales. En Óptica Figún te asesoramos para encontrar las que mejor se adaptan a tu graduación y a tu rutina.',
      'Te explicamos paso a paso cómo colocarlas, retirarlas y cuidarlas, para que las uses con seguridad y comodidad desde el primer día.',
    ],
    features: [
      {
        title: 'Descartables diarias',
        description: 'Se usan un día y se descartan: máxima higiene y practicidad, ideales también para uso ocasional.',
      },
      {
        title: 'Lentes mensuales',
        description: 'Una opción conveniente para el uso diario, con la limpieza y el cuidado adecuados.',
      },
      {
        title: 'Lentes tóricas para astigmatismo',
        description: 'Diseñadas para corregir el astigmatismo con una visión estable y nítida.',
      },
      {
        title: 'Líquidos y accesorios',
        description: 'Soluciones de limpieza y conservación, estuches y todo lo necesario para cuidar tus lentes.',
      },
    ],
    faqs: [
      {
        question: '¿Necesito receta para usar lentes de contacto?',
        answer:
          'Sí. Las lentes de contacto requieren la indicación de un médico oftalmólogo, ya que la graduación puede ser distinta a la de tus anteojos. Con tu receta te asesoramos sobre el tipo de lente más conveniente.',
      },
      {
        question: '¿Tienen lentes de contacto para astigmatismo?',
        answer: 'Sí, trabajamos con lentes tóricas, diseñadas especialmente para corregir el astigmatismo.',
      },
      {
        question: '¿Cómo tengo que cuidar mis lentes de contacto?',
        answer:
          'Lavate las manos antes de tocarlas, usá siempre la solución recomendada, no las enjuagues con agua de la canilla y respetá el tiempo de reemplazo. En la óptica te explicamos todo en detalle.',
      },
      LOCATION_FAQ,
    ],
    imageUrl: '/images/lentes-de-contacto-gualeguaychu.webp',
    imageWidth: 960,
    imageHeight: 1113,
    imageAlt: 'Lentes de contacto y soluciones de limpieza en Óptica Figún, Gualeguaychú',
    whatsappMessage: buildWhatsAppMessage('lentes de contacto'),
  },
  {
    slug: 'lentes-de-sol',
    name: 'Lentes de sol',
    shortDescription:
      'Protección UV de alta calidad combinada con el mejor estilo. Disponemos de las mejores marcas del mercado.',
    metaTitle: 'Lentes de sol en Gualeguaychú | Óptica Figún',
    metaDescription:
      'Lentes de sol con protección UV en Gualeguaychú: las mejores marcas, modelos polarizados y lentes de sol con tu graduación. Consultá por WhatsApp en Óptica Figún.',
    heading: 'Lentes de sol en Gualeguaychú',
    intro: [
      'Un buen par de lentes de sol no es solo estilo: protege tus ojos de la radiación ultravioleta todo el año, en la ciudad, en la ruta o disfrutando del río y las playas de Gualeguaychú.',
      'En Óptica Figún encontrás modelos de las mejores marcas del mercado y te asesoramos para elegir el que mejor te queda y más te conviene.',
    ],
    features: [
      {
        title: 'Protección UV',
        description: 'Filtros que bloquean la radiación ultravioleta para cuidar la salud de tus ojos.',
      },
      {
        title: 'Lentes polarizados',
        description: 'Reducen los reflejos del agua y del asfalto: ideales para manejar y para actividades al aire libre.',
      },
      {
        title: 'Lentes de sol recetados',
        description: 'Si usás anteojos, podés tener tus lentes de sol con tu graduación.',
      },
      {
        title: 'Las mejores marcas',
        description: 'Modelos actuales para mujer, hombre y niños, con el estilo que estás buscando.',
      },
    ],
    faqs: [
      {
        question: '¿Por qué es importante que los lentes de sol tengan protección UV?',
        answer:
          'La radiación ultravioleta puede dañar los ojos con el tiempo. Unos lentes con filtro UV adecuado protegen tu visión, mientras que unos lentes oscuros sin filtro pueden ser contraproducentes.',
      },
      {
        question: '¿Qué ventajas tienen los lentes polarizados?',
        answer:
          'Eliminan gran parte de los reflejos molestos, mejoran el contraste y reducen el cansancio visual, sobre todo al manejar o cerca del agua.',
      },
      {
        question: '¿Puedo hacerme lentes de sol con mi graduación?',
        answer: 'Sí. Traé tu receta y te asesoramos sobre los armazones y cristales para sol disponibles para tu graduación.',
      },
      LOCATION_FAQ,
    ],
    imageUrl: '/images/lentes-de-sol-gualeguaychu.webp',
    imageWidth: 739,
    imageHeight: 673,
    imageAlt: 'Exhibición de lentes de sol en Óptica Figún, Gualeguaychú',
    whatsappMessage: buildWhatsAppMessage('lentes de sol'),
  },
  {
    slug: 'examen-visual',
    name: 'Exámenes visuales',
    shortDescription:
      'Evaluaciones completas de la vista realizadas por profesionales experimentados utilizando tecnología de vanguardia.',
    metaTitle: 'Examen visual en Gualeguaychú | Óptica Figún',
    metaDescription:
      'Exámenes visuales en Gualeguaychú con profesionales experimentados y tecnología de vanguardia. Consultá disponibilidad por WhatsApp en Óptica Figún.',
    heading: 'Exámenes visuales en Gualeguaychú',
    intro: [
      'Controlar la vista con regularidad es la mejor forma de detectar a tiempo cambios en tu visión. En Óptica Figún realizamos evaluaciones completas de la vista con profesionales experimentados y tecnología de vanguardia.',
      'Te explicamos los resultados con claridad y te orientamos sobre la mejor solución para vos: anteojos, lentes de contacto o una consulta con tu médico oftalmólogo cuando corresponde.',
    ],
    features: [
      {
        title: 'Profesionales experimentados',
        description: 'Un equipo con más de 30 años de trayectoria cuidando la salud visual en Gualeguaychú.',
      },
      {
        title: 'Tecnología de vanguardia',
        description: 'Equipamiento actualizado para una evaluación precisa de tu visión.',
      },
      {
        title: 'Atención personalizada',
        description: 'Nos tomamos el tiempo necesario para escucharte y entender lo que necesitás.',
      },
      {
        title: 'Asesoramiento integral',
        description: 'Te acompañamos desde el control hasta la elección de tus anteojos o lentes de contacto.',
      },
    ],
    faqs: [
      {
        question: '¿Cada cuánto conviene controlar la vista?',
        answer:
          'Se recomienda un control al menos una vez al año, o antes si notás visión borrosa, dolores de cabeza o cansancio visual al leer o usar pantallas.',
      },
      {
        question: '¿Qué pasa si el examen detecta un cambio en mi visión?',
        answer:
          'Te explicamos los resultados y te orientamos sobre los próximos pasos. Cuando corresponde, te recomendamos consultar a tu médico oftalmólogo.',
      },
      {
        question: '¿Tengo que sacar turno?',
        answer: 'Escribinos por WhatsApp y coordinamos el mejor día y horario para tu control.',
      },
      LOCATION_FAQ,
    ],
    imageUrl: '/images/examen-visual-gualeguaychu.webp',
    imageWidth: 601,
    imageHeight: 340,
    imageAlt: 'Tabla optométrica para examen visual en Óptica Figún, Gualeguaychú',
    whatsappMessage: buildWhatsAppMessage('un examen visual'),
  },
];

export const getServiceBySlug = (slug: string) => SERVICES.find((service) => service.slug === slug);

export const servicePath = (service: Service) => `/servicios/${service.slug}`;
