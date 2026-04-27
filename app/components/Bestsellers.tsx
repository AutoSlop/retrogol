import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../data/products";

export default function Bestsellers() {
  const bestsellers = products.filter((p) => p.bestseller);

  return (
    <section id="bestsellers" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Bestsellers
          </h2>
          <p className="mt-3 text-lg text-dark/60">
            Las camisetas más deseadas por los fans. Ediciones limitadas en preventa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestsellers.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg"
            >
              {product.badge && (
                <span className="absolute top-3 left-3 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold text-dark">
                  {product.badge}
                </span>
              )}
              <div className="relative flex items-center justify-center bg-cream-dark p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={216}
                  className="transition group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-burgundy">
                  {product.club} · {product.year}
                </p>
                <h3 className="mt-1 text-lg font-bold text-dark">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-dark/50">
                  Entrega estimada: {product.eta}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-burgundy">
                    {formatPrice(product.price)}
                  </span>
                  <span className="rounded-full bg-burgundy px-4 py-1.5 text-xs font-bold text-white transition group-hover:bg-burgundy-light">
                    Reservar
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#colecciones"
            className="inline-flex items-center gap-2 text-base font-bold text-burgundy transition hover:text-burgundy-light"
          >
            Ver todas las colecciones
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
