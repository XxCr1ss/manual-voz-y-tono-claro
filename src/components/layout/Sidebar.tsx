'use client';

import { useEffect, useState } from 'react';
import { navigationLinks } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { Smartphone } from 'lucide-react';

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    navigationLinks.forEach(({ href }) => {
      const element = document.querySelector(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 flex-col border-r border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:flex">
      <div className="flex h-20 items-center gap-3 px-8 border-b border-border">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-transparent text-primary">
          <Smartphone className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-lg font-bold tracking-tight text-foreground">Mi Claro</h2>
          <p className="text-xs text-muted-foreground font-medium text-white/50">Voz y Tono</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-8">
        <nav className="flex flex-col gap-1 px-4">
          <p className="px-4 text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
            Contenido
          </p>
          {navigationLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary-transparent text-primary"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>
      
      <div className="p-6 border-t border-border">
        <p className="text-xs text-white/40 text-center">
          Proyecto Académico
          <br />
          Universidad del Valle
        </p>
      </div>
    </aside>
  );
}
