"use client";

import { useState } from "react";

const sizes = ["S", "M", "L", "XL"];

export default function ProductActions() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [reserved, setReserved] = useState(false);

  function handleReserve() {
    if (!selectedSize) return;
    setReserved(true);
  }

  if (reserved) {
    return (
      <div className="mt-6 rounded-2xl bg-burgundy/5 border border-burgundy/20 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold">
            <svg className="h-5 w-5 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-dark">¡Reserva registrada!</p>
            <p className="text-sm text-dark/60">
              Talla {selectedSize} — Te contactaremos pronto para confirmar tu pedido.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-sm font-bold text-dark">Selecciona tu talla:</p>
      <div className="mt-2 flex gap-3">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl border-2 text-sm font-bold transition ${
              selectedSize === size
                ? "border-burgundy bg-burgundy text-white"
                : "border-cream-dark bg-white text-dark hover:border-burgundy/40"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
      <button
        onClick={handleReserve}
        disabled={!selectedSize}
        className="mt-4 w-full rounded-full bg-gold px-8 py-3.5 font-bold text-dark transition hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        Reservar esta camiseta
      </button>
    </div>
  );
}
