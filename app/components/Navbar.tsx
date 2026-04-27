"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-burgundy text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Retro<span className="text-gold">Gol</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-sm font-medium md:flex">
          <a href="#bestsellers" className="transition hover:text-gold">
            Bestsellers
          </a>
          <a href="#como-funciona" className="transition hover:text-gold">
            Cómo Funciona
          </a>
          <a href="#tallas" className="transition hover:text-gold">
            Tallas
          </a>
          <a href="#colecciones" className="transition hover:text-gold">
            Colecciones
          </a>
          <a href="#faq" className="transition hover:text-gold">
            FAQ
          </a>
          <a
            href="#reservar"
            className="rounded-full bg-gold px-5 py-2 font-bold text-dark transition hover:bg-gold-light"
          >
            Reservar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/20 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3 text-sm font-medium">
            <a href="#bestsellers" onClick={() => setOpen(false)} className="transition hover:text-gold">Bestsellers</a>
            <a href="#como-funciona" onClick={() => setOpen(false)} className="transition hover:text-gold">Cómo Funciona</a>
            <a href="#tallas" onClick={() => setOpen(false)} className="transition hover:text-gold">Tallas</a>
            <a href="#colecciones" onClick={() => setOpen(false)} className="transition hover:text-gold">Colecciones</a>
            <a href="#faq" onClick={() => setOpen(false)} className="transition hover:text-gold">FAQ</a>
            <a
              href="#reservar"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-gold px-5 py-2 text-center font-bold text-dark transition hover:bg-gold-light"
            >
              Reservar
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
