import {
  Sparkles, Target, Heart, Zap, Users2, Smartphone, Monitor,
  AlertTriangle, CheckCircle, Info, MessageSquare,
  BookOpen, Star, Calendar, Users, CheckCircle2,
  type LucideIcon,
} from 'lucide-react';

// ─── Nav ─────────────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  group: string;
}

export const navItems: NavItem[] = [
  // FUNDAMENTOS
  { id: 'voz',        label: 'La Voz de Mi Claro', icon: Sparkles,      group: 'Fundamentos' },
  { id: 'pilares',    label: 'Pilares de Marca',    icon: Target,        group: 'Fundamentos' },
  { id: 'audiencia',  label: 'Nuestra Audiencia',   icon: Users2,        group: 'Fundamentos' },
  // DIRECTRICES
  { id: 'tono',       label: 'Tono de Comunicación', icon: MessageSquare, group: 'Directrices' },
  { id: 'errores',    label: 'Mensajes de Error',    icon: AlertTriangle, group: 'Directrices' },
  { id: 'onboarding', label: 'Onboarding',           icon: CheckCircle,   group: 'Directrices' },
  // BUENAS PRÁCTICAS
  { id: 'dos-donts',  label: 'Sí / No hacer',       icon: CheckCircle2,  group: 'Buenas prácticas' },
  { id: 'ejemplos',   label: 'Ejemplos Interactivos', icon: Smartphone,   group: 'Buenas prácticas' },
  // PROYECTO
  { id: 'presentacion', label: 'Presentación',      icon: Calendar,      group: 'Proyecto' },
  { id: 'conclusiones', label: 'Conclusiones',       icon: Star,          group: 'Proyecto' },
];

// ─── Section Content ──────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: 'lead';    text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote';   text: string }
  | { type: 'list';    title?: string; items: string[] }
  | { type: 'donts';   items: DoItem[] }
  | { type: 'pillars'; items: Pillar[] }
  | { type: 'tones';   items: Tone[] }
  | { type: 'audience'; items: AudienceCard[] }
  | { type: 'info-grid'; items: InfoCard[] };

export interface DoItem {
  topic: string;
  do: string;
  doExample: string;
  dont: string;
  dontExample: string;
}

export interface Pillar {
  icon: LucideIcon;
  color: string;
  bg: string;
  title: string;
  desc: string;
  keyword: string;
}

export interface Tone {
  icon: LucideIcon;
  color: string;
  bg: string;
  label: string;
  desc: string;
  example: string;
}

