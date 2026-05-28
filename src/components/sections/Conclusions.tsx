'use client';

import { motion } from 'framer-motion';

export function Conclusions() {
  return (
    <section id="conclusiones" className="py-24 relative scroll-m-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/5" />
          <h2 className="text-3xl font-bold tracking-tight text-white mb-6 relative z-10">Conclusiones</h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Mantener una voz y un tono consistentes no se trata solo de escribir bonito. Se trata de construir confianza, 
            reducir la fricción cognitiva y hacer que nuestros usuarios sientan que hay humanos reales y empáticos 
            detrás de la pantalla.
          </p>
          <p className="text-sm text-white/50 relative z-10 italic">
            "La forma en que hablamos es tan importante como lo que ofrecemos."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
