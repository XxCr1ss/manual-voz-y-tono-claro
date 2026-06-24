# Tareas: Manual de Voz y Tono de Claro

Organización del trabajo de desarrollo para la implementación del layout interactivo:

- `[x]` **Paso 1: Definición de Tipos**
  - `[x]` Crear archivo `src/types/vozTono.types.ts`
  - `[x]` Definir interfaces `HotspotVozTono` y `EjemploVozTono`
- `[x]` **Paso 2: Datos de Prueba**
  - `[x]` Crear archivo `src/data/vozTonoData.ts`
  - `[x]` Implementar datos para Notificación SMS de Pago, Error en App Móvil y Banner Comercial
- `[x]` **Paso 3: Subcomponentes de Mockup (Simulador Central)**
  - `[x]` Crear directorio `src/components/mockups`
  - `[x]` Crear `SmsMockup.tsx` (Burbuja de mensajería SMS interactiva)
  - `[x]` Crear `MobileAppMockup.tsx` (Pantalla de app móvil con consumo y error)
  - `[x]` Crear `WebBannerMockup.tsx` (Banner comercial y modal emergente)
- `[x]` **Paso 4: Componente Hotspot Interactivo**
  - `[x]` Crear `src/components/HotspotVozTono.tsx`
  - `[x]` Añadir estilos de pulsación (ping), colores condicionales y tooltips
- `[x]` **Paso 5: Contenedor Principal (Layout y Drawer)**
  - `[x]` Crear `src/components/ManualVozTonoExplorer.tsx`
  - `[x]` Diseñar grid responsivo (3 cols para simulador + 1 col para índice)
  - `[x]` Implementar tarjeta explicativa flotante y Drawer de móvil (Framer Motion)
  - `[x]` Implementar navegación responsiva de ejemplos
- `[x]` **Paso 6: Integración y Verificación**
  - `[x]` Integrar el componente `ManualVozTonoExplorer` en `src/components/sections/Examples.tsx`
  - `[x]` Ejecutar el build de producción para validar Typescript y Next.js (`npm run build`)
