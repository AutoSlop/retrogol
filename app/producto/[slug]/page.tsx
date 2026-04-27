import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products, formatPrice } from "../../data/products";
import type { Metadata } from "next";
import ProductActions from "./ProductActions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} — RetroGol`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id && (p.club === product.club || p.collection === product.collection))
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <nav className="sticky top-0 z-50 bg-burgundy text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            Retro<span className="text-gold">Gol</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium transition hover:text-gold"
          >
            &larr; Volver al catálogo
          </Link>
        </div>
      </nav>

      <main className="bg-cream">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <nav className="text-sm text-dark/50">
            <Link href="/" className="transition hover:text-burgundy">Inicio</Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{product.name}</span>
          </nav>
        </div>

        {/* Product detail */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Image */}
            <div className="flex items-center justify-center rounded-2xl bg-cream-dark p-10">
              {product.badge && (
                <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-bold text-dark">
                  {product.badge}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={384}
                className="drop-shadow-lg"
              />
            </div>

            {/* Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-burgundy">
                {product.club} · {product.year}
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-dark sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-dark/60">{product.description}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-burgundy">
                  {formatPrice(product.price)}
                </span>
                <span className="rounded-full bg-burgundy/10 px-3 py-1 text-xs font-bold text-burgundy">
                  Preventa
                </span>
              </div>

              <p className="mt-2 text-sm text-dark/50">
                Entrega estimada: <span className="font-semibold text-dark">{product.eta}</span>
              </p>

              <ProductActions />

              {/* Details */}
              <div className="mt-8 space-y-4 border-t border-cream-dark pt-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-dark/70">
                    Historia
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark/60">
                    {product.history}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-dark/70">
                    Material
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark/60">
                    {product.material}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-dark/70">
                    Ajuste
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark/60">
                    {product.fit}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-dark">
              También te puede interesar
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/producto/${p.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="flex items-center justify-center bg-cream-dark p-5">
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={140}
                      height={168}
                      className="transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase text-burgundy">
                      {p.club} · {p.year}
                    </p>
                    <h3 className="mt-1 text-sm font-bold text-dark">{p.name}</h3>
                    <span className="mt-2 block text-base font-extrabold text-burgundy">
                      {formatPrice(p.price)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-dark border-t border-white/10 py-8 text-center text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} RetroGol. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
