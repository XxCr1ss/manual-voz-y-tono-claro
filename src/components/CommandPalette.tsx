import { useState, useEffect, useRef } from 'react';
import { Search, Hash, FileText, Tag, ArrowRight } from 'lucide-react';
import { searchSections, type SearchResult } from '@/lib/content';

interface Props {
  open: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export function CommandPalette({ open, onClose, onNavigate }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery('');
      setResults([]);
      setHighlighted(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    setResults(searchSections(query));
    setHighlighted(0);
  }, [query]);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted(h => Math.min(h + 1, results.length - 1)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setHighlighted(h => Math.max(h - 1, 0)); }
      if (e.key === 'Enter' && results[highlighted]) {
        onNavigate(results[highlighted].sectionId);
        onClose();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, results, highlighted, onClose, onNavigate]);

  if (!open) return null;

  const typeIcon = (type: SearchResult['type']) => {
    if (type === 'title') return <FileText className="w-3.5 h-3.5 text-stone-400" />;
    if (type === 'tag') return <Tag className="w-3.5 h-3.5 text-stone-400" />;
    return <Hash className="w-3.5 h-3.5 text-stone-400" />;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-stone-100">
          <Search className="w-5 h-5 text-stone-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar en el manual... (ej: error, recarga, onboarding)"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 text-[14px] text-stone-800 placeholder-stone-400 outline-none bg-transparent"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-[10px] font-mono text-stone-400 bg-stone-100 border border-stone-200 rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="max-h-80 overflow-y-auto">
            {results.length === 0 ? (
              <div className="px-5 py-8 text-center text-[13px] text-stone-400">
                No se encontraron resultados para "{query}"
              </div>
            ) : (
              <ul className="py-2">
                {results.map((r, i) => (
                  <li key={i}>
                    <button
                      className={`w-full flex items-start gap-3 px-4 py-3 text-left transition-colors ${
                        i === highlighted ? 'bg-stone-50' : 'hover:bg-stone-50'
                      }`}
                      onMouseEnter={() => setHighlighted(i)}
                      onClick={() => { onNavigate(r.sectionId); onClose(); }}
                    >
                      <span className="mt-0.5 flex-shrink-0">{typeIcon(r.type)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold text-stone-500 truncate">{r.sectionTitle}</p>
                        <p className="text-[13px] text-stone-800 truncate">{r.match}</p>
                      </div>
                      {i === highlighted && <ArrowRight className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {!query.trim() && (
          <div className="px-5 py-5">
            <p className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider mb-3">Sugerencias rápidas</p>
            <div className="flex flex-wrap gap-2">
              {['error', 'recarga', 'onboarding', 'tono', 'claridad', 'empatía'].map(s => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1.5 text-[12px] text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors font-medium"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
