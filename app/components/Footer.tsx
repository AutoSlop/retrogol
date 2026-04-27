import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-extrabold">
              Retro<span className="text-gold">Gol</span>
            </Link>
            <p className="mt-3 text-sm text-white/50">
              Camisetas retro de fútbol para fans que no quieren complicarse. Preventa desde Colombia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold uppercase tracking-wider text-white/70 text-xs">
              Tienda
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#bestsellers" className="text-white/60 transition hover:text-gold">Bestsellers</a></li>
              <li><a href="#colecciones" className="text-white/60 transition hover:text-gold">Colecciones</a></li>
              <li><a href="#tallas" className="text-white/60 transition hover:text-gold">Guía de tallas</a></li>
              <li><a href="#como-funciona" className="text-white/60 transition hover:text-gold">Cómo funciona</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-white/70 text-xs">
              Ayuda
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#faq" className="text-white/60 transition hover:text-gold">Preguntas frecuentes</a></li>
              <li><a href="#como-funciona" className="text-white/60 transition hover:text-gold">Envíos y entregas</a></li>
              <li><a href="#faq" className="text-white/60 transition hover:text-gold">Cambios y devoluciones</a></li>
              <li><a href="#reservar" className="text-white/60 transition hover:text-gold">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider text-white/70 text-xs">
              Contacto
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>info@example.com</li>
              <li>+00 000 000 0000</li>
              <li>123 Main Street, City, Country</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} RetroGol. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white/60">Términos y condiciones</a>
            <a href="#" className="transition hover:text-white/60">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
