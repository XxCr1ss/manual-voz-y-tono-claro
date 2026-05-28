export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-card/30">
      <div className="mx-auto max-w-5xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center md:order-2">
          <p className="text-center text-sm leading-5 text-white/50">
            &copy; {new Date().getFullYear()} Diseño de Interfaces. Todos los derechos reservados.
          </p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-white/50">
            Proyecto académico — Universidad del Valle
          </p>
        </div>
      </div>
    </footer>
  );
}
