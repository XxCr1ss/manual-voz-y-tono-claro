export interface HotspotVozTono {
  id: string;
  x: number; // Porcentaje desde el borde izquierdo (left)
  y: number; // Porcentaje desde el borde superior (top)
  width: number; // Ancho interactivo en porcentaje
  height: number; // Alto interactivo en porcentaje
  titulo: string; // Título corto de la regla o hallazgo
  textoDestacado: string; // El fragmento de texto analizado en la imagen
  explicacion: string; // Explicación de lo que se hizo mal (problema encontrado)
  estado?: 'correcto' | 'incorrecto' | 'advertencia'; // Estado visual
  sugerencia?: string; // Propuesta de mejora y justificación del tono
}

export type CategoriaEjemplo = 'Notificaciones' | 'Transaccional' | 'Comercial';

export interface EjemploVozTono {
  id: string;
  titulo: string;
  categoria: CategoriaEjemplo;
  imagenUrl: string; // Ruta de la imagen real en public/interfaces/...
  explicacionGeneral: string; // Resumen del contexto de la pantalla y el problema
  hotspots: HotspotVozTono[];
}
