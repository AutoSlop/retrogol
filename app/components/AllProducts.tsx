import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../data/products";

export default function AllProducts() {
  const nonBestsellers = products.filter((p) => !p.bestseller);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Más camisetas en preventa
          </h2>
          <p className="mt-3 text-lg text-dark/60">
            Explora todo nuestro catálogo de ediciones retro.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {nonBestsellers.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.slug}`}
              className="group overflow-hidden rounded-2xl bg-cream shadow-sm transition hover:shadow-md"
            >
              {product.badge && (
                <div className="relative">
                  <span className="absolute top-3 left-3 z-10 rounded-full bg-gold px-3 py-1 text-xs font-bold text-dark">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="flex items-center justify-center bg-cream-dark p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={140}
                  height={168}
                  className="transition group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-burgundy">
                  {product.club} · {product.year}
                </p>
                <h3 className="mt-1 text-sm font-bold text-dark">
                  {product.name}
                </h3>
                <p className="mt-0.5 text-xs text-dark/50">
                  Entrega: {product.eta}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-extrabold text-burgundy">
                    {formatPrice(product.price)}
                  </span>
                  <span className="rounded-full bg-burgundy px-3 py-1 text-xs font-bold text-white transition group-hover:bg-burgundy-light">
                    Ver
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
