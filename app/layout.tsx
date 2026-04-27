import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RetroGol — Camisetas Retro de Fútbol | Colombia",
  description:
    "Camisetas retro de fútbol para fans que no quieren complicarse. Bestsellers icónicos, tallas simples y preventa desde Colombia.",
  keywords: [
    "camisetas retro fútbol",
    "camisetas vintage fútbol",
    "preventa camisetas",
    "Colombia",
    "retro football shirts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
