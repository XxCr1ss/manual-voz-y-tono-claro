import { useState } from 'react';
import { AlertTriangle, CheckCircle2, XCircle, Sparkles, Info, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Hotspot {
  id: string;
  label: string;
  x: string;
  y: string;
  type: 'bad' | 'good' | 'info';
  title: string;
  problem: string;
  suggestion?: string;
}

interface Screen {
  id: string;
  label: string;
  category: string;
  bg: string;
  render: () => React.ReactNode;
  hotspots: Hotspot[];
}

const screens: Screen[] = [
  {
    id: 'error-bad',
    label: 'Error: Ejemplo malo',
    category: 'Mensajes de Error',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '22%', type: 'bad',
        title: 'Código de error técnico',
        problem: 'El código "Error 500" no le dice nada útil al usuario. Solo genera confusión y ansiedad.',
        suggestion: 'Elimina los códigos técnicos de la UI. Úsalos solo en logs internos.',
      },
      {
        id: 'h2', label: '2', x: '50%', y: '42%', type: 'bad',
        title: 'Lenguaje pasivo e impersonal',
        problem: '"Proceso no completado" es vago. No dice qué pasó, a quién le pasó ni qué hacer.',
        suggestion: 'Usa voz activa: "No pudimos completar tu pago" y ofrece una solución.',
      },
      {
        id: 'h3', label: '3', x: '50%', y: '68%', type: 'bad',
        title: 'CTA imperativo frío',
        problem: '"Intente nuevamente" es un imperativo formal y frío. No genera confianza.',
        suggestion: 'Usa "Vuelve a intentarlo" (tú cercano) o añade contexto: "Vuelve a intentarlo en unos minutos".',
      },
    ],
    render: () => (
      <div className="flex flex-col h-full bg-white">
        {/* Status bar */}
        <div className="flex justify-between items-center px-4 pt-3 pb-1">
          <span className="text-[10px] font-semibold text-gray-900">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 rounded-sm border border-gray-400 p-px"><div className="h-full w-3/4 bg-gray-400 rounded-xs" /></div>
          </div>
        </div>
        {/* App bar */}
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
          <span className="text-[13px] font-bold text-gray-900">Mi Claro</span>
        </div>
        {/* Error content */}
        <div className="flex-1 flex flex-col items-center justify-center px-5 text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
            <XCircle className="w-7 h-7 text-red-500" />
          </div>
          {/* Hotspot 1 */}
          <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-1.5 w-full">
            <p className="text-[10px] font-bold text-red-600 font-mono">Error 500: Internal Server Error</p>
          </div>
          {/* Hotspot 2 */}
          <p className="text-[12px] text-gray-500 px-2">Proceso no completado.<br />La operación no pudo ser procesada por el sistema.</p>
          {/* Hotspot 3 */}
          <button className="mt-2 w-full py-2.5 bg-red-600 rounded-lg text-white text-[12px] font-semibold">
            Intente nuevamente
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 'error-good',
    label: 'Error: Ejemplo bueno',
    category: 'Mensajes de Error',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '22%', type: 'good',
        title: 'Título empático y claro',
        problem: '"¡Ups! Algo salió mal" reconoce el error sin culpar al usuario y con un tono humano.',
        suggestion: 'Este es el patrón correcto. Adapta el título al contexto específico del error.',
      },
      {
        id: 'h2', label: '2', x: '50%', y: '46%', type: 'good',
        title: 'Descripción accionable',
        problem: 'El texto explica qué pasó en lenguaje sencillo y ofrece una alternativa concreta.',
        suggestion: 'Siempre cierra con una acción o alternativa. No dejes al usuario en un callejón sin salida.',
      },
      {
        id: 'h3', label: '3', x: '50%', y: '70%', type: 'good',
        title: 'CTA y opción secundaria',
        problem: 'Dos opciones: la principal (reintentar) y una secundaria para escalar si el problema persiste.',
        suggestion: 'Ofrecer soporte como fallback muestra que la empresa respalda al usuario cuando falla.',
      },
    ],
    render: () => (
      <div className="flex flex-col h-full bg-white">
        <div className="flex justify-between items-center px-4 pt-3 pb-1">
          <span className="text-[10px] font-semibold text-gray-900">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 rounded-sm border border-gray-400 p-px"><div className="h-full w-3/4 bg-gray-400 rounded-xs" /></div>
          </div>
        </div>
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
          <span className="text-[13px] font-bold text-gray-900">Mi Claro</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-5 text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <p className="text-[14px] font-bold text-gray-900">¡Ups! Algo salió mal</p>
            <p className="text-[11px] text-gray-400 mt-0.5">de nuestro lado</p>
          </div>
          <p className="text-[12px] text-gray-500 px-2 leading-relaxed">No pudimos procesar tu pago. Verifica los datos de tu tarjeta o intenta con otro método de pago.</p>
          <button className="mt-2 w-full py-2.5 bg-red-600 rounded-lg text-white text-[12px] font-semibold">
            Vuelve a intentarlo
          </button>
          <button className="w-full py-2 text-[11px] text-gray-500">
            Contactar soporte
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 'success',
    label: 'Confirmación de éxito',
    category: 'Éxito y Confirmación',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '20%', type: 'good',
        title: 'Celebración breve y específica',
        problem: '"¡Listo!" es conciso y celebratorio. Luego va directo al detalle de qué se confirmó.',
        suggestion: 'No exageres. Un emoji o exclamación es suficiente. No uses "¡Felicidades!" para una recarga.',
      },
      {
        id: 'h2', label: '2', x: '50%', y: '48%', type: 'info',
        title: 'Resumen del detalle',
        problem: 'Mostrar el monto y el número destino confirma que la acción fue la correcta. Genera confianza.',
        suggestion: 'Siempre repite los datos clave de la transacción en el mensaje de confirmación.',
      },
      {
        id: 'h3', label: '3', x: '50%', y: '72%', type: 'good',
        title: 'CTA de siguiente paso',
        problem: 'Ofrecer "Ver mis recargas" como siguiente acción mantiene al usuario dentro del flujo.',
        suggestion: 'Después del éxito, guía al usuario hacia el siguiente paso lógico o al inicio.',
      },
    ],
    render: () => (
      <div className="flex flex-col h-full bg-white">
        <div className="flex justify-between items-center px-4 pt-3 pb-1">
          <span className="text-[10px] font-semibold text-gray-900">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2.5 rounded-sm border border-gray-400 p-px"><div className="h-full w-3/4 bg-gray-400 rounded-xs" /></div>
          </div>
        </div>
        <div className="flex items-center px-4 py-3 border-b border-gray-100">
          <span className="text-[13px] font-bold text-gray-900">Mi Claro</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-5 text-center gap-3">
          <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-500" />
          </div>
          <div>
            <p className="text-[16px] font-extrabold text-gray-900">¡Listo!</p>
            <p className="text-[12px] text-gray-500 mt-0.5">Tu recarga fue aplicada</p>
          </div>
          <div className="w-full bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-left">
            <p className="text-[10px] text-gray-400 mb-1 font-semibold uppercase tracking-wide">Detalle</p>
            <p className="text-[13px] font-bold text-gray-900">$20.000</p>
            <p className="text-[11px] text-gray-500 mt-0.5">→ 300 123 4567</p>
            <p className="text-[10px] text-gray-400 mt-2">Aplicado inmediatamente</p>
          </div>
          <button className="mt-1 w-full py-2.5 bg-red-600 rounded-lg text-white text-[12px] font-semibold">
            Ver mis recargas
          </button>
          <button className="w-full py-2 text-[11px] text-gray-500">
            Ir al inicio
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 'onboarding',
    label: 'Bienvenida (Onboarding)',
    category: 'Onboarding',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '24%', type: 'good',
        title: 'Saludo personalizado',
        problem: 'Usar el nombre del usuario en la bienvenida crea conexión inmediata y muestra que la app lo conoce.',
        suggestion: 'Si no tienes el nombre, usa "¡Bienvenido!" sin apellidos genéricos como "Usuario".',
      },
      {
        id: 'h2', label: '2', x: '50%', y: '48%', type: 'info',
        title: 'Lista de beneficios, no instrucciones',
        problem: 'El onboarding debe mostrar qué puedes hacer (valor), no cómo funciona la app técnicamente.',
        suggestion: 'Cada pantalla de onboarding = un beneficio. Máximo 3 puntos por pantalla.',
      },
      {
        id: 'h3', label: '3', x: '50%', y: '74%', type: 'good',
        title: 'CTA de acción, no de continuación',
        problem: '"Explorar mis servicios" lleva al usuario directamente al valor. No es un genérico "Siguiente".',
        suggestion: 'Los botones de onboarding deben ser promesas de valor, no simples pasos de navegación.',
      },
    ],
    render: () => (
      <div className="flex flex-col h-full bg-gradient-to-b from-red-600 to-red-700">
        <div className="flex justify-between items-center px-4 pt-3 pb-1">
          <span className="text-[10px] font-semibold text-white/80">9:41</span>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-5 text-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg">
            <span className="text-[20px] font-black text-red-600">C</span>
          </div>
          <div>
            <p className="text-[18px] font-extrabold text-white leading-tight">¡Hola, Juliana!</p>
            <p className="text-[12px] text-white/70 mt-1">Tu cuenta Mi Claro está lista</p>
          </div>
          <div className="w-full bg-white/10 rounded-2xl p-5 text-left space-y-3 border border-white/20">
            {['Recarga tu celular en segundos', 'Revisa tu consumo en tiempo real', 'Activa y gestiona tus paquetes'].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-[12px] text-white font-medium">{text}</span>
              </div>
            ))}
          </div>
          <button className="mt-1 w-full py-3 bg-white rounded-xl text-red-600 text-[13px] font-extrabold shadow">
            Explorar mis servicios
          </button>
        </div>
      </div>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export function ExamplesSection() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const screen = screens[activeScreen];

  const typeConfig = {
    bad:  { icon: XCircle,       color: 'text-red-600',     bg: 'bg-red-100',     border: 'border-red-500',   badge: 'bg-red-100 text-red-700',   label: 'Práctica a evitar' },
    good: { icon: CheckCircle2,  color: 'text-emerald-600', bg: 'bg-emerald-100', border: 'border-emerald-500', badge: 'bg-emerald-100 text-emerald-700', label: 'Práctica recomendada' },
    info: { icon: Info,          color: 'text-sky-600',     bg: 'bg-sky-100',     border: 'border-sky-500',   badge: 'bg-sky-100 text-sky-700',   label: 'Punto a notar' },
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[28px] sm:text-[32px] font-extrabold text-stone-900 leading-tight mb-2">
          Ejemplos Interactivos
        </h1>
        <p className="text-[16px] text-stone-500">
          Haz clic en los puntos de análisis sobre cada pantalla para entender qué funciona y qué no.
        </p>
        <div className="mt-6 h-px bg-gradient-to-r from-stone-200 to-transparent" />
      </div>

      {/* Screen selector tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-1 scrollbar-none">
        {screens.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setActiveScreen(i); setActiveHotspot(null); }}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-[12px] font-semibold transition-colors border ${
              i === activeScreen
                ? 'bg-stone-900 text-white border-stone-900'
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-300'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Main display */}
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Phone mockup */}
        <div className="lg:col-span-2 flex flex-col items-center">
          <div className="relative w-full max-w-[220px] mx-auto">
            {/* Phone shell */}
            <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-gray-800 rounded-[2rem] overflow-hidden" style={{ height: 420 }}>
                {/* Notch */}
                <div className="relative">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-gray-900 rounded-full z-10" />
                </div>
                {/* Screen content */}
                <div className="w-full h-full relative">
                  {screen.render()}
                  {/* Hotspot pins */}
                  {screen.hotspots.map(hs => {
                    const cfg = typeConfig[hs.type];
                    const isActive = activeHotspot?.id === hs.id;
                    return (
                      <button
                        key={hs.id}
                        onClick={() => setActiveHotspot(isActive ? null : hs)}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-transform ${isActive ? 'scale-125' : 'hover:scale-110'}`}
                        style={{ left: hs.x, top: hs.y }}
                      >
                        <span className={`absolute w-8 h-8 rounded-full ${cfg.bg} opacity-40 animate-ping`} />
                        <span className={`relative w-6 h-6 rounded-full ${cfg.bg} ${cfg.border} border-2 flex items-center justify-center shadow-lg`}>
                          <span className="text-[9px] font-black text-stone-800">{hs.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* Phone bottom bar */}
            <div className="flex justify-center mt-2">
              <div className="w-20 h-1 bg-gray-300 rounded-full" />
            </div>
          </div>

          {/* Category badge */}
          <div className="mt-4 text-center">
            <span className="text-[11px] font-semibold text-stone-500 bg-stone-100 px-3 py-1 rounded-full border border-stone-200">
              {screen.category}
            </span>
          </div>

          {/* Arrow nav */}
          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() => { setActiveScreen(s => Math.max(s - 1, 0)); setActiveHotspot(null); }}
              disabled={activeScreen === 0}
              className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center disabled:opacity-30 hover:bg-stone-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-stone-600" />
            </button>
            <span className="text-[12px] text-stone-400">{activeScreen + 1} / {screens.length}</span>
            <button
              onClick={() => { setActiveScreen(s => Math.min(s + 1, screens.length - 1)); setActiveHotspot(null); }}
              disabled={activeScreen === screens.length - 1}
              className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center disabled:opacity-30 hover:bg-stone-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-stone-600" />
            </button>
          </div>
        </div>

        {/* Analysis panel */}
        <div className="lg:col-span-3">
          {activeHotspot ? (() => {
            const cfg = typeConfig[activeHotspot.type];
            const Icon = cfg.icon;
            return (
              <div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${cfg.badge}`}>
                    <Icon className="w-3.5 h-3.5" />
                    {cfg.label}
                  </span>
                  <button onClick={() => setActiveHotspot(null)} className="text-stone-400 hover:text-stone-600 transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-5 space-y-4">
                  <h3 className="text-[16px] font-bold text-stone-900">{activeHotspot.title}</h3>
                  <div>
                    <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">Análisis</p>
                    <p className="text-[14px] text-stone-600 leading-relaxed">{activeHotspot.problem}</p>
                  </div>
                  {activeHotspot.suggestion && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <p className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Recomendación</p>
                      </div>
                      <p className="text-[13px] text-emerald-800 leading-relaxed">{activeHotspot.suggestion}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })() : (
            <div className="flex flex-col items-center justify-center h-full min-h-[280px] text-center px-6 bg-stone-50 rounded-2xl border border-dashed border-stone-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 flex items-center justify-center mb-4 shadow-sm">
                <Info className="w-5 h-5 text-stone-400" />
              </div>
              <p className="text-[15px] font-semibold text-stone-600 mb-1">Selecciona un punto</p>
              <p className="text-[13px] text-stone-400 max-w-[220px] leading-relaxed">
                Haz clic en cualquiera de los círculos numerados sobre el teléfono para ver el análisis.
              </p>
              <div className="flex items-center gap-3 mt-5">
                <span className="flex items-center gap-1.5 text-[11px] text-stone-500">
                  <span className="w-3 h-3 rounded-full bg-red-200 border border-red-400" /> A evitar
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-stone-500">
                  <span className="w-3 h-3 rounded-full bg-emerald-200 border border-emerald-400" /> Recomendado
                </span>
                <span className="flex items-center gap-1.5 text-[11px] text-stone-500">
                  <span className="w-3 h-3 rounded-full bg-sky-200 border border-sky-400" /> A notar
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
