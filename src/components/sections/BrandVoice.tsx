'use client';

import { motion } from 'framer-motion';

export function BrandVoice() {
  return (
    <section id="voz" className="py-24 relative scroll-m-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6">
              Personalidad
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-white">La Voz de Mi Claro</h2>
            
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Nuestra voz es única, constante y humana. Sin importar la situación, siempre somos nosotros mismos. 
                Imagina a Mi Claro como un asesor experto que es amigable, directo y siempre está dispuesto a ayudarte a resolver tus necesidades de telecomunicaciones.
              </p>
              <p>
                Evitamos sonar como máquinas o corporaciones sin rostro. En su lugar, preferimos un estilo conversacional que invite a la confianza y demuestre que valoramos el tiempo de nuestros usuarios.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
