'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    topic: "Claridad",
    do: "Usa lenguaje cotidiano y directo.",
    doExample: "Tu pago se procesó correctamente.",
    dont: "Usar tecnicismos o lenguaje robótico.",
    dontExample: "Transacción 4002 OK. Base de datos actualizada."
  },
  {
    topic: "Empatía en Errores",
    do: "Ofrece soluciones y evita culpar al usuario.",
    doExample: "Parece que hubo un problema de conexión. Intenta recargar la página.",
    dont: "Hacer sentir al usuario que se equivocó.",
    dontExample: "Error de usuario. Conexión no válida."
  },
  {
    topic: "Cercanía",
    do: "Usa un trato respetuoso pero amigable (Tuteo profesional).",
    doExample: "¡Hola! ¿En qué te podemos ayudar hoy?",
    dont: "Ser excesivamente formal o demasiado coloquial.",
    dontExample: "Estimado señor, proceda a indicar su requerimiento."
  }
];

export function DosAndDonts() {
  return (
    <section id="dos-and-donts" className="py-24 relative scroll-m-20 bg-card/30 border-y border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            Reglas de Oro
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Sí hacer y No hacer</h2>
          
          <div className="space-y-8">
            {comparisons.map((item, index) => (
              <motion.div 
                key={item.topic}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-4"
              >
                {/* DO */}
                <div className="glass-card p-6 border-l-4 border-l-green-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Check className="w-24 h-24 text-green-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-green-500 font-semibold mb-3">
                      <Check className="w-5 h-5" />
                      <span>Sí ({item.topic})</span>
                    </div>
                    <p className="text-white/80 text-sm mb-4">{item.do}</p>
                    <div className="bg-white/5 rounded p-3 text-sm border border-white/10 italic text-white/60">
                      "{item.doExample}"
                    </div>
                  </div>
                </div>

                {/* DONT */}
                <div className="glass-card p-6 border-l-4 border-l-red-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <X className="w-24 h-24 text-red-500" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-red-500 font-semibold mb-3">
                      <X className="w-5 h-5" />
                      <span>No</span>
                    </div>
                    <p className="text-white/80 text-sm mb-4">{item.dont}</p>
                    <div className="bg-red-500/5 rounded p-3 text-sm border border-red-500/20 italic text-white/60 line-through decoration-red-500/50">
                      "{item.dontExample}"
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
