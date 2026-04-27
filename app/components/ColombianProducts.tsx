import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../data/products";

export default function ColombianProducts() {
  const colombianProducts = products.filter((p) => p.collection === "colombiano");

  return (
    <section id="colombianos" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-4xl">🇨🇴</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Fútbol Profesional Colombiano
          </h2>
          <p className="mt-3 text-lg text-dark/60">
            Camisetas retro de todos los equipos del fútbol profesional colombiano. Reserva la tuya o regístrate para recibir aviso cuando estén disponibles.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {colombianProducts.map((product) => (
            <Link
              key={product.id}
              href={`/producto/${product.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
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
                  {product.club}
                </p>
                <h3 className="mt-1 text-sm font-bold text-dark">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-base font-extrabold text-burgundy">
                    {formatPrice(product.price)}
                  </span>
                  <span className="rounded-full bg-burgundy px-3 py-1 text-xs font-bold text-white transition group-hover:bg-burgundy-light">
                    Avisarme
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-dark/50">
            ¿No ves tu equipo? También tenemos la{" "}
            <Link href="/producto/atletico-nacional-1989" className="font-bold text-burgundy underline transition hover:text-burgundy-light">
              camiseta retro de Atlético Nacional 1989
            </Link>{" "}
            en nuestro catálogo internacional.
          </p>
        </div>
      </div>
    </section>
  );
}
