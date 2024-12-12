import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const beneficios = [
  "Organización",
  "Puntualidad",
  "Soporte 24/7",
  "Feedback"
];

export default function CTASection() {

  const goToSchedule = (href: string) => {
    window.location.href = href;
  }

  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-green-900/20 to-black" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790551116-18e150f248e5?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center mix-blend-overlay" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-green-500 to-yellow-400 text-transparent bg-clip-text mb-6">
            ¿Listo para transformar tu futuro?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Cientos de nuestros clientes están satisfechos con nuestros servicios
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button onClick={() => goToSchedule("https://calendly.com/leandro-moren18/let-s-talk")} className="px-8 py-4 animate-pulse bg-gradient-to-r from-yellow-400 to-green-600 text-black font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center">
              Charlemos!
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="px-8 py-4 border border-yellow-400/30 text-yellow-400 rounded-lg hover:bg-yellow-400/10 transition-colors">
              Trabaja con nosotros
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beneficios.map((beneficio) => (
              <div key={beneficio} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-yellow-400" />
                <span className="text-gray-300 text-sm">{beneficio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}