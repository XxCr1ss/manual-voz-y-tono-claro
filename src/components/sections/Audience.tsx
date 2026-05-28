'use client';

import { motion } from 'framer-motion';
import { Users2, Smartphone, Monitor } from 'lucide-react';

export function Audience() {
  return (
    <section id="audiencia" className="py-24 relative scroll-m-20 bg-card/30 border-y border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            ¿A quién le hablamos?
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Nuestra Audiencia</h2>
          <p className="text-lg text-white/70 mb-12 leading-relaxed">
            Nuestros usuarios son tan diversos como los servicios que ofrecemos. Sin embargo, en el entorno digital de la aplicación móvil, nos dirigimos principalmente a personas que buscan autogestión, rapidez y claridad.
          </p>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="glass-card p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Users2 className="w-7 h-7" />
              </div>
              <h3 className="text-white font-semibold mb-2">Diversidad</h3>
              <p className="text-sm text-white/60">Desde jóvenes expertos en tecnología hasta adultos mayores que necesitan interfaces amigables y directas.</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-white font-semibold mb-2">Autogestión</h3>
              <p className="text-sm text-white/60">Usuarios que prefieren resolver sus dudas y transacciones sin tener que llamar a un asesor telefónico.</p>
            </div>
            
            <div className="glass-card p-6 flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7" />
              </div>
              <h3 className="text-white font-semibold mb-2">En Movimiento</h3>
              <p className="text-sm text-white/60">Personas que usan la app en momentos breves, buscando resultados inmediatos sin distracciones.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
