import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {

  const goToSchedule = (href: string) => {
    window.location.href = href;
  }

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-yellow-900/30" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-transparent bg-clip-text">
              Soluciones informáticas a la medida de tu negocio.
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Contamos con los mejores talentos en tecnologia para proporcionar la mayor calidad posible en el software.
            </p>
            <div className="mt-10 flex gap-4">
              <button onClick={() => goToSchedule("https://calendly.com/leandro-moren18/let-s-talk")} className="px-8 py-3 bg-gradient-to-r animate-bounce from-yellow-400 to-green-600 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center">
                Charlemos
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="px-8 py-3 border border-yellow-400/30 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-colors">
                Más
              </button>
            </div>
          </div>
          <div className="relative hidden md:block">
            <img 
              src="../../logos/heroe.jpg"
              alt="Digital Finance"
              className="rounded-2xl skew-y-3 shadow-2xl shadow-green-500/20 border border-yellow-400/10"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-green-600 rounded-full blur-2xl opacity-30" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-600 to-yellow-400 rounded-full blur-2xl opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
}