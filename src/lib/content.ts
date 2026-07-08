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

export const navItems1: NavItem[] = [
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

import {  User, BarChart} from 'lucide-react';

export const navItems2: NavItem[] = [
  // INTRODUCCIÓN
  { id: 'intro',           label: '¿De qué se trata?',       icon: Info,          group: 'Contexto' },

  // FUNDAMENTOS (Estricto Uniandinos)
  { id: 'voz',        label: 'La voz y el tono',        icon: Sparkles,      group: 'Fundamentos' },
  { id: 'personalidad',    label: 'Nuestra personalidad',    icon: User,          group: 'Fundamentos' },
  { id: 'lenguaje',        label: 'Nuestro lenguaje',        icon: BookOpen,      group: 'Fundamentos' },
  { id: 'intensidad_tono',    label: 'Intensidades del tono',   icon: BarChart,      group: 'Fundamentos' },

  // APLICACIONES (El punto crítico de la profesora: ¡PANTALLAS!)
  { id: 'aplicaciones',    label: 'Aplicaciones prácticas',  icon: Smartphone,    group: 'Ejemplos' },
  { id: 'recomendaciones', label: 'Recomendaciones generales', icon: CheckCircle2, group: 'Ejemplos' },
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
  | { type: 'info-grid'; items: InfoCard[] }
  | { type: 'archetypes'; items: Archetype[] }
  | { type: 'verbal-universe'; says: string[]; doesNotSay: string[]; tip: string }
  | { type: 'intensity-meter'; archetypes: IntensityArchetype[] };

export interface IntensityLevel {
  level: number;
  color: string;
  desc: string;
  keywords: string[];
}

export interface IntensityArchetype {
  name: string;
  levels: IntensityLevel[];
}

export interface Archetype {
  name: string;
  icon: any;
  color: string;
  bgMain: string;
  bgCard: string;
  traits: {
    actitud: string;
    objetivo: string;
    mensaje: string;
    descripcion: string;
  };
}

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
  // ------------------------------------ NUEVOS -----------------------------------------
  
  {
    id: 'voz-tono',
    title: 'La voz y el tono',
    subtitle: 'Nuestra personalidad de comunicación: constante, humana y confiable.',
    tags: ['Voz', 'Identidad'],
    readTime: 3,
    content: [
      { type: 'lead', text: 'Nuestra voz es única, constante y humana. Sin importar la situación, siempre somos nosotros mismos.' },
      { type: 'paragraph', text: 'Imagina a Mi Claro como un asesor experto que es amigable, directo y siempre está dispuesto a ayudarte a resolver tus necesidades. Evitamos el lenguaje robótico y los tecnicismos innecesarios. En su lugar, elegimos un estilo conversacional que invite a la confianza.' },
      { type: 'quote', text: 'No escribas para "un usuario". Escribe para una persona real que tiene prisa, está algo frustrada y merece claridad.' },
      {
        type: 'list',
        title: 'Nuestra voz es:',
        items: [
          'Directa — Ve al punto sin rodeos.',
          'Humana — Usa lenguaje cotidiano y cercano.',
          'Experta sin arrogancia — Sabemos lo que hacemos, pero no lo presumimos.',
        ],
      },
    ],
  },
  {
    id: 'personalidad2',
    title: 'Nuestra personalidad',
    subtitle: 'Los arquetipos que definen cómo nos comportamos.',
    tags: ['Personalidad', 'Arquetipos'],
    readTime: 3,
    content: [
      { type: 'lead', text: 'Basados en la marca Claro, nuestra personalidad se construye sobre la combinación de dos arquetipos principales: El Cuidador y El Sabio.' },
      { type: 'paragraph', text: 'Somos El Cuidador porque nuestra prioridad es la claridad y la empatía frente a las necesidades del cliente (facturas, datos, recargas). Somos El Sabio porque resolvemos problemas técnicos (agilidad y dinamismo) con autoridad, pero explicándolo de forma sencilla.' },
    ],
  },
  
  {
    id: 'intensidades',
    title: 'Intensidades del tono',
    subtitle: 'Cómo adaptamos el lenguaje a cada contexto (éxito, error, soporte).',
    tags: ['Tono', 'Contextos'],
    readTime: 4,
    content: [
      { type: 'lead', text: 'Mientras que nuestra voz es constante, el tono cambia según el estado emocional del usuario. No hablamos igual cuando celebramos una recarga que cuando reportamos una falla.' },
      {
        type: 'tones',
        items: [
          {
            icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50',
            label: 'Errores y Fallas', desc: 'Tranquilizador y resolutivo. Nunca culpamos al usuario.',
            example: '¡Lo sentimos! Algo salió mal de nuestro lado. Intenta de nuevo en un momento.',
          },
          {
            icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50',
            label: 'Éxito y Confirmación', desc: 'Celebratorio pero breve. Confirmamos la acción con entusiasmo moderado.',
            example: '¡Listo! Tu recarga de $20.000 fue aplicada exitosamente.',
          },
          {
            icon: MessageSquare, color: 'text-amber-600', bg: 'bg-amber-50',
            label: 'Onboarding y Soporte', desc: 'Paciente, guiado y personal. Pasos claros, cortos y fáciles de seguir.',
            example: '¡Hola, Juliana! Te guiamos paso a paso. Primero, ve a "Mi Plan".',
          },
        ],
      },
    ],
  },
  {
    id: 'aplicaciones',
    title: 'Aplicaciones prácticas',
    subtitle: 'Ejemplos aplicados directamente en las pantallas de Mi Claro.',
    tags: ['Pantallas', 'UX', 'Ejemplos'],
    readTime: 5,
    content: [
      { type: 'lead', text: 'Aquí demostramos cómo se aplican las reglas de voz y tono en escenarios reales de la aplicación, contrastando la versión original con nuestra propuesta de mejora.' },
      {
        // AQUÍ ES DONDE DEBES PONER TUS IMÁGENES.
        type: 'screens',
        items: [
          {
            title: 'Recuperación de Contraseña',
            context: 'Cuando el usuario olvida su clave y recibe un mensaje de error.',
            imageOriginal: '/img/error-original.png', // Reemplaza con tus rutas
            imageNew: '/img/error-propuesta.png',
            analysis: [
              'Se eliminó el código de error técnico que frustraba al usuario.',
              'Se aplicó el tono "Tranquilizador" de la sección Intensidades.',
              'Se agregó un botón claro con un verbo en infinitivo ("Reintentar").'
            ]
          },
          // Agrega aquí más pantallas (Onboarding, Pagos, etc.)
        ]
      }
    ],
  },
  {
    id: 'recomendaciones',
    title: 'Recomendaciones generales',
    subtitle: 'Qué hacer, qué evitar y conclusiones finales.',
    tags: ['Buenas prácticas', 'Checklist'],
    readTime: 4,
    content: [
      { type: 'lead', text: 'Usa estas reglas como checklist antes de publicar cualquier texto. El UX Writing no es decoración, es arquitectura de la experiencia.' },
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
            do: 'Ofrece soluciones y asume la responsabilidad.',
            doExample: 'Parece que hubo un problema de conexión. Vuelve a intentar.',
            dont: 'Culpar al usuario o a su dispositivo.',
            dontExample: 'Error de usuario. Conexión no válida.',
          },
          {
            topic: 'Botones (Call to Action)',
            do: 'Verbos en infinitivo, claros y específicos.',
            doExample: 'Recargar ahora · Ver mi plan',
            dont: 'Palabras genéricas y pasivas.',
            dontExample: 'Aceptar · OK · Continuar',
          },
        ],
      },
    ],
  },

  // ------------------------------------- Definitios --------------------------------
  {
    id: 'intro',
    title: '¿De qué se trata?',
    subtitle: 'Conoce nuestro propósito y el impacto de la voz en Mi Claro.',
    tags: ['Propósito', 'Contexto'],
    readTime: 4,
    content: [
      { 
        type: 'lead', 
        text: 'Claro no es solo una empresa de telecomunicaciones; es el motor que ha conectado a nuestro país durante décadas. Desde nuestras primeras instalaciones hasta la era de la fibra óptica y el 5G, hemos trabajado con un propósito inquebrantable: ser la marca que une hogares, acorta distancias, impulsa el crecimiento y facilita el progreso de las personas a través de la tecnología.' 
      },
      { 
        type: 'paragraph', 
        text: 'Queremos que el mundo nos perciba como un puente seguro hacia el futuro, donde la conectividad es sinónimo de oportunidades y bienestar.' 
      },
      { 
        type: 'quote', 
        text: 'Para nuestros millones de usuarios, somos ese “aliado experto y cercano”: el acompañante que es leal, transparente, empático, innovador, ágil y siempre dispuesto a solucionar.' 
      },
      { 
        type: 'paragraph', 
        text: 'Entendemos que detrás de cada pantalla, cada recarga o cada solicitud, hay una persona buscando estar cerca de lo que más le importa. Estas características corporativas deben estar impregnadas en todo lo que decimos, especialmente en el entorno digital de Mi Claro.' 
      },
      { 
        type: 'paragraph', 
        text: 'No basta con ofrecer la mejor infraestructura tecnológica; el cómo decimos las cosas es el reflejo directo de nuestro liderazgo y nuestra vocación de servicio. Sabemos que una interfaz puede ser fría, por lo que cada palabra que elegimos tiene el enorme poder de generar confianza, calmar una frustración o celebrar un logro.' 
      },
      { 
        type: 'paragraph', 
        text: 'Reconocemos que las personas acuden a nuestra aplicación en situaciones muy variadas. Dependiendo del contexto y de lo que el usuario esté buscando —ya sea la emoción de adquirir un nuevo plan, la cotidianidad de pagar una factura, o la urgencia de resolver una falla en su servicio— deberemos ajustar la intensidad de nuestro mensaje para conseguir el tono adecuado en el momento exacto.' 
      },
      { 
        type: 'paragraph', 
        text: 'La empatía será nuestra guía para saber cuándo ser directos, cuándo ser entusiastas y cuándo brindar soporte con extrema paciencia. En esta guía mostraremos cómo puedes potenciar todos los rasgos de nuestra voz para lograr que nuestra tecnología se sienta, antes que nada, humana.' 
      },
      { 
        type: 'lead', 
        text: 'El objetivo es que cada línea de texto deje en nuestros usuarios la tranquilidad y la certeza de que, con Claro, siempre están en las mejores manos.' 
      },
    ],
  },
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
    id: 'personalidad',
    title: 'Nuestra personalidad',
    subtitle: 'Los arquetipos que definen cómo nos comportamos y conectamos.',
    tags: ['Personalidad', 'Arquetipos', 'Identidad'],
    readTime: 4,
    content: [
      { 
        type: 'lead', 
        text: 'Para que Mi Claro ofrezca una experiencia digital realmente memorable, hemos definido una identidad clara y constante. Nuestra personalidad se construye sobre la combinación de dos arquetipos fundamentales: El Cuidador y El Sabio.' 
      },
      { 
        type: 'paragraph', 
        text: 'Esta combinación nos da el equilibrio que nuestros usuarios necesitan. Por un lado, somos El Cuidador porque entendemos que detrás de cada pantalla hay una persona buscando soluciones sin estrés; nuestra prioridad es acompañarlos con empatía frente a sus necesidades cotidianas. Por otro lado, somos El Sabio porque en el mundo de las telecomunicaciones se requiere agilidad. Resolvemos problemas técnicos con la autoridad de los expertos, pero con la habilidad de explicarlo todo en un lenguaje cercano, claro y sin complicaciones.' 
      },
      {
        type: 'archetypes',
        items: [
          {
            name: 'Cuidador',
            icon: Heart,
            color: 'text-rose-700',
            bgMain: 'bg-rose-50',
            bgCard: 'bg-white',
            traits: {
              actitud: 'Nos ponemos en los zapatos del cliente. Priorizamos la empatía, la paciencia y la claridad, acompañando al usuario para que nunca se sienta perdido frente a un proceso en la app.',
              objetivo: 'Ayudar de manera genuina, tranquilizar en momentos de duda y proteger los intereses del cliente, cuidando siempre su tiempo y su saldo.',
              mensaje: '"Relájate, estamos aquí para apoyarte de principio a fin y hacer tu vida digital más fácil."',
              descripcion: 'Proyecta generosidad, protección, calidez humana y una cercanía que transforma trámites técnicos en interacciones amables.'
            }
          },
          {
            name: 'Sabio',
            icon: Zap,
            color: 'text-amber-700',
            bgMain: 'bg-amber-100',
            bgCard: 'bg-amber-50',
            traits: {
              actitud: 'Dominamos la tecnología para facilitar la vida del usuario. Resolvemos problemas con autoridad técnica, pero lo explicamos de forma sencilla y directa. Somos rápidos y precisos.',
              objetivo: 'Brindar soluciones exactas, eliminar las fricciones del entorno digital y empoderar al usuario para que tenga el control total de sus servicios.',
              mensaje: '"Conocemos el sistema, entendemos qué pasó y lo vamos a resolver de inmediato."',
              descripcion: 'Proyecta conocimiento, capacidad de resolución efectiva y una agilidad que inspira confianza absoluta desde el primer momento.'
            }
          }
        ]
      }
    ],
  },
  {
    id: 'lenguaje',
    title: 'Nuestro lenguaje',
    subtitle: 'El universo verbal que define nuestra identidad en Mi Claro.',
    tags: ['Lenguaje', 'Palabras', 'Reglas'],
    readTime: 3,
    content: [
      { type: 'lead', text: 'Tener claro nuestro universo verbal (lo que decimos y lo que no decimos) es la clave principal para lograr el mensaje correcto con el tono adecuado en todos nuestros canales digitales.' },
      { type: 'paragraph', text: 'Nuestros principios para toda la audiencia aseguran claridad, cercanía y eficiencia: usamos el tú (tuteo profesional) y evitamos el usted formal o el vos coloquial. Evitamos la jerga técnica, preferimos la voz activa y escribimos en números los datos clave (ej: "3 días").' },
      {
        type: 'verbal-universe',
        says: [
          'Tú / Tu plan', 'Gestionar', 'Recargar', 'Ayuda', 'Conectamos',
          'Beneficios', 'Descubrir', 'Solucionar', 'Fácil', 'Experiencia'
        ],
        doesNotSay: [
          'Usted / Vos', 'Abonar saldo', 'El Abonado', 'Transacción', 'Avería',
          'Soporte Técnico', 'Error del sistema', 'Exclusivo'
        ],
        tip: 'Los textos de error o soporte deben funcionar para alguien con un nivel de estrés alto. La empatía y la claridad siempre serán más importantes que sonar "inteligentes" o utilizar acrónimos técnicos.'
      }
    ],
  },
  {
    id: 'intensidad_tono',
    title: 'Intensidad del tono',
    subtitle: 'Cómo adaptamos la fuerza de nuestro mensaje según el contexto y la emoción del usuario.',
    tags: ['Tono', 'Intensidad', 'Adaptabilidad'],
    readTime: 5,
    content: [
      { type: 'lead', text: 'La intensidad del tono en las comunicaciones puede hacer que el mensaje se perciba de una u otra manera. Tener claros los niveles de intensidad en la aplicación del tono nos ayuda a reforzar el mensaje y hacer brillar nuestra personalidad.' },
      { type: 'paragraph', text: 'A continuación mostramos los diferentes niveles de tono en la voz según las características de nuestros dos arquetipos de personalidad. Cada nivel representa un grado de energía emocional distinto, desde la máxima calidez hasta los límites que debemos evitar.' },
      {
        type: 'intensity-meter',
        archetypes: [
          {
            name: 'Cuidador',
            levels: [
              {
                level: 5,
                color: '#dc2626',
                desc: 'Inspira alegría, positivismo y comodidad. Siempre ayudando hasta el final.',
                keywords: ['Apoyo', 'Bienestar', 'Cercanía', 'Fascinante']
              },
              {
                level: 4,
                color: '#ea580c',
                desc: 'Es bueno, compasivo y empático. Vela por la protección del usuario sin caer en el exceso.',
                keywords: ['Amigos', 'Familia', 'Respaldo']
              },
              {
                level: 3,
                color: '#d97706',
                desc: 'Es sensible al sufrimiento del usuario y se aferra a las respuestas correctas.',
                keywords: ['Social', 'Aspiracional', 'Calidez', 'Ético']
              },
              {
                level: 2,
                color: '#ca8a04',
                desc: 'Le cuesta decir NO en algunas ocasiones y tomar decisiones que podrían incomodar.',
                keywords: ['Polémicos', 'Anticuados', 'Debate']
              },
              {
                level: 1,
                color: '#eab308',
                desc: 'Puede caer en excesivo autoritarismo o sobreprotección. Se preocupa demasiado.',
                keywords: ['Individualista', 'Excluyentes', 'Cerrados']
              }
            ]
          },
          {
            name: 'Sabio',
            levels: [
              {
                level: 5,
                color: '#dc2626',
                desc: 'Siempre piensa en grande, es apasionado, curioso y transformador de grandes ideas.',
                keywords: ['Sueños', 'Novedoso', 'Idealidad', 'Experiencias']
              },
              {
                level: 4,
                color: '#ea580c',
                desc: 'Es lógico y hábil en la resolución de problemas. No le tiene miedo a los retos.',
                keywords: ['Apoyo', 'Calidez', 'Confianza', 'Logros']
              },
              {
                level: 3,
                color: '#d97706',
                desc: 'El ser demasiado analítico puede llevarlo a perder o desconectarse de su lado humano.',
                keywords: ['Individualista', 'Religioso', 'Exclusivo']
              },
              {
                level: 2,
                color: '#ca8a04',
                desc: 'Puede caer en la manipulación o el engaño para buscar un beneficio propio.',
                keywords: ['Club', 'Excluyentes', 'Lujo']
              },
              {
                level: 1,
                color: '#eab308',
                desc: 'Puede pasar los límites de la legalidad o prometer imposibles.',
                keywords: ['Religioso', 'Club', 'Exclusivo', 'Privado']
              }
            ]
          }
        ]
      }
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
