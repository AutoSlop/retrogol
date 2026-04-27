"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es la preventa y cómo funciona?",
    answer:
      "La preventa te permite reservar tu camiseta retro antes de que llegue al stock. Pagas al momento de reservar y te la enviamos apenas esté lista, con fecha estimada visible en cada producto. Recibirás actualizaciones por email sobre el estado de tu pedido.",
  },
  {
    question: "¿Cuánto demora la entrega?",
    answer:
      "Cada producto tiene una fecha estimada de entrega (ETA). Generalmente entre 4 y 8 semanas desde tu reserva. Una vez despachado, el envío dentro de Colombia toma 3-5 días hábiles.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos PSE, Nequi, Daviplata, tarjetas de crédito y débito (Visa, Mastercard, American Express). Todos los pagos son procesados de forma segura.",
  },
  {
    question: "¿Puedo cambiar la talla si no me queda?",
    answer:
      "¡Sí! Ofrecemos cambios de talla sin costo adicional dentro de los 15 días posteriores a la recepción. Solo contáctanos y coordinamos el cambio.",
  },
  {
    question: "¿Las camisetas son originales o réplicas?",
    answer:
      "Son réplicas retro de alta calidad, fabricadas con materiales premium (poliéster reciclado 100%). Reproducen fielmente los diseños icónicos originales con un acabado y confort modernos.",
  },
  {
    question: "¿Hacen envíos fuera de Colombia?",
    answer:
      "Por el momento nos enfocamos en envíos dentro de Colombia para garantizar la mejor experiencia. Estamos evaluando envíos internacionales para el futuro. Suscríbete para enterarte cuando lo habilitemos.",
  },
  {
    question: "¿Puedo cancelar mi preventa?",
    answer:
      "Sí, puedes cancelar tu preventa hasta 7 días antes de la fecha estimada de envío y recibir un reembolso completo. Después de ese plazo, te ofrecemos un bono por el valor total para usar en otra camiseta.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-lg text-dark/60">
            Todo lo que necesitas saber antes de reservar.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition hover:bg-cream/50"
              >
                <span className="pr-4 text-base font-bold text-dark">
                  {faq.question}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-burgundy transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="border-t border-cream-dark px-6 pb-4 pt-3">
                  <p className="text-sm leading-relaxed text-dark/70">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
