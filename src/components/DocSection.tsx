import { Clock, Tag } from 'lucide-react';
import { Check, X } from 'lucide-react';
import {
  type DocSection as DocSectionType,
  type ContentBlock,
  type DoItem,
  type Pillar,
  type Tone,
  type Archetype,
  type IntensityArchetype,
} from '@/lib/content';

// ─── Block Renderers ──────────────────────────────────────────────────────────

function LeadBlock({ text }: { text: string }) {
  return <p className="text-[18px] leading-relaxed text-stone-700 font-medium">{text}</p>;
}

function ParagraphBlock({ text }: { text: string }) {
  return <p className="text-[15px] leading-relaxed text-stone-600">{text}</p>;
}

function QuoteBlock({ text }: { text: string }) {
  return (
    <blockquote className="relative pl-6 py-1 border-l-4 border-slate-700">
      <p className="text-[15px] italic text-stone-700 leading-relaxed">"{text}"</p>
    </blockquote>
  );
}

function ListBlock({ title, items }: { title?: string; items: string[] }) {
  return (
    <div className="bg-stone-50 rounded-2xl border border-stone-200 p-6">
      {title && <p className="text-[13px] font-bold text-stone-500 uppercase tracking-wider mb-4">{title}</p>}
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[14px] text-stone-700">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-700 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DontRow({ item }: { item: DoItem }) {
  return (
    <div className="rounded-xl overflow-hidden border border-stone-200 shadow-sm">
      <div className="bg-stone-50 px-5 py-3 border-b border-stone-200">
        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-widest">{item.topic}</span>
      </div>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-200">
        {/* DO */}
        <div className="p-5 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3 text-emerald-600" strokeWidth={3} />
            </span>
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Sí hacer</span>
          </div>
          <p className="text-[13px] text-stone-600 mb-3 leading-relaxed">{item.do}</p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3">
            <p className="text-[13px] text-stone-700 italic leading-relaxed">"{item.doExample}"</p>
          </div>
        </div>
        {/* DON'T */}
        <div className="p-5 bg-white">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <X className="w-3 h-3 text-red-600" strokeWidth={3} />
            </span>
            <span className="text-[11px] font-bold text-red-700 uppercase tracking-wider">No hacer</span>
          </div>
          <p className="text-[13px] text-stone-600 mb-3 leading-relaxed">{item.dont}</p>
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
            <p className="text-[13px] text-stone-600 italic   decoration-2 leading-relaxed">
              "{item.dontExample}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DoDontBlock({ items }: { items: DoItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => <DontRow key={i} item={item} />)}
    </div>
  );
}

function PillarCards({ items }: { items: Pillar[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((p, i) => {
        const Icon = p.icon;
        return (
          <div key={i} className={`${p.bg} rounded-2xl p-6 border border-stone-100`}>
            <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4`}>
              <Icon className={`w-5 h-5 ${p.color}`} />
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest ${p.color}`}>{p.keyword}</span>
            <h3 className="text-[15px] font-bold text-stone-900 mt-1 mb-2">{p.title}</h3>
            <p className="text-[13px] text-stone-600 leading-relaxed">{p.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function ToneCards({ items }: { items: Tone[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((t, i) => {
        const Icon = t.icon;
        return (
          <div key={i} className={`${t.bg} rounded-2xl p-5 border border-stone-100`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                <Icon className={`w-4.5 h-4.5 ${t.color}`} />
              </div>
              <span className={`text-[13px] font-bold ${t.color}`}>{t.label}</span>
            </div>
            <p className="text-[13px] text-stone-600 leading-relaxed mb-4">{t.desc}</p>
            <div className="bg-white rounded-xl border border-white/80 shadow-sm px-4 py-3">
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-1">Ejemplo</p>
              <p className="text-[13px] text-stone-700 italic">"{t.example}"</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AudienceGrid({ items }: { items: Array<{ icon: React.ElementType; title: string; desc: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="bg-white rounded-2xl border border-stone-200 p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-stone-500" />
            </div>
            <h3 className="text-[14px] font-bold text-stone-900 mb-1.5">{item.title}</h3>
            <p className="text-[13px] text-stone-500 leading-relaxed">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

function InfoGrid({ items }: { items: Array<{ icon: React.ElementType; label: string; value: string }> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="bg-stone-50 rounded-2xl border border-stone-200 p-5 flex items-start gap-4">
            <div className="w-9 h-9 rounded-xl bg-white border border-stone-200 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Icon className="w-4 h-4 text-stone-500" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-0.5">{item.label}</p>
              {item.value.split('\n').map((line, j) => (
                <p key={j} className="text-[14px] text-stone-800 font-medium">{line}</p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ArchetypeCards({ items }: { items: Archetype[] }) {
  return (
    <div className="grid md:grid-cols-2 mt-4 shadow-sm rounded-2xl overflow-hidden border border-stone-200">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className={`flex flex-col h-full ${item.bgCard} ${i === 1 ? 'md:border-l border-t md:border-t-0 border-stone-200' : ''}`}>
            {/* Top illustrative area */}
            <div className="pt-10 pb-6 px-8 flex flex-col items-center justify-center">
              <Icon className={`w-16 h-16 ${item.color} mb-6`} strokeWidth={1.5} />
              <h3 className={`text-[28px] w-full text-left font-black ${item.color}`}>{item.name}</h3>
            </div>
            {/* Details area */}
            <div className="px-8 pb-10 flex-1">
              <ul className="space-y-4">
                <li className="text-[13px] leading-relaxed">
                  <span className="font-extrabold text-stone-900">• Actitud:</span>{' '}
                  <span className="text-stone-700">{item.traits.actitud}</span>
                </li>
                <li className="text-[13px] leading-relaxed">
                  <span className="font-extrabold text-stone-900">• Objetivo:</span>{' '}
                  <span className="text-stone-700">{item.traits.objetivo}</span>
                </li>
                <li className="text-[13px] leading-relaxed">
                  <span className="font-extrabold text-stone-900">• Mensaje:</span>{' '}
                  <span className="text-stone-700 italic">{item.traits.mensaje}</span>
                </li>
                <li className="text-[13px] leading-relaxed">
                  <span className="font-extrabold text-stone-900">• Descripción:</span>{' '}
                  <span className="text-stone-700">{item.traits.descripcion}</span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function VerbalUniverseCards({ says, doesNotSay, tip }: { says: string[], doesNotSay: string[], tip: string }) {
  return (
    <div className="flex flex-col items-center w-full my-12">
      <div className="relative flex flex-col md:flex-row items-center justify-center w-full">
        
        {/* DICE */}
        <div className="z-10 w-full max-w-[340px] aspect-square flex flex-col items-center justify-center bg-red-400 rounded-full p-8 shadow-lg text-center md:-mr-8 mb-4 md:mb-0">
          <h4 className="text-lg font-black text-stone-900 mb-4 tracking-wide uppercase">Mi Claro Dice</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] font-bold text-stone-900 text-left w-full max-w-[240px]">
            {says.map((word, i) => (
              <li key={i} className="flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900 flex-shrink-0" />
                <span className="truncate">{word}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NO DICE */}
        <div className="z-0 w-full max-w-[340px] aspect-square flex flex-col items-center justify-center bg-stone-200 rounded-full p-8 shadow-lg text-center md:-ml-8">
          <h4 className="text-lg font-black text-black mb-4 tracking-wide uppercase md:pl-8">Mi Claro <span className="text-red-700">No</span> Dice</h4>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] font-bold text-stone-900 text-left w-full max-w-[240px] md:pl-8">
            {doesNotSay.map((word, i) => (
              <li key={i} className="flex items-center gap-1.5 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-700 flex-shrink-0" />
                <span className="truncate">{word}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Tip box */}
      <div className="mt-12 bg-white border-2 border-red-500 rounded-xl p-5 max-w-xl text-center shadow-sm">
        <p className="text-[13.5px] text-stone-700 font-medium leading-relaxed">
          {tip}
        </p>
      </div>
    </div>
  );
}

function IntensityMeter({ archetypes }: { archetypes: IntensityArchetype[] }) {
  const levelColors = ['#16a34a', '#65a30d', '#d97706', '#ea580c', '#dc2626'];

  return (
    <div className="space-y-10">
      {/* Intensity legend bar */}
      <div className="flex items-center gap-4">
        <span className="text-[13px] font-bold text-stone-500 uppercase tracking-wider whitespace-nowrap">Nivel de intensidad</span>
        <div className="flex-1 h-5 rounded-full overflow-hidden flex shadow-inner">
          <div className="flex-1" style={{ background: '#16a34a' }} />
          <div className="flex-1" style={{ background: '#65a30d' }} />
          <div className="flex-1" style={{ background: '#d97706' }} />
          <div className="flex-1" style={{ background: '#ea580c' }} />
          <div className="flex-1" style={{ background: '#dc2626' }} />
        </div>
      </div>

      {/* Two-column layout: Cuidador | Body Meter | Sabio */}
      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch">
        {/* Left archetype */}
        {archetypes[0] && (
          <div className="flex flex-col pr-4">
            <h3 className="text-center text-[24px] font-black text-stone-800 mb-6 uppercase tracking-wide">{archetypes[0].name}</h3>
            <div className="flex-1 flex flex-col justify-between gap-3">
              {archetypes[0].levels.map((lvl, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 border border-stone-100 shadow-sm"
                  style={{ backgroundColor: `${levelColors[i]}12` }}
                >
                  <div className="flex items-center gap-2.5 mb-2 justify-end">
                    <span className="text-[14px] font-bold" style={{ color: levelColors[i] }}>
                      {lvl.level >= 3 ? '✓ USEMOS' : '✗ NO USEMOS'}
                    </span>
                    <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <span className="w-3.5 h-3.5 rounded-full" style={{ background: levelColors[i] }} />
                    </div>
                  </div>
                  <p className="text-[14px] text-stone-700 leading-relaxed text-right mb-2">{lvl.desc}</p>
                  <div className="bg-white rounded-xl border border-stone-100 shadow-sm px-3 py-2">
                    <p className="text-[13px] font-bold text-stone-800 text-right">{lvl.keywords.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Central body meter */}
        <div className="hidden md:flex flex-col items-center mx-6 justify-center">
          <div className="w-24 flex flex-col items-center">
            {/* Head */}
            <div className="w-14 h-14 rounded-full mb-1" style={{ background: '#16a34a' }} />
            {/* Neck */}
            <div className="w-7 h-3" style={{ background: '#16a34a' }} />
            {/* Shoulders + upper body */}
            <div className="w-24 h-16 rounded-t-2xl" style={{ background: 'linear-gradient(to bottom, #16a34a, #65a30d)' }} />
            {/* Mid body */}
            <div className="w-20 h-16" style={{ background: 'linear-gradient(to bottom, #65a30d, #d97706)' }} />
            {/* Lower body */}
            <div className="w-16 h-12 rounded-b-lg" style={{ background: '#d97706' }} />
            {/* Legs */}
            <div className="flex gap-3 mt-0.5">
              <div className="w-6 h-20 rounded-b-lg" style={{ background: 'linear-gradient(to bottom, #ea580c, #dc2626)' }} />
              <div className="w-6 h-20 rounded-b-lg" style={{ background: 'linear-gradient(to bottom, #ea580c, #dc2626)' }} />
            </div>
          </div>
        </div>

        {/* Right archetype */}
        {archetypes[1] && (
          <div className="flex flex-col pl-4 mt-6 md:mt-0">
            <h3 className="text-center text-[24px] font-black text-stone-800 mb-6 uppercase tracking-wide">{archetypes[1].name}</h3>
            <div className="flex-1 flex flex-col justify-between gap-3">
              {archetypes[1].levels.map((lvl, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 border border-stone-100 shadow-sm"
                  style={{ backgroundColor: `${levelColors[i]}12` }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <span className="w-3.5 h-3.5 rounded-full" style={{ background: levelColors[i] }} />
                    </div>
                    <span className="text-[14px] font-bold" style={{ color: levelColors[i] }}>
                      {lvl.level >= 3 ? '✓ USEMOS' : '✗ NO USEMOS'}
                    </span>
                  </div>
                  <p className="text-[14px] text-stone-700 leading-relaxed mb-2">{lvl.desc}</p>
                  <div className="bg-white rounded-xl border border-stone-100 shadow-sm px-3 py-2">
                    <p className="text-[13px] font-bold text-stone-800">{lvl.keywords.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case 'lead':      return <LeadBlock key={index} text={block.text} />;
    case 'paragraph': return <ParagraphBlock key={index} text={block.text} />;
    case 'quote':     return <QuoteBlock key={index} text={block.text} />;
    case 'list':      return <ListBlock key={index} title={block.title} items={block.items} />;
    case 'donts':     return <DoDontBlock key={index} items={block.items} />;
    case 'pillars':   return <PillarCards key={index} items={block.items} />;
    case 'tones':     return <ToneCards key={index} items={block.items} />;
    case 'audience':  return <AudienceGrid key={index} items={block.items} />;
    case 'info-grid': return <InfoGrid key={index} items={block.items} />;
    case 'archetypes': return <ArchetypeCards key={index} items={block.items} />;
    case 'verbal-universe': return <VerbalUniverseCards key={index} says={block.says} doesNotSay={block.doesNotSay} tip={block.tip} />;
    case 'intensity-meter': return <IntensityMeter key={index} archetypes={block.archetypes} />;
    default:          return null;
  }
}

// ─── Section View ─────────────────────────────────────────────────────────────

export function DocSection({ section }: { section: DocSectionType }) {
  return (
    <article className="max-w-7xl mx-auto py-10 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {section.tags.map(tag => (
            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-stone-600 bg-stone-100 border border-stone-200 rounded-full">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] text-stone-400 bg-stone-50 border border-stone-200 rounded-full ml-auto">
            <Clock className="w-3 h-3" />
            {section.readTime} min de lectura
          </span>
        </div>
        <h1 className="text-[28px] sm:text-[32px] font-extrabold text-stone-900 leading-tight mb-3">{section.title}</h1>
        <p className="text-[16px] text-stone-500 leading-relaxed">{section.subtitle}</p>
        <div className="mt-6 h-px bg-gradient-to-r from-stone-200 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        {section.content.map((block, i) => renderBlock(block, i))}
      </div>
    </article>
  );
}
