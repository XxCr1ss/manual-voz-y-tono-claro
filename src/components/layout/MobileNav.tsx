'use client';

import { useState } from 'react';
import { Menu, X, Smartphone } from 'lucide-react';
import { navigationLinks } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-transparent text-primary">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="font-bold text-lg tracking-tight">Voz y Tono</span>
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background/50 text-white/70 backdrop-blur-sm"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 border-b border-border bg-background/95 p-4 backdrop-blur-md lg:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-1">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center rounded-lg px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
