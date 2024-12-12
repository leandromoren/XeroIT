"use client";
import { Mission } from "./about/Mission";
import { History } from "./about/History";
import { Values } from "./about/Values";

export default function Nosotros() {
  return (
    <section id="nosotros" className="relative bg-black py-32">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-radial from-green-900/20 via-black to-black" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-transparent bg-clip-text">
            ¿Quiénes somos?
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            Pioneering the future of finance through innovation, security, and
            trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <Mission />
          <History />
        </div>

        <Values />
    
      </div>
    </section>
  );
}
