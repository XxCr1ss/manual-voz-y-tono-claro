'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Smartphone, 
  Info, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  ChevronRight,
  Menu,
  X,
  Layers,
  Sparkles
} from 'lucide-react';
import { vozTonoEjemplosData } from '@/data/vozTonoData';
import { EjemploVozTono, HotspotVozTono, CategoriaEjemplo } from '@/types/vozTono.types';
import { HotspotVozTono as HotspotComponent } from './HotspotVozTono';
import { cn } from '@/lib/utils';

export function ManualVozTonoExplorer() {
  // Active example and active hotspot states
  const [activeExample, setActiveExample] = useState<EjemploVozTono>(vozTonoEjemplosData[0]);
  const [activeHotspot, setActiveHotspot] = useState<HotspotVozTono | null>(null);
  
  // Mobile UI controls
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<CategoriaEjemplo | 'Todos'>('Todos');

  // Reset active hotspot when active example changes
  useEffect(() => {
    setActiveHotspot(null);
  }, [activeExample]);

  // Categories helper
  const categories: (CategoriaEjemplo | 'Todos')[] = ['Todos', 'Notificaciones', 'Transaccional', 'Comercial'];

  // Filtered examples
  const filteredExamples = activeCategoryFilter === 'Todos'
    ? vozTonoEjemplosData
    : vozTonoEjemplosData.filter(ex => ex.categoria === activeCategoryFilter);

  // Render the phone mockup displaying the real screenshot image
  const renderMockup = () => {
    const hotspotsOverlay = activeExample.hotspots.map((hs) => (
      <HotspotComponent
        key={hs.id}
        hotspot={hs}
        isActive={activeHotspot?.id === hs.id}
        onClick={(selected) => setActiveHotspot(selected)}
      />
    ));

    return (
      <div className="relative w-full aspect-[9/19.5] max-w-[310px] mx-auto bg-zinc-950 rounded-[2.2rem] border-[6px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-sans select-none ring-4 ring-zinc-900/40">
        {/* Top Notch / Camera Pill */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-3.5 bg-zinc-800 rounded-full z-30 flex items-center justify-center">
          <div className="w-2 h-2 bg-zinc-950 rounded-full mr-1.5" />
          <div className="w-5 h-0.5 bg-zinc-950 rounded-full" />
        </div>

        {/* Screen content - Screenshot Image */}
        <div className="flex-1 w-full h-full relative bg-zinc-900 overflow-hidden">
          <img
            src={activeExample.imagenUrl}
            alt={activeExample.titulo}
            className="w-full h-full object-cover object-top select-none pointer-events-none"
          />
          
          {/* Hotspots Overlay */}
          <div className="absolute inset-0 z-20">
            {hotspotsOverlay}
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full z-30 pointer-events-none" />
      </div>
    );
  };

  // Helper status color classes for card details
  const getStatusDetails = (estado: HotspotVozTono['estado']) => {
    switch (estado) {
      case 'correcto':
        return {
          icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
          title: 'Práctica Recomendada',
          bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
          badgeText: 'Do (Recomendado)',
          accent: 'emerald'
        };
      case 'incorrecto':
        return {
          icon: <XCircle className="w-5 h-5 text-red-500" />,
          title: 'Práctica a Evitar',
          bg: 'bg-red-500/10 border-red-500/20 text-red-400',
          badgeText: 'Don\'t (Evitar)',
          accent: 'red'
        };
      case 'advertencia':
        return {
          icon: <AlertTriangle className="w-5 h-5 text-amber-500" />,
          title: 'Advertencia de Diseño',
          bg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
          badgeText: 'Advertencia',
          accent: 'amber'
        };
      default:
        return {
          icon: <Info className="w-5 h-5 text-blue-500" />,
          title: 'Información',
          bg: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
          badgeText: 'Info',
          accent: 'blue'
        };
    }
  };

  return (
    <div className="w-full bg-zinc-950/40 rounded-3xl border border-border/80 p-6 md:p-8 backdrop-blur-xl relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />

      {/* 1. Header (Cabecera) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border/60 pb-6 mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Evaluación de Interfaz Claro
            </span>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest bg-zinc-900 px-2 py-0.5 rounded border border-border/30">
              Do's & Don'ts
            </span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            Simulador de Voz y Tono
          </h3>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
            Explora capturas reales de la interfaz de Claro. Haz clic en los puntos interactivos para identificar malas prácticas y descubrir nuestras propuestas de mejora.
          </p>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden inline-flex items-center gap-2 self-start bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-white/90 hover:bg-zinc-850 hover:text-white transition-all active:scale-95"
        >
          <Menu className="w-4 h-4 text-primary" />
          <span>Explorar Casos</span>
        </button>
      </div>

      {/* 2. Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Central Display Area (Visor + Explicación) - spans 3 columns on desktop */}
        <div className="lg:col-span-3 flex flex-col md:flex-row gap-8 items-stretch justify-center min-h-[580px] bg-zinc-900/20 border border-border/40 rounded-2xl p-6 md:p-8">
          
          {/* Mockup Simulator */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-1">
              <Smartphone className="w-3.5 h-3.5 text-primary" />
              <span>Interfaz: {activeExample.titulo}</span>
            </div>

            {/* Simulated Mobile Device with AnimatePresence */}
            <div className="relative w-full max-w-[340px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExample.id}
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -10 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="w-full"
                >
                  {renderMockup()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Explanation Tooltip Panel (Escritorio / Tablet) */}
          <div className="hidden md:flex w-full md:w-[320px] flex-col justify-start border-t md:border-t-0 md:border-l border-border/50 pt-6 md:pt-0 md:pl-8">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-primary" />
              <span>Análisis de Interfaz</span>
            </h4>

            <AnimatePresence mode="wait">
              {activeHotspot ? (
                <motion.div
                  key={activeHotspot.id}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col gap-4"
                >
                  {/* Status Badge */}
                  {(() => {
                    const status = getStatusDetails(activeHotspot.estado);
                    return (
                      <div className={cn("inline-flex items-center gap-2 border px-3 py-1.5 rounded-xl text-xs font-semibold self-start", status.bg)}>
                        {status.icon}
                        <span>{status.badgeText}</span>
                      </div>
                    );
                  })()}

                  <div>
                    <h5 className="text-white text-base font-bold tracking-tight leading-snug">
                      {activeHotspot.titulo}
                    </h5>
                    <span className="text-[10px] text-zinc-500 font-medium">Foco del análisis</span>
                  </div>

                  {/* Highlighted text quoted */}
                  <div className="bg-white/3 border-l-2 border-primary/50 p-3 rounded-r-xl">
                    <p className="text-white/90 italic text-xs leading-relaxed">
                      "{activeHotspot.textoDestacado}"
                    </p>
                  </div>

                  {/* Detailed explanation */}
                  <div className="text-zinc-350 text-xs leading-relaxed flex flex-col gap-2">
                    <p className="font-semibold text-white/80">Problema detectado:</p>
                    <p className="text-zinc-400">{activeHotspot.explicacion}</p>
                  </div>

                  {/* Alternative suggestions (Do's & Don'ts) */}
                  {activeHotspot.sugerencia && (
                    <div className="mt-2 p-3.5 bg-emerald-500/5 border border-emerald-500/15 rounded-xl text-xs text-emerald-300/90 leading-relaxed">
                      <strong className="text-emerald-200 flex items-center gap-1 mb-1 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        Propuesta de Mejora:
                      </strong>
                      {activeHotspot.sugerencia}
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="empty-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center flex-1 py-8 px-4 text-zinc-500 border border-dashed border-zinc-800 rounded-xl"
                >
                  <Info className="w-8 h-8 mb-3 text-zinc-600 stroke-[1.5]" />
                  <p className="text-xs font-medium leading-relaxed max-w-[200px]">
                    Haz clic en cualquiera de los hotspots interactivos (círculos de pulso) sobre la pantalla del teléfono para examinar el error y ver su propuesta de mejora.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* 3. Panel Lateral Derecho (Índice de Ejemplos) - 1 column on desktop */}
        <div className="hidden lg:flex flex-col gap-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-primary" />
              <span>Ejemplos Reales</span>
            </h4>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Selecciona un caso del manual para cargar su captura y hotspots asociados.
            </p>
          </div>

          {/* Sidebar Nav */}
          <nav className="flex flex-col gap-3">
            {categories.filter(c => c !== 'Todos').map((cat) => {
              const examplesInCat = vozTonoEjemplosData.filter(ex => ex.categoria === cat);
              if (examplesInCat.length === 0) return null;

              return (
                <div key={cat} className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider px-2">
                    {cat}
                  </span>
                  
                  {examplesInCat.map((ex) => {
                    const isActive = activeExample.id === ex.id;

                    return (
                      <button
                        key={ex.id}
                        onClick={() => setActiveExample(ex)}
                        className={cn(
                          "w-full text-left rounded-xl p-3 text-xs transition-all duration-200 border flex flex-col gap-1.5 hover:scale-[1.02] active:scale-[0.98]",
                          isActive
                            ? "bg-primary-transparent border-primary/30 text-white shadow-lg shadow-primary/5"
                            : "bg-white/2 border-zinc-900 text-zinc-400 hover:bg-white/5 hover:border-zinc-800 hover:text-white"
                        )}
                      >
                        <div className="flex items-center justify-between w-full">
                          <span className="font-bold tracking-tight leading-snug">{ex.titulo}</span>
                          <ChevronRight className={cn("w-3.5 h-3.5 transition-transform", isActive ? "text-primary translate-x-0.5" : "text-zinc-600")} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="inline-block text-[9px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-500 font-bold border border-zinc-800">
                            {ex.categoria}
                          </span>
                          <span className="text-[10px] text-zinc-500 truncate">
                            {ex.hotspots.length} hotspots
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </nav>
        </div>

      </div>

      {/* 4. Bottom Drawer / Sheet for Mobile Hotspot explanations */}
      <AnimatePresence>
        {activeHotspot && (
          <div className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-2xs z-50 flex items-end justify-center" onClick={() => setActiveHotspot(null)}>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full bg-zinc-900 border-t border-border rounded-t-3xl p-6 pb-10 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()} // Prevent closing drawer when clicking inside
            >
              {/* Drag handle decoration */}
              <div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mb-5" />
              
              <div className="flex justify-between items-start mb-4">
                {(() => {
                  const status = getStatusDetails(activeHotspot.estado);
                  return (
                    <div className={cn("inline-flex items-center gap-1.5 border px-2.5 py-1 rounded-full text-[10px] font-bold uppercase", status.bg)}>
                      {status.icon}
                      <span>{status.badgeText}</span>
                    </div>
                  );
                })()}
                
                <button
                  onClick={() => setActiveHotspot(null)}
                  className="w-7 h-7 rounded-full bg-zinc-800 hover:bg-zinc-750 flex items-center justify-center text-zinc-400 active:scale-90 transition-transform"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <h4 className="text-white text-lg font-bold tracking-tight mb-1 leading-snug">
                {activeHotspot.titulo}
              </h4>
              <span className="text-[10px] text-zinc-500 font-medium block mb-4">Foco del análisis</span>

              {/* Highlighted text quote */}
              <div className="bg-white/3 border-l-2 border-primary/50 p-4 rounded-r-xl mb-4">
                <p className="text-white italic text-xs leading-relaxed">
                  "{activeHotspot.textoDestacado}"
                </p>
              </div>

              {/* Detailed explanation */}
              <div className="text-zinc-300 text-xs leading-relaxed flex flex-col gap-2 mb-4">
                <p className="font-semibold text-white/80">Problema detectado:</p>
                <p className="text-zinc-400">{activeHotspot.explicacion}</p>
              </div>

              {/* Suggestions */}
              {activeHotspot.sugerencia && (
                <div className="p-4 bg-emerald-500/5 border border-emerald-500/15 rounded-xl text-xs text-emerald-300/90 leading-relaxed">
                  <strong className="text-emerald-200 flex items-center gap-1 mb-1 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Propuesta de Mejora:
                  </strong>
                  {activeHotspot.sugerencia}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. Mobile Drawer / Modal menu for choosing examples */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-xs z-50 flex justify-end" onClick={() => setMobileMenuOpen(false)}>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-full max-w-[280px] bg-zinc-950 border-l border-border h-full p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                    Ejemplos del Manual
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-zinc-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategoryFilter(cat)}
                      className={cn(
                        "text-[9px] font-bold px-2 py-1 rounded-full uppercase tracking-wider transition-all",
                        activeCategoryFilter === cat
                          ? "bg-primary text-white"
                          : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
                      )}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Examples list */}
                <div className="flex flex-col gap-2 overflow-y-auto max-h-[60vh] pr-1">
                  {filteredExamples.map((ex) => {
                    const isActive = activeExample.id === ex.id;

                    return (
                      <button
                        key={ex.id}
                        onClick={() => {
                          setActiveExample(ex);
                          setMobileMenuOpen(false);
                        }}
                        className={cn(
                          "w-full text-left rounded-xl p-3 text-xs transition-all duration-150 border flex flex-col gap-1.5",
                          isActive
                            ? "bg-primary-transparent border-primary/30 text-white"
                            : "bg-white/2 border-zinc-900 text-zinc-400"
                        )}
                      >
                        <span className="font-bold tracking-tight">{ex.titulo}</span>
                        <span className="inline-block self-start text-[8px] px-1.5 py-0.5 rounded bg-zinc-900 text-zinc-500 font-bold border border-zinc-800">
                          {ex.categoria}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-border/40 pt-4 text-center">
                <span className="text-[10px] text-zinc-500">
                  Manual de Voz y Tono Claro
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 6. Mobile bottom tab indicators for quick previewing */}
      <div className="lg:hidden mt-6 flex flex-col gap-3">
        <div className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest text-center">
          Desliza para elegir un ejemplo rápido:
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1">
          {vozTonoEjemplosData.map((ex) => {
            const isActive = activeExample.id === ex.id;
            return (
              <button
                key={ex.id}
                onClick={() => setActiveExample(ex)}
                className={cn(
                  "flex-shrink-0 text-[10px] font-semibold px-4 py-2.5 rounded-full transition-all border",
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white"
                )}
              >
                {ex.titulo}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
