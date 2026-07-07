'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Search, Menu, X, Smartphone, Target, Heart, Zap,
  ArrowRight, ChevronRight,
} from 'lucide-react';
import { navItems, sections } from '@/lib/content';
import { CommandPalette } from '@/components/CommandPalette';
import { DocSection } from '@/components/DocSection';
import { ExamplesSection } from '@/components/ExamplesSection';

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({
  active,
  setActive,
  onClose,
  onOpenSearch,
}: {
  active: string;
  setActive: (id: string) => void;
  onClose?: () => void;
  onOpenSearch: () => void;
}) {
  const groups = Array.from(new Set(navItems.map(n => n.group)));

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-stone-100">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
          <img src="logo_claro_circle.png" alt="Logo Claro" />
        </div>
        <div>
          <p className="text-xl font-bold text-stone-900 leading-none">Mi Claro</p>
          <p className="text-sm text-stone-400 leading-none mt-0.5">Manual de Voz y Tono</p>
        </div>
      </div>

      {/* Search trigger */}
      <div className="px-4 pt-4 pb-1">
        <button
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between gap-2 px-3 py-2 bg-stone-100 hover:bg-stone-200 rounded-xl text-[13px] text-stone-500 transition-colors group"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            <span>Buscar...</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-0.5 px-1 py-0.5 bg-stone-200 group-hover:bg-stone-300 rounded text-[10px] font-mono text-stone-500 transition-colors">
            <span>⌘</span><span>K</span>
          </span>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
        {/* Inicio */}
        <div>
          <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">Principal</p>
          <button
            onClick={() => { setActive('inicio'); onClose?.(); }}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-colors ${
              active === 'inicio' ? 'bg-stone-100 text-stone-900' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
            }`}
          >
            <Smartphone className={`w-4 h-4 flex-shrink-0 ${active === 'inicio' ? 'text-red-600' : 'text-stone-400'}`} />
            Inicio
          </button>
        </div>

        {groups.map(group => {
          const items = navItems.filter(n => n.group === group);
          return (
            <div key={group}>
              <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">{group}</p>
              <div className="space-y-0.5">
                {items.map(item => {
                  const Icon = item.icon;
                  const isActive = active === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActive(item.id); onClose?.(); }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-colors ${
                        isActive ? 'bg-stone-100 text-stone-900 font-semibold' : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-red-600' : 'text-stone-400'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </nav>

      {/* User profile */}
      <div className="px-4 py-4 border-t border-stone-100">
        <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-stone-50 transition-colors cursor-default">
          <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
            <span className="text-[11px] font-bold text-stone-600">U</span>
          </div>
          <div className="min-w-0">
            <p className="text-[12px] font-semibold text-stone-800 leading-none truncate">Proyecto Académico</p>
            <p className="text-[11px] text-stone-400 leading-none mt-0.5 truncate">Universidad del Valle</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function HeroSection({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="w-full mx-auto py-8 px-4 sm:px-6">
      {/* Hero card */}
      <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-pink-200 via-pink-100 to-pink-200 border border-stone-200 shadow-sm mb-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,76,36,0.4),transparent_60%)]" />
        <div className="relative px-8 sm:px-12 py-12 sm:py-16">
          <h1 className="text-[40px] sm:text-[56px] font-black text-stone-900 leading-[1.05] tracking-tight max-w-lg">
            Manual de Comunicación <br />
            <span className="italic font-black text-red-600">Mi Claro App</span>
          </h1>
          <p className="mt-5 text-[16px] text-stone-600 max-w-md leading-relaxed">
            Guía oficial de voz y tono para la app Mi Claro. Define cómo hablamos con nuestros usuarios en cada momento, emoción y contexto.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => onNavigate('voz')}
              className="flex items-center gap-2 px-5 py-3 bg-stone-900 text-white text-[13px] font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-sm group"
            >
              Explorar manual
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('dos-donts')}
              className="flex items-center gap-2 px-5 py-3 bg-white text-stone-700 text-[13px] font-bold rounded-xl hover:bg-stone-50 transition-colors border border-stone-200 shadow-sm"
            >
              Ver Sí / No hacer
            </button>
          </div>
        </div>

        {/* Abstract decorative shapes */}
        <div className="absolute right-0 top-0 w-80 h-80 opacity-20 pointer-events-none">
          <div className="absolute top-4 right-4 w-40 h-40 rounded-full bg-amber-400 blur-2xl" />
          <div className="absolute top-20 right-20 w-28 h-28 rounded-full bg-orange-300 blur-xl" />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { value: '3', label: 'Pilares de marca' },
          { value: '4', label: 'Tonos de contexto' },
          { value: '6+', label: 'Secciones do/don\'t' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-stone-200 p-4 text-center shadow-sm">
            <p className="text-[28px] font-black text-stone-900 leading-none">{stat.value}</p>
            <p className="text-[11px] text-stone-500 mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick access grid */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[15px] font-bold text-stone-800">Acceso rápido</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {navItems.slice(0, 6).map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group flex items-center gap-4 bg-white rounded-2xl border border-stone-200 p-4 text-left hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-200 transition-colors">
                <Icon className="w-4.5 h-4.5 text-stone-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-stone-800 truncate">{item.label}</p>
                <p className="text-[11px] text-stone-400">{item.group}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-stone-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
            </button>
          );
        })}
      </div>

      {/* Pillars preview */}
      <div className="mt-8">
        <h2 className="text-[15px] font-bold text-stone-800 mb-4">Los 3 pilares de Mi Claro</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: Target, color: 'text-rose-600', bg: 'bg-rose-50', keyword: 'Claridad', desc: 'Sin rodeos, sin tecnicismos.' },
            { icon: Heart, color: 'text-sky-600', bg: 'bg-sky-50', keyword: 'Empatía', desc: 'Persona a persona, siempre.' },
            { icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50', keyword: 'Dinamismo', desc: 'Ágil, directo, accionable.' },
          ].map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className={`${p.bg} rounded-2xl p-5 border border-stone-100`}>
                <Icon className={`w-5 h-5 ${p.color} mb-3`} />
                <p className={`text-[14px] font-extrabold ${p.color}`}>{p.keyword}</p>
                <p className="text-[12px] text-stone-600 mt-1">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}



// ─── Home ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive] = useState('inicio');
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Cmd+K / Ctrl+K
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(p => !p);
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const navigate = useCallback((id: string) => {
    setActive(id);
    setMobileNavOpen(false);
  }, []);

  const currentSection = sections.find(s => s.id === active);

  return (
    <div className="flex h-screen bg-stone-100 overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col w-64 xl:w-72 flex-shrink-0 border-r border-stone-200 h-full">
        <Sidebar active={active} setActive={navigate} onOpenSearch={() => setPaletteOpen(true)} />
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" onClick={() => setMobileNavOpen(false)}>
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
          <aside className="absolute inset-y-0 left-0 w-72 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="h-full relative">
              <Sidebar active={active} setActive={navigate} onClose={() => setMobileNavOpen(false)} onOpenSearch={() => setPaletteOpen(true)} />
              <button
                onClick={() => setMobileNavOpen(false)}
                className="absolute top-4 right-4 w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Floating Mobile Nav Trigger */}
      {!mobileNavOpen && (
        <button
          onClick={() => setMobileNavOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 z-40 p-4 bg-stone-900 text-white rounded-full shadow-2xl hover:bg-stone-800 hover:scale-105 active:scale-95 transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
      )}

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0 h-full">
        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-stone-50">
          {active === 'inicio' && <HeroSection onNavigate={navigate} />}
          {active === 'ejemplos' && <ExamplesSection />}
          {active !== 'inicio' && active !== 'ejemplos' && currentSection && (
            <DocSection section={currentSection} />
          )}
        </main>
      </div>

      {/* Command palette */}
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={id => { navigate(id); setPaletteOpen(false); }}
      />
    </div>
  );
}
