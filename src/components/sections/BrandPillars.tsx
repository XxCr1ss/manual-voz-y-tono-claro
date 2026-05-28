'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Zap } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Claridad ante todo',
    description: 'Nuestra comunicación no tiene rodeos. Explicamos las cosas de manera sencilla, sin tecnicismos innecesarios, para que cualquier persona nos entienda a la primera.'
  },
  {
    icon: Heart,
    title: 'Empatía constante',
    description: 'Nos ponemos en los zapatos de nuestros usuarios. Entendemos sus frustraciones y celebramos sus logros. Hablamos de persona a persona.'
  },
  {
    icon: Zap,
    title: 'Dinamismo',
    description: 'Somos ágiles y proactivos. Nuestra voz refleja energía y disposición para ayudar rápidamente y sin complicaciones.'
  }
];

export function BrandPillars() {
  return (
    <section id="pilares" className="py-24 relative scroll-m-20 bg-card/30 border-y border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            Fundamentos
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">Pilares de Marca</h2>

          <div className="grid gap-6 sm:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary-transparent text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {pillar.description}
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
