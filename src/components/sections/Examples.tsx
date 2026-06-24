'use client';

import { motion } from 'framer-motion';
import { ManualVozTonoExplorer } from '../ManualVozTonoExplorer';

export function Examples() {
  return (
    <section id="ejemplos" className="py-24 relative scroll-m-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div>
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
              Galería
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-white">
              Ejemplos Prácticos Interactivos
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl">
              Explora y experimenta con casos reales del manual para guiar tu redacción en notificaciones móviles, flujos transaccionales y banners publicitarios.
            </p>
          </div>

          <ManualVozTonoExplorer />
        </motion.div>
      </div>
    </section>
  );
}
