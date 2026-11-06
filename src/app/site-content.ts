/**
 * Contenido editable de la landing.
 * Todos los datos de contacto, ubicación y textos viven acá para poder
 * actualizarlos sin tocar los componentes.
 *
 * TODO: reemplazar los valores marcados como placeholder por los reales del club.
 */

/** Imagen con ruta relativa a `public/` (ej: `img/instalaciones/salon-1.jpg`). */
export interface Photo {
  src: string;
  alt: string;
}

export interface Facility {
  title: string;
  text: string;
  /** Si está vacío se muestra el logo como imagen de reemplazo. */
  photos: readonly Photo[];
}

export interface TeamMember {
  name: string;
  role: string;
  /** Retrato (ideal cuadrado, ~600px). Si falta se muestra el logo. */
  photo?: Photo;
  /** Si tiene `bio`, se muestra como destacado con tarjeta grande. */
  bio?: string;
  /** Muestra el distintivo "Selección Nacional". */
  nationalTeam?: boolean;
}

// TODO placeholder: textos y fotos reales (subir las fotos a public/img/instalaciones/)
const FACILITIES: readonly Facility[] = [
  {
    title: 'Salón de tiro',
    text: 'Linea de tiro bajo techo para entrenar a distancias cortas todo el año, en formato salón, y sin depender del clima.',
    photos: [{src: 'img/instalaciones/salon-1.jpg', alt: 'Salón de tiro'}],
  },
  {
    title: 'Campo al aire libre',
    text: 'Campo de tiro para practicar a distancias mayores en espacio abierto, con viento y luz natural.',
    photos: [{'src': 'img/instalaciones/campo-3.jpeg', 'alt': 'Campo de tiro al aire libre'}],
  },
];

// TODO placeholder: plantel real (subir los retratos a public/img/plantel/)
const TEAM: readonly TeamMember[] = [
  {
    name: 'Martin Calantoni',
    role: 'Presidente y entrenador',
    nationalTeam: true,
    bio:'Fue parte de la Seleccion Argentina de tiro con arco. Hoy es presidente y entrenador de la Escuela de Tiro con Arco La Plata. Tirador de Arco Compuesto. ',
    photo: { src: 'img/plantel/martin.jpeg', alt: 'Foto de Martin' },
  },
  {
    name: 'Cintia Mereles',
    role: 'Vicepresidenta y entrenadora',
    nationalTeam: true,
    bio: 'Integró la Selección Argentina de tiro con arco como tiradora de Arco Compuesto. Vistió la camiseta celeste y blanca tanto en competencias nacionales como internacionales.',
    photo: { src: 'img/plantel/cintia.jpeg', alt: 'Foto de Cintia' },
  }
];

export const SITE = {
  shortName: 'E.T.A.LP',
  name: 'Escuela de Tiro con Arco La Plata',
  tagline: 'Concentración, técnica y comunidad. Vení a probar el tiro con arco.',

  contact: {
    email: 'etalp.arqueria@gmail.com',
    instagram: 'tiroconarcolaplata',
    whatsapp: '542216549900',
    whatsappMessage: '¡Hola, quiero solicitar información sobre las clases de Tiro con Arco!',
  },

  location: {
    address: 'Calle 44 esq. 29 (Centro de Fomento Avenida 44)',
    city: 'La Plata, Buenos Aires',
    // Coordenadas del lugar en Google Maps ("Escuela De Tiro Con Arco La Plata")
    lat: -34.9315646,
    lng: -57.9778141,
    zoom: 17,
    // Link a la ficha del lugar en Google Maps (muestra nombre, fotos y reseñas)
    mapsUrl: 'https://maps.app.goo.gl/7WsoE9UCjUAm4DrU7',
  },

  about:
    'Somos una escuela dedicada a la enseñanza y práctica del tiro con arco en La Plata. ' +
    'Acompañamos a quienes dan sus primeros tiros y a quienes buscan competir, ' +
    'en un ambiente seguro y de compañerismo.',

  highlights: [
    { title: 'Para todas las edades', text: 'Clases para principiantes, juveniles y adultos.' },
    { title: 'Equipo para empezar', text: 'Consultanos por el préstamo de equipo en las primeras clases.' },
    { title: 'Entrenamiento y competencia', text: 'Preparación técnica para torneos.' },
  ],

  schedule: [
    { day: 'Lunes, Miércoles y Viernes', hours: '17:00 – 20:00', slots: ['17:00 – 18:30', '18:30 – 20:00'] },
    { day: 'Martes y Jueves', hours: '15:30 – 20:00', slots: ['15:30 – 17:00', '17:00 – 18:30', '18:30 – 20:00'] },
  ],

  // TODO placeholder: subir la foto a public/img/nosotros/ y reemplazar `undefined` por
  // { src: 'img/nosotros/grupo.jpg', alt: 'Foto grupal de los miembros de la escuela' }
  // Mientras sea undefined, la sección Nosotros no muestra foto.
  groupPhoto: undefined as Photo | undefined,

  facilities: FACILITIES,
  team: TEAM,
} as const;

export const LINKS = {
  email: `mailto:${SITE.contact.email}`,
  instagram: `https://instagram.com/${SITE.contact.instagram}`,
  whatsapp: `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(SITE.contact.whatsappMessage)}`,
  mapsPlace: SITE.location.mapsUrl,
  mapsDirections: `https://www.google.com/maps/dir/?api=1&destination=${SITE.location.lat},${SITE.location.lng}`,
  mapsEmbed: `https://maps.google.com/maps?q=${SITE.location.lat},${SITE.location.lng}&z=${SITE.location.zoom}&output=embed`,
} as const;