export interface AudienceCard {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface InfoCard {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface DocSection {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  readTime: number;
  content: ContentBlock[];
}

// ─── Sections ─────────────────────────────────────────────────────────────────

const currentYear = new Date().getFullYear();

export const sections: DocSection[] = [
  {
    id: 'voz',
    title: 'La Voz de Mi Claro',
    subtitle: 'Nuestra personalidad de comunicación: constante, humana y confiable.',
    tags: ['Voz', 'Identidad', 'Personalidad'],
    readTime: 3,
    content: [
      { type: 'lead', text: 'Nuestra voz es única, constante y humana. Sin importar la situación, siempre somos nosotros mismos.' },
      { type: 'paragraph', text: 'Imagina a Mi Claro como un asesor experto que es amigable, directo y siempre está dispuesto a ayudarte a resolver tus necesidades de telecomunicaciones. Nunca sonamos como una corporación sin rostro ni como un bot genérico.' },
      { type: 'paragraph', text: 'Evitamos el lenguaje robótico y los tecnicismos innecesarios. En su lugar, elegimos un estilo conversacional que invite a la confianza y que demuestre que valoramos el tiempo y la inteligencia de nuestros usuarios.' },
      { type: 'quote', text: 'No escribas para "un usuario". Escribe para una persona real que tiene prisa, está algo frustrada y merece claridad.' },
      {
        type: 'list',
        title: 'Nuestra voz es:',
        items: [
          'Directa — Ve al punto sin rodeos.',
          'Humana — Usa contracciones y lenguaje cotidiano.',
          'Experta sin arrogancia — Sabemos lo que hacemos, pero no lo presumimos.',
          'Empática — Reconocemos las emociones del usuario.',
          'Consistente — El mismo tono en cada pantalla, notificación y mensaje.',
        ],
      },
    ],
  },
  {
    id: 'pilares',
    title: 'Pilares de Marca',
    subtitle: 'Los tres principios que guían cada palabra que escribimos.',
    tags: ['Pilares', 'Valores', 'Principios'],
    readTime: 4,
    content: [
      { type: 'lead', text: 'Todo lo que comunicamos descansa sobre tres pilares fundamentales. Son el filtro por el que pasa cada texto, botón y notificación.' },
      {
        type: 'pillars',
        items: [
          {
            icon: Target,
            color: 'text-rose-600',
            bg: 'bg-rose-50',
            keyword: 'Claridad',
            title: 'Claridad ante todo',
            desc: 'Nuestra comunicación no tiene rodeos. Explicamos las cosas de manera sencilla, sin tecnicismos innecesarios, para que cualquier persona nos entienda a la primera. Si un mensaje necesita ser explicado, necesita ser reescrito.',
          },
          {
            icon: Heart,
            color: 'text-sky-600',
            bg: 'bg-sky-50',
            keyword: 'Empatía',
            title: 'Empatía constante',
            desc: 'Nos ponemos en los zapatos de nuestros usuarios. Entendemos sus frustraciones y celebramos sus logros. Hablamos de persona a persona, nunca de empresa a número de cuenta.',
          },
          {
            icon: Zap,
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            keyword: 'Dinamismo',
            title: 'Dinamismo',
            desc: 'Somos ágiles y proactivos. Nuestra voz refleja energía y disposición para ayudar rápidamente y sin complicaciones. Usamos verbos activos y frases cortas.',
          },
        ],
      },
      {
        type: 'list',
        title: 'Pregúntate siempre:',
        items: [
          '¿Es claro? (Claridad) — ¿Cualquier persona puede entenderlo a la primera?',
          '¿Es humano? (Empatía) — ¿Reconoce el estado emocional del usuario?',
          '¿Es ágil? (Dinamismo) — ¿Va al punto sin palabras de relleno?',
        ],
      },
    ],
  },
  {
    id: 'audiencia',
    title: 'Nuestra Audiencia',
    subtitle: '¿A quién le hablamos? Conocer al usuario es el primer paso para comunicar bien.',
    tags: ['Audiencia', 'Usuarios', 'Perfiles'],
    readTime: 3,
    content: [
      { type: 'lead', text: 'Nuestros usuarios son tan diversos como los servicios que ofrecemos. Sin embargo, en el entorno digital de la app, todos buscan lo mismo: rapidez, claridad y autogestión.' },
      {
        type: 'audience',
        items: [
          { icon: Users2, title: 'Diversidad generacional', desc: 'Desde jóvenes expertos en tecnología hasta adultos mayores que necesitan interfaces amigables. El tono debe funcionar para ambos.' },
          { icon: Smartphone, title: 'Orientados a la autogestión', desc: 'Prefieren resolver sus dudas y transacciones sin tener que llamar a un asesor. El texto debe hacer ese camino obvio.' },
          { icon: Monitor, title: 'En movimiento', desc: 'Usan la app en momentos breves y dispersos. Los textos deben ser escaneables, directos y accionables.' },
        ],
      },
      {
        type: 'list',
        title: 'Principios para toda la audiencia:',
        items: [
          'Usa el tú (tuteo profesional) — no el usted formal ni el vos coloquial.',
          'Evita la jerga técnica y los acrónimos no explicados.',
          'Escribe en voz activa siempre que sea posible.',
          'Usa números en lugar de palabras cuando sean datos clave (ej: "3 días" no "tres días").',
          'Los textos de error deben funcionar para alguien con estrés alto.',
        ],
      },
    ],
  },
  {
    id: 'tono',
    title: 'Tono de Comunicación',
    subtitle: 'Una voz, múltiples tonos. Cómo adaptamos el lenguaje a cada momento.',
    tags: ['Tono', 'Contextos', 'Adaptabilidad'],
    readTime: 5,
    content: [
      { type: 'lead', text: 'Mientras que nuestra voz es constante, el tono cambia según el contexto emocional del usuario. No hablamos igual cuando celebramos una recarga que cuando reportamos una falla.' },
      {
        type: 'tones',
        items: [
          {
            icon: AlertTriangle,
            color: 'text-red-600',
            bg: 'bg-red-50',
            label: 'Errores y Fallas',
            desc: 'Tranquilizador y resolutivo. Nunca culpamos al usuario. Asumimos responsabilidad y ofrecemos alternativas inmediatas.',
            example: '¡Lo sentimos! Algo salió mal de nuestro lado. Intenta de nuevo en un momento.',
          },
          {
            icon: CheckCircle,
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            label: 'Éxito y Confirmación',
            desc: 'Celebratorio pero breve. Confirmamos la acción con entusiasmo moderado para transmitir seguridad y confianza.',
            example: '¡Listo! Tu recarga de $20.000 fue aplicada exitosamente.',
          },
          {
            icon: Info,
            color: 'text-sky-600',
            bg: 'bg-sky-50',
            label: 'Información y Novedades',
            desc: 'Directo y transparente. Destacamos el beneficio para el usuario sin caer en lenguaje excesivamente comercial.',
            example: 'Tienes un nuevo plan disponible que incluye 5 GB adicionales.',
          },
          {
            icon: MessageSquare,
            color: 'text-amber-600',
            bg: 'bg-amber-50',
            label: 'Soporte y Ayuda',
            desc: 'Paciente y guiado. Pasos claros, cortos y fáciles de seguir. Disposición total para acompañar el proceso.',
            example: 'Te guiamos paso a paso. Primero, ve a "Mi Plan" y toca "Ver detalles".',
          },
        ],
      },
    ],
  },
  {
    id: 'errores',
    title: 'Mensajes de Error',
    subtitle: 'Cuando algo falla, el texto puede salvar o hundir la experiencia del usuario.',
    tags: ['Errores', 'UX Writing', 'Recuperación'],
    readTime: 4,
    content: [
      { type: 'lead', text: 'Los mensajes de error son el momento de mayor vulnerabilidad del usuario. Un buen mensaje convierte la frustración en acción.' },
      {
        type: 'list',
        title: 'Reglas para mensajes de error:',
        items: [
          'Nunca culpes al usuario. Usa "algo salió mal" en lugar de "ingresaste mal el número".',
          'Sé específico sobre qué pasó y qué hacer ahora.',
          'Siempre ofrece una acción o alternativa.',
          'Usa un tono empático, no técnico ni frío.',
          'Evita códigos de error visibles al usuario (guárdalos para logs internos).',
        ],
      },
      {
        type: 'donts',
        items: [
          {
            topic: 'Título del error',
            do: 'Algo salió mal',
            doExample: 'Lo sentimos, algo salió mal de nuestro lado.',
            dont: 'Error 500 / Internal Server Error',
            dontExample: 'Error 500: Internal Server Error. Proceso no completado.',
          },
          {
            topic: 'Descripción y acción',
            do: 'Explica qué pasó y ofrece un camino de salida claro.',
            doExample: 'No pudimos procesar tu pago. Verifica los datos de tu tarjeta o intenta con otro método.',
            dont: 'Ser vago o dejar al usuario sin opciones.',
            dontExample: 'Transacción fallida. Intente nuevamente más tarde.',
          },
          {
            topic: 'Atribución del error',
            do: 'Asumir responsabilidad cuando sea ambiguo.',
            doExample: 'Parece que tuvimos un problema de conexión. Vuelve a intentarlo.',
            dont: 'Culpar al usuario o al dispositivo por defecto.',
            dontExample: 'Su conexión falló. Verifique su red.',
          },
        ],
      },
    ],
  },
  {
    id: 'onboarding',
    title: 'Onboarding y Bienvenida',
    subtitle: 'La primera impresión define si el usuario confía en la app o la abandona.',
    tags: ['Onboarding', 'Bienvenida', 'Primer uso'],
    readTime: 4,
    content: [
      { type: 'lead', text: 'El onboarding debe generar confianza, mostrar valor inmediato y hacer el proceso de registro lo menos friccionante posible.' },
      {
        type: 'list',
        title: 'Principios del onboarding:',
        items: [
          'La bienvenida debe mencionar el nombre del usuario cuando esté disponible.',
          'Explica el "para qué" antes del "cómo".',
          'Cada pantalla de onboarding debe tener un único mensaje o acción.',
          'Los microtextos (labels, placeholders) deben ser instructivos, no solo descriptivos.',
          'Celebra el registro completado — es un logro para el usuario.',
        ],
      },
      {
        type: 'donts',
        items: [
          {
            topic: 'Mensaje de bienvenida',
            do: 'Personalizado y que anticipe el valor',
            doExample: '¡Hola, Juliana! Tu cuenta Mi Claro está lista. Desde aquí puedes recargar, revisar tu plan y mucho más.',
            dont: 'Genérico e impersonal',
            dontExample: 'Registro exitoso. Bienvenido al sistema.',
          },
          {
            topic: 'Campos del formulario (placeholders)',
            do: 'Instructivo y contextual',
            doExample: 'Número de celular Claro (ej: 300 123 4567)',
            dont: 'Solo descriptivo',
            dontExample: 'Número de celular',
          },
          {
            topic: 'CTA del formulario',
            do: 'Accionable y específico',
            doExample: 'Crear mi cuenta gratis',
            dont: 'Genérico',
            dontExample: 'Enviar / Submit',
          },
        ],
      },
    ],
  },
  {
    id: 'dos-donts',
    title: 'Sí hacer y No hacer',
    subtitle: 'Guía rápida de referencia para escritores y diseñadores de contenido.',
    tags: ["Do's", "Don'ts", 'Referencia rápida'],
    readTime: 5,
    content: [
      { type: 'lead', text: 'Esta sección consolida las reglas de oro en un formato de consulta rápida. Úsala como checklist antes de publicar cualquier texto.' },
      {
        type: 'donts',
        items: [
          {
            topic: 'Claridad del lenguaje',
            do: 'Usa lenguaje cotidiano y directo.',
            doExample: 'Tu pago se procesó correctamente.',
            dont: 'Usar tecnicismos o lenguaje robótico.',
            dontExample: 'Transacción 4002 OK. Base de datos actualizada.',
          },
          {
            topic: 'Empatía en errores',
            do: 'Ofrece soluciones y evita culpar al usuario.',
            doExample: 'Parece que hubo un problema de conexión. Intenta recargar la página.',
            dont: 'Hacer sentir al usuario que se equivocó.',
            dontExample: 'Error de usuario. Conexión no válida.',
          },
          {
            topic: 'Tono y cercanía',
            do: 'Trato respetuoso y amigable (tuteo profesional).',
            doExample: '¡Hola! ¿En qué te podemos ayudar hoy?',
            dont: 'Ser excesivamente formal o demasiado coloquial.',
            dontExample: 'Estimado señor, proceda a indicar su requerimiento.',
          },
          {
            topic: 'Longitud del mensaje',
            do: 'Mensajes cortos, una idea por notificación.',
            doExample: 'Tu plan vence el 15 de julio. Renuévalo aquí.',
            dont: 'Mensajes largos con múltiples ideas mezcladas.',
            dontExample: 'Le informamos que su plan de datos con vigencia mensual próximamente expirará según los términos y condiciones de su contrato...',
          },
          {
            topic: 'Botones y llamadas a la acción',
            do: 'Verbos en infinitivo o imperativo afirmativo, específico.',
            doExample: 'Recargar ahora · Ver mi plan · Activar oferta',
            dont: 'Genérico, ambiguo o pasivo.',
            dontExample: 'Clic aquí · Aceptar · OK · Continuar',
          },
          {
            topic: 'Lenguaje inclusivo',
            do: 'Neutro cuando sea posible; específico cuando se conoce el género.',
            doExample: 'Tu cuenta está activa. Puedes gestionar todo desde aquí.',
            dont: 'Asumir género o usar formas que excluyan.',
            dontExample: 'El usuario puede gestionar sus datos...',
          },
        ],
      },
    ],
  },
  {
    id: 'presentacion',
    title: 'Información del Proyecto',
    subtitle: 'Contexto académico y propósito de este manual de voz y tono.',
    tags: ['Proyecto', 'Universidad', 'Académico'],
    readTime: 2,
    content: [
      { type: 'lead', text: 'Este manual define y estructura la personalidad de la comunicación para la aplicación móvil Mi Claro, asegurando que cada interacción sea clara, empática y consistente.' },
      {
        type: 'info-grid',
        items: [
          { icon: Users, label: 'Autores', value: 'Cristian David Cabrera Pantoja\nBrayan Steven Narvaez Valdez' },
          { icon: BookOpen, label: 'Asignatura', value: 'Diseño de Interfaces' },
          { icon: Monitor, label: 'Institución', value: 'Universidad del Valle' },
          { icon: Calendar, label: 'Periodo académico', value: `Año ${currentYear}` },
        ],
      },
      { type: 'paragraph', text: 'El objetivo de este proyecto es demostrar que el UX Writing y la definición de voz de marca son componentes críticos del diseño de interfaces. Un mismo flujo puede generar confianza o frustración dependiendo exclusivamente de cómo está redactado.' },
    ],
  },
  {
    id: 'conclusiones',
    title: 'Conclusiones',
    subtitle: 'Lo más importante de este manual resumido en ideas clave.',
    tags: ['Conclusiones', 'Resumen', 'Aprendizajes'],
    readTime: 2,
    content: [
      { type: 'lead', text: 'Mantener una voz y un tono consistentes no se trata solo de escribir bonito. Se trata de construir confianza, reducir la fricción cognitiva y humanizar la marca.' },
      {
        type: 'list',
        title: 'Ideas clave:',
        items: [
          'La voz es constante; el tono se adapta al contexto emocional del usuario.',
          'Un mensaje de error bien redactado puede salvar una relación con el usuario.',
          'Claridad, Empatía y Dinamismo son el filtro de todo lo que publicamos.',
          'El UX Writing no es decoración — es arquitectura de la experiencia.',
          'Escribir para personas reales, no para sistemas o bases de datos.',
        ],
      },
      { type: 'quote', text: 'La forma en que hablamos es tan importante como lo que ofrecemos. Una tecnología brillante con un texto confuso, es una tecnología invisible.' },
    ],
  },
];

// ─── Search Index ──────────────────────────────────────────────────────────────

export interface SearchResult {
  sectionId: string;
  sectionTitle: string;
  match: string;
  type: 'title' | 'content' | 'tag';
}

export function searchSections(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  const results: SearchResult[] = [];

  for (const section of sections) {
    if (section.title.toLowerCase().includes(q)) {
      results.push({ sectionId: section.id, sectionTitle: section.title, match: section.title, type: 'title' });
    }
    if (section.subtitle.toLowerCase().includes(q)) {
      results.push({ sectionId: section.id, sectionTitle: section.title, match: section.subtitle, type: 'content' });
    }
    for (const tag of section.tags) {
      if (tag.toLowerCase().includes(q)) {
        results.push({ sectionId: section.id, sectionTitle: section.title, match: `Tag: ${tag}`, type: 'tag' });
      }
    }
    for (const block of section.content) {
      if (block.type === 'paragraph' || block.type === 'lead' || block.type === 'quote') {
        if (block.text.toLowerCase().includes(q)) {
          const idx = block.text.toLowerCase().indexOf(q);
          const snippet = block.text.slice(Math.max(0, idx - 30), idx + 60).trim();
          results.push({ sectionId: section.id, sectionTitle: section.title, match: `…${snippet}…`, type: 'content' });
        }
      }
      if (block.type === 'donts') {
        for (const item of block.items) {
          const combined = `${item.topic} ${item.do} ${item.doExample} ${item.dont} ${item.dontExample}`.toLowerCase();
          if (combined.includes(q)) {
            results.push({ sectionId: section.id, sectionTitle: section.title, match: `Do/Don't: ${item.topic}`, type: 'content' });
          }
        }
      }
    }
  }

  // deduplicate by sectionId + match
  const seen = new Set<string>();
  return results.filter(r => {
    const key = `${r.sectionId}::${r.match}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 8);
}
