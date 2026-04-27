export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-burgundy text-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)",
      }} />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-semibold text-gold">
            Preventa abierta — Envío a toda Colombia
          </span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Camisetas retro de fútbol para fans que no quieren complicarse
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">
            Descubre bestsellers icónicos, elige tu talla sin enredos y reserva en preventa desde Colombia con una experiencia simple y confiable.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#bestsellers"
              className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-base font-bold text-dark transition hover:bg-gold-light hover:shadow-lg"
            >
              Reservar mi camiseta
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              ¿Cómo funciona?
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">
            Desde $149.000 COP · Envíos a toda Colombia · Cambios sin costo
          </p>
        </div>
      </div>
    </section>
  );
}
