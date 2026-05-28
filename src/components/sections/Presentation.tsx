'use client';

import { motion } from 'framer-motion';
import { Users, BookOpen, Calendar } from 'lucide-react';

export function Presentation() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="presentacion" className="py-24 relative">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150" />
          
          <h2 className="text-3xl font-bold tracking-tight text-white mb-8">Información del Proyecto</h2>
          
          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Users className="w-5 h-5" />
                <span>Autores</span>
              </div>
              <ul className="text-white/70 space-y-1">
                <li>Cristian David Cabrera Pantoja</li>
                <li>Brayan Steven Narvaez Valdez</li>
              </ul>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <BookOpen className="w-5 h-5" />
                <span>Asignatura</span>
              </div>
              <p className="text-white/70">
                Diseño de Interfaces<br />
                Universidad del Valle
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Calendar className="w-5 h-5" />
                <span>Periodo</span>
              </div>
              <p className="text-white/70">Año {currentYear}</p>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-border/50 text-white/60 text-sm leading-relaxed relative z-10">
            <p>
              Este proyecto académico tiene como objetivo definir y estructurar la personalidad de la comunicación
              para la aplicación móvil Mi Claro, asegurando que cada interacción con el usuario sea clara, empática
              y represente fielmente los valores de la marca.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
