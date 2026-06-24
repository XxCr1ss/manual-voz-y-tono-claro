import { EjemploVozTono } from '@/types/vozTono.types';

export const vozTonoEjemplosData: EjemploVozTono[] = [
  {
    id: 'microcopias-redundancia',
    titulo: 'Redundancia en Microcopias',
    categoria: 'Comercial',
    imagenUrl: '/interfaces/microcopias-redundancia-de-etiquetas.png',
    explicacionGeneral: 'En la sección de accesos rápidos se duplica innecesariamente el texto en el icono y la etiqueta, lo que satura visualmente la interfaz y desperdicia espacio valioso para guiar al usuario.',
    hotspots: [
      {
        id: 'red-h1',
        x: 50,
        y: 42,
        width: 44,
        height: 18,
        titulo: 'Etiquetas Idénticas y Redundancia',
        textoDestacado: 'Icono "Ir a cine" + Etiqueta "Ir a cine"',
        estado: 'incorrecto',
        explicacion: 'En la sección "Zona comercial", el segundo botón de acceso rápido duplica el mismo texto tanto en el diseño interno del icono como en la etiqueta inferior obligatoria, mostrando "Ir a cine" e "Ir a cine" en un espacio de menos de un centímetro.',
        sugerencia: 'Colocar un verbo de acción claro en el icono (ej. "Ver cartelera") y un beneficio o categoría específica debajo (ej. "Cine Colombia" o "Entradas") para guiar mejor al usuario y aprovechar el elemento de texto de forma inteligente.'
      }
    ]
  },
  {
    id: 'mensaje-error-huerfano',
    titulo: 'Mensaje de Error Huérfano',
    categoria: 'Transaccional',
    imagenUrl: '/interfaces/mensaje-error.png',
    explicacionGeneral: 'Un texto de error de validación de identidad se muestra suelto, sin estructura visual, contenedor ni explicaciones de recuperación, rompiendo el flujo cognitivo del usuario.',
    hotspots: [
      {
        id: 'err-h1',
        x: 6,
        y: 56,
        width: 88,
        height: 10,
        titulo: 'Falta de Contenedor e Iconografía',
        textoDestacado: '"No fue posible cargar el servicio de validación..."',
        estado: 'incorrecto',
        explicacion: 'El texto en rojo aparece suelto en medio de la pantalla sin un contenedor formal (como un banner o alert box) ni un icono de advertencia que lo respalde visualmente. Se percibe descuidado o como un fallo que rompió el layout.',
        sugerencia: 'Alojar el error dentro de un alert box con fondo rosa claro y borde rojo suave, acompañado de un icono de advertencia. Esto le otorga estructura formal y legibilidad.'
      },
      {
        id: 'err-h2',
        x: 10,
        y: 71,
        width: 80,
        height: 16,
        titulo: 'Ambigüedad en la Recuperación (Heurística)',
        textoDestacado: 'Ubicación encima de "Continuar" y "Cancelar"',
        estado: 'advertencia',
        explicacion: 'Al presentarse justo encima de los botones de acción, confunde al usuario: no bloquea el botón principal "Continuar" ni aclara si presionarlo reactivará la validación o si el error es definitivo.',
        sugerencia: 'Deshabilitar el botón "Continuar" si la validación falló de forma permanente, o cambiar el texto del botón a "Reintentar" para ofrecer un camino claro de recuperación según la heurística.'
      }
    ]
  },
  {
    id: 'cta-estado-boton',
    titulo: 'CTA en Estado Incoherente',
    categoria: 'Transaccional',
    imagenUrl: '/interfaces/CTA-estado-de-boton.png',
    explicacionGeneral: 'El botón de pago se mantiene activo pero con estilo deshabilitado (gris) a pesar de tener un saldo de $0,00, generando ruido visual e incertidumbre sobre si hay deudas.',
    hotspots: [
      {
        id: 'cta-h1',
        x: 5,
        y: 74,
        width: 90,
        height: 12,
        titulo: 'Botón Deshabilitado Innecesario',
        textoDestacado: 'Botón "Pagar factura" inactivo (gris)',
        estado: 'incorrecto',
        explicacion: 'Mantener un CTA para una acción imposible de realizar en el contexto actual (pagar una factura que ya está en $0,00) genera ruido y confusión sobre el estado real de la cuenta.',
        sugerencia: 'Sustituir el botón inactivo por un mensaje de éxito o confirmación claro y humano (ej. "¡Tu cuenta está al día!"). Esto refuerza la tranquilidad del usuario en lugar de dejar un botón inactivo que no explica su estado.'
      }
    ]
  },
  {
    id: 'mensaje-confirmacion-invasivo',
    titulo: 'Banner de Éxito Invasivo',
    categoria: 'Notificaciones',
    imagenUrl: '/interfaces/mensaje-confirmación.png',
    explicacionGeneral: 'Un banner verde de confirmación de descarga de factura aparece fijo en la cabecera, encimándose sobre datos esenciales de la línea del usuario y rompiendo el layout.',
    hotspots: [
      {
        id: 'conf-h1',
        x: 0,
        y: 11,
        width: 100,
        height: 11,
        titulo: 'Obstrucción de Datos y Layout',
        textoDestacado: 'Banner "Tu factura ha sido descargada..."',
        estado: 'incorrecto',
        explicacion: 'El banner de éxito aparece inyectado de forma fija en la parte superior, tapando parcialmente los datos de cabecera de la línea del usuario situados debajo de la palabra "Postpago".',
        sugerencia: 'Para confirmaciones de acciones menores (como descargas), usar una notificación efímera y flotante (Toast o Snackbar) en la parte inferior. Así, se valida la acción sin obstruir los elementos base del layout de la pantalla.'
      }
    ]
  },
  {
    id: 'cta-llamado-accion-oculto',
    titulo: 'Llamado a la Acción Enterrado',
    categoria: 'Transaccional',
    imagenUrl: '/interfaces/CTA-llamado-a-la-accion.png',
    explicacionGeneral: 'En la pantalla de pagos y recargas, el botón principal para proceder con la transacción no es visible de inmediato, priorizando visualmente una opción secundaria.',
    hotspots: [
      {
        id: 'cta2-h1',
        x: 10,
        y: 64,
        width: 80,
        height: 16,
        titulo: 'Falta de Jerarquía del CTA Principal',
        textoDestacado: 'Ausencia de botón principal visible / "Ver historial" destacado',
        estado: 'incorrecto',
        explicacion: 'El botón principal para proceder con el pago o inscripción brilla por su ausencia en el primer vistazo (fold). En su lugar, el elemento más llamativo es "Ver historial", que es una acción secundaria, generando parálisis en el flujo de conversión.',
        sugerencia: 'Posicionar un botón de acción primario y visible en el fold principal (ej. "Proceder al Pago") y relegar "Ver historial" a un enlace de menor peso visual para guiar el flujo lógico de conversión del usuario.'
      }
    ]
  }
];
