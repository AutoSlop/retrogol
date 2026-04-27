const steps = [
  {
    number: "01",
    title: "Elige tu camiseta",
    description:
      "Explora nuestro catálogo de camisetas retro icónicas. Filtra por club, selección o década y encuentra la tuya.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Reserva en preventa",
    description:
      "Selecciona tu talla con nuestra guía simplificada y reserva con pago seguro. Recibirás confirmación inmediata por email.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Recibe en tu puerta",
    description:
      "Te avisamos cuando tu camiseta esté lista y la enviamos a cualquier ciudad de Colombia. Seguimiento incluido.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            ¿Cómo funciona la preventa?
          </h2>
          <p className="mt-3 text-lg text-dark/60">
            Tres pasos simples para tener tu camiseta retro favorita.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-burgundy text-white">
                {step.icon}
              </div>
              <span className="mt-4 block text-sm font-bold text-gold">
                Paso {step.number}
              </span>
              <h3 className="mt-2 text-xl font-bold text-dark">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-dark/60">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
