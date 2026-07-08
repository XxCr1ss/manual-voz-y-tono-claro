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
    id: 'redundancia',
    label: '1. Redundancia',
    category: 'Microcopias',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '35%', type: 'bad',
        title: 'Redundancia de Etiquetas',
        problem: 'Repetir la misma palabra en la etiqueta y en el valor (ej. usar la palabra "Nombre" antes de mostrar el nombre) sobrecarga visualmente la interfaz.',
        suggestion: 'Elimina etiquetas innecesarias. Sé directo y usa el diseño para dar contexto al dato sin ser repetitivo.',
      }
    ],
    render: () => <img src="/interfaces/1_microcopias-redundancia-de-etiquetas.png" alt="Redundancia de Etiquetas" className="w-full h-full object-cover" />,
  },
  {
    id: 'jerarquia',
    label: '2. Jerarquía',
    category: 'Microcopias',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '60%', y: '22%', type: 'good',
        title: 'Jerarquía Clara',
        problem: 'Los datos más importantes (como el monto a pagar) destacan con mayor tamaño y peso, guiando al instante el ojo del usuario.',
        suggestion: 'Usa diferentes tamaños, pesos de fuente y colores para crear un recorrido visual lógico de mayor a menor importancia.',
      }
    ],
    render: () => <img src="/interfaces/2_microcopias-jerarquia-informacion.png" alt="Jerarquía de Información" className="w-full h-full object-cover" />,
  },
  {
    id: 'cta-estado',
    label: '3. Estado CTA',
    category: 'Llamados a la Acción',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '43%', type: 'info',
        title: 'Visibilidad de Estados',
        problem: 'El usuario debe poder saber al instante si puede interactuar con un botón o si el sistema aún no se lo permite (estado inactivo).',
        suggestion: 'Asegúrate de que los botones inactivos tengan menor contraste, y que los botones listos destaquen con el color principal de la marca.',
      }
    ],
    render: () => <img src="/interfaces/3_CTA-estado-de-boton.png" alt="Estado de Botón" className="w-full h-full object-cover" />,
  },
  {
    id: 'cta-accion',
    label: '4. Verbo CTA',
    category: 'Llamados a la Acción',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '63%', type: 'good',
        title: 'Verbo de Acción Directo',
        problem: 'El botón indica con exactitud qué pasará al presionarlo usando un verbo de acción claro (ej: "Pagar", "Recargar", "Comprar").',
        suggestion: 'Evita verbos genéricos o pasivos como "Aceptar", "Ir" o "Continuar". Sé muy descriptivo con la acción a realizar.',
      }
    ],
    render: () => <img src="/interfaces/4_CTA-llamado-a-la-accion.png" alt="Llamado a la Acción" className="w-full h-full object-cover" />,
  },
  {
    id: 'mensaje-confirmacion',
    label: '5. Confirmación',
    category: 'Éxito y Confirmación',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '13%', type: 'good',
        title: 'Confirmación Directa y Clara',
        problem: 'El mensaje celebra de manera corta y amable que el proceso terminó con éxito, resumiendo los detalles de la transacción.',
        suggestion: 'Mantén los mensajes de éxito cortos. Muestra siempre los datos clave de la operación y ofrece un "siguiente paso" (ej. "Ir al inicio").',
      }
    ],
    render: () => <img src="/interfaces/5_mensaje-confirmaci%C3%B3n.png" alt="Confirmación" className="w-full h-full object-cover" />,
  },
  {
    id: 'mensaje-error',
    label: '6. Error',
    category: 'Mensajes de Error',
    bg: 'bg-gray-50',
    hotspots: [
      {
        id: 'h1', label: '1', x: '50%', y: '75%', type: 'bad',
        title: 'Tono Empático en Errores',
        problem: 'En momentos de frustración, el texto nunca debe sonar robótico, culpar al usuario, ni mostrar códigos técnicos incomprensibles.',
        suggestion: 'Habla desde la voz del sistema, explica el fallo de forma humana y ofrece de inmediato una alternativa de contacto o reintento.',
      }
    ],
    render: () => <img src="/interfaces/6_mensaje-error.png" alt="Mensaje de Error" className="w-full h-full object-cover" />,
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
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
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
          <div className="relative w-full max-w-[280px] mx-auto">
            {/* Phone shell */}
            <div className="relative bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
              <div className="bg-gray-800 rounded-[2rem] overflow-hidden" style={{ height: 560 }}>
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
