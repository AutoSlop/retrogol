const sizes = [
  { label: "S", chest: "88–92", length: "68", equivalent: "Talla 36–38" },
  { label: "M", chest: "96–100", length: "71", equivalent: "Talla 38–40" },
  { label: "L", chest: "104–108", length: "74", equivalent: "Talla 40–42" },
  { label: "XL", chest: "112–116", length: "77", equivalent: "Talla 42–44" },
];

export default function SizeGuide() {
  return (
    <section id="tallas" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Guía de tallas simplificada
          </h2>
          <p className="mt-3 text-lg text-dark/60">
            Sin enredos. Elige tu talla con confianza.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          {/* Size cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {sizes.map((size) => (
              <div
                key={size.label}
                className="rounded-2xl bg-white p-5 text-center shadow-sm transition hover:shadow-md"
              >
                <span className="text-3xl font-extrabold text-burgundy">
                  {size.label}
                </span>
                <div className="mt-3 space-y-1 text-sm text-dark/70">
                  <p>
                    <span className="font-semibold text-dark">Pecho:</span>{" "}
                    {size.chest} cm
                  </p>
                  <p>
                    <span className="font-semibold text-dark">Largo:</span>{" "}
                    {size.length} cm
                  </p>
                </div>
                <p className="mt-3 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-dark/60">
                  {size.equivalent}
                </p>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-bold text-dark">
              ¿No estás seguro de tu talla?
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-dark/70">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>El corte retro es ligeramente más amplio que las camisetas modernas.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Si estás entre dos tallas, elige la menor para un ajuste más ceñido o la mayor para un look relajado.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>¿Cambios? Sin problema. Te cambiamos la talla sin costo adicional.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
