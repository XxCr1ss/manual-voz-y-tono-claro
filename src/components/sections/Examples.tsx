'use client';

import { motion } from 'framer-motion';

const examples = [
  {
    type: "Mensaje de Bienvenida",
    title: "Inicio de sesión exitoso",
    text: "¡Hola! Qué bueno verte de nuevo por aquí. ¿Qué te gustaría hacer hoy?"
  },
  {
    type: "Notificación",
    title: "Recordatorio de pago",
    text: "Tu factura vence en 3 días. Recuerda que puedes pagarla de forma segura desde aquí sin gastar tus datos."
  },
  {
    type: "Mensaje de Error",
    title: "Fallo de conexión",
    text: "Uy, parece que no tienes conexión a internet en este momento. Revisa tu señal e intenta de nuevo."
  },
  {
    type: "Confirmación",
    title: "Recarga exitosa",
    text: "¡Listo! Tu recarga ha sido aplicada. Ya puedes disfrutar de tus beneficios."
  }
];

export function Examples() {
  return (
    <section id="ejemplos" className="py-24 relative scroll-m-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4">
            Galería
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-10">Ejemplos Prácticos</h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {examples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card flex flex-col h-full"
              >
                <div className="p-4 border-b border-border/50 bg-white/5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {item.type}
                  </span>
                  <h4 className="text-white font-medium mt-1">{item.title}</h4>
                </div>
                <div className="p-6 flex-1 flex items-center">
                  <p className="text-white/80 text-lg leading-relaxed font-medium">
                    "{item.text}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
