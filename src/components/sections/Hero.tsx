'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col items-center justify-center py-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6 max-w-4xl"
      >
        <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-8 backdrop-blur-sm">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Manual de Diseño
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Voz y Tono
          <br />
          <span className="text-primary">Mi Claro</span>
        </h1>
        
        <p className="mt-6 text-lg leading-8 text-white/70 max-w-2xl mx-auto">
          Guía oficial de comunicación para la aplicación móvil Mi Claro. Define la personalidad, el tono y las buenas prácticas para interactuar con nuestros usuarios de forma coherente y efectiva.
        </p>

        <div className="mt-12 flex items-center justify-center gap-x-6">
          <a
            href="#introduccion"
            className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 flex items-center gap-2 group"
          >
            Explorar manual
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
