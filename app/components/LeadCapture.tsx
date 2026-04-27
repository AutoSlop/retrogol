"use client";

import { useState } from "react";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email && !whatsapp) return;
    // Store locally
    const leads = JSON.parse(localStorage.getItem("retrogol_leads") || "[]");
    leads.push({ email, whatsapp, date: new Date().toISOString() });
    localStorage.setItem("retrogol_leads", JSON.stringify(leads));
    setSubmitted(true);
    setEmail("");
    setWhatsapp("");
  }

  return (
    <section id="reservar" className="bg-dark py-16 text-white sm:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          No te pierdas los próximos drops
        </h2>
        <p className="mt-3 text-lg text-white/70">
          Sé el primero en enterarte de nuevas preventas, reposiciones y ediciones especiales.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl bg-white/10 p-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold">
              <svg className="h-7 w-7 text-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 text-xl font-bold">¡Listo!</h3>
            <p className="mt-2 text-white/70">
              Te avisaremos cuando haya novedades. Mientras tanto, explora nuestros bestsellers.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm font-medium text-gold transition hover:text-gold-light"
            >
              Registrar otro contacto
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-white/10 px-5 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/20 transition focus:ring-gold"
              />
              <input
                type="tel"
                placeholder="Tu WhatsApp (ej: 300 123 4567)"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="flex-1 rounded-full bg-white/10 px-5 py-3 text-white placeholder-white/40 outline-none ring-1 ring-white/20 transition focus:ring-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-gold px-8 py-3.5 font-bold text-dark transition hover:bg-gold-light sm:w-auto"
            >
              Quiero recibir avisos
            </button>
            <p className="text-xs text-white/40">
              Solo enviamos novedades relevantes. Sin spam, lo prometemos.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
