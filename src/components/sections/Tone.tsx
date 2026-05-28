'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info, MessagesSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const tones = [
  {
    context: 'Errores y Fallas',
    icon: AlertTriangle,
    color: 'text-red-500',
    bg: 'bg-red-500/10',
    description: 'Tranquilizador y resolutivo. Nunca culpamos al usuario. Asumimos la responsabilidad y ofrecemos alternativas inmediatas.',
  },
  {
    context: 'Éxito y Confirmación',
    icon: CheckCircle,
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    description: 'Celebratorio pero breve. Confirmamos la acción con entusiasmo moderado para transmitir seguridad y confianza.',
  },
  {
    context: 'Información y Novedades',
    icon: Info,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    description: 'Directo y transparente. Destacamos el beneficio para el usuario sin caer en lenguaje excesivamente comercial.',
  },
  {
    context: 'Soporte y Ayuda',
    icon: MessagesSquare,
    color: 'text-primary',
    bg: 'bg-primary-transparent',
    description: 'Paciente y guiado. Pasos claros, cortos y fáciles de seguir. Mostramos disposición absoluta para acompañar en el proceso.',
  }
];

export function Tone() {
  return (
    <section id="tono" className="py-24 relative scroll-m-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            Adaptabilidad
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Tono de Comunicación</h2>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Mientras que nuestra voz es siempre la misma, nuestro tono cambia según la situación y el estado emocional del usuario. No hablamos igual cuando celebramos una recarga exitosa que cuando informamos sobre una caída del servicio.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {tones.map((tone, index) => {
              const Icon = tone.icon;
              return (
                <motion.div
                  key={tone.context}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 flex flex-col gap-4 border-border/50 hover:border-border transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", tone.bg, tone.color)}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-white">{tone.context}</h3>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {tone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
