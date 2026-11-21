import type { Locale } from './i18n';
import type { Kind } from './posts';

const en = {
  name: 'Simón Gómez Arango',
  siteDescription:
    'Software engineer focused on backend systems and infrastructure. Engineering team lead at RevAIsor.',
  tagline: 'Software Engineer · Backend & Infrastructure',
  location: 'Medellín, Colombia',
  skip: 'Skip to content',
  nav: { label: 'Site', posts: 'Posts', cv: 'CV', switchTo: 'Español', switchLabel: 'Leer en español' },
  title: 'Building systems that hold up',
  intro:
    "I'm a software engineer focused on backend systems and the infrastructure they run on. Since January 2024 I've been designing, implementing and deploying RevAIsor's AI governance platform and its services in Java, TypeScript and Go on Google Cloud, and for more than a year I've led its engineering team. On my own time I build streaming pipelines on AWS and small distributed systems in Go.",
  email: 'Email',
  contact: 'Contact',
  sections: { work: 'Selected work', experience: 'Experience' },
  education: { title: 'B.Sc. Computer Science', school: 'EAFIT University', note: 'Full scholarship; GPA 4.19 / 5.0.', year: '2025' },
  allPosts: 'All posts',
  kinds: { project: 'Project', 'case-study': 'Case study', role: 'Role', note: 'Note' } as Record<Kind, string>,
  kindsPlural: { project: 'Projects', 'case-study': 'Case studies', role: 'Roles', note: 'Notes' } as Record<Kind, string>,
  postsTitle: 'Posts',
  postsIntro: 'Everything I have written up: projects, case studies, roles and notes.',
  filterAll: 'All',
  filterKind: 'Kind',
  filterTag: 'Tag',
  noMatch: 'No posts match this filter.',
  clearFilter: 'Clear filter',
  contents: 'Contents',
  meta: { date: 'Date', period: 'Period', company: 'Company', stack: 'Stack', links: 'Links' },
  code: 'Code',
  video: 'Video',
  demo: 'Demo',
  fallback: '',
  notFound: 'Nothing lives at this address.',
  notFoundBack: 'Go to the home page',
};

const es: typeof en = {
  ...en,
  siteDescription:
    'Ingeniero de software enfocado en sistemas backend e infraestructura. Líder del equipo de ingeniería en RevAIsor.',
  tagline: 'Ingeniero de Software · Backend e Infraestructura',
  skip: 'Ir al contenido',
  nav: { label: 'Sitio', posts: 'Publicaciones', cv: 'CV', switchTo: 'English', switchLabel: 'Read in English' },
  title: 'Construyendo sistemas que resisten',
  intro:
    'Soy ingeniero de software enfocado en sistemas backend y en la infraestructura sobre la que corren. Desde enero de 2024 diseño, implemento y despliego la plataforma de gobernanza de IA de RevAIsor y sus servicios en Java, TypeScript y Go sobre Google Cloud, y desde hace más de un año lidero su equipo de ingeniería. En mi tiempo libre construyo pipelines de streaming en AWS y pequeños sistemas distribuidos en Go.',
  email: 'Correo',
  contact: 'Contacto',
  sections: { work: 'Trabajo seleccionado', experience: 'Experiencia' },
  education: { title: 'Pregrado en Ciencias de la Computación', school: 'Universidad EAFIT', note: 'Beca completa; promedio 4.19 / 5.0.', year: '2025' },
  allPosts: 'Todas las publicaciones',
  kinds: { project: 'Proyecto', 'case-study': 'Caso de estudio', role: 'Rol', note: 'Nota' },
  kindsPlural: { project: 'Proyectos', 'case-study': 'Casos de estudio', role: 'Roles', note: 'Notas' },
  postsTitle: 'Publicaciones',
  postsIntro: 'Todo lo que he documentado: proyectos, casos de estudio, roles y notas.',
  filterAll: 'Todo',
  filterKind: 'Tipo',
  filterTag: 'Etiqueta',
  noMatch: 'Ninguna publicación coincide con este filtro.',
  clearFilter: 'Quitar filtro',
  contents: 'Contenido',
  meta: { date: 'Fecha', period: 'Periodo', company: 'Empresa', stack: 'Tecnologías', links: 'Enlaces' },
  code: 'Código',
  fallback: 'Esta publicación solo está disponible en inglés por ahora.',
  notFound: 'No hay nada en esta dirección.',
  notFoundBack: 'Ir al inicio',
};

export const ui: Record<Locale, typeof en> = { en, es };

export const contact = {
  email: 'simongomezarango123@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sim%C3%B3n-g%C3%B3mez-arango-a605a32b2/',
  github: 'https://github.com/sgomeza13',
};
