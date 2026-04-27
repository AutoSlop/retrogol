import { collections } from "../data/products";

export default function Collections() {
  return (
    <section id="colecciones" className="bg-burgundy py-16 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Explora nuestras colecciones
          </h2>
          <p className="mt-3 text-lg text-white/70">
            Por club, selección o década. Encuentra tu camiseta ideal.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection) => (
            <a
              key={collection.slug}
              href="#bestsellers"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-gold/30 hover:bg-white/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-2xl">
                {collection.icon}
              </span>
              <div>
                <h3 className="text-lg font-bold">{collection.name}</h3>
                <p className="text-sm text-white/60">
                  {collection.count} camisetas disponibles
                </p>
              </div>
              <svg
                className="ml-auto h-5 w-5 text-white/40 transition group-hover:text-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
