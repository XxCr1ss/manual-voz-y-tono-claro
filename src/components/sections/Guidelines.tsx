'use client';

import { motion } from 'framer-motion';

const guidelines = [
  "Mensajes de error",
  "Atención al cliente",
  "Redes sociales",
  "Lenguaje inclusivo",
  "Accesibilidad",
  "Buenas prácticas"
];

export function Guidelines() {
  return (
    <section id="directrices" className="py-24 relative scroll-m-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            Aplicación práctica
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Directrices Específicas</h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed">
            Explora las guías detalladas para diferentes escenarios de comunicación dentro y fuera de la aplicación.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {guidelines.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="glass-card p-5 group cursor-pointer hover:bg-white/5 transition-colors text-center"
              >
                <span className="font-medium text-white/80 group-hover:text-primary transition-colors">
                  {item}
                </span>
                <p className="text-xs text-white/40 mt-2 italic">Próximamente</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
